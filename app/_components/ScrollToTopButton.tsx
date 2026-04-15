"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 400);
      const form = document.getElementById("consult-form");
      if (form) {
        setCtaVisible(scrollY > 400 && scrollY < form.offsetTop - 80);
      } else {
        setCtaVisible(scrollY > 400);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      {ctaVisible && (
        <a
          href="#consult-form"
          className="flex items-center justify-center rounded-full bg-[#e05702] text-white shadow-lg text-md font-bold px-6 py-3 hover:bg-[#1648c0] transition-colors whitespace-nowrap"
        >
          무료 상담
        </a>
      )}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="맨 위로"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-[#1648c0] transition-colors"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
