import PsychologueClient from './PsychologueClient';

// Métadonnées optimisées pour le SEO psychologue
export const metadata = {
  title: "Site Web pour Psychologue | Votre Identité Professionnelle | Killian Lecrut",
  description: "Création de site internet professionnel pour psychologue. Design sobre et empathique, conforme RGPD et secret professionnel. Exprimez votre approche thérapeutique avec vos propres mots.",
  keywords: [
    "site web psychologue",
    "création site psychologue",
    "site internet psychologue libéral",
    "site psychologue RGPD",
    "psychologue site professionnel",
    "site thérapeute",
    "site psy libéral",
    "site psychologue design",
    "identité professionnelle psychologue",
    "site web profession libérale"
  ],
  alternates: {
    canonical: '/secteurs/professions-liberales/psychologue',
  },
  openGraph: {
    title: "Site Web pour Psychologue | Votre Identité Professionnelle",
    description: "Créez un site qui reflète votre approche thérapeutique et votre éthique de soin. Design empathique, conforme RGPD et secret professionnel.",
    url: 'https://killian-lecrut.com/secteurs/professions-liberales/psychologue',
    type: 'website',
    images: [
      {
        url: 'https://killian-lecrut.com/og/psychologue.png',
        width: 1200,
        height: 630,
        alt: "Création site web pour psychologue - Design empathique et professionnel"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Site Web pour Psychologue | Votre Identité Professionnelle",
    description: "Site internet professionnel pour psychologue. Design sobre, conforme RGPD et secret professionnel.",
  },
};

export default function PsychologuePage() {
  return <PsychologueClient />;
}
