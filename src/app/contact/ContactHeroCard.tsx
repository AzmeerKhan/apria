"use client";

import { motion } from "framer-motion";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";

const cardVariant = {
  hidden: { opacity: 0, x: 160 },
  show:   { opacity: 1, x: 0 },
};



export default function ContactHeroCard() {
  return (
    <motion.div
      className={styles.heroCard}
      variants={cardVariant}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      <p className={styles.heroCardLabel}>{en.contact.info.freeConsultation.heading}</p>
      <p className={styles.heroCardBody}>{en.contact.info.freeConsultation.body}</p>

    </motion.div>
  );
}
