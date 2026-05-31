import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await req.formData();

  const name         = (data.get("name")          as string) ?? "";
  const email        = (data.get("email")         as string) ?? "";
  const phone        = (data.get("phone")         as string) ?? "";
  const service      = (data.get("service")       as string) ?? "";
  const message      = (data.get("message")       as string) ?? "";
  const preferredDate = (data.get("preferredDate") as string) ?? "";
  const enquiryType  = (data.get("enquiryType")   as string) ?? "enquiry";

  const isBooking = enquiryType === "booking";
  const subject = isBooking
    ? `New Booking Request – ${name}`
    : `New Enquiry – ${name}`;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#374151">
      <div style="background:#1c3461;padding:24px 32px;border-radius:8px 8px 0 0">
        <h1 style="color:#fff;margin:0;font-size:20px">
          ${isBooking ? "📅 New Booking Request" : "📩 New Enquiry"} — APRIA
        </h1>
      </div>
      <div style="background:#f8fafc;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:140px;font-size:14px">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:14px">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb">
              <a href="mailto:${email}" style="color:#2898b8">${email}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:14px">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb">${phone}</td>
          </tr>` : ""}
          ${service ? `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:14px">Service</td>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb">${service}</td>
          </tr>` : ""}
          ${isBooking && preferredDate ? `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:14px">Preferred Date</td>
            <td style="padding:10px 0;border-bottom:1px solid #e5e7eb">${preferredDate}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:10px 0;color:#6b7280;font-size:14px;vertical-align:top">Message</td>
            <td style="padding:10px 0;line-height:1.6">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <div style="margin-top:24px">
          <a href="mailto:${email}"
            style="background:#2898b8;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:600;font-size:14px">
            Reply to ${name}
          </a>
        </div>
      </div>
      <p style="color:#9ca3af;font-size:12px;text-align:center;margin-top:16px">
        Submitted via apria.co.uk
      </p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: email,
      subject,
      html,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
