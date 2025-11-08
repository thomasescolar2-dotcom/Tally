"use client";

import { motion } from "framer-motion";

const logos = [
  "AstraNova",
  "HelioLabs",
  "Nordexia",
  "Lumena",
  "Vektor",
  "Origami Systems"
];

export function SocialProofSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <p className="font-display text-xl text-mist">
          Déjà adoptée par les marques européennes les plus exigeantes.
        </p>
        <motion.div
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{ x: [0, -240] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                className="group relative rounded-2xl border border-white/10 bg-night/70 px-8 py-4 text-lg font-medium text-mist/80 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative">
                  {logo}
                  <span className="absolute inset-0 rounded-2xl bg-accent/20 opacity-0 blur-lg transition group-hover:opacity-100" />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
