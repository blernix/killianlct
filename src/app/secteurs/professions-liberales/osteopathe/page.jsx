import OsteopatheClient from './OsteopatheClient';

// Métadonnées optimisées pour le SEO ostéopathe
export const metadata = {
  title: "Site Web pour Ostéopathe | Développez Votre Patientèle | Agence Killian Lecrut",
  description: "Création de site internet professionnel pour ostéopathe. Sortez du lot parmi 40 000 confrères. Conforme RGPD, optimisé référencement local, prise de RDV en ligne. Attirez plus de patients.",
  keywords: [
    "site web ostéopathe",
    "création site ostéopathe",
    "site internet ostéopathie",
    "agence web ostéopathe",
    "site ostéopathe professionnel",
    "site ostéopathe RGPD",
    "ostéopathe référencement",
    "développer patientèle ostéopathe",
    "site ostéopathe prise rdv",
    "site web profession libérale"
  ],
  alternates: {
    canonical: '/secteurs/professions-liberales/osteopathe',
  },
  openGraph: {
    title: "Site Web pour Ostéopathe | Développez Votre Patientèle",
    description: "40 000 ostéopathes en France. Démarquez-vous avec un site professionnel qui attire des patients qualifiés. Conforme RGPD, optimisé SEO local.",
    url: 'https://killian-lecrut.com/secteurs/professions-liberales/osteopathe',
    type: 'website',
    images: [
      {
        url: 'https://killian-lecrut.com/og/osteopathe.png',
        width: 1200,
        height: 630,
        alt: "Création site web pour ostéopathe - Développez votre patientèle"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Site Web pour Ostéopathe | Développez Votre Patientèle",
    description: "Site professionnel pour ostéopathe. Sortez du lot, attirez plus de patients qualifiés.",
  },
};

export default function OsteopathePage() {
  return <OsteopatheClient />;
}
