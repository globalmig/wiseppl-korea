import Image from "next/image";
import ConsultForm from "./_components/ConsultForm";
import FAQAccordion from "./_components/FAQAccordion";
import HeaderCTAButton from "./_components/HeaderCTAButton";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import ScrollAnimations from "./_components/ScrollAnimations";
import BottomConsultForm from "./_components/BottomConsultForm";
import Header from "./_components/Header";

const keyMessages = ["나만의 보장 분석 전문가에게 보험 상담", "무료 상담 제공", "맞춤형 보험 점검 서비스"];

const benefits = ["원하는 날짜·시간 상담 가능", "복잡한 보험 정밀 분석", "상세 리포트 제공", "가입 권유 없는 무료 상담", "가족 보험 통합 관리 가능"];

const reasons = [
  "보험 나이 상승으로 보험료가 평균 5~10% 인상될 수 있습니다.",
  "상담을 미룰수록 같은 조건에서도 보험료가 불리해질 수 있습니다.",
  "지금 점검하면 현재 상황에 맞는 최적 보험 구성을 확인할 수 있습니다.",
];

const effects = ["중복 보장 정리", "부족한 보장 강화", "라이프스타일 맞춤 리모델링"];

const travelSections = [
  {
    eyebrow: "05-a. 메인 메시지",
    title: "보험 점검 받고 동남아 여행 기회",
    description: "보험 점검 상담을 받으면서 여행 이벤트까지 함께 안내받을 수 있는 핵심 메시지입니다.",
    items: ["보험 점검 받고 동남아 여행 기회", "보장 분석 전문가 상담"],
    variant: "light",
  },
  {
    eyebrow: "05-b. 상담 서비스 내용",
    title: "상담에서 확인할 수 있는 핵심 서비스",
    description: "여행 이벤트와 별개로 실제 상담에서 제공되는 서비스 내용을 항목별로 정리했습니다.",
    items: ["보험 리모델링 상담", "상세 보장 분석 리포트", "가족 보험 통합 점검"],
    variant: "accent",
  },
  {
    eyebrow: "05-c. 보험 나이 안내",
    title: "보험료 변화 전 미리 확인해야 할 포인트",
    description: "보험 나이와 보험료 변동 시점을 미리 알고 점검을 서두를 필요가 있는 이유를 안내합니다.",
    items: ["보험 나이는 6개월마다 상승", "보험료 평균 5~10% 증가"],
    variant: "light",
  },
  {
    eyebrow: "05-d. 이벤트 혜택",
    title: "상담 완료 고객 대상 여행 이벤트",
    description: "상담을 마친 고객이 참여할 수 있는 이벤트 혜택을 명확하게 보여주는 섹션입니다.",
    items: ["상담 완료 고객 전원 응모", "동남아 3박5일 풀패키지 여행권 증정"],
    variant: "accent",
  },
  {
    eyebrow: "05-e. FAQ 핵심",
    title: "상담 전 자주 묻는 핵심 안내",
    description: "상담 전 부담을 줄일 수 있도록 가장 많이 확인하는 내용을 먼저 정리했습니다.",
    items: ["보험 강요 없음", "기존 보험 객관적 분석", "가족 보험 동시 점검 가능", "비대면 상담 가능"],
    variant: "light",
  },
] as const;

const travelInfoSections = travelSections.slice(1);

const cancerSections = [
  {
    eyebrow: "06-a. 메인 메시지",
    title: "암보험 무료 전문가 상담",
    description: "암 치료비와 전이암 보장까지 한 번에 점검하고, 월 부담을 고려한 설계 가능성을 함께 확인하는 히어로 메시지입니다.",
    items: ["암보험 무료 전문가 상담", "암 치료·전이암 보장 점검", "월 1만원대 보장 설계 가능"],
    variant: "light",
  },
  {
    eyebrow: "06-b. 핵심 가치",
    title: "암보험 상담에서 확인하는 핵심 분석 가치",
    description: "단순 상품 안내가 아니라 현재 보장을 기준으로 치료비와 전이암 대응까지 구체적으로 점검합니다.",
    items: ["암 치료비 대비 보장 분석", "전이암까지 보장 설계", "부족한 보장 스마트 분석", "30초 보장 진단"],
    variant: "accent",
  },
  {
    eyebrow: "06-c. 기대 효과",
    title: "점검 이후 기대할 수 있는 실질적 변화",
    description: "불필요한 구성을 덜고 필요한 보장을 강화해 보험료와 보장 구조를 함께 정리하는 데 초점을 둡니다.",
    items: ["보험료 평균 5~10% 절감 가능", "불필요 보험 정리", "필요한 보장만 강화"],
    variant: "light",
  },
  {
    eyebrow: "06-d. 이벤트",
    title: "상담 고객 대상 여행 이벤트",
    description: "상담 고객 전원을 대상으로 제공되는 여행권 이벤트 혜택을 명확하게 보여주는 섹션입니다.",
    items: ["상담 고객 전원", "동남아 3박5일 여행권 증정", "리조트 숙박 + 액티비티 + 차량 지원"],
    variant: "accent",
  },
  {
    eyebrow: "06-e. FAQ",
    title: "상담 전 꼭 확인하는 안내 사항",
    description: "가입 강요 여부, 가족 보험 점검, 상담 방식과 이벤트 운영 방식까지 자주 묻는 내용을 정리했습니다.",
    items: ["보험 신규 가입 강요 없음", "가족 보험 통합 점검 가능", "전문가 상담 방식 진행", "공정 추첨 방식 이벤트"],
    variant: "light",
  },
] as const;

