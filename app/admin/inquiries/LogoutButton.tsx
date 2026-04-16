"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin");
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-medium text-[#64748b] hover:bg-[#f8fafc]"
    >
      로그아웃
    </button>
  );
}
