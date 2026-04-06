import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "무료 보험 분석 상담 | 와이즈피플코리아",
  description:
    "지금 보험, 제대로 가입되어 있나요? 전문 컨설턴트가 무료로 1:1 맞춤 분석해드립니다. 지금 신청하면 연간 수십만원 절약 가능합니다.",
  keywords: "보험 상담, 무료 보험 분석, 보험료 절감, 보험 비교, 보험 컨설팅",
  openGraph: {
    title: "무료 보험 분석 상담 | 와이즈피플코리아",
    description: "전문 컨설턴트가 무료로 1:1 맞춤 분석해드립니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
