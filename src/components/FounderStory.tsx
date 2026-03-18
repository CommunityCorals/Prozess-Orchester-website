import { Quote, Lightbulb, Target, Heart } from "lucide-react";
export const FounderStory = () => {
  return <section id="uber-uns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Von Inhaber zu Inhaber
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ich bin selber Inhaber – und weiss, wie sich volle To-do-Listen, gewachsene Strukturen und vernachlässigte Prozesse anfühlen.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <Quote className="w-8 h-8 text-blue-600 mb-4" />
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
              "Mit unserer Erfahrung im E-Commerce, Prozessmanagement und vor allem im Verbesserungswesen helfen wir Ihnen, Ihre Abläufe strukturiert und zukunftssicher zu verbessern. Gemeinsam entwickeln wir Lösungen, die nicht nur technisch funktionieren, sondern Ihr Geschäft wirklich voranbringen – Schritt für Schritt, auf Augenhöhe"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                D
              </div>
              <div className="ml-3">
                <div className="font-semibold text-gray-900">Dominique Deutzmann</div>
                <div className="text-sm text-gray-600">Inhaber</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Echte Unternehmenserfahrung
                </h3>
                <p className="text-gray-600">
                  Background in E-Commerce, Logistik und Prozessmanagement. Wir kennen die 
                  Herausforderungen von Inhabern aus eigener Erfahrung.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fachlich fundiert – aber ohne Fachchinesisch.
                </h3>
                <p className="text-gray-600">
                  Wir sprechen Unternehmersprache, nicht nur Technik. Konkrete Lösungen 
                  statt theoretischer Konzepte.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Auf Augenhöhe
                </h3>
                <p className="text-gray-600">
                  Sie arbeiten direkt mit uns – echte Partnerschaft statt anonymer 
                  Beratung aus dem Elfenbeinturm.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-200">optimierte Prozesse</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5M+</div>
              <div className="text-blue-200">Kosteneinsparungen für Kunden</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{'>'}10 Jahre</div>
              <div className="text-blue-200">Erfahrung in Prozessoptimierung</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};