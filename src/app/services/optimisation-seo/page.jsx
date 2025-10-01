// Fichier: app/services/seo/page.jsx
// C'est le composant "Serveur" qui importe les données et votre composant client.

import SeoClient from './OptimisationSeoClient';
import { seoFaqData } from '@/app/data/faq/seo'; // On importe les NOUVELLES données FAQ

// Métadonnées pour le SEO de la page
export const metadata = {
  title: "Stratégie SEO & Référencement Durable | Agence Killian Lecrut",
  description: "Au-delà de la technique, nous construisons votre stratégie de croissance sur Google. Attirez un flux constant de clients qualifiés grâce à une approche SEO durable.",
  openGraph: {
    title: "Stratégie SEO Durable pour une Croissance Continue | Agence Killian Lecrut",
    description: "Découvrez notre approche stratégique du SEO pour devenir une autorité dans votre domaine.",
    url: '/services/optimisation-seo',
  },
  twitter: {
    title: "Stratégie SEO Durable pour une Croissance Continue | Agence Killian Lecrut",
    description: "Découvrez notre approche stratégique du SEO pour devenir une autorité dans votre domaine.",
  },
};

export default function SeoPage() {
  // On passe les nouvelles données importées à votre composant client
  return <SeoClient faqData={seoFaqData} />;
}
