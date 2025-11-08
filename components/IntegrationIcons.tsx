'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { Figma, Slack } from 'lucide-react';
import { type ComponentType, type SVGProps, useEffect, useRef } from 'react';

type Tool = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
};

const tools: Tool[] = [
  {
    name: 'Slack',
    Icon: Slack,
    accent: 'from-[#36C5F0]/40 via-[#2EB67D]/30 to-[#E01E5A]/40',
  },
  {
    name: 'Google Drive',
    Icon: GoogleDriveIcon,
    accent: 'from-[#0F9D58]/35 via-[#F4B400]/25 to-[#4285F4]/35',
  },
  {
    name: 'Gmail',
    Icon: GmailIcon,
    accent: 'from-[#EA4335]/35 via-[#FBBC05]/20 to-[#34A853]/30',
  },
  {
    name: 'Figma',
    Icon: Figma,
    accent: 'from-[#FF7262]/40 via-[#A259FF]/30 to-[#1ABCFE]/40',
  },
];

export function IntegrationIcons() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1F] py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(42,111,255,0.18),_transparent_65%)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(198,255,221,0.08),_transparent_70%)]"
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Intégrations</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Compatible avec vos outils préférés.</h2>
          <p className="mt-4 text-lg text-white/70">
            Connectez votre écosystème en toute simplicité — ProductPassport.io s’intègre naturellement à vos plateformes
            existantes.
          </p>
          <div className="from-[#2A6FFF] to-[#C6FFDD] mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r" />
        </div>

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2">
          {tools.map((tool, index) => (
            <IntegrationCard key={tool.name} index={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

type IntegrationCardProps = Tool & { index: number };

function IntegrationCard({ name, Icon, accent, index }: IntegrationCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const animate = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.15, ease: 'easeOut' },
      });

      await controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
      });
    };

    void animate();
  }, [controls, index, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: '0 0 20px rgba(42,111,255,0.45)',
        transition: { type: 'spring', stiffness: 260, damping: 18 },
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-lg"
    >
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent}`} />
      <div className="flex h-24 items-center justify-center">
        <Icon className="h-14 w-14 text-white" aria-hidden="true" />
      </div>
      <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-white/60">{name}</p>
    </motion.div>
  );
}

function GoogleDriveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M23 10h18l15 26-9 16H29L8 36 23 10Z" fill="url(#drive-gradient)" opacity="0.9" />
      <path d="M23 10 8 36l11 18h16L23 10Z" fill="url(#drive-left)" opacity="0.9" />
      <path d="M41 10H23l19 34h15L41 10Z" fill="url(#drive-right)" opacity="0.9" />
      <defs>
        <linearGradient id="drive-gradient" x1="18" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F9D58" />
          <stop offset="0.5" stopColor="#F4B400" />
          <stop offset="1" stopColor="#4285F4" />
        </linearGradient>
        <linearGradient id="drive-left" x1="10" y1="18" x2="34" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F9D58" />
          <stop offset="1" stopColor="#0F9D58" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="drive-right" x1="32" y1="12" x2="60" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="1" stopColor="#4285F4" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="8" y="14" width="48" height="36" rx="6" fill="url(#gmail-bg)" opacity="0.85" />
      <path d="M12 20 32 34 52 20" stroke="white" strokeWidth="5" strokeLinejoin="round" />
      <path d="M18 44V24l14 10 14-10v20" stroke="url(#gmail-edges)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="gmail-bg" x1="16" y1="18" x2="48" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EA4335" />
          <stop offset="0.45" stopColor="#FBBC05" />
          <stop offset="1" stopColor="#34A853" />
        </linearGradient>
        <linearGradient id="gmail-edges" x1="16" y1="24" x2="48" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EA4335" />
          <stop offset="0.5" stopColor="#4285F4" />
          <stop offset="1" stopColor="#34A853" />
        </linearGradient>
      </defs>
    </svg>
  );
}
