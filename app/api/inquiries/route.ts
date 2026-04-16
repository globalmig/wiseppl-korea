import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendInquiryEmail } from "@/lib/sendEmail";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, age, insuranceStatus, birthdate, region } = body;

  const { error } = await supabase.from("inquiries").insert({
    name,
    phone,
    ...(age && { age }),
    ...(insuranceStatus && { insurance_status: insuranceStatus }),
    ...(birthdate && { birthdate }),
    ...(region && { region }),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await sendInquiryEmail({ name, phone, age, insuranceStatus, birthdate, region }).catch(() => {});

  return NextResponse.json({ success: true });
}
