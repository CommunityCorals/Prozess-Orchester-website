
import { CheckCircle, Zap, Target, Heart } from "lucide-react";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Pragmatische Analyse",
      description: "Wir analysieren, verstehen und automatisieren Ihre Abläufe – pragmatisch, datenbasiert und verständlich erklärt."
    },
    {
      icon: Target,
      title: "Schlanke Lösungen",
      description: "Mit modernen Tools wie Agentic AI helfen wir Ihnen, den Arbeitsalltag spürbar zu entlasten."
    },
    {
      icon: Heart,
      title: "Enge Zusammenarbeit",
      description: "Persönlicher Ansprechpartner, fachlich fundiert – aber ohne Fachchinesisch – wir sprechen Unternehmersprache."
    }
  ];

  return (
    <section id="losung" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prozess-Orchester bringt 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Fortschritt</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir analysieren, verstehen und automatisieren Ihre Abläufe – pragmatisch, 
            datenbasiert und verständlich erklärt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Warum Prozess-Orchester anders ist
            </h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Unsere 3 Leistungsversprechen:
            </h4>
            <div className="space-y-4">
              {[
                "Automatisierung, die Ihr Business wirklich braucht – nicht mehr, nicht weniger",
                "Persönlicher Ansprechpartner, fachlich fundiert – aber ohne Fachchinesisch",
                "Schnelle, sichtbare Resultate – statt Präsentationen ohne Umsetzung"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Mit schlanken Lösungen und enger Zusammenarbeit
          </h3>
          <p className="text-lg opacity-90">Spürbare Entlastung im Arbeitsalltag – Verbesserungen die Freude bereiten</p>
        </div>
      </div>
    </section>
  );
};
