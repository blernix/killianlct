import {
  Shield,
  Lock,
  Layers,
  Users,
  Settings,
  Database,
  Eye,
  Zap,
  RefreshCw,
  FileText,
  Image,
  Video,
  ShoppingBag,
  Calendar,
  Mail,
  CheckCircle,
  AlertCircle,
  X,
  TrendingUp,
  Sparkles,
  Code,
  ArrowRight,
  Globe,
  Palette,
  Box
} from 'lucide-react';

export const directusData = {
  hero: {
    eyebrow: "Interface d'Administration sur Mesure avec Directus",
    title: "Gérez Votre Contenu Sans Jamais Risquer de Tout Casser",
    subtitle: "Oubliez WordPress et ses 50 menus techniques. Nous créons un espace d'administration épuré où vous ne voyez QUE ce qui vous concerne. Modifiez vos textes, images et pages en toute sérénité, sans toucher au code.",
    ctaLabel: "Découvrir Directus",
    microPromises: [
      "Interface sur-mesure livrée en 3 semaines",
      "Formation incluse (2h)",
      "Aucun risque de casser le site",
      "API incluse pour intégrations futures"
    ]
  },

  challenges: [
    {
      icon: AlertCircle,
      title: "WordPress : trop de menus, trop de risques",
      problem: "Vous voulez changer une image sur votre site ? Avec WordPress, vous devez naviguer entre 15 menus, éviter de cliquer sur 'Apparence' (sinon le design peut sauter), ne pas toucher aux plugins (sinon tout plante), et prier pour ne pas supprimer accidentellement une page SEO-stratégique. Résultat : vous appelez votre dev pour un simple changement de texte.",
      solution: "Avec Directus configuré sur-mesure, votre interface admin ne contient QUE vos contenus : Articles, Pages, Produits. Pas de menu technique, pas de plugins à mettre à jour, pas de risque. Vous modifiez vos textes en 30 secondes, sans stress. L'interface est conçue POUR VOUS, pas pour des développeurs.",
      stat: "75% des propriétaires de sites WordPress n'osent pas toucher à leur admin"
    },
    {
      icon: Lock,
      title: "Peur de casser le site en production",
      problem: "Vous avez déjà supprimé une page par erreur ? Modifié un réglage SEO sans le savoir ? Cassé le design en éditant du CSS ? Avec les CMS traditionnels, chaque action est un risque. Et quand ça plante, c'est l'angoisse : site down = perte de CA, clients mécontents, stress immense.",
      solution: "Architecture Directus : vos contenus (textes, images) sont séparés du code (design, SEO, fonctionnalités). IMPOSSIBLE de casser le site en modifiant un article. Permissions granulaires par rôle : l'éditeur ne voit que les articles, le manager voit les produits, l'admin voit tout. Historique des versions = undo illimité.",
      stat: "1 site WordPress sur 3 est piraté ou planté suite à une mauvaise manip"
    },
    {
      icon: RefreshCw,
      title: "Mises à jour cauchemardesque",
      problem: "WordPress vous harcèle pour mettre à jour : thème, plugins, PHP, core. Chaque mise à jour = roulette russe. Soit ça marche, soit 3 plugins deviennent incompatibles et tout plante. Vous devez payer un dev 300€ pour débugger. Ou pire : votre site reste vulnérable parce que vous n'osez plus toucher aux mises à jour.",
      solution: "Directus est headless : une seule mise à jour (le core Directus), pas de plugins à gérer. Votre frontend (site public) est séparé = zéro impact des mises à jour backend. Et surtout : on gère les mises à jour pour vous. Vous ne voyez rien, tout est toujours à jour et sécurisé sans votre intervention.",
      stat: "50% des sites WordPress piratés utilisaient des plugins obsolètes"
    }
  ],

  process: {
    title: "Notre Méthode en 4 Étapes",
    subtitle: "De la conception à la mise en production, un process éprouvé sur 30+ projets Directus",
    steps: [
      {
        icon: Database,
        number: "01",
        title: "Architecture des Contenus (Semaine 1)",
        description: "Nous cartographions vos besoins : quels types de contenus (articles, produits, équipe, témoignages...) ? Quels champs pour chaque type ? Qui peut modifier quoi ? On crée la structure de données optimale avant de coder quoi que ce soit.",
        deliverables: ["Schéma de données validé", "Liste des rôles utilisateurs", "Permissions par profil", "Workflow de validation si besoin"],
        duration: "1 semaine"
      },
      {
        icon: Settings,
        number: "02",
        title: "Configuration Directus (Semaine 2)",
        description: "Installation de Directus sur serveur sécurisé, création des collections de données, configuration de l'interface admin (champs, traductions, validations), mise en place des rôles et permissions. Tests avec données fictives.",
        deliverables: ["Directus installé et configuré", "Collections de données créées", "Interface admin personnalisée", "Rôles et permissions actifs"],
        duration: "1 semaine"
      },
      {
        icon: Code,
        number: "03",
        title: "Intégration avec Votre Site (Semaine 3)",
        description: "Connexion de votre site web à Directus via API. Les contenus que vous modifiez dans l'admin apparaissent instantanément sur le site. Optimisation des performances (cache, CDN pour images). Tests de bout en bout.",
        deliverables: ["API REST configurée", "Site connecté à Directus", "Cache optimisé", "Tests validés"],
        duration: "1 semaine"
      },
      {
        icon: Users,
        number: "04",
        title: "Formation & Mise en Production",
        description: "Formation de vos équipes à l'utilisation de l'interface (2h) : créer/modifier/supprimer des contenus, gérer les médias, utiliser l'éditeur WYSIWYG. Documentation complète. Puis mise en production avec monitoring.",
        deliverables: ["Formation équipe (2h)", "Documentation utilisateur", "Admin en production", "1 mois de support inclus"],
        duration: "1 semaine + 1 mois de suivi"
      }
    ]
  },

  useCases: {
    title: "Types de Contenus que Nous Gérons avec Directus",
    subtitle: "De simples articles de blog aux catalogues e-commerce complexes",
    cases: [
      {
        icon: FileText,
        title: "Blog & Articles",
        description: "Éditeur WYSIWYG intuitif, gestion des catégories, tags, auteurs, SEO (meta title/description), programmation de publication, brouillons, gestion des médias intégrée.",
        examples: "Blog d'entreprise, actualités, guides"
      },
      {
        icon: ShoppingBag,
        title: "Catalogue Produits",
        description: "Fiches produits complètes : nom, description, prix, variations (tailles, couleurs), stock, galerie photos, vidéos, références, catégories, filtres. Exports CSV pour compatibilité.",
        examples: "E-commerce, catalogue B2B, marketplace"
      },
      {
        icon: Image,
        title: "Galeries & Portfolios",
        description: "Upload d'images en masse, crop/resize automatique, organisation par projets/catégories, lightbox, descriptions, crédits photo, métadonnées EXIF.",
        examples: "Agences créatives, photographes, architectes"
      },
      {
        icon: Users,
        title: "Équipe & Témoignages",
        description: "Profils d'équipe (nom, poste, bio, photo, réseaux sociaux), témoignages clients (note, commentaire, photo, entreprise), certifications, récompenses.",
        examples: "Sites corporate, cabinets, agences"
      },
      {
        icon: Calendar,
        title: "Événements & Actualités",
        description: "Calendrier d'événements (date, lieu, description, inscription), actualités avec date de publication, archivage automatique, notifications.",
        examples: "Associations, événementiel, formations"
      },
      {
        icon: Globe,
        title: "Pages & Landing Pages",
        description: "Création de pages custom avec blocs modulables (hero, CTA, témoignages, FAQ...). Preview en temps réel, gestion des URLs, redirections 301, SEO par page.",
        examples: "Sites vitrines, landing pages marketing"
      }
    ]
  },

  features: [
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Authentification 2FA, gestion des sessions, API avec tokens JWT, logs d'activité pour traçabilité, sauvegardes quotidiennes automatiques, hébergement sécurisé en Europe.",
      technical: "OWASP Top 10 + ISO 27001"
    },
    {
      icon: Users,
      title: "Gestion des Rôles Avancée",
      description: "Rôles granulaires par équipe : admin voit tout, éditeur ne modifie que les articles, contributeur crée des brouillons. Permissions par collection, par champ, par action (lecture/écriture/suppression).",
      technical: "RBAC (Role-Based Access Control)"
    },
    {
      icon: Layers,
      title: "Architecture Headless",
      description: "Directus est découplé de votre site web. Vous pouvez utiliser les mêmes contenus sur site web, app mobile, newsletter, affichages en magasin. Une seule source de données pour tous vos canaux.",
      technical: "API-first architecture"
    },
    {
      icon: Palette,
      title: "Interface Personnalisable",
      description: "Nous configurons l'interface selon vos besoins : regroupement de champs, onglets, conditions d'affichage, traductions, aide contextuelle, prévisualisation. Chaque utilisateur voit uniquement ce qui le concerne.",
      technical: "Custom layouts & modules"
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Cache intelligent pour API, CDN pour les images, optimisation automatique des médias (compression, resize, webp), lazy loading. Votre site reste rapide même avec 10 000 articles.",
      technical: "Cache Redis + CDN Cloudflare"
    },
    {
      icon: RefreshCw,
      title: "Historique & Versions",
      description: "Chaque modification est trackée : qui a modifié quoi et quand. Possibilité de revenir à une version antérieure en un clic. Workflow de validation optionnel (brouillon → relecture → publication).",
      technical: "Version control natif"
    }
  ],

  pricing: {
    title: "Investissement pour Votre Interface Directus",
    subtitle: "Tarifs transparents pour une solution professionnelle",
    packages: [
      {
        name: "Interface Simple",
        price: "2 500€",
        description: "Pour sites vitrines avec peu de contenus",
        features: [
          "Architecture de contenu (1 semaine)",
          "Installation Directus sur serveur sécurisé",
          "3 collections de données max (ex: Pages, Articles, Équipe)",
          "Interface admin épurée et personnalisée",
          "2 rôles utilisateurs (admin + éditeur)",
          "Intégration API avec votre site",
          "Gestion des médias avec optimisation auto",
          "Éditeur WYSIWYG pour textes",
          "Formation équipe (1h)",
          "Documentation utilisateur",
          "1 mois de support technique",
          "Hébergement 1ère année inclus"
        ],
        cta: "Pour petits projets",
        timeframe: "3 semaines"
      },
      {
        name: "Interface Professionnelle",
        price: "4 500€",
        description: "Pour sites avec besoins avancés",
        features: [
          "Tout de l'Interface Simple +",
          "Collections illimitées de données",
          "5+ rôles utilisateurs personnalisés",
          "Permissions granulaires avancées",
          "Workflow de validation (brouillon → publication)",
          "Multilingue (gestion contenus en plusieurs langues)",
          "Historique des versions + rollback",
          "Champs conditionnels et relations complexes",
          "Preview des contenus avant publication",
          "Intégrations externes (Zapier, n8n, etc.)",
          "Dashboard de statistiques",
          "Formation avancée (2h)",
          "3 mois de support technique prioritaire",
          "Documentation technique complète"
        ],
        cta: "La plus populaire",
        highlighted: true,
        timeframe: "4 semaines"
      },
      {
        name: "Solution Enterprise",
        price: "Sur devis",
        description: "Pour plateformes complexes multi-sites",
        features: [
          "Tout de l'Interface Professionnelle +",
          "Multi-tenancy (plusieurs sites depuis un admin)",
          "SSO / LDAP / Active Directory",
          "Workflows avancés de validation",
          "Synchronisation avec systèmes existants (ERP, CRM)",
          "Migration de données depuis ancien CMS",
          "Développement d'extensions custom",
          "Interface white-label à vos couleurs",
          "Formation équipe étendue (4h+)",
          "Support 24/7 avec SLA",
          "Infrastructure dédiée haute-disponibilité",
          "Audit de sécurité par pentester",
          "Maintenance proactive incluse 12 mois"
        ],
        cta: "Discutons-en",
        timeframe: "6+ semaines"
      }
    ],
    note: "Tous nos forfaits incluent : hébergement sécurisé 1ère année, sauvegardes quotidiennes, SSL/TLS, et garantie satisfaction.",
    maintenance: {
      title: "Maintenance & Support Continu",
      description: "Directus nécessite peu de maintenance, mais nous proposons un accompagnement pour évoluer avec vos besoins",
      plans: [
        {
          name: "Support Basique",
          price: "150€/mois",
          includes: ["Monitoring 24/7", "Mises à jour Directus", "Sauvegardes quotidiennes", "Support email sous 48h", "Correctifs de bugs"]
        },
        {
          name: "Évolution Active",
          price: "500€/mois",
          includes: ["Tout du Support Basique +", "2h de dev par mois", "Ajout de collections/champs", "Support prioritaire sous 4h", "Optimisations performance"]
        },
        {
          name: "Partenariat",
          price: "1 200€/mois",
          includes: ["Tout de l'Évolution Active +", "8h de dev par mois", "Nouvelles fonctionnalités", "Formation continue équipe", "Conseil stratégique"]
        }
      ]
    }
  },

  comparison: {
    title: "Directus vs WordPress vs Strapi",
    subtitle: "Pourquoi Directus est notre choix pour 90% des projets",
    categories: [
      {
        name: "Facilité d'utilisation",
        wordpress: "5/10 (trop de menus)",
        directus: "9/10 (sur-mesure)",
        strapi: "6/10 (technique)"
      },
      {
        name: "Risque de casser le site",
        wordpress: "Élevé",
        directus: "Quasi nul",
        strapi: "Moyen"
      },
      {
        name: "Plugins à gérer",
        wordpress: "20-50 plugins",
        directus: "0 plugin",
        strapi: "Peu"
      },
      {
        name: "Mises à jour complexes",
        wordpress: "Oui (thème + plugins)",
        directus: "Non (1 seul update)",
        strapi: "Moyennes"
      },
      {
        name: "Interface personnalisable",
        wordpress: "Limité",
        directus: "Total",
        strapi: "Moyen"
      },
      {
        name: "Gestion des rôles",
        wordpress: "Basique",
        directus: "Avancée",
        strapi: "Avancée"
      },
      {
        name: "API native",
        wordpress: "REST API complexe",
        directus: "REST + GraphQL natif",
        strapi: "REST + GraphQL"
      }
    ],
    columns: [
      { key: "wordpress", label: "WordPress", highlighted: false },
      { key: "directus", label: "Directus (Notre Choix)", highlighted: true },
      { key: "strapi", label: "Strapi", highlighted: false }
    ]
  },

  testimonial: {
    name: "Claire D.",
    role: "Responsable Marketing",
    company: "Agence Immobilière",
    location: "Fontainebleau (77)",
    photo: "/testimonials/default-avatar.jpg",
    quote: "Avant Directus, je devais appeler notre dev à chaque fois que je voulais ajouter un bien immobilier sur le site. Avec WordPress, j'avais peur de tout casser. Maintenant, j'ai une interface ultra-simple avec juste mes champs : titre, prix, photos, description. Je mets en ligne 10 biens par semaine en totale autonomie.",
    result: "100% autonome",
    metrics: {
      before: "1h/bien (avec l'aide du dev)",
      after: "5min/bien (en autonomie)",
      satisfaction: "Interface parfaite pour mon métier"
    }
  },

  faq: {
    title: "Questions Fréquentes sur Directus",
    subtitle: "Tout ce que vous devez savoir sur cette solution de gestion de contenu",
    items: [
      {
        question: "C'est quoi Directus exactement ?",
        answer: "Directus est un headless CMS open-source qui se place entre votre base de données et votre site web. Contrairement à WordPress où tout est mélangé (code, design, contenus), Directus sépare proprement vos données de votre site. Résultat : une interface d'administration épurée, sur-mesure, sans aucun menu technique inutile. Vous ne gérez QUE vos contenus (articles, produits, pages...) dans une interface pensée pour VOUS, pas pour des développeurs. Et surtout : impossible de casser le site en modifiant un texte."
      },
      {
        question: "En quoi c'est mieux que WordPress ?",
        answer: "WordPress mélange tout : code, design, contenus, plugins. Résultat : interface surchargée de 50 menus techniques, risque de tout casser à chaque modification, mises à jour cauchemardesque, plugins incompatibles. Avec Directus : (1) Interface sur-mesure = vous ne voyez que VOS contenus. (2) Architecture séparée = IMPOSSIBLE de casser le design ou le code. (3) Zéro plugin à gérer = zéro conflit, zéro faille de sécurité. (4) Une seule mise à jour (Directus core) gérée par nous = vous ne voyez rien. (5) API native = vous pouvez réutiliser vos contenus sur app mobile, newsletter, etc."
      },
      {
        question: "Est-ce que mes contenus seront bloqués dans Directus ?",
        answer: "NON, au contraire. Avec WordPress, vos contenus sont emprisonnés dans la base de données MySQL de WordPress, avec du code spécifique aux plugins. Migrer = cauchemar. Avec Directus, vos données sont dans une base PostgreSQL/MySQL propre, sans code propriétaire. Vous possédez 100% de vos données. Si demain vous voulez changer de solution, on exporte tout en JSON/CSV en 5 minutes. Directus est open-source = zéro vendor lock-in."
      },
      {
        question: "Combien de temps pour mettre en place Directus ?",
        answer: "Un projet simple (3 collections de données type Pages/Articles/Équipe) prend 3 semaines : 1 semaine d'architecture, 1 semaine de config Directus, 1 semaine d'intégration avec votre site. Un projet avancé (multilingue, workflows de validation, 10+ collections, rôles complexes) prend 4-6 semaines. Nous travaillons en sprints avec validation chaque semaine, donc vous voyez l'interface admin grandir en temps réel."
      },
      {
        question: "Qui peut utiliser l'interface Directus ?",
        answer: "Tout le monde. Nous configurons l'interface pour qu'elle soit intuitive même pour des profils non-techniques. Par exemple : votre responsable marketing voit uniquement 'Créer un article' avec un éditeur de texte type Word. Votre commercial voit 'Ajouter un produit' avec les champs prix/description/photos. Votre stagiaire voit uniquement 'Créer un brouillon' (sans pouvoir publier). Chaque utilisateur a une interface simplifiée selon son rôle. Formation de 1-2h suffisante."
      },
      {
        question: "Que se passe-t-il si je fais une erreur dans l'admin ?",
        answer: "Architecture protégée : (1) Vous ne pouvez pas casser le design/code = séparation totale contenus/site. (2) Historique des versions = rollback en 1 clic vers une version antérieure. (3) Permissions granulaires = si vous n'êtes pas admin, vous ne pouvez pas supprimer de pages critiques. (4) Workflow de validation optionnel = un éditeur crée un brouillon, un admin valide avant publication. (5) Sauvegardes quotidiennes = on peut restaurer n'importe quelle donnée en cas de problème. Bref : Directus est conçu pour éviter les erreurs humaines."
      },
      {
        question: "Est-ce que Directus est adapté à l'e-commerce ?",
        answer: "OUI, totalement. On utilise Directus pour gérer les catalogues produits de boutiques en ligne : fiches produits (nom, description, prix, stock, variations, galerie photos), catégories, filtres, promotions. Directus stocke les données produits, et votre frontend (Next.js, Shopify, WooCommerce...) consomme l'API Directus. Avantages : gestion produits ultra-simple pour vos équipes, synchronisation multi-canal (site web + app mobile + marketplace), performances optimales avec cache."
      },
      {
        question: "Quel est le coût après la mise en place ?",
        answer: "Directus est open-source = licence gratuite. Coûts après livraison : (1) Hébergement : 20-50€/mois (inclus 1ère année dans nos forfaits). (2) Maintenance optionnelle : 150-500€/mois selon vos besoins (monitoring, mises à jour, support). (3) Évolutions futures : à la demande (ajout de collections, nouvelles fonctionnalités). Bref : pas d'abonnement récurrent obligatoire. Vous payez une fois, vous êtes propriétaire de tout."
      }
    ]
  },

  badges: [
    {
      label: "Open Source",
      icon: Code
    },
    {
      label: "Interface Sur-Mesure",
      icon: Palette
    },
    {
      label: "Zéro Risque",
      icon: Shield
    },
    {
      label: "API Incluse",
      icon: Zap
    }
  ]
};
