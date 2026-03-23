# Mémoire de contexte - Agence Web Killian

## Design Swiss Clean - Guide Complet

### Qu'est-ce que le Swiss Clean Design ?
Le **Swiss Clean Design** est un système de design minimaliste inspiré du mouvement du design suisse (International Typographic Style). Il privilégie la clarté, la fonction, la lisibilité et l'utilisation rationnelle de l'espace.

### Principes Fondamentaux
1. **Minimalisme radical** : Suppression de tout élément superflu
2. **Grilles géométriques** : Structure rigoureuse basée sur des grilles
3. **Typographie claire** : Police sans-serif (Inter), hiérarchie visuelle nette
4. **Espacement généreux** : Breathing room entre les éléments
5. **Couleurs limitées** : Palette réduite et cohérente
6. **Bordures fines** : 1px, jamais épaisses
7. **Pas d'effets** : Pas de glassmorphism, backdrop-blur, ombres portées excessives
8. **Transitions subtiles** : Animations minimalistes et rapides

### Palette de Couleurs

#### Mode Light (par défaut)
- **Fond principal** : `#FAFAFA` (gris très clair)
- **Fond cartes** : `#FFFFFF` (blanc pur)
- **Hover cartes** : `#FAFAFA` (gris très clair)
- **Bordures normales** : `#E5E5E5` (gris clair)
- **Bordures hover** : `#0066FF` (bleu accent)
- **Grille background** : `#E5E5E5` opacity 20%
- **Titres** : `#2A2A2A` (noir doux)
- **Texte description** : `#666666` (gris moyen)
- **Labels** : `#666666` (gris moyen)
- **Accent principal** : `#0066FF` (bleu vif)
- **Ligne d'accent** : `#0066FF` 2px en haut des sections

#### Mode Dark (variante)
- **Fond principal** : `#0A0A0A` (noir profond)
- **Fond cartes** : `#1A1A1A` (gris très foncé)
- **Hover cartes** : `#1F1F1F` (gris foncé plus clair)
- **Bordures normales** : `#2A2A2A` (gris foncé)
- **Bordures hover** : `#0066FF` (bleu accent)
- **Grille background** : `#1A1A1A` opacity 40%
- **Titres** : `#FAFAFA` (blanc cassé)
- **Texte description** : `#999999` (gris moyen-clair)
- **Labels** : `#666666` (gris moyen-foncé)
- **Accent principal** : `#0066FF` (bleu vif - inchangé)
- **Ligne d'accent** : `#0066FF` 2px en haut des sections

### Typographie

**Police principale** : Inter (Google Fonts)
- **Weights utilisés** : 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)
- **Weight par défaut** : 300 (Light) pour tout le body
- **Titres H1** : 5xl-7xl, font-light (300), tracking-[-0.02em]
- **Titres H2** : 4xl-6xl, font-light (300), tracking-[-0.02em]
- **Titres H3** : 2xl-3xl, font-light (300)
- **Body** : Base size, font-light (300), leading-relaxed
- **Labels** : text-xs, font-medium (500), uppercase, tracking-[0.2em]

### Structure & Layout

#### Grille de fond (Background Grid)
```jsx
<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
```
- Taille des carreaux : 80×80px
- Couleur : `#E5E5E5` (light) ou `#1A1A1A` (dark)
- Opacité : 20% (light) ou 40% (dark)

#### Ligne d'accent
```jsx
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />
```
- Toujours en haut des sections importantes
- Hauteur : 2px
- Couleur : `#0066FF`

#### Cartes & Conteneurs
```jsx
<div className="bg-white border border-[#E5E5E5] p-8 hover:bg-[#FAFAFA] transition-colors duration-300">
```
- Fond : `bg-white` (light) ou `bg-[#1A1A1A]` (dark)
- Bordure : `border-[#E5E5E5]` (light) ou `border-[#2A2A2A]` (dark)
- Padding : `p-8` ou `p-10` selon le contexte
- Hover : Changement de couleur de fond uniquement
- Transition : `transition-colors duration-300`

