'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QrCode,
  FileText,
  Users,
  Settings,
  Plus,
  Search,
  Bell,
  LogOut,
  X,
  Upload,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Demo() {
  const [activeTab, setActiveTab] = useState('passeports');
  const [showModal, setShowModal] = useState(false);

  const passports = [
    { id: 1, product: 'T-shirt Bio', sector: 'Textile', status: 'Publié', color: 'green' },
    { id: 2, product: 'Batterie LFP', sector: 'Batteries', status: 'En cours', color: 'orange' },
    { id: 3, product: 'Smartphone Eco', sector: 'Électronique', status: 'Publié', color: 'green' },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] flex">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-64 bg-[#0f1629] border-r border-white/5 flex flex-col"
      >
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center space-x-2">
            <QrCode className="h-8 w-8 text-[#2563EB]" />
            <span className="text-xl font-semibold text-white">Tally</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'passeports', icon: FileText, label: 'Passeports' },
            { id: 'qrcodes', icon: QrCode, label: 'QR Codes' },
            { id: 'fournisseurs', icon: Users, label: 'Fournisseurs' },
            { id: 'parametres', icon: Settings, label: 'Paramètres' },
          ].map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-[#2563EB] text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </motion.aside>

      <div className="flex-1 flex flex-col">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-16 bg-[#0f1629]/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8"
        >
          <div className="flex items-center space-x-4 flex-1 max-w-xl">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un passeport..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Bell className="h-5 w-5 text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#2563EB] rounded-full" />
            </motion.button>

            <Avatar className="h-10 w-10 bg-gradient-to-br from-[#2563EB] to-[#A7F3D0]">
              <AvatarFallback className="bg-transparent text-white font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </motion.header>

        <main className="flex-1 p-8 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Passeports Numériques
                </h1>
                <p className="text-gray-400">
                  Gérez vos DPP conformes ESPR
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setShowModal(true)}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-6 rounded-2xl shadow-xl shadow-[#2563EB]/20"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Créer un DPP
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-gray-400 font-medium p-6">Produit</th>
                      <th className="text-left text-gray-400 font-medium p-6">Secteur</th>
                      <th className="text-left text-gray-400 font-medium p-6">Statut</th>
                      <th className="text-left text-gray-400 font-medium p-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passports.map((passport, index) => (
                      <motion.tr
                        key={passport.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                        className="border-b border-white/5 transition-colors"
                      >
                        <td className="p-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#A7F3D0] rounded-xl flex items-center justify-center">
                              <FileText className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-white font-medium">{passport.product}</span>
                          </div>
                        </td>
                        <td className="p-6 text-gray-300">{passport.sector}</td>
                        <td className="p-6">
                          <span
                            className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                              passport.color === 'green'
                                ? 'bg-[#A7F3D0]/20 text-[#A7F3D0]'
                                : 'bg-orange-500/20 text-orange-400'
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                passport.color === 'green' ? 'bg-[#A7F3D0]' : 'bg-orange-400'
                              }`}
                            />
                            <span>{passport.status}</span>
                          </span>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            >
                              <QrCode className="h-4 w-4 text-gray-400" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            >
                              <Download className="h-4 w-4 text-gray-400" />
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Total DPP</span>
                  <FileText className="h-5 w-5 text-[#2563EB]" />
                </div>
                <div className="text-3xl font-bold text-white">3</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">QR Générés</span>
                  <QrCode className="h-5 w-5 text-[#A7F3D0]" />
                </div>
                <div className="text-3xl font-bold text-white">12</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Conformité</span>
                  <div className="w-2 h-2 bg-[#A7F3D0] rounded-full animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-white">100%</div>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-[#0f1629] border border-white/10 rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Créer un nouveau DPP</h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowModal(false)}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom du produit
                    </label>
                    <Input
                      placeholder="Ex: T-shirt Bio"
                      className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Secteur
                    </label>
                    <Input
                      placeholder="Ex: Textile"
                      className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      placeholder="Description du produit et informations de conformité"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#2563EB] transition-all resize-none"
                    />
                  </div>

                  <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-[#2563EB]/50 transition-colors cursor-pointer">
                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm">
                      Glissez vos documents ou cliquez pour importer
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 flex items-center justify-center space-x-4">
                    <QrCode className="h-32 w-32 text-[#2563EB]" strokeWidth={1} />
                    <div className="text-gray-400 text-sm">
                      <p className="font-medium text-white mb-1">Aperçu du QR Code</p>
                      <p>Sera généré après création</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 pt-4">
                    <Button
                      onClick={() => setShowModal(false)}
                      variant="outline"
                      className="flex-1 border-white/20 text-white hover:bg-white/5 rounded-xl h-12"
                    >
                      Annuler
                    </Button>
                    <Button
                      onClick={() => setShowModal(false)}
                      className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl h-12 shadow-lg shadow-[#2563EB]/20"
                    >
                      Créer le DPP
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
