// Fichier: app/services/application-web/page.jsx
// C'est le composant "Serveur" qui importe les données et votre composant client.

import ApplicationWebClient from './ApplicationWebClient';
import { applicationWebFaqData } from '@/app/data/faq/applicationWeb'; // On importe les NOUVELLES données FAQ

// Métadonnées pour le SEO de la page
export const metadata = {
  title: "Développement d'Applications Web sur Mesure | Agence Killian Lecrut",
  description: "Transformez vos processus en avantage concurrentiel. Nous créons l'application web métier qui s'adapte à votre entreprise, et non l'inverse.",
  openGraph: {
    title: "Créez l'Outil qui Accélère Votre Croissance | Agence Killian Lecrut",
    description: "Découvrez notre méthode pour développer des applications web robustes et évolutives.",
    url: '/services/application-web',
  },
  twitter: {
    title: "Créez l'Outil qui Accélère Votre Croissance | Agence Killian Lecrut",
    description: "Découvrez notre méthode pour développer des applications web robustes et évolutives.",
  },
};

export default function ApplicationWebPage() {
  // On passe les nouvelles données importées à votre composant client
  return <ApplicationWebClient faqData={applicationWebFaqData} />;
}
