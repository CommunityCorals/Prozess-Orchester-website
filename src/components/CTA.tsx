import { ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Reveal } from "@/components/Reveal";

export const CTA = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    honeypot: '' // Unsichtbares Spam-Schutz-Feld
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      toast({
        title: "Fehler",
        description: "reCAPTCHA nicht bereit. Bitte kurz warten und erneut versuchen.",
        variant: "destructive",
      });
      return;
    }

    // Honeypot-Validation für Spam-Schutz
    if (formData.honeypot) {
      console.log('Honeypot-Feld ausgefüllt, wahrscheinlich Spam.');
      return;
    }

    setIsLoading(true);

    try {
      // reCAPTCHA-Token von Google abrufen
      const token = await executeRecaptcha('contactForm');
      console.log('reCAPTCHA Token erhalten:', token);

      const webhookData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        challenge: formData.challenge,
        recaptchaToken: token,
        timestamp: new Date().toISOString(),
        source: 'Prozess Orchester Website'
      };

      console.log('Sende Daten an Webhook:', webhookData);

      const response = await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(webhookData),
      });

      console.log('Webhook Response Status:', response.status);
      console.log('Webhook Response Headers:', response.headers);

      // Da n8n Webhooks oft keinen Response Body haben, prüfen wir nur den Status
      if (response.ok || response.status === 200) {
        toast({
          title: "Nachricht gesendet!",
          description: "Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.",
        });

        // Formular zurücksetzen
        setFormData({
          name: '',
          email: '',
          company: '',
          challenge: '',
          honeypot: ''
        });
      } else {
        console.error('Webhook Response Error:', response.status, response.statusText);
        throw new Error(`Webhook returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('Fehler beim Senden an Webhook:', error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-[15px] transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent";

  return (
    <section id="contact-form" className="py-24 dark-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow mb-4 !text-blue-400 before:!bg-blue-400">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Lassen Sie uns Ihre Prozesse orchestrieren
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Beschreiben Sie uns Ihre Idee oder eine Herausforderung aus Ihrem Arbeitsalltag.
            Wir melden uns bei Ihnen, um gemeinsam die nächsten Schritte zu klären.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
              <h3 className="text-xl font-semibold tracking-tight text-white mb-7">
                So beginnt unsere Zusammenarbeit:
              </h3>
              <div className="space-y-5">
                {[
                  "Sie schildern Ihre Idee, Frage oder Herausforderung",
                  "Wir melden uns persönlich bei Ihnen zurück",
                  "Gemeinsam klären wir Ihren Bedarf und mögliche nächste Schritte",
                  "Ihre Kontaktaufnahme ist unverbindlich"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-[15px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl bg-white p-8 md:p-10 shadow-lift">
              <div className="mb-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 mb-4">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">
                  Nehmen Sie Kontakt auf
                </h3>
                <p className="text-slate-500 text-sm">
                  Ein paar Sätze reichen für den Anfang.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Honeypot-Feld für Spam-Schutz - unsichtbar für normale Nutzer */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail Adresse"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={inputClasses}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Unternehmen"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
                <textarea
                  name="challenge"
                  placeholder="Beschreiben Sie kurz Ihre größte Prozess-Herausforderung"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={3}
                  className={inputClasses}
                ></textarea>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 text-base font-medium shadow-soft"
                >
                  {isLoading ? 'Wird gesendet...' : 'Anfrage senden'}
                  {!isLoading && <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>
              </form>

              <p className="text-xs text-slate-400 text-center mt-5">
                Digitalisierung darf einfach sein. Wir respektieren Ihre Privatsphäre.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
