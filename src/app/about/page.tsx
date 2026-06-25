import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { CREDENTIALS } from "@/constants/credentials";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";
import FadeIn from "@/components/FadeIn";
import StaggerGrid from "@/components/StaggerGrid";

export const metadata: Metadata = {
  title: "About",
  description: en.about.subheading,
};

const values = [
  { key: "accuracy" },
  { key: "transparency" },
  { key: "dedication" },
  { key: "upToDate" },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <FadeIn>
            <p className={styles.badge}>{en.about.badge}</p>
            <h1 className={styles.heroTitle}>{en.about.heading}</h1>
            <p className={styles.heroSub}>{en.about.subheading}</p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutGrid}>
          <FadeIn direction="left">
            <div className={styles.profileCard}>
              <div className={styles.profileGradient} />
              <svg className={styles.profileIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
              <div className={styles.credBadges}>
                {["ACCA", "AAT"].map((b) => (
                  <span key={b} className={styles.credBadge}>{b}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <h2 className={styles.expTitle}>{en.about.experience.heading}</h2>
              <div className={styles.expBody}>
                <p>{en.about.experience.p1}</p>
                <p>{en.about.experience.p2}</p>
                <p>{en.about.experience.p3}</p>
                <p>{en.about.experience.p4}</p>
              </div>
              <div className={styles.expCta}>
                <Link href={ROUTES.CONTACT} className={styles.ctaBtn}>
                  {en.common.workWithMe}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={styles.quals}>
        <div className={styles.container}>
          <FadeIn>
            <h2 className={styles.qualsTitle}>{en.about.credentials.heading}</h2>
          </FadeIn>
          <StaggerGrid className={styles.qualsGrid}>
            {CREDENTIALS.map(({ badge }) => {
              const cred = en.about.credentials[badge.toLowerCase() as keyof typeof en.about.credentials];
              if (typeof cred !== "object") return null;
              return (
                <div key={badge} className={styles.qualCard}>
                  <div className={styles.qualBadge}>{badge}</div>
                  <div>
                    <h3 className={styles.qualName}>{cred.title}</h3>
                    <p className={styles.qualDesc}>{cred.desc}</p>
                  </div>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <FadeIn>
            <h2 className={styles.valuesTitle}>{en.about.values.heading}</h2>
          </FadeIn>
          <StaggerGrid className={styles.valuesGrid}>
            {values.map(({ key }) => {
              const val = en.about.values[key as keyof typeof en.about.values];
              if (typeof val !== "object") return null;
              return (
                <div key={key} className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
