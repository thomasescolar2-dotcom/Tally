'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Archivo_Black } from 'next/font/google';

import { cn } from '@/lib/utils';

const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const navLinks = [
  { href: '#produit', label: 'Produit' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#ressources', label: 'Ressources' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 80], ['rgba(20,22,45,0.55)', 'rgba(20,22,45,0.85)']);
  const borderColor = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.16)']);
  const translateY = useTransform(scrollY, [0, 80], [0, -4]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="pointer-events-none sticky top-0 z-50 flex w-full justify-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          style={{ backgroundColor, borderColor, y: translateY }}
          className={cn(
            'pointer-events-auto mt-4 flex w-full max-w-6xl items-center gap-4 rounded-3xl border px-4 transition-all duration-300 backdrop-blur-2xl md:px-6',
            isScrolled
              ? 'py-3 shadow-[0_20px_45px_rgba(10,10,31,0.45)]'
              : 'py-4 shadow-[0_12px_35px_rgba(10,10,31,0.25)]',
          )}
        >
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2A6FFF] via-[#5B8DFF] to-[#2A6FFF] text-sm font-bold">
              PP
            </div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-white">
              ProductPassport.io
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute inset-x-4 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#2A6FFF] to-[#6F9BFF] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className={cn(
                'relative hidden items-center justify-center overflow-hidden rounded-full px-6 py-2 text-sm uppercase tracking-widest text-white transition-all duration-300 md:inline-flex',
                'bg-gradient-to-r from-[#2A6FFF] via-[#5B8DFF] to-[#2A6FFF] shadow-[0_0_0_rgba(42,111,255,0.0)] hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(42,111,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A6FFF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                archivoBlack.className,
              )}
            >
              Essayer
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/10 md:hidden"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </motion.header>

      <motion.div
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, pointerEvents: 'auto' },
          closed: { opacity: 0, pointerEvents: 'none' },
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        aria-hidden={!isMenuOpen}
        className="fixed inset-0 z-40 flex justify-end bg-black/60 backdrop-blur-sm md:hidden"
      >
        <motion.div
          variants={{
            open: { x: 0 },
            closed: { x: '100%' },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          role="dialog"
          aria-modal="true"
          className="flex h-full w-4/5 max-w-xs flex-col gap-6 border-l border-white/10 bg-[#111433]/95 p-6 text-white"
        >
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold">Menu</span>
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/10"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/demo"
            onClick={closeMenu}
            className={cn(
              'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-widest text-white transition-transform duration-300',
              'bg-gradient-to-r from-[#2A6FFF] via-[#5B8DFF] to-[#2A6FFF] shadow-[0_0_0_rgba(42,111,255,0.0)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(42,111,255,0.45)]',
              archivoBlack.className,
            )}
          >
            Essayer
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
