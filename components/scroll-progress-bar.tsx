"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 bg-gradient-to-r from-accent via-accentBlue to-accent"
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
    />
  );
}
