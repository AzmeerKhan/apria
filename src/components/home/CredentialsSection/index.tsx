import StaggerGrid from "@/components/StaggerGrid";
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
          <p className={styles.sectionSub}>{en.home.credentials.subheading}</p>
        </FadeIn>
        <StaggerGrid className={styles.credGrid}>
          {credentialCards.map(({ label, detail }) => (
            <div key={label} className={styles.credCard}>
              <div className={styles.credLabel}>{label}</div>
              <p className={styles.credDetail}>{detail}</p>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
