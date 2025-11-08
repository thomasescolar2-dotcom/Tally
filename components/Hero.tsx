'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ctaItem = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4,
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1F]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-40%] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(42,111,255,0.45),_rgba(10,10,31,0))]" />
        <div className="absolute left-1/2 top-10 h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(111,255,232,0.28),_rgba(10,10,31,0))] blur-3xl" />
        <div className="absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_50%,#2A6FFF33,#61F4C544,#2A6FFF15)] animate-gradient-slow opacity-70" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-24 pt-40 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textContainer}
          className="max-w-xl lg:max-w-2xl"
        >
          <motion.div
            variants={textItem}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
            <span>La nouvelle infrastructure du passeport produit</span>
          </motion.div>

          <motion.h1
            variants={textItem}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Le passeport numérique produit, conforme à l’Europe.
          </motion.h1>

          <motion.p variants={textItem} className="mt-6 text-lg text-white/75 sm:text-xl">
            Créez, hébergez et partagez vos Digital Product Passports (DPP) en quelques minutes, sans expertise technique.
          </motion.p>

          <motion.div
            variants={ctaItem}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-full border-0 bg-gradient-to-r from-[#2A6FFF] via-[#4C8DFF] to-[#61F4C5] px-8 py-6 text-base font-semibold text-white shadow-[0_20px_45px_rgba(42,111,255,0.35)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_20px_55px_rgba(42,111,255,0.45)]"
            >
              <Link href="/demo">Démarrer</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border border-white/30 bg-transparent px-8 py-6 text-base text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              <Link href="#produit">Découvrir la vision</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          whileHover={{ scale: 1.015 }}
          className="relative mx-auto w-full max-w-xl rounded-[32px] border border-white/12 bg-white/5 p-8 shadow-[0_30px_90px_-25px_rgba(15,23,42,0.65)] backdrop-blur-xl animate-soft-pulse"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10" aria-hidden="true" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>Dashboard • flux-08</span>
              <span>Actualisé il y a 2 min</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/50 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">Volume du jour</p>
                  <p className="mt-3 text-3xl font-semibold text-white">126 840 €</p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">
                  +18,3 %
                </span>
              </div>
              <div className="mt-6 h-36 rounded-2xl bg-gradient-to-br from-[#2A6FFF]/30 via-[#4B9EE8]/25 to-[#61F4C5]/30" />
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-white/80 sm:grid-cols-3">
                {[
                  { label: 'Passeports', value: '4 280' },
                  { label: 'Clients', value: '1 920' },
                  { label: 'Réserves', value: '742' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
