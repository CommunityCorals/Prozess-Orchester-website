import { Target, Shield, ChartLine, Handshake, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const ROIGuarantee = () => {
  const missionPoints = [
    {
      icon: Target,
      title: "Das 10x Rentabilitäts-Ziel",
      description: "Jedes unserer Projekte wird auf das klare Ziel ausgerichtet, eine 10-fache Rentabilität für Sie zu erreichen."
    },
    {
      icon: Shield,
      title: "Null Risiko",
      description: "Durch unsere kostenlose Potenzialanalyse im Vorfeld investieren Sie nicht blind, sondern auf Basis einer klaren und nachvollziehbaren Prognose."
    },
    {
      icon: ChartLine,
      title: "Messbare Erfolge",
      description: "Wir definieren gemeinsam klare Kennzahlen (KPIs) und machen den Erfolg unserer Arbeit durch detailliertes Tracking für Sie jederzeit transparent."
    },
    {
      icon: Handshake,
      title: "Partnerschaftlicher Erfolg",
      description: "Wir sehen uns als Ihr Partner. Erfolg ist für uns das Ergebnis einer engen Zusammenarbeit, die auf einem bewährten Prozess und gemeinsamen Zielen basiert."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <span className="eyebrow mb-4">Unser Vorgehen</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Unsere Mission: 10x Rentabilität für unsere Kunden
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Wir setzen auf einen transparenten Prozess, der Ihre Investition nicht nur schnell amortisiert, sondern auf einen nachhaltigen, 10-fachen Erfolg ausrichtet.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {missionPoints.map((point, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-emerald-200 hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 mb-5">
                  <point.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2.5">
                  {point.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-soft">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
                  Wie wir unsere Mission umsetzen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-[15px] leading-relaxed">
                      <strong className="font-semibold text-slate-900">Kostenlose Potenzialanalyse:</strong> Wir analysieren Ihre Prozesse und quantifizieren gemeinsam das Einsparpotenzial.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-[15px] leading-relaxed">
                      <strong className="font-semibold text-slate-900">Transparente Erfolgsmessung:</strong> Wir definieren klare Kennzahlen und halten die Fortschritte für Sie nachvollziehbar fest.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-[15px] leading-relaxed">
                      <strong className="font-semibold text-slate-900">Kontinuierliche Optimierung:</strong> Wir begleiten Sie auch nach der Umsetzung, um den maximalen Nutzen sicherzustellen.
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold tracking-tight text-blue-600 mb-1">10×</div>
                  <div className="text-sm font-medium text-slate-600">Rentabilitäts-Ziel</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-semibold text-slate-900 mb-4">Beispielrechnung:</div>
                  <dl className="space-y-3 text-sm">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <dt className="text-slate-500">Investment</dt>
                      <dd className="font-semibold text-slate-900">5.000 €</dd>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <dt className="text-slate-500">Ersparnis</dt>
                      <dd className="font-semibold text-slate-900">50.000 € <span className="font-normal text-slate-400">(10 Jahre)</span></dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Amortisation</dt>
                      <dd className="font-semibold text-emerald-600">nach ca. 12 Monaten</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
