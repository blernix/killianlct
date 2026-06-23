# Guide : Ajouter un nouvel article au blog

## 📍 Emplacement des articles
Tous les articles sont stockés dans :  
`src/app/data/articles/`  
Format : fichiers `.md` avec frontmatter YAML + contenu Markdown.

## 📄 Structure d'un article

### Frontmatter (en-tête YAML entre `---`)
```yaml
---
title: "Titre de l'article"                    # Obligatoire
slug: "url-seo-friendly"                       # Obligatoire - sans accents, avec tirets
date: "2024-01-15"                             # Obligatoire - format YYYY-MM-DD
updated: "2024-01-20"                          # Optionnel - date de mise à jour
author: "Killian Lecrut"                       # Optionnel
authorRole: "Expert Développement Web & SEO"   # Optionnel
authorImage: "/logoK.png"                      # Optionnel - chemin relatif
category: "catégorie"                          # Obligatoire - utilisé pour le filtrage
tags: ["tag1", "tag2", "tag3"]                 # Optionnel - tableau de mots-clés
excerpt: "Description courte (150-200 caractères)"  # Obligatoire - pour les cartes
featuredImage: "/logoK.png"                    # Optionnel - image mise en avant
readingTime: "8 min"                           # Optionnel - estimé manuellement
status: "published"                            # Obligatoire - "published" ou "draft"
---
```

### Contenu (Markdown)
Après le frontmatter, écrivez votre article en **Markdown standard** :
- Titres avec `#`, `##`, `###`
- **Gras**, *italique*, `code`
- Listes, liens, images
- Blocs de code avec \`\`\`langage
- Citations avec `>`
- Tableaux, etc.

## 🚀 Comment ajouter un nouvel article

### Étape 1 : Créer le fichier
```bash
cd src/app/data/articles/
touch nouveau-article-seo-friendly.md
```

### Étape 2 : Remplir le frontmatter
Copiez le modèle ci-dessus et adaptez :
- `slug` : doit correspondre au nom du fichier (sans `.md`)
- `title` : titre complet avec mots-clés
- `date` : date de publication
- `category` : une des catégories existantes ou nouvelle
- `status` : "published" pour être visible, "draft" pour brouillon

### Étape 3 : Écrire le contenu
Utilisez le Markdown pour formater votre article.  
**Astuce** : Inspirez-vous des articles existants pour le style.

### Étape 4 : Tester
1. Redémarrez le serveur dev : `npm run dev`
2. Visitez `/blog` pour voir l'article apparaître
3. Vérifiez la page individuelle : `/blog/votre-slug`

## 🎨 Flexibilité du système

### Formats d'articles différents
Le système accepte **n'importe quel format Markdown** :
- Articles techniques avec blocs de code
- Guides pratiques avec listes numérotées
- Études de cas avec tableaux
- Articles courts ou longs
- Avec ou sans images

### Champs personnalisés
Vous pouvez ajouter des champs custom dans le frontmatter :
```yaml
customField: "valeur"
difficulty: "débutant"
clientCase: true
```
Ces champs seront accessibles dans `article.customField` mais ne sont pas utilisés par défaut.

### Catégories et tags
- **Catégories** : regroupement principal (SEO, Conformité, Technique, Stratégie)
- **Tags** : mots-clés spécifiques pour la recherche
- Le système extrait automatiquement les catégories/tags uniques

## ⚠️ Points importants

### Filtre "draft"
Les articles avec `status: "draft"` **n'apparaissent pas** sur le site public.  
Utilisez ce statut pour travailler sur un article en cours.

### Images
- Utilisez des chemins relatifs : `/logoK.png` ou `/images/article.jpg`
- Les images doivent être placées dans `public/`
- Taille recommandée : 1200×630px pour les images featured

### SEO
- `slug` : détermine l'URL (ex: `/blog/guide-seo-local`)
- `title` : apparaît dans les résultats Google
- `excerpt` : description dans les cartes et meta description

## 🔍 Dépannage

### L'article n'apparaît pas
1. Vérifiez `status: "published"`
2. Vérifiez que le `slug` correspond au nom du fichier
3. Redémarrez `npm run dev`
4. Vérifiez la console pour les erreurs

### Erreur de format
- Le frontmatter doit être entre `---`
- Les dates au format `"YYYY-MM-DD"`
- Les tags sous forme de tableau YAML

### Filtres non fonctionnels
- Les catégories/tags sont extraits automatiquement
- Les majuscules/minuscules sont normalisées
- Un nouvel article peut nécessiter un redémarrage pour les filtres

## 📚 Exemple complet

```markdown
---
title: "Nouvelle stratégie SEO 2024 pour artisans"
slug: "nouvelle-strategie-seo-2024-artisans"
date: "2024-01-20"
updated: "2024-01-25"
author: "Killian Lecrut"
authorRole: "Expert SEO Local"
authorImage: "/logoK.png"
category: "seo"
tags: ["SEO 2024", "artisans", "Google", "algorithmes", "Melun"]
excerpt: "Les algorithmes Google ont changé en 2024. Découvrez les 3 nouvelles stratégies qui fonctionnent pour les artisans en Seine-et-Marne."
featuredImage: "/logoK.png"
readingTime: "10 min"
status: "published"
---

## Introduction

Le SEO local évolue rapidement...

## Les 3 nouvelles stratégies

1. **Optimisation Google Business Profile**
   - Photos régulières
   - Actualités mensuelles
   - Réponses aux avis

2. **Contenu hyper-local**
   ```javascript
   // Exemple de balisage local
   const localBusiness = {
     name: "Artisan Melun",
     area: "Seine-et-Marne (77)"
   };
   ```

3. **Vidéo courte sur site**

> **Statistique** : 78% des recherches locales aboutissent à un contact.

## Conclusion

Adaptez votre stratégie...
```

## 🔄 Mise à jour d'un article existant
1. Modifiez le fichier `.md`
2. Mettez à jour `updated: "2024-01-25"`
3. Le changement est instantané (rechargement de page)

---

**Prochain article** : Créez le fichier, remplissez le frontmatter, écrivez en Markdown, testez.  
Le système est conçu pour être flexible et accepter différents formats d'articles.