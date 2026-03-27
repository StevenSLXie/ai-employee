"use client";

import { useLang } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons: Record<string, React.ReactNode> = {
  user: (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  brain: (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  plug: (
    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
};

const gradients = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-fuchsia-400",
  "from-emerald-500 to-teal-400",
  "from-orange-500 to-amber-400",
];

export default function Architecture() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="architecture"
      className="relative py-20 sm:py-32 bg-[#0a0a0f] scroll-mt-20"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs sm:text-sm font-medium text-emerald-400 tracking-widest uppercase text-center">
          {t.architecture.tag}
        </p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white">
          {t.architecture.title}
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto text-center">
          {t.architecture.sub}
        </p>

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {t.architecture.modules.map((mod, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 hover:border-white/10 transition-all duration-500"
            >
              <div className="relative">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 bg-gradient-to-br ${gradients[i]} p-[1px]`}>
                  <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center text-white">
                    {icons[mod.icon]}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {mod.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