const cancerInfoSections = cancerSections.slice(1);

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#1e293b]">
          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#1a56db]">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoSection({ eyebrow, title, description, items, variant = "light" }: { eyebrow: string; title: string; description?: string; items: string[]; variant?: "light" | "accent" }) {
  const isAccent = variant === "accent";

  return (
    <section data-animate className={isAccent ? "bg-[#eff6ff] py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className={`inline-flex rounded-full px-4 py-1.5 text-sm font-bold ${isAccent ? "bg-white text-[#1a56db]" : "bg-[#eff6ff] text-[#1a56db]"}`}>{eyebrow}</span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight text-[#0f2b5b]">{title}</h2>
            {description ? <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748b]">{description}</p> : null}
          </div>
          <div className="rounded-3xl border border-[#dbeafe] bg-white p-6 sm:p-8 shadow-sm">
            <CheckList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="section-coverage" data-animate className="relative scroll-mt-16 overflow-hidden h-[calc(100vh-4rem)] flex flex-col bg-white">
        {/* background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#dbeafe] opacity-50 blur-[96px]" />
          <div className="absolute top-1/2 -left-24 h-[360px] w-[360px] rounded-full bg-[#bfdbfe] opacity-30 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 flex-1 min-h-0 flex flex-col py-4 sm:py-6 lg:py-8">
          {/* eyebrow */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-4 py-1.5 text-sm font-semibold text-[#1a56db]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a56db] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1a56db]" />
              </span>
              보장 분석 전문 무료 상담
            </span>
          </div>

          {/* headline */}
          <div className="mt-3 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-[#0f172a]">
              내 보험, 제대로
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">분석받으세요</span>
            </h1>
            <p className="mt-5 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-[#64748b]">
              복잡한 보험을 한 번에 점검하고 필요한 보장만 남기는
              <br className="hidden sm:block" /> 전문가 무료 상담 서비스입니다.
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#consult-form"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#1a56db] px-8 text-base font-bold text-white shadow-lg shadow-[#1a56db]/30 transition hover:bg-[#1648c0]"
            >
              무료 상담 신청
            </a>
            <a
              href="#section-travel"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-[#cbd5e1] bg-white px-8 text-base font-semibold text-[#334155] transition hover:border-[#1a56db] hover:text-[#1a56db]"
            >
              이벤트 확인하기
            </a>
          </div>
          {/* main hero image + floating cards */}
          <div className="main_hero_img relative mx-auto mt-5 flex justify-center flex-1 min-h-0 items-end w-full">
            {/* left floating card — 보험료 절감 */}
            <div className="absolute left-0 top-1/4 hidden lg:block animate-float z-10">
              <div className="relative w-44 text-center rounded-2xl border border-[#dbeafe] bg-white p-6 shadow-xl">
                {/* <Image src="/hero/hero_money.jpg" alt="보험료 절감" width={160} height={80} className="w-full h-20 rounded-xl object-cover mb-3" /> */}
                <p className="text-md font-extrabold text-[#1648c0]">보험료 절감</p>
                <p className="mt-1 text-sm text-[#64748b] leading-relaxed">
                  중복 보장 정리로
                  <br />
                  <strong> 평균 5~10% 절감 </strong>
                </p>
                {/* 말풍선 꼬리 (오른쪽) */}
                <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rotate-45 border-r border-t border-[#dbeafe] bg-white" />
              </div>
              {/* 말풍선 점들 */}
              <div className="mt-2 flex justify-end gap-1.5 pr-1">
                <span className="h-2 w-2 rounded-full bg-[#bfdbfe]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#93c5fd]" />
                <span className="h-1 w-1 rounded-full bg-[#60a5fa]" />
              </div>
            </div>

            <div className="w-full sm:max-w-[70%] md:max-w-[55%] lg:max-w-[40%] flex items-end">
              <Image
                src="/hero/hero_thinking.png"
                alt="보험 전문가 상담"
                width={720}
                height={460}
                priority
                className="w-full h-auto max-h-[32vh] sm:max-h-[42vh] object-contain object-bottom mix-blend-multiply"
              />
            </div>

            {/* right floating card — 상세 리포트 */}
            <div className="absolute right-0 top-1/4 hidden lg:block animate-float-alt z-10">
              <div className="relative w-44 text-center rounded-2xl border border-[#dbeafe] bg-white p-6 shadow-xl">
                {/* <Image src="/hero/hero_contract.jpg" alt="상세 리포트" width={160} height={80} className="w-full h-20 rounded-xl object-cover mb-3" /> */}
                <p className="text-md font-extrabold text-[#1648c0]">상세 리포트</p>
                <p className="mt-1 text-sm text-[#64748b] leading-relaxed">
                  맞춤 보장 분석
                  <br />
                  <strong className="">리포트 무료 제공</strong>
                </p>
                {/* 말풍선 꼬리 (왼쪽) */}
                <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rotate-45 border-l border-b border-[#dbeafe] bg-white" />
              </div>
              {/* 말풍선 점들 */}
              <div className="mt-2 flex justify-start gap-1.5 pl-1">
                <span className="h-1 w-1 rounded-full bg-[#60a5fa]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#93c5fd]" />
                <span className="h-2 w-2 rounded-full bg-[#bfdbfe]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile cards (lg 미만) */}
      <div className="grid grid-cols-2 gap-3 lg:hidden px-4 py-4 bg-white">
        <div className="rounded-2xl border border-[#dbeafe] bg-white p-4 shadow-md flex gap-3 items-start">
          <Image src="/hero/hero_money.jpg" alt="보험료 절감" width={44} height={44} className="h-11 w-11 rounded-xl object-cover flex-shrink-0" />
          <div>
            <p className="text-sm font-extrabold text-[#0f2b5b]">보험료 절감</p>
            <p className="mt-0.5 text-xs text-[#64748b] leading-snug">중복 보장 정리로 평균 5~10% 절감</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[#dbeafe] bg-white p-4 shadow-md flex gap-3 items-start">
          <Image src="/hero/hero_contract.jpg" alt="상세 리포트" width={44} height={44} className="h-11 w-11 rounded-xl object-cover flex-shrink-0" />
          <div>
            <p className="text-sm font-extrabold text-[#0f2b5b]">상세 리포트</p>
            <p className="mt-0.5 text-xs text-[#64748b] leading-snug">맞춤 보장 분석 리포트 무료 제공</p>
          </div>
        </div>
      </div>

      {/* bottom stats bar */}
      <div className="relative z-10 border-t border-[#e2e8f0] bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-3 divide-x divide-[#e2e8f0]">
          {[
            { value: "무료", label: "상담 비용" },
            { value: "상세", label: "보장 분석 리포트" },
            { value: "가족", label: "통합 점검 가능" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 px-4 text-center">
              <span className="text-2xl font-extrabold text-[#1a56db]">{value}</span>
              <span className="text-xs text-[#64748b]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <section data-animate className="coverage-01 relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#dbeafe] opacity-40 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#bfdbfe]" />
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a56db] text-[11px] font-black text-white">01</span>
              <span className="text-sm font-bold tracking-widest text-[#1a56db] uppercase">주요 내용</span>
            </div>
            <div className="h-px w-12 bg-[#bfdbfe]" />
          </div>
          {/* headline */}
          <div className="mt-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#0f172a]">
              나만의 보장 분석 전문가에게
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">받는 보험 상담</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#64748b]">
              보험을 새로 가입시키기보다 지금 가지고 있는 보장을 먼저 점검하고,
              <br className="hidden sm:block" /> 필요한 부분을 이해하기 쉽게 설명하는 상담 흐름입니다.
            </p>
          </div>
          {/* feature cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { src: "/icon/call.jpg", alt: "보장 분석 전문가", label: keyMessages[0] },
              { src: "/icon/free.jpg", alt: "무료 상담", label: keyMessages[1] },
              { src: "/icon/partner.jpg", alt: "맞춤 점검 서비스", label: keyMessages[2] },
            ].map(({ src, alt, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-4 rounded-3xl border border-[#dbeafe] bg-white px-6 py-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="flex h-24 w-32 items-center justify-center rounded-2xl overflow-hidden">
                  <Image src={src} alt={alt} width={120} height={80} className="h-full w-full object-contain" />
                </span>
                <p className="text-sm font-bold leading-snug text-[#0f2b5b]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-animate className="coverage-02 relative overflow-hidden bg-[#eff6ff] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#bfdbfe] opacity-40 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#bfdbfe]" />
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a56db] text-[11px] font-black text-white">02</span>
              <span className="text-sm font-bold tracking-widest text-[#1a56db] uppercase">주요 혜택</span>
            </div>
            <div className="h-px w-12 bg-[#bfdbfe]" />
          </div>
          {/* headline */}
          <div className="mt-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#0f172a]">
              복잡한 보험도
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">한 번에 해결</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#64748b]">
              상담 예약의 편의성과 분석 품질, 부담 없는 상담 방식까지
              <br className="hidden sm:block" /> 실제 이용 과정에서 체감하는 장점을 정리했습니다.
            </p>
          </div>
          {/* benefits list */}
          <div className="mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
            {benefits.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-4 rounded-2xl border border-[#dbeafe] bg-white px-10 py-8 md:py-10 shadow-sm${benefits.length % 2 !== 0 && i === benefits.length - 1 ? " sm:col-span-2" : ""}`}
              >
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#1a56db] text-[11px] font-black text-white">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-xl font-semibold text-[#1e293b] leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfoSection
        eyebrow="03. 보험 상담 필요성"
        title="상담을 미룰수록 보험료 조건은 더 불리해질 수 있습니다"
        description="보험료는 나이와 시점의 영향을 받기 때문에, 늦추기보다 현재 조건에서 먼저 점검하는 편이 유리할 수 있습니다."
        items={reasons}
      />

      <InfoSection
        eyebrow="04. 상담 효과"
        title="상담 이후에는 보장 구조를 더 선명하게 정리할 수 있습니다"
        description="보장 분석 상담은 단순 설명이 아니라 현재 보험을 재정비하는 출발점이 됩니다."
        items={effects}
        variant="accent"
      />

      {/* <section id="consult-form" className="hero-gradient scroll-mt-24 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
                무료 보장 분석 신청
              </span>
              <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
                현재 보험을 먼저 점검하고
                <br />
                필요한 보장만 남기세요
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
                가입 권유 없이 현재 보험 상태를 분석하고, 필요한 보장과 중복 보장을 구분해 드립니다.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "원하는 시간 상담 가능",
                  "상세 리포트 제공",
                  "무료 상담 진행",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#059669]">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              <ConsultForm variant="bottom" />
            </div>
          </div>
        </div>
      </section> */}

      <section data-animate className="a-qna bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5b]">자주 묻는 질문</h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b]">상담 신청 전 가장 많이 확인하는 질문을 정리했습니다.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      <section id="section-travel" data-animate className="relative scroll-mt-16 overflow-hidden bg-white pt-16 pb-0 sm:pt-20 lg:pt-28">
        {/* background blobs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-[#dbeafe] opacity-50 blur-[96px]" />
          <div className="absolute bottom-0 -right-16 h-[320px] w-[320px] rounded-full bg-[#bfdbfe] opacity-30 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* eyebrow */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-4 py-1.5 text-sm font-semibold text-[#1a56db]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a56db] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1a56db]" />
              </span>
              상담 완료 고객 대상 여행 이벤트
            </span>
          </div>

          {/* headline */}
          <div className="mt-6 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight text-[#0f172a]">
              보험 점검하고
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">동남아 여행까지</span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-[#64748b]">
              상담 완료 고객 전원에게
              <br className="hidden sm:block" /> 동남아 3박5일 풀패키지 여행 기회를 드립니다.
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#consult-form"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#1a56db] px-8 text-base font-bold text-white shadow-lg shadow-[#1a56db]/30 transition hover:bg-[#1648c0]"
            >
              무료 상담 신청
            </a>
            <a
              href="#consult-form"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-[#cbd5e1] bg-white px-8 text-base font-semibold text-[#334155] transition hover:border-[#1a56db] hover:text-[#1a56db]"
            >
              이벤트 자세히 보기
            </a>
          </div>

          {/* main image + floating cards */}
          <div className="relative mx-auto mt-12 flex justify-center">
            {/* left floating card — 3박5일 여행권 */}
            <div className="absolute left-0 top-1/4 hidden lg:block animate-float z-10">
              <div className="relative w-44 text-center rounded-2xl border border-[#dbeafe] bg-white p-6 shadow-xl">
                <p className="text-sm font-extrabold text-[#1648c0]">3박5일 여행권</p>
                <p className="mt-1 text-sm text-[#64748b] leading-relaxed">
                  리조트 숙박
                  <br />
                  <strong>+ 액티비티 포함</strong>
                </p>
                <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rotate-45 border-r border-t border-[#dbeafe] bg-white" />
              </div>
              <div className="mt-2 flex justify-end gap-1.5 pr-1">
                <span className="h-2 w-2 rounded-full bg-[#bfdbfe]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#93c5fd]" />
                <span className="h-1 w-1 rounded-full bg-[#60a5fa]" />
              </div>
            </div>

            <Image src="/hero/hero_passfort.jpg" alt="동남아 여행 이벤트" width={720} height={460} className="w-full md:max-w-[30%] lg:max-w-[40%] rounded-t-3xl object-cover mb-16" />

            {/* right floating card — 전원 응모 */}
            <div className="absolute right-0 top-1/4 hidden lg:block animate-float-alt z-10">
              <div className="relative w-44 text-center rounded-2xl border border-[#dbeafe] bg-white p-6 shadow-xl">
                <p className="text-sm font-extrabold text-[#1648c0]">전원 응모 가능</p>
                <p className="mt-1 text-sm text-[#64748b] leading-relaxed">
                  상담 완료 고객
                  <br />
                  <strong>누구나 참여</strong>
                </p>
                <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rotate-45 border-l border-b border-[#dbeafe] bg-white" />
              </div>
              <div className="mt-2 flex justify-start gap-1.5 pl-1">
                <span className="h-1 w-1 rounded-full bg-[#60a5fa]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#93c5fd]" />
                <span className="h-2 w-2 rounded-full bg-[#bfdbfe]" />
              </div>
            </div>
          </div>

          {/* mobile cards */}
          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden mb-10">
            <div className="rounded-2xl border border-[#dbeafe] bg-white p-4 shadow-md">
              <p className="text-sm font-extrabold text-[#1648c0]">3박5일 여행권</p>
              <p className="mt-1 text-xs text-[#64748b] leading-snug">리조트 숙박 + 액티비티 + 차량 지원</p>
            </div>
            <div className="rounded-2xl border border-[#dbeafe] bg-white p-4 shadow-md">
              <p className="text-sm font-extrabold text-[#1648c0]">전원 응모 가능</p>
              <p className="mt-1 text-xs text-[#64748b] leading-snug">상담 완료 고객 누구나 참여</p>
            </div>
          </div>
        </div>

        {/* bottom stats bar */}
        <div className="relative z-10 border-t border-[#e2e8f0] bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-3 divide-x divide-[#e2e8f0]">
            {[
              { value: "3박5일", label: "동남아 풀패키지" },
              { value: "전원", label: "상담 고객 응모" },
              { value: "무료", label: "상담 비용" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-0.5 px-4 text-center">
                <span className="text-2xl font-extrabold text-[#1a56db]">{value}</span>
                <span className="text-xs text-[#64748b]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 여행 사진 그리드 */}
      <section data-animate className="relative overflow-hidden bg-white py-24 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#dbeafe] opacity-40 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#bfdbfe]" />
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a56db] text-[11px] font-black text-white">✈</span>
              <span className="text-sm font-bold tracking-widest text-[#1a56db] uppercase">여행지 미리보기</span>
            </div>
            <div className="h-px w-12 bg-[#bfdbfe]" />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-tight text-[#0f172a]">
              상담 완료 후 떠나는
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">동남아 3박5일</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#64748b]">리조트 숙박부터 액티비티까지 풀패키지로 제공됩니다.</p>
          </div>
          <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {(() => {
              const destinations = [
                { label: "다낭", sub: "베트남 · 골프 & 해양 스포츠", src: "/tlabal/다낭.jpg" },
                { label: "세부", sub: "필리핀 · 다이빙 & 리조트", src: "/tlabal/세부.jpg" },
                { label: "보홀", sub: "필리핀 · 에메랄드 바다", src: "/tlabal/보홀.jpg" },
                { label: "나트랑 · 달랏", sub: "베트남 · 휴양 & 고원 도시", src: "/tlabal/나트랑/달랏.jpg" },
                { label: "방콕 · 파타야", sub: "태국 · 도시 & 해변 리조트", src: "/tlabal/방콕_파타야.jpg" },
                { label: "푸꾸옥", sub: "베트남 · 섬 리조트", src: "/tlabal/푸꾸옥.jpg" },
                { label: "비엔티안 · 방비엥", sub: "라오스 · 자연 & 문화", src: "/tlabal/비엔티안_방비엥.jpg" },
              ];
              return destinations.map(({ label, sub, src }, i) => {
                const isLastOdd = i === destinations.length - 1 && destinations.length % 2 !== 0;
                return (
                  <div
                    key={label}
                    className={`group overflow-hidden rounded-3xl border border-[#dbeafe] bg-[#f8faff] shadow-sm hover:shadow-md transition-shadow${isLastOdd ? " col-span-2 justify-self-center w-1/2 sm:col-span-3 sm:w-1/3 lg:col-span-1 lg:w-full lg:justify-self-auto" : ""}`}
                  >
                    <div className="relative h-52 w-full">
                      <Image src={src} alt={label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-base font-extrabold text-[#0f2b5b]">{label}</p>
                      <p className="mt-1 text-xs text-[#64748b]">{sub}</p>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* 05-b 상담 서비스 내용 — coverage-01 스타일 */}
      <section data-animate className="relative overflow-hidden bg-[#eff6ff] py-24 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#bfdbfe] opacity-40 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#bfdbfe]" />
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a56db] text-[11px] font-black text-white">05</span>
              <span className="text-sm font-bold tracking-widest text-[#1a56db] uppercase">상담 서비스 내용</span>
            </div>
            <div className="h-px w-12 bg-[#bfdbfe]" />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#0f172a]">
              상담에서 확인할 수 있는
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">핵심 서비스</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#64748b]">
              여행 이벤트와 별개로 실제 상담에서 제공되는
              <br className="hidden sm:block" /> 서비스 내용을 항목별로 정리했습니다.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {travelSections[1].items.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 rounded-3xl border border-[#dbeafe] bg-white px-6 py-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a56db] text-sm font-black text-white">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm font-bold leading-snug text-[#0f2b5b]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05-c, 05-d */}
      {travelInfoSections.slice(1, 3).map((section) => (
        <InfoSection key={section.eyebrow} eyebrow={section.eyebrow} title={section.title} description={section.description} items={[...section.items]} variant={section.variant} />
      ))}

      {/* 05-e FAQ — a-qna 동일 레이아웃 */}
      <section data-animate className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5b]">상담 전 자주 묻는 핵심 안내</h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b]">상담 전 부담을 줄일 수 있도록 가장 많이 확인하는 내용을 먼저 정리했습니다.</p>
          </div>
          <FAQAccordion
            items={[
              { q: "상담을 받으면 보험 가입을 강요받나요?", a: "아닙니다. 기존 보험 점검과 보장 분석 중심으로 진행되며, 신규 가입은 고객의 선택에 맡깁니다." },
              { q: "현재 가입된 보험을 객관적으로 분석해 주나요?", a: "네. 보유 중인 보험 전체를 중립적 시각으로 분석해 보장 현황과 개선 방향을 안내해 드립니다." },
              { q: "가족 보험도 함께 점검할 수 있나요?", a: "가능합니다. 가족 단위 보장 비교와 통합 관리 방향까지 함께 안내해 드립니다." },
              { q: "꼭 대면으로 방문해야 상담을 받을 수 있나요?", a: "아닙니다. 전화 또는 비대면 방식으로도 동일한 품질의 보장 분석 상담이 가능합니다." },
            ]}
          />
        </div>
      </section>

      <section id="section-cancer" data-animate className="relative scroll-mt-16 overflow-hidden bg-white pt-16 pb-0 sm:pt-20 lg:pt-28">
        {/* background blobs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full bg-[#dbeafe] opacity-50 blur-[96px]" />
          <div className="absolute bottom-0 -left-16 h-[320px] w-[320px] rounded-full bg-[#bfdbfe] opacity-30 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* eyebrow */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-4 py-1.5 text-sm font-semibold text-[#1a56db]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a56db] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1a56db]" />
              </span>
              암보험 무료 전문가 상담
            </span>
          </div>

          {/* headline */}
          <div className="mt-6 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight text-[#0f172a]">
              암보험 보장,
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">전문가와 점검하세요</span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-[#64748b]">
              암 치료비·전이암 보장까지 한 번에 확인하고
              <br className="hidden sm:block" /> 월 부담을 고려한 맞춤 설계를 받아보세요.
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#consult-form"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#1a56db] px-8 text-base font-bold text-white shadow-lg shadow-[#1a56db]/30 transition hover:bg-[#1648c0]"
            >
              암보험 상담 신청
            </a>
            <a
              href="#consult-form"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-[#cbd5e1] bg-white px-8 text-base font-semibold text-[#334155] transition hover:border-[#1a56db] hover:text-[#1a56db]"
            >
              30초 보장 진단
            </a>
          </div>

          {/* main image + floating cards */}
          <div className="relative mx-auto mt-12 flex justify-center">
            {/* left floating card — 치료비 대비 */}
            <div className="absolute left-0 top-1/4 hidden lg:block animate-float z-10">
              <div className="relative w-44 text-center rounded-2xl border border-[#dbeafe] bg-white p-6 shadow-xl">
                <p className="text-sm font-extrabold text-[#1648c0]">치료비 대비</p>
                <p className="mt-1 text-sm text-[#64748b] leading-relaxed">
                  암 치료비 보장
                  <br />
                  <strong>전이암까지 커버</strong>
                </p>
                <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rotate-45 border-r border-t border-[#dbeafe] bg-white" />
              </div>
              <div className="mt-2 flex justify-end gap-1.5 pr-1">
                <span className="h-2 w-2 rounded-full bg-[#bfdbfe]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#93c5fd]" />
                <span className="h-1 w-1 rounded-full bg-[#60a5fa]" />
              </div>
            </div>

            <Image src="/hero/hero_contract.jpg" alt="암보험 전문 상담" width={720} height={460} className="w-full md:max-w-[30%] lg:max-w-[40%] rounded-t-3xl ml-34 object-cover mb-16" />

            {/* right floating card — 월 1만원대 */}
            <div className="absolute right-0 top-1/4 hidden lg:block animate-float-alt z-10">
              <div className="relative w-44 text-center rounded-2xl border border-[#dbeafe] bg-white p-6 shadow-xl">
                <p className="text-sm font-extrabold text-[#1648c0]">월 1만원대</p>
                <p className="mt-1 text-sm text-[#64748b] leading-relaxed">
                  부담 없는 보장
                  <br />
                  <strong>설계 가능</strong>
                </p>
                <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rotate-45 border-l border-b border-[#dbeafe] bg-white" />
              </div>
              <div className="mt-2 flex justify-start gap-1.5 pl-1">
                <span className="h-1 w-1 rounded-full bg-[#60a5fa]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#93c5fd]" />
                <span className="h-2 w-2 rounded-full bg-[#bfdbfe]" />
              </div>
            </div>
          </div>

          {/* mobile cards */}
          <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden mb-10">
            <div className="rounded-2xl border border-[#dbeafe] bg-white p-4 shadow-md">
              <p className="text-sm font-extrabold text-[#1648c0]">치료비 대비</p>
              <p className="mt-1 text-xs text-[#64748b] leading-snug">암 치료비 + 전이암까지 보장 점검</p>
            </div>
            <div className="rounded-2xl border border-[#dbeafe] bg-white p-4 shadow-md">
              <p className="text-sm font-extrabold text-[#1648c0]">월 1만원대</p>
              <p className="mt-1 text-xs text-[#64748b] leading-snug">부담 없는 맞춤 보장 설계 가능</p>
            </div>
          </div>
        </div>

        {/* bottom stats bar */}
        <div className="relative z-10 border-t border-[#e2e8f0] bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-3 divide-x divide-[#e2e8f0]">
            {[
              { value: "무료", label: "전문가 상담" },
              { value: "30초", label: "보장 진단" },
              { value: "전이암", label: "보장 점검 포함" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-0.5 px-4 text-center">
                <span className="text-2xl font-extrabold text-[#1a56db]">{value}</span>
                <span className="text-xs text-[#64748b]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06-b 핵심 가치 — coverage-01 스타일 */}
      <section data-animate className="relative overflow-hidden bg-[#eff6ff] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#bfdbfe] opacity-40 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#bfdbfe]" />
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a56db] text-[11px] font-black text-white">06</span>
              <span className="text-sm font-bold tracking-widest text-[#1a56db] uppercase">핵심 가치</span>
            </div>
            <div className="h-px w-12 bg-[#bfdbfe]" />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#0f172a]">
              암보험 상담에서 확인하는
              <br />
              <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">핵심 분석 가치</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#64748b]">
              단순 상품 안내가 아니라 현재 보장을 기준으로
              <br className="hidden sm:block" /> 치료비와 전이암 대응까지 구체적으로 점검합니다.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["암 치료비 대비 보장 분석", "전이암까지 보장 설계", "부족한 보장 스마트 분석", "30초 보장 진단"] as const).map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 rounded-3xl border border-[#dbeafe] bg-white px-6 py-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a56db] text-sm font-black text-white">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm font-bold leading-snug text-[#0f2b5b]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06-c, 06-d */}
      {cancerInfoSections.slice(1, -1).map((section) => (
        <InfoSection key={section.eyebrow} eyebrow={section.eyebrow} title={section.title} description={section.description} items={[...section.items]} variant={section.variant} />
      ))}

      {/* 06-e FAQ — a-qna 동일 레이아웃 */}
      <section data-animate className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5b]">상담 전 꼭 확인하는 안내 사항</h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b]">가입 강요 여부, 가족 보험 점검, 상담 방식과 이벤트 운영 방식까지 자주 묻는 내용을 정리했습니다.</p>
          </div>
          <FAQAccordion
            items={[
              { q: "상담을 받으면 보험 신규 가입을 강요받나요?", a: "아닙니다. 기존 보험 점검과 보장 분석 중심으로 진행되며, 신규 가입 여부는 고객의 의사에 따라 결정됩니다." },
              { q: "가족 보험도 함께 점검할 수 있나요?", a: "가능합니다. 가족 단위로 보장을 비교 분석하고 통합 관리 방향을 함께 안내해 드립니다." },
              { q: "상담은 어떤 방식으로 진행되나요?", a: "보험 전문가가 직접 진행하며, 대면 또는 전화·비대면 방식 중 편한 방법으로 선택하실 수 있습니다." },
              { q: "이벤트 당첨은 어떻게 결정되나요?", a: "이벤트 참여 조건을 충족한 고객 중 공정한 추첨 방식으로 진행되며, 결과는 개별 안내드립니다." },
            ]}
          />
        </div>
      </section>

      <section id="consult-form" data-animate className="relative overflow-hidden bg-[#eff6ff] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#bfdbfe] opacity-40 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-[#dbeafe] bg-white px-8 py-10 shadow-xl sm:px-10 sm:py-12">
            {/* eyebrow */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[#bfdbfe]" />
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a56db] text-[11px] font-black text-white">✓</span>
                <span className="text-sm font-bold tracking-widest text-[#1a56db] uppercase">CONTACT</span>
              </div>
              <div className="h-px w-12 bg-[#bfdbfe]" />
            </div>
            {/* headline */}
            <div className="mt-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-tight text-[#0f172a]">
                보험 전문 점검
                <br />
                <span className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] bg-clip-text text-transparent">무료 상담 신청</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#64748b]">가입 권유 없이 현재 보험을 객관적으로 분석해 드립니다.</p>
            </div>
            {/* form */}
            <BottomConsultForm />
            <p className="mt-4 text-center text-xs text-[#94a3b8]">가입 권유 없음 · 무료 진행 · 24시간 내 연락</p>
          </div>
        </div>
      </section>

      <ScrollAnimations />
      <ScrollToTopButton />

      {/* FOOTER */}
      <footer className="bg-navy py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-7 h-7 text-[#93c5fd]" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z" fill="#93c5fd" fillOpacity="0.2" stroke="#93c5fd" strokeWidth="2" strokeLinejoin="round" />
                <path d="M11 16l3.5 3.5L21 12" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white font-bold text-base">와이즈피플코리아</span>
            </div>
            <a href="tel:15880000" className="text-[#93c5fd] font-semibold text-sm hover:text-white transition-colors">
              ☎ 1588-0000
            </a>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/50 text-xs leading-relaxed mb-2">상호: 주식회사 와이즈피플코리아 &nbsp;|&nbsp; 사업자등록번호: 000-00-00000 &nbsp;|&nbsp; 대표: 홍길동</p>
            <p className="text-white/50 text-xs leading-relaxed mb-4">주소: 서울특별시 강남구 테헤란로 000, 00층 &nbsp;|&nbsp; 이메일: info@wisepplkorea.com</p>
            <p className="text-white/30 text-xs">© 2026 와이즈피플코리아. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
