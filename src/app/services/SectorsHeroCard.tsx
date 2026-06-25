"use client";

import { motion } from "framer-motion";
import { SECTOR_IDS } from "@/constants/services";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";

const sectorLabels: Record<(typeof SECTOR_IDS)[number], string> = {
  services:   en.services.sectors.services,
  healthcare: en.services.sectors.healthcare,
  trades:     en.services.sectors.trades,
  property:   en.services.sectors.property,
};

const cardVariant = {
  hidden: { opacity: 0, x: 160 },
  show:   { opacity: 1, x: 0 },
};

const listVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.45 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
};

export default function SectorsHeroCard() {
  return (
    <motion.div
      className={styles.sectorsCard}
      variants={cardVariant}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      <p className={styles.sectorsCardLabel}>Industries We Serve</p>
      <motion.ul
        className={styles.sectorsList}
        variants={listVariant}
        initial="hidden"
        animate="show"
      >
        {SECTOR_IDS.map((id) => (
          <motion.li
            key={id}
            className={styles.sectorItem}
            variants={itemVariant}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <svg className={styles.sectorCheck} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className={styles.sectorName}>{sectorLabels[id]}</span>
          </motion.li>
        ))}
        <motion.li
          className={styles.sectorItem}
          variants={itemVariant}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <svg className={styles.sectorCheck} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span className={styles.sectorName}>& Others</span>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
