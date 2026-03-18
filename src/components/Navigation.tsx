
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateAndScroll = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    navigateAndScroll('contact-form');
  };

  const scrollToFacts = () => {
    navigateAndScroll('facts');
  };

  const scrollToMission = () => {
    navigateAndScroll('mission');
  };

  const scrollToAbout = () => {
    navigateAndScroll('uber-uns');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/997bf14a-ebda-45e2-86d2-98cde192de8e.png" 
              alt="Prozess-Orchester Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">Prozess-Orchester</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToFacts}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Fakten
            </button>
            <button 
              onClick={scrollToMission}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Vorgehen
            </button>
            <button 
              onClick={scrollToAbout}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Über uns
            </button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={scrollToContact}
            >
              Kostenloses Gespräch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button
                onClick={scrollToFacts}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Fakten
              </button>
              <button
                onClick={scrollToMission}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Vorgehen
              </button>
              <button
                onClick={scrollToAbout}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Über uns
              </button>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={scrollToContact}
                >
                  Kostenloses Gespräch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
