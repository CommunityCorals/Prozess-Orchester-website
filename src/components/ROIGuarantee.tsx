
import React from "react";
import { Target, Shield, ChartLine, Handshake, CheckCircle } from "lucide-react";

export const ROIGuarantee = () => {
  const missionPoints = [
    {
      icon: Target,
      title: "Das 10x Rentabilitäts-Ziel",
      description: "Jedes unserer Projekte wird auf das klare Ziel ausgerichtet, eine 10-fache Rentabilität für Sie zu erreichen."
    },
    {
      icon: Shield,
      title: "Null Risiko",
      description: "Durch unsere kostenlose Potenzialanalyse im Vorfeld investieren Sie nicht blind, sondern auf Basis einer klaren und nachvollziehbaren Prognose."
    },
    {
      icon: ChartLine,
      title: "Messbare Erfolge",
      description: "Wir definieren gemeinsam klare Kennzahlen (KPIs) und machen den Erfolg unserer Arbeit durch detailliertes Tracking für Sie jederzeit transparent."
    },
    {
      icon: Handshake,
      title: "Partnerschaftlicher Erfolg",
      description: "Wir sehen uns als Ihr Partner. Erfolg ist für uns das Ergebnis einer engen Zusammenarbeit, die auf einem bewährten Prozess und gemeinsamen Zielen basiert."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Mission: 10x Rentabilität für unsere Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir setzen auf einen transparenten Prozess, der Ihre Investition nicht nur schnell amortisiert, sondern auf einen nachhaltigen, 10-fachen Erfolg ausrichtet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {missionPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Wie wir unsere Mission umsetzen
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-700">
                    <strong>Kostenlose Potenzialanalyse:</strong> Wir analysieren Ihre Prozesse und quantifizieren gemeinsam das Einsparpotenzial.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-700">
                    <strong>Transparente Erfolgsmessung:</strong> Wir definieren klare Kennzahlen und halten die Fortschritte für Sie nachvollziehbar fest.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-700">
                    <strong>Kontinuierliche Optimierung:</strong> Wir begleiten Sie auch nach der Umsetzung, um den maximalen Nutzen sicherzustellen.
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10x</div>
              <div className="text-lg text-gray-700 mb-4">Rentabilitäts-Ziel</div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900 mb-2">Beispielrechnung:</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div><strong>Investment:</strong> 5.000€</div>
                  <div><strong>Ersparnis:</strong> 50.000€ (10 Jahre)</div>
                  <div><strong>Amortisation:</strong> Bereits nach ca. 12 Monaten</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
