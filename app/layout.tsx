import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Tally - Le Passeport Numérique Produit Conforme à l'Europe",
  description: "Créez, hébergez et diffusez vos DPP conformes à l'ESPR en 7 minutes.",
  openGraph: {
    title: "Tally - Passeport Numérique Produit conforme à l'Europe",
    description:
      "Tally aide les équipes industrielles à créer et diffuser des passeports numériques produits conformes à l'ESPR en quelques minutes.",
    url: 'https://tally.example.com',
    siteName: 'Tally',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tally - Passeport Numérique Produit",
    description:
      "Découvrez Tally, la plateforme conforme ESPR pour vos Digital Product Passports.",
  },
  metadataBase: new URL('https://tally.example.com'),
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
