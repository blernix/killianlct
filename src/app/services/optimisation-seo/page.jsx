// Fichier: app/services/seo/page.jsx
// C'est le composant "Serveur" qui importe les données et votre composant client.

import SeoClient from './OptimisationSeoClient';
import { seoFaqData } from '@/app/data/faq/seo'; // On importe les NOUVELLES données FAQ

// Métadonnées pour le SEO de la page
export const metadata = {
  title: "Stratégie SEO & Référencement Local | Agence Web Melun (77) | Killian Lecrut",
  description: "Expert SEO pour professions libérales et artisans à Melun, Seine-et-Marne. Optimisation Google locale, référencement avocats, psychologues, ostéopathes, artisans. +150% de trafic qualifié en 6 mois.",
  keywords: "SEO Melun, référencement Seine-et-Marne, agence SEO avocat, optimisation site artisan, référencement psychologue, SEO ostéopathe, SEO local 77, Google My Business, optimisation Google, agence web Melun",
  
  alternates: {
    canonical: '/services/optimisation-seo',
  },

  openGraph: {
    title: "Stratégie SEO Durable pour une Croissance Continue | Agence Killian Lecrut",
    description: "Découvrez notre approche stratégique du SEO pour devenir une autorité dans votre domaine.",
    url: 'https://killian-lecrut.com/services/optimisation-seo',
    images: [
      {
        url: 'https://killian-lecrut.com/logoK.png',
        width: 1200,
        height: 630,
        alt: "Stratégie SEO & Référencement Local - Agence Killian Lecrut",
      },
    ],
  },
  twitter: {
    title: "Stratégie SEO Durable pour une Croissance Continue | Agence Killian Lecrut",
    description: "Découvrez notre approche stratégique du SEO pour devenir une autorité dans votre domaine.",
    images: ['https://killian-lecrut.com/logoK.png'],
  },
};

// Données structurées JSON-LD pour la page SEO
const seoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Stratégie SEO & Référencement Local',
  'description': 'Expert SEO pour professions libérales et artisans à Melun, Seine-et-Marne. Optimisation Google locale, référencement avocats, psychologues, ostéopathes, artisans.',
  'provider': {
    '@type': 'ProfessionalService',
    'name': 'Agence Killian Lecrut',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Melun',
      'postalCode': '77000',
      'addressRegion': 'Seine-et-Marne',
      'addressCountry': 'FR'
    },
    'telephone': '+33641970383',
    'url': 'https://killian-lecrut.com'
  },
  'areaServed': {
    '@type': 'GeoCircle',
    'geoMidpoint': {
      '@type': 'GeoCoordinates',
      'latitude': 48.539,
      'longitude': 2.659
    },
    'geoRadius': '50000'
  },
  'serviceType': 'SEO, Référencement naturel, Optimisation Google',
  'offers': [
    {
      '@type': 'Offer',
      'name': 'Audit & Recommandations SEO',
      'price': '800',
      'priceCurrency': 'EUR'
    },
    {
      '@type': 'Offer',
      'name': 'Partenariat de Croissance SEO',
      'price': '800',
      'priceCurrency': 'EUR',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'billingIncrement': 1,
        'priceType': 'MonthlySubscription'
      }
    }
  ]
};

export default function SeoPage() {
  return (
    <>
      {/* Injection des données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />
      {/* On passe les nouvelles données importées à votre composant client */}
      <SeoClient faqData={seoFaqData} />
    </>
  );
}
