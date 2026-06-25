"use client";

import { motion } from "framer-motion";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -160 },
  show:   { opacity: 1,  x: 0   },
};

export default function ContactHeroLeft() {
  return (
    <motion.div
      className={styles.heroLeft}
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <motion.p
        className={styles.badge}
        variants={fadeLeft}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {en.contact.badge}
      </motion.p>

      <motion.h1
        className={styles.heroTitle}
        variants={fadeLeft}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {en.contact.heading}
      </motion.h1>

      <motion.p
        className={styles.heroSub}
        variants={fadeLeft}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {en.contact.subheading}
      </motion.p>
    </motion.div>
  );
}
