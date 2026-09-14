import { TrendingUp, Zap, Clock, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const FactsSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const facts = [
    {
      icon: Clock,
      number: "01",
      title: "Sie bezahlen Ihre Mitarbeiter für unproduktive Arbeit.",
      description: "Studien zeigen: Bis zu 30% der Arbeitszeit fließen in repetitive Aufgaben. Kosten, die Sie mit intelligenter Automatisierung eliminieren können."
    },
    {
      icon: TrendingUp,
      number: "02",
      title: "Die Revolution findet statt – mit oder ohne Sie.",
      description: "KI ist keine Zukunftsmusik. Es ist die neue industrielle Revolution – und Ihre Konkurrenz ist bereits mittendrin."
    },
    {
      icon: Zap,
      number: "03",
      title: "KI-Potential ist enorm und wird unterschätzt!",
      description: "Mit jedem Tag ohne KI-Automatisierung wächst der Abstand zu Ihren Wettbewerbern. Sie verlieren nicht nur Geld – Sie verlieren den Anschluss."
    },
    {
      icon: Target,
      number: "04",
      title: "Aus KI-Potenzial wird Ihr Wettbewerbsvorteil.",
      description: "Prozess-Orchester ist Ihr strategischer Partner. Wir identifizieren und automatisieren Ihre größten Kostenfresser – schnell, pragmatisch und mit messbarem ROI."
    }
  ];

  return (
    <section id="facts" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow mb-4">Warum jetzt</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Vier Fakten, die jeder Inhaber kennen sollte
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {facts.map((fact, index) => (
            <Reveal key={index} delay={(index % 2) * 100}>
              <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-lift">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-600">
                    <fact.icon className="w-5 h-5 text-blue-600 transition-colors group-hover:text-white" />
                  </div>
                  <span className="text-4xl font-bold tracking-tight text-slate-100 select-none">
                    {fact.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">
                  {fact.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {fact.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="dark-canvas rounded-2xl px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="text-2xl md:text-[1.7rem] font-bold tracking-tight text-white text-center md:text-left max-w-xl">
              Wo liegt Ihr größtes Automatisierungs-Potenzial?
            </h3>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-lg px-7 h-12 text-base font-medium shrink-0"
            >
              Jetzt kostenloses Gespräch vereinbaren
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
