"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import styles from "./style.module.scss";

interface Props {
  title: string;
  slideFrom: "left" | "right";
  onClose: () => void;
  defaultService?: string;
  defaultSector?: string;
}

export default function BookingModal({ title, slideFrom, onClose, defaultService, defaultSector }: Props) {
  const x = slideFrom === "right" ? "100%" : "-100%";
  const panelClass = slideFrom === "right" ? styles.panelRight : styles.panelLeft;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        className={`${styles.panel} ${panelClass}`}
        role="dialog"
        aria-modal="true"
        aria-label={`Book appointment: ${title}`}
        initial={{ x }}
        animate={{ x: 0 }}
        exit={{ x }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Book a consultation</p>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={styles.body}>
          <ContactForm
            enquiryType="booking"
            defaultService={defaultService}
            defaultSector={defaultSector}
          />
        </div>
      </motion.div>
    </>
  );
}
