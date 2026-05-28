import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";
import StaggerGrid from "@/components/StaggerGrid";
import { ROUTES } from "@/constants/routes";
import { SERVICE_IDS, type ServiceId } from "@/constants/services";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";

const serviceIcons: Record<ServiceId, React.ReactNode> = {
  annualAccounts: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  vatReturns: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  ),
  cisReturn: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
  selfAssessment: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  ),
  utrRegistration: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  ),
  hmrcInvestigations: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
};

const credentialCards = [
  { label: "ACCA", detail: en.home.credentials.acca },
  { label: "MAAT", detail: en.home.credentials.maat },
  { label: "AAT", detail: en.home.credentials.aat },
  { label: "ICAEW", detail: en.home.credentials.icaew },
];

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <StatsBar />

      <section className={styles.services}>
        <div className={styles.container}>
          <FadeIn className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {en.home.services.heading}
            </h2>
            <p className={styles.sectionSub}>
              {en.home.services.subheading}
            </p>
          </FadeIn>
          <StaggerGrid className={styles.servicesGrid}>
            {SERVICE_IDS.map((id) => (
              <ServiceCard
                key={id}
                icon={serviceIcons[id]}
                title={en.services[id].title}
                desc={en.services[id].summary}
              />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className={styles.credentials}>
        <div className={styles.container}>
          <FadeIn className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {en.home.credentials.heading}
            </h2>
            <p className={styles.sectionSub}>
              {en.home.credentials.subheading}
            </p>
          </FadeIn>
          <StaggerGrid className={styles.credGrid}>
            {credentialCards.map(({ label, detail }) => (
              <div key={label} className={styles.credCard}>
                <div className={styles.credLabel}>{label}</div>
                <p className={styles.credDetail}>{detail}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaGradient} />
        <FadeIn className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{en.home.cta.heading}</h2>
          <p className={styles.ctaBody}>{en.home.cta.body}</p>
          <Link href={ROUTES.CONTACT} className={styles.ctaBtn}>
            {en.home.cta.button}
          </Link>
          <div className={styles.ctaContacts}>
            <a
              href={`mailto:${en.contact.info.emailValue}`}
              className={styles.ctaContact}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              {en.contact.info.emailValue}
            </a>
            <a
              href={en.contact.info.phoneHref}
              className={styles.ctaContact}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              {en.contact.info.phoneValue}
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
