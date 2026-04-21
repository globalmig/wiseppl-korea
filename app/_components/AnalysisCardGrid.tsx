"use client";

import { useEffect, useState } from "react";

const items = [
  { icon: "🔍", title: "중복 보장 체크", desc: "불필요한 중복 가입을 찾아 보험료를 절감해드립니다" },
  { icon: "📋", title: "보장 공백 분석", desc: "놓치고 있는 보장 항목을 찾아 완전한 보호망 구성" },
  { icon: "💰", title: "보험료 최적화", desc: "같은 보장, 더 낮은 보험료로 재구성해드립니다" },
  { icon: "📊", title: "맞춤 리포트 제공", desc: "분석 결과를 한눈에 보기 쉬운 리포트로 제공" },
];

export default function AnalysisCardGrid() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {items.map(({ icon, title, desc }, i) => {
        const isActive = i === active;
        return (
          <div
            key={title}
            className="rounded-2xl border px-5 py-5 shadow-sm transition-all duration-500"
            style={{
              borderColor: isActive ? "#1a56db" : "#e2e8f0",
              backgroundColor: isActive ? "#f0f7ff" : "#ffffff",
              boxShadow: isActive ? "0 4px 24px 0 rgba(26,86,219,0.12)" : undefined,
            }}
          >
            <span className="text-4xl mb-3 block">{icon}</span>
            <p className="text-sm font-bold mb-1 transition-colors duration-500" style={{ color: isActive ? "#1a56db" : "#0f2b5b" }}>
              {title}
            </p>
            <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
          </div>
        );
      })}
    </div>
  );
}
