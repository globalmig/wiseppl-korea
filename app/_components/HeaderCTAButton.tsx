"use client";

import { useEffect, useState } from "react";

export default function HeaderCTAButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById("consult-form");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.intersectionRatio >= 0.2),
      { threshold: 0.2 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <a
      href="#consult-form"
      className="btn-accent rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:scale-105"
    >
      무료 상담 신청
    </a>
  );
}
