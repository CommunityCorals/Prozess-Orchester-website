
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { HomeHero, Services, ProcessExample, AboutAndApproach, Questions } from '@/components/HomeExperience';
import { ContactSection } from '@/components/ContactSection';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Google reCAPTCHA Website-Schlüssel aus Umgebungsvariable
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Ld-OF4rAAAADRr-1tk6h93qylYk2fyECuaBuf9';

const Index = () => {
  return (
    <div className="po-home">
      <a className="po-skip-link" href="#main">Zum Inhalt</a>
      <Navigation />
      <main id="main">
      <HomeHero />
      <Services />
      <ProcessExample />
      <AboutAndApproach />
      <Questions />
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY} scriptProps={{ async: true, defer: true }}>
        <ContactSection />
      </GoogleReCaptchaProvider>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
