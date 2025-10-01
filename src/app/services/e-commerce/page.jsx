// Fichier: app/services/e-commerce/page.jsx
// C'est le composant "Serveur" qui importe les données et votre composant client.

import ECommerceClient from './ECommerceClient';
import { ecommerceFaqData } from '@/app/data/faq/ecommerce'; // On importe les données ici

// Métadonnées pour le SEO de la page
export const metadata = {
  title: "Création de Boutique E-commerce sur Mesure avec MedusaJS | Agence Killian Lecrut",
  description: "Dépassez les limites de Shopify. Nous créons votre boutique e-commerce performante, 100% sur-mesure et sans abonnement, basée sur MedusaJS et Next.js.",
  
  // ✅ AJOUT DE L'URL CANONIQUE SPÉCIFIQUE À CETTE PAGE
  alternates: {
    canonical: '/services/e-commerce',
  },

  openGraph: {
    title: "Solution E-commerce Performante et sans Abonnement | Agence Killian Lecrut",
    description: "Découvrez notre approche pour créer une boutique en ligne qui vous appartient vraiment.",
    url: 'https://killian-lecrut.com/services/e-commerce',
  },
  twitter: {
    title: "Solution E-commerce Performante et sans Abonnement | Agence Killian Lecrut",
    description: "Découvrez notre approche pour créer une boutique en ligne qui vous appartient vraiment.",
  },
};

export default function ECommercePage() {
  // On passe les données importées en tant que prop "faqData" à votre composant client
  return <ECommerceClient faqData={ecommerceFaqData} />;
}

