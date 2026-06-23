import ArticleClient from './ArticleClient';
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from '@/app/lib/articles';
import { notFound } from 'next/navigation';

// Générer les chemins statiques
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  console.log(`📝 generateStaticParams: generating ${slugs.length} slugs`, slugs);
  return slugs.map((slug) => ({
    slug,
  }));
}

// Générer les métadonnées dynamiques
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article non trouvé | Blog Killian Lecrut',
      description: 'Cet article n\'existe pas ou a été déplacé.',
    };
  }

  return {
    title: `${article.title} | Blog Killian Lecrut`,
    description: article.excerpt,
    keywords: article.tags,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://killian-lecrut.com/blog/${article.slug}`,
      type: 'article',
      locale: 'fr_FR',
      publishedTime: article.date,
      modifiedTime: article.updated || article.date,
      authors: [article.author || 'Killian Lecrut'],
      section: article.category,
      tags: article.tags,
      images: [
        {
          url: article.featuredImage || 'https://killian-lecrut.com/logoK.png',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage || 'https://killian-lecrut.com/logoK.png'],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  console.log(`🔍 ArticlePage called with slug: "${slug}"`);
  const article = getArticleBySlug(slug);
  
  if (!article) {
    console.log(`❌ Article not found for slug: "${slug}"`);
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  // Données structurées JSON-LD pour l'article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.excerpt,
    'image': article.featuredImage || 'https://killian-lecrut.com/logoK.png',
    'datePublished': article.date,
    'dateModified': article.updated || article.date,
    'author': {
      '@type': 'Person',
      'name': article.author || 'Killian Lecrut',
      'jobTitle': article.authorRole || 'Expert Développement Web',
      'image': article.authorImage || '/logoK.png',
      'url': 'https://killian-lecrut.com'
    },
    'publisher': {
      '@type': 'ProfessionalService',
      'name': 'Agence Killian Lecrut',
      'url': 'https://killian-lecrut.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://killian-lecrut.com/logoK.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://killian-lecrut.com/blog/${article.slug}`
    },
    'articleSection': article.category,
    'keywords': article.tags?.join(', ')
  };

  // Données structurées pour le breadcrumb
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': 'https://killian-lecrut.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://killian-lecrut.com/blog'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.category,
        'item': `https://killian-lecrut.com/blog?category=${encodeURIComponent(article.category)}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': article.title,
        'item': `https://killian-lecrut.com/blog/${article.slug}`
      }
    ]
  };

  return (
    <>
      {/* Injection des données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleClient 
        article={article}
        relatedArticles={relatedArticles}
      />
    </>
  );
}