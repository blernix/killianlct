// Fichier: app/expertises/directus-cms/page.jsx
// C'est le composant "Serveur" qui importe les données et votre composant client.

import DirectusClient from './DirectusClient';
import { directusFaqData } from '@/app/data/faq/directus'; // On importe les NOUVELLES données FAQ

// Métadonnées pour le SEO de la page
export const metadata = {
  title: "Espace d'Administration sur Mesure avec Directus | Agence Killian Lecrut",
  description: "Gérez le contenu de votre site en toute sérénité. Nous créons des back-offices simples, sécurisés et 100% adaptés à vos besoins, sans le risque et la complexité des CMS traditionnels.",
  
  // ✅ AJOUT DE L'URL CANONIQUE SPÉCIFIQUE À CETTE PAGE
  alternates: {
    canonical: '/expertises/directus-cms',
  },

  openGraph: {
    title: "Gérez Votre Contenu en Toute Confiance | Agence Killian Lecrut",
    description: "Découvrez notre approche pour créer des espaces de gestion de contenu simples et sécurisés.",
    url: 'https://killian-lecrut.com/expertises/directus-cms',
  },
  twitter: {
    title: "Gérez Votre Contenu en Toute Confiance | Agence Killian Lecrut",
    description: "Découvrez notre approche pour créer des espaces de gestion de contenu simples et sécurisés.",
  },
};

export default function DirectusPage() {
  // On passe les nouvelles données importées à votre composant client
  return <DirectusClient faqData={directusFaqData} />;
}
