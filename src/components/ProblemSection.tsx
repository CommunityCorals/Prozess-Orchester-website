
import { Clock, DollarSign, Users, AlertCircle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Zeit fehlt für Optimierung",
      description: "Du weißt, dass deine Prozesse effizienter laufen könnten, aber für die Umsetzung fehlt einfach die Zeit."
    },
    {
      icon: DollarSign,
      title: "Große Beratungen zu teuer",
      description: "Etablierte Beratungen sind zu kostspielig oder zu komplex für dein Unternehmen."
    },
    {
      icon: Users,
      title: "Fehlendes Know-how",
      description: "Dir fehlen die technischen Ressourcen oder das Wissen, um den nächsten Digitalisierungsschritt zu gehen."
    },
    {
      icon: AlertCircle,
      title: "Tools ohne Strategie",
      description: "Neue Tools zu kaufen ist einfach – aber ohne durchdachte Strategie bringen sie wenig."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Viele Inhaber wissen: Ihre Prozesse könnten effizienter laufen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aber oft fehlt es an Zeit, Know-how oder technischen Ressourcen, um den nächsten 
            Schritt zu gehen. Große Beratungen sind zu teuer oder zu komplex – und Tools ohne 
            Strategie bringen wenig.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Das Ergebnis? Frustration statt Fortschritt.
            </h3>
            <p className="text-lg text-gray-600">
              Während andere automatisieren und entlastet werden, bleibst du in ineffizienten 
              Abläufen gefangen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
