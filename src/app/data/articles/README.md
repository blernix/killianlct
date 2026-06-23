# 📝 Guide : Ajouter un Article au Blog

## Structure d'un Article Markdown

Chaque article est un fichier `.md` avec du **Frontmatter YAML** en haut, suivi du contenu en Markdown.

### 📋 Frontmatter Obligatoire
```yaml
---
title: "Titre de l'article"
slug: "titre-url-seo-friendly"
date: "2024-05-15"
author: "Killian Lecrut"
authorRole: "Expert Développement Web"
authorImage: "/logoK.png"
category: "conformité"  # ou "seo", "technique", "stratégie"
tags: ["RGPD", "CNB", "avocat"]
excerpt: "Description courte pour les previews (150-160 caractères)"
featuredImage: "/logoK.png"  # ou chemin vers image spécifique
readingTime: "8 min"
status: "published"  # ou "draft" pour brouillon
---
```

### 📊 Catégories Disponibles
- **conformité** : RGPD, CNB, déontologie, législation
- **seo** : Référencement, Google My Business, SEO local
- **technique** : n8n, Directus, Next.js, développement
- **stratégie** : Positionnement, marketing, ROI, études de cas

### 🏷️ Tags Recommandés
Utilisez des tags précis et sectoriels :
- **Métiers** : avocat, psychologue, ostéopathe, artisan, plombier, électricien
- **Thématiques** : RGPD, SEO, automatisation, conformité, développement
- **Technologies** : Next.js, n8n, Directus, MedusaJS
- **Géographie** : Melun, Seine-et-Marne, Paris, Île-de-France

## ✍️ Format du Contenu

### Structure Typique
```markdown
## Introduction : Accroche + Chiffre clé

> **Statistique** : 42% des cabinets ont subi une cyberattaque...

## Partie 1 : Titre Clair

### Sous-titre explicatif
**Problème** : Description du problème client
**Solution** : Notre approche

```javascript
// Exemples de code si pertinent
const exemple = "utile";
```

### Checklist
- [ ] Point 1
- [ ] Point 2

## Partie 2 : Étude de Cas

**Client** : Description
**Résultats** : Chiffres concrets (+150% trafic, -30% coûts)

## Conclusion : Appel à l'Action

> **Prochain article** : "Titre du prochain article"
```

### Bonnes Pratiques Rédactionnelles
1. **Titres H2** pour les parties principales
2. **Titres H3** pour les sous-sections  
3. **Gras** pour les concepts importants
4. *Italique* pour les nuances
5. `Code` pour les termes techniques
6. > Citations pour les chiffres/faits marquants
7. Listes à puces pour les checklists/avantages

## 📁 Nommage des Fichiers

**Format** : `sujet-principal-seo-friendly.md`

**Exemples** :
- `rgpd-avocats-conformite-cnb.md`
- `seo-local-artisans-google.md`
- `automatisation-n8n-gagner-temps.md`

**Règles** :
- Uniquement lettres minuscules, tirets, chiffres
- Pas d'espaces, accents, caractères spéciaux
- Maximum 50 caractères
- Inclure mot-clé principal

## 🚀 Processus de Publication

### 1. Créer l'article
```bash
# Dans le dossier src/app/data/articles/
touch mon-nouvel-article.md
```

### 2. Rédiger le Frontmatter
Copier le template ci-dessus et adapter.

### 3. Écrire le contenu
Utiliser VS Code avec extension Markdown pour prévisualisation.

### 4. Tester localement
```bash
npm run dev
```
Visiter `http://localhost:3000/blog` pour vérifier l'affichage.

### 5. Commit & Déploiement
```bash
git add src/app/data/articles/mon-nouvel-article.md
git commit -m "Blog: Ajout article [titre]"
git push origin main
```
Le site se rebuild automatiquement sur Vercel.

## 🎨 Images & Médias

### Images Principales
- **Format** : JPEG ou PNG
- **Taille** : 1200×630px pour les images OG
- **Poids** : < 200KB
- **Dossier** : `/public/blog/images/`

### Exemple Frontmatter
```yaml
featuredImage: "/blog/images/rgpd-avocats.jpg"
```

### Optimisation
Utiliser [Squoosh](https://squoosh.app/) ou [TinyPNG](https://tinypng.com/) avant upload.

## 🔍 Optimisation SEO

### Titre (Title)
- 50-60 caractères
- Inclure mot-clé principal + " | Killian Lecrut"
- Ex: "RGPD pour Avocats : Checklist CNB 2023 | Killian Lecrut"

### Description (Excerpt)
- 150-160 caractères
- Inclure bénéfice principal + appel à l'action
- Unique pour chaque article

### URL (Slug)
- Court, descriptif, mots-clés
- Pas d'articles, prépositions
- Ex: `/blog/rgpd-avocats-conformite` ✅
- Ex: `/blog/comment-faire-un-site-pour-avocat` ❌ (trop long)

## 📈 Suivi & Analytics

### Données Structurées
Chaque article inclut automatiquement :
- **Article Schema.org** pour Google
- **Breadcrumb navigation** 
- **Author info** (Killian Lecrut)

### Métriques à Suivre
1. **Positions Google** : Mots-clés ciblés
2. **Trafic organique** : Google Analytics
3. **Temps moyen** : > 2 minutes idéal
4. **Taux de rebond** : < 60% idéal

## 🛠️ Dépannage

### L'article n'apparaît pas
- Vérifier `status: "published"`
- Redémarrer `npm run dev`
- Vérifier les erreurs dans la console

### Erreur de build
```bash
npm run build
```
Vérifier les erreurs dans le terminal.

### Image non chargée
- Vérifier le chemin (commence par `/`)
- Vérifier que le fichier existe dans `public/`

## 📚 Exemples Complets

Voir les articles existants :
- `rgpd-avocats-conformite-cnb.md`
- `seo-local-artisans-premiere-page-google.md`
- `automatisation-n8n-artisans-gagner-temps.md`

## 🤝 Contribution

Vous pouvez :
1. **Demander à une IA** : "Écris-moi un article sur [sujet] pour mon blog d'agence web"
2. **Reprendre des études de cas** clients (anonymisées)
3. **Traduire des articles** anglais de qualité
4. **Interviewer des experts** (juristes, SEO)

**Temps estimé** : 2-3 heures/article de qualité.

---

**Besoin d'aide ?** Contactez Killian : killian.lecrut@gmail.com