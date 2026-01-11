import {
  Heart,
  Shield,
  Brain,
  Lock,
  User,
  FileText,
  Mail,
  MapPin,
  Calendar,
  BookOpen,
  HelpCircle,
  FileCheck,
  Award,
  GraduationCap
} from 'lucide-react';

export const psychologueData = {
  hero: {
    eyebrow: "Site Web pour Psychologue",
    title: "Votre Identité Professionnelle",
    titleGradient: "Mérite Mieux qu'une Fiche Annuaire",
    subtitle: "Vous n'avez pas besoin d'un site web pour faire fonctionner votre cabinet. Mais vous méritez un espace où votre approche thérapeutique, votre parcours et votre éthique de soin s'expriment avec vos propres mots. Un site sobre, professionnel, qui vous ressemble.",
    ctaLabel: "Découvrir les offres",
    demoUrl: "https://maquette.psychologue.killian-lecrut.com/",
    demoLabel: "Voir la démo",
    microPromises: [
      "Design sobre et apaisant",
      "Conformité RGPD + Secret professionnel",
      "Votre approche avec vos mots",
      "Hébergement UE sécurisé"
    ]
  },

  challenges: [
    {
      icon: User,
      title: "Tous les Psychologues Se Ressemblent sur les Annuaires",
      problem: "Sur Doctolib, Pages Jaunes ou Psychology Today, votre profil ressemble à tous les autres. Une photo, quelques lignes de bio, une liste de techniques. Impossible de transmettre votre philosophie de soin, votre approche relationnelle, votre sensibilité thérapeutique. Vous êtes réduit à une fiche produit.",
      solution: "Votre site devient votre véritable carte de visite professionnelle. Vous exprimez votre approche thérapeutique avec vos propres mots, vous détaillez votre parcours, vous créez une atmosphère qui reflète votre cabinet. Vos patients potentiels vous découvrent vraiment avant le premier contact."
    },
    {
      icon: Brain,
      title: "Votre Approche Thérapeutique Reste Floue",
      problem: "TCC, psychanalyse, EMDR, thérapie systémique, ACT... Les annuaires vous limitent à cocher des cases. Mais votre pratique est unique : vous avez votre propre façon d'intégrer ces approches, votre sensibilité, votre éthique. Comment un patient peut-il savoir si vous êtes le bon thérapeute pour lui ?",
      solution: "Avec votre site, vous détaillez précisément votre approche : pour quels types de difficultés vous êtes le plus à l'aise, comment se déroule un suivi, quelle est votre vision de la thérapie. Vous aidez vos patients à faire un choix éclairé et à trouver le bon \"match\" thérapeutique."
    },
    {
      icon: Lock,
      title: "Vous Ne Contrôlez Pas Votre Présence en Ligne",
      problem: "Quand quelqu'un tape votre nom sur Google, que trouve-t-il ? Une fiche Doctolib que vous ne maîtrisez pas totalement, des avis que vous ne pouvez pas contextualiser, des informations parcellaires. Votre image professionnelle dépend d'algorithmes et de plateformes que vous ne contrôlez pas.",
      solution: "Votre site devient votre espace professionnel personnel. Vous contrôlez entièrement votre présentation, vous contextualisez votre pratique, vous décidez de ce que vos patients découvrent en premier. Doctolib reste utile pour la prise de rendez-vous, mais votre site devient votre identité professionnelle de référence."
    }
  ],

  features: [
    {
      icon: Brain,
      title: "Présentation de Votre Approche Thérapeutique",
      description: "Page dédiée pour expliquer en détail votre façon de travailler : orientations théoriques, types de difficultés accompagnées, déroulement d'un suivi, durée moyenne, fréquence des séances. Vos patients comprennent clairement ce que vous proposez.",
      technical: "Contenu personnalisable à 100%"
    },
    {
      icon: GraduationCap,
      title: "Parcours et Formations",
      description: "Mettez en valeur votre parcours universitaire, vos formations continues, vos spécialisations (EMDR, hypnose, art-thérapie...). Numéro ADELI, inscription répertoire ADELI, diplômes. Tout ce qui inspire confiance et légitime votre pratique.",
      technical: "Section diplômes avec visuels"
    },
    {
      icon: Mail,
      title: "Formulaire de Contact Confidentiel",
      description: "Formulaire sécurisé avec chiffrement SSL/TLS, entièrement conforme RGPD et respectueux du secret professionnel. Politique de confidentialité claire sur la gestion des données sensibles. Pas de traceurs publicitaires, uniquement cookies essentiels.",
      technical: "Chiffrement bout en bout + conformité RGPD"
    },
    {
      icon: MapPin,
      title: "Zone d'Intervention et Localisation",
      description: "Carte de votre cabinet, quartiers et villes où vous intervenez, accès transports en commun, parking. Informations pratiques qui rassurent et facilitent la prise de décision pour vos patients potentiels.",
      technical: "Intégration Google Maps"
    },
    {
      icon: Calendar,
      title: "Prise de Rendez-vous en Ligne",
      description: "Intégration de votre calendrier Calendly personnel pour permettre à vos patients de prendre rendez-vous directement en ligne. Configuration complète des types de séances (première consultation, suivi, visio, présentiel) et synchronisation avec votre agenda. Disponible à partir du pack Professionnel.",
      technical: "Intégration Calendly + formation incluse",
      packRequired: "Professionnel"
    },
    {
      icon: BookOpen,
      title: "Blog Professionnel",
      description: "Partagez votre expertise avec des articles pédagogiques : conseils en santé mentale, décryptage de thématiques psy, actualités de la profession. Excellent pour votre crédibilité et pour aider vos patients à mieux comprendre la démarche thérapeutique. CMS intégré pour publier en autonomie. Disponible uniquement dans le pack Premium.",
      technical: "CMS intégré + 3 articles rédigés",
      packRequired: "Premium"
    },
    {
      icon: HelpCircle,
      title: "FAQ pour Rassurer",
      description: "Réponses aux questions fréquentes : tarifs des consultations, durée d'un suivi, remboursements mutuelle, confidentialité, déroulement première séance. Décharge votre secrétariat (ou vous-même) et rassure les personnes hésitantes.",
      technical: "Format accordéon, recherche intégrée"
    },
    {
      icon: FileCheck,
      title: "Mentions Légales Conformes",
      description: "Page complète conforme à la Loi n°2004-575 : SIREN/SIRET, numéro ADELI, ARS d'enregistrement, assurance RCP, politique RGPD respectant le secret professionnel, droits d'accès et de suppression des données. Documentation fournie : politique de confidentialité, mentions légales, gestion cookies.",
      technical: "Conforme RGPD + Secret professionnel"
    }
  ],

  faq: {
    title: "Questions Fréquentes des Psychologues",
    subtitle: "Tout ce que vous devez savoir sur la création d'un site pour votre cabinet",
    items: [
      {
        question: "Ai-je vraiment besoin d'un site si j'ai déjà une fiche Doctolib ?",
        answer: "Non, vous n'avez pas \"besoin\" d'un site pour faire fonctionner votre cabinet. Beaucoup de psychologues excellent dans leur pratique avec seulement le bouche-à-oreille et Doctolib.\n\nMais un site vous permet de contrôler votre image professionnelle : exprimer votre approche thérapeutique avec vos propres mots, détailler votre parcours, créer une atmosphère qui reflète votre cabinet. Doctolib reste utile pour la gestion des RDV, votre site devient votre identité de référence.\n\nC'est un choix personnel, pas une obligation. Si vous souhaitez que vos patients vous découvrent vraiment avant le premier contact, un site apporte cette dimension humaine que les annuaires ne permettent pas."
      },
      {
        question: "Mon site sera-t-il conforme au RGPD et au secret professionnel ?",
        answer: "Oui, absolument. Nous créons des sites spécifiquement pour les professionnels de santé, avec une conformité totale :\n\n- Formulaire de contact avec chiffrement SSL/TLS bout en bout\n- Hébergement français en Union Européenne (données sensibles)\n- Politique de confidentialité respectant le secret professionnel\n- Pas de traceurs publicitaires, uniquement cookies essentiels\n- Documentation complète fournie (politique RGPD, mentions légales, gestion cookies)\n\nVous recevez tous les documents nécessaires pour prouver votre conformité en cas de contrôle ou pour votre assurance RCP."
      },
      {
        question: "Combien de temps prend la création du site ?",
        answer: "- Pack Essentiel : 2-3 semaines après validation du contenu et des visuels\n- Pack Professionnel : 3-4 semaines (incluant configuration Calendly)\n- Pack Premium : 4-5 semaines (incluant rédaction des 3 articles de blog)\n\nLe délai dépend aussi de votre réactivité pour fournir les contenus (textes de présentation, photos, diplômes).\n\nNous vous accompagnons à chaque étape : brief initial, maquettes pour validation, développement, formation, mise en ligne."
      },
      {
        question: "Puis-je modifier le contenu de mon site moi-même après la livraison ?",
        answer: "Pour les packs Essentiel et Professionnel : Les modifications de contenu sont incluses dans votre abonnement mensuel (25€/mois ou 35€/mois). Vous nous envoyez vos demandes de modification et nous les réalisons sous 48-72h.\n\nPour le pack Premium avec blog : Vous avez un accès complet au CMS pour gérer votre blog en autonomie (ajout/modification d'articles). Une formation d'1h est incluse. Pour les modifications de structure ou de design, elles sont incluses dans votre abonnement maintenance (50€/mois)."
      },
      {
        question: "Que comprend l'abonnement mensuel ?",
        answer: "Votre abonnement mensuel inclut :\n\n- Hébergement cloud premium (serveurs français, sauvegardes quotidiennes)\n- Nom de domaine (renouvellement annuel)\n- Certificat SSL/TLS (sécurité HTTPS)\n- Mises à jour de sécurité\n- Modifications de contenu (textes, images, coordonnées)\n- Support technique par email\n- Surveillance et maintenance préventive\n\nPas de surprise, pas de frais cachés. Votre site reste en ligne et sécurisé tant que l'abonnement est actif."
      },
      {
        question: "Et si je veux arrêter l'abonnement après quelques mois ?",
        answer: "Vous êtes libre d'arrêter à tout moment, sans pénalité. Un préavis de 30 jours est demandé.\n\nSi vous arrêtez l'abonnement, le site sera désactivé (plus d'hébergement = site hors ligne). Vous pouvez cependant récupérer l'intégralité du code source de votre site si vous souhaitez le transférer chez un autre hébergeur.\n\nNous recommandons un engagement minimum de 12 mois pour amortir l'investissement initial et bénéficier pleinement de votre présence en ligne."
      },
      {
        question: "Comment fonctionne l'intégration Calendly dans le pack Professionnel ?",
        answer: "Vous créez votre propre compte Calendly (plan Standard à partir de 12€/mois, géré par vos soins). Nous nous occupons de :\n\n- Configuration initiale : création de vos types d'événements (première consultation, suivi, visio, présentiel, etc.)\n- Intégration technique : widget Calendly sur votre site, boutons de prise de RDV, pages dédiées\n- Formation : session de 30 minutes pour vous apprendre à gérer vos disponibilités, vos types de séances, et vos paramètres\n\nVous gardez le contrôle total de votre agenda et de vos disponibilités. Calendly se synchronise avec votre Google Calendar ou Outlook."
      },
      {
        question: "Puis-je voir un exemple de site pour psychologue ?",
        answer: "Oui ! Nous avons créé une démo de site pour psychologue que vous pouvez consulter ici : https://demo.psychologue.2minaci.xyz/\n\nCette démo illustre le design sobre et empathique, la structure de contenu, et les fonctionnalités disponibles. Chaque site est ensuite personnalisé selon votre identité : couleurs, typographie, photos, contenus."
      }
    ]
  },

  pricing: {
    title: "Investissement pour Votre Site Professionnel",
    subtitle: "Tarifs transparents, sans surprise. Choisissez l'offre adaptée à vos besoins.",
    packages: [
      {
        name: "Pack Essentiel",
        price: "500€",
        monthly: "25€/mois",
        description: "Psychologue en libéral souhaitant une présence professionnelle sobre",
        features: [
          "5 pages (Accueil, À propos, Approche thérapeutique, Contact, Mentions légales)",
          "Design sobre, empathique et moderne",
          "Présentation détaillée de votre approche et de vos spécialités",
          "Section diplômes, formations et numéro ADELI",
          "Formulaire de contact avec chiffrement bout en bout",
          "Responsive mobile & tablette",
          "Politique de confidentialité conforme RGPD + Secret professionnel",
          "Mentions légales conformes",
          "Configuration cookies essentiels uniquement (pas de traceurs publicitaires)",
          "Nom de domaine + hébergement premium UE inclus 1 an (valeur 200€/an)",
          "Certificat SSL/TLS",
          "3 mois de maintenance et mises à jour de sécurité"
        ],
        cta: "Choisir ce pack"
      },
      {
        name: "Pack Professionnel",
        price: "800€",
        monthly: "35€/mois",
        description: "Psychologue souhaitant un site complet avec prise de rendez-vous en ligne",
        features: [
          "Tout du pack Essentiel +",
          "Pages illimitées (détail par spécialité thérapeutique, public accompagné, etc.)",
          "Intégration de votre calendrier Calendly personnel",
          "Configuration et paramétrage des types d'événements",
          "Formation Calendly (30min) pour gérer vos disponibilités en autonomie",
          "Intégration technique sur le site (widget, boutons, pages dédiées)",
          "FAQ étendue et personnalisée",
          "SEO local optimisé (balises meta, Schema.org Health Professional)",
          "Google Search Console + analytics configurés",
          "Zone d'intervention avec carte interactive",
          "6 mois de maintenance prioritaire"
        ],
        cta: "Le plus choisi",
        highlighted: true
      },
      {
        name: "Pack Premium",
        price: "1 200€",
        monthly: "50€/mois",
        description: "Psychologue souhaitant partager son expertise via un blog professionnel",
        features: [
          "Tout du pack Professionnel +",
          "Blog professionnel intégré (CMS pour publier en autonomie)",
          "3 articles de blog rédigés sur des thématiques de votre choix",
          "Formation complète CMS (1h) pour gérer votre blog en autonomie",
          "Stratégie éditoriale et calendrier de publication conseillé",
          "Optimisation SEO avancée pour chaque article",
          "Section ressources et documents téléchargeables pour vos patients",
          "Support prioritaire illimité",
          "12 mois de maintenance premium"
        ],
        cta: "Choisir ce pack"
      }
    ],
    note: "Tous nos forfaits incluent la conformité RGPD complète, le respect du secret professionnel, et la documentation technique pour votre assurance RCP si besoin.",
    justification: {
      title: "Pourquoi investir dans un site professionnel ?",
      points: [
        "Doctolib reste utile pour la gestion des rendez-vous, votre site devient votre identité professionnelle",
        "Un site professionnel renforce la confiance et la crédibilité dès le premier contact",
        "Vous contrôlez entièrement votre image et votre communication",
        "Aucun abonnement caché : hébergement, maintenance et sécurité inclus"
      ]
    }
  },

  badges: [
    {
      label: "Conformité RGPD",
      icon: Shield
    },
    {
      label: "Secret Professionnel",
      icon: Lock
    },
    {
      label: "Hébergement UE",
      icon: FileCheck
    },
    {
      label: "Design Empathique",
      icon: Heart
    }
  ]
};
