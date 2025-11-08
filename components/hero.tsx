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
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-night"
    >
      <HeroBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28 pb-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex max-w-xl flex-col text-left">
          <motion.div
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-numeric text-[0.7rem] uppercase tracking-[0.35em] text-mist/80 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Tally · Passeports numériques intelligents
          </motion.div>
          <motion.h1
            className="font-display text-4xl leading-tight tracking-tight text-mist sm:text-5xl md:text-6xl"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            Une conformité produit
            <span className="block bg-gradient-to-r from-[#ff8c68] via-[#ff5db1] to-[#6b5bff] bg-clip-text text-transparent">
              pensée pour la croissance.
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-mist/80 md:text-xl"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 1 }}
          >
            Rejoignez les équipes européennes qui s’appuient sur Tally pour automatiser la conformité ESPR, générer des passeports numériques et offrir une traçabilité souveraine en quelques minutes.
          </motion.p>
          <motion.div
            className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            <div className="flex w-full flex-col gap-2 rounded-full bg-white/5 p-2 backdrop-blur">
              <div className="flex items-center gap-3 rounded-full bg-night/80 px-4 py-2 sm:bg-transparent sm:px-0 sm:py-0">
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="w-full rounded-full border border-transparent bg-night/60 px-5 py-3 text-base text-mist placeholder:text-mist/40 focus:border-mist/30 focus:outline-none sm:bg-transparent"
                />
                <motion.a
                  href="#modules"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent via-[#00c3ff] to-accentBlue px-6 py-3 font-numeric text-base text-night shadow-[0_12px_30px_-12px_rgba(0,199,255,0.65)]"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Démarrer
                </motion.a>
              </div>
              <p className="px-4 text-sm text-mist/50 sm:px-0">
                Essayez Tally gratuitement · Aucun moyen de paiement requis
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-14 w-full max-w-md self-center rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_40px_120px_-30px_rgba(0,199,255,0.45)] lg:mt-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm text-mist/70">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-night/60 text-mist">
                ∞
              </span>
              Passeport Le Ciel
            </span>
            <span className="rounded-full bg-night/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-mist/60">
              En direct
            </span>
          </div>
          <div className="space-y-5 rounded-3xl bg-night/70 p-5">
            <div className="rounded-2xl bg-gradient-to-br from-white/25 via-white/10 to-white/5 p-5 text-night shadow-inner">
              <p className="text-sm font-medium text-night/80">Statut de conformité</p>
              <p className="mt-2 text-2xl font-semibold text-night">100 % validé</p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-night/60">Mise à jour · 12:45</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-mist/80">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-mist/40">Volume QR</p>
                <p className="mt-2 text-xl font-semibold text-mist">36 218</p>
                <p className="mt-1 text-xs text-mist/50">+128 % vs. 30j</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-mist/40">Produits actifs</p>
                <p className="mt-2 text-xl font-semibold text-mist">5 942</p>
                <p className="mt-1 text-xs text-mist/50">+312 nouveaux</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-mist/80">
              <p className="text-xs uppercase tracking-wide text-mist/40">Dernière action</p>
              <p className="mt-2 text-mist">Passeport textile ESPR exporté vers Shopify</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="diagonal-transition pointer-events-none absolute inset-x-0 bottom-0 h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />
    </section>
  );
}
