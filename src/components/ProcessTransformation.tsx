import React from "react";
export const ProcessTransformation = () => {
  return <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            So transformieren wir Ihre Prozesse
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Durch die nahtlose Integration von KI-Agenten werden Ihre Workflows nicht nur schneller, sondern intelligenter.
          </p>
        </div>

        {/* Main Transformation Flow */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-8 lg:gap-4">

          {/* Step 1: Manueller Workflow (Before) */}
          <div className="w-full lg:w-1/3 p-4 opacity-60">
            <h3 className="text-lg font-bold text-center text-gray-500 mb-6 uppercase tracking-wider">Manueller Workflow</h3>
            <div className="space-y-4">
              {/* Manual Step 1 */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="bg-gray-200 p-3 rounded-full">
                  {/* User Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Manuelle Datenerfassung</h4>
                  <p className="text-sm text-gray-500">Fehlerquellen, Engpässe, hohe Kosten</p>
                </div>
              </div>
              {/* Manual Step 2 */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="bg-gray-200 p-3 rounded-full">
                  {/* Check Circle Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Zeitaufwendige Prüfung</h4>
                  <p className="text-sm text-gray-500">Starr, langsam, Skalierungsprobleme</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow & Agent */}
          <div className="flex flex-col items-center w-full lg:w-auto">
            {/* Arrow for mobile view */}
            <svg className="w-8 h-8 text-gray-400 my-4 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            
            {/* Arrow for desktop view */}
            <svg className="w-16 h-16 text-gray-400 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>

            {/* Central KI-Agent Element with Logo */}
            <div className="relative my-6 lg:my-0 mx-4 animate-pulse">
              <div className="w-48 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex flex-col items-center justify-center text-white border-2 border-blue-400 shadow-lg shadow-blue-500/25">
                <div className="flex items-center gap-2 mb-1">
                  <svg width="24" height="12" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{
                        stopColor: "#ffffff",
                        stopOpacity: 1
                      }} />
                        <stop offset="100%" style={{
                        stopColor: "#e0e7ff",
                        stopOpacity: 1
                      }} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#logo-gradient)" d="M9.8,46.9c26.3-25.9,81.6-38.1,127.3-27.6c22.8,5.2,42.7,18.2,50,29.9c-21-11.3-51.5-17.5-81.2-12.7C68.8,42.9,35.2,59.2,9.8,46.9z" />
                    <path fill="url(#logo-gradient)" d="M190.2,53.1c-26.3,25.9-81.6,38.1-127.3,27.6c-22.8-5.2-42.7-18.2-50-29.9c21,11.3,51.5,17.5,81.2,12.7C131.2,57.1,164.8,40.8,190.2,53.1z" />
                  </svg>
                  <span className="text-xl font-bold">KI-Agent</span>
                </div>
                <p className="text-sm text-blue-200">Intelligente Verarbeitung</p>
              </div>
            </div>

            <svg className="w-16 h-16 text-gray-400 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
            {/* Arrow for mobile view */}
            <svg className="w-8 h-8 text-gray-400 mt-4 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          {/* Step 3: KI-gestützter Workflow (After) */}
          <div className="w-full lg:w-1/3 p-4">
            <h3 className="text-lg font-bold text-center text-gray-900 mb-6 uppercase tracking-wider">KI-gestützter Workflow</h3>
            <div className="space-y-4">
              {/* Transformed Step 1 */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg">
                  {/* Lightbulb Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 9 3-3 3 3" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M12 2a5.59 5.59 0 0 0-4.5 9.07 6.33 6.33 0 0 1 .15 5.43 1 1 0 0 0 .8.5h7.1a1 1 0 0 0 .8-.5 6.33 6.33 0 0 1 .15-5.43A5.59 5.59 0 0 0 12 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Intelligente Entscheidungen</h4>
                  <p className="text-sm text-gray-600">Präzise Analyse in Echtzeit.</p>
                </div>
              </div>
              {/* Transformed Step 2 */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                <div className="bg-green-500 p-3 rounded-full shadow-lg">
                  {/* Lightning Bolt Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Blitzschnelle Ausführung</h4>
                  <p className="text-sm text-gray-600">Beschleunigt Prozesse dramatisch.</p>
                </div>
              </div>
              {/* Transformed Step 3 */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-pink-200 shadow-sm">
                <div className="bg-pink-500 p-3 rounded-full shadow-lg">
                  {/* Cycle Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                    <path d="M21 21v-5h-5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Selbstlernende Systeme</h4>
                  <p className="text-sm text-gray-600">Optimiert sich für bessere Ergebnisse.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};