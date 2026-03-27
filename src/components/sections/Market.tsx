"use client";

import { useLang } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Market() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="market"
      className="relative py-20 sm:py-32 bg-[#0f0f18] scroll-mt-20 overflow-hidden"
    >
      {/* Background glow — responsive */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-violet-500/5 rounded-full blur-[80px] sm:blur-[150px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs sm:text-sm font-medium text-fuchsia-400 tracking-widest uppercase text-center">
          {t.market.tag}
        </p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white">
          {t.market.title}
        </h2>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {t.market.stats.map((stat, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-6 md:p-8 text-center hover:border-white/10 transition-all duration-500"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
