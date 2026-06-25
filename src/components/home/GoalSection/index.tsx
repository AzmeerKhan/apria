import FadeIn from "@/components/FadeIn";
import en from "@/i18n/messages/en.json";
import styles from "./style.module.scss";

const { badge, heading, body, points } = en.home.goal;

export default function GoalSection() {
  return (
    <section className={styles.section}>
      <div className={styles.splitBg} aria-hidden="true">
        <div className={styles.leftBg} />
        <div className={styles.rightBg} />
      </div>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <FadeIn direction="left" className={styles.left}>
          <span className={styles.badge}>{badge}</span>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.body}>{body}</p>
        </FadeIn>

        <div className={styles.right}>
          {points.map(({ label, desc }, i) => (
            <FadeIn key={i} direction="right" delay={i * 0.1} className={styles.point}>
              <span className={styles.pointLabel}>{label}</span>
              <span className={styles.pointDesc}>{desc}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
