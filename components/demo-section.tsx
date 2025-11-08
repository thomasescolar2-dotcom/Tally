"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function DemoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.4]);

  return (
    <section id="demo" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      <div ref={ref} className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="font-numeric text-xs uppercase tracking-[0.4em] text-accent/70">Démo interactive</p>
          <h2 className="mt-4 font-display text-3xl text-mist md:text-4xl">
            Preuve visuelle. Passeport numérique, tableau de bord et QR dynamiques en mouvement.
          </h2>
          <p className="mt-6 text-base text-mist/70 md:text-lg">
            Naviguez dans l&apos;interface comme vos équipes : scan d&apos;un QR, aperçu du passeport produit,
            gestion des exigences réglementaires et partage instantané.
          </p>
          <motion.a
            href="#contact"
            className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full border border-accent/50 px-6 py-3 font-numeric text-sm text-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
          >
            Voir la démo complète
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
              ▶
            </span>
            <span className="pointer-events-none absolute inset-0 animate-pulse rounded-full bg-accent/10 opacity-0 transition duration-500 group-hover:opacity-100" />
          </motion.a>
        </motion.div>
        <motion.div
          className="relative flex flex-1 justify-center"
          style={{ x, opacity }}
        >
          <motion.div
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-accent/20 bg-night/80 shadow-2xl"
            initial={{ filter: "blur(10px)", y: 60 }}
            whileInView={{ filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-x-10 top-6 h-12 rounded-full bg-gradient-to-r from-accent/30 to-accentBlue/20 blur-xl" />
            <Image
              src="/demo-dashboard.svg"
              alt="Interface Tally"
              width={960}
              height={600}
              className="h-auto w-full object-cover"
              priority={false}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night via-night/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent/60">Passeport produit</p>
                  <h3 className="font-display text-lg text-mist">Capteur IoT Tally S1</h3>
                </div>
                <div className="rounded-full border border-accent/40 px-4 py-1 text-xs text-accent/80">
                  Mise à jour • Temps réel
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
