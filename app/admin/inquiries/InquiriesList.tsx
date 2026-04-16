"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  age?: string;
  insurance_status?: string;
  birthdate?: string;
  region?: string;
  created_at: string;
}

const ageLabel: Record<string, string> = {
  "20s": "20대",
  "30s": "30대",
  "40s": "40대",
  "50s": "50대",
  "60plus": "60대 이상",
};

const insuranceLabel: Record<string, string> = {
  none: "보험 없음",
  some: "일부 가입",
  full: "여러 건 가입",
  review: "점검 필요",
};

export default function InquiriesList({ initial }: { initial: Inquiry[] }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initial);
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const knownIds = useRef<Set<string>>(new Set(initial.map((i) => i.id)));

  useEffect(() => {
    const poll = async () => {
      const { data } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!data) return;

      const added = data.filter((row) => !knownIds.current.has(row.id));
      if (added.length === 0) return;

      added.forEach((row) => knownIds.current.add(row.id));
      setInquiries(data as Inquiry[]);
      setNewIds((prev) => {
        const next = new Set(prev);
        added.forEach((row) => next.add(row.id));
        return next;
      });
      setTimeout(() => {
        setNewIds((prev) => {
          const next = new Set(prev);
          added.forEach((row) => next.delete(row.id));
          return next;
        });
      }, 3000);
    };

    const timer = setInterval(poll, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p className="mb-6 text-sm text-[#475569]">
        총 {inquiries.length}건
        <span className="ml-2 inline-flex items-center gap-1 text-xs text-[#166534]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a] animate-pulse" />
          실시간
        </span>
      </p>

      {inquiries.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center text-text-muted">
          아직 문의가 없습니다.
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                <th className="px-4 py-3 text-left font-semibold text-text-muted">이름</th>
                <th className="px-4 py-3 text-left font-semibold text-text-muted">연락처</th>
                <th className="px-4 py-3 text-left font-semibold text-text-muted">생년월일</th>
                <th className="px-4 py-3 text-left font-semibold text-text-muted">지역</th>
                <th className="px-4 py-3 text-left font-semibold text-text-muted">연령대</th>
                <th className="px-4 py-3 text-left font-semibold text-text-muted">보험 상태</th>
                <th className="px-4 py-3 text-left font-semibold text-text-muted">신청일시</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((item, i) => (
                <tr
                  key={item.id}
                  className={`border-b border-[#f1f5f9] transition-colors duration-1000 ${
                    newIds.has(item.id)
                      ? "bg-[#f0fdf4]"
                      : i % 2 === 0
                      ? "bg-white"
                      : "bg-[#fafafa]"
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-[#1e293b]">
                    {newIds.has(item.id) && (
                      <span className="mr-1.5 inline-block rounded-full bg-[#22c55e] px-1.5 py-0.5 text-[10px] font-bold text-white">NEW</span>
                    )}
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-[#475569]">{item.phone}</td>
                  <td className="px-4 py-3 text-[#475569]">{item.birthdate ?? "-"}</td>
                  <td className="px-4 py-3 text-[#475569]">{item.region ?? "-"}</td>
                  <td className="px-4 py-3 text-[#475569]">{item.age ? (ageLabel[item.age] ?? item.age) : "-"}</td>
                  <td className="px-4 py-3 text-[#475569]">
                    {item.insurance_status ? (insuranceLabel[item.insurance_status] ?? item.insurance_status) : "-"}
                  </td>
                  <td className="px-4 py-3 text-text-muted">
                    {new Date(item.created_at).toLocaleString("ko-KR", {
                      timeZone: "Asia/Seoul",
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
