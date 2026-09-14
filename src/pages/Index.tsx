
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { HomeHero, Services, ProcessExample } from '@/components/HomeExperience';
import { FactsSection } from '@/components/FactsSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ProcessTransformation } from '@/components/ProcessTransformation';
import { FounderStory } from '@/components/FounderStory';
import { ROIGuarantee } from '@/components/ROIGuarantee';
import { FAQ } from '@/components/FAQ';
import { WorkingMethod } from '@/components/WorkingMethod';
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
      <div className="po-restored po-original-facts"><FactsSection /></div>
      <div className="po-restored po-original-solution"><SolutionSection /></div>
      <Services />
      <div className="po-restored"><ProcessTransformation /></div>
      <ProcessExample />
      <div className="po-restored po-original-founder"><FounderStory /></div>
      <div className="po-restored po-original-mission"><ROIGuarantee /></div>
      <WorkingMethod />
      <div className="po-restored po-original-faq"><FAQ /></div>
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY} scriptProps={{ async: true, defer: true }}>
        <ContactSection />
      </GoogleReCaptchaProvider>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
