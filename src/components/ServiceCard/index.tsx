import { ReactNode } from "react";
import styles from "./style.module.scss";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  dark?: boolean;
  onClick?: () => void;
}

export default function ServiceCard({ icon, title, desc, dark, onClick }: ServiceCardProps) {
  return (
    <div
      className={`${styles.card}${dark ? ` ${styles.cardDark}` : ""}${onClick ? ` ${styles.clickable}` : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.iconWrap}>{icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}
