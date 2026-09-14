import { useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export function ContactSection() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const endpoint = import.meta.env.VITE_N8N_WEBHOOK_URL;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('honeypot')) return;
    if (!endpoint || !executeRecaptcha) {
      setResult({ success: false, message: 'Das Formular ist momentan nicht verfügbar. Schreiben Sie uns bitte direkt an info@prozess-orchester.de.' });
      return;
    }
    setBusy(true);
    setResult(null);
    try {
      const recaptchaToken = await executeRecaptcha('contactForm');
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, signal: AbortSignal.timeout(15000), body: JSON.stringify({ name: data.get('name'), email: data.get('email'), company: data.get('company'), challenge: data.get('challenge'), recaptchaToken, timestamp: new Date().toISOString(), source: 'Prozess Orchester Website' }) });
      if (!response.ok) throw new Error('Request failed');
      setResult({ success: true, message: 'Vielen Dank für Ihre Anfrage. Wir melden uns bei Ihnen, um die nächsten Schritte zu besprechen.' });
      form.reset();
    } catch {
      setResult({ success: false, message: 'Ihre Anfrage konnte nicht bestätigt werden. Schreiben Sie uns bitte direkt an info@prozess-orchester.de.' });
    } finally { setBusy(false); }
  }

  return <section className="po-contact-section" id="contact-form"><div className="po-wrap po-section"><div className="po-section-label"><span>Kontakt</span><span>Der erste Schritt</span><i aria-hidden="true" /></div><div className="po-contact-grid"><div><h2>Lassen Sie uns Ihre<br /><span>Prozesse orchestrieren.</span></h2><p>Erzählen Sie uns von Ihrer Idee oder einem Ablauf, der Sie Zeit kostet. Im unverbindlichen Erstgespräch finden wir heraus, wo wir ansetzen können.</p><a className="po-contact-mail" href="mailto:info@prozess-orchester.de">info@prozess-orchester.de <ArrowUpRight size={22} /></a><a className="po-contact-phone" href="tel:+4917645691439">+49 176 45691 439</a><div className="po-consultation"><h3>Was Sie im Erstgespräch erwartet:</h3><ul>{["Ehrliche Einschätzung Ihrer aktuellen Prozesse", "Konkrete Verbesserungsvorschläge ohne Technosprech", "Klare Roadmap für die ersten Schritte", "Kein Verkaufsgespräch – nur echte Beratung"].map(item => <li key={item}>{item}</li>)}</ul></div><div className="po-contact-note"><span>Persönlich. Verständlich. Auf Augenhöhe.</span><ArrowRight size={20} /></div></div><form className="po-contact-form" onSubmit={submit} aria-label="Projektanfrage">
    <div className="po-form-heading"><h3>Ihr Projekt beginnt hier.</h3><p>30 Minuten, die Ihr Business entlasten können.</p></div>
    <div className="po-form-row"><label htmlFor="contact-name">Ihr Name <span>*</span><input id="contact-name" name="name" autoComplete="name" required placeholder="Vor- und Nachname" /></label><label htmlFor="contact-company">Unternehmen <span>optional</span><input id="contact-company" name="company" autoComplete="organization" placeholder="Ihr Unternehmen" /></label></div>
    <label htmlFor="contact-email">E-Mail-Adresse <span>*</span><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="name@unternehmen.de" /></label>
    <label htmlFor="contact-challenge">Was möchten Sie verbessern?<textarea id="contact-challenge" name="challenge" rows={3} placeholder="Ihre Idee, Ihre Herausforderung oder einfach eine Frage …" /></label>
    <input name="honeypot" aria-hidden="true" tabIndex={-1} autoComplete="off" className="po-honeypot" />
    <p className="po-form-privacy">Ihre Angaben nutzen wir zur Bearbeitung Ihrer Anfrage. Mehr dazu in unserer <a href="/datenschutz">Datenschutzerklärung</a>.</p>
    {!endpoint && <p className="po-form-message">Bitte nutzen Sie aktuell den <a href="mailto:info@prozess-orchester.de">direkten E-Mail-Kontakt</a>. Das Anfrageformular ist noch nicht verfügbar.</p>}
    <button className="po-button" type="submit" disabled={busy || !endpoint}>{busy ? 'Wird gesendet …' : 'Anfrage senden'}<ArrowUpRight size={19} /></button>
    {result && <p role={result.success ? 'status' : 'alert'} className={`po-form-message ${result.success ? 'is-success' : ''}`}>{result.message}</p>}
  </form></div></div></section>;
}
