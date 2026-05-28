import StaggerGrid from "@/components/StaggerGrid";
import FadeIn from "@/components/FadeIn";
import en from "@/i18n/messages/en.json";
import styles from "./style.module.scss";

const credentialCards = [
  { label: "ACCA",  detail: en.home.credentials.acca  },
  { label: "MAAT",  detail: en.home.credentials.maat  },
  { label: "AAT",   detail: en.home.credentials.aat   },
  { label: "ICAEW", detail: en.home.credentials.icaew },
];

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
