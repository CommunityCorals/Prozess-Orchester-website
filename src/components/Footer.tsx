
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const scrollToContact = () => {
    navigateAndScroll('contact-form');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src="/lovable-uploads/997bf14a-ebda-45e2-86d2-98cde192de8e.png" 
                alt="Prozess-Orchester Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Prozess-Orchester</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Prozess-Orchester ist eine moderne Automatisierungsagentur mit Fokus auf kleine und mittelständische Unternehmen. Wir helfen Inhabern dabei, ihre Geschäftsprozesse zu digitalisieren, zu vereinfachen und mithilfe von intelligenter Automatisierung zukunftsfähig zu machen – nahbar, effizient und mit voller Kostenkontrolle.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@prozess-orchester.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+49 176 45691 439</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Krefeld, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bereiche</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => navigateAndScroll('losung')} className="hover:text-white transition-colors text-left">Lösung</button></li>
              <li><button onClick={() => navigateAndScroll('prozess')} className="hover:text-white transition-colors text-left">Prozess</button></li>
              <li><button onClick={() => navigateAndScroll('uber-uns')} className="hover:text-white transition-colors text-left">Über uns</button></li>
              <li><button onClick={scrollToContact} className="hover:text-white transition-colors text-left">Kontakt</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link to="/agb" className="hover:text-white transition-colors">AGB</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Prozess-Orchester. Alle Rechte vorbehalten. Digitalisierung darf einfach sein.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/datenschutz" className="text-gray-400 hover:text-white transition-colors text-sm">
                Datenschutz
              </Link>
              <Link to="/agb" className="text-gray-400 hover:text-white transition-colors text-sm">
                AGB
              </Link>
              <Link to="/impressum" className="text-gray-400 hover:text-white transition-colors text-sm">
                Impressum
              </Link>
              <div className="flex space-x-3 ml-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
