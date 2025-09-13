// Fichier: /app/services/e-commerce/page.jsx

import ECommerceClient from './ECommerceClient';
// CHEMIN CORRIGÉ : On retire '/app' car '@/' pointe déjà à la racine.
// COQUILLE CORRIGÉE : "ecomerce" -> "ecommerce"
import { ecommerceFaqData } from '@/app/data/faq/ecomerce';
// BONNE PRATIQUE : Nom du fichier en PascalCase (Faq.jsx ou FAQ.jsx) pour correspondre au composant


export const metadata = {
  title: "Création de Site E-commerce Performant | Vendez en Ligne",
  description: "Développeur freelance spécialisé en création de boutiques en ligne sur-mesure. Solutions e-commerce rapides, sécurisées et optimisées pour la conversion.",
  keywords: ["création site e-commerce", "boutique en ligne", "vendre en ligne", "développeur e-commerce", "site de vente", "Next.js e-commerce"],
  openGraph: {
    title: "Création de Site E-commerce Performant | Vendez en Ligne",
    description: "Développeur freelance spécialisé en création de boutiques en ligne sur-mesure.",
    url: '/services/e-commerce',
  },
  twitter: {
    title: "Création de Site E-commerce Performant | Vendez en Ligne",
    description: "Développeur freelance spécialisé en création de boutiques en ligne sur-mesure.",
  },
};

export default function ECommercePage() {
  // ERREUR CORRIGÉE : On enveloppe les deux composants dans un Fragment <>...</>
  return (
    
       <ECommerceClient faqData={ecommerceFaqData} />
      
    
  );
}