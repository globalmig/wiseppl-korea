import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href={"/"} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eff6ff]">
            <svg className="h-6 w-6 text-[#1a56db]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V7l7-4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12.5l1.8 1.8 3.2-4" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-[#0f2b5b]">WISEPPL KOREA</p>
            <p className="text-xs text-[#64748b]">보험 보장 분석 상담</p>
          </div>
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
