import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendInquiryEmail } from "@/lib/sendEmail";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, type, age, region } = body;

  const { error } = await supabase.from("inquiries").insert({
    name,
    phone,
    ...(type && { type }),
    ...(age && { birthdate: age }),
    ...(region && { region }),
  });

  if (error) {
    console.error("Supabase insert error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await sendInquiryEmail({ name, phone, type, age, region }).catch(() => {});

  return NextResponse.json({ success: true });
}
