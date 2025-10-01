import SiteVitrineClient from './SiteVitrineClient';
import { siteVitrineFaqData } from '@/app/data/faq/siteVitrine';

// Métadonnées optimisées pour cette page spécifique
export const metadata = {
  // Le titre cible le mot-clé principal et le nom de l'agence.
  title: "Création de Site Vitrine sur-mesure | Agence Killian Lecrut",

  // La description utilise "notre" et met en avant les bénéfices pour le client.
  description: "Notre agence web conçoit votre site vitrine professionnel pour présenter votre activité, attirer de nouveaux clients et renforcer votre crédibilité. Découvrez notre approche sur-mesure à Melun (77).",

  // ✅ AJOUT DE L'URL CANONIQUE SPÉCIFIQUE À CETTE PAGE
  alternates: {
    canonical: '/services/site-vitrine',
  },

  // Rappel : la balise keywords est ignorée par Google, mais ne fait pas de mal.
  keywords: ["création site vitrine", "agence web Melun", "site web PME", "site pour artisan", "site internet professionnel 77"],

  openGraph: {
    title: "Création de Site Vitrine sur-mesure | Agence Killian Lecrut",
    description: "Présentez votre activité et attirez des clients avec un site vitrine professionnel, conçu par notre agence.",
    // L'URL ici est correcte et utilisée pour les partages sociaux.
    url: 'https://killian-lecrut.com/services/site-vitrine',
  },
  twitter: {
    title: "Création de Site Vitrine sur-mesure | Agence Killian Lecrut",
    description: "Présentez votre activité et attirez des clients avec un site vitrine professionnel, conçu par notre agence.",
  },
};
export default function SiteVitrinePage() {
  // Assure-toi que la prop est bien passée ici
  return <SiteVitrineClient faqData={siteVitrineFaqData} />;
}
