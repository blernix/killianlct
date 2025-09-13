import AutomatisationClient from './AutomatisationClient';
import { n8nFaqData } from '@/app/data/faq/n8n';


// Métadonnées optimisées pour la page n8n
export const metadata = {
  title: "Automatisation sur-mesure avec n8n | Killian Lecrut, Freelance",
  description: "Gagnez du temps et optimisez vos processus. Je crée des automatisations personnalisées avec n8n pour connecter vos applications et faire travailler votre site pour vous.",
  keywords: ["n8n", "automatisation", "workflow", "make.com", "zapier", "automatisation de processus", "développeur n8n"],
  openGraph: {
    title: "Automatisation sur-mesure avec n8n | Killian Lecrut, Freelance",
    description: "Gagnez du temps et optimisez vos processus avec des workflows personnalisés.",
    url: '/expertises/n8n-automatisation',
  },
  twitter: {
    title: "Automatisation sur-mesure avec n8n | Killian Lecrut, Freelance",
    description: "Gagnez du temps et optimisez vos processus avec des workflows personnalisés.",
  },
};

export default function AutomatisationPage() {
  return <AutomatisationClient faqData={n8nFaqData} />;
}