import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Prozessautomatisierung
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> für KMU</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Nicht kompliziert. Sondern konkret.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Prozess-Orchester hilft Inhabern kleiner und mittlerer Unternehmen, ihre digitalen 
              Geschäftsprozesse mit Automatisierung und KI effizient, schlank und intelligent zu gestalten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                onClick={scrollToContact}
              >
                Unverbindliches Erstgespräch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50"
                onClick={scrollToFAQ}
              >
                <Play className="mr-2 w-5 h-5" />
                Wie es funktioniert
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Kostenlose Erstberatung
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Fachlich fundiert – aber ohne Fachchinesisch.
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                  <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                  <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
