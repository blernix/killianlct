import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
// import { Chatbot } from "@/components/chatbot"; // Assure-toi que le chemin est correct
import { GoogleTagManager } from '@next/third-parties/google';


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  // --- Métadonnées de base pour le SEO ---
  metadataBase: new URL('https://killian-lecrut.com'), // Remplacez par votre URL finale si elle change
  title: "Killian Lecrut | Développeur Web Freelance sur-mesure",
  description: "Développeur web freelance spécialisé dans la création de sites et applications rapides et modernes. Transformons votre idée en projet concret.",
  keywords: ["développeur web freelance", "création de site web", "site sur-mesure", "Next.js", "React", "développeur full-stack", "Killian Lecrut"],
  
  // --- Open Graph pour les réseaux sociaux (LinkedIn, Facebook, etc.) ---
  openGraph: {
    title: "Killian Lecrut | Développeur Web Freelance sur-mesure",
    description: "Développeur web freelance spécialisé dans la création de sites et applications rapides et modernes.",
    url: '/',
    siteName: 'Killian Lecrut - Création Digitale',
    images: [
      {
        url: '/logoK.png', // L'URL de votre image dans le dossier /public
        width: 1200,
        height: 630,
        alt: 'Logo de Killian Lecrut, développeur web freelance',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  // --- Twitter Cards ---
  twitter: {
    card: 'summary_large_image',
    title: "Killian Lecrut | Développeur Web Freelance sur-mesure",
    description: "Développeur web freelance spécialisé dans la création de sites et applications rapides et modernes.",
    images: ['/logoK.png'], // La même image
  },

  // --- Favicons ---
 icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      
   

      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}>
        
      

        <AnimatedBackground />
  
        <main className="relative z-10 flex-1 ">{children}</main>
        
        {/* <div className="fixed bottom-5 right-5 z-50">
          <Chatbot />
        </div> */}
        <GoogleTagManager gaId='GTM-N62XPDLH' />
      </body>
    </html>
  );
}