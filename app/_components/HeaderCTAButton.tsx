"use client";

import { useEffect, useState } from "react";

export default function HeaderCTAButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#consult-form"
      className={`btn-accent rounded-xl px-4 py-2.5 text-sm font-bold  text-white transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      무료 상담 신청
    </a>
  );
}
