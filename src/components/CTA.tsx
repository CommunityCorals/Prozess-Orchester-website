import { ArrowUpRight, Check, Mail, Phone } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { getAttribution, taskOptions, track } from '@/lib/campaign';

export const CTA = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [task, setTask] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);
  const locked = useRef(false);
  const started = useRef(false);
  const endpoint = import.meta.env.VITE_N8N_WEBHOOK_URL;

  useEffect(() => {
    const listener = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if (taskOptions.some(([id]) => id === value)) { setTask(value); setResult(null); }
    };
    window.addEventListener('po:task', listener);
    return () => window.removeEventListener('po:task', listener);
  }, []);

  function start() {
    if (!started.current) { started.current = true; track('form_start', task); }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('honeypot')) return;
    if (!executeRecaptcha || !endpoint) { setResult('error'); track('form_error', task); return; }
    locked.current = true;
    setBusy(true);
    setResult(null);
    try {
      const recaptchaToken = await executeRecaptcha('contactForm');
      const systems = String(data.get('systems') || '').trim();
      const message = String(data.get('challenge') || '').trim();
      const context = getAttribution();
      const taskLabel = taskOptions.find(([id]) => id === task)?.[1];
      // Include context in the existing field as well, so the existing email workflow retains it.
      const challenge = [
        message,
        taskLabel && 'Aufgabe: ' + taskLabel,
        systems && 'Eingesetzte Programme: ' + systems,
        'Einstieg: ' + context.landingPage,
        context.attribution.utm_campaign && 'Kampagne: ' + context.attribution.utm_campaign,
      ].filter(Boolean).join('\n');
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: AbortSignal.timeout(15000),
        body: JSON.stringify({
          name: String(data.get('name') || '').trim(),
          email: String(data.get('email') || '').trim(),
          company: String(data.get('company') || '').trim(),
          challenge, recaptchaToken, timestamp: new Date().toISOString(), source: 'Prozess Orchester Website',
          selectedTask: task || undefined, systems: systems || undefined, ...context,
        }),
      });
      if (!response.ok) throw new Error('Contact request failed');
      setResult('success');
      track('form_success', task);
      form.reset();
      setTask('');
      started.current = false;
    } catch {
      setResult('error');
      track('form_error', task);
    } finally {
      locked.current = false;
      setBusy(false);
    }
  }

  return <section id="contact-form" className="cp-contact">
    <div className="po-wrap cp-contact-grid">
      <div className="cp-contact-copy">
        <p className="cp-eyebrow">Kostenloser Aufgaben-Check · 20–30 Minuten</p>
        <h2>Welche Aufgabe würden<br className="cp-desktop" /> Sie gern abgeben?</h2>
        <p>Eine wiederkehrende Büroaufgabe oder ein vielseitiger KI-Assistent für Ihr Team: Wir schauen uns Ihre Aufgaben, Programme und benötigten Datenzugriffe an.</p>
        <ul className="cp-checks">
          <li><Check size={18} /> Gemeinsam klären, was sich umsetzen lässt</li>
          <li><Check size={18} /> Einen sinnvollen ersten Schritt finden</li>
          <li><Check size={18} /> Kostenlos und unverbindlich</li>
        </ul>
        <div className="cp-person"><span className="cp-avatar" aria-hidden="true">DD</span><div><strong>Dominique Deutzmann</strong><span>Ihr Ansprechpartner und Entwickler · Krefeld</span></div></div>
        <noscript><p>Für das Formular benötigen Sie JavaScript. Schreiben Sie mir alternativ eine E-Mail oder rufen Sie mich an.</p></noscript><div className="cp-direct"><a href="mailto:info@prozess-orchester.de"><Mail size={16} /> info@prozess-orchester.de</a><a href="tel:+4917645691439"><Phone size={16} /> +49 176 45691 439</a></div>
      </div>
      <form className="cp-form" onSubmit={submit} onFocus={start} aria-label="Kostenlosen Aufgaben-Check anfragen" aria-busy={busy}>
        <h3>Ein Beispiel aus Ihrem Alltag reicht.</h3>
        <p>Ich melde mich persönlich zur Terminabstimmung.</p>
        <input name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
        <div className="cp-form-row">
          <label htmlFor="check-name">Ihr Name <span>*</span><input id="check-name" name="name" autoComplete="name" required maxLength={150} /></label>
          <label htmlFor="check-email">E-Mail-Adresse <span>*</span><input id="check-email" name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        </div>
        <label htmlFor="check-company">Unternehmen <span>optional</span><input id="check-company" name="company" autoComplete="organization" maxLength={150} /></label>
        <label htmlFor="check-task">Wobei wünschen Sie sich Unterstützung? <span>optional</span>
          <select id="check-task" name="task" value={task} onChange={e => { setTask(e.target.value); setResult(null); }}>
            <option value="">Aufgabe auswählen …</option>{taskOptions.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
          </select>
        </label>
        <label htmlFor="check-systems">Welche Programme nutzen Sie? <span>optional</span><input id="check-systems" name="systems" placeholder="Zum Beispiel Outlook, Excel, Ihr ERP …" maxLength={300} /></label>
        <label htmlFor="check-challenge">Was möchten Sie erledigen? <span>optional</span><textarea id="check-challenge" name="challenge" placeholder="Zum Beispiel: Kundenbestellungen aus E-Mails in unsere Warenwirtschaft übernehmen." rows={3} maxLength={4000} /></label>
        <p className="cp-privacy">Ihre Angaben verwende ich zur Bearbeitung Ihrer Anfrage. <a href="/datenschutz">Datenschutz</a> · * Pflichtfelder</p>
        <button className="cp-button" type="submit" disabled={busy || !endpoint}>{busy ? 'Anfrage wird gesendet …' : 'Kostenlosen Aufgaben-Check anfragen'}<ArrowUpRight size={18} aria-hidden="true" /></button>
        {result === 'success' && <div className="cp-form-result is-success" role="status"><Check size={20} /><p><strong>Ihre Anfrage ist angekommen.</strong> Ich melde mich persönlich bei Ihnen, um einen Termin abzustimmen.</p></div>}
        {(result === 'error' || !endpoint) && <div className="cp-form-result" role="alert"><p>Ihre Anfrage konnte nicht bestätigt werden. Ihre Eingaben bleiben erhalten. Bitte versuchen Sie es erneut oder schreiben Sie direkt an <a href="mailto:info@prozess-orchester.de">info@prozess-orchester.de</a>.</p></div>}
      </form>
    </div>
  </section>;
};
