import ApplicationWebClient from './ApplicationWebClient';
import { applicationWebFaqData } from '@/app/data/faq/applicationweb';


// Les métadonnées restent ici, dans le composant serveur
export const metadata = {
  title: "Développement d'Applications Web sur-mesure | Killian Lecrut, Freelance",
  description: "Je transforme vos processus métier en applications web performantes et intuitives : dashboards, espaces clients, outils de gestion. Donnez vie à votre projet.",
  keywords: ["application web sur-mesure", "développement web", "outil métier", "dashboard", "espace client", "développeur freelance", "Next.js"],
  openGraph: {
    title: "Développement d'Applications Web sur-mesure | Killian Lecrut",
    description: "Je transforme vos processus métier en applications web performantes et intuitives.",
    url: '/services/application-web',
  },
  twitter: {
    title: "Développement d'Applications Web sur-mesure | Killian Lecrut",
    description: "Je transforme vos processus métier en applications web performantes et intuitives.",
  },
};

export default function ApplicationWebPage() {
  return <ApplicationWebClient  faqData={applicationWebFaqData}/>;
}