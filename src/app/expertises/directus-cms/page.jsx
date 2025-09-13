import DirectusClient from './DirectusClient';
import { directusFaqData } from '@/app/data/faq/directus';


// Métadonnées optimisées pour la page Directus
export const metadata = {
  title: "Gestion de Contenu Simplifiée avec Directus | Killian Lecrut, Freelance",
  description: "Prenez le contrôle de votre site. Je mets en place Directus, un CMS headless sur-mesure, pour vous permettre de gérer votre contenu en toute autonomie.",
  keywords: ["Directus", "CMS headless", "gestion de contenu", "back-office sur-mesure", "API", "développeur Directus"],
  openGraph: {
    title: "Gestion de Contenu Simplifiée avec Directus | Killian Lecrut, Freelance",
    description: "Prenez le contrôle de votre site avec un espace d'administration 100% sur-mesure.",
    url: '/expertises/directus-cms',
  },
  twitter: {
    title: "Gestion de Contenu Simplifiée avec Directus | Killian Lecrut, Freelance",
    description: "Prenez le contrôle de votre site avec un espace d'administration 100% sur-mesure.",
  },
};

export default function DirectusPage() {
  return <DirectusClient faqData={directusFaqData} />;
}