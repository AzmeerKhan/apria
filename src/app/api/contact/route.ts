import { Resend } from "resend";
import { notificationEmail } from "./notificationEmail";
import { autoReplyEmail } from "./autoReplyEmail";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await req.formData();

  const name = (data.get("name") as string) ?? "";
  const email = (data.get("email") as string) ?? "";
  const phone = (data.get("phone") as string) ?? "";
  const service = (data.get("service") as string) ?? "";
  const sector = (data.get("sector") as string) ?? "";
  const message = (data.get("message") as string) ?? "";
  const preferredDate = (data.get("preferredDate") as string) ?? "";
  const monthlyTurnover = (data.get("monthlyTurnover") as string) ?? "";
  const enquiryType = (data.get("enquiryType") as string) ?? "enquiry";

  const isBooking = enquiryType === "booking";
  const subject = isBooking
    ? `New Booking Request - ${name}`
    : `New Enquiry - ${name}`;

  const autoReplySubject = isBooking
    ? "Booking request received - Apria Accountants"
    : "We've received your enquiry - Apria Accountants";

  const html = notificationEmail({
    name,
    email,
    phone,
    sector,
    service,
    message,
    preferredDate,
    monthlyTurnover,
    isBooking,
  });

  const autoReplyHtml = autoReplyEmail({
    name,
    isBooking,
    preferredDate,
    service,
    sector,
    monthlyTurnover,
  });

  try {
    const [notifyResult, autoReplyResult] = await Promise.all([
      resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: process.env.RESEND_TO_EMAIL!,
        replyTo: email,
        subject,
        html,
      }),
      resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: email,
        subject: autoReplySubject,
        html: autoReplyHtml,
      }),
    ]);

    if (notifyResult.error) {
      console.error(
        "[contact] Resend notify error:",
        notifyResult.error,
      );
      return Response.json(
        { ok: false, error: notifyResult.error.message },
        { status: 500 },
      );
    }
    if (autoReplyResult.error) {
      console.error(
        "[contact] Resend auto-reply error:",
        autoReplyResult.error,
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
