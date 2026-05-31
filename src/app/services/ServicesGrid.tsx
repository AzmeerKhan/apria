"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingModal from "@/components/BookingModal";
import FadeIn from "@/components/FadeIn";
import StaggerGrid from "@/components/StaggerGrid";
import {
  SERVICE_CATEGORIES,
  SERVICE_VALUE_MAP,
  type ServiceId,
} from "@/constants/services";
import en from "@/i18n/messages/en.json";
import styles from "./page.module.scss";

type SvcData = { title: string; summary: string; points: string[] };

type ModalState = {
  serviceLabel: string;
  serviceValue: string;
  slideFrom: "left" | "right";
} | null;

const icons: Record<ServiceId, React.ReactNode> = {
  annualAccounts: (
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  vatReturns: (
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  ),
  cisReturn: (
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </svg>
  ),
  selfAssessment: (
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  ),
  utrRegistration: (
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
      />
    </svg>
  ),
  hmrcInvestigations: (
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
};

export default function ServicesGrid() {
  const router = useRouter();
  const [modal, setModal] = useState<ModalState>(null);

  const handleBook = (id: ServiceId) => {
    if (window.innerWidth < 768) {
      router.push(`/contact?service=${SERVICE_VALUE_MAP[id]}`);
    } else {
      setModal({
        serviceLabel: en.services[id].title,
        serviceValue: SERVICE_VALUE_MAP[id],
        slideFrom: "right",
      });
    }
  };

  return (
    <>
      {SERVICE_CATEGORIES.map(({ id, serviceIds }) => (
        <section key={id} className={styles.serviceSection}>
          <FadeIn className={styles.categoryHeader}>
            <span className={styles.categoryBadge}>
              {en.services.categories[id]}
            </span>
            <div className={styles.categoryDivider} />
          </FadeIn>
          <StaggerGrid className={styles.servicesGrid}>
            {serviceIds.map((svcId) => {
              const svc = en.services[
                svcId as keyof typeof en.services
              ] as SvcData;
              return (
                <div key={svcId} className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    {icons[svcId]}
                  </div>
                  <h2 className={styles.serviceTitle}>{svc.title}</h2>
                  <p className={styles.serviceSummary}>{svc.summary}</p>
                  <ul className={styles.servicePoints}>
                    {svc.points.map((point) => (
                      <li key={point} className={styles.servicePoint}>
                        <svg
                          className={styles.checkIcon}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={styles.bookBtn}
                    onClick={() => handleBook(svcId)}
                  >
                    Book Now
                  </button>
                </div>
              );
            })}
          </StaggerGrid>
        </section>
      ))}

      {modal && (
        <BookingModal
          serviceLabel={modal.serviceLabel}
          serviceValue={modal.serviceValue}
          slideFrom={modal.slideFrom}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
