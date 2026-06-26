"use client";

import { motion } from "framer-motion";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";

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

export default function AboutHeroCard() {
  return (
    <motion.div
      className={styles.heroCard}
      variants={cardVariant}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      <p className={styles.heroCardLabel}>{en.about.heroCard.label}</p>
      <motion.ul
        className={styles.heroCardList}
        variants={listVariant}
        initial="hidden"
        animate="show"
      >
        {en.about.heroCard.items.map((item) => (
          <motion.li
            key={item}
            className={styles.heroCardItem}
            variants={itemVariant}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <svg
              className={styles.heroCardCheck}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className={styles.heroCardItemText}>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
