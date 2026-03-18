
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Hero } from "@/components/Hero";
import { FactsSection } from "@/components/FactsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ProcessTransformation } from "@/components/ProcessTransformation";
import { ROIGuarantee } from "@/components/ROIGuarantee";
import { FounderStory } from "@/components/FounderStory";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Google reCAPTCHA Website-Schlüssel aus Umgebungsvariable
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Ld-OF4rAAAADRr-1tk6h93qylYk2fyECuaBuf9';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FactsSection />
      <SolutionSection />
      <ProcessTransformation />
      <ROIGuarantee />
      <FounderStory />
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
        <CTA />
      </GoogleReCaptchaProvider>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
