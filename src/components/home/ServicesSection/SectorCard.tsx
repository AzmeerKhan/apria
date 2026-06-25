"use client";

import { motion, type Variants } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import styles from "./style.module.scss";

interface Props {
  heading: string;
  desc: string;
  image: StaticImageData;
  variants: Variants;
  onClick: () => void;
}

export default function SectorCard({ heading, desc, image, variants, onClick }: Props) {
  return (
    <motion.button
      className={styles.sectorCard}
      variants={variants}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={heading}
        fill
        className={styles.cardImage}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className={styles.cardOverlay} aria-hidden="true" />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{heading}</h3>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </motion.button>
  );
}
