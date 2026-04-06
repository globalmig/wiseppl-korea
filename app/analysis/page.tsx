import Image from "next/image";
import ConsultForm from "../_components/ConsultForm";

const promoImages = [
  "https://cdn.imweb.me/thumbnail/20251202/6ac8267107487.jpg",
  "https://cdn.imweb.me/thumbnail/20251202/a6d9325c0af40.jpg",
  "https://cdn.imweb.me/thumbnail/20251202/aac9ee9f41d5a.jpg",
];

const trustStats = [
  { value: "12,847건", label: "누적 상담" },
  { value: "98.3%", label: "고객 만족도" },
  { value: "월 4.2만원", label: "평균 절감액" },
  { value: "25개", label: "비교 보험사" },
];

const featureCards = [
  {
    emoji: "⏱️",
    title: "원하는 날짜·시간 상담",
    desc: "바쁜 일정에 맞춰 원하는 시간에 1:1 맞춤 상담을 받을 수 있어요",
  },
  {
    emoji: "📊",
    title: "복잡한 보험도 한눈에 분석",
    desc: "상세 보장 분석 리포트를 제공. 숨어있는 보험의 허점까지 체크해드려요",
  },
  {
    emoji: "🛡️",
    title: "강요 없는 무료 상담",
    desc: "오직 분석만 제공합니다. 불필요한 권유 없이 현재 상태를 점검해드려요",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "가족 보험 통합 관리",
    desc: "가족 전체 보험을 한 번에 점검하고 최적화해서 안내해드립니다",
  },
];

const reasonCards = [
  {
    icon: "📈",
    title: "보험 나이가 오르면 보험료도 평균 5~10% 인상",
    desc: "매년 보험 나이가 오를 때마다 동일한 보장이라도 더 많은 보험료를 내야 할 수 있습니다.",
  },
  {
    icon: "⚠️",
    title: "상담을 미루는 동안 보험 조건은 불리해집니다",
    desc: "나이가 들수록 건강 상태 변화로 인해 가입 조건 및 보장 범위가 제한될 수 있습니다.",
  },
  {
    icon: "✅",
    title: "지금 상담하면 최적의 보험 조건을 확인할 수 있습니다",
    desc: "지금이 바로 최적의 보험료로 최대 보장을 설계할 수 있는 타이밍입니다.",
  },
];

const effectCards = [
  {
    emoji: "📌",
    number: "01",
    title: "중복 보장 정리",
    desc: "불필요한 보험료를 절감하고 꼭 필요한 보장만 남길 수 있습니다",
    color: "#2149b8",
  },
  {
    emoji: "💪",
    number: "02",
    title: "부족한 보장 강화",
    desc: "사각지대 없이 빈틈없는 보장 라인업을 구성해드립니다",
    color: "#0f766e",
  },
  {
    emoji: "🎯",
    number: "03",
    title: "라이프스타일 맞춤 리모델링",
    desc: "현재 생활방식에 꼭 맞는 보험 구조로 다시 설계해드립니다",
    color: "#d97706",
  },
];

