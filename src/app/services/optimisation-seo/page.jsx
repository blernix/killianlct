import SeoClient from "./OptimisationSeoClient";
import { seoFaqData } from '@/app/data/faq/seo';

// Les métadonnées restent ici, dans le composant serveur
export const metadata = {
  title: "Optimisation SEO & Suivi Mensuel | Killian Lecrut, Freelance",
  description: "Améliorez votre classement sur Google, attirez un trafic qualifié et augmentez vos prospects. Découvrez mon service d'optimisation et de suivi SEO sur-mesure.",
  keywords: ["optimisation SEO", "référencement naturel", "suivi SEO", "consultant SEO", "freelance SEO", "Google Search Console"],
  openGraph: {
    title: "Optimisation SEO & Suivi Mensuel | Killian Lecrut, Freelance",
    description: "Améliorez votre classement sur Google et attirez un trafic qualifié.",
    url: '/services/optimisation-seo',
  },
  twitter: {
    title: "Optimisation SEO & Suivi Mensuel | Killian Lecrut, Freelance",
    description: "Améliorez votre classement sur Google et attirez un trafic qualifié.",
  },
};

// La page elle-même ne fait plus qu'appeler le composant client
export default function SeoPage() {
  return <SeoClient faqData={seoFaqData} />;
}
