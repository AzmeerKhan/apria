import { ReactNode } from "react";
import styles from "./style.module.scss";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  dark?: boolean;
}

export default function ServiceCard({ icon, title, desc, dark }: ServiceCardProps) {
  return (
    <div className={`${styles.card}${dark ? ` ${styles.cardDark}` : ""}`}>
      <div className={styles.iconWrap}>{icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}
