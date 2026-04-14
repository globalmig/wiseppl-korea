"use client";

import { useState } from "react";

const faqs = [
  {
    q: "정말 무료인가요?",
    a: "네. 보장 분석 상담과 기본 리포트 제공은 무료로 진행됩니다.",
  },
  {
    q: "상담을 받으면 가입 권유를 꼭 받아야 하나요?",
    a: "아닙니다. 현재 보험 점검과 보장 분석 중심으로 상담이 진행됩니다.",
  },
  {
    q: "상담 신청 후 연락은 언제 오나요?",
    a: "신청 접수 후 보통 24시간 이내에 순차적으로 연락드립니다.",
  },
  {
    q: "가족 보험도 함께 점검할 수 있나요?",
    a: "가능합니다. 가족 단위로 보장을 비교해 통합 관리 방향을 안내해 드립니다.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-xl border transition-all duration-200 ${
              isOpen ? "border-[#1a56db] shadow-sm" : "border-[#e2e8f0]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between bg-white px-5 py-4 text-left transition-colors hover:bg-[#f8fafc]"
              aria-expanded={isOpen}
            >
              <span className={`pr-4 text-sm font-semibold leading-snug ${isOpen ? "text-[#1a56db]" : "text-[#1e293b]"}`}>
                <span className="mr-2 font-bold text-[#1a56db]">Q.</span>
                {item.q}
              </span>
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                  isOpen ? "rotate-180 bg-[#1a56db]" : "bg-[#f1f5f9]"
                }`}
              >
                <svg
                  className={`h-3.5 w-3.5 ${isOpen ? "text-white" : "text-[#64748b]"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"}`}>
              <div className="border-t border-[#e2e8f0] bg-[#f8fafc] px-5 pb-4 pt-3">
                <p className="text-sm leading-relaxed text-[#475569]">
                  <span className="mr-2 font-bold text-[#e85d04]">A.</span>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
