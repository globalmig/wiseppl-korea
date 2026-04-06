import ConsultForm from "./_components/ConsultForm";
import FAQAccordion from "./_components/FAQAccordion";

function QuickConsultCard({
  badge,
  title,
  description,
  points,
}: {
  badge: string;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#bfdbfe] bg-white p-6 sm:p-7 shadow-2xl">
      <span className="inline-flex items-center rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-bold text-[#1a56db]">
        {badge}
      </span>
      <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#0f2b5b]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
        {description}
      </p>
      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-[#1e293b]">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#1a56db]">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="font-medium">{point}</span>
          </li>
        ))}
      </ul>
      <a
        href="#consult-form"
        className="btn-accent mt-7 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-center text-base font-bold text-white"
      >
        문의하기
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────
   통합 랜딩 페이지
   섹션 순서:
   1. HEADER
   2. HERO (보장 분석 메인 + 여행 이벤트 뱃지)
   3. TRUST BAR
   4. 주요 혜택 (보장 분석)
   5. 암보험 전문 상담 섹션
   6. 보험 나이 긴급성
   7. 상담 효과
   8. 동남아 여행 이벤트
   9. 상담 서비스 내용 + 폼
   10. FAQ
   11. BOTTOM CTA
   12. FOOTER
───────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          1. HEADER
      ══════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-[#1a56db]" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z"
                fill="#1a56db" fillOpacity="0.15" stroke="#1a56db" strokeWidth="2" strokeLinejoin="round"
              />
              <path d="M11 16l3.5 3.5L21 12" stroke="#1a56db" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#0f2b5b] font-bold text-lg tracking-tight">와이즈피플코리아</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:15880000"
              className="hidden sm:flex items-center gap-1.5 text-[#1a56db] font-semibold text-sm hover:text-[#1239a0] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              ☎ 1588-0000
            </a>
            <a href="#consult-form" className="btn-accent px-4 py-2 rounded-lg text-white font-semibold text-sm">
              무료 상담 신청
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          2. HERO — 보장 분석 메인 메시지
      ══════════════════════════════════════ */}
      <section className="hero-gradient py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* 뱃지 행 */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-4 py-2 rounded-full">
              <span className="text-[#fbbf24]">✦</span> 무료 보장 분석 전문 서비스
            </span>
            <span className="inline-flex items-center gap-2 bg-[#e85d04]/80 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
              🎁 상담 완료 시 동남아 여행권 응모
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            {/* 좌측 콘텐츠 */}
            <div className="lg:flex-[2] animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                나만의 보장 분석 전문가에게
                <br />
                <span className="text-[#93c5fd]">보험 상담을 맡기세요</span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
                복잡한 보험, 이제 전문가가 1:1로 무료 분석해드립니다
                <br className="hidden sm:block" />
                암보험부터 전체 보장까지 맞춤 점검 제공
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "가입 권유 없는 100% 무료 상담",
                  "25개 보험사 비교 맞춤형 분석",
                  "원하는 날짜·시간 자유롭게 선택",
                  "가족 보험 통합 관리 가능",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#consult-form"
                className="lg:hidden btn-pulse btn-accent inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold text-base w-full sm:w-auto"
              >
                지금 무료로 신청하기 →
              </a>
            </div>

            {/* 우측 폼 */}
            <div className="lg:flex-1">
              <QuickConsultCard
                badge="빠른 문의"
                title="문의는 마지막 섹션에서 한 번만 진행됩니다"
                description="중간에 반복되던 폼은 제거하고, 버튼을 누르면 하단 문의하기 섹션으로 바로 이동하도록 정리했습니다."
                points={[
                  "하단 실제 문의 폼으로 즉시 이동",
                  "중복 입력 없이 한 번만 신청",
                  "전화 상담과 무료 분석 동선 유지",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. TRUST BAR
      ══════════════════════════════════════ */}
      <section className="trust-bar py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "12,847건+", label: "누적 상담" },
              { value: "98.3%", label: "고객 만족도" },
              { value: "월 4.2만원", label: "평균 절감액" },
              { value: "25개+", label: "비교 보험사" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-white font-extrabold text-2xl sm:text-3xl leading-none mb-1">{stat.value}</span>
                <span className="text-white/75 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. 주요 혜택 (보장 분석)
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">이런 혜택을 받으실 수 있어요</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "📅",
                title: "원하는 날짜·시간 상담",
                desc: "바쁜 일정에 맞춰 원하는 시간에 1:1 전담 상담을 받으세요",
              },
              {
                emoji: "🔬",
                title: "복잡한 보험 정밀 분석",
                desc: "상세 보장 분석 리포트 제공. 한눈에 보험 현황을 파악하세요",
              },
              {
                emoji: "🛡️",
                title: "가입 권유 없는 무료 상담",
                desc: "오직 객관적 분석만 제공합니다. 불필요한 권유는 절대 없습니다",
              },
              {
                emoji: "👨‍👩‍👧‍👦",
                title: "가족 보험 통합 관리",
                desc: "가족 전체 보험을 한 번에 점검하고 최적화해 드립니다",
              },
            ].map((card) => (
              <div key={card.title} className="card-hover bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden">
                <div className="h-1 bg-[#1a56db]" />
                <div className="p-6">
                  <span className="text-4xl mb-4 block">{card.emoji}</span>
                  <h3 className="text-base font-bold text-[#1e293b] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. 암보험 전문 상담 섹션
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-20" style={{ background: "#fff1f2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="mx-auto mb-4" style={{ width: 48, height: 4, background: "#dc2626", borderRadius: 2 }} />
            <span className="inline-flex items-center gap-2 bg-[#dc2626]/10 text-[#dc2626] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              🔬 암보험 무료 전문가 상담
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">
              암 치료, 제대로 대비하고 계신가요?
            </h2>
            <p className="text-[#64748b] text-sm sm:text-base mt-3">
              암 치료비·전이암 보장까지 전문가가 무료로 점검해드립니다
            </p>
          </div>

          {/* 강조 포인트 */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white border border-[#fecdd3] rounded-2xl px-6 py-4 shadow-sm">
              <span className="text-[#dc2626] text-2xl font-extrabold">월 1만원대로</span>
              <span className="text-[#1e293b] font-semibold text-base">암보험 설계 가능</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🎯",
                title: "암 치료비 대비 보장 분석",
                desc: "실제 암 치료에 필요한 비용을 기준으로 현재 보장의 충분성을 분석합니다",
              },
              {
                emoji: "🔗",
                title: "전이암까지 보장 설계",
                desc: "초기암부터 전이암까지 단계별 보장 공백을 없앱니다",
              },
              {
                emoji: "🧠",
                title: "부족한 보장 스마트 분석",
                desc: "필요한 보장만 정확히 찾아 불필요한 보험료를 줄여드립니다",
              },
              {
                emoji: "⚡",
                title: "30초 보장 진단",
                desc: "간단한 질문으로 30초 안에 현재 보장 상태를 진단합니다",
              },
            ].map((card) => (
              <div key={card.title} className="card-hover bg-white border border-[#fecdd3] rounded-2xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-[#dc2626] to-[#f43f5e]" />
                <div className="p-6">
                  <span className="text-4xl mb-4 block">{card.emoji}</span>
                  <h3 className="text-base font-bold text-[#1e293b] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 암 통계 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            {[
              { icon: "🏥", stat: "4명 중 1명", desc: "한국인 암 발생률", color: "#dc2626" },
              { icon: "💰", stat: "3,000만원+", desc: "암 치료 평균 비용", color: "#f43f5e" },
              { icon: "⏰", stat: "지금 당장", desc: "보장이 부족하면 치료 중 경제적 위기", color: "#e85d04" },
            ].map((point) => (
              <div key={point.stat} className="card-hover bg-white rounded-2xl p-7 border border-[#fecdd3] shadow-sm text-center">
                <span className="text-5xl mb-4 block">{point.icon}</span>
                <p className="text-3xl font-extrabold mb-3 leading-tight" style={{ color: point.color }}>{point.stat}</p>
                <p className="text-sm text-[#64748b] leading-relaxed font-medium">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. 보험 나이 긴급성
      ══════════════════════════════════════ */}
      <section className="bg-[#eff6ff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">지금 점검하지 않으면 손해입니다</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* 포인트 목록 */}
            <div className="lg:flex-1 space-y-5">
              {[
                {
                  icon: "⏰",
                  title: "보험 나이는 6개월마다 상승합니다",
                  desc: "보험사는 생일 기준 6개월마다 보험 나이를 올립니다. 같은 상품이라도 나이에 따라 보험료가 크게 달라집니다.",
                },
                {
                  icon: "📈",
                  title: "보험료 평균 5~10% 인상",
                  desc: "매년 보험 나이가 오를 때마다 동일한 보장을 위해 더 많은 보험료를 내야 합니다.",
                },
                {
                  icon: "✅",
                  title: "지금 점검하면 최적의 보험 조건 확인 가능",
                  desc: "지금이 바로 최적의 보험료로 최대 보장을 설계할 수 있는 타이밍입니다.",
                },
              ].map((point) => (
                <div key={point.title} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#e2e8f0] shadow-sm">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{point.icon}</span>
                  <div>
                    <p className="font-bold text-[#1e293b] text-sm sm:text-base mb-1">{point.title}</p>
                    <p className="text-sm text-[#64748b] leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 강조 카드 */}
            <div className="lg:w-80 flex-shrink-0">
              <div
                className="rounded-2xl p-7 h-full flex flex-col justify-between"
                style={{ background: "linear-gradient(135deg, #0f2b5b 0%, #1a3a7a 100%)" }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-4 leading-snug">
                    보험 나이가 오를수록<br />보험료도 올라갑니다.
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-6">
                    지금이 최적의 타이밍입니다. 더 이상 미루지 말고 지금 바로 무료 분석을 받아보세요.
                  </p>
                  <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20">
                    <p className="text-white/90 text-xs font-medium text-center">매년 보험 나이 1세 증가 시</p>
                    <p className="text-[#fbbf24] text-2xl font-extrabold text-center mt-1">보험료 5~10% 상승</p>
                  </div>
                </div>
                <a href="#consult-form" className="btn-pulse btn-accent w-full py-4 rounded-xl text-white font-bold text-sm text-center block">
                  지금 바로 무료 점검받기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. 상담 효과
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">상담 후 이런 변화가 생깁니다</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                emoji: "🔄",
                number: "01",
                title: "중복 보장 정리",
                desc: "불필요한 보험료를 절감하고 꼭 필요한 보장만 남깁니다",
                color: "#1a56db",
              },
              {
                emoji: "💪",
                number: "02",
                title: "부족한 보장 강화",
                desc: "사각지대 없이 완벽한 보장 라인업을 구성합니다",
                color: "#059669",
              },
              {
                emoji: "✨",
                number: "03",
                title: "라이프스타일 맞춤 리모델링",
                desc: "현재 생활방식에 딱 맞는 보험 구조로 재설계합니다",
                color: "#e85d04",
              },
            ].map((effect) => (
              <div
                key={effect.title}
                className="card-hover relative bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 sm:p-7 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: effect.color }} />
                <span
                  className="absolute top-4 right-5 text-4xl font-extrabold opacity-10 leading-none select-none"
                  style={{ color: effect.color }}
                >
                  {effect.number}
                </span>
                <span className="text-4xl mb-4 block">{effect.emoji}</span>
                <h3 className="text-lg font-bold text-[#1e293b] mb-2">{effect.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{effect.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. 동남아 여행 이벤트
      ══════════════════════════════════════ */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "linear-gradient(135deg, #0d4a3e 0%, #0d9488 50%, #0ea5e9 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            {/* 이벤트 뱃지 */}
            <div className="inline-flex items-center gap-2 bg-[#e85d04] text-white text-sm font-bold px-5 py-2 rounded-full mb-6">
              <span>🎁</span>
              <span>LIMITED EVENT · 상담 완료 고객 전원</span>
            </div>
            <p className="text-[#a7f3d0] text-sm sm:text-base font-medium mb-3">보험 점검 받고 동남아 여행 기회까지</p>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight mb-5">
              동남아 3박 5일<br />풀패키지 여행권 증정
            </h2>
            <p className="text-[#ccfbf1] text-sm sm:text-base leading-relaxed mb-8">
              보장 분석 전문가에게 보험 점검을 받으신 모든 고객께<br className="hidden sm:block" />
              동남아 여행 응모 기회를 드립니다
            </p>
          </div>

          {/* 포함 항목 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: "🏨", title: "리조트 숙박", desc: "동남아 프리미엄 리조트 3박 숙박권 포함", accent: "#0d9488", bg: "rgba(255,255,255,0.12)" },
              { icon: "🏄", title: "액티비티", desc: "수상 스포츠, 관광 투어 등 현지 액티비티 지원", accent: "#0ea5e9", bg: "rgba(255,255,255,0.12)" },
              { icon: "🚗", title: "차량 지원", desc: "공항 픽업, 관광지 이동 차량 제공", accent: "#e85d04", bg: "rgba(255,255,255,0.12)" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/25 p-6 text-center"
                style={{ background: item.bg }}
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                <p className="text-[#a7f3d0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 이벤트 안내 박스 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 mb-8 max-w-xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: "응모 자격", value: "상담 완료 전원" },
                { label: "당첨 혜택", value: "3박 5일" },
                { label: "추첨 방식", value: "공정 랜덤" },
                { label: "발표", value: "매월 마지막 금" },
              ].map((row) => (
                <div key={row.label}>
                  <p className="text-[#99f6e4] text-xs mb-1">{row.label}</p>
                  <p className="text-white font-bold text-sm">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="#consult-form"
              className="btn-pulse btn-accent inline-block text-white font-bold text-base sm:text-lg px-10 py-4 rounded-2xl shadow-xl"
            >
              지금 상담 신청하고 여행권 응모하기 →
            </a>
            <p className="text-[#a7f3d0] text-xs mt-4">✓ 상담 신청만 해도 자동으로 이벤트 응모 완료</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. 상담 서비스 내용 + 폼
      ══════════════════════════════════════ */}
      <section className="bg-[#f8fafc] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">상담 신청 + 이벤트 응모 동시 완료</h2>
            <p className="text-[#64748b] text-sm sm:text-base mt-2">아래 폼을 작성하시면 상담과 이벤트 응모가 동시에 완료됩니다</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* 좌측: 상담 서비스 내용 */}
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-[#1e293b] mb-5">상담 시 이런 서비스를 받으실 수 있어요</h3>
              {[
                {
                  no: "01",
                  title: "보험 리모델링 상담",
                  desc: "현재 보험을 분석하고 최적화된 보험 구조로 재설계합니다",
                },
                {
                  no: "02",
                  title: "상세 보장 분석 리포트",
                  desc: "25개 이상 보험사를 비교한 맞춤형 분석 리포트를 제공합니다",
                },
                {
                  no: "03",
                  title: "가족 보험 통합 점검",
                  desc: "가족 전체 보험을 한 번에 점검하고 통합 관리합니다",
                },
                {
                  no: "04",
                  title: "암보험 전문 보장 설계",
                  desc: "암 치료비·전이암까지 빈틈없는 보장을 설계해드립니다",
                },
              ].map((item) => (
                <div
                  key={item.no}
                  className="card-hover bg-white rounded-2xl border border-[#e2e8f0] px-6 py-5 flex items-center gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a56db] text-white flex items-center justify-center font-extrabold text-base">
                    {item.no}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1e293b] text-base mb-0.5">{item.title}</h4>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 우측: 폼 */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-6 sm:p-8">
              <QuickConsultCard
                badge="문의 바로가기"
                title="준비되셨다면 마지막 문의하기 섹션으로 이동하세요"
                description="안내 내용을 확인한 뒤 바로 신청할 수 있도록 이 구간은 간단한 CTA 섹션으로 변경했습니다."
                points={[
                  "버튼 클릭 시 하단 문의하기로 이동",
                  "이벤트 참여 흐름은 그대로 유지",
                  "모바일에서도 빠르게 접근 가능",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. FAQ
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">자주 묻는 질문</h2>
          </div>

          {/* 핵심 FAQ 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                q: "보험 강요가 있나요?",
                a: "전혀 없습니다. 보험 점검과 상담만으로도 이벤트 응모가 가능하며, 가입 여부는 전적으로 고객님이 결정하십니다.",
              },
              {
                q: "기존 보험 분석만 받을 수 있나요?",
                a: "네, 물론입니다. 신규 가입 없이 현재 보험을 점검하고 분석 리포트만 받으셔도 이벤트 응모 자격이 부여됩니다.",
              },
              {
                q: "가족 보험도 동시에 점검 받을 수 있나요?",
                a: "가능합니다. 가족 전체 보험을 한 번의 상담으로 통합 점검받으실 수 있으며, 추가 비용은 없습니다.",
              },
              {
                q: "비대면 상담도 가능한가요?",
                a: "네, 전화·카카오톡 등 비대면 상담을 지원합니다. 직접 방문 없이도 편리하게 보험 점검을 받으실 수 있습니다.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-[#1a56db]/20 bg-[#eff6ff] p-5">
                <p className="text-[#1a56db] font-bold text-sm mb-2">
                  <span className="font-extrabold mr-1">Q.</span>{item.q}
                </p>
                <p className="text-[#475569] text-sm leading-relaxed">
                  <span className="text-[#e85d04] font-bold mr-1">A.</span>{item.a}
                </p>
              </div>
            ))}
          </div>

          {/* 공통 FAQ 아코디언 */}
          <FAQAccordion />
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. BOTTOM CTA
      ══════════════════════════════════════ */}
      <section id="consult-form" className="hero-gradient scroll-mt-24 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="lg:flex-[3] text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
                지금 바로 무료 보장 분석을<br />받으세요
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "완전 무료 · 가입 권유 없음",
                  "25개 보험사 비교 분석",
                  "암보험 전문 보장 설계 포함",
                  "상담 완료 시 동남아 여행권 응모",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-white justify-center lg:justify-start">
                    <span className="w-5 h-5 rounded-full bg-[#059669] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:15880000"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-white/25 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                ☎ 1588-0000
              </a>
            </div>
            <div className="lg:flex-[2] w-full max-w-md lg:max-w-none bg-white rounded-2xl shadow-2xl p-6 sm:p-7">
              <ConsultForm variant="bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          12. FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-[#0f2b5b] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-7 h-7 text-[#93c5fd]" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z"
                  fill="#93c5fd" fillOpacity="0.2" stroke="#93c5fd" strokeWidth="2" strokeLinejoin="round"
                />
                <path d="M11 16l3.5 3.5L21 12" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white font-bold text-base">와이즈피플코리아</span>
            </div>
            <a href="tel:15880000" className="text-[#93c5fd] font-semibold text-sm hover:text-white transition-colors">
              ☎ 1588-0000
            </a>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/50 text-xs leading-relaxed mb-2">
              상호: 주식회사 와이즈피플코리아 &nbsp;|&nbsp; 사업자등록번호: 000-00-00000 &nbsp;|&nbsp; 대표: 홍길동
            </p>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              주소: 서울특별시 강남구 테헤란로 000, 00층 &nbsp;|&nbsp; 이메일: info@wisepplkorea.com
            </p>
            <p className="text-white/30 text-xs">© 2026 와이즈피플코리아. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
