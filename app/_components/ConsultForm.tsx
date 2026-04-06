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
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "성함을 입력해 주세요.";
    if (!form.phone.trim()) {
      newErrors.phone = "연락처를 입력해 주세요.";
    } else if (!/^01[0-9]{8,9}$/.test(form.phone.replace(/-/g, ""))) {
      newErrors.phone = "올바른 휴대폰 번호를 입력해 주세요.";
    }
    if (!form.age) newErrors.age = "연령대를 선택해 주세요.";
    if (!form.insuranceStatus)
      newErrors.insuranceStatus = "보험 현황을 선택해 주세요.";
    if (!form.agree) newErrors.agree = "개인정보 수집에 동의해 주세요.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // 실제 서버 전송 로직 자리
    await new Promise((r) => setTimeout(r, 1200));
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
      <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#ecfdf5] flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-[#059669]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-700 text-[#1e293b] mb-2">
          상담 신청 완료!
        </h3>
        <p className="text-[#64748b] text-sm leading-relaxed">
          담당 컨설턴트가 <strong className="text-[#1a56db]">24시간 이내</strong>에
          <br />
          연락드리겠습니다.
        </p>
        <div className="mt-5 bg-[#eff6ff] rounded-xl px-5 py-3 text-sm text-[#1a56db] font-500">
          빠른 연결 원하시면 ☎ 1588-0000
        </div>
      </div>
    );
  }

  const isBottom = variant === "bottom";

  return (
    <form onSubmit={handleSubmit} noValidate>
      {!isBottom && (
        <div className="mb-5">
          <h3 className="text-lg font-700 text-[#1e293b] mb-1">
            무료 보험 분석 신청
          </h3>
          <p className="text-sm text-[#64748b]">
            지금 신청하면 전문가가 24시간 내 연락드립니다
          </p>
        </div>
      )}

      <div className="space-y-3">
        {/* 성함 */}
        <div>
          <label className="block text-sm font-600 text-[#1e293b] mb-1">
            성함 <span className="text-[#e85d04]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            className={`w-full h-11 px-4 rounded-lg border text-sm bg-white text-[#1e293b] placeholder:text-[#94a3b8] transition-colors
              ${errors.name ? "border-red-400 bg-red-50" : "border-[#cbd5e1]"}`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* 연락처 */}
        <div>
          <label className="block text-sm font-600 text-[#1e293b] mb-1">
            연락처 <span className="text-[#e85d04]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
            className={`w-full h-11 px-4 rounded-lg border text-sm bg-white text-[#1e293b] placeholder:text-[#94a3b8] transition-colors
              ${errors.phone ? "border-red-400 bg-red-50" : "border-[#cbd5e1]"}`}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* 연령대 + 보험 현황 */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-600 text-[#1e293b] mb-1">
              연령대 <span className="text-[#e85d04]">*</span>
            </label>
            <select
              name="age"
              value={form.age}
              onChange={handleChange}
              className={`w-full h-11 px-3 rounded-lg border text-sm bg-white text-[#1e293b] transition-colors appearance-none cursor-pointer
                ${errors.age ? "border-red-400 bg-red-50" : "border-[#cbd5e1]"}`}
            >
              <option value="">선택</option>
              <option value="20s">20대</option>
              <option value="30s">30대</option>
              <option value="40s">40대</option>
              <option value="50s">50대</option>
              <option value="60s">60대 이상</option>
            </select>
            {errors.age && (
              <p className="text-xs text-red-500 mt-1">{errors.age}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-600 text-[#1e293b] mb-1">
              보험 현황 <span className="text-[#e85d04]">*</span>
            </label>
            <select
              name="insuranceStatus"
              value={form.insuranceStatus}
              onChange={handleChange}
              className={`w-full h-11 px-3 rounded-lg border text-sm bg-white text-[#1e293b] transition-colors appearance-none cursor-pointer
                ${errors.insuranceStatus ? "border-red-400 bg-red-50" : "border-[#cbd5e1]"}`}
            >
              <option value="">선택</option>
              <option value="none">미가입</option>
              <option value="some">일부 가입</option>
              <option value="full">전체 가입</option>
              <option value="review">점검 필요</option>
            </select>
            {errors.insuranceStatus && (
              <p className="text-xs text-red-500 mt-1">
                {errors.insuranceStatus}
              </p>
            )}
          </div>
        </div>

        {/* 개인정보 동의 */}
        <div
          className={`rounded-lg p-3 border ${errors.agree ? "border-red-300 bg-red-50" : "border-[#e2e8f0] bg-[#f8fafc]"}`}
        >
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded"
            />
            <span className="text-xs text-[#64748b] leading-relaxed">
              <strong className="text-[#1e293b]">개인정보 수집·이용에 동의</strong>합니다.
              수집 항목: 성명, 연락처 / 이용 목적: 보험 상담 서비스 제공 /
              보유 기간: 상담 완료 후 1년
            </span>
          </label>
          {errors.agree && (
            <p className="text-xs text-red-500 mt-1.5 ml-6">{errors.agree}</p>
          )}
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          disabled={loading}
          className="btn-pulse btn-accent w-full h-13 rounded-xl text-white font-700 text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              처리 중...
            </span>
          ) : (
            "무료 보험 분석 신청하기 →"
          )}
        </button>

        <p className="text-center text-xs text-[#94a3b8]">
          ✓ 100% 무료 · 부담 없는 상담 · 언제든 취소 가능
        </p>
      </div>
    </form>
  );
}
