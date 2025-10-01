// Fichier: app/services/automatisation-n8n/page.jsx
// C'est le composant "Serveur" qui importe les données et votre composant client.

import AutomatisationClient from './AutomatisationClient';
import { n8nFaqData } from '@/app/data/faq/n8n'; // On importe les NOUVELLES données FAQ

// Métadonnées pour le SEO de la page
export const metadata = {
  title: "Automatisation de Workflows sur Mesure avec n8n | Agence Killian Lecrut",
  description: "Libérez le potentiel de votre entreprise. Nous connectons vos outils et automatisons vos processus pour vous faire gagner en temps et en efficacité.",
  openGraph: {
    title: "Mettez votre Business sur Pilote Automatique | Agence Killian Lecrut",
    description: "Découvrez notre méthode pour concevoir et déployer des systèmes d'automatisation robustes.",
    url: '/expertises/n8n-automatisation', // Mettez à jour si l'URL est différente
  },
  twitter: {
    title: "Mettez votre Business sur Pilote Automatique | Agence Killian Lecrut",
    description: "Découvrez notre méthode pour concevoir et déployer des systèmes d'automatisation robustes.",
  },
};

export default function AutomatisationPage() {
  // On passe les nouvelles données importées à votre composant client
  return <AutomatisationClient faqData={n8nFaqData} />;
}
