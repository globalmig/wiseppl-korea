"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  age: string;
  insuranceStatus: string;
  agree: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  age?: string;
  insuranceStatus?: string;
  agree?: string;
}

interface ConsultFormProps {
  variant?: "hero" | "bottom";
}

export default function ConsultForm({ variant = "hero" }: ConsultFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    age: "",
    insuranceStatus: "",
    agree: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "이름을 입력해 주세요.";

    if (!form.phone.trim()) {
      nextErrors.phone = "연락처를 입력해 주세요.";
    } else if (!/^01[0-9]{8,9}$/.test(form.phone.replace(/-/g, ""))) {
      nextErrors.phone = "휴대폰 번호를 정확히 입력해 주세요.";
    }

    if (!form.age) nextErrors.age = "연령대를 선택해 주세요.";
    if (!form.insuranceStatus) nextErrors.insuranceStatus = "보험 가입 상태를 선택해 주세요.";
    if (!form.agree) nextErrors.agree = "개인정보 수집 및 이용에 동의해 주세요.";

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ecfdf5]">
          <svg
            className="h-8 w-8 text-[#059669]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#1e293b]">상담 신청이 접수되었습니다</h3>
        <p className="text-sm leading-relaxed text-[#64748b]">
          담당 컨설턴트가
          <strong className="text-[#1a56db]"> 24시간 이내</strong>
          에 순차적으로 연락드립니다.
        </p>
        <div className="mt-5 rounded-xl bg-[#eff6ff] px-5 py-3 text-sm font-medium text-[#1a56db]">
          빠른 상담을 원하시면 1588-0000으로 문의해 주세요.
        </div>
      </div>
    );
  }

  const isBottom = variant === "bottom";

  return (
    <form onSubmit={handleSubmit} noValidate>
      {!isBottom && (
        <div className="mb-5">
          <h3 className="mb-1 text-lg font-bold text-[#1e293b]">무료 보장 분석 신청</h3>
          <p className="text-sm text-[#64748b]">
            신청 내용을 남기시면 담당자가 빠르게 연락드립니다.
          </p>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-sm font-semibold text-[#1e293b]">
            이름 <span className="text-[#e85d04]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="이름"
            className={`w-full rounded-lg border bg-white px-4 h-11 text-sm text-[#1e293b] placeholder:text-[#94a3b8] transition-colors ${
              errors.name ? "border-red-400 bg-red-50" : "border-[#cbd5e1]"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-[#1e293b]">
            연락처 <span className="text-[#e85d04]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
            className={`w-full rounded-lg border bg-white px-4 h-11 text-sm text-[#1e293b] placeholder:text-[#94a3b8] transition-colors ${
              errors.phone ? "border-red-400 bg-red-50" : "border-[#cbd5e1]"
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm font-semibold text-[#1e293b]">
              연령대 <span className="text-[#e85d04]">*</span>
            </label>
            <select
              name="age"
              value={form.age}
              onChange={handleChange}
              className={`w-full cursor-pointer appearance-none rounded-lg border bg-white px-3 h-11 text-sm text-[#1e293b] transition-colors ${
                errors.age ? "border-red-400 bg-red-50" : "border-[#cbd5e1]"
              }`}
            >
              <option value="">선택</option>
              <option value="20s">20대</option>
              <option value="30s">30대</option>
              <option value="40s">40대</option>
              <option value="50s">50대</option>
              <option value="60plus">60대 이상</option>
            </select>
            {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-[#1e293b]">
              보험 상태 <span className="text-[#e85d04]">*</span>
            </label>
            <select
              name="insuranceStatus"
              value={form.insuranceStatus}
              onChange={handleChange}
              className={`w-full cursor-pointer appearance-none rounded-lg border bg-white px-3 h-11 text-sm text-[#1e293b] transition-colors ${
                errors.insuranceStatus ? "border-red-400 bg-red-50" : "border-[#cbd5e1]"
              }`}
            >
              <option value="">선택</option>
              <option value="none">보험 없음</option>
              <option value="some">일부 가입</option>
              <option value="full">여러 건 가입</option>
              <option value="review">점검 필요</option>
            </select>
            {errors.insuranceStatus && (
              <p className="mt-1 text-xs text-red-500">{errors.insuranceStatus}</p>
            )}
          </div>
        </div>

        <div
          className={`rounded-lg border p-3 ${
            errors.agree ? "border-red-300 bg-red-50" : "border-[#e2e8f0] bg-[#f8fafc]"
          }`}
        >
          <label className="flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded"
            />
            <span className="text-xs leading-relaxed text-[#64748b]">
              <strong className="text-[#1e293b]">개인정보 수집 및 이용에 동의합니다.</strong>
              수집 항목은 이름, 연락처이며 상담 진행 목적 외에는 사용하지 않습니다.
            </span>
          </label>
          {errors.agree && <p className="mt-1.5 ml-6 text-xs text-red-500">{errors.agree}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-pulse btn-accent h-13 w-full rounded-xl text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              접수 중...
            </span>
          ) : (
            "무료 보장 분석 신청하기"
          )}
        </button>

        <p className="text-center text-xs text-[#94a3b8]">
          100% 무료 상담이며 원치 않으시면 언제든 취소할 수 있습니다.
        </p>
      </div>
    </form>
  );
}
