import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Configuration de marked pour le rendu sécurisé
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false
});

const articlesDirectory = path.join(process.cwd(), 'src/app/data/articles');

// Récupérer tous les slugs d'articles
export function getAllArticleSlugs() {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md') && !fileName.startsWith('.') && fileName !== 'README.md')
      .map(fileName => fileName.replace(/\.md$/, ''))
      .filter(slug => slug && slug.trim().length > 0);
  } catch (error) {
    console.error('Error reading articles directory:', error);
    return [];
  }
}

// Récupérer les métadonnées d'un article sans le contenu
export function getArticleMetadata(slug) {
  if (!slug || typeof slug !== 'string') {
    console.error('Invalid slug provided:', slug);
    return null;
  }
  
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(fullPath)) {
      console.error(`Article file not found: ${slug}.md`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    // Valider les métadonnées requises
    if (!data.title || !data.date) {
      console.warn(`Article ${slug} missing required metadata (title or date)`);
    }
    
    return {
      slug,
      ...data,
      date: new Date(data.date).toISOString(),
      updated: data.updated ? new Date(data.updated).toISOString() : null,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

// Récupérer un article complet avec contenu rendu
export function getArticleBySlug(slug) {
  try {
    console.log(`🔍 getArticleBySlug called with slug: "${slug}"`);
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    console.log(`📁 Looking for file: ${fullPath}`);
    console.log(`📁 Directory exists: ${fs.existsSync(articlesDirectory)}`);
    
    const fileExists = fs.existsSync(fullPath);
    console.log(`📄 File exists: ${fileExists}`);
    
    if (!fileExists) {
      // List available files for debugging
      const files = fs.readdirSync(articlesDirectory);
      console.log(`📂 Available files: ${files.join(', ')}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Rendu du markdown en HTML
    const htmlContent = marked(content);
    
    console.log(`✅ Article found: "${data.title}"`);
    
    return {
      slug,
      ...data,
      content: htmlContent,
      date: new Date(data.date).toISOString(),
      updated: data.updated ? new Date(data.updated).toISOString() : null,
      readingTime: calculateReadingTime(content)
    };
  } catch (error) {
    console.error(`❌ Error reading article ${slug}:`, error);
    return null;
  }
}

// Récupérer tous les articles triés par date (plus récent d'abord)
export function getAllArticles() {
  const slugs = getAllArticleSlugs();
  const articles = slugs
    .map(slug => getArticleMetadata(slug))
    .filter(article => article && article.status !== 'draft') // Filtrer les brouillons
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return articles;
}

// Récupérer les articles par catégorie
export function getArticlesByCategory(category) {
  const articles = getAllArticles();
  return articles.filter(article => 
    article.category?.toLowerCase() === category.toLowerCase()
  );
}

// Récupérer les articles par tag
export function getArticlesByTag(tag) {
  const articles = getAllArticles();
  return articles.filter(article => 
    article.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

// Récupérer toutes les catégories uniques
export function getAllCategories() {
  const articles = getAllArticles();
  const categories = articles
    .map(article => article.category)
    .filter(Boolean);
  
  return [...new Set(categories)];
}

// Récupérer tous les tags uniques
export function getAllTags() {
  const articles = getAllArticles();
  const tags = articles
    .flatMap(article => article.tags || [])
    .filter(Boolean);
  
  return [...new Set(tags)];
}

// Calculer le temps de lecture (mots/minute)
function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

// Rechercher des articles par mot-clé
export function searchArticles(query) {
  const articles = getAllArticles();
  const lowerQuery = query.toLowerCase();
  
  return articles.filter(article => {
    const searchableText = [
      article.title,
      article.excerpt,
      article.content ? marked.parse(article.content) : '',
      article.tags?.join(' ') || '',
      article.category || ''
    ].join(' ').toLowerCase();
    
    return searchableText.includes(lowerQuery);
  });
}

// Récupérer les articles les plus récents (pour la page d'accueil)
export function getRecentArticles(limit = 3) {
  const articles = getAllArticles();
  return articles.slice(0, limit);
}

// Récupérer les articles suggérés (même catégorie/tags)
export function getRelatedArticles(currentSlug, limit = 3) {
  const currentArticle = getArticleMetadata(currentSlug);
  if (!currentArticle) return [];
  
  const articles = getAllArticles();
  const related = articles
    .filter(article => article.slug !== currentSlug)
    .map(article => {
      let score = 0;
      
      // Points pour même catégorie
      if (article.category === currentArticle.category) score += 3;
      
      // Points pour tags communs
      const commonTags = (article.tags || []).filter(tag => 
        (currentArticle.tags || []).includes(tag)
      ).length;
      score += commonTags;
      
      return { ...article, score };
    })
    .filter(article => article.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  
  return related;
}