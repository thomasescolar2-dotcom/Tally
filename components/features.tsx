"use client";

import { motion } from "framer-motion";
import { Cog, Link2, Lock, QrCode } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Création automatique de DPP conformes ESPR.",
    description:
      "Collecte intelligente des données matériaux, conformité et cycle de vie pour générer un passeport numérique complet.",
    accent: "processus"
  },
  {
    icon: QrCode,
    title: "QR dynamiques + identifiants uniques GS1.",
    description:
      "Attribuez un identifiant souverain et contrôlez ce qui apparaît dans chaque passeport pour chaque produit.",
    accent: "identité"
  },
  {
    icon: Link2,
    title: "Intégration e-commerce (Shopify, WooCommerce, etc.).",
    description:
      "Connectez Tally à vos plateformes pour synchroniser inventaires, nomenclatures et retours en temps réel.",
    accent: "commerce"
  },
  {
    icon: Lock,
    title: "Pages publiques/privées conformes AI Act.",
    description:
      "Contrôlez la diffusion des informations sensibles grâce à des espaces dédiés pour autorités, partenaires ou clients.",
    accent: "sécurité"
  }
];

export function FeaturesSection() {
  return (
    <section id="modules" className="section-gradient relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="font-numeric text-xs uppercase tracking-[0.4em] text-accent/70">
            Modules de confiance
          </p>
          <h2 className="mt-4 font-display text-3xl text-mist md:text-4xl">
            Tout pour vos passeports produits, réuni au même endroit.
          </h2>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 }
            }
          }}
        >
          {features.map(({ icon: Icon, title, description, accent }, index) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-night/70 p-8 transition"
              variants={{
                hidden: { opacity: 0, scale: 0.98, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" }
                }
              }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accentBlue/0 opacity-0 transition duration-500 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.span
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-accentBlue/20 text-accent"
                    whileHover={{ rotate: 6, scale: 1.05 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.span>
                  <div>
                    <h3 className="font-display text-xl text-mist">{title}</h3>
                    <p className="mt-3 text-sm text-mist/65">{description}</p>
                  </div>
                </div>
                <motion.div
                  className="hidden rounded-full border border-accent/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-accent/80 md:block"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {accent}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
