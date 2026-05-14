import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies();
  if (cookieStore.get("admin_auth")?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { error } = await supabase.from("inquiries").delete().eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
