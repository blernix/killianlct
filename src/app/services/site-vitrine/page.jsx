import SiteVitrineClient from './SiteVitrineClient';
import { siteVitrineFaqData } from '@/app/data/faq/siteVitrine';

// Métadonnées optimisées pour cette page spécifique
export const metadata = {
  title: "Création de Site Vitrine sur-mesure | Killian Lecrut, Développeur Freelance",
  description: "Un site vitrine professionnel pour présenter votre activité, attirer de nouveaux clients et renforcer votre crédibilité. Découvrez mon approche sur-mesure.",
  keywords: ["création site vitrine", "site web PME", "site pour artisan", "développeur site vitrine", "site internet professionnel"],
  openGraph: {
    title: "Création de Site Vitrine sur-mesure | Killian Lecrut",
    description: "Présentez votre activité et attirez de nouveaux clients avec un site vitrine professionnel, rapide et optimisé.",
    url: '/services/site-vitrine',
  },
  twitter: {
    title: "Création de Site Vitrine sur-mesure | Killian Lecrut",
    description: "Présentez votre activité et attirez de nouveaux clients avec un site vitrine professionnel, rapide et optimisé.",
  },
};
export default function SiteVitrinePage() {
  // Assure-toi que la prop est bien passée ici
  return <SiteVitrineClient faqData={siteVitrineFaqData} />;
}