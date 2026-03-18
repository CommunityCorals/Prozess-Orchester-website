import { TrendingUp, Zap, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FactsSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const facts = [
    {
      icon: Clock,
      number: "#1",
      title: "Sie bezahlen Ihre Mitarbeiter für unproduktive Arbeit.",
      description: "Studien zeigen: Bis zu 30% der Arbeitszeit fließen in repetitive Aufgaben. Kosten, die Sie mit intelligenter Automatisierung eliminieren können."
    },
    {
      icon: TrendingUp,
      number: "#2", 
      title: "Die Revolution findet statt – mit oder ohne Sie.",
      description: "KI ist keine Zukunftsmusik. Es ist die neue industrielle Revolution – und Ihre Konkurrenz ist bereits mittendrin."
    },
    {
      icon: Zap,
      number: "#3",
      title: "KI-Potential ist enorm und wird unterschätzt!",
      description: "Mit jedem Tag ohne KI-Automatisierung wächst der Abstand zu Ihren Wettbewerbern. Sie verlieren nicht nur Geld – Sie verlieren den Anschluss."
    },
    {
      icon: Target,
      number: "#4",
      title: "Aus KI-Potenzial wird Ihr Wettbewerbsvorteil.",
      description: "Prozess-Orchester ist Ihr strategischer Partner. Wir identifizieren und automatisieren Ihre größten Kostenfresser – schnell, pragmatisch und mit messbarem ROI."
    }
  ];

  return (
    <section id="facts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <fact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  Fakt {fact.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {fact.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Wo liegt Ihr größtes Automatisierungs-Potenzial?
            </h3>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Jetzt kostenloses Gespräch vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
