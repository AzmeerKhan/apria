"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import bgImage from "@/assets/images/background.png";
import { ROUTES } from "@/constants/routes";
import en from "@/i18n/messages/en.json";
import styles from "./style.module.scss";

const credentials = ["ACCA", "AAT"] as const;

const services = [
  en.services.annualAccounts.title,
  en.services.vatReturns.title,
  en.services.cisReturn.title,
  en.services.selfAssessment.title,
  en.services.utrRegistration.title,
  en.services.hmrcInvestigations.title,
];

const fadeLeft = {
  hidden: { opacity: 0, x: -160 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 160 },
  show: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const serviceStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.45 } },
};

export default function HeroBanner() {
  return (
    <section className={styles.section}>
      <Image
        src={bgImage}
        alt=""
        fill
        className={styles.bgImage}
        priority
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.grid}>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div
              variants={fadeLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={styles.credentialRow}
            >
              {credentials.map((c) => (
                <span key={c} className={styles.credBadge}>{c}</span>
              ))}
            </motion.div>

            <motion.h1
              variants={fadeLeft}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={styles.heading}
            >
              Accounting Services
              <br /> in the UK
            </motion.h1>

            <motion.p
              variants={fadeLeft}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={styles.desc}
            >
              Professional tax compliance, VAT returns, and financial
              reporting for limited companies and the self-employed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 1.2, ease: "easeIn" }}
              className={styles.ctaDesktop}
            >
              <Link href={`${ROUTES.CONTACT}?tab=booking`} className={styles.ctaBtn}>
                Book Appointment
              </Link>
              <div className={styles.contactRow}>
                <a href={`mailto:${en.contact.info.emailValue}`} className={styles.contactLink}>
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {en.contact.info.emailValue}
                </a>
                <a href={en.contact.info.phoneHref} className={styles.contactLink}>
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {en.contact.info.phoneValue}
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className={styles.servicesCard}
          >
            <p className={styles.servicesLabel}>Our Services</p>

            <motion.ul
              variants={serviceStagger}
              initial="hidden"
              animate="show"
              className={styles.servicesList}
            >
              {services.map((name) => (
                <motion.li
                  key={name}
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={styles.serviceItem}
                >
                  <svg
                    className={styles.checkIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className={styles.serviceName}>{name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 1.2, ease: "easeIn" }}
            className={styles.ctaMobile}
          >
            <Link href={`${ROUTES.CONTACT}?tab=booking`} className={styles.ctaBtn}>
              Book Appointment
            </Link>
            <div className={styles.contactRow}>
              <a href={`mailto:${en.contact.info.emailValue}`} className={styles.contactLink}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {en.contact.info.emailValue}
              </a>
              <a href={en.contact.info.phoneHref} className={styles.contactLink}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {en.contact.info.phoneValue}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
