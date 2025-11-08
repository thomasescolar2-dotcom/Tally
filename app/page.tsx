'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Building2, CheckCircle2, ShieldCheck, Sparkles, Users, Wallet } from 'lucide-react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Archivo_Black } from 'next/font/google';
import { cn } from '@/lib/utils';

const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const navLinks = [
  { href: '#produit', label: 'Produit' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#ressources', label: 'Ressources' },
];

const trustedLogos = ['Vente-privee', 'Le Slip Français', 'Decathlon', 'LVMH'];

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Conformité automatisée',
    description:
      'Une surveillance continue des réglementations textiles et ESPR avec alertes proactives avant chaque mise sur le marché.',
  },
  {
    icon: Wallet,
    title: 'Monétisation transparente',
    description:
      'Connectez vos flux de paiements pour facturer chaque passeport numérique et visualiser les revenus générés en temps réel.',
  },
  {
    icon: Sparkles,
    title: 'Expériences immersives',
    description:
      'Racontez l’histoire de vos produits grâce à des expériences interactives, personnalisées pour chaque marque et collection.',
  },
];

const metrics = [
  { value: '7 min', label: 'Pour créer un passeport complet' },
  { value: '98 %', label: 'Des audits validés du premier coup' },
  { value: '2,5x', label: 'De conversion sur les pages produit' },
];

const trustedLogos = ['Vente-privee', 'Le Slip Français', 'Decathlon', 'LVMH'];

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Conformité automatisée',
    description:
      'Une surveillance continue des réglementations textiles et ESPR avec alertes proactives avant chaque mise sur le marché.',
  },
  {
    icon: Wallet,
    title: 'Monétisation transparente',
    description:
      'Connectez vos flux de paiements pour facturer chaque passeport numérique et visualiser les revenus générés en temps réel.',
  },
  {
    icon: Sparkles,
    title: 'Expériences immersives',
    description:
      'Racontez l’histoire de vos produits grâce à des expériences interactives, personnalisées pour chaque marque et collection.',
  },
];

