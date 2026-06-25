import FadeIn from "@/components/FadeIn";
import { HOME_CREDENTIALS } from "@/constants/credentials";
import en from "@/i18n/messages/en.json";
import styles from "./style.module.scss";

const credentialCards = HOME_CREDENTIALS.map(({ label, credKey }) => ({
  label,
  detail: en.home.credentials[credKey],
}));

export default function CredentialsSection() {
  return (
    <section className={styles.credentials}>
      <div className={styles.container}>
        <FadeIn className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{en.home.credentials.heading}</h2>
        </FadeIn>
        <div className={styles.credList}>
          {credentialCards.map(({ label, detail }, i) => (
            <FadeIn key={label} delay={i * 0.12} className={styles.credRow}>
              <span className={styles.credAbbr}>{label}</span>
              <span className={styles.credFull}>{detail}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
