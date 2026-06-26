"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingModal from "@/components/BookingModal";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICE_IDS, SERVICE_VALUE_MAP, type ServiceId } from "@/constants/services";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";

type SvcData = { title: string; summary: string; points: string[] };

type ModalState = {
  title: string;
  serviceValue: string;
} | null;

const icons: Record<ServiceId, React.ReactNode> = {
  annualAccounts: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  vatReturns: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  cisReturn: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  selfAssessment: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  companyFormation: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  capitalGainsTax: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  hmrcInvestigations: (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

export default function ServicesGrid() {
  const router = useRouter();
  const [modal, setModal] = useState<ModalState>(null);

  const handleBook = (id: ServiceId) => {
    if (window.innerWidth < 768) {
      router.push(`/contact?service=${SERVICE_VALUE_MAP[id]}&tab=booking`);
    } else {
      setModal({ title: en.services[id].title, serviceValue: SERVICE_VALUE_MAP[id] });
    }
  };

  return (
    <>
      <section className={styles.serviceSection}>
        <div className={styles.servicesGrid}>
          {SERVICE_IDS.map((svcId, i) => {
            const svc = en.services[svcId as keyof typeof en.services] as SvcData;
            return (
              <motion.div
                key={svcId}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: "easeOut" }}
                className={styles.serviceCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.serviceIconWrap}>{icons[svcId]}</div>
                  <span className={styles.serviceIndex} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className={styles.serviceTitle}>{svc.title}</h2>
                <p className={styles.serviceSummary}>{svc.summary}</p>
                <ul className={styles.servicePoints}>
                  {svc.points.map((point) => (
                    <li key={point} className={styles.servicePoint}>
                      <svg className={styles.checkIcon} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <button className={styles.bookBtn} onClick={() => handleBook(svcId)}>
                  Book Now
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {modal && (
          <BookingModal
            title={modal.title}
            defaultService={modal.serviceValue}
            slideFrom="right"
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
