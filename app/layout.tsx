import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { inter, satoshi, spaceGrotesk } from "@/lib/fonts";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { InteractiveCursor } from "@/components/interactive-cursor";

export const metadata: Metadata = {
  title: "Tally — Passeports Numériques & Conformité Produit",
  description:
    "Tally automatise la conformité européenne et crée vos Digital Product Passports en un clic.",
  metadataBase: new URL("https://tally.eu"),
  openGraph: {
    title: "Tally — Passeports Numériques & Conformité Produit",
    description:
      "Découvrez la plateforme souveraine qui simplifie la conformité produit et génère vos passeports numériques.",
    url: "https://tally.eu",
    siteName: "Tally",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tally — Passeports Numériques & Conformité Produit",
    description:
      "La conformité européenne devient un tableau de bord intelligent avec Tally.",
    creator: "@tally_eu"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${satoshi.variable} bg-night text-mist min-h-screen font-body antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgressBar />
          <InteractiveCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
