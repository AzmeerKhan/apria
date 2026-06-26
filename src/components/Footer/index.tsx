import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { ROUTES, NAV_LINKS } from "@/constants/routes";
import { CREDENTIAL_BADGES } from "@/constants/credentials";
import { SERVICE_IDS } from "@/constants/services";
import en from "@/i18n/messages/en.json";

const SERVICE_LABELS: Record<string, string> = {
  annualAccounts: en.services.annualAccounts.title,
  vatReturns: en.services.vatReturns.title,
  cisReturn: en.services.cisReturn.title,
  selfAssessment: en.services.selfAssessment.title,
  companyFormation: en.services.companyFormation.title,
  capitalGainsTax: en.services.capitalGainsTax.title,
  hmrcInvestigations: en.services.hmrcInvestigations.title,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href={ROUTES.HOME} className={styles.logoRow}>
              <Image
                src="/apria-logo.png"
                alt="APRIA"
                width={66}
                height={44}
                className={styles.logoImg}
              />
              <span className={styles.logoText}>APRIA</span>
            </Link>
            <p className={styles.tagline}>{en.footer.tagline}</p>
            <div className={styles.badges}>
              {CREDENTIAL_BADGES.map((b) => (
                <span key={b} className={styles.badge}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.colHeading}>{en.footer.quickLinks}</h3>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, labelKey }) => (
                <li key={href}>
                  <Link href={href} className={styles.footerLink}>
                    {
                      en.nav[
                        labelKey.replace(
                          "nav.",
                          "",
                        ) as keyof typeof en.nav
                      ]
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colHeading}>
              {en.footer.servicesLabel}
            </h3>
            <ul className={styles.linkList}>
              {SERVICE_IDS.map((id) => (
                <li key={id}>
                  <Link
                    href={ROUTES.SERVICES}
                    className={styles.footerLink}
                  >
                    {SERVICE_LABELS[id]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {en.footer.copyright}
          </p>
          <p>{en.footer.credentials}</p>
        </div>
      </div>
    </footer>
  );
}
