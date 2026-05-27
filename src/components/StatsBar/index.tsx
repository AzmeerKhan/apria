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
    <section ref={ref} className="bg-navy overflow-hidden py-8 md:py-0">
      {/* Desktop layout */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-[1fr_5rem_1fr] px-6">
        {/* Left — animated counters */}
        <motion.div
          className="flex gap-12 lg:gap-22 justify-center items-center py-8 pr-12 lg:pr-22"
          initial={{ opacity: 0, x: -160 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-extrabold text-white">
              <AnimatedCount
                to={5}
                suffix="+"
                inView={inView}
                duration={0.5}
              />
            </div>
            <div className="text-xs lg:text-sm text-blue-200 mt-2 font-medium uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-extrabold text-white">
              <AnimatedCount to={100} suffix="+" inView={inView} />
            </div>
            <div className="text-xs lg:text-sm text-blue-200 mt-2 font-medium uppercase tracking-wide">
              Clients Served
            </div>
          </div>
        </motion.div>

        {/* Divider — forward slash */}
        <motion.svg
          className="w-full h-full"
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

        {/* Right — logos */}
        <motion.div
          className="flex items-center justify-center gap-12 lg:gap-22 py-8 pl-12 lg:pl-22"
          initial={{ opacity: 0, x: 160 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={accaLogo}
            alt="ACCA"
            height={80}
            className="object-contain opacity-90 lg:h-[100px]"
          />
          <Image
            src={aatLogo}
            alt="AAT"
            height={80}
            className="object-contain opacity-90 lg:h-[100px]"
          />
        </motion.div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-xl mx-auto px-4 space-y-6">
        {/* Stats */}
        <motion.div
          className="flex gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              <AnimatedCount
                to={5}
                suffix="+"
                inView={inView}
                duration={0.5}
              />
            </div>
            <div className="text-xs text-blue-200 mt-1 font-medium uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              <AnimatedCount to={100} suffix="+" inView={inView} />
            </div>
            <div className="text-xs text-blue-200 mt-1 font-medium uppercase tracking-wide">
              Clients Served
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-white/25 w-full max-w-[200px] mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        {/* Logos */}
        <motion.div
          className="flex items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src={accaLogo}
            alt="ACCA"
            height={60}
            className="object-contain opacity-90 w-auto h-[60px]"
          />
          <Image
            src={aatLogo}
            alt="AAT"
            height={60}
            className="object-contain opacity-90 w-auto h-[60px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
