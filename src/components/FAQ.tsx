import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Wie läuft ein Automatisierungsprojekt mit euch ab?",
      answer: "Unser Prozess ist darauf ausgelegt, schnell und effizient Ergebnisse zu liefern, ohne Ihre Zeit übermäßig zu beanspruchen. In der Regel ist ein Projekt innerhalb weniger Wochen abgeschlossen und folgt diesen sechs klaren Schritten:\n\n1. Kostenloses Erstgespräch: Wir lernen uns kennen und besprechen Ihre Ziele.\n2. Potenzialanalyse-Workshop: Wir identifizieren gemeinsam die größten Einsparpotenziale.\n3. Angebot & Beauftragung: Sie erhalten ein transparentes Angebot, das auf dem für Sie realisierbaren Wert basiert.\n4. Umsetzung & Testing: Unser Team entwickelt und testet die maßgeschneiderte Automatisierungslösung.\n5. Schulung & Übergabe: Wir stellen sicher, dass Ihr Team die neuen Prozesse versteht und anwenden kann.\n6. Laufender Support: Wir bleiben auch nach dem Projekt an Ihrer Seite."
    },
    {
      question: "Was kostet eine Automatisierung und wann rechnet sie sich?",
      answer: "Wir haben keine festen Preislisten, denn unsere Preise orientieren sich immer am wichtigsten Faktor: dem Mehrwert, den wir für Sie schaffen. Unser gemeinsames Ziel ist eine 10-fache Rentabilität Ihrer Investition. Auf dieser Basis gestalten wir im Potenzialanalyse-Workshop gemeinsam einen fairen Preis. Unser Ziel ist es dabei immer, dass sich Ihre Investition bereits im ersten Jahr vollständig amortisiert."
    },
    {
      question: "Brauche ich spezielle IT-Kenntnisse oder bestimmte Systeme?",
      answer: "Nein, überhaupt nicht. Sie sind der Experte für Ihre Geschäftsprozesse, wir sind die Experten für die Technologie. Wir nutzen flexible Plattformen, die mit nahezu jeder Datenquelle arbeiten können – egal ob Datenbank, Excel-Tabelle oder E-Mail-Postfach. Unsere Lösungen werden exakt auf Ihre bestehende Systemlandschaft zugeschnitten."
    },
    {
      question: "Was passiert, nachdem die Lösung implementiert ist?",
      answer: "Sie haben die Wahl. Wir bieten zwei Modelle für die Zeit nach dem Projekt an, um Ihren Bedürfnissen gerecht zu werden:\n\nVollständige Übergabe: Wir übergeben Ihnen die entwickelte Lösung zur Gänze. Sie haben die volle Kontrolle und können sie auf Ihrer eigenen Infrastruktur betreiben.\n\nManaged Service (\"Sorglos-Paket\"): Wenn Sie sich um nichts kümmern möchten, betreiben und warten wir die Automatisierung für Sie auf unserer sicheren Infrastruktur. So stellen wir den reibungslosen Betrieb sicher und Sie können sich auf Ihr Kerngeschäft konzentrieren."
    },
    {
      question: "Wie wird der Erfolg unserer Zusammenarbeit gemessen?",
      answer: "Pragmatisch und verständlich. Im ersten Schritt definieren wir gemeinsam die Kosten und Aufwände des aktuellen IST-Prozesses. Nach der Umsetzung vergleichen wir diese mit den deutlich geringeren Kosten des neuen, automatisierten Prozesses. So sehen Sie transparent und ohne komplexe Berichte, dass wir unser gemeinsames Ziel – eine Einsparung in der Größenordnung des 10-fachen Ihrer Investition – erreichen."
    },
    {
      question: "Für wen eignet sich eine Zusammenarbeit (nicht)?",
      answer: "Unsere Dienstleistungen sind für jedes Unternehmen wertvoll, das wiederkehrende administrative Aufgaben hat und das Potenzial zur Effizienzsteigerung nutzen möchte. Die Unternehmensgröße ist dabei weniger entscheidend als das Vorhandensein von Prozessen mit klarem Optimierungspotenzial. Die wichtigste Voraussetzung für eine erfolgreiche Zusammenarbeit ist, dass wir gemeinsam ein signifikantes Einsparpotenzial identifizieren können. Ist dieses nicht gegeben, macht eine Zusammenarbeit weder für Sie noch für uns Sinn."
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600">
            Hier findest du Antworten auf die wichtigsten Fragen zur Zusammenarbeit
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Noch Fragen? Wir helfen gerne weiter.
          </p>
          <a 
            href="mailto:info@prozess-orchester.de" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            info@prozess-orchester.de
          </a>
        </div>
      </div>
    </section>
  );
};
