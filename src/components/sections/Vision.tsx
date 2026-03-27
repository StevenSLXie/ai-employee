"use client";

import { useLang } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Vision() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="vision"
      className="relative py-20 sm:py-32 bg-[#0f0f18] scroll-mt-20"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs sm:text-sm font-medium text-blue-400 tracking-widest uppercase text-center">
          {t.vision.tag}
        </p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white">
          {t.vision.title}
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto text-center leading-relaxed">
          {t.vision.desc}
        </p>

        {/* Comparison */}
        <div className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-4 sm:gap-8">
          {/* Old way */}
          <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-500">
                {t.vision.old.title}
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {t.vision.old.items.map((item, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base text-slate-500 pl-4 border-l-2 border-white/5 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* New way */}
          <div className="relative rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] p-5 sm:p-8 shadow-lg shadow-blue-500/5">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-blue-300">
                {t.vision.new.title}
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {t.vision.new.items.map((item, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base text-slate-300 pl-4 border-l-2 border-blue-500/30 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
