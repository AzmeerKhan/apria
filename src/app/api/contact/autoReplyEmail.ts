interface AutoReplyEmailParams {
  name: string;
  isBooking: boolean;
  preferredDate: string;
  service: string;
  sector: string;
  monthlyTurnover: string;
}

export function autoReplyEmail({
  name,
  isBooking,
  preferredDate,
  service,
  sector,
  monthlyTurnover,
}: AutoReplyEmailParams): string {
  return `
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
                  <p style="color:#A8997E;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;margin:2px 0 0;text-transform:uppercase;">APRIA</p>
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
            ${isBooking ? `
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 24px;">Thank you for requesting a consultation with Apria Accountants. We&#39;ve received your booking request and will confirm your appointment as soon as possible.</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
              <tr>
                <td style="background-color:#F5EDD8;border-left:3px solid #B8935A;border-radius:0 8px 8px 0;padding:20px 24px;">
                  <p style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;margin:0 0 14px;text-transform:uppercase;">Your Request Summary</p>
                  ${preferredDate ? `
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                    <tr>
                      <td width="140" style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;vertical-align:top;">Preferred date</td>
                      <td style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-weight:600;vertical-align:top;">${preferredDate}</td>
                    </tr>
                  </table>` : ""}
                  ${service ? `
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                    <tr>
                      <td width="140" style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;vertical-align:top;">Service</td>
                      <td style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-weight:600;vertical-align:top;">${service}</td>
                    </tr>
                  </table>` : ""}
                  ${sector ? `
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                    <tr>
                      <td width="140" style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;vertical-align:top;">Sector</td>
                      <td style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-weight:600;vertical-align:top;">${sector}</td>
                    </tr>
                  </table>` : ""}
                  ${monthlyTurnover ? `
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="140" style="color:#7a7068;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;vertical-align:top;">Monthly turnover</td>
                      <td style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13px;font-weight:600;vertical-align:top;">${monthlyTurnover}</td>
                    </tr>
                  </table>` : ""}
                </td>
              </tr>
            </table>
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 24px;">We&#39;ll be in touch within <strong style="color:#2e2520;">1-2 business days</strong> to confirm the time or suggest an alternative if needed.</p>
            ` : `
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 16px;">Thank you for reaching out to Apria Accountants. We&#39;ve received your enquiry and one of our team members will be in touch with you shortly.</p>
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 24px;">We typically respond within <strong style="color:#2e2520;">1-2 business days</strong>.</p>
            `}
            <p style="color:#514840;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:1.7;margin:0 0 24px;">If your matter is urgent, feel free to call or WhatsApp us on <a href="tel:+447599598568" style="color:#1F8AAD;font-weight:600;text-decoration:none;">+44 7599 598568</a>.</p>

            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
              <tr>
                <td style="background-color:#F5F3EE;border:1px solid #ece9e3;border-radius:8px;padding:16px 20px;">
                  <p style="color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;margin:0 0 6px;text-transform:uppercase;">Office Hours</p>
                  <p style="color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;margin:0;">Mon - Fri, 9:00am - 5:00pm</p>
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
}
