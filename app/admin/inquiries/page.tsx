import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import LogoutButton from "./LogoutButton";
import InquiriesList, { type Inquiry } from "./InquiriesList";
import Header from "@/app/_components/Header";
import Link from "next/link";

export default async function InquiriesPage() {
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("admin_auth")?.value === "true";

  if (!isAuth) {
    redirect("/admin");
  }

  const { data, error } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#f8fafc]">
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
        </div>
      </header>
      <div className="mx-auto max-w-4xl mt-8 px-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#1e293b]">문의 목록</h1>
          <LogoutButton />
        </div>

        {error && <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">데이터를 불러오는 중 오류가 발생했습니다: {error.message}</div>}

        <InquiriesList initial={(data ?? []) as Inquiry[]} />
      </div>
    </div>
  );
}
