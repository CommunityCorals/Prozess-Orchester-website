
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export const Results = () => {
  return (
    <section id="ergebnisse" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Messbare Erfolge unserer Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Implementierung bis zur nachhaltigen Optimierung - 
            hier siehst du, was möglich ist.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-sm text-gray-600">Durchschnittliche Effizienzsteigerung</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">18h</div>
            <div className="text-sm text-gray-600">Eingesparte Zeit pro Woche</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-2">90 Tage</div>
            <div className="text-sm text-gray-600">Bis zur vollständigen Umsetzung</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600 mb-2">3.2x</div>
            <div className="text-sm text-gray-600">ROI im ersten Jahr</div>
          </div>
        </div>
      </div>
    </section>
  );
};
