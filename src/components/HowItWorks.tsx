
import { Users, ArrowRight, Zap, Brain, Rocket, RotateCcw } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="prozess" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            So transformieren wir Ihre Prozesse
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agent-Integration im Detail
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Intelligente Agenten werden nahtlos in bestehende Prozessschritte integriert
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* Input */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Input</h3>
              <p className="text-gray-600">Daten/Anfrage</p>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />

            {/* KI-Agent */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg mb-2">
                KI-Agent
              </h3>
              <p className="text-gray-600">Intelligente Verarbeitung</p>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />

            {/* Output */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Output</h3>
              <p className="text-gray-600">Automatisiert</p>
            </div>
          </div>
        </div>

        {/* Drei Säulen Bereich */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Intelligente Entscheidungen */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Intelligente Entscheidungen
            </h3>
            <p className="text-gray-600">
              Unsere KI-Agenten analysieren komplexe Daten und treffen präzise Entscheidungen in Echtzeit - schneller und genauer als jeder Mensch.
            </p>
          </div>

          {/* Blitzschnelle Ausführung */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Blitzschnelle Ausführung
            </h3>
            <p className="text-gray-600">
              Was früher Stunden dauerte, erledigen unsere Systeme in Sekunden. Ihre Prozesse werden dramatisch beschleunigt.
            </p>
          </div>

          {/* Selbstlernende Systeme */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <RotateCcw className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Selbstlernende Systeme
            </h3>
            <p className="text-gray-600">
              Unsere KI-Agenten lernen kontinuierlich dazu und optimieren sich selbst - für immer bessere Ergebnisse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
