
import React from "react";
import { Brain, Shield, Gauge, Users, BarChart, Zap } from "lucide-react";

export const KeyFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "KI-gestützte Prozessanalyse",
      description: "Intelligente Algorithmen identifizieren Optimierungspotenziale, die dem menschlichen Auge entgehen."
    },
    {
      icon: Gauge,
      title: "Real-time Dashboards", 
      description: "Behalte alle wichtigen KPIs im Blick und treffe datenbasierte Entscheidungen in Echtzeit."
    },
    {
      icon: Shield,
      title: "Sichere Integration",
      description: "DSGVO-konforme Lösungen, die sich nahtlos in deine bestehende IT-Infrastruktur einfügen."
    },
    {
      icon: Users,
      title: "Team-Empowerment",
      description: "Befreie dein Team von repetitiven Aufgaben und schaffe Raum für kreative, wertschöpfende Arbeit."
    },
    {
      icon: BarChart,
      title: "ROI-Tracking",
      description: "Transparente Erfolgsmessung mit detailliertem Reporting über Kosteneinsparungen und Effizienzgewinne."
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description: "Erste Verbesserungen bereits nach 2-3 Wochen spürbar - ohne lange Projektlaufzeiten."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologie, die für dich arbeitet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moderne Tools und bewährte Methoden für nachhaltige Prozessverbesserungen, 
            die sich direkt auf dein Business auswirken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Bewährte Technologie-Partner
                </h3>
                <p className="text-gray-600 mb-6">
                  Wir arbeiten mit führenden Plattformen und Tools, um dir die beste 
                  Lösung für deine spezifischen Anforderungen zu bieten.
                </p>
                <div className="grid grid-cols-1 gap-4 text-sm text-gray-500">
                  <div>✓ Custom API Entwicklung</div>
                  <div>✓ OpenAI</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-sm text-gray-600 mb-4">Kundenzufriedenheit</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">&lt; 2 Wochen</div>
                <div className="text-sm text-gray-600">Bis zur ersten Implementierung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
