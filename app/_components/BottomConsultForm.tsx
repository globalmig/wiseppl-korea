"use client";

import { useState } from "react";

function PrivacyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-[#e2e8f0] px-6 py-4">
          <h2 className="text-base font-bold text-[#1e293b]">개인정보 수집 및 이용 동의</h2>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full text-[#94a3b8] transition hover:bg-[#f1f5f9] hover:text-[#1e293b]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto px-6 py-5 text-sm text-[#334155] space-y-4">
          <p className="leading-relaxed text-[#64748b]">
            온커넥트(이하 &ldquo;당사&rdquo;라 함)는 귀하의 개인정보를 매우 중요하게 생각하며, 「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하고 있습니다.
            당사는 페이스북(Meta) 광고 양식을 통해 수집되는 개인정보의 수집, 이용 및 제3자 제공 목적을 아래와 같이 안내해 드립니다.
          </p>
          <section>
            <h3 className="mb-1.5 font-semibold text-[#1e293b]">1. 개인정보 수집 및 이용 주체</h3>
            <p className="leading-relaxed text-[#64748b]">수집 주체: 온커넥트</p>
            <p className="leading-relaxed text-[#64748b]">당사는 보험 상담 접수 및 서비스 안내를 목적으로 고객님의 개인정보를 직접 수집합니다.</p>
          </section>
          <section>
            <h3 className="mb-1.5 font-semibold text-[#1e293b]">2. 수집하는 개인정보 항목 및 수집 방법</h3>
            <p className="leading-relaxed text-[#64748b]">수집 항목: 이름, 휴대전화번호, 성별, 연령대(생년월일), 거주지역 등 (페이스북 입력 양식에 표기된 항목)</p>
            <p className="leading-relaxed text-[#64748b]">수집 방법: 페이스북(Meta) 잠재 고객 확보 양식(인스턴트 양식)을 통한 고객의 자발적 입력 및 제출</p>
          </section>
          <section>
            <h3 className="mb-1.5 font-semibold text-[#1e293b]">3. 개인정보의 수집 및 이용 목적</h3>
            <ul className="list-disc list-inside space-y-1 text-[#64748b] leading-relaxed">
              <li>고객 상담 접수 및 본인 확인</li>
              <li>보험 상품 소개, 보장 분석, 가입 권유 및 맞춤형 재무설계</li>
              <li>이벤트 안내 및 마케팅 자료 활용</li>
            </ul>
          </section>
          <section>
            <h3 className="mb-1.5 font-semibold text-[#1e293b]">4. 개인정보의 제3자 제공</h3>
            <p className="leading-relaxed text-[#64748b] mb-2">
              당사는 수집한 개인정보를 원활한 상담 및 맞춤형 금융서비스 제공을 위하여, 아래와 같이 제3자(제휴 보험대리점)에게 제공합니다.
              양식을 제출하시는 것은 본 제3자 제공에 동의하는 것으로 간주됩니다.
            </p>
            <ul className="space-y-1 text-[#64748b] leading-relaxed">
              <li><span className="font-semibold text-[#475569]">제공받는 자:</span> (주)영진에셋, 글로벌금융, 신한금융파트너스, GA코리아, HK금융파트너스, 인카금융, 한화금융서비스</li>
              <li><span className="font-semibold text-[#475569]">제공 목적:</span> 보험 상품 소개, 맞춤형 재무설계, TM(텔레마케팅) 상담 및 관련 영업 안내</li>
              <li><span className="font-semibold text-[#475569]">제공 항목:</span> 이름, 휴대전화번호, 성별, 연령대, 거주지역 등 수집된 정보 일체</li>
              <li><span className="font-semibold text-[#475569]">보유 및 이용 기간:</span> 제공받은 날로부터 1년</li>
            </ul>
          </section>
          <section>
            <h3 className="mb-1.5 font-semibold text-[#1e293b]">5. 개인정보의 보유 및 이용 기간</h3>
            <p className="leading-relaxed text-[#64748b]">
              수집된 개인정보는 동의일로부터 <strong className="text-[#1e293b]">1년간</strong> 보유 및 이용됩니다.
              원칙적으로 개인정보 수집 및 이용 목적이 달성된 후, 또는 보유 기간(1년)이 경과한 후에는 해당 정보를 지체 없이 복구 불가능한 방법으로 파기합니다.
              (단, 관련 법령에 의해 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.)
            </p>
          </section>
          <section>
            <h3 className="mb-1.5 font-semibold text-[#1e293b]">6. 동의를 거부할 권리 및 거부 시 불이익</h3>
            <p className="leading-relaxed text-[#64748b]">
              귀하는 개인정보 수집·이용 및 제3자 제공에 대한 동의를 거부할 권리가 있습니다.
              단, 동의를 거부하실 경우 페이스북 양식을 통한 상담 접수 및 맞춤형 보험 안내 서비스 제공이 제한될 수 있습니다.
            </p>
          </section>
          <section>
            <h3 className="mb-1.5 font-semibold text-[#1e293b]">7. 개인정보 보호 문의</h3>
            <p className="leading-relaxed text-[#64748b]">
              본 양식을 통해 제출된 개인정보의 삭제, 처리 정지, 제3자 제공 동의 철회 등을 원하실 경우,
              당사 고객센터(광고 관리자)를 통해 요청해 주시면 지체 없이 조치하겠습니다.
            </p>
          </section>
        </div>
        <div className="border-t border-[#e2e8f0] px-6 py-4">
          <button onClick={onClose} className="w-full rounded-xl bg-[#1a56db] py-3 text-sm font-bold text-white transition hover:bg-[#1e40af]">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

interface FormData {
  name: string;
  phone: string;
  birthdate: string;
  region: string;
  agree: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  agree?: string;
}

const InputIcon = ({ d }: { d: string }) => (
  <svg className="h-4 w-4 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function BottomConsultForm() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", birthdate: "", region: "", agree: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const validate = () => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "이름을 입력해 주세요.";
    if (!form.phone.trim()) {
      next.phone = "연락처를 입력해 주세요.";
    } else if (!/^01[0-9]{8,9}$/.test(form.phone.replace(/-/g, ""))) {
      next.phone = "휴대폰 번호를 정확히 입력해 주세요.";
    }
    if (!form.agree) next.agree = "개인정보 수집 및 이용에 동의해 주세요.";
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
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ecfdf5] shadow-sm">
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
    <>
      <div className="mb-7">
        <h3 className="text-xl font-extrabold text-[#0f2b5b]">상담 신청서</h3>
        <p className="mt-1 text-sm text-[#94a3b8]">아래 정보를 입력하시면 전문가가 연락드립니다</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="grid gap-4">
        {/* 이름 */}
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[#334155]">
            이름 <span className="text-[#e85d04]">*</span>
          </span>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
              <InputIcon d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름을 입력해 주세요"
              className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-[#0f172a] outline-none transition focus:ring-2 focus:ring-[#bfdbfe] ${
                errors.name ? "border-red-400 bg-red-50" : "border-[#e2e8f0] bg-[#f8fafc] focus:border-[#1a56db] focus:bg-white"
              }`}
            />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </label>

        {/* 연락처 */}
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[#334155]">
            연락처 <span className="text-[#e85d04]">*</span>
          </span>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
              <InputIcon d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="010-0000-0000"
              className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm text-[#0f172a] outline-none transition focus:ring-2 focus:ring-[#bfdbfe] ${
                errors.phone ? "border-red-400 bg-red-50" : "border-[#e2e8f0] bg-[#f8fafc] focus:border-[#1a56db] focus:bg-white"
              }`}
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </label>

        {/* 생년월일 + 지역 (2열) */}
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-[#334155]">생년월일</span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
                <InputIcon d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </span>
              <input
                type="date"
                name="birthdate"
                value={form.birthdate}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] pl-10 pr-3 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#1a56db] focus:bg-white focus:ring-2 focus:ring-[#bfdbfe]"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-[#334155]">지역</span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
                <InputIcon d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </span>
              <input
                type="text"
                name="region"
                value={form.region}
                onChange={handleChange}
                placeholder="서울 강남구"
                className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] pl-10 pr-3 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#1a56db] focus:bg-white focus:ring-2 focus:ring-[#bfdbfe]"
              />
            </div>
          </label>
        </div>

        {/* 개인정보 동의 */}
        {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
        <div className={`rounded-xl border p-4 transition-colors ${errors.agree ? "border-red-300 bg-red-50" : "border-[#e2e8f0] bg-[#f8fafc]"}`}>
          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2.5">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="h-4 w-4 rounded accent-[#1a56db]"
              />
              <span className="text-xs font-semibold text-[#1e293b]">개인정보 수집 및 이용에 동의합니다.</span>
            </label>
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-[#1a56db] transition hover:bg-[#dbeafe]"
            >
              내용 보기
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          {errors.agree && <p className="mt-1.5 ml-6 text-xs text-red-500">{errors.agree}</p>}
        </div>

        {/* 제출 버튼 */}
        <button
          id="bottom-submit-btn"
          type="submit"
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a56db] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#1a56db]/25 transition hover:bg-[#1648c0] hover:shadow-[#1a56db]/40 disabled:opacity-70"
        >
          {loading ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              접수 중...
            </>
          ) : (
            <>
              무료 보장 분석 상담 신청
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>
      </form>
    </>
  );
}
