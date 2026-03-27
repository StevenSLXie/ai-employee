"use client";

import { useLang } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Warmth() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-20 sm:py-32 bg-[#0a0a0f]">
      {/* Warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.06)_0%,_transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl px-4 sm:px-6 text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
          {t.warmth.title}
        </h2>
        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
          {t.warmth.lines.map((line, i) => (
            <p
              key={i}
              className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
