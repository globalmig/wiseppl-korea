"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "보장분석", href: "#benefit-analysis" },
  { label: "암보험", href: "#cancer-insurance" },
  { label: "여행 이벤트", href: "#travel-event" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > 0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 0 rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* 로고 */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <svg className="w-7 h-7 flex-shrink-0 transition-colors duration-300" viewBox="0 0 32 32" fill="none" style={{ color: scrolled ? "#1a56db" : "#93c5fd" }}>
            <path d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M11 16l3.5 3.5L21 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-extrabold text-base tracking-tight transition-colors duration-300" style={{ color: scrolled ? "#0f172a" : "#ffffff" }}>
            와이즈피플코리아
          </span>
        </a>

        {/* 데스크탑 nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/10"
              style={{ color: scrolled ? "#475569" : "rgba(255,255,255,0.8)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* 오른쪽 — CTA + 햄버거 */}
        <div className="flex items-center gap-3">
          <a
            href="#consult-form"
            className="hidden sm:inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300"
            style={scrolled ? { backgroundColor: "#1a56db", color: "#ffffff" } : { backgroundColor: "rgba(255,255,255,0.12)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            무료 상담 신청
          </a>

          {/* 모바일 햄버거 */}
          <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-xl" aria-label="메뉴">
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: scrolled ? "#0f172a" : "#ffffff" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <>
                <span className="w-5 h-0.5 rounded-full" style={{ backgroundColor: scrolled ? "#0f172a" : "#ffffff" }} />
                <span className="w-5 h-0.5 rounded-full" style={{ backgroundColor: scrolled ? "#0f172a" : "#ffffff" }} />
                <span className="w-4 h-0.5 rounded-full" style={{ backgroundColor: scrolled ? "#0f172a" : "#ffffff" }} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      <div className="md:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: menuOpen ? "400px" : "0px" }}>
        <div
          className="border-t px-4 py-3"
          style={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(10,22,40,0.96)",
            borderColor: scrolled ? "#e2e8f0" : "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          {NAV.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3 px-2 text-sm font-semibold rounded-xl"
              style={{ color: scrolled ? "#334155" : "rgba(255,255,255,0.85)" }}
            >
              {label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a href="#consult-form" onClick={() => setMenuOpen(false)} className="flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold text-white bg-[#1a56db]">
              무료 상담 신청
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
