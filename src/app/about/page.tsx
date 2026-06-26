import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";
import FadeIn from "@/components/FadeIn";
import AboutHeroLeft from "./AboutHeroLeft";
import AboutHeroCard from "./AboutHeroCard";

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
        <div className={styles.heroInner}>
          <AboutHeroLeft />
          <AboutHeroCard />
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <FadeIn>
            <h2 className={styles.expTitle}>{en.about.experience.heading}</h2>
            <div className={styles.expBody}>
              <p>{en.about.experience.p1}</p>
              <p>{en.about.experience.p2}</p>
              <p>{en.about.experience.p3}</p>
              <p>{en.about.experience.p4}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={styles.combined}>
        <div className={styles.combinedInner}>
          <FadeIn direction="left" className={styles.combinedLeft}>
            <h2 className={styles.combinedTitle}>{en.about.values.heading}</h2>
            <div className={styles.combinedDesc}>
              <p>{en.about.experience.p3}</p>
              <p>{en.about.experience.p4}</p>
            </div>
          </FadeIn>

          <div className={styles.combinedRight}>
            {values.map(({ key }, i) => {
              const val = en.about.values[key as keyof typeof en.about.values];
              if (typeof val !== "object") return null;
              return (
                <FadeIn key={key} direction="right" delay={i * 0.1} className={styles.valuePoint}>
                  <span className={styles.valueNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className={styles.valueLabel}>{val.title}</span>
                    <span className={styles.valueDesc}>{val.desc}</span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.founder}>
        <div className={styles.founderInner}>
          <FadeIn direction="left" className={styles.founderLeft}>
            <p className={styles.founderBadge}>{en.about.founder.badge}</p>
            <h2 className={styles.founderHeading}>{en.about.founder.heading}</h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} className={styles.founderRight}>
            <p className={styles.founderBody}>{en.about.founder.body}</p>
            <Link href={ROUTES.CONTACT} className={styles.founderBtn}>
              {en.about.heroCta}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
