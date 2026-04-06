import ConsultForm from "../_components/ConsultForm";

export default function CancerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-[#1a56db]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z"
                fill="#1a56db"
                fillOpacity="0.15"
                stroke="#1a56db"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M11 16l3.5 3.5L21 12"
                stroke="#1a56db"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#0f2b5b] font-bold text-lg tracking-tight">
              와이즈피플코리아
            </span>
          </div>

          {/* 우측 */}
          <div className="flex items-center gap-3">
            <a
              href="tel:15880000"
              className="hidden sm:flex items-center gap-1.5 text-[#1a56db] font-semibold text-sm hover:text-[#1239a0] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              ☎ 1588-0000
            </a>
            <a
              href="#consult-form"
              className="btn-accent px-4 py-2 rounded-lg text-white font-semibold text-sm"
            >
              무료 암보험 분석
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, #0f2b5b 0%, #1e1040 50%, #1a56db 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* 상단 뱃지 */}
          <div className="flex justify-center mb-8 lg:justify-start">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-4 py-2 rounded-full">
              <span>🔬</span>
              암보험 무료 전문가 상담
            </span>
          </div>

          {/* Split 레이아웃 */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-center">
            {/* 왼쪽 콘텐츠 */}
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                암 치료, 제대로
                <br />
                <span className="text-[#fda4af]">대비하고 계신가요?</span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
                암 치료비·전이암 보장까지 전문가가 무료로 점검해드립니다
              </p>

              {/* 강조 포인트 */}
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 mb-8">
                <span className="text-[#fb923c] text-2xl font-extrabold">
                  월 1만원대로
                </span>
                <span className="text-white font-semibold text-base">
                  암보험 설계 가능
                </span>
              </div>

              {/* 체크리스트 */}
              <ul className="space-y-3 mb-10">
                {[
                  "암 치료비 대비 보장 정밀 분석",
                  "전이암까지 완벽한 보장 설계",
                  "30초 보장 진단으로 현황 파악",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#dc2626] flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* 이벤트 뱃지 */}
              <div className="inline-flex items-center gap-2 bg-[#e85d04]/20 border border-[#e85d04]/40 text-white text-sm font-semibold px-4 py-2.5 rounded-full">
                <span>⚡</span>
                상담 고객 전원 동남아 여행권 응모 기회
              </div>

              {/* 모바일 CTA */}
              <div className="mt-8 lg:hidden">
                <a
                  href="#consult-form"
                  className="btn-pulse btn-accent inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold text-base w-full sm:w-auto"
                >
                  지금 무료로 암보험 분석하기 →
                </a>
              </div>
            </div>

            {/* 오른쪽 폼 카드 */}
            <div
              id="consult-form"
              className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7"
            >
              <ConsultForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="trust-bar py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "4명 중 1명", label: "한국인 암 발생률" },
              { value: "평균 3천만원", label: "암 치료 평균 비용" },
              { value: "월 1만원대", label: "설계 가능" },
              { value: "30초", label: "보장 진단" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-white font-extrabold text-xl sm:text-2xl leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-white/75 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 핵심 가치 섹션 ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">
              암보험, 이렇게 다릅니다
            </h2>
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
                desc: "AI 기반 분석으로 필요한 보장만 정확히 찾아드립니다",
              },
              {
                emoji: "⚡",
                title: "30초 보장 진단",
                desc: "간단한 질문으로 30초 안에 현재 보장 상태를 진단합니다",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-hover bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden"
              >
                {/* 상단 rose/red 강조 라인 */}
                <div className="h-1.5 bg-gradient-to-r from-[#dc2626] to-[#f43f5e]" />
                <div className="p-6">
                  <span className="text-4xl mb-4 block">{card.emoji}</span>
                  <h3 className="text-base font-bold text-[#1e293b] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 암 통계 긴급성 섹션 ===== */}
      <section className="py-16 sm:py-20" style={{ background: "#fff1f2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div
              className="mx-auto mb-4"
              style={{
                width: "48px",
                height: "4px",
                background: "#dc2626",
                borderRadius: "2px",
              }}
            />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">
              암, 남의 이야기가 아닙니다
            </h2>
          </div>

          {/* 3개 통계 포인트 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "🏥",
                stat: "4명 중 1명",
                desc: "한국인 4명 중 1명이 암 진단을 받습니다",
                color: "#dc2626",
              },
              {
                icon: "💰",
                stat: "3,000만원+",
                desc: "암 치료 평균 비용: 3,000만원 이상",
                color: "#f43f5e",
              },
              {
                icon: "⏰",
                stat: "지금 당장",
                desc: "보장이 부족하면 치료 중에 경제적 위기가 옵니다",
                color: "#e85d04",
              },
            ].map((point) => (
              <div
                key={point.stat}
                className="card-hover bg-white rounded-2xl p-7 border border-[#fecdd3] shadow-sm text-center"
              >
                <span className="text-5xl mb-4 block">{point.icon}</span>
                <p
                  className="text-3xl font-extrabold mb-3 leading-tight"
                  style={{ color: point.color }}
                >
                  {point.stat}
                </p>
                <p className="text-sm text-[#64748b] leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 강조 메시지 카드 */}
          <div
            className="rounded-2xl p-7 text-center border border-[#fecdd3]"
            style={{
              background:
                "linear-gradient(135deg, #dc2626 0%, #f43f5e 50%, #fb7185 100%)",
            }}
          >
            <span className="text-3xl mb-4 block">⚠️</span>
            <p className="text-white font-extrabold text-xl sm:text-2xl leading-snug mb-3">
              암 진단은 예고 없이 찾아옵니다.
            </p>
            <p className="text-white/90 text-base font-medium">
              지금 보장 현황을 확인하세요.
            </p>
            <a
              href="#consult-form"
              className="mt-6 inline-flex items-center justify-center bg-white text-[#dc2626] font-bold px-8 py-3.5 rounded-xl text-base hover:bg-[#fff1f2] transition-colors"
            >
              무료로 보장 진단받기 →
            </a>
          </div>
        </div>
      </section>

      {/* ===== 기대 효과 섹션 ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">
              상담 후 달라지는 것들
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                emoji: "💸",
                number: "01",
                title: "보험료 절감",
                desc: "평균 5~10% 보험료 절감 가능 (불필요 보험 정리)",
                color: "#1a56db",
              },
              {
                emoji: "🔄",
                number: "02",
                title: "불필요 보험 정리",
                desc: "중복된 보장을 정리하고 실속 있는 구성으로 변경",
                color: "#059669",
              },
              {
                emoji: "🛡️",
                number: "03",
                title: "필요한 보장만 강화",
                desc: "암 관련 핵심 보장만 집중 강화",
                color: "#dc2626",
              },
            ].map((effect) => (
              <div
                key={effect.title}
                className="card-hover relative bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 sm:p-7 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                  style={{ background: effect.color }}
                />
                <span
                  className="absolute top-4 right-5 text-4xl font-extrabold opacity-10 leading-none select-none"
                  style={{ color: effect.color }}
                >
                  {effect.number}
                </span>
                <span className="text-4xl mb-4 block">{effect.emoji}</span>
                <h3 className="text-lg font-bold text-[#1e293b] mb-2">
                  {effect.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {effect.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 이벤트 섹션 ===== */}
      <section
        className="py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #7c3300 0%, #c2410c 50%, #f97316 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* 뱃지 */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white text-[#c2410c] font-bold text-sm px-5 py-2 rounded-full shadow-sm">
              🎁 상담 고객 전원 혜택
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            동남아 3박 5일 풀패키지
            <br />
            여행권 증정
          </h2>
          <p className="text-white/80 text-base mb-10">
            암보험 무료 상담 완료 고객 전원 추첨 응모 자격 부여
          </p>

          {/* 포함 항목 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: "🏨", text: "리조트 숙박" },
              { icon: "🏄", text: "액티비티 지원" },
              { icon: "🚗", text: "차량 지원" },
            ].map((item) => (
              <div
                key={item.text}
                className="bg-white/15 border border-white/25 rounded-xl px-5 py-4 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white font-semibold text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#consult-form"
            className="inline-flex items-center justify-center bg-white text-[#c2410c] font-bold px-10 py-4 rounded-xl text-base shadow-lg hover:bg-[#fff7ed] transition-colors"
          >
            지금 상담 신청하고 여행권 응모하기 →
          </a>
        </div>
      </section>

      {/* ===== FAQ 섹션 ===== */}
      <section className="bg-[#f8fafc] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">
              궁금하신 점을 해결해드립니다
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "보험 신규 가입을 강요하나요?",
                a: "아닙니다. 현재 보험 분석과 보장 점검만 진행합니다. 가입은 고객님의 선택입니다.",
              },
              {
                q: "가족 보험도 통합 점검이 가능한가요?",
                a: "가능합니다. 가족 구성원 전체의 보험을 한 번에 점검하고 통합 관리를 도와드립니다.",
              },
              {
                q: "전문가 상담은 어떻게 진행되나요?",
                a: "전화 또는 카카오톡으로 1:1 전담 컨설턴트가 직접 상담합니다.",
              },
              {
                q: "이벤트 추첨은 공정하게 진행되나요?",
                a: "상담 완료 고객 전원을 대상으로 공정한 랜덤 추첨을 진행합니다.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-extrabold text-sm">
                    Q
                  </span>
                  <div>
                    <p className="font-bold text-[#1e293b] text-base mb-3">
                      {faq.q}
                    </p>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#1a56db] font-extrabold text-xs mt-0.5">
                        A
                      </span>
                      <p className="text-sm text-[#64748b] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "#0f2b5b" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* 좌측 */}
            <div className="lg:flex-[3] text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
                지금 바로 암보험 무료 분석을
                <br />
                <span className="text-[#fda4af]">받으세요</span>
              </h2>

              <ul className="space-y-3 mb-8">
                {[
                  "100% 무료 · 가입 권유 없음",
                  "암 치료비·전이암 전문 보장 분석",
                  "1:1 전담 컨설턴트 배정",
                  "30초 보장 진단 즉시 제공",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-white justify-center lg:justify-start"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#dc2626] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                ☎ 1588-0000
              </a>
            </div>

            {/* 우측 폼 */}
            <div className="lg:flex-[2] w-full max-w-md lg:max-w-none bg-white rounded-2xl shadow-2xl p-6 sm:p-7">
              <ConsultForm variant="bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#071a38] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-7 h-7 text-[#93c5fd]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z"
                  fill="#93c5fd"
                  fillOpacity="0.2"
                  stroke="#93c5fd"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 16l3.5 3.5L21 12"
                  stroke="#93c5fd"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white font-bold text-base">
                와이즈피플코리아
              </span>
            </div>
            <a
              href="tel:15880000"
              className="text-[#93c5fd] font-semibold text-sm hover:text-white transition-colors"
            >
              ☎ 1588-0000
            </a>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-white/50 text-xs leading-relaxed mb-2">
              상호: 주식회사 와이즈피플코리아 &nbsp;|&nbsp; 사업자등록번호:
              000-00-00000 &nbsp;|&nbsp; 대표: 홍길동
            </p>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              주소: 서울특별시 강남구 테헤란로 000, 00층 &nbsp;|&nbsp; 이메일:
              info@wisepplkorea.com
            </p>
            <p className="text-white/30 text-xs">
              © 2026 와이즈피플코리아. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
