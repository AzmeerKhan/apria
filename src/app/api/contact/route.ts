import { Resend } from "resend";

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

  const turnoverLabels: Record<string, string> = {
    "under-5k": "Under £5,000",
    "5k-15k": "£5,000 - £15,000",
    "15k-30k": "£15,000 - £30,000",
    "30k-50k": "£30,000 - £50,000",
    "over-50k": "Over £50,000",
  };
  const turnoverLabel = turnoverLabels[monthlyTurnover] ?? "";
  const isBooking = enquiryType === "booking";
  const subject = isBooking
    ? `New Booking Request - ${name}`
    : `New Enquiry - ${name}`;

  const html = `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F5F3EE;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

        <tr>
          <td style="background-color:#071428;border-radius:12px 12px 0 0;overflow:hidden;padding:0;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:22px 32px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="vertical-align:middle;">
                        <img src="https://apriaaccountants.co.uk/apria-logo.png" alt="Apria Accountants" width="110" style="display:block;border:0;height:auto;max-height:40px;width:auto;" />
                        <span style="display:block;color:#A8997E;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;margin-top:6px;text-transform:uppercase;">APRIA</span>
                      </td>
                      <td align="right" style="vertical-align:middle;">
                        <span style="color:#CDBFAB;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.09em;text-transform:uppercase;">${isBooking ? "BOOKING REQUEST" : "NEW ENQUIRY"}</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td height="3" style="background-color:#B8935A;font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background-color:#ffffff;border-left:1px solid #ece9e3;border-right:1px solid #ece9e3;padding:32px 32px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Name</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;font-weight:600;vertical-align:top;">${name}</td>
              </tr>
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Email</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;vertical-align:top;">
                  <a href="mailto:${email}" style="color:#1F8AAD;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;text-decoration:none;">${email}</a>
                </td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Phone</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${phone}</td>
              </tr>`
                  : ""
              }
              ${
                sector
                  ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Sector</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${sector}</td>
              </tr>`
                  : ""
              }
              ${
                service
                  ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Service</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${service}</td>
              </tr>`
                  : ""
              }
              ${
                isBooking && preferredDate
                  ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Preferred Date</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${preferredDate}</td>
              </tr>`
                  : ""
              }
              ${
                isBooking && turnoverLabel
                  ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Turnover</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${turnoverLabel}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td width="130" style="padding:12px 0;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Message</td>
                <td style="padding:12px 0 12px 16px;color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;vertical-align:top;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>

            <table cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
              <tr>
                <td style="background-color:#1F8AAD;border-bottom:3px solid #155F7A;border-radius:6px;">
                  <a href="mailto:${email}" style="color:#ffffff;display:inline-block;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;font-weight:600;letter-spacing:0.04em;padding:13px 28px;text-decoration:none;">Reply to ${name} &rarr;</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background-color:#0D1F3D;border-radius:0 0 12px 12px;padding:18px 32px;text-align:center;">
            <p style="color:#A8997E;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;letter-spacing:0.03em;margin:0;">Submitted via apriaaccountants.co.uk</p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

  const autoReplySubject = isBooking
    ? "Booking request received - Apria Accountants"
    : "We've received your enquiry - Apria Accountants";

  const autoReplyHtml = `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F5F3EE;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

        <tr>
          <td style="background-color:#071428;border-radius:12px 12px 0 0;overflow:hidden;padding:0;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="padding:28px 32px 24px;">
                  <img src="https://apriaaccountants.co.uk/apria-logo.png" alt="Apria Accountants" width="140" style="display:inline-block;border:0;height:auto;max-height:50px;width:auto;" />
                  <p style="color:#A8997E;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;margin:6px 0 0;text-transform:uppercase;">APRIA</p>
                </td>
              </tr>
              <tr>
                <td height="3" style="background-color:#B8935A;font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background-color:#ffffff;border-left:1px solid #ece9e3;border-right:1px solid #ece9e3;padding:36px 32px 32px;">
            <p style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;font-weight:600;margin:0 0 16px;">Hi ${name},</p>
            ${
              isBooking
                ? `
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 24px;">Thank you for requesting a consultation with Apria Accountants. We&#39;ve received your booking request and will confirm your appointment as soon as possible.</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
              <tr>
                <td style="background-color:#F5EDD8;border-left:3px solid #B8935A;border-radius:0 8px 8px 0;padding:20px 24px;">
                  <p style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;margin:0 0 14px;text-transform:uppercase;">Your Request Summary</p>
                  ${
                    preferredDate
                      ? `
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                    <tr>
                      <td width="140" style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;vertical-align:top;">Preferred date</td>
                      <td style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-weight:600;vertical-align:top;">${preferredDate}</td>
                    </tr>
                  </table>`
                      : ""
                  }
                  ${
                    service
                      ? `
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                    <tr>
                      <td width="140" style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;vertical-align:top;">Service</td>
                      <td style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-weight:600;vertical-align:top;">${service}</td>
                    </tr>
                  </table>`
                      : ""
                  }
                  ${
                    sector
                      ? `
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                    <tr>
                      <td width="140" style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;vertical-align:top;">Sector</td>
                      <td style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-weight:600;vertical-align:top;">${sector}</td>
                    </tr>
                  </table>`
                      : ""
                  }
                  ${
                    turnoverLabel
                      ? `
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="140" style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;vertical-align:top;">Monthly turnover</td>
                      <td style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-weight:600;vertical-align:top;">${turnoverLabel}</td>
                    </tr>
                  </table>`
                      : ""
                  }
                </td>
              </tr>
            </table>
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 24px;">We&#39;ll be in touch within <strong style="color:#2e2520;">1&#8211;2 business days</strong> to confirm the time or suggest an alternative if needed.</p>
            `
                : `
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 16px;">Thank you for reaching out to Apria Accountants. We&#39;ve received your enquiry and one of our team members will be in touch with you shortly.</p>
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 24px;">We typically respond within <strong style="color:#2e2520;">1&#8211;2 business days</strong>.</p>
            `
            }
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 24px;">If your matter is urgent, feel free to call or WhatsApp us on <a href="tel:+447599598568" style="color:#1F8AAD;font-weight:600;text-decoration:none;">+44 7599 598568</a>.</p>

            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
              <tr>
                <td style="background-color:#F5F3EE;border:1px solid #ece9e3;border-radius:8px;padding:16px 20px;">
                  <p style="color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;margin:0 0 6px;text-transform:uppercase;">Office Hours</p>
                  <p style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;margin:0;">Mon &#8211; Fri, 9:00am &#8211; 5:00pm</p>
                </td>
              </tr>
            </table>

            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 28px;">In the meantime, learn more about our services at <a href="https://apriaaccountants.co.uk" style="color:#1F8AAD;text-decoration:none;">apriaaccountants.co.uk</a>.</p>
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;margin:0;">Warm regards,<br><strong style="color:#2e2520;">The Apria Team</strong></p>
          </td>
        </tr>

        <tr>
          <td style="background-color:#0D1F3D;border-radius:0 0 12px 12px;padding:20px 32px;text-align:center;">
            <p style="color:#A8997E;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;letter-spacing:0.03em;margin:0 0 6px;">Apria Accountants &nbsp;&#183;&nbsp; 241 Manningham Lane, Bradford, BD8 7ER</p>
            <p style="font-size:12px;margin:0;">
              <a href="mailto:info@apriaaccountants.co.uk" style="color:#A8997E;text-decoration:none;">info@apriaaccountants.co.uk</a>
              <span style="color:#A8997E;"> &nbsp;&#183;&nbsp; </span>
              <a href="tel:+447599598568" style="color:#A8997E;text-decoration:none;">+44 7599 598568</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

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
