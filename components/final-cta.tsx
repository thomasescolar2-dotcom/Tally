"use client";

import { motion } from "framer-motion";

export function FinalCTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,225,164,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(0,183,255,0.25),transparent_45%)]" />
      <div className="mx-auto max-w-4xl rounded-[40px] border border-white/15 bg-night/80 p-12 text-center shadow-2xl backdrop-blur-xl">
        <motion.p
          className="font-numeric text-xs uppercase tracking-[0.4em] text-accent/70"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Prêt pour le futur ?
        </motion.p>
        <motion.h2
          className="mt-6 font-display text-3xl text-mist md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tally, votre conformité produit en un clic.
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-mist/75"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          Préparez-vous à la réglementation européenne 2026-2030 et créez vos passeports numériques dès aujourd&apos;hui.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:contact@tally.eu"
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-accentBlue px-8 py-3 font-numeric text-base text-night shadow-glow"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Créer mon compte
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-night/70 text-lg">↗</span>
          </motion.a>
          <motion.a
            href="mailto:contact@tally.eu?subject=Planifier%20une%20d%C3%A9mo"
            className="group inline-flex items-center gap-3 rounded-full border border-accent/60 px-8 py-3 font-numeric text-base text-accent"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(0,225,164,0.08)" }}
            whileTap={{ scale: 0.96 }}
          >
            Planifier une démo
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-base text-accent">
              ➜
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
