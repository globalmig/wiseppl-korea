import Image from "next/image";
import BottomConsultForm from "./_components/BottomConsultForm";
import FAQAccordion from "./_components/FAQAccordion";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import ScrollAnimations from "./_components/ScrollAnimations";
import BenefitCardList from "./_components/BenefitCardList";
import AnalysisCardGrid from "./_components/AnalysisCardGrid";
import TwemojiWrapper from "./_components/TwemojiWrapper";
import BenefitStepCards from "./_components/BenefitStepCards";
import Header from "./_components/Header";
import SlowVideoBg from "./_components/SlowVideoBg";
import Link from "next/link";

export default function Page() {
  return (
    <TwemojiWrapper>
      <div className="min-h-screen bg-[#0a1628]">
        <Header />
        {/* HERO */}
        <section className="relative overflow-hidden min-h-screen flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2045 40%, #0a1e3d 70%, #071428 100%)" }}>
          {/* 별빛 배경 */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {[...Array(40)].map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: i % 5 === 0 ? "3px" : "2px",
                  height: i % 5 === 0 ? "3px" : "2px",
                  opacity: 0.2 + (i % 4) * 0.12,
                  top: `${(i * 37 + 11) % 90}%`,
                  left: `${(i * 53 + 7) % 95}%`,
                }}
              />
            ))}
            <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-[#1a56db] opacity-10 blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-[#3b82f6] opacity-8 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 pt-28 pb-0 flex-1 flex flex-col">
            {/* eyebrow */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60a5fa] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#60a5fa]" />
                </span>
                와이즈피플코리아 보험 전문 상담
              </span>
            </div>

            {/* headline */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.1] tracking-tight text-white">
                내 보험, 제대로
                <br />
                <span className="bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent">보장받고 계신가요?</span>
              </h1>
              <p className="mt-5 mx-auto max-w-md text-sm sm:text-base leading-relaxed text-white/70">
                지금 바로 보장 분석을 받아보세요.
                <br />
                상담만 받아도 동남아 무료 여행권을 드립니다.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="#consult-form"
                className="inline-flex h-13 items-center justify-center rounded-2xl bg-[#1a56db] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-[#1a56db]/40 transition hover:bg-[#1648c0]"
              >
                여행권 받고 상담하기 →
              </Link>
              <Link
                href="#benefit-analysis"
                className="inline-flex h-13 items-center justify-center rounded-2xl border border-white/25 bg-white/8 px-8 py-3.5 text-base font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/15"
              >
                보장분석 알아보기 ›
              </Link>
            </div>

            {/* 캐릭터 + 플로팅 카드 */}
            <div className="relative mx-auto mt-10 w-full flex justify-center flex-1 min-h-[320px]">
              {/* 왼쪽 상단 — 집 아이콘 카드 */}
              <div className="absolute left-4 top-0 hidden md:block animate-float z-10">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md">
                  <span className="text-3xl">🏠</span>
                  <div>
                    <p className="text-xs font-bold text-white">내 집 보장</p>
                    <p className="text-xs text-white/60">화재·재물 분석</p>
                  </div>
                </div>
              </div>

              {/* 오른쪽 상단 — 방패 카드 */}
              <div className="absolute right-4 top-4 hidden md:block animate-float-alt z-10">
                <div className="rounded-2xl border border-[#1a56db]/40 bg-[#1a56db]/20 px-5 py-3 shadow-xl backdrop-blur-md text-center">
                  <p className="text-xs font-bold text-[#93c5fd]">보장 분석 완료</p>
                  <p className="text-sm font-extrabold text-white mt-0.5">최적 플랜 발견!</p>
                  <span className="inline-block mt-1 text-lg">🛡</span>
                </div>
              </div>

              {/* 왼쪽 하단 — 여행권 카드 */}
              <div className="absolute left-4 bottom-16 hidden md:block animate-float z-10" style={{ animationDelay: "0.5s" }}>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-semibold text-white/60 mb-0.5">이벤트 당첨</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✈️</span>
                    <p className="text-xs font-extrabold text-white">여행권 증정 🎁</p>
                  </div>
                </div>
              </div>

              {/* 오른쪽 중단 — 달러 카드 */}
              <div className="absolute right-4 bottom-20 hidden md:block animate-float-alt z-10" style={{ animationDelay: "1s" }}>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💵</span>
                    <div>
                      <p className="text-xs font-bold text-white">보험료 절감</p>
                      <p className="text-[10px] text-white/60">평균 5~10%↓</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 말풍선 */}
              {/* <div className="absolute right-[18%] top-8 hidden lg:block z-10">
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-white/40" />
                    <span className="h-2 w-2 rounded-full bg-white/40" />
                    <span className="h-2 w-2 rounded-full bg-white/40" />
                  </div>
                </div>
              </div> */}

              {/* 캐릭터 이미지 */}
              <div className="flex items-end justify-center w-full sm:max-w-[60%] md:max-w-[45%] lg:max-w-[35%]">
                <Image
                  src="/hero/hero_thinking.png"
                  alt="보험 전문가 상담"
                  width={520}
                  height={420}
                  priority
                  style={{ filter: "drop-shadow(0 0 40px rgba(59,130,246,0.3))", width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* stats bar */}
          <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-3 divide-x divide-white/10">
              {[
                { value: "12,000+", label: "누적 상담 건수" },
                { value: "98%", label: "고객 만족도" },
                { value: "15년", label: "보험 전문 경력" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-0.5 px-4 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-white">{value}</span>
                  <span className="text-xs text-white/50">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 보장분석 섹션 */}
        <section id="benefit-analysis" className="bg-white py-16 md:py-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* 왼쪽 텍스트 */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-[#1a56db]" />
                  <span className="text-sm font-semibold text-[#1a56db] tracking-wide">보장분석</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#0f2b5b]">
                  내 보험,
                  <br />
                  제대로 알고 계신가요?
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#64748b]">
                  중복 가입, 보장 공백, 불필요한 보험료—
                  <br />
                  전문 FP가 꼼꼼히 분석해드립니다.
                </p>
                {/* 2x2 카드 그리드 */}
                <AnalysisCardGrid />
                <a
                  href="#consult-form"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#0f2b5b] px-8 py-6 text-base font-bold text-white shadow-md transition hover:bg-[#1a3a6e] w-full"
                >
                  무료 보장분석 받기 →
                </a>
              </div>

              {/* 오른쪽 일러스트 */}
              <div className="relative flex items-center justify-center">
                {/* 캐릭터 */}
                <div className="relative z-10 aspect-3/4 w-full md:w-135">
                  <Image src="/260513.png" alt="보장분석 캐릭터" fill className="object-contain" sizes="(max-width: 768px) 420px, 540px" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 맞춤 보장 무료 상담 섹션 */}
        <section className="bg-[#f8fafc] py-16 md:py-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* 타이틀 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5b] leading-tight">
                나만의 맞춤 보장 <strong className="text-[#1a56db]">무료 상담</strong>
              </h2>
              <p className="mt-3 text-base text-[#64748b]">복잡한 보험도 한번에 해결해보세요</p>
            </div>

            {/* 리스트 카드 */}
            <BenefitCardList />

            {/* 나만의 맞춤 보장 무료 상담 CTA 배너 */}
            <div
              className="mt-6 rounded-3xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              style={{ background: "linear-gradient(135deg, #0f2b5b 0%, #1a56db 100%)" }}
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 text-3xl animate-ring">⏰</span>
                <div>
                  <p className="text-base font-extrabold text-white leading-snug">상담을 미룰수록 보험료 조건은 더 불리해질 수 있습니다</p>
                  <p className="mt-1 text-xs text-white/70">
                    보험 나이 상승으로 평균 <span className="font-bold text-[#60a5fa]">5~10% 인상</span> · 지금 점검하면 최적 보험 구성 확인 가능
                  </p>
                </div>
              </div>
              <a
                href="#consult-form"
                className="flex-shrink-0 inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 whitespace-nowrap"
              >
                지금 바로 점검받기 →
              </a>
            </div>
          </div>
        </section>
        {/* 상담 이후 효과 섹션 */}
        <section className="bg-white py-16 md:py-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5b] leading-tight">상담 이후 불필요한 보험료를 줄이세요</h2>
              <p className="mt-3 text-base text-[#64748b]">상담 후 아래와 같은 혜택을 경험해보세요</p>
            </div>

            <BenefitStepCards />
          </div>
        </section>
        {/* 여행 이벤트 섹션 */}
        <section id="travel-event" className="relative overflow-hidden min-h-screen py-20 sm:py-28 flex items-center" style={{ backgroundColor: "#0f2b5b" }}>
          {/* 배경 비디오 */}
          <SlowVideoBg src="/video/bg_flight_01.mp4" rate={0.5} />
          <div className="absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(135deg, rgba(15,43,91,0.65) 0%, rgba(26,86,219,0.45) 30%, rgba(45,82,158,0.65) 50%)" }} />
          {/* 하단 웨이브 */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 leading-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 80 C360 0 1080 0 1440 80 L1440 80 L0 80 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              {/* 왼쪽 — 이미지 */}
              <div className="relative flex items-center justify-center order-2 lg:order-1">
                {/* 당첨 칩 */}
                {/* <div className="absolute top-6 right-[10%] z-10 animate-float">
                  <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl">
                    <span className="text-lg">🎟️</span>
                    <div>
                      <p className="text-xs font-extrabold text-[#0f172a]">매월 추첨</p>
                      <p className="text-[10px] text-[#64748b]">상담 완료 시 자동 응모</p>
                    </div>
                  </div>
                </div> */}

                {/* 캐릭터 */}
                <div className="relative z-10 animate-float" style={{ animationDelay: "0.3s" }}>
                  <Image
                    src="/icon/flight.png"
                    alt="여행 이벤트"
                    width={380}
                    height={380}
                    className="h-auto w-[260px] sm:w-[320px] object-contain"
                    style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))" }}
                  />
                </div>
              </div>

              {/* 오른쪽 — 흰색 카드 */}
              <div className="order-1 lg:order-2">
                <div className="rounded-3xl bg-white px-8 py-10 shadow-2xl shadow-black/30">
                  {/* 배지 */}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-bold text-[#1a56db] mb-6">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                    </span>
                    이벤트 진행 중
                  </span>

                  {/* 헤딩 */}
                  <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0f172a]">
                    상담만 받아도
                    <br />
                    <span className="text-[#1a56db]">여행이 공짜!</span>
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#64748b]">&quot;상담완료 고객 100% 증정&quot;</p>

                  {/* 혜택 리스트 */}
                  <div className="mt-7 space-y-3">
                    {[
                      // { icon: "✈️", title: "국내 여행권", desc: "제주·부산·강원 등 인기 국내 여행지" },
                      { icon: "🌏", title: "해외 여행권", desc: "다낭·세부·방콕 등 해외 패키지" },
                      // { icon: "🎁", title: "상품권 증정", desc: "백화점·온라인 상품권" },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} className="flex items-center gap-4 rounded-2xl bg-[#f8fafc] px-4 py-3.5">
                        <span className="text-2xl flex-shrink-0">{icon}</span>
                        <div>
                          <p className="text-sm font-bold text-[#0f172a]">{title}</p>
                          <p className="text-xs text-[#94a3b8] mt-0.5">{desc}</p>
                        </div>
                        <svg className="ml-auto h-4 w-4 flex-shrink-0 text-[#cbd5e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a href="#consult-form" className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1a56db] py-4 text-base font-bold text-white transition hover:bg-[#1648c0]">
                    지금 여행권 받고 상담하기
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  <p className="mt-3 text-center text-xs text-[#94a3b8]">가입 권유 없음 · 완전 무료 · 24시간 내 연락</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 여행지 사진 섹션 */}
        <section className="bg-white py-16 sm:py-30 relative z-10 -mt-0.5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5b]">어디로 떠나실 건가요?</h2>
              <p className="mt-3 text-sm text-[#64748b]">상담완료 고객 모두 아래 여행지로 선물해 드립니다.</p>
            </div>

            {/* 메인 큰 이미지 2개 */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
              {[
                { src: "/tlabal/다낭.jpg", label: "다낭", sub: "베트남 · 골프 & 해양 스포츠" },
                { src: "/tlabal/세부.jpg", label: "세부", sub: "필리핀 · 다이빙 & 리조트" },
              ].map(({ src, label, sub }) => (
                <div key={label} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3]">
                  <Image src={src} alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 40vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3 sm:p-5">
                    <p className="text-sm sm:text-xl font-extrabold text-white">{label}</p>
                    <p className="text-[10px] sm:text-xs text-white/75 mt-0.5 hidden sm:block">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 중간 3개 — 모바일~데스크탑 모두 3열 */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-3">
              {[
                { src: "/tlabal/보홀.jpg", label: "보홀", sub: "필리핀 · 에메랄드 바다" },
                { src: "/tlabal/방콕_파타야.jpg", label: "방콕·파타야", sub: "태국 · 도시 & 해변" },
                { src: "/tlabal/푸꾸옥.jpg", label: "푸꾸옥", sub: "베트남 · 섬 리조트" },
              ].map(({ src, label, sub }) => (
                <div key={label} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-square sm:aspect-3/2">
                  <Image src={src} alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                    <p className="text-sm sm:text-base font-extrabold text-white">{label}</p>
                    <p className="text-[10px] sm:text-xs text-white/70 mt-0.5 hidden sm:block">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 2개 — 모바일 1열 4/3, 태블릿↑ 2열 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[
                { src: "/tlabal/나트랑/달랏.jpg", label: "나트랑·달랏", sub: "베트남 · 휴양 & 고원 도시" },
                { src: "/tlabal/비엔티안_방비엥.jpg", label: "비엔티안·방비엥", sub: "라오스 · 자연 & 문화" },
              ].map(({ src, label, sub }) => (
                <div key={label} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] sm:aspect-[16/7]">
                  <Image src={src} alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3 sm:p-5">
                    <p className="text-sm sm:text-lg font-extrabold text-white">{label}</p>
                    <p className="text-[10px] sm:text-xs text-white/70 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 CTA */}
            <div className="mt-10 text-center">
              <a
                href="#consult-form"
                className="inline-flex items-center justify-center rounded-2xl bg-[#1a56db] px-10 py-4 text-base font-bold text-white shadow-lg shadow-[#1a56db]/30 transition hover:bg-[#1648c0] w-full"
              >
                무료 상담 신청하고 여행권 받기 →
              </a>
            </div>
          </div>
        </section>
        {/* 주요 내용
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#bfdbfe]" />
            <span className="text-sm font-bold tracking-widest text-[#1a56db] uppercase">주요 혜택</span>
            <div className="h-px w-12 bg-[#bfdbfe]" />
          </div>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b5b]">
              상담 한 번으로
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">모든 보험을 점검</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "원하는 날짜·시간 상담 가능", desc: "고객 일정에 맞춰 유연하게 예약" },
              { num: "02", title: "복잡한 보험 정밀 분석", desc: "보유 보험 전체를 한눈에 정리" },
              { num: "03", title: "상세 리포트 무료 제공", desc: "분석 결과를 문서로 제공" },
              { num: "04", title: "가입 권유 없는 무료 상담", desc: "신규 가입 강요 없이 진행" },
              { num: "05", title: "가족 보험 통합 관리", desc: "가족 단위 보장 비교 가능" },
              { num: "06", title: "여행 이벤트 참여 기회", desc: "상담 완료 고객 동남아 여행권" },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex items-start gap-4 rounded-3xl border border-[#dbeafe] bg-white px-6 py-7 shadow-sm hover:shadow-md transition-shadow">
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1a56db] text-[11px] font-black text-white">{num}</span>
                <div>
                  <p className="font-bold text-[#0f2b5b] text-sm">{title}</p>
                  <p className="mt-1 text-xs text-[#64748b]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
        {/* FAQ */}
        <section id="faq" className="bg-[#ffffff] py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5b]">자주 묻는 질문</h2>
              <p className="mt-3 text-sm text-[#64748b]">상담 신청 전 가장 많이 확인하는 질문을 정리했습니다.</p>
            </div>
            <FAQAccordion />
          </div>
        </section>
        {/* 상담 신청 폼 */}
        <section id="consult-form" className="relative overflow-hidden py-20 sm:py-28">
          {/* 배경 비디오 */}
          <video autoPlay muted loop playsInline className="pointer-events-none absolute inset-0 h-full w-full object-cover" style={{ zIndex: 0 }}>
            <source src="/video/contact.mp4" type="video/mp4" />
          </video>
          {/* 오버레이 */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ zIndex: 1, background: "linear-gradient(135deg, rgba(10,22,40,0.82) 0%, rgba(13,32,69,0.78) 60%, rgba(7,20,40,0.85) 100%)" }}
          />
          <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6">
            {/* 헤더 */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#60a5fa]/30 bg-[#1a56db]/20 px-4 py-1.5 text-sm font-semibold text-[#60a5fa] backdrop-blur-sm mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60a5fa] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#60a5fa]" />
                </span>
                무료 보장 분석
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                지금 바로 신청하고
                <br />
                <span className="bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent">전문가에게 연락받기</span>
              </h2>
            </div>
            {/* 신뢰 배지 */}
            <div className="flex justify-center gap-6 mb-8">
              {["가입 권유 없음", "완전 무료", "24시간 내 연락"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs font-semibold text-white/70">
                  <svg className="h-3.5 w-3.5 flex-shrink-0 text-[#60a5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
            {/* 폼 카드 */}
            <div className="rounded-3xl bg-white px-8 py-10 shadow-2xl shadow-black/30 sm:px-10 sm:py-12">
              <BottomConsultForm />
            </div>
          </div>
        </section>
        <ScrollAnimations />
        <ScrollToTopButton />
        {/* FOOTER */}
        <footer className="bg-[#07111f] py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-7 h-7 text-[#93c5fd]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z" fill="#93c5fd" fillOpacity="0.2" stroke="#93c5fd" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M11 16l3.5 3.5L21 12" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white font-bold text-base">와이즈피플코리아</span>
              </div>
              <a href="tel:16615022" className="text-[#93c5fd] font-semibold text-sm hover:text-white transition-colors">
                ☎ 1661-5022
              </a>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/50 text-xs leading-relaxed mb-2">상호: 와이즈피플코리아 &nbsp;|&nbsp; 사업자등록번호: 858-04-01783 &nbsp;|&nbsp; 대표: 임은정</p>
              <p className="text-white/50 text-xs leading-relaxed mb-4">주소: 서울시 금천구 가산디지털1로 212, 208호 &nbsp;|&nbsp; 이메일: pangsls@naver.com</p>
              <p className="text-white/30 text-xs">© 2026 와이즈피플코리아. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </TwemojiWrapper>
  );
}