const processSteps = [
  {
    step: "01",
    title: "무료 요청",
    sub: "1분",
    desc: "간단한 정보 입력으로 무료 상담을 요청하세요.",
    icon: "📝",
  },
  {
    step: "02",
    title: "전문가 배정",
    sub: "24시간 내",
    desc: "전담 컨설턴트가 빠르게 배정되어 연락드립니다.",
    icon: "👩‍💼",
  },
  {
    step: "03",
    title: "맞춤 분석 제공",
    sub: "완료",
    desc: "1:1 맞춤 보장 분석 리포트를 무료로 받아보세요.",
    icon: "📋",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
          light
            ? "bg-white/10 text-[#c7d2fe]"
            : "bg-[#eaf1ff] text-[#2149b8]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-2xl font-extrabold leading-tight sm:text-3xl ${
          light ? "text-white" : "text-[#111827]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${
            light ? "text-white/75" : "text-[#667085]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function TrustBullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white backdrop-blur-sm">
      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-sm font-medium sm:text-base">{text}</span>
    </li>
  );
}

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-[#d8e2f0] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eaf1ff]">
              <svg
                className="h-6 w-6 text-[#2149b8]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2L4 7v9c0 7 5.5 12.5 12 14 6.5-1.5 12-7 12-14V7L16 2z"
                  fill="#2149b8"
                  fillOpacity="0.15"
                  stroke="#2149b8"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 16l3.5 3.5L21 12"
                  stroke="#2149b8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#7c8aa5]">
                Insurance Consultation
              </p>
              <span className="text-base font-extrabold tracking-tight text-[#0f2b5b]">
                와이즈피플코리아
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:15880000"
              className="hidden rounded-full border border-[#d8e2f0] px-4 py-2 text-sm font-semibold text-[#2149b8] transition-colors hover:border-[#2149b8] sm:inline-flex"
            >
              ☎ 1588-0000
            </a>
            <a
              href="#consult-form"
              className="btn-accent inline-flex rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/20"
            >
              무료 상담 요청
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(73,121,255,0.35),_transparent_36%),linear-gradient(180deg,_#0f2b5b_0%,_#102d64_42%,_#153d8d_100%)]">
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
                  <span className="text-[#facc15]">●</span>
                  무료 보장 분석 전문 서비스
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 shadow-[0_30px_80px_rgba(8,15,40,0.35)] backdrop-blur-sm sm:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                        나에게 맞는 보장 분석 전문가에게
                        <br />
                        <span className="text-[#bcd2ff]">보험 상담을 맡겨보세요</span>
                      </h1>
                      <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                        복잡한 보험, 이제 전문가가 1:1로 무료 분석해드립니다.
                      </p>

                      <ul className="mt-6 space-y-3">
                        {[
                          "강요 없는 100% 무료 상담",
                          "25개 보험사 비교 맞춤형 분석",
                          "원하는 날짜·시간 자유롭게 선택",
                        ].map((item) => (
                          <TrustBullet key={item} text={item} />
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                          href="#consult-form"
                          className="btn-accent inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-bold text-white shadow-xl shadow-orange-500/25"
                        >
                          지금 무료로 요청하기
                        </a>
                        <a
                          href="tel:15880000"
                          className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white"
                        >
                          전화로 바로 문의
                        </a>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                        <div className="grid grid-cols-2 gap-3">
                          {promoImages.slice(0, 2).map((src, index) => (
                            <div
                              key={src}
                              className={`${index === 0 ? "col-span-2 aspect-[4/3]" : "aspect-[4/5]"} relative overflow-hidden rounded-2xl`}
                            >
                              <Image
                                src={src}
                                alt="트라밸 프로모션 이미지"
                                fill
                                sizes="(max-width: 1024px) 100vw, 320px"
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#07142f]/75 via-transparent to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                                  Trusted Campaign
                                </p>
                                <p className="mt-1 text-lg font-extrabold leading-tight">
                                  상담 동선은 명확하게,
                                  <br />
                                  신뢰감은 더 깊게
                                </p>
                              </div>
                            </div>
                          ))}
                          <div className="rounded-2xl bg-white p-4 text-[#0f2b5b] shadow-lg">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7c8aa5]">
                              Consultation Note
                            </p>
                            <p className="mt-2 text-lg font-extrabold leading-snug">
                              보험은 화려함보다
                              <br />
                              믿을 수 있는 설계가 먼저입니다
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                              광고 랜딩처럼 빠르게 이해되면서도, 상담 서비스의 안정감은 유지하는 구성을 적용했습니다.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {trustStats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-2xl border border-white/12 bg-white/10 px-4 py-5 text-center text-white backdrop-blur-sm"
                          >
                            <div className="text-2xl font-extrabold sm:text-3xl">{stat.value}</div>
                            <div className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[28px] bg-white p-5 shadow-[0_24px_60px_rgba(5,15,48,0.24)] sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7c8aa5]">
                    Mobile First CTA
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#111827]">
                    필요한 정보만 짧게,
                    <br />
                    문의는 더 쉽게
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                    참고 사이트의 광고 랜딩 UX처럼 한 화면에서 신뢰 포인트와 전환 버튼이 함께 보이도록 구성했습니다.
                  </p>
                  <div className="mt-5 grid gap-3">
                    {[
                      "상담 신청 후 24시간 내 회신",
                      "보험 리모델링 / 보장 점검 / 가족 보험 상담",
                      "모바일에서 바로 터치 가능한 CTA 중심",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#e5ebf5] bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-[#2149b8]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href="#consult-form"
                    className="btn-accent mt-5 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-bold text-white"
                  >
                    상담 신청하러 가기
                  </a>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-[#d9e6ff] bg-white p-5 shadow-[0_18px_50px_rgba(19,48,109,0.12)]">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#eff4ff]" />
                  <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-[#7c8aa5]">
                    Travel Voucher Tone
                  </p>
                  <p className="relative mt-2 max-w-[14rem] text-lg font-extrabold leading-snug text-[#0f2b5b]">
                    프로모션 감성은 유지하되 상담 신뢰가 중심인 카드 UI
                  </p>
                  <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[22px]">
                    <Image
                      src={promoImages[2]}
                      alt="트라밸 프로모션 이미지"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081833]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm font-semibold text-white/80">카드형 정보 설계</p>
                      <p className="mt-1 text-xl font-extrabold">광고 랜딩 UX + 보험 상담 신뢰감</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionTitle
            eyebrow="Core Benefits"
            title="이런 혜택을 받으실 수 있어요"
            description="카드형 UI로 핵심 장점을 짧고 선명하게 보여주는 방식으로 정리했습니다."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card, index) => (
              <article
                key={card.title}
                className={`card-hover rounded-[28px] border p-6 shadow-[0_20px_50px_rgba(15,43,91,0.08)] ${
                  index === 0
                    ? "border-[#dbe6ff] bg-[#f5f8ff]"
                    : "border-white bg-white"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf1ff] text-2xl">
                  {card.emoji}
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-[#111827]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#667085]">{card.desc}</p>
                <a
                  href="#consult-form"
                  className="mt-6 inline-flex rounded-full border border-[#d8e2f0] px-4 py-2 text-sm font-semibold text-[#2149b8]"
                >
                  문의하기
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#eaf1ff] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              eyebrow="Urgency"
              title="지금 상담하지 않으면 손해일 수 있습니다"
              description="참고 사이트의 프로모션형 강조 방식은 유지하되, 보험 상담에 필요한 신뢰 포인트 중심으로 재구성했습니다."
            />

            <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="grid gap-4">
                {reasonCards.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-[26px] border border-white/70 bg-white px-5 py-5 shadow-[0_18px_40px_rgba(33,73,184,0.08)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#eaf1ff] text-2xl">
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-[#111827] sm:text-lg">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-[30px] bg-[#0f2b5b] shadow-[0_28px_70px_rgba(15,43,91,0.28)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={promoImages[0]}
                    alt="트라밸 프로모션 이미지"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08152f] via-[#08152f]/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="inline-flex rounded-full bg-[#f97316] px-3 py-1 text-xs font-bold text-white">
                      빠른 상담 권장
                    </div>
                    <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white">
                      보험 나이가 오르기 전에
                      <br />
                      무료 분석부터 받아보세요
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 text-white">
                    <p className="text-xs font-semibold text-white/60">매년 보험 나이 1살 증가 시</p>
                    <p className="mt-1 text-2xl font-extrabold text-[#fde68a]">보험료 5~10% 인상</p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/75">
                    지금이 바로 최적의 타이밍입니다. 더 이상 미루지 말고 지금 바로 무료 분석을 받아보세요.
                  </p>
                  <a
                    href="#consult-form"
                    className="btn-accent inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-bold text-white"
                  >
                    지금 바로 무료 상담 받기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionTitle
            eyebrow="After Consulting"
            title="상담 후 이런 변화가 생깁니다"
            description="카드형 결과 요약으로 사용자가 얻게 될 이익을 직관적으로 보여줍니다."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {effectCards.map((effect) => (
              <article
                key={effect.title}
                className="relative overflow-hidden rounded-[28px] border border-white bg-white p-6 shadow-[0_18px_50px_rgba(15,43,91,0.08)]"
              >
                <div
                  className="absolute left-0 right-0 top-0 h-1.5"
                  style={{ background: effect.color }}
                />
                <span
                  className="absolute right-5 top-5 text-5xl font-black opacity-10"
                  style={{ color: effect.color }}
                >
                  {effect.number}
                </span>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                  style={{ backgroundColor: `${effect.color}16` }}
                >
                  {effect.emoji}
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-[#111827]">{effect.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#667085]">{effect.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#fcfdff] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              eyebrow="Simple Process"
              title="간단한 3단계 상담 프로세스"
              description="광고 랜딩 UX처럼 짧고 명확한 플로우로 전환 부담을 낮췄습니다."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.step}
                  className="rounded-[28px] border border-[#e7ecf5] bg-white p-6 shadow-[0_18px_50px_rgba(15,43,91,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#eaf1ff] px-3 py-1 text-xs font-extrabold text-[#2149b8]">
                      STEP {step.step}
                    </span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-[#111827]">{step.title}</h3>
                  <p className="mt-1 text-sm font-bold text-[#f97316]">({step.sub})</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#667085]">{step.desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="#consult-form"
                className="btn-accent inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-bold text-white"
              >
                1단계 무료 요청하기
              </a>
            </div>
          </div>
        </section>

        <section
          id="consult-form"
          className="overflow-hidden bg-[linear-gradient(180deg,_#0f2b5b_0%,_#0d2a56_100%)] py-14 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <SectionTitle
                  eyebrow="Final CTA"
                  title="지금 바로 무료 보장 분석을 받아보세요"
                  description="내용은 유지하고, 마지막 전환 구간만 가장 강하게 보이도록 정리했습니다."
                  light
                />

                <ul className="space-y-3">
                  {[
                    "완전 무료 · 강요 없는 상담",
                    "25개 보험사 비교 분석",
                    "1:1 전담 컨설턴트 배정",
                    "맞춤형 보장 분석 리포트 제공",
                  ].map((benefit) => (
                    <TrustBullet key={benefit} text={benefit} />
                  ))}
                </ul>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                      <Image
                        src={promoImages[1]}
                        alt="트라밸 프로모션 이미지"
                        fill
                        sizes="(max-width: 640px) 100vw, 280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                      Trusted Landing
                    </p>
                    <p className="mt-2 text-lg font-extrabold leading-snug">
                      참고 사이트의 프로모션 결을 유지하면서
                      <br />
                      보험 상담에 맞게 더 차분하게 정리했습니다
                    </p>
                    <a
                      href="tel:15880000"
                      className="mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
                    >
                      ☎ 1588-0000
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-5 shadow-[0_28px_80px_rgba(6,16,45,0.28)] sm:p-7">
                <ConsultForm variant="bottom" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#081a38] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                <svg
                  className="h-6 w-6 text-[#93c5fd]"
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
              </div>
              <div>
                <p className="text-sm font-bold text-white">와이즈피플코리아</p>
                <p className="text-xs text-white/45">보험 상담 전문 랜딩 페이지</p>
              </div>
            </div>

            <a
              href="tel:15880000"
              className="text-sm font-semibold text-[#93c5fd] transition-colors hover:text-white"
            >
              ☎ 1588-0000
            </a>
          </div>

          <div className="border-t border-white/10 pt-6 text-xs leading-relaxed text-white/45">
            <p>
              상호: 주식회사 와이즈피플코리아 | 사업자등록번호 000-00-00000 | 대표:
              홍길동
            </p>
            <p className="mt-2">
              주소: 서울특별시 강남구 테헤란로 000, 00층 | 이메일:
              info@wisepplkorea.com
            </p>
            <p className="mt-4">© 2026 와이즈피플코리아 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
