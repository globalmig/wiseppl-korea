"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroBounceImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [bouncing, setBouncing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          setBouncing(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full sm:max-w-[70%] md:max-w-[55%] lg:max-w-[40%] flex items-end">
      <Image
        src="/hero/hero_thinking.jpg"
        alt="보험 전문가 상담"
        width={720}
        height={460}
        priority
        className={`w-full h-auto max-h-[32vh] sm:max-h-[42vh] object-contain object-bottom ${bouncing ? "animate-bounce-hero" : ""}`}
        onAnimationEnd={() => setBouncing(false)}
      />
    </div>
  );
}
