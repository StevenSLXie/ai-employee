"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Brand */}
        <a href="#" className="text-lg sm:text-xl font-bold tracking-tight text-white">
          {t.nav.brand}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Lang toggle — larger touch target */}
          <button
            onClick={toggle}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center px-3 py-2 text-xs rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-all cursor-pointer"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            {t.nav.cta}
          </a>

          {/* Mobile hamburger — 44x44 touch target */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-white cursor-pointer"
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-4 sm:px-6 pb-6">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-slate-400 hover:text-white transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex px-5 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
