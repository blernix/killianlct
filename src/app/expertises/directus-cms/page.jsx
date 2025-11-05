import DirectusClient from './DirectusClient';

// Métadonnées optimisées pour le SEO Directus CMS
export const metadata = {
  title: "Interface Admin Directus sur Mesure | Zéro Risque de Casser le Site | Killian Lecrut",
  description: "Oubliez WordPress. Nous créons votre interface d'administration Directus épurée et sécurisée. Modifiez vos contenus sans jamais risquer de tout casser. Livraison en 3 semaines.",
  keywords: [
    "directus cms",
    "headless cms",
    "interface admin sur mesure",
    "alternative wordpress",
    "cms sécurisé",
    "gestion contenu",
    "directus consultant",
    "Paris",
    "Seine-et-Marne"
  ],
  alternates: {
    canonical: '/expertises/directus-cms',
  },
  openGraph: {
    title: "Interface Admin Directus | Gérez Votre Contenu Sans Risque",
    description: "Interface d'administration épurée et sur-mesure avec Directus. Oubliez les 50 menus WordPress : vous ne voyez QUE vos contenus. Zéro risque de casser le site.",
    url: 'https://killian-lecrut.com/expertises/directus-cms',
    type: 'website',
    images: [
      {
        url: 'https://killian-lecrut.com/og/directus-cms.png',
        width: 1200,
        height: 630,
        alt: "Interface d'administration Directus sur mesure"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Interface Admin Directus | Zéro Risque",
    description: "Gérez votre contenu en toute sérénité avec une interface sur-mesure. Alternative moderne à WordPress.",
  },
};

export default function DirectusPage() {
  return <DirectusClient />;
}
