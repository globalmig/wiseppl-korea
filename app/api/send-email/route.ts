import { NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/sendEmail";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    await sendInquiryEmail(body);
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "이메일 발송 실패";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
