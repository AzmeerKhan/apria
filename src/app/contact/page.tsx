import type { Metadata } from "next";
import ContactTabs from "@/components/ContactTabs";
import FadeIn from "@/components/FadeIn";
import ContactHeroCard from "./ContactHeroCard";
import ContactHeroLeft from "./ContactHeroLeft";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_LOCATION,
  CONTACT_HOURS,
  CONTACT_MAP_URL,
} from "@/constants/contact";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Contact",
  description: en.contact.subheading,
};

const contactDetails = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: en.contact.info.email,
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    label: en.contact.info.phone,
    value: CONTACT_PHONE,
    href: CONTACT_PHONE_HREF,
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    label: en.contact.info.location,
    value: CONTACT_LOCATION,
    href: null,
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Office Hours",
    value: CONTACT_HOURS,
    href: null,
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    service?: string;
    sector?: string;
    tab?: string;
  }>;
}) {
  const { service, sector, tab } = await searchParams;
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <ContactHeroLeft />
          <ContactHeroCard />
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.layout}>
          <FadeIn direction="left" className={styles.formCard}>
            <h2 className={styles.formTitle}>
              {en.contact.form.heading}
            </h2>
            <ContactTabs
              defaultService={service}
              defaultSector={sector}
              defaultTab={tab === "booking" ? "booking" : undefined}
            />
          </FadeIn>

          <div className={styles.sidebar}>
            <FadeIn direction="right">
              <div className={styles.contactCard}>
                <h2 className={styles.contactTitle}>
                  {en.contact.info.heading}
                </h2>
                <ul className={styles.contactList}>
                  {contactDetails.map(({ icon, label, value, href }) => (
                    <li key={label} className={styles.contactItem}>
                      <div className={styles.contactIcon}>{icon}</div>
                      <div>
                        <p className={styles.contactLabel}>{label}</p>
                        {href ? (
                          <a href={href} className={styles.contactLink}>
                            {value}
                          </a>
                        ) : (
                          <p className={styles.contactValue}>{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className={styles.sidebarMapWrap}>
                <iframe
                  src={CONTACT_MAP_URL}
                  title="Office location"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.sidebarMap}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
