import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ROUTES } from "@/constants/routes";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_HOURS } from "@/constants/contact";
import en from "@/i18n/messages/en.json";
import styles from "./style.module.scss";

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <FadeIn direction="left" className={styles.ctaLeft}>
          <p className={styles.ctaEyebrow}>Work with us</p>
          <h2 className={styles.ctaTitle}>{en.home.cta.heading}</h2>
        </FadeIn>

        <FadeIn direction="right" delay={0.1} className={styles.ctaRight}>
          <p className={styles.ctaBody}>{en.home.cta.body}</p>
          <Link href={ROUTES.CONTACT} className={styles.ctaBtn}>
            {en.home.cta.button}
          </Link>
          <div className={styles.ctaContacts}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.ctaContact}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {CONTACT_EMAIL}
            </a>
            <a href={CONTACT_PHONE_HREF} className={styles.ctaContact}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {CONTACT_PHONE}
            </a>
            <span className={styles.ctaContact}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {CONTACT_HOURS}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
