import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wiseppl-korea.vercel.app";
const BASE_URL = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "무료 보험 분석 상담 | 와이즈피플코리아",
    template: "%s | 와이즈피플코리아",
  },
  description: "내 보험 제대로 보장받고 계신가요? 전문 FP 무료 1:1 맞춤 보장 분석 + 동남아 여행권 이벤트.",
  keywords: ["보험 상담", "무료 보험 분석", "보장 분석", "보험료 절감", "암보험", "보험 비교", "보험 컨설팅", "와이즈피플코리아", "맞춤 보험", "보험 점검"],
  authors: [{ name: "와이즈피플코리아" }],
  creator: "와이즈피플코리아",
  publisher: "와이즈피플코리아",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "와이즈피플코리아",
    title: "무료 보험 분석 상담 | 와이즈피플코리아",
    description: "내 보험 제대로 보장받고 계신가요? 전문 FP 무료 1:1 맞춤 보장 분석 + 동남아 여행권 이벤트.",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "와이즈피플코리아 무료 보험 분석 상담",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "무료 보험 분석 상담 | 와이즈피플코리아",
    description: "내 보험 제대로 보장받고 계신가요? 전문 FP 무료 1:1 맞춤 보장 분석 + 동남아 여행권 이벤트.",
    images: ["/seo.png"],
  },
  verification: {
    // 네이버 서치어드바이저 소유확인 코드를 여기에 입력하세요
    // https://searchadvisor.naver.com → 사이트 등록 → HTML 태그 방식의 content 값
    other: {
      "naver-site-verification": "68bdee749220fee56a659fa0ea452ace91045629",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "와이즈피플코리아",
  description: "보험 전문 FP 무료 보장 분석 상담 서비스",
  url: BASE_URL,
  telephone: "1661-5022",
  email: "pangsls@naver.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "가산디지털1로 212, 208호",
    addressLocality: "금천구",
    addressRegion: "서울",
    addressCountry: "KR",
  },
  image: `${BASE_URL}/seo.png`,
  priceRange: "무료",
  openingHours: "Mo-Fr 09:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
