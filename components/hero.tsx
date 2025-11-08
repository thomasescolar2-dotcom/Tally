"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "@/components/hero-background";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-between overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-32 pb-16 text-center md:pt-40">
        <motion.div
          className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-numeric text-xs uppercase tracking-[0.35em] text-mist/70"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Automatiser · Centraliser · Conformer
        </motion.div>
        <motion.h1
          className="font-display text-4xl leading-tight tracking-tight text-mist sm:text-5xl md:text-6xl"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          Le futur de la traçabilité commence ici.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-mist/70 md:text-xl"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 1 }}
        >
          Tally automatise la conformité produit et crée vos passeports numériques en un clic.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <motion.a
            href="#modules"
            className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-accentBlue px-8 py-3 font-numeric text-base text-night shadow-glow"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="relative">
              Découvrir Tally
              <span className="absolute -inset-1 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:blur-lg"
                style={{ background: "linear-gradient(135deg, rgba(0,225,164,0.7), rgba(0,183,255,0.7))" }}
              />
            </span>
            <motion.span
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-night/70"
              animate={{ rotate: [0, 6, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 1.4 }}
            >
              <span className="text-xl">↗</span>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className="diagonal-transition absolute inset-x-0 bottom-0 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />
    </section>
  );
}
