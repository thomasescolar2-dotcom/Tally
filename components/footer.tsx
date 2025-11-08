"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#modules", label: "Fonctionnalités" },
  { href: "#demo", label: "Démo" },
  { href: "mailto:contact@tally.eu", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="relative bg-black py-12">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-mist/60 md:flex-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 text-mist">
          <span className="font-display text-lg">Tally</span>
          <span className="h-4 w-px bg-white/20" />
          <p className="text-xs uppercase tracking-[0.3em] text-accent/60">Comply &amp; Flow</p>
        </div>
        <div className="flex items-center gap-6 text-mist/70">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-mist">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 text-xs text-mist/50 md:items-end">
          <a href="mailto:contact@tally.eu" className="text-mist/70 transition hover:text-accent">
            contact@tally.eu
          </a>
          <p>© {new Date().getFullYear()} Tally. Tous droits réservés.</p>
        </div>
      </motion.div>
    </footer>
  );
}
