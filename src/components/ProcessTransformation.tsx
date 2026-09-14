import { User, CheckCircle2, Lightbulb, Zap, RefreshCw, ArrowRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const ProcessTransformation = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-2xl mb-16">
          <span className="eyebrow mb-4">Vorher / Nachher</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            So transformieren wir Ihre Prozesse
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Durch die nahtlose Integration von KI-Agenten werden Ihre Workflows nicht nur schneller, sondern intelligenter.
          </p>
        </Reveal>

        {/* Main Transformation Flow */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-10 lg:gap-8">

          {/* Before: Manueller Workflow */}
          <Reveal className="w-full lg:w-[34%]">
            <div className="mb-5 flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Manueller Workflow</span>
              <span className="h-px flex-1 bg-slate-200"></span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200">
                  <User className="w-4.5 h-4.5 text-slate-400" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-600">Manuelle Datenerfassung</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Fehlerquellen, Engpässe, hohe Kosten</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200">
                  <CheckCircle2 className="text-slate-400" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-600">Zeitaufwendige Prüfung</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Starr, langsam, Skalierungsprobleme</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Transformation: KI-Agent */}
          <Reveal delay={100} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 shrink-0">
            <ArrowDown className="w-6 h-6 text-slate-300 lg:hidden" />
            <ArrowRight className="w-8 h-8 text-slate-300 hidden lg:block" />

            <div className="dark-canvas rounded-2xl px-8 py-6 text-center shadow-lift ring-1 ring-blue-500/20">
              <div className="flex items-center justify-center gap-2.5 mb-1">
                <svg width="26" height="13" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#c084fc", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#logo-gradient)" d="M9.8,46.9c26.3-25.9,81.6-38.1,127.3-27.6c22.8,5.2,42.7,18.2,50,29.9c-21-11.3-51.5-17.5-81.2-12.7C68.8,42.9,35.2,59.2,9.8,46.9z" />
                  <path fill="url(#logo-gradient)" d="M190.2,53.1c-26.3,25.9-81.6,38.1-127.3,27.6c-22.8-5.2-42.7-18.2-50-29.9c21,11.3,51.5,17.5,81.2,12.7C131.2,57.1,164.8,40.8,190.2,53.1z" />
                </svg>
                <span className="text-lg font-semibold tracking-tight text-white">KI-Agent</span>
              </div>
              <p className="text-xs text-slate-400">Intelligente Verarbeitung</p>
            </div>

            <ArrowRight className="w-8 h-8 text-slate-300 hidden lg:block" />
            <ArrowDown className="w-6 h-6 text-slate-300 lg:hidden" />
          </Reveal>

          {/* After: KI-gestützter Workflow */}
          <Reveal delay={200} className="w-full lg:w-[34%]">
            <div className="mb-5 flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">KI-gestützter Workflow</span>
              <span className="h-px flex-1 bg-blue-100"></span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-soft">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <Lightbulb className="text-blue-600" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Intelligente Entscheidungen</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Präzise Analyse in Echtzeit.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-soft">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                  <Zap className="text-emerald-600" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Blitzschnelle Ausführung</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Beschleunigt Prozesse dramatisch.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-soft">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                  <RefreshCw className="text-violet-600" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Selbstlernende Systeme</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Optimiert sich für bessere Ergebnisse.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
