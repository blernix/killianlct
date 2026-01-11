import {
  Search,
  Users,
  Building2,
  Lock,
  TrendingUp,
  Euro,
  ImageIcon,
  MapPin,
  Mail,
  Phone,
  Star,
  Award,
  HelpCircle,
  CheckCircle,
  Wrench,
  Camera,
  MessageSquare,
  FileText,
  Shield
} from 'lucide-react';

export const artisanData = {
  hero: {
    eyebrow: "Sites Web pour Artisans & Professionnels du Bâtiment",
    title: "Le Site Web Qui Génère des Chantiers,",
    titleGradient: "Pas Juste des Visites",
    subtitle: "Vous êtes excellent dans votre métier, mais invisible sur Google. Nous créons le site vitrine qui attire des clients locaux qualifiés pendant que vous êtes sur vos chantiers. Optimisé pour Melun, Seine-et-Marne et Île-de-France.",
    ctaLabel: "Obtenir mon devis artisan",
    microPromises: [
      "Site livré en 3 semaines",
      "Optimisé Google Maps & recherche locale",
      "Galerie photos de vos réalisations",
      "Hébergement & maintenance inclus"
    ]
  },

  challenges: [
    {
      icon: Search,
      title: "Invisible sur Google Local",
      problem: "Vos clients potentiels cherchent 'plombier Melun', 'électricien Seine-et-Marne' ou 'menuisier 77' et trouvent vos concurrents. Sans site web optimisé pour la recherche locale, vous perdez 10-15 chantiers par mois au profit d'artisans moins qualifiés mais mieux référencés.",
      solution: "Nous créons un site vitrine optimisé pour le référencement local : Google Business Profile configuré, mots-clés géolocalisés (ville, département, quartiers), pages dédiées par service (plomberie, électricité, etc.) et zone d'intervention claire. Votre entreprise apparaît dans les 3 premiers résultats Google et Google Maps.",
      stat: "78% des recherches locales aboutissent à un contact dans les 24h"
    },
    {
      icon: Users,
      title: "Dépendance au Bouche-à-Oreille",
      problem: "Le bouche-à-oreille fonctionne, mais ce n'est pas scalable. Vous ne pouvez pas contrôler le flux de nouveaux clients, et les périodes creuses peuvent durer des semaines. Impossible de planifier votre activité et vos embauches sereinement.",
      solution: "Un site web bien référencé = un canal d'acquisition constant et prévisible. Formulaire de contact + devis en ligne captent les demandes 24/7, même quand vous êtes sur chantier. Vous contrôlez enfin votre flux de leads et pouvez anticiper votre planning.",
      stat: "Un site bien optimisé génère 20-30 demandes qualifiées par mois"
    },
    {
      icon: Building2,
      title: "Site Amateur ou Juste Facebook",
      problem: "Avoir seulement une page Facebook ou un site Wix amateur détruit votre crédibilité. Les clients comparent : face à un concurrent avec un site professionnel qui inspire confiance, ils choisissent l'autre, même si vous êtes meilleur techniquement.",
      solution: "Site vitrine moderne et professionnel avec galerie photos avant/après de vos réalisations, présentation claire de vos services, certifications affichées (RGE, Qualibat, etc.). Design sobre qui inspire confiance et rassure sur votre professionnalisme.",
      stat: "83% des clients vérifient le site web avant de contacter un artisan"
    }
  ],

  services: [
    {
      title: "Plombiers & Chauffagistes",
      icon: Wrench,
      keywords: ["Plombier Melun", "Chauffagiste 77", "Dépannage plomberie", "Installation chaudière"],
      description: "Site optimisé pour vos interventions urgentes et installations"
    },
    {
      title: "Électriciens",
      icon: Wrench,
      keywords: ["Électricien Seine-et-Marne", "Installation électrique", "Dépannage électricité"],
      description: "Mise en avant de vos habilitations et certifications électriques"
    },
    {
      title: "Menuisiers & Ébénistes",
      icon: Wrench,
      keywords: ["Menuisier 77", "Ébéniste Melun", "Menuiserie sur-mesure"],
      description: "Galerie photos pour valoriser votre savoir-faire artisanal"
    },
    {
      title: "Maçons & Peintres",
      icon: Wrench,
      keywords: ["Maçon Melun", "Peintre en bâtiment", "Ravalement façade"],
      description: "Photos avant/après pour prouver la qualité de vos réalisations"
    },
    {
      title: "Couvreurs & Charpentiers",
      icon: Wrench,
      keywords: ["Couvreur 77", "Charpentier Seine-et-Marne", "Rénovation toiture"],
      description: "Valorisation de vos interventions spécialisées et garanties décennales"
    },
    {
      title: "Paysagistes & Jardiniers",
      icon: Wrench,
      keywords: ["Paysagiste Melun", "Création jardin", "Entretien espaces verts"],
      description: "Portfolios de jardins et aménagements extérieurs"
    }
  ],

  features: [
    {
      icon: ImageIcon,
      title: "Galerie Photos Avant/Après",
      description: "Mettez en valeur vos plus belles réalisations avec une galerie photo professionnelle. Rien ne vaut des images concrètes pour rassurer et convaincre vos prospects.",
      technical: "Galerie responsive optimisée pour le chargement rapide"
    },
    {
      icon: MapPin,
      title: "Zone d'Intervention Claire",
      description: "Carte interactive de votre zone de couverture (Melun, Fontainebleau, Provins, etc.). Vos clients savent immédiatement si vous intervenez chez eux.",
      technical: "Intégration Google Maps avec rayon d'intervention"
    },
    {
      icon: Mail,
      title: "Formulaire Devis Rapide",
      description: "Formulaire de contact pré-qualifiant : type de travaux, surface, urgence, localisation. Vous recevez des demandes déjà filtrées et qualifiées.",
      technical: "Notifications email instantanées + accusé de réception"
    },
    {
      icon: Star,
      title: "Avis Clients & Témoignages",
      description: "Intégration de vos avis Google, recommandations clients avec photos des chantiers. La preuve sociale est le meilleur argument de vente.",
      technical: "Import automatique des avis Google Business"
    },
    {
      icon: Award,
      title: "Certifications & Labels",
      description: "Mise en avant de vos certifications professionnelles (RGE, Qualibat, Qualifelec, etc.), assurances décennales et garanties. Rassure immédiatement les prospects.",
      technical: "Section dédiée avec logos et numéros de certification"
    },
    {
      icon: Phone,
      title: "Bouton Appel Direct Mobile",
      description: "Bouton 'Appeler maintenant' visible sur mobile. Les clients pressés (urgences, dépannages) vous contactent en un clic.",
      technical: "Click-to-call optimisé pour mobile"
    },
    {
      icon: FileText,
      title: "Description Détaillée des Services",
      description: "Pages dédiées par type d'intervention : dépannage, installation, rénovation, entretien. Chaque service est détaillé avec prix indicatifs si vous le souhaitez.",
      technical: "Structure SEO optimisée par service"
    },
    {
      icon: Shield,
      title: "Tarifs & Transparence",
      description: "Affichage de fourchettes tarifaires ou grille de prix pour les prestations courantes. Filtre les demandes non sérieuses et rassure sur votre honnêteté.",
      technical: "Section tarification claire et modulable"
    }
  ],

  faq: {
    title: "Questions Fréquentes des Artisans",
    subtitle: "Tout ce que vous devez savoir sur la création d'un site pour votre activité",
    items: [
      {
        question: "Pourquoi un site web alors que j'ai déjà du travail avec le bouche-à-oreille ?",
        answer: "Le bouche-à-oreille est excellent, mais imprévisible. Un site web vous donne un canal d'acquisition constant que vous contrôlez. Résultat : vous ne subissez plus les périodes creuses, vous pouvez planifier vos embauches sereinement, et vous choisissez vos chantiers au lieu de prendre tout ce qui vient. De plus, 78% des gens cherchent un artisan sur Google avant de décider - si vous n'êtes pas visible, vous laissez des clients à vos concurrents."
      },
      {
        question: "Je n'ai pas le temps de gérer un site, je suis sur les chantiers toute la journée",
        answer: "C'est justement pour ça qu'un site vitrine est idéal : une fois en ligne, il travaille pour vous 24/7 sans intervention de votre part. Vous n'avez rien à gérer au quotidien. Le formulaire de contact capte les demandes pendant que vous travaillez, et vous les consultez le soir. Si vous souhaitez ajouter des photos de réalisations, nous pouvons soit le faire pour vous (forfait maintenance), soit vous former en 1h à le faire vous-même - c'est aussi simple qu'envoyer un email."
      },
      {
        question: "Combien coûte un site web pour artisan ?",
        answer: "Nos sites pour artisans démarrent à 1 500€ + 35€/mois pour un site essentiel (5 pages, galerie photos, formulaire contact, SEO local de base). Pour un site professionnel complet avec blog, avis clients, devis en ligne et SEO local avancé, comptez 2 500€ + 50€/mois. L'abonnement mensuel inclut l'hébergement premium, le nom de domaine, les mises à jour de sécurité, le support technique et la maintenance."
      },
      {
        question: "Combien de temps pour créer le site ?",
        answer: "Un site vitrine pour artisan prend 3 semaines de A à Z : 1 semaine pour le design et la maquette (validation avec vous), 1,5 semaine de développement, 0,5 semaine de tests et ajustements. Vous êtes impliqué uniquement pour valider les étapes clés (design, contenus, mise en ligne). Le reste, on s'en occupe."
      },
      {
        question: "Comment vais-je apparaître sur Google ?",
        answer: "Nous optimisons votre site pour le référencement local (SEO local) : configuration Google Business Profile, mots-clés géolocalisés (ex: 'plombier Melun', 'électricien 77'), structure technique optimisée, et création de pages par service. Résultat : vous apparaissez dans les premiers résultats Google ET sur Google Maps quand quelqu'un cherche vos services dans votre zone. Le SEO prend 2-3 mois pour montrer des résultats significatifs, mais une fois en place, c'est du trafic gratuit et constant."
      },
      {
        question: "Je ne sais pas quoi mettre sur le site, vous pouvez m'aider ?",
        answer: "Absolument. Lors de notre appel découverte, nous vous posons les bonnes questions pour structurer le contenu : vos services principaux, votre zone d'intervention, vos tarifs (si vous souhaitez les afficher), vos certifications, etc. Ensuite, nous rédigeons les textes pour vous, vous validez et on ajuste si besoin. Vous fournissez juste des photos de vos réalisations (smartphone suffit, on les optimise), et nous créons le site complet."
      },
      {
        question: "Est-ce que je peux modifier mon site moi-même après la livraison ?",
        answer: "Ça dépend du pack choisi. Le pack Essentiel est un site statique : pour modifier le contenu, vous passez par nous (petites modifications comprises dans le support 3 mois). Le pack Professionnel inclut un espace d'administration (CMS) simple qui vous permet d'ajouter des photos de chantiers, des actualités ou des avis clients en toute autonomie. Nous vous formons en 1h, c'est aussi simple qu'utiliser Facebook."
      },
      {
        question: "Que comprend l'abonnement mensuel ?",
        answer: "Votre abonnement mensuel inclut :\n\n• Hébergement cloud premium (serveurs français, sauvegardes quotidiennes)\n• Nom de domaine (renouvellement annuel)\n• Certificat SSL (sécurité HTTPS)\n• Mises à jour de sécurité\n• Modifications de contenu (textes, images, coordonnées)\n• Support technique par email\n• Surveillance et maintenance préventive\n\nPas de surprise, pas de frais cachés. Votre site reste en ligne, sécurisé et à jour tant que l'abonnement est actif."
      }
    ]
  },

  pricing: {
    title: "Investissement pour Votre Site Artisan",
    subtitle: "Tarifs transparents et accessibles, conçus pour les artisans et TPE",
    packages: [
      {
        name: "Site Essentiel",
        price: "1 500€",
        monthly: "35€/mois",
        description: "Pour démarrer votre présence en ligne",
        features: [
          "5 pages professionnelles (Accueil, Services, Réalisations, Zone intervention, Contact)",
          "Design sobre et professionnel adapté à votre métier",
          "Galerie photos de vos réalisations (10-15 photos)",
          "Formulaire de contact pré-qualifiant",
          "Zone d'intervention avec carte",
          "Responsive mobile & tablette",
          "SEO local de base (balises meta, Schema.org Local Business)",
          "Nom de domaine inclus",
          "Hébergement cloud premium inclus",
          "Certificat SSL sécurisé",
          "3 mois de support technique",
          "Livraison : 3 semaines"
        ],
        cta: "Idéal pour démarrer",
        highlighted: false
      },
      {
        name: "Site Professionnel",
        price: "2 500€",
        monthly: "50€/mois",
        description: "Pour développer votre activité et dominer Google",
        features: [
          "Tout du pack Essentiel +",
          "Pages illimitées (détail par service, FAQ étendue)",
          "Galerie photos illimitée avec catégories",
          "Intégration avis Google automatique",
          "Section certifications & labels (RGE, Qualibat, etc.)",
          "Formulaire devis en ligne personnalisé",
          "Blog pour partager conseils et actualités (CMS intégré)",
          "SEO local avancé : stratégie mots-clés + Google Business Profile optimisé",
          "Google Search Console + analytics configurés",
          "Bouton appel direct mobile optimisé",
          "Formation CMS (1h) pour autonomie totale",
          "6 mois de support technique prioritaire",
          "Livraison : 3-4 semaines"
        ],
        cta: "Le plus populaire",
        highlighted: true
      },
      {
        name: "Site Premium",
        price: "Sur devis",
        monthly: "75€/mois",
        description: "Pour entreprises artisanales avec équipes multiples",
        features: [
          "Tout du pack Professionnel +",
          "Espace client sécurisé (suivi chantiers en ligne)",
          "Système de réservation / prise de RDV en ligne",
          "Gestion multi-équipes (planning, secteurs)",
          "Module devis automatisé avec calculs",
          "Intégrations comptabilité (facturation en ligne)",
          "Multilingue si clientèle internationale",
          "Campagne Google Ads initiale (budget pub non inclus)",
          "Stratégie SEO approfondie + netlinking",
          "12 mois de support premium",
          "Livraison : sur mesure"
        ],
        cta: "Discutons-en",
        highlighted: false
      }
    ],
    note: "Tous nos forfaits incluent : hébergement premium, nom de domaine, maintenance, SEO local optimisé, et support technique.",
    justification: {
      title: "💡 Pourquoi investir dans un site web ?",
      points: [
        "1 chantier à 3 000€ rentabilise le site Essentiel.",
        "Un site bien référencé génère 20-30 demandes qualifiées par mois.",
        "Ne plus dépendre du bouche-à-oreille = flux de clients prévisible.",
        "Votre site travaille 24/7 pendant que vous êtes sur chantier."
      ]
    }
  },

  badges: [
    {
      label: "SEO Local Optimisé",
      icon: MapPin
    },
    {
      label: "Google Maps Friendly",
      icon: Search
    },
    {
      label: "Galerie Réalisations",
      icon: ImageIcon
    },
    {
      label: "Site Livré en 3 Semaines",
      icon: CheckCircle
    }
  ],

  comparison: {
    title: "Site Professionnel vs Facebook",
    subtitle: "Pourquoi une simple page Facebook ne suffit pas",
    categories: [
      {
        name: "Référencement Google",
        us: true,
        facebook: false,
        note: "Facebook n'apparaît pas dans les recherches Google locales"
      },
      {
        name: "Contrôle total du contenu",
        us: true,
        facebook: "Limité",
        note: "Facebook peut changer ses règles à tout moment"
      },
      {
        name: "Image professionnelle",
        us: true,
        facebook: false,
        note: "Facebook = amateur aux yeux de 70% des clients"
      },
      {
        name: "Formulaire devis personnalisé",
        us: true,
        facebook: "Basique",
        note: "Facebook propose uniquement messagerie simple"
      },
      {
        name: "Galerie organisée par catégorie",
        us: true,
        facebook: "Albums limités",
        note: "Difficile de retrouver une réalisation spécifique"
      },
      {
        name: "Coût mensuel",
        us: "À partir de 35€/mois",
        facebook: "Publicités obligatoires",
        note: "L'abonnement inclut hébergement, maintenance et support"
      },
      {
        name: "Propriété de vos données",
        us: true,
        facebook: false,
        note: "Facebook garde vos contacts et peut fermer votre page"
      }
    ],
    labels: {
      us: "Site Professionnel",
      facebook: "Page Facebook"
    }
  }
};
