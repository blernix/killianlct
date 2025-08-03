import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
// Les imports de la sidebar ont été retirés, car inutilisés

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Killian Lecrut — Création de Sites & Applications Web sur-mesure",
  description: "Je conçois et développe des expériences web rapides, modernes et sur-mesure pour aider les entreprises à atteindre leurs objectifs en ligne. Parlons de votre projet !",
};

export default function RootLayout({ children }) {
  return (
    // On garde "dark" pour que vos variables de couleur du thème sombre s'appliquent
    <html lang="fr" className="dark">

      {/* On garde bg-background pour la couleur de fond de base */}
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}>
        
        {/* On place le fond animé ici, il se mettra derrière tout le reste */}
        <AnimatedBackground />
  
        {/*
          Je suppose que votre nouvelle barre de navigation en JS pur
          est gérée à l'intérieur de vos pages (dans {children}).
          Cette structure de layout est donc la bonne base.
        */}
        <main className="relative z-10 flex-1 pt-16">{children}</main>

      </body>
    </html>
  );
}