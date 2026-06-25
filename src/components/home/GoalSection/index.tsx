import FadeIn from "@/components/FadeIn";
import en from "@/i18n/messages/en.json";
import styles from "./style.module.scss";

const { badge, body, points } = en.home.goal;

export default function GoalSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn direction="left" className={styles.left}>
          <h2 className={styles.heading}>{badge}</h2>
          <p className={styles.body}>{body}</p>
        </FadeIn>

        <div className={styles.right}>
          {points.map(({ label, desc }, i) => (
            <FadeIn key={i} direction="right" delay={i * 0.1} className={styles.point}>
              <span className={styles.pointNum} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className={styles.pointLabel}>{label}</span>
                <span className={styles.pointDesc}>{desc}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
