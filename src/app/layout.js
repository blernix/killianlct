import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Script from "next/script";
import { Chatbot }  from "@/components/Chatbot"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// --- METADATA OPTIMISÉES ---
// Remplacement de l'objet metadata original par la version optimisée "Agence".
export const metadata = {
  metadataBase: new URL("https://killian-lecrut.com"),
  title: 'Agence Killian Lecrut - Création de Sites Web & Applications Performants',
  description: "Notre agence web est spécialisée dans la conception et le développement de sites et applications sur-mesure. Nous transformons vos idées en solutions digitales performantes et optimisées.",
  alternates: {
    canonical: 'https://killian-lecrut.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Killian Lecrut - Votre Partenaire Digital pour des Projets Web sur-mesure',
    description: 'De la conception à la mise en ligne, notre agence vous accompagne dans la création de sites web et applications modernes qui répondent à vos objectifs.',
    url: 'https://killian-lecrut.com',
    siteName: 'Agence Killian Lecrut',
    images: [
      {
        url: 'https://killian-lecrut.com/logoK.png', // URL ABSOLUE
        width: 1200,
        height: 630,
        alt: "Création de sites web sur-mesure - Agence Killian Lecrut",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Killian Lecrut - Votre Partenaire Digital pour des Projets Web sur-mesure',
    description: 'De la conception à la mise en ligne, notre agence vous accompagne dans la création de sites web et applications modernes.',
    images: ['https://killian-lecrut.com/logoK.png'], // URL ABSOLUE
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
};

// --- DONNÉES STRUCTURÉES (JSON-LD) ---
// Définition des données structurées pour Google, positionnement "Agence".
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Agence Killian Lecrut',
  image: 'https://killian-lecrut.com/logoK.png', // Pense à créer un logo pour l'agence
  '@id': 'https://killian-lecrut.com',
  url: 'https://killian-lecrut.com',
  // Remplace par ton numéro de téléphone professionnel
  telephone: '+33641970383', 
  description: "Agence web spécialisée dans la création de sites internet et d'applications web sur-mesure, axées sur la performance et l'expérience utilisateur.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melun',
    postalCode: '77000',
    addressCountry: 'FR',
  },
  sameAs: [
    // Ajoute tes liens de profils professionnels
    
    'https://www.linkedin.com/in/killian-lecrut-a80336176/',
    'https://www.malt.fr/profile/killianlecrut',
    'https://fr.fiverr.com/sellers/killianlecrut/',

  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N62XPDLH');
          `}
        </Script>

        {/* Injection des données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N62XPDLH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <AnimatedBackground />
        <main className="relative z-10 flex-1">{children}</main>
        {/* <div className="fixed bottom-5 right-5 z-50">
          <Chatbot />
        </div> */}
      </body>
    </html>
  );
}