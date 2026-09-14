import { Quote, Lightbulb, Target, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const FounderStory = () => {
  const points = [
    {
      icon: Lightbulb,
      chip: "bg-blue-50",
      color: "text-blue-600",
      title: "Echte Unternehmenserfahrung",
      description: "Background in E-Commerce, Logistik und Prozessmanagement. Wir kennen die Herausforderungen von Inhabern aus eigener Erfahrung."
    },
    {
      icon: Target,
      chip: "bg-violet-50",
      color: "text-violet-600",
      title: "Fachlich fundiert – aber ohne Fachchinesisch.",
      description: "Wir sprechen Unternehmersprache, nicht nur Technik. Konkrete Lösungen statt theoretischer Konzepte."
    },
    {
      icon: Heart,
      chip: "bg-emerald-50",
      color: "text-emerald-600",
      title: "Auf Augenhöhe",
      description: "Sie arbeiten direkt mit uns – echte Partnerschaft statt anonymer Beratung aus dem Elfenbeinturm."
    }
  ];

  return (
    <section id="uber-uns" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <span className="eyebrow mb-4">Über uns</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Von Inhaber zu Inhaber
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ich bin selber Inhaber – und weiss, wie sich volle To-do-Listen, gewachsene Strukturen und vernachlässigte Prozesse anfühlen.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <Reveal>
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
              <Quote className="w-8 h-8 text-blue-600/30 mb-5" />
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-8">
                "Mit unserer Erfahrung im E-Commerce, Prozessmanagement und vor allem im Verbesserungswesen helfen wir Ihnen, Ihre Abläufe strukturiert und zukunftssicher zu verbessern. Gemeinsam entwickeln wir Lösungen, die nicht nur technisch funktionieren, sondern Ihr Geschäft wirklich voranbringen – Schritt für Schritt, auf Augenhöhe"
              </blockquote>
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white font-semibold">
                  D
                </div>
                <div className="ml-3.5">
                  <div className="font-semibold text-slate-900">Dominique Deutzmann</div>
                  <div className="text-sm text-slate-500">Inhaber</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${point.chip}`}>
                    <point.icon className={`w-5 h-5 ${point.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="dark-canvas rounded-2xl px-8 py-12 md:p-14">
            <div className="grid sm:grid-cols-3 gap-10 text-center">
              <div>
                <div className="text-4xl font-bold tracking-tight text-white mb-2">100+</div>
                <div className="text-sm text-slate-400">optimierte Prozesse</div>
              </div>
              <div>
                <div className="text-4xl font-bold tracking-tight text-white mb-2">5M+</div>
                <div className="text-sm text-slate-400">Kosteneinsparungen für Kunden</div>
              </div>
              <div>
                <div className="text-4xl font-bold tracking-tight text-white mb-2">{'>'}10 Jahre</div>
                <div className="text-sm text-slate-400">Erfahrung in Prozessoptimierung</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
