"use client";

import { useState } from "react";

const navLinks = [
  { href: "#section-coverage", label: "보장 분석" },
  { href: "#section-travel", label: "여행 이벤트" },
  { href: "#section-cancer", label: "암보험" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3 py-2 rounded-lg text-sm font-semibold text-text-muted hover:text-primary hover:bg-primary-light transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#eff6ff] transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-label="메뉴 열기"
      >
        {open ? (
          <svg className="w-6 h-6 text-[#0f2b5b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-[#0f2b5b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur border-b border-[#e2e8f0] shadow-lg z-50">
          <nav className="flex flex-col max-w-6xl mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-3 rounded-lg text-sm font-semibold text-[#334155] hover:text-[#1a56db] hover:bg-[#eff6ff] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