#### Grilles de cartes
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5]">
  {/* Cards */}
</div>
```
- Utilise `gap-px` avec un background de couleur pour créer des séparateurs de 1px
- Background : `bg-[#E5E5E5]` (light) ou `bg-[#2A2A2A]` (dark)

### Composants Typiques

#### Hero Section
```jsx
<section className="relative min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-32">
  <div className="absolute inset-0 bg-[linear-gradient...] opacity-20" />
  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <h1 className="text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A]">
      Titre <span className="text-[#0066FF]">Accent</span>
    </h1>
  </div>
</section>
```

#### Labels / Tags
```jsx
<div className="inline-block px-4 py-1 border border-[#E5E5E5]">
  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
    Label
  </span>
</div>
```

#### Icônes dans des carrés
```jsx
<div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#0066FF] transition-colors">
  <Icon className="text-[#0066FF]" size={24} />
</div>
```

#### Boutons
```jsx
<button className="bg-[#0066FF] hover:bg-white text-white hover:text-[#0066FF] border border-[#0066FF] font-medium py-4 px-8 transition-all duration-300">
  Call to Action
</button>
```

### Ce qu'il faut ÉVITER

❌ **Glassmorphism** (`backdrop-blur`, `bg-white/10`)
❌ **Gradients complexes** (`bg-gradient-to-br from-purple-500 to-pink-500`)
❌ **Ombres portées excessives** (`shadow-2xl`, `drop-shadow`)
❌ **Animations complexes** (3D transforms, parallax excessif)
❌ **Bordures épaisses** (`border-4` sauf cas particulier)
❌ **Bordures arrondies** (`rounded-xl`, `rounded-full` - préférer angles droits)
❌ **Multiples couleurs d'accent** (s'en tenir au bleu `#0066FF`)
❌ **Typography weight lourde** (préférer 300-400 plutôt que 700-900)

### Animations Autorisées

✅ **Fade simple** : `opacity` 0 → 1
✅ **Translate subtil** : `translateY(10px)` sur fade-in
✅ **Color transitions** : `transition-colors duration-300`
✅ **Border color hover** : Passage de `#E5E5E5` à `#0066FF`
✅ **Arrow slide** : Flèche qui se décale de quelques px au hover

### Règles d'Application

1. **Cohérence absolue** : Appliquer le Swiss Clean PARTOUT (pages, composants, modales)
2. **Ne pas mélanger** : Pas de Swiss Clean + Glassmorphism hybride
3. **Hiérarchie visuelle** : Utiliser la taille, le poids et l'espacement, pas les couleurs multiples
4. **Lisibilité avant tout** : Contraste suffisant, texte jamais en dessous de 14px
5. **Responsive** : La grille et l'espacement doivent s'adapter au mobile

### Exemples d'Application

Ce design est appliqué sur :
- ✅ Toutes les pages du site killian-lecrut.com
- ✅ Pages sectorielles (Avocat, Psychologue, Ostéopathe, Artisan)
- ✅ Pages services (/services/site-vitrine, /services/e-commerce, etc.)
- ✅ Linktree personnel (contact.killian-lecrut.com) en version Dark

### Instruction pour une IA

"Applique le design Swiss Clean : fond `#FAFAFA`, cartes blanches avec bordures `#E5E5E5` de 1px, grille subtile 80×80px en arrière-plan, ligne d'accent bleue `#0066FF` de 2px en haut, typographie Inter Light (300), espacement généreux, pas de glassmorphism ni de gradients, hover subtil par changement de couleur de fond uniquement, icônes dans des carrés bordés, transitions douces (300ms)."

## Objectif du site
- **Conversion client** : le site est un outil de démarchage commercial
- Envoyé aux prospects après prise de contact
- Doit donner envie de signer immédiatement
- Tout doit être professionnel, carré, sans faille

