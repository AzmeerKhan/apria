import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";
import ServicesGrid from "./ServicesGrid";
import SectorsHeroCard from "./SectorsHeroCard";
import ServicesHeroLeft from "./ServicesHeroLeft";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description: en.services.subheading,
};

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <ServicesHeroLeft />
          <SectorsHeroCard />
        </div>
      </section>

      <ServicesGrid />

      <section className={styles.cta}>
        <div className={styles.ctaGradient} aria-hidden="true" />
        <FadeIn className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{en.services.cta.heading}</h2>
          <p className={styles.ctaBody}>{en.services.cta.body}</p>
          <Link href={ROUTES.CONTACT} className={styles.ctaBtn}>
            {en.services.cta.button}
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
