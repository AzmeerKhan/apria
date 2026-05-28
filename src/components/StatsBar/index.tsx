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
}: {
  to: number;
  suffix?: string;
  inView: boolean;
  duration?: number;
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
      ease: [0.2, 0, 0.8, 1],
      onComplete: () => count.set(to),
    });
    return controls.stop;
  }, [inView, count, to, duration]);

  return <motion.span>{display}</motion.span>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.desktop}>
        <motion.div
          className={styles.statsCol}
          initial={{ opacity: 0, x: -160 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.statItem}>
            <div className={styles.statCount}>
              <AnimatedCount to={5} suffix="+" inView={inView} duration={0.5} />
            </div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statCount}>
              <AnimatedCount to={100} suffix="+" inView={inView} />
            </div>
            <div className={styles.statLabel}>Clients Served</div>
          </div>
        </motion.div>

        <motion.svg
          className={styles.dividerSvg}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <line
            x1="100%"
            y1="-10%"
            x2="0%"
            y2="110%"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="7"
          />
        </motion.svg>

        <motion.div
          className={styles.logosCol}
          initial={{ opacity: 0, x: 160 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Image src={accaLogo} alt="ACCA" height={80} className={styles.logoImg} />
          <Image src={aatLogo} alt="AAT" height={80} className={styles.logoImg} />
        </motion.div>
      </div>

      <div className={styles.mobile}>
        <motion.div
          className={styles.statsMobile}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.statItem}>
            <div className={styles.statCountMobile}>
              <AnimatedCount to={5} suffix="+" inView={inView} duration={0.5} />
            </div>
            <div className={styles.statLabelMobile}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statCountMobile}>
              <AnimatedCount to={100} suffix="+" inView={inView} />
            </div>
            <div className={styles.statLabelMobile}>Clients Served</div>
          </div>
        </motion.div>

        <motion.div
          className={styles.dividerMobile}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        <motion.div
          className={styles.logosMobile}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Image src={accaLogo} alt="ACCA" height={60} className={styles.logoImgMobile} />
          <Image src={aatLogo} alt="AAT" height={60} className={styles.logoImgMobile} />
        </motion.div>
      </div>
    </section>
  );
}
