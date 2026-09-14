import { CheckCircle2, Zap, Target, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Pragmatische Analyse",
      description: "Wir analysieren, verstehen und automatisieren Ihre Abläufe – pragmatisch, datenbasiert und verständlich erklärt."
    },
    {
      icon: Target,
      title: "Schlanke Lösungen",
      description: "Mit modernen Tools wie Agentic AI helfen wir Ihnen, den Arbeitsalltag spürbar zu entlasten."
    },
    {
      icon: Heart,
      title: "Enge Zusammenarbeit",
      description: "Persönlicher Ansprechpartner, fachlich fundiert – aber ohne Fachchinesisch – wir sprechen Unternehmersprache."
    }
  ];

  return (
    <section id="losung" className="py-24 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <span className="eyebrow mb-4">Unsere Lösung</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Prozess-Orchester bringt <span className="text-blue-600">Fortschritt</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Wir analysieren, verstehen und automatisieren Ihre Abläufe – pragmatisch,
            datenbasiert und verständlich erklärt.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          <Reveal>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-8">
              Warum Prozess-Orchester anders ist
            </h3>
            <div className="space-y-7">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-soft">
                    <benefit.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1.5">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-soft">
              <h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">
                Unsere 3 Leistungsversprechen:
              </h4>
              <div className="space-y-5">
                {[
                  "Automatisierung, die Ihr Business wirklich braucht – nicht mehr, nicht weniger",
                  "Persönlicher Ansprechpartner, fachlich fundiert – aber ohne Fachchinesisch",
                  "Schnelle, sichtbare Resultate – statt Präsentationen ohne Umsetzung"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-[15px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 px-8 py-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-2">
              Mit schlanken Lösungen und enger Zusammenarbeit
            </h3>
            <p className="text-slate-600">
              Spürbare Entlastung im Arbeitsalltag – Verbesserungen die Freude bereiten
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
