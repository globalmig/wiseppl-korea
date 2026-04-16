"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  birthdate: string;
  region: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function BottomConsultForm() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", birthdate: "", region: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "이름을 입력해 주세요.";
    if (!form.phone.trim()) {
      next.phone = "연락처를 입력해 주세요.";
    } else if (!/^01[0-9]{8,9}$/.test(form.phone.replace(/-/g, ""))) {
      next.phone = "휴대폰 번호를 정확히 입력해 주세요.";
    }
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "서버 오류");
      setSubmitted(true);
    } catch (err) {
      setErrors({ name: err instanceof Error ? err.message : "접수 중 오류가 발생했습니다." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ecfdf5]">
          <svg className="h-8 w-8 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#1e293b]">상담 신청이 접수되었습니다</h3>
        <p className="text-sm leading-relaxed text-[#64748b]">
          담당 컨설턴트가 <strong className="text-[#1a56db]">24시간 이내</strong>에 연락드립니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-4">
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[#334155]">
          이름 <span className="text-[#e85d04]">*</span>
        </span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름을 입력해 주세요"
          className={`w-full rounded-2xl border bg-[#f8faff] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:ring-2 focus:ring-[#bfdbfe] ${
            errors.name ? "border-red-400 bg-red-50" : "border-[#dbeafe] focus:border-[#1a56db]"
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[#334155]">
          연락처 <span className="text-[#e85d04]">*</span>
        </span>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="연락처를 입력해 주세요"
          className={`w-full rounded-2xl border bg-[#f8faff] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:ring-2 focus:ring-[#bfdbfe] ${
            errors.phone ? "border-red-400 bg-red-50" : "border-[#dbeafe] focus:border-[#1a56db]"
          }`}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[#334155]">생년월일</span>
        <input
          type="date"
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
          className="w-full rounded-2xl border border-[#dbeafe] bg-[#f8faff] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#1a56db] focus:ring-2 focus:ring-[#bfdbfe]"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[#334155]">지역/주소</span>
        <input
          type="text"
          name="region"
          value={form.region}
          onChange={handleChange}
          placeholder="거주 지역을 입력해 주세요 (예: 서울 강남구)"
          className="w-full rounded-2xl border border-[#dbeafe] bg-[#f8faff] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#1a56db] focus:ring-2 focus:ring-[#bfdbfe]"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="btn-accent inline-flex items-center justify-center rounded-2xl px-6 py-4 mt-5 text-base font-bold text-white shadow-lg shadow-[#1a56db]/25 transition hover:shadow-[#1a56db]/40 disabled:opacity-70"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            접수 중...
          </span>
        ) : (
          "보험 전문 점검 무료 상담 신청"
        )}
      </button>
    </form>
  );
}
