'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { QrCode, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#1a1f35] to-[#0B1120]">
      <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-[#2563EB]" />
              <span className="text-xl font-semibold text-white">Tally</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#why" className="text-gray-300 hover:text-white transition-colors">Pourquoi</a>
              <a href="#how" className="text-gray-300 hover:text-white transition-colors">Comment</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Tarifs</a>
            </div>
            <Link href="/demo">
              <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
                Essayer
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A7F3D0]/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
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
              <span className="w-2 h-2 bg-[#A7F3D0] rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Conforme ESPR 2024</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Le passeport numérique<br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#A7F3D0] bg-clip-text text-transparent">
                produit, conforme à l'Europe.
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Créez, hébergez et diffusez vos DPP conformes à l'ESPR — en 7 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-6 text-lg rounded-2xl shadow-xl shadow-[#2563EB]/20 transition-all hover:shadow-2xl hover:shadow-[#2563EB]/30">
                  Essayer la démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-2xl">
                Découvrir la vision
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/30 to-[#A7F3D0]/30 blur-3xl rounded-3xl" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl"
              >
                <QrCode className="h-48 w-48 mx-auto text-[#2563EB]" strokeWidth={1} />
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#A7F3D0] rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
              </motion.div>
            </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pourquoi Tally ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              La solution la plus simple pour se conformer aux exigences européennes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapide",
                description: "Créez un DPP complet en moins de 7 minutes. Interface intuitive, zéro formation nécessaire.",
                delay: 0.2,
              },
              {
                icon: Shield,
                title: "Conforme",
                description: "100% conforme ESPR. Hébergement sécurisé, traçabilité complète, archivage automatique.",
                delay: 0.4,
              },
              {
                icon: CheckCircle,
                title: "Simple",
                description: "Une plateforme, toutes vos données. Synchronisation avec vos outils existants.",
                delay: 0.6,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#A7F3D0] rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Comment ça marche
            </h2>
            <p className="text-xl text-gray-400">
              Trois étapes pour votre conformité
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] via-[#A7F3D0] to-[#2563EB] hidden lg:block" />

            {[
              { step: "01", title: "Créez votre DPP", description: "Saisissez les informations produit via notre interface guidée" },
              { step: "02", title: "Générez le QR Code", description: "Obtenez instantanément un QR code unique et conforme" },
              { step: "03", title: "Diffusez", description: "Imprimez, intégrez ou partagez votre passeport numérique" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="text-5xl font-bold text-[#2563EB]/20 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-[#A7F3D0] rounded-full -translate-x-1/2 ring-4 ring-[#0B1120]" />
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Tarifs transparents
            </h2>
            <p className="text-xl text-gray-400">
              Choisissez le plan adapté à votre volume
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "49€",
                period: "/mois",
                features: ["100 DPP/mois", "QR codes illimités", "Support email", "Hébergement inclus"],
                popular: false,
              },
              {
                name: "Business",
                price: "149€",
                period: "/mois",
                features: ["500 DPP/mois", "API REST complète", "Support prioritaire", "Multi-utilisateurs"],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Sur mesure",
                period: "",
                features: ["Volume illimité", "Intégration ERP", "Account manager", "SLA garanti"],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all ${
                  plan.popular ? 'border-[#2563EB] ring-2 ring-[#2563EB]/50 scale-105' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-[#A7F3D0] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-xl py-6 ${
                    plan.popular
                      ? 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Commencer
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <QrCode className="h-8 w-8 text-[#2563EB]" />
              <span className="text-xl font-semibold text-white">Tally</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Produit</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Conformité</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
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
