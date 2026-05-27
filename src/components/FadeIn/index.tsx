"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const offsets = {
  up: { y: 62, x: 0 },
  left: { y: 0, x: -62 },
  right: { y: 0, x: 62 },
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  const { x, y } = offsets[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
