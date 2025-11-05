import AutomatisationClient from './AutomatisationClient';

// Métadonnées optimisées pour le SEO automatisation n8n
export const metadata = {
  title: "Automatisation Workflows n8n | Gagnez 20h/Semaine | Killian Lecrut",
  description: "Automatisez vos processus avec n8n. Connectez vos outils, éliminez les tâches manuelles, réduisez les erreurs. Premier workflow en 2 semaines. ROI immédiat. Devis gratuit.",
  keywords: [
    "automatisation n8n",
    "workflow automatisation",
    "n8n consultant",
    "automatisation processus",
    "intégration outils",
    "zapier alternative",
    "automatisation business",
    "Paris",
    "Seine-et-Marne"
  ],
  alternates: {
    canonical: '/expertises/n8n-automatisation',
  },
  openGraph: {
    title: "Automatisation n8n | Libérez 20h par Semaine en Automatisant",
    description: "Arrêtez de perdre du temps en tâches répétitives. Nous connectons vos outils et automatisons vos processus métier avec n8n. ROI visible dès le 1er mois.",
    url: 'https://killian-lecrut.com/expertises/n8n-automatisation',
    type: 'website',
    images: [
      {
        url: 'https://killian-lecrut.com/og/n8n-automatisation.png',
        width: 1200,
        height: 630,
        alt: "Automatisation de workflows avec n8n"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Automatisation n8n | Gagnez 20h/Semaine",
    description: "Connectez vos outils et automatisez vos processus métier. Premier workflow en 2 semaines, ROI immédiat.",
  },
};

export default function AutomatisationPage() {
  return <AutomatisationClient />;
}
