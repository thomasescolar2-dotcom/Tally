'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QrCode,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  BadgeCheck,
  Sparkles,
  Building2,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Archivo_Black } from 'next/font/google';
import { cn } from '@/lib/utils';

const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const navLinks = [
  { href: '#vision', label: 'Vision' },
  { href: '#why', label: 'Pourquoi' },
  { href: '#how', label: 'Comment' },
  { href: '#pricing', label: 'Tarifs' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-[#ec4899]" />
              <span className="text-xl font-semibold text-white">Tally</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/demo"
                className={cn(
                  'wave-button hidden md:inline-flex items-center justify-center rounded-full px-6 py-2 text-sm shadow-lg shadow-pink-500/20',
                  archivoBlack.className,
                )}
              >
                <span>ESSAYER</span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
                aria-label="Ouvrir le menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="ml-auto h-full w-64 bg-black/90 border-l border-white/10 p-6 space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-white/10"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <Link
                href="/demo"
                onClick={closeMenu}
                className={cn(
                  'wave-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm shadow-lg shadow-pink-500/20',
                  archivoBlack.className,
                )}
              >
                <span>ESSAYER</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 0.95, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Conforme ESPR 2024</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              THOMAS EST LE MEILLEUR !
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Créez, hébergez et diffusez vos Digital Product Passports en 7 minutes, avec une traçabilité complète et une conformité vérifiée en continu.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-2xl shadow-xl shadow-pink-500/20 transition-all hover:shadow-2xl hover:shadow-pink-500/30">
                  Essayer la démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-2xl"
              >
                <Link href="#vision">Découvrir la vision</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-gray-500/20 blur-3xl rounded-3xl" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl"
              >
                <QrCode className="h-48 w-48 mx-auto text-pink-400" strokeWidth={1} />
                <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-300 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm text-gray-300">
              <Sparkles className="h-4 w-4 text-pink-400" />
              <span>La vision Tally</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              La conformité produit comme levier de confiance client
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nous rapprochons les fabricants, les distributeurs et les consommateurs autour d'une information produit vivante. Chaque passeport numérique Tally raconte l'histoire du produit, de ses composants et de ses engagements environnementaux.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <BadgeCheck className="h-8 w-8 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Confiance certifiée</h3>
                <p className="text-gray-400 text-sm">
                  Contrôles automatiques ESPR, alertes réglementaires et audit trail prêt pour vos partenaires.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <Building2 className="h-8 w-8 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Échelle industrielle</h3>
                <p className="text-gray-400 text-sm">
                  API, connecteurs ERP et gestion multi-sites pour publier des milliers de DPP sans friction.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-gray-500 flex items-center justify-center">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-pink-200">Objectif</p>
                <h3 className="text-2xl font-semibold">Transparence totale</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tally centralise la donnée produit, calcule automatiquement les indicateurs d'impact et met vos fournisseurs à contribution grâce à des workflows collaboratifs. Vos clients scannent le QR code et accèdent à une expérience claire, multilingue et accessible.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-300 mt-1" />
                <span>Versioning automatique et archivage souverain en Europe.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-300 mt-1" />
                <span>Bibliothèque de modèles sectoriels pour déployer vos DPP en quelques clics.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-300 mt-1" />
                <span>Lecture offline et QR dynamiques pour gérer les révisions sans re-impression.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Pourquoi Tally ?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              La solution la plus complète pour prouver la conformité et les engagements de vos produits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Déploiement éclair',
                description:
                  'Assistant intelligent pour guider chaque saisie, import CSV et connecteurs ERP pour industrialiser la génération de DPP.',
                delay: 0.2,
              },
              {
                icon: Shield,
                title: 'Conformité prouvée',
                description:
                  'Contrôles réglementaires continus, export audit-ready et vérification automatique des données critiques.',
                delay: 0.4,
              },
              {
                icon: BadgeCheck,
                title: 'Crédibilité renforcée',
                description:
                  'Diffusion multicanale, analytics de scans et pages publiques personnalisées pour vos clients et partenaires.',
                delay: 0.6,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-gray-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200 mb-4">Ils nous font confiance</p>
            <h2 className="text-4xl font-bold text-white">Des industriels européens déjà certifiés</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Avec Tally, nous avons réduit de 60% le temps de production d’un passeport numérique et gagné en sérénité lors des audits.',
                author: 'Claire D., Directrice conformité - HexaTextile',
              },
              {
                quote:
                  'Les QR codes dynamiques et l’API nous permettent de mettre à jour les fiches produits sans arrêter la production.',
                author: 'Marc L., COO - VoltBatteries',
              },
              {
                quote:
                  'Nos distributeurs européens accèdent à une information claire et multilingue, ce qui fluidifie nos ventes.',
                author: 'Sarah B., Head of Product - NovaHome',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden"
              >
                <Quote className="h-10 w-10 text-pink-500/60 mb-6" />
                <p className="text-lg text-gray-200 leading-relaxed mb-6">{testimonial.quote}</p>
                <p className="text-sm text-gray-400">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Comment ça marche</h2>
            <p className="text-xl text-gray-300">Trois étapes pour votre conformité</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-gray-500 to-pink-500 hidden lg:block" />

            {[
              { step: '01', title: 'Créez votre DPP', description: 'Saisissez les informations produit via notre interface guidée' },
              { step: '02', title: 'Générez le QR Code', description: 'Obtenez instantanément un QR code unique et conforme' },
              { step: '03', title: 'Diffusez', description: 'Imprimez, intégrez ou partagez votre passeport numérique' },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="text-5xl font-bold text-pink-500/30 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-pink-400 rounded-full -translate-x-1/2 ring-4 ring-black/70" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tarifs transparents</h2>
            <p className="text-xl text-gray-300">Choisissez le plan adapté à votre volume</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '49€',
                period: '/mois',
                features: ['100 DPP/mois', 'QR codes illimités', 'Support email', 'Hébergement inclus'],
                popular: false,
                cta: 'Commencer',
                link: '/demo',
              },
              {
                name: 'Business',
                price: '149€',
                period: '/mois',
                features: ['500 DPP/mois', 'API REST complète', 'Support prioritaire', 'Multi-utilisateurs'],
                popular: true,
                cta: 'Essayer maintenant',
                link: '/demo',
              },
              {
                name: 'Enterprise',
                price: 'Sur mesure',
                period: '',
                features: ['Volume illimité', 'Intégration ERP', 'Account manager', 'SLA garanti'],
                popular: false,
                cta: "Contacter l'équipe",
                link: 'mailto:contact@tally.com?subject=Demande%20Enterprise%20Tally',
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all ${
                  plan.popular ? 'border-pink-500 ring-2 ring-pink-500/50 scale-105' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-emerald-300 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={plan.link} className="block">
                  <Button
                    className={`w-full rounded-xl py-6 ${
                      plan.popular
                        ? 'bg-pink-500 hover:bg-pink-600 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <QrCode className="h-8 w-8 text-pink-500" />
              <span className="text-xl font-semibold text-white">Tally</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <a href="#vision" className="hover:text-white transition-colors">
                Vision
              </a>
              <a href="#why" className="hover:text-white transition-colors">
                Produit
              </a>
              <a href="#pricing" className="hover:text-white transition-colors">
                Tarifs
              </a>
              <a href="mailto:contact@tally.com" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2024 Tally. Conforme ESPR. Made in Europe.
          </div>
        </div>
      </footer>
    </div>
  );
}
