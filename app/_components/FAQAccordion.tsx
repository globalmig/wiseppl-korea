"use client";

import { useState } from "react";

const faqs = [
  {
    q: "정말 무료인가요? 나중에 비용이 청구되나요?",
    a: "네, 보험 분석 상담은 100% 무료입니다. 상담 과정에서 어떠한 비용도 발생하지 않으며, 가입 여부와 관계없이 분석 리포트를 무료로 제공해 드립니다.",
  },
  {
    q: "상담 후 보험 가입을 강요하지 않나요?",
    a: "절대 그렇지 않습니다. 저희는 고객님의 현재 보험 상태를 객관적으로 분석해 드리는 것이 목표입니다. 가입 여부는 전적으로 고객님의 선택이며, 불필요한 권유는 하지 않습니다.",
  },
  {
    q: "상담 신청 후 얼마나 빨리 연락이 오나요?",
    a: "신청 접수 후 24시간 이내에 담당 컨설턴트가 연락드립니다. 평일 오전에 신청하시면 대부분 당일 연락이 가능합니다.",
  },
  {
    q: "어떤 보험사들과 비교가 가능한가요?",
    a: "삼성생명, 한화생명, 교보생명 등 주요 생명보험사와 삼성화재, DB손해보험, 현대해상 등 손해보험사를 포함해 25개 이상의 보험사를 비교 분석해 드립니다.",
  },
  {
    q: "현재 가입한 보험을 해지해야 하나요?",
    a: "반드시 해지할 필요는 없습니다. 먼저 현재 보험의 보장 내용을 분석한 후, 중복 보장이나 부족한 보장을 파악하여 최적의 방향을 제안해 드립니다. 유지가 더 유리한 경우도 많습니다.",
  },
  {
    q: "비대면으로 상담이 가능한가요?",
    a: "네, 전화 상담과 카카오톡 상담 모두 가능합니다. 직접 방문 없이 편리하게 보험 분석을 받아보실 수 있습니다.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-200 overflow-hidden
              ${isOpen ? "border-[#1a56db] shadow-sm" : "border-[#e2e8f0]"}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[#f8fafc] transition-colors"
              aria-expanded={isOpen}
            >
              <span
                className={`text-sm font-600 pr-4 leading-snug ${isOpen ? "text-[#1a56db]" : "text-[#1e293b]"}`}
              >
                <span className="text-[#1a56db] mr-2 font-700">Q.</span>
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200
                  ${isOpen ? "bg-[#1a56db] rotate-180" : "bg-[#f1f5f9]"}`}
              >
                <svg
                  className={`w-3.5 h-3.5 ${isOpen ? "text-white" : "text-[#64748b]"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"}`}
            >
              <div className="px-5 pb-4 pt-0 bg-[#f8fafc] border-t border-[#e2e8f0]">
                <p className="text-sm text-[#475569] leading-relaxed pt-3">
                  <span className="text-[#e85d04] font-700 mr-2">A.</span>
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
