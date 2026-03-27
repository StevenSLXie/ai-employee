"use client";

import { useLang } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 bg-[#0f0f18] scroll-mt-20 overflow-hidden"
    >
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Glow — responsive */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] h-[200px] sm:h-[300px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl px-4 sm:px-6 text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          {t.cta.title}
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-400">{t.cta.sub}</p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="mailto:hello@roleagent.ai"
            className="group relative w-full sm:w-auto px-8 py-3.5 sm:py-4 text-base font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-center hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span className="relative z-10">{t.cta.btn1}</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
          </a>
          <a
            href="mailto:hello@roleagent.ai"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 text-base font-medium rounded-full border border-white/10 text-slate-300 text-center hover:border-white/25 hover:text-white transition-all duration-300"
          >
            {t.cta.btn2}
          </a>
        </div>
      </div>
    </section>
  );
}
