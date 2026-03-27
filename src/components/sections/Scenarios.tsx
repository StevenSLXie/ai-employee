"use client";

import { useLang } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ScenarioItem({
  bold,
  desc,
  tag,
  index,
}: {
  bold: string;
  desc: string;
  tag: string;
  index: number;
}) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDuration: `${600 + index * 100}ms` }}
    >
      <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-500 h-full">
        {/* Tag badge */}
        <span className="inline-block px-2.5 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-3 sm:mb-4">
          {tag}
        </span>

        <p className="text-base sm:text-lg md:text-xl font-semibold text-white leading-snug mb-2 sm:mb-3">
          {bold}
        </p>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Scenarios() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="scenarios"
      className="relative py-20 sm:py-32 bg-[#0f0f18] scroll-mt-20 overflow-hidden"
    >
      {/* Accent glow — responsive */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/5 rounded-full blur-[100px] sm:blur-[150px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-5xl px-4 sm:px-6 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs sm:text-sm font-medium text-cyan-400 tracking-widest uppercase text-center">
          {t.scenarios.tag}
        </p>
        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white">
          {t.scenarios.title}
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 text-center">
          {t.scenarios.sub}
        </p>

        <div className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-4 sm:gap-6">
          {t.scenarios.items.map((item, i) => (
            <ScenarioItem
              key={i}
              bold={item.bold}
              desc={item.desc}
              tag={item.tag}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
