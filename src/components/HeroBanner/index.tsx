"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import bgImage from "@/assets/images/background.png";
import { ROUTES } from "@/constants/routes";
import en from "@/i18n/messages/en.json";
import styles from "./style.module.scss";

const credentials = ["ACCA", "MAAT", "AAT", "ICAEW"] as const;

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
              <Link href={ROUTES.CONTACT} className={styles.ctaBtn}>
                Book Appointment
              </Link>
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
            <Link href={ROUTES.CONTACT} className={styles.ctaBtn}>
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
