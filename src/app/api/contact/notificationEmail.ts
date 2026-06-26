interface NotificationEmailParams {
  name: string;
  email: string;
  phone: string;
  sector: string;
  service: string;
  message: string;
  preferredDate: string;
  monthlyTurnover: string;
  isBooking: boolean;
}

export function notificationEmail({
  name,
  email,
  phone,
  sector,
  service,
  message,
  preferredDate,
  monthlyTurnover,
  isBooking,
}: NotificationEmailParams): string {
  return `
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
                        <span style="display:block;color:#A8997E;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;margin-top:2px;text-transform:uppercase;">APRIA</span>
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
              ${phone ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Phone</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${phone}</td>
              </tr>` : ""}
              ${sector ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Sector</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${sector}</td>
              </tr>` : ""}
              ${service ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Service</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${service}</td>
              </tr>` : ""}
              ${isBooking && preferredDate ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Preferred Date</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${preferredDate}</td>
              </tr>` : ""}
              ${isBooking && monthlyTurnover ? `
              <tr>
                <td width="130" style="padding:12px 0;border-bottom:1px solid #ece9e3;color:#a09890;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;vertical-align:top;">Turnover</td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid #ece9e3;color:#2e2520;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;vertical-align:top;">${monthlyTurnover}</td>
              </tr>` : ""}
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
}
