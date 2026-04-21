"use client";

import { useEffect, useState } from "react";

const items = [
  { num: "01", icon: "📅", label: "원하는 날짜·시간에 상담 가능", desc: "고객 일정에 맞춰 유연하게 예약" },
  { num: "02", icon: "🔍", label: "복잡한 보험 정밀 분석", desc: "보유 보험 전체를 한눈에 정리" },
  { num: "03", icon: "📊", label: "상세 리포트 제공", desc: "분석 결과를 문서로 무료 제공" },
  { num: "04", icon: "🤝", label: "가입 권유 없는 무료 상담", desc: "신규 가입 강요 없이 객관적 진행" },
  { num: "05", icon: "👨‍👩‍👧", label: "가족 보험 통합 관리 가능", desc: "가족 단위 보장 비교·통합 점검" },
];

export default function BenefitCardList() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-3xl border border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
      {items.map(({ num, icon, label, desc }, i) => {
        const isActive = i === active;
        return (
          <div
            key={num}
            className={`flex items-center gap-5 px-8 py-5 transition-all duration-500 ${i < items.length - 1 ? "border-b border-[#f1f5f9]" : ""}`}
            style={{
              backgroundColor: isActive ? "#f0f7ff" : undefined,
              borderLeft: isActive ? "4px solid #1a56db" : "4px solid transparent",
            }}
          >
            {/* 아이콘 */}
            <div
              className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition-colors duration-500"
              style={{ backgroundColor: isActive ? "#dbeafe" : "#eff6ff" }}
            >
              {icon}
            </div>

            {/* 번호 + 텍스트 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-black text-[#1a56db] tracking-wider">{num}</span>
                <span
                  className="h-px flex-1 transition-colors duration-500"
                  style={{ backgroundColor: isActive ? "#bfdbfe" : "#e2e8f0" }}
                />
              </div>
              <p className="text-base font-bold text-[#0f2b5b]">{label}</p>
              <p className="text-xs text-[#94a3b8] mt-0.5">{desc}</p>
            </div>

            {/* 화살표 */}
            <svg
              className="flex-shrink-0 h-5 w-5 transition-colors duration-500"
              style={{ color: isActive ? "#1a56db" : "#cbd5e1" }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
