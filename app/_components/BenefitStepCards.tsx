"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    num: "01",
    icon: "🗑️",
    title: "중복 보장 정리",
    desc: "같은 보장을 중복 납입하고 있는 부분을 찾아 보험료를 절약합니다",
  },
  {
    num: "02",
    icon: "🛡️",
    title: "부족한 보장 강화",
    desc: "놓치고 있던 보장 공백을 발견하고 적절한 보완 방안을 제시합니다",
  },
  {
    num: "03",
    icon: "✨",
    title: "라이프스타일 맞춤 리모델링",
    desc: "현재 생활 패턴과 미래 계획에 맞게 보험을 최적화합니다",
  },
];

export default function BenefitStepCards() {
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
            tid = setTimeout(run, 1800);
          };
          run();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      dead = true;
      clearTimeout(tid);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes icon-shake {
          0%,100% { transform: rotate(0deg); }
          15% { transform: rotate(-15deg); }
          30% { transform: rotate(15deg); }
          45% { transform: rotate(-10deg); }
          60% { transform: rotate(10deg); }
          75% { transform: rotate(-5deg); }
          90% { transform: rotate(5deg); }
        }
        .icon-shake { animation: icon-shake 0.6s ease-in-out; }
        @keyframes icon-stamp {
          0% { transform: translateY(0) scale(1); }
          20% { transform: translateY(-14px) scale(1.1); }
          45% { transform: translateY(8px) scale(0.92); }
          60% { transform: translateY(-6px) scale(1.05); }
          75% { transform: translateY(4px) scale(0.97); }
          88% { transform: translateY(-2px) scale(1.01); }
          100% { transform: translateY(0) scale(1); }
        }
        .icon-stamp { animation: icon-stamp 0.55s cubic-bezier(0.36,0.07,0.19,0.97); }
        @keyframes icon-sparkle {
          0%   { transform: rotate(0deg) scale(1); filter: brightness(1); }
          25%  { transform: rotate(90deg) scale(0.5); filter: brightness(1.8); }
          50%  { transform: rotate(180deg) scale(1.3); filter: brightness(2.5); }
          75%  { transform: rotate(270deg) scale(0.6); filter: brightness(1.8); }
          100% { transform: rotate(360deg) scale(1); filter: brightness(1); }
        }
        .icon-sparkle { animation: icon-sparkle 0.7s ease-in-out; }
      `}</style>
    <div ref={ref} className="grid gap-5 sm:grid-cols-3">
      {items.map(({ num, icon, title, desc }, i) => {
        const isActive = i === active;
        const shakeClass = isActive && i === 0 ? "icon-shake" : isActive && i === 1 ? "icon-stamp" : isActive && i === 2 ? "icon-sparkle" : "";
        return (
          <div
            key={num}
            className="group relative rounded-3xl border px-7 py-8 transition-all duration-500"
            style={{
              borderColor: isActive ? "#bfdbfe" : "#e2e8f0",
              backgroundColor: isActive ? "#f0f7ff" : "#f8fafc",
              boxShadow: isActive ? "0 4px 20px 0 rgba(26,86,219,0.10)" : undefined,
            }}
          >
            <div className="flex items-center justify-between mb-10">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white border text-3xl shadow-sm transition-colors duration-500 ${shakeClass}`}
                style={{ borderColor: isActive ? "#bfdbfe" : "#e2e8f0" }}
              >
                {icon}
              </span>
              <span
                className="text-5xl font-black leading-none transition-colors duration-500"
                style={{ color: isActive ? "#bfdbfe" : "#c9d9ee" }}
              >
                {num}
              </span>
            </div>
            <p className="text-base font-extrabold text-[#0f2b5b] mb-2">{title}</p>
            <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
          </div>
        );
      })}
    </div>
    </>
  );
}
