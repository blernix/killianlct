import RestaurantClient from './RestaurantClient';

// Métadonnées optimisées pour le SEO restaurant local
export const metadata = {
  title: "Création de Site Web pour Restaurant Indépendant | Réservations Directes | Agence Killian Lecrut",
  description: "Site internet pour restaurant indépendant : carte et horaires à jour, réservations directes sans commission, visibilité locale sur Google. Livraison en 3 semaines. Devis gratuit.",
  keywords: [
    "site web restaurant",
    "création site restaurant",
    "site internet restaurateur",
    "réservation restaurant en ligne",
    "site restaurant sans commission",
    "menu en ligne restaurant",
    "référencement local restaurant",
    "site vitrine restaurant",
    "restaurant Melun",
    "restaurant Seine-et-Marne",
    "agence web restaurant"
  ],
  alternates: {
    canonical: '/secteurs/restaurants',
  },
  openGraph: {
    title: "Site Web pour Restaurant Indépendant | Réservations Directes",
    description: "Reprenez la main sur votre carte, vos horaires et vos réservations. Un site à vous, visible sur Google local, sans commission sur les couverts. Livré en 3 semaines.",
    url: 'https://killian-lecrut.com/secteurs/restaurants',
    type: 'website',
    images: [
      {
        url: 'https://killian-lecrut.com/logoK.png',
        width: 1200,
        height: 630,
        alt: "Création site web pour restaurant indépendant"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Site Web pour Restaurant Indépendant | Réservations Directes",
    description: "Carte et horaires à jour, réservations directes sans commission, visibilité locale. Site livré en 3 semaines.",
  },
};

export default function RestaurantPage() {
  return <RestaurantClient />;
}