const metrics = [
  { value: '7 min', label: 'Pour créer un passeport complet' },
  { value: '98 %', label: 'Des audits validés du premier coup' },
  { value: '2,5x', label: 'De conversion sur les pages produit' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A1F] text-white">
      <Header />

      <main className="relative overflow-hidden">
        <div className="relative isolate overflow-hidden pb-24 pt-44">
          <div className="absolute inset-0 -z-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#6366F1_0deg,#EC4899_140deg,#F97316_220deg,#22D3EE_320deg,#6366F1_360deg)] opacity-80 blur-3xl" />
            <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-pink-500/40 blur-3xl" />
            <div className="pointer-events-none absolute right-1/4 bottom-0 h-[400px] w-[500px] translate-y-1/2 rounded-full bg-sky-500/40 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                <span>La nouvelle infrastructure du passeport produit</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                THOMAS EST LE MEILLEUR !
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl"
              >
                Rejoignez les maisons qui construisent des expériences circulaires : paiements fluides, traçabilité totale et conformité automatisée pour chaque produit mis sur le marché.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link href="/demo">
                  <Button size="lg" className="group rounded-full bg-white px-8 py-6 text-base font-semibold text-slate-950 transition-all hover:bg-white/90">
                    Démarrer
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-base text-white hover:bg-white/20"
                >
                  Mirador avec Google
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-14"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Ils orchestrent leurs passeports avec Tally</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-white/70">
                  {trustedLogos.map((logo) => (
                    <span key={logo} className="font-semibold uppercase tracking-widest">
                      {logo}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="relative mx-auto w-full max-w-md rounded-[2.5rem] border border-white/10 bg-black/70 p-6 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.7)] backdrop-blur">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>flux-03</span>
                  <span>Cycle de vie</span>
                </div>
                <div className="mt-6 rounded-3xl border border-white/5 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">Volume du jour</p>
                      <p className="mt-2 text-3xl font-semibold">126 840 €</p>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      +18,3 %
                    </div>
                  </div>
                  <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-indigo-500/50 via-sky-500/40 to-emerald-400/40" />
                  <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/70">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">Passeports</p>
                      <p className="mt-2 text-lg font-semibold">4 280</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">Clients</p>
                      <p className="mt-2 text-lg font-semibold">1 920</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">Réserves</p>
                      <p className="mt-2 text-lg font-semibold">742</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">Equipe</p>
                      <p className="text-sm text-white/80">Maison Horizon</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs">Live</div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">Flux</p>
                      <p className="text-sm text-white/80">Restauration des passeports</p>
                    </div>
                    <div className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Stable
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <section id="produit" className="relative border-t border-white/5 bg-black/40 py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1/2">
            <div className="mx-auto h-40 w-40 rounded-full bg-pink-500/30 blur-3xl" />
          </div>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Une plateforme complète, inspirée par Stripe</h2>
              <p className="mt-4 text-lg text-white/70">
                Centralisez vos flux de production, d’authentification et de paiement dans une seule infrastructure. Chaque API est documentée, testée et prête à être branchée sur votre ERP.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {featureCards.map((feature) => (
                <div key={feature.title} className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                  <feature.icon className="h-10 w-10 text-sky-300" />
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-4 text-sm text-white/70">{feature.description}</p>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/0 via-white/0 to-white/0 transition-opacity duration-300 group-hover:via-white/5 group-hover:to-white/10" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="relative py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),transparent_55%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">Solutions verticales</p>
                <h2 className="mt-6 text-4xl font-semibold text-white">
                  Conçu pour les marques, les industriels et les places de marché.
                </h2>
                <p className="mt-4 text-lg text-white/70">
                  Du prototypage à l’industrialisation, Tally aligne vos équipes produit, conformité et finance avec des workflows de bout en bout.
                </p>
                <div className="mt-10 grid gap-6">
                  {[Building2, Users, BarChart3].map((Icon, index) => (
                    <div key={index} className="flex gap-4 rounded-3xl border border-white/5 bg-white/10 p-6">
                      <Icon className="mt-1 h-8 w-8 text-pink-300" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {index === 0 && 'Collecte industrielle'}
                          {index === 1 && 'Expérience client augmentée'}
                          {index === 2 && 'Pilotage en temps réel'}
                        </h3>
                        <p className="mt-2 text-sm text-white/70">
                          {index === 0 && 'Numérisez vos ateliers et synchronisez les données matières pour chaque lot produit.'}
                          {index === 1 && 'Activez le storytelling, la fidélisation et la seconde main directement depuis le passeport.'}
                          {index === 2 && 'Suivez les volumes, la conformité et la rentabilité dans un cockpit unifié.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[3rem] border border-white/10 bg-black/60 p-10 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.8)] backdrop-blur">
                <h3 className="text-sm uppercase tracking-[0.35em] text-white/40">Metrics</h3>
                <div className="mt-8 grid gap-8 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-6 text-center">
                      <p className="text-3xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-2 text-xs text-white/60">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 space-y-4">
                  {[1, 2].map((index) => (
                    <div key={index} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-300" />
                      <p className="text-sm text-white/75">
                        {index === 1
                          ? 'Intégration API en moins de deux semaines grâce aux SDK et aux playbooks prêts à l’emploi.'
                          : 'Support premium 24/7 avec des spécialistes conformité et data dédiés à votre déploiement.'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tarifs" className="relative border-t border-white/5 bg-black/40 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">Tarification</p>
                <h2 className="mt-4 text-4xl font-semibold text-white">Des plans adaptés à votre croissance.</h2>
                <p className="mt-3 max-w-2xl text-lg text-white/70">
                  Commencez gratuitement, puis passez à une offre personnalisée lorsque vos volumes prennent de l’ampleur. Chaque plan comprend l’authentification avancée et l’accès aux API temps réel.
                </p>
              </div>
              <Button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">
                Comparer en détail
              </Button>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[0, 1, 2].map((tier) => (
                <div key={tier} className="flex flex-col rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      {tier === 0 && 'Essentiel'}
                      {tier === 1 && 'Croissance'}
                      {tier === 2 && 'Entreprise'}
                    </h3>
                    {tier === 1 && (
                      <span className="rounded-full border border-pink-400/40 bg-pink-500/20 px-3 py-1 text-xs text-pink-200">
                        Populaire
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-white/70">
                    {tier === 0 && 'Tout ce qu’il faut pour créer, publier et suivre vos premiers passeports produit.'}
                    {tier === 1 && 'Automatisez vos workflows et déployez l’infrastructure passeport à l’échelle internationale.'}
                    {tier === 2 && 'Programmes sur mesure, support dédié et gouvernance renforcée pour les groupes mondiaux.'}
                  </p>
                  <div className="mt-8 text-4xl font-semibold text-white">
                    {tier === 0 && '0 €'}
                    {tier === 1 && '349 €'}
                    {tier === 2 && 'Sur mesure'}
                  </div>
                  <ul className="mt-8 space-y-4 text-sm text-white/70">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      API temps réel et webhooks
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      Tableaux de bord interactifs
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      {tier === 2 ? 'Support dédié 24/7' : 'Support prioritaire'}
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="mt-10 rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20"
                  >
                    {tier === 2 ? 'Contacter notre équipe' : 'Commencer'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ressources" className="relative py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">Ressources</p>
                <h2 className="text-4xl font-semibold text-white">Un accompagnement complet pour votre équipe.</h2>
                <p className="text-lg text-white/70">
                  Des guides de conformité, des SDK maintenus par nos équipes et un support live pour sécuriser chaque étape de votre projet passeport.
                </p>
                <div className="grid gap-4 text-sm text-white/70">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 text-indigo-300" />
                    <span>Playbooks de lancement prêts à l’emploi pour vos marchés européens.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 text-indigo-300" />
                    <span>Veille réglementaire continue et synthèses sectorielles envoyées chaque semaine.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 text-indigo-300" />
                    <span>Communauté Slack privée avec plus de 400 experts circularité et data.</span>
                  </div>
                </div>
              </div>
              <div className="rounded-[3rem] border border-white/10 bg-black/60 p-10 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.8)] backdrop-blur">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/40">Newsletter</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Recevez le briefing ESPR</h3>
                  <p className="mt-3 text-sm text-white/70">
                    Les dernières actualités réglementaires, des benchmarks sectoriels et des bonnes pratiques directement dans votre boîte mail.
                  </p>
                  <form className="mt-6 space-y-4">
                    <input
                      type="email"
                      required
                      placeholder="prenom@entreprise.com"
                      className="w-full rounded-full border border-white/20 bg-black/60 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                    />
                    <Button type="submit" className="w-full rounded-full bg-white py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">
                      S’inscrire
                    </Button>
                  </form>
                </div>
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                  <p className="font-semibold text-white">Webinaire en direct</p>
                  <p className="mt-2">Audit ESPR &amp; Passeports produits : les retours de trois marques françaises.</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">Jeudi 21 mars • 11h00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/60 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Tally. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="#">Conditions</a>
            <a href="#">Confidentialité</a>
            <a href="#">Sécurité</a>
            <a href="/demo">Démo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
