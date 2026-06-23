import BlogClient from './BlogClient';
import { getAllArticles, getAllCategories, getAllTags } from '@/app/lib/articles';

// Métadonnées pour la page blog
export const metadata = {
  title: "Blog Expert | Agence Web Killian Lecrut - Conseils SEO, Conformité, Stratégie Digitale",
  description: "Articles experts sur la création de sites web pour professions libérales et artisans. SEO local, conformité RGPD/CNB, automatisation, développement sur-mesure. Découvrez nos conseils.",
  keywords: [
    "blog création site web",
    "conseils SEO avocat",
    "RGPD psychologue",
    "référencement artisan",
    "stratégie digitale",
    "automatisation n8n",
    "conformité CNB",
    "Next.js développement",
    "agence web Melun"
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Blog Expert | Agence Web Killian Lecrut",
    description: "Conseils pratiques pour professions libérales et artisans qui veulent développer leur présence digitale.",
    url: 'https://killian-lecrut.com/blog',
    images: [
      {
        url: 'https://killian-lecrut.com/logoK.png',
        width: 1200,
        height: 630,
        alt: "Blog Expert - Agence Web Killian Lecrut",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog Expert | Agence Web Killian Lecrut",
    description: "Conseils pratiques pour professions libérales et artisans qui veulent développer leur présence digitale.",
    images: ['https://killian-lecrut.com/logoK.png'],
  },
};

// Données structurées JSON-LD pour la page blog
const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Blog Expert - Agence Web Killian Lecrut',
  'description': 'Articles experts sur la création de sites web pour professions libérales et artisans.',
  'url': 'https://killian-lecrut.com/blog',
  'publisher': {
    '@type': 'ProfessionalService',
    'name': 'Agence Killian Lecrut',
    'url': 'https://killian-lecrut.com'
  }
};

export default async function BlogPage() {
  // Récupérer les données côté serveur
  const articles = getAllArticles();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <>
      {/* Injection des données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogClient 
        initialArticles={articles}
        initialCategories={categories}
        initialTags={tags}
      />
    </>
  );
}