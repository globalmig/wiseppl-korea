import { Resend } from "resend";

const ageLabel: Record<string, string> = {
  "20s": "20대",
  "30s": "30대",
  "40s": "40대",
  "50s": "50대",
  "60plus": "60대 이상",
};
const insuranceLabel: Record<string, string> = {
  none: "보험 없음",
  some: "일부 가입",
  full: "여러 건 가입",
  review: "점검 필요",
};

interface InquiryData {
  name: string;
  phone: string;
  age?: string;
  insuranceStatus?: string;
  birthdate?: string;
  region?: string;
}

export async function sendInquiryEmail(data: InquiryData) {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_EMAIL) return;

  const { name, phone, age, insuranceStatus, birthdate, region } = data;

  const rows = [
    ["이름", name],
    ["연락처", phone],
    ...(birthdate ? [["생년월일", birthdate]] : []),
    ...(region ? [["지역", region]] : []),
    ...(age ? [["연령대", ageLabel[age] ?? age]] : []),
    ...(insuranceStatus ? [["보험 상태", insuranceLabel[insuranceStatus] ?? insuranceStatus]] : []),
  ] as [string, string][];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr >
        <td style="padding:14px 16px;color:#64748b;font-size:13px;border-bottom:1px solid #f1f5f9;">${label}</td>
        <td style="padding:14px 16px;font-size:13px;font-weight:600;color:#1e293b;border-bottom:1px solid #f1f5f9;">${value}</td>
      </tr>`,
    )
    .join("");

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "WISEPPL KOREA <onboarding@resend.dev>",
    to: process.env.NOTIFICATION_EMAIL,
    subject: `[와이즈피플코리아] 새 상담 신청 - ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px; border:1px solid #e2e8f0; border-radius:12px; background:#f8fafc;">
        <div style="background:#1a56db;border-radius:12px 12px 0 0;padding:20px 24px;">
          <h2 style="margin:0;font-size:16px;color:white;font-weight:700;">새 상담 신청이 접수되었습니다</h2>
          <p style="margin:4px 0 0;font-size:12px;color:#bfdbfe;">
            ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
          </p>
        </div>
        <table style="width:100%;border-collapse:collapse;background:white;border:1px solid #e2e8f0;  border-top:none;border-radius:0 0 12px 12px;overflow:hidden;">
          ${tableRows}
        </table>
        <p style="margin-top:24px;font-size:12px;color:#94a3b8;text-align:center;">와이즈피플코리아 관리자 알림</p>
      </div>
    `,
  });
}
