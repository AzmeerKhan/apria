import { ReactNode } from "react";
import styles from "./style.module.scss";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}
