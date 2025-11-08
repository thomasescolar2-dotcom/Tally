"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function ProblemSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-night py-24" id="story">
      <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="glass-panel relative flex-1 rounded-3xl p-8 md:p-10"
        >
          <motion.h2
            variants={item}
            className="font-display text-2xl text-mist md:text-3xl"
          >
            La conformité européenne devient un labyrinthe.
          </motion.h2>
          <motion.p variants={item} className="mt-6 text-base text-mist/70 md:text-lg">
            Multiplication des règlements ESPR, AI Act, directives sectorielles… Les équipes qualité
            et produit s&apos;épuisent à suivre des documents fragmentés, des tableurs obsolètes et des
            audits chronophages.
          </motion.p>
          <motion.p variants={item} className="mt-4 text-base text-mist/60">
            Résultat : des lancements retardés, des risques de sanctions, et une traçabilité qui se
            perd dans le brouillard administratif.
          </motion.p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5 p-8 md:p-10"
        >
          <motion.h3 variants={item} className="font-display text-2xl text-accent md:text-3xl">
            Tally en fait un tableau de bord.
          </motion.h3>
          <motion.p variants={item} className="mt-6 text-base text-mist/75 md:text-lg">
            Centralisez vos preuves de conformité, générez des passeports numériques conformes ESPR
            et partagez des QR dynamiques en quelques secondes.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 grid gap-6 rounded-2xl border border-accent/20 bg-night/60 p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-mist/50">Flux de données</p>
              <span className="font-numeric text-xs text-accent/70">Synced · Secure</span>
            </div>
            <motion.div
              className="relative flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-black/30"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <motion.div
                className="relative h-28 w-28 rounded-3xl border border-accent/40 p-4"
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-4 rounded-2xl border border-accent/30"
                  animate={{ scale: [1, 0.95, 1], rotate: [0, 12, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 grid place-items-center text-accent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "sine.inOut" }}
                >
                  <span className="font-numeric text-2xl">QR</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <p className="text-sm text-mist/60">
              Les données s&apos;agrègent automatiquement dans un QR code dynamique, prêt à être scanné
              par vos partenaires, autorités ou consommateurs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
