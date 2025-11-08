import ArtisanClient from './ArtisanClient';

// Métadonnées optimisées pour le SEO artisan local
export const metadata = {
  title: "Site Web pour Artisan Melun & Seine-et-Marne (77) | Plombier, Électricien, Menuisier",
  description: "Créez votre site vitrine d'artisan optimisé Google local. Générez des chantiers 24/7. Plombier, électricien, menuisier, maçon, couvreur en Seine-et-Marne. Livraison 3 semaines. Devis gratuit.",
  keywords: [
    "site web artisan",
    "plombier Melun",
    "électricien Seine-et-Marne",
    "menuisier Melun",
    "maçon Seine-et-Marne",
    "couvreur Melun",
    "paysagiste Seine-et-Marne",
    "création site artisan",
    "site internet plombier",
    "site internet électricien",
    "référencement local artisan",
    "Google My Business artisan",
    "artisan Seine-et-Marne 77",
    "site vitrine artisan",
    "agence web artisan"
  ],
  alternates: {
    canonical: '/secteurs/artisans',
  },
  openGraph: {
    title: "Site Web pour Artisan | Melun & Seine-et-Marne (77)",
    description: "Transformez votre métier en machine à générer des chantiers. Site vitrine d'artisan optimisé Google local : plombier, électricien, menuisier... Livré en 3 semaines.",
    url: 'https://killian-lecrut.com/secteurs/artisans',
    type: 'website',
    images: [
      {
        url: 'https://killian-lecrut.com/og/artisans.png',
        width: 1200,
        height: 630,
        alt: "Création site web pour artisan - Melun & Seine-et-Marne"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Site Web pour Artisan | Melun & Seine-et-Marne (77)",
    description: "Site vitrine d'artisan optimisé Google local. Générez des chantiers 24/7. Livraison 3 semaines.",
  },
};

export default function ArtisanPage() {
  return <ArtisanClient />;
}
