import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";
import ServicesGrid from "./ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description: en.services.subheading,
};

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.badge}>{en.services.badge}</p>
          <h1 className={styles.heroTitle}>{en.services.heading}</h1>
          <p className={styles.heroSub}>{en.services.subheading}</p>
        </div>
      </section>

      <ServicesGrid />

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{en.services.cta.heading}</h2>
          <p className={styles.ctaBody}>{en.services.cta.body}</p>
          <Link href={ROUTES.CONTACT} className={styles.ctaBtn}>
            {en.services.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
