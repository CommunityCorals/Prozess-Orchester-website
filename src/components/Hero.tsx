import { ArrowRight, Play, Inbox, FileCheck2, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-canvas overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-24 hero-fade" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-soft mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Automatisierung &amp; KI für den Mittelstand
            </div>

            <h1 lang="de" className="text-[2.35rem] sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,3.4vw,3.25rem)] font-bold tracking-tight text-slate-900 leading-[1.08] mb-6 break-words hyphens-auto lg:hyphens-none">
              Prozessautomatisierung
              <span className="text-blue-600"> für KMU</span>
            </h1>
            <p className="text-xl font-medium text-slate-900 mb-3">
              Nicht kompliziert. Sondern konkret.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-9">
              Prozess-Orchester hilft Inhabern kleiner und mittlerer Unternehmen, ihre digitalen
              Geschäftsprozesse mit Automatisierung und KI effizient, schlank und intelligent zu gestalten.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-7 h-12 text-base font-medium shadow-lift"
                onClick={scrollToContact}
              >
                Unverbindliches Erstgespräch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg px-7 h-12 text-base font-medium border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                onClick={scrollToFAQ}
              >
                <Play className="mr-2 w-4 h-4 text-blue-600" />
                Wie es funktioniert
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                Kostenlose Erstberatung
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                Fachlich fundiert – aber ohne Fachchinesisch.
              </div>
            </div>
          </div>

          {/* Product-style visual: automation live view */}
          <div className="relative min-w-0 lg:pl-6">
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-lift">
              {/* Card header */}
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/lovable-uploads/997bf14a-ebda-45e2-86d2-98cde192de8e.png"
                    alt=""
                    className="h-5 w-auto"
                  />
                  <span className="text-sm font-semibold text-slate-900">Rechnungseingang</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Automatisierung aktiv
                </span>
              </div>

              {/* Workflow rows */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-slate-200">
                    <Inbox className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">47 Belege eingegangen</div>
                    <div className="text-xs text-slate-500">E-Mail, Scan &amp; Portal-Download</div>
                  </div>
                  <span className="text-xs font-medium text-slate-400">08:00</span>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-blue-200 bg-blue-50/50 px-4 py-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                    <svg width="18" height="9" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fill="#ffffff" d="M9.8,46.9c26.3-25.9,81.6-38.1,127.3-27.6c22.8,5.2,42.7,18.2,50,29.9c-21-11.3-51.5-17.5-81.2-12.7C68.8,42.9,35.2,59.2,9.8,46.9z" />
                      <path fill="#ffffff" d="M190.2,53.1c-26.3,25.9-81.6,38.1-127.3,27.6c-22.8-5.2-42.7-18.2-50-29.9c21,11.3,51.5,17.5,81.2,12.7C131.2,57.1,164.8,40.8,190.2,53.1z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">KI-Agent prüft &amp; verbucht</div>
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-blue-100 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-blue-600">läuft…</span>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-slate-200 px-4 py-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">Export an Buchhaltung</div>
                    <div className="text-xs text-slate-500">Geprüft, kategorisiert, abgelegt</div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">erledigt</span>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-slate-100 px-6 py-4">
                <span className="text-xs text-slate-500">Heute automatisiert</span>
                <span className="text-xs font-semibold text-slate-900">3,5 Std. Handarbeit eingespart</span>
              </div>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -top-12 right-4 lg:-right-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lift">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-none">10×</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Rentabilitäts-Ziel</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 left-4 lg:-left-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lift">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50">
                  <Clock className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-none">−30 %</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">repetitive Arbeitszeit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
