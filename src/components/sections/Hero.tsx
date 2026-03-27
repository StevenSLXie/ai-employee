"use client";

import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Glow orbs — responsive sizes */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-violet-500/10 rounded-full blur-[60px] sm:blur-[100px] animate-pulse-slow" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Main headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
          <span className="gradient-text">{t.hero.headline}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 py-3.5 sm:py-4 text-base font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-center hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
          </a>
          <a
            href="#vision"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 text-base font-medium rounded-full border border-white/10 text-slate-300 text-center hover:border-white/25 hover:text-white transition-all duration-300"
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 sm:mt-24 animate-bounce">
          <svg
            className="w-6 h-6 text-slate-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
