"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import accaLogo from "@/assets/images/acca-logo.png";
import aatLogo from "@/assets/images/aat-logo.png";
import styles from "./style.module.scss";

function AnimatedCount({
  to,
  suffix = "",
  inView,
  duration = 1.5,
  delay = 0,
}: {
  to: number;
  suffix?: string;
  inView: boolean;
  duration?: number;
  delay?: number;
}) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    if (v <= 0) return `0${suffix}`;
    return `${Math.min(Math.ceil(v), to)}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      delay,
      ease: [0.2, 0, 0.8, 1],
      onComplete: () => count.set(to),
    });
    return controls.stop;
  }, [inView, count, to, duration, delay]);

  return <motion.span>{display}</motion.span>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, x: -260 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.stat}>
            <div className={styles.count}>
              <AnimatedCount
                to={5}
                suffix="+"
                inView={inView}
                duration={0.5}
                delay={0.8}
              />
            </div>
            <div className={styles.label}>Years Experience</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.count}>
              <AnimatedCount to={4} suffix="+" inView={inView} duration={0.5} delay={0.8} />
            </div>
            <div className={styles.label}>Industries Served</div>
          </div>
        </motion.div>

        <motion.div
          className={styles.logos}
          initial={{ opacity: 0, x: 260 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={accaLogo}
            alt="ACCA"
            height={80}
            className={styles.logo}
          />
          <Image
            src={aatLogo}
            alt="AAT"
            height={80}
            className={styles.logo}
          />
        </motion.div>
      </div>
    </section>
  );
}
