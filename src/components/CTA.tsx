
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

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

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lassen Sie uns Ihre Prozesse orchestrieren
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Buchen Sie ein unverbindliches Erstgespräch – und finden Sie heraus, wo Automatisierung 
            für Sie sofort spürbare Entlastung bringt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Was Sie im Erstgespräch erwartet:
            </h3>
            <div className="space-y-4">
              {[
                "Ehrliche Einschätzung Ihrer aktuellen Prozesse",
                "Konkrete Verbesserungsvorschläge ohne Technosprech",
                "Klare Roadmap für die ersten Schritte",
                "Kein Verkaufsgespräch – nur echte Beratung"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Jetzt Termin vereinbaren
              </h3>
              <p className="text-gray-600">
                30 Minuten, die Ihr Business entlasten können
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail Adresse"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Unternehmen"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="challenge"
                  placeholder="Beschreiben Sie kurz Ihre größte Prozess-Herausforderung"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg"
              >
                {isLoading ? 'Wird gesendet...' : 'Jetzt Termin vereinbaren'}
                {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Digitalisierung darf einfach sein. Wir respektieren Ihre Privatsphäre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
