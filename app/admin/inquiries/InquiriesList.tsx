"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  birthdate?: string;
  type?: string;
  insurance_status?: string;
  region?: string;
  created_at: string;
}

const insuranceLabel: Record<string, string> = {
  none: "보험 없음",
  some: "일부 가입",
  full: "여러 건 가입",
  review: "점검 필요",
};

const typeColor: Record<string, string> = {
  "보험료 절감": "bg-blue-50 text-blue-600",
  "암보험": "bg-purple-50 text-purple-600",
};

const PAGE_SIZES = [15, 30, 50, 100];

export default function InquiriesList({ initial }: { initial: Inquiry[] }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initial);
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const knownIds = useRef<Set<string>>(new Set(initial.map((i) => i.id)));

  const handleDelete = async (id: string) => {
    if (!confirm("삭제하시겠습니까?")) return;
    setDeletingId(id);
    const res = await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
    if (res.ok) {
      setInquiries((prev) => prev.filter((item) => item.id !== id));
      knownIds.current.delete(id);
    }
    setDeletingId(null);
  };

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

  const filtered = inquiries.filter((item) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return item.name.toLowerCase().includes(q) || item.phone.includes(q);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const typeLabel = (item: Inquiry) =>
    item.type ?? (item.insurance_status ? (insuranceLabel[item.insurance_status] ?? item.insurance_status) : null);

  return (
    <div className="space-y-4">
      {/* 툴바 */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-[#475569]">
          <span className="font-medium">총 {filtered.length}건</span>
          <span className="flex items-center gap-1 text-xs text-[#16a34a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a] animate-pulse" />
            실시간
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="이름 또는 연락처"
              className="w-48 rounded-lg border border-[#e2e8f0] bg-white pl-8 pr-3 py-2 text-sm text-[#1e293b] placeholder:text-[#cbd5e1] outline-none focus:border-[#1a56db] focus:ring-2 focus:ring-[#bfdbfe]"
            />
          </div>
          <select
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
            className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-sm text-[#475569] outline-none focus:border-[#1a56db] cursor-pointer"
          >
            {PAGE_SIZES.map((s) => (
              <option key={s} value={s}>{s}개씩</option>
            ))}
          </select>
        </div>
      </div>

      {/* 테이블 */}
      {paged.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#e2e8f0] bg-white py-16 text-center text-sm text-[#94a3b8]">
          {search ? `"${search}" 검색 결과가 없습니다.` : "아직 문의가 없습니다."}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">이름</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">연락처</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">나이</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">지역</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">상담 유형</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">신청일시</th>
                <th className="px-4 py-3 w-10" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f5f9]">
              {paged.map((item) => {
                const label = typeLabel(item);
                return (
                  <tr
                    key={item.id}
                    className={`group transition-colors hover:bg-[#f8fafc] ${newIds.has(item.id) ? "bg-[#f0fdf4]" : "bg-white"}`}
                  >
                    <td className="px-4 py-3.5 font-medium text-[#1e293b]">
                      <div className="flex items-center gap-2">
                        {newIds.has(item.id) && (
                          <span className="rounded-full bg-[#22c55e] px-1.5 py-0.5 text-[10px] font-bold text-white leading-none">NEW</span>
                        )}
                        {item.name}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-[#475569]">{item.phone}</td>
                    <td className="px-4 py-3.5 text-[#475569]">{item.birthdate ?? <span className="text-[#cbd5e1]">-</span>}</td>
                    <td className="px-4 py-3.5 text-[#475569]">{item.region ?? <span className="text-[#cbd5e1]">-</span>}</td>
                    <td className="px-4 py-3.5">
                      {label ? (
                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColor[label] ?? "bg-[#f1f5f9] text-[#64748b]"}`}>
                          {label}
                        </span>
                      ) : (
                        <span className="text-[#cbd5e1]">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-[#94a3b8] text-xs tabular-nums">
                      {new Date(item.created_at).toLocaleString("ko-KR", {
                        timeZone: "Asia/Seoul",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-3.5">
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                        className="rounded-lg p-1.5 text-[#cbd5e1] opacity-0 group-hover:opacity-100 transition hover:bg-[#f1f5f9] hover:text-[#64748b] disabled:opacity-50"
                      >
                        {deletingId === item.id ? (
                          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                        ) : (
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#94a3b8]">{currentPage} / {totalPages} 페이지</p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(1)}
              disabled={currentPage === 1}
              className="rounded-lg px-2 py-1.5 text-xs text-[#94a3b8] transition hover:bg-white disabled:opacity-30"
            >«</button>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-lg px-2 py-1.5 text-xs text-[#94a3b8] transition hover:bg-white disabled:opacity-30"
            >‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => Math.abs(p - currentPage) <= 2)
              .map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`min-w-[32px] rounded-lg px-2 py-1.5 text-xs font-medium transition ${
                    p === currentPage ? "bg-[#1a56db] text-white" : "text-[#475569] hover:bg-white"
                  }`}
                >
                  {p}
                </button>
              ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-lg px-2 py-1.5 text-xs text-[#94a3b8] transition hover:bg-white disabled:opacity-30"
            >›</button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={currentPage === totalPages}
              className="rounded-lg px-2 py-1.5 text-xs text-[#94a3b8] transition hover:bg-white disabled:opacity-30"
            >»</button>
          </div>
        </div>
      )}
    </div>
  );
}
