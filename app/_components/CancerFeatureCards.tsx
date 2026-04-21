"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { icon: "📊", title: "100대 암 진단비 지급", desc: "소액암부터 고액암까지 폭넓게 보장해드립니다" },
  { icon: "🏥", title: "입원·수술비 전액 지원", desc: "치료에만 집중할 수 있도록 경제적 부담을 해소" },
  { icon: "🔄", title: "재발·전이까지 반복 보장", desc: "완치 후 재발 시에도 동일한 보장금 재지급" },
];

export default function CancerFeatureCards() {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let tid: ReturnType<typeof setTimeout>;
    let dead = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let idx = 0;
          const run = () => {
            if (dead) return;
            setActive(idx);
            idx = (idx + 1) % items.length;
            tid = setTimeout(run, 3000);
          };
          run();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => {
      dead = true;
      clearTimeout(tid);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="mt-8 space-y-1">
      {items.map(({ icon, title, desc }, i) => {
        const isActive = i === active;
        return (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl border px-5 py-4 transition-all duration-500"
            style={{
              borderColor: isActive ? "#ffffff" : "#f1f5f9",
              backgroundColor: isActive ? "#ffffff" : "#fafafa",
              boxShadow: isActive ? "0 2px 16px 0 rgba(225,29,72,0.08)" : undefined,
            }}
          >
            <span
              className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-white border text-xl shadow-sm transition-colors duration-500"
              style={{ borderColor: isActive ? "#ffffff" : "#e2e8f0" }}
            >
              {icon}
            </span>
            <div>
              <p className="text-sm font-bold text-[#0f2b5b]">{title}</p>
              <p className="text-xs text-[#94a3b8] mt-0.5">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
