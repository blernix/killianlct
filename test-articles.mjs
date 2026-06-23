import { getAllArticles } from './src/app/lib/articles.js';
const articles = getAllArticles();
console.log('Total articles:', articles.length);
articles.forEach((a, i) => console.log(i+1, a.slug, a.title));
