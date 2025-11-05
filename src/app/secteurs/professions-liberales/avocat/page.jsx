import AvocatClient from './AvocatClient';

// Métadonnées optimisées pour le SEO avocat
export const metadata = {
  title: "Création de Site Web pour Avocat Conforme CNB 2023 | Agence Killian Lecrut",
  description: "Site internet professionnel pour cabinet d'avocat. Conforme RGPD et déontologie CNB, design sobre, optimisé référencement local. Attirez plus de clients qualifiés.",
  keywords: [
    "site web avocat",
    "création site avocat",
    "site internet cabinet juridique",
    "agence web avocat",
    "site avocat conforme CNB",
    "site avocat RGPD",
    "avocat Melun",
    "avocat Seine-et-Marne",
    "site web profession libérale"
  ],
  alternates: {
    canonical: '/secteurs/professions-liberales/avocat',
  },
  openGraph: {
    title: "Site Web pour Avocat | Conforme RGPD & CNB 2023",
    description: "Créez votre site d'avocat qui inspire confiance et génère des rendez-vous qualifiés. Conformité totale RGPD et déontologie CNB garantie.",
    url: 'https://killian-lecrut.com/secteurs/professions-liberales/avocat',
    type: 'website',
    images: [
      {
        url: 'https://killian-lecrut.com/og/avocat.png',
        width: 1200,
        height: 630,
        alt: "Création site web pour avocat conforme CNB 2023"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Site Web pour Avocat | Conforme RGPD & CNB 2023",
    description: "Site d'avocat professionnel, conforme et performant. Attirez plus de clients qualifiés.",
  },
};

export default function AvocatPage() {
  return <AvocatClient />;
}
