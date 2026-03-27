"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-white">
            {t.nav.brand}
          </span>
          <span className="text-xs text-slate-500">{t.footer.tagline}</span>
        </div>
        <p className="text-xs text-slate-600">{t.footer.copy}</p>
      </div>
    </footer>
  );
}
