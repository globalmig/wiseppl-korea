import ConsultForm from "../_components/ConsultForm";
import FAQAccordion from "../_components/FAQAccordion";

export default function TravelPage() {
  return (
    <>
      {/* ───────────────────────────────────────────
          1. HEADER (sticky)
      ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#1a56db] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
              </svg>
            </div>
            <span className="font-700 text-[#0f2b5b] text-base leading-tight">
              와이즈피플코리아
            </span>
          </div>

          {/* 우측 CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:15880000"
              className="hidden sm:flex items-center gap-1.5 text-sm font-600 text-[#1a56db]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              ☎ 1588-0000
            </a>
            <a
              href="#consult-form"
              className="btn-accent text-white text-sm font-700 px-4 py-2 rounded-lg whitespace-nowrap"
            >
              무료 상담 신청
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ───────────────────────────────────────────
            2. EVENT HERO SECTION
        ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-16 sm:py-24"
          style={{ background: "linear-gradient(135deg, #0d4a3e 0%, #0d9488 50%, #0ea5e9 100%)" }}
        >
          {/* 배경 장식 */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #ffffff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)",
            }}
          />

          <div className="relative max-w-4xl mx-auto px-4 text-center">
            {/* 이벤트 뱃지 */}
            <div className="inline-flex items-center gap-2 bg-[#e85d04] text-white text-xs sm:text-sm font-700 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              <span>🎁</span>
              <span>LIMITED EVENT</span>
            </div>

            {/* 서브 타이틀 */}
            <p className="text-[#a7f3d0] text-sm sm:text-base font-500 mb-3 animate-fade-in-up">
              보험 점검 완료 고객 전원 증정
            </p>

            {/* H1 메인 타이틀 */}
            <h1 className="text-white font-800 text-3xl sm:text-4xl md:text-5xl leading-tight mb-5 animate-fade-in-up">
              동남아 3박 5일<br />풀패키지 여행권 증정
            </h1>

            {/* 포함 항목 강조 */}
            <div className="inline-flex flex-wrap justify-center gap-x-3 gap-y-1 bg-white/15 rounded-xl px-5 py-3 mb-6 backdrop-blur-sm animate-fade-in-up">
              <span className="text-white text-sm font-600">✈ 리조트 숙박</span>
              <span className="text-[#a7f3d0]">+</span>
              <span className="text-white text-sm font-600">액티비티</span>
              <span className="text-[#a7f3d0]">+</span>
              <span className="text-white text-sm font-600">차량 지원 모두 포함</span>
            </div>

            {/* 설명 */}
            <p className="text-[#ccfbf1] text-sm sm:text-base leading-relaxed mb-8 animate-fade-in-up">
              보장 분석 전문가에게 보험 점검을 받으신 모든 고객께<br className="hidden sm:block" />
              동남아 여행 응모 기회를 드립니다
            </p>

            {/* CTA 버튼 */}
            <a
              href="#consult-form"
              className="btn-pulse btn-accent inline-block text-white font-700 text-base sm:text-lg px-8 sm:px-12 py-4 rounded-2xl shadow-xl mb-10 animate-fade-in-up"
            >
              지금 바로 상담 신청하기 →
            </a>

            {/* 수혜 통계 3개 */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto">
              {[
                { label: "상담 완료 고객", value: "전원" },
                { label: "풀패키지", value: "3박 5일" },
                { label: "추첨 공정 진행", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-xl py-3 px-2 backdrop-blur-sm">
                  <div className="text-white font-800 text-xl sm:text-2xl leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#99f6e4] text-xs leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            3. 이벤트 혜택 상세 섹션 (흰 배경)
        ─────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="section-divider mx-auto mb-4" style={{ background: "#0d9488" }} />
              <h2 className="text-2xl sm:text-3xl font-800 text-[#1e293b]">
                이런 혜택이 포함됩니다
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: "🏨",
                  title: "리조트 숙박",
                  desc: "동남아 프리미엄 리조트 3박 숙박권 포함",
                  accent: "#0d9488",
                  bg: "#f0fdfa",
                },
                {
                  icon: "🏄",
                  title: "액티비티",
                  desc: "수상 스포츠, 관광 투어 등 현지 액티비티 지원",
                  accent: "#0ea5e9",
                  bg: "#eff6ff",
                },
                {
                  icon: "🚗",
                  title: "차량 지원",
                  desc: "공항 픽업, 관광지 이동 차량 제공",
                  accent: "#e85d04",
                  bg: "#fff7ed",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-hover rounded-2xl border border-[#e2e8f0] p-7 text-center"
                  style={{ background: item.bg }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                    style={{ background: `${item.accent}20` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-700 text-[#1e293b] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            4. 상담 서비스 내용 섹션 (#eff6ff)
        ─────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-[#eff6ff]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="section-divider mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-800 text-[#1e293b]">
                상담 시 이런 서비스를 받으실 수 있어요
              </h2>
            </div>

            <div className="space-y-4">
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
              ].map((item) => (
                <div
                  key={item.no}
                  className="card-hover bg-white rounded-2xl border border-[#e2e8f0] px-6 py-5 flex items-center gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a56db] text-white flex items-center justify-center font-800 text-base">
                    {item.no}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-700 text-[#1e293b] text-base mb-0.5">{item.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden sm:flex flex-shrink-0 w-8 h-8 rounded-full bg-[#eff6ff] items-center justify-center">
                    <svg className="w-4 h-4 text-[#1a56db]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            5. 보험 나이 긴급성 섹션 (네이비 배경)
        ─────────────────────────────────────────── */}
        <section className="hero-gradient py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-800 text-white mb-3">
                보험 나이, 6개월마다 올라갑니다
              </h2>
              <p className="text-[#93c5fd] text-sm sm:text-base">
                지금 점검하지 않으면 보험료 부담이 계속 커집니다
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-white font-700 text-lg mb-2">
                  보험 나이는 실제 나이보다 빠르게 상승합니다
                </h3>
                <p className="text-[#93c5fd] text-sm leading-relaxed">
                  보험사는 생일 기준 <strong className="text-white">6개월마다</strong> 보험 나이를 올립니다.
                  같은 상품이라도 나이에 따라 보험료가 크게 달라집니다.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <div className="text-3xl mb-3">💸</div>
                <h3 className="text-white font-700 text-lg mb-2">
                  보험료 평균 5~10% 상승
                </h3>
                <p className="text-[#93c5fd] text-sm leading-relaxed">
                  보험 나이가 오를수록 <strong className="text-white">보험료도 자동 인상</strong>됩니다.
                  미룰수록 매달 내야 하는 보험료 부담이 늘어납니다.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#a5f3fc] font-700 text-lg mb-5">
                지금이 최적의 타이밍입니다
              </p>
              <a
                href="#consult-form"
                className="btn-pulse btn-accent inline-block text-white font-700 text-base px-8 py-4 rounded-2xl shadow-xl"
              >
                지금 바로 보험 점검 받기 →
              </a>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            6. 상담 신청 폼 섹션
        ─────────────────────────────────────────── */}
        <section id="consult-form" className="py-14 sm:py-20 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="section-divider mx-auto mb-4" style={{ background: "#0d9488" }} />
              <h2 className="text-2xl sm:text-3xl font-800 text-[#1e293b]">
                상담 신청 + 여행 이벤트 동시 응모
              </h2>
              <p className="text-[#64748b] text-sm sm:text-base mt-2">
                아래 폼을 작성하시면 상담과 이벤트 응모가 동시에 완료됩니다
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
              {/* 좌측: 이벤트 안내 */}
              <div
                className="rounded-2xl p-6 sm:p-8 text-white"
                style={{ background: "linear-gradient(135deg, #0d4a3e 0%, #0d9488 100%)" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">✈</span>
                  <h3 className="font-700 text-lg">이벤트 안내</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "응모 자격", value: "상담 완료 고객 전원" },
                    { label: "당첨 혜택", value: "동남아 3박 5일 풀패키지" },
                    { label: "추첨 방식", value: "공정 랜덤 추첨" },
                    { label: "발표", value: "매월 마지막 주 금요일" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#6ee7d4] mt-1.5" />
                      <div className="flex-1 min-w-0">
                        <span className="text-[#99f6e4] text-xs block mb-0.5">{row.label}</span>
                        <span className="text-white font-600 text-sm">{row.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 bg-white/10 rounded-xl p-4 border border-white/20">
                  <p className="text-[#ccfbf1] text-xs leading-relaxed">
                    🎁 <strong className="text-white">상담 신청만 해도</strong> 자동으로 여행 이벤트에 응모됩니다.
                    별도 응모 절차가 필요하지 않습니다.
                  </p>
                </div>
              </div>

              {/* 우측: 폼 */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-6 sm:p-8">
                <ConsultForm variant="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            7. FAQ 섹션 (흰 배경)
        ─────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="section-divider mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-800 text-[#1e293b]">
                자주 묻는 질문
              </h2>
            </div>

            {/* 이 페이지 맞춤 정적 FAQ 카드 4개 */}
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
                <div
                  key={item.q}
                  className="rounded-xl border border-[#0d9488]/30 bg-[#f0fdfa] p-5"
                >
                  <p className="text-[#0d9488] font-700 text-sm mb-2">
                    <span className="font-800 mr-1">Q.</span>
                    {item.q}
                  </p>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    <span className="text-[#e85d04] font-700 mr-1">A.</span>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* 공통 FAQ 아코디언 */}
            <FAQAccordion />
          </div>
        </section>

        {/* ───────────────────────────────────────────
            8. 이벤트 CTA 섹션 (따뜻한 오렌지 그라디언트)
        ─────────────────────────────────────────── */}
        <section
          className="py-16 sm:py-24"
          style={{ background: "linear-gradient(135deg, #7c3300 0%, #c2410c 50%, #f97316 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="text-4xl mb-5">✈</div>
            <h2 className="text-2xl sm:text-3xl font-800 text-white mb-3 leading-snug">
              지금 상담 신청하면<br />
              동남아 여행권이 기다립니다
            </h2>
            <p className="text-orange-100 text-sm sm:text-base mb-8 leading-relaxed">
              보험 점검 완료 고객 전원 응모 기회 부여<br className="hidden sm:block" />
              이 기회를 놓치지 마세요
            </p>
            <a
              href="#consult-form"
              className="inline-block bg-white text-[#e85d04] font-800 text-base sm:text-lg px-10 py-4 rounded-2xl shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              지금 바로 상담 신청하기 →
            </a>
            <p className="text-orange-200 text-xs mt-5">
              ✓ 100% 무료 · 강요 없는 상담 · 이벤트 자동 응모
            </p>
          </div>
        </section>
      </main>

      {/* ───────────────────────────────────────────
          9. FOOTER (다크)
      ─────────────────────────────────────────── */}
      <footer className="bg-[#0f2b5b] text-[#94a3b8] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#1a56db] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
                </svg>
              </div>
              <span className="font-700 text-white text-sm">와이즈피플코리아</span>
            </div>
          </div>
          <div className="text-xs leading-relaxed space-y-1 mb-6">
            <p>사업자등록번호: 000-00-00000 &nbsp;|&nbsp; 대표자: 홍길동</p>
            <p>주소: 서울특별시 강남구 테헤란로 000, 0층</p>
            <p>대표번호: 1588-0000 &nbsp;|&nbsp; 이메일: contact@wiseppl.co.kr</p>
            <p className="text-[#64748b] pt-2 text-[11px]">
              본 페이지는 보험 상담 서비스 안내를 위한 이벤트 페이지입니다.
              이벤트 당첨 결과는 공정한 랜덤 추첨으로 진행되며, 당첨자에게는 개별 연락드립니다.
            </p>
          </div>
          <div className="border-t border-[#1e3a6e] pt-5 text-xs text-[#475569]">
            © 2026 와이즈피플코리아. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