## Positionnement VALIDÉ
**OPTION A : Spécialisé Métiers Réglementés**
- Expert sites web pour professions libérales et artisans locaux
- Cibles principales : Avocats, Psychologues, Ostéopathes, Artisans
- Angle : Conformité réglementaire + SEO local + performances
- Différenciation : Expertise métier (pas juste "agence web générique")

## Positionnement communication
- Orientation : marketing, communication, SEO
- Transparence totale sur les offres (ZÉRO astérisque)
- Être clair sur ce qui est inclus ou non
- Expliquer POURQUOI les tarifs varient selon profession (conformité, complexité)

## Offres et services (après refonte)

### Services principaux (page d'accueil) :
1. **Site Vitrine Professionnel** : Adapté au métier (conformité déontologique pour professions libérales, SEO local pour artisans)
2. **Optimisation SEO** : Audit + stratégie
3. **Espace Client Sécurisé** (ex "Application Web") : Portail pour partager documents (avocats) ou gérer RDV (santé)
4. **E-commerce** : Gardé pour artisans qui veulent vendre en ligne

### Tarification transparente par secteur :
- **Avocat** : à partir de 2 500€ (conformité CNB + dossier Ordre inclus)
- **Psychologue/Ostéopathe** : à partir de 1 800€ (RGPD santé renforcé)
- **Artisan** : à partir de 1 000€ (optimisation SEO local)

### Ce qui est TOUJOURS inclus :
- Développement sur-mesure (pas WordPress)
- Formation de 2h
- 3 mois de support technique

### Ce qui est OPTIONNEL (payant) :
- Interface admin Directus : à partir de 2 500€ (si besoin de gérer contenu régulièrement)
- Au-delà de 3 mois : forfait maintenance selon besoins

## Stack technique
- Next.js (front)
- Directus CMS (optionnel, headless)
- MedusaJS (e-commerce)
- n8n (automatisations)

## Architecture Pages Sectorielles (NOUVEAU)

**Système de template réutilisable :**
- Composant : `/src/components/secteurs/SecteurTemplate.jsx`
- Design : Swiss Clean appliqué uniformément
- Données : Fichiers `data.js` dans chaque dossier secteur
- Principe : 1 template + données = page sectorielle

**Pages utilisant le template :**
1. `/secteurs/professions-liberales/avocat/AvocatClient.jsx` → utilise `avocatData`
2. `/secteurs/professions-liberales/psychologue/PsychologueClient.jsx` → utilise `psychologueData`
3. `/secteurs/professions-liberales/osteopathe/OsteopatheClient.jsx` → utilise `osteopatheData`
4. `/secteurs/artisans/ArtisanClient.jsx` → utilise `artisanData`

**Sections conditionnelles du template :**
- Hero (toujours affiché)
- Challenges (si `data.challenges` existe)
- Conformity (si `data.conformity` existe - spécifique Avocat)
- Services (si `data.services` existe - spécifique Artisan)
- Features (toujours affiché si `data.features`)
- ROI Calculator (si `data.roi` existe)
- Comparison (si `data.comparison` existe)
- Pricing (toujours affiché si `data.pricing`)
- FAQ (toujours affiché si `data.faq`)
- Final CTA (toujours affiché)

**Avantages de cette architecture :**
- Design Swiss Clean garanti partout
- Ajout de nouvelles pages sectorielles en 5 min (créer fichier data.js + page.jsx)
- Modifications de design centralisées (1 seul fichier)
- Maintenance simplifiée

## État de la refonte
- ✅ **TERMINÉ** : Refonte textuelle page d'accueil
- ✅ **TERMINÉ** : Refonte complète pages sectorielles (template Swiss Clean)
- ✅ **TERMINÉ** : Clarification des incohérences (admin, support, tarifs)
- ✅ **TERMINÉ** : Harmonisation design (Swiss Clean partout)
- ✅ **TERMINÉ** : Page /services/site-vitrine refactorisée avec cartes sectorielles

## Note
Toujours expliquer la VALEUR, pas juste les features. Justifier les prix par la conformité réglementaire et l'expertise métier.
