import ApplicationWebClient from './ApplicationWebClient';

// Métadonnées optimisées pour le SEO application web
export const metadata = {
  title: "Développement d'Application Web sur Mesure | MVP en 10 Semaines | Killian Lecrut",
  description: "Créez l'application métier qui transforme vos processus. Code source 100% à vous, architecture évolutive, RGPD natif. De l'idée au MVP en 10 semaines. Devis gratuit.",
  keywords: [
    "développement application web",
    "application sur mesure",
    "MVP",
    "logiciel métier",
    "application web entreprise",
    "développement custom",
    "CRM sur mesure",
    "plateforme web",
    "Paris",
    "Seine-et-Marne"
  ],
  alternates: {
    canonical: '/services/application-web',
  },
  openGraph: {
    title: "Application Web sur Mesure | De l'Idée au MVP en 10 Semaines",
    description: "Arrêtez de vous adapter aux logiciels standards. Nous créons l'outil qui s'adapte à VOS processus. Code source fourni, architecture évolutive garantie.",
    url: 'https://killian-lecrut.com/services/application-web',
    type: 'website',
    images: [
      {
        url: 'https://killian-lecrut.com/og/application-web.png',
        width: 1200,
        height: 630,
        alt: "Développement d'application web sur mesure"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Application Web sur Mesure | MVP en 10 Semaines",
    description: "Transformez vos processus métier avec une application qui vous ressemble vraiment. Code source 100% à vous.",
  },
};

export default function ApplicationWebPage() {
  return <ApplicationWebClient />;
}
