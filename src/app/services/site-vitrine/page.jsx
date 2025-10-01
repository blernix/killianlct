import SiteVitrineClient from './SiteVitrineClient';
import { siteVitrineFaqData } from '@/app/data/faq/siteVitrine';

// Métadonnées optimisées pour cette page spécifique
export const metadata = {
  // Le titre cible le mot-clé principal et le nom de l'agence.
  title: "Création de Site Vitrine sur-mesure | Agence Killian Lecrut",

  // La description utilise "notre" et met en avant les bénéfices pour le client.
  description: "Notre agence web conçoit votre site vitrine professionnel pour présenter votre activité, attirer de nouveaux clients et renforcer votre crédibilité. Découvrez notre approche sur-mesure à Melun (77).",

  // Rappel : la balise keywords est ignorée par Google, mais ne fait pas de mal.
  keywords: ["création site vitrine", "agence web Melun", "site web PME", "site pour artisan", "site internet professionnel 77"],

  openGraph: {
    title: "Création de Site Vitrine sur-mesure | Agence Killian Lecrut",
    description: "Présentez votre activité et attirez des clients avec un site vitrine professionnel, conçu par notre agence.",
    // Il est plus sûr de mettre l'URL complète. metadataBase devrait le faire, mais l'explicite est mieux.
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