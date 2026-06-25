"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { StaticImageData } from "next/image";
import FadeIn from "@/components/FadeIn";
import SectorCard from "./SectorCard";
import BookingModal from "@/components/BookingModal";
import { SECTOR_IDS, type SectorId } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import en from "@/i18n/messages/en.json";
import servicesImg   from "@/assets/images/sectors/sector-services.png";
import healthcareImg from "@/assets/images/sectors/sector-healthcare.png";
import tradesImg     from "@/assets/images/sectors/sector-trade.png";
import propertyImg   from "@/assets/images/sectors/sector-property.png";
import styles from "./style.module.scss";

const sectorImages: Record<SectorId, StaticImageData> = {
  services:   servicesImg,
  healthcare: healthcareImg,
  trades:     tradesImg,
  property:   propertyImg,
};

const sectorCopy: Record<SectorId, { heading: string; desc: string }> = {
  services:   en.home.sectors.services,
  healthcare: en.home.sectors.healthcare,
  trades:     en.home.sectors.trades,
  property:   en.home.sectors.property,
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

type ModalState = {
  title: string;
  sectorValue: string;
} | null;

export default function ServicesSection() {
  const router = useRouter();
  const [modal, setModal] = useState<ModalState>(null);

  const handleClick = (id: SectorId) => {
    if (window.innerWidth < 768) {
      router.push(`${ROUTES.CONTACT}?sector=${id}&tab=booking`);
    } else {
      setModal({ title: sectorCopy[id].heading, sectorValue: id });
    }
  };

  return (
    <>
      <section className={styles.sectors}>
        <div className={styles.container}>
          <FadeIn className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{en.home.sectors.heading}</h2>
            <p className={styles.sectionSub}>{en.home.sectors.subheading}</p>
          </FadeIn>
          <motion.div
            className={styles.sectorsGrid}
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {SECTOR_IDS.map((id) => {
              const { heading, desc } = sectorCopy[id];
              return (
                <SectorCard
                  key={id}
                  heading={heading}
                  desc={desc}
                  image={sectorImages[id]}
                  variants={cardVariants}
                  onClick={() => handleClick(id)}
                />
              );
            })}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {modal && (
          <BookingModal
            title={modal.title}
            defaultSector={modal.sectorValue}
            slideFrom="right"
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
