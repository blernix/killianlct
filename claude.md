# Mémoire de contexte - Agence Web Killian

## Design
- **Style imposé** : Swiss Clean (minimaliste, épuré, grille)
- Ne modifier le design que si explicitement demandé
- Cohérence visuelle primordiale pour la crédibilité
- Design Swiss Clean à appliquer PARTOUT (y compris pages sectorielles)

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
