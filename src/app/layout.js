import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Script from "next/script";
import { Chatbot }  from "@/components/Chatbot"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://killian-lecrut.com"),
  title: "Killian Lecrut | Développeur Web Freelance sur-mesure",
  description:
    "Développeur web freelance spécialisé dans la création de sites et applications rapides et modernes. Transformons votre idée en projet concret.",
  keywords: [
    "développeur web freelance",
    "création de site web",
    "site sur-mesure",
    "Next.js",
    "React",
    "développeur full-stack",
    "Killian Lecrut",
  ],
  openGraph: {
    title: "Killian Lecrut | Développeur Web Freelance sur-mesure",
    description:
      "Développeur web freelance spécialisé dans la création de sites et applications rapides et modernes.",
    url: "/",
    siteName: "Killian Lecrut - Création Digitale",
    images: [
      {
        url: "/logoK.png",
        width: 1200,
        height: 630,
        alt: "Logo de Killian Lecrut, développeur web freelance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Killian Lecrut | Développeur Web Freelance sur-mesure",
    description:
      "Développeur web freelance spécialisé dans la création de sites et applications rapides et modernes.",
    images: ["/logoK.png"],
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
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}
      >
        {/* ConsentManager – semi automatic */}
        {/* <Script
          id="consentmanager"
          src="https://cdn.consentmanager.net/delivery/js/semiautomatic.min.js"
          data-cmp-ab="1"
          data-cmp-cdid="d12ccd3722556"
          data-cmp-host="a.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="0"
          strategy="beforeInteractive"
        /> */}

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
        <main className="relative z-10 flex-1">{children}
           
        </main>
        {/* <div className="fixed bottom-5 right-5 z-50">
          <Chatbot />
        </div> */}
      </body>
     
    </html>
  );
}