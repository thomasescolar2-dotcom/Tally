"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#hero", label: "Accueil" },
  { href: "#modules", label: "Fonctionnalités" },
  { href: "#demo", label: "Démo" },
  { href: "#contact", label: "Contact" }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 px-6 py-4 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-night/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="#hero" className="group flex items-center gap-3 text-sm uppercase tracking-[0.4em]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 font-display text-lg"
          >
            <span className="relative font-semibold">T</span>
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/60 to-accentBlue/60 opacity-0 blur-sm"
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.span>
          <span className="font-display text-lg tracking-tight text-mist">
            Tally
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-mist/70 transition hover:text-mist"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent to-accentBlue"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                />
              </motion.a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
