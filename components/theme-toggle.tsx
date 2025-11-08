"use client";

import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-white/10" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-night/70 text-mist shadow-glow"
      whileTap={{ scale: 0.9, rotate: 5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-accent"
      >
        {isDark ? <MoonStar size={20} /> : <Sun size={20} />}
      </motion.div>
      <motion.span
        layoutId="theme-glow"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accentBlue/20"
        animate={{ opacity: isDark ? 0.35 : 0.25 }}
      />
    </motion.button>
  );
}
