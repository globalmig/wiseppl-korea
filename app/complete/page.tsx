import Link from "next/link";
import Script from "next/script";
import SlowVideoBg from "../_components/SlowVideoBg";

export default function CompletePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden" style={{ backgroundColor: "#0f2b5b" }}>
      {/* 배경 비디오 */}
      <SlowVideoBg src="/video/bg_flight_01.mp4" rate={0.4} />
      {/* 오버레이 */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(13,32,69,0.85) 60%, rgba(7,20,40,0.90) 100%)" }} />

      {/* 모비온 문의 완료 경로 전환스크립트 */}
      <Script id="calldm-conversion" strategy="afterInteractive">{`
        window['callDM'] = window['callDM'] || function (){
          (window['callDM'].q = window['callDM'].q || []).push(arguments)
        };
        callDM();
      `}</Script>

      {/* Meta 전환 이벤트 - 문의 완료 */}
      <Script id="meta-lead" strategy="afterInteractive">{`
        fbq('track', 'Lead');
      `}</Script>

      <div className="relative z-10 w-full max-w-lg text-center" style={{ zIndex: 2 }}>
        {/* 로고 */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <svg className="w-7 h-7 text-[#93c5fd]" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z" fill="#93c5fd" fillOpacity="0.2" stroke="#93c5fd" strokeWidth="2" strokeLinejoin="round" />
            <path d="M11 16l3.5 3.5L21 12" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-white font-bold text-base">와이즈피플코리아</span>
        </div>

        {/* 카드 */}
        <div className="rounded-3xl bg-white px-8 py-12 shadow-2xl shadow-black/40 sm:px-12">
          {/* 체크 아이콘 */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#ecfdf5] shadow-sm">
            <svg className="h-10 w-10 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* 배지 */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ecfdf5] px-3 py-1 text-xs font-bold text-[#059669] mb-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#059669]" />
            </span>
            접수 완료
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5b] leading-tight mb-4">
            상담 신청이
            <br />
            완료되었습니다!
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-[#64748b] mb-8">
            담당 컨설턴트가 <strong className="text-[#1a56db]">24시간 이내</strong>에 연락드립니다.
            <br />
            잠시만 기다려 주세요.
          </p>

          {/* 안내 박스 */}
          <div className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] px-5 py-4 mb-8 text-left space-y-3">
            {[
              { icon: "✈️", text: "상담 완료 시 동남아 여행권 증정" },
              { icon: "🛡", text: "가입 권유 없는 순수 무료 보장 분석" },
              { icon: "📋", text: "보유 보험 전체 정밀 분석 리포트 제공" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="text-xl flex-shrink-0">{icon}</span>
                <p className="text-sm text-[#475569] font-medium">{text}</p>
              </div>
            ))}
          </div>

          {/* 홈으로 버튼 */}
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1a56db] py-4 text-base font-bold text-white shadow-lg shadow-[#1a56db]/30 transition hover:bg-[#1648c0]"
          >
            홈으로 돌아가기
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <p className="mt-4 text-xs text-[#94a3b8]">문의: 1661-5022</p>
        </div>
      </div>
    </div>
  );
}
