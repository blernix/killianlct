import {
  Search,
  Shield,
  Clock,
  Lock,
  TrendingUp,
  Users,
  Euro,
  FileText,
  Mail,
  Calendar,
  Star,
  Award,
  HelpCircle,
  CheckCircle,
  Target,
  Database,
  UserCheck,
  FileCheck,
  MapPin,
  Activity,
  Heart,
  Baby,
  Dumbbell,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export const osteopatheData = {
  hero: {
    eyebrow: "Agence Web pour Professionnels de Santé",
    title: "Site Web pour Ostéopathe | Développez Votre Patientèle",
    subtitle: "40 000 Ostéopathes en France. Comment Vos Patients Vous Trouvent-ils ?",
    description: "Le marché de l'ostéopathie est saturé. Le bouche-à-oreille ne suffit plus pour construire une patientèle stable. Un site web professionnel vous rend visible, communique vos spécialisations et attire des patients qualifiés pendant que vous êtes en consultation.",
    ctaLabel: "Découvrir les offres",
    demoUrl: "https://demo.osteopathe.2minaci.xyz/",
    demoLabel: "Voir la démo",
    microPromises: [
      "Livraison en 2-4 semaines",
      "Conforme RGPD + Secret professionnel",
      "Optimisé référencement local",
      "Formation incluse"
    ]
  },

  challenges: [
    {
      icon: Users,
      title: "Noyé Parmi 40 000 Confrères",
      problem: "En 2024, la France compte plus de 40 000 ostéopathes, soit un praticien pour 1 700 habitants. Dans certaines zones urbaines, c'est un ostéopathe pour 2 000 habitants. Chaque année, 2 000 nouveaux diplômés arrivent sur le marché. Sans présence en ligne, vous êtes invisible face à cette concurrence massive.",
      solution: "Un site web optimisé pour le référencement local vous fait apparaître quand un patient cherche \"ostéopathe + votre ville\" sur Google. Vous existez enfin aux yeux des patients qui ne vous connaissent pas encore. Votre cabinet sort du lot grâce à une présentation professionnelle qui inspire confiance dès le premier clic.",
      stat: "50% des ostéopathes exclusifs gagnent moins que le SMIC"
    },
    {
      icon: Target,
      title: "Ostéo Pédiatrique ? Sportif ? Personne Ne Le Sait",
      problem: "Vous avez suivi des formations complémentaires en ostéopathie pédiatrique, sportive, pour femmes enceintes ou seniors ? Sur Doctolib, vous n'êtes qu'une fiche parmi d'autres. Impossible de détailler votre approche, vos spécialisations, les motifs de consultation pour lesquels vous excellez. Résultat : vous recevez des patients qui ne correspondent pas à votre expertise.",
      solution: "Votre site devient votre vitrine professionnelle complète. Pages dédiées par spécialisation (nourrissons, sportifs, femmes enceintes, seniors...), détail des motifs de consultation, explication de votre approche. Les patients qui vous trouvent savent exactement pourquoi ils viennent chez vous plutôt qu'un autre.",
      stat: "Les ostéopathes spécialisés se différencient mieux sur un marché en forte concurrence"
    },
    {
      icon: TrendingUp,
      title: "Dépendre des Recommandations = Subir les Périodes Creuses",
      problem: "Le bouche-à-oreille fonctionne, mais il est imprévisible. Vous ne contrôlez pas le flux de nouveaux patients, et les périodes creuses peuvent durer des semaines. Impossible de planifier votre activité, d'anticiper vos revenus ou de développer sereinement votre cabinet.",
      solution: "Un site web = un canal d'acquisition constant et prévisible. Votre formulaire de contact capte les demandes jour et nuit. Couplé à une prise de rendez-vous en ligne, vous remplissez votre agenda sans effort. Le bouche-à-oreille reste un bonus, mais vous ne dépendez plus uniquement de lui.",
      stat: "Un site bien référencé génère des demandes 24h/24, même quand vous êtes en consultation"
    }
  ],

  features: [
    {
      icon: Activity,
      title: "Présentation de Vos Spécialisations",
      description: "Pages dédiées pour chaque spécialité : ostéopathie pédiatrique (nourrissons, enfants), sportive, périnatalité (femmes enceintes, post-partum), seniors, gestion du stress... Expliquez votre approche, vos formations complémentaires, et attirez les patients qui correspondent à votre expertise.",
      technical: "Pages illimitées par spécialité"
    },
    {
      icon: Heart,
      title: "Motifs de Consultation Détaillés",
      description: "Mal de dos, torticolis du nourrisson, sciatique, migraines, troubles digestifs, récupération sportive... Listez et expliquez les motifs pour lesquels vous pouvez aider. Les patients comprennent immédiatement si vous êtes le bon praticien pour leur problème.",
      technical: "SEO optimisé par motif de consultation"
    },
    {
      icon: Award,
      title: "Diplômes, Formations et Numéro ADELI",
      description: "Affichez clairement votre parcours : diplôme d'ostéopathe (DO), établissement de formation, numéro ADELI, enregistrement ARS, formations complémentaires certifiantes. Dans un marché saturé, la transparence sur vos qualifications inspire confiance et vous différencie.",
      technical: "Section diplômes avec visuels professionnels"
    },
    {
      icon: Euro,
      title: "Tarifs et Remboursements Mutuelles",
      description: "Affichez vos tarifs clairement (consultation, suivi, forfait...) et expliquez le fonctionnement des remboursements mutuelles. Les patients apprécient la transparence tarifaire, et vous filtrez les demandes non sérieuses.",
      technical: "Section tarification claire + liste mutuelles partenaires"
    },
    {
      icon: Calendar,
      title: "Prise de Rendez-vous en Ligne (Pack Pro)",
      description: "Intégration de votre calendrier Calendly personnel pour permettre à vos patients de réserver directement en ligne. Configuration complète des types de séances (première consultation, suivi, urgence...) et synchronisation avec votre agenda. Fini les allers-retours téléphoniques. Disponible à partir du pack Professionnel.",
      technical: "Intégration Calendly + formation incluse"
    },
    {
      icon: MapPin,
      title: "Zone d'Intervention et Localisation",
      description: "Carte interactive de votre cabinet, quartiers et villes desservis, accès transports en commun, parking. Informations pratiques essentielles pour les patients qui cherchent un ostéopathe proche de chez eux ou de leur travail.",
      technical: "Intégration Google Maps + SEO local"
    },
    {
      icon: BookOpen,
      title: "Blog Santé et Prévention (Pack Premium)",
      description: "Partagez votre expertise avec des articles sur la prévention, les bonnes postures, la récupération sportive, le sommeil... Excellent pour votre crédibilité, votre référencement Google, et pour éduquer vos patients. CMS intégré pour publier en autonomie. Disponible uniquement dans le pack Premium.",
      technical: "CMS intégré + 3 articles rédigés"
    },
    {
      icon: Mail,
      title: "Formulaire de Contact Sécurisé",
      description: "Formulaire avec chiffrement SSL/TLS, conforme RGPD et respectueux du secret professionnel. Pré-qualification des demandes (motif, urgence, localisation) pour recevoir des demandes déjà filtrées. Pas de traceurs publicitaires, uniquement cookies essentiels.",
      technical: "Chiffrement bout en bout + conformité RGPD"
    },
    {
      icon: HelpCircle,
      title: "FAQ Pour Rassurer",
      description: "Réponses aux questions fréquentes : déroulement d'une séance, est-ce que ça fait mal, combien de séances, tarifs, remboursements, pour qui l'ostéopathie est indiquée... Rassure les patients hésitants et décharge votre ligne téléphonique.",
      technical: "Format accordéon, recherche intégrée"
    },
    {
      icon: Lock,
      title: "Mentions Légales Conformes",
      description: "Page complète conforme à la Loi n°2004-575 : SIREN/SIRET, numéro ADELI, ARS d'enregistrement, assurance RCP, politique RGPD respectant le secret professionnel, droits d'accès et de suppression des données. Documentation fournie.",
      technical: "Conforme RGPD + Secret professionnel"
    }
  ],

  roi: {
    title: "Calculez Votre Retour sur Investissement",
    subtitle: "Simulation simple pour évaluer la rentabilité réelle de votre site",
    defaultClients: 3,
    defaultPrice: 55,
    note: "Et si ces patients reviennent pour un suivi (2-3 séances en moyenne), le ROI est encore plus rapide. Un site professionnel qui vous amène ne serait-ce que 2-3 nouveaux patients par mois transforme votre activité."
  },

  comparison: {
    title: "Site Professionnel vs Simple Fiche Doctolib",
    subtitle: "Pourquoi une fiche annuaire ne suffit pas dans un marché saturé",
    categories: [
      {
        name: "Différenciation",
        us: "Design unique, votre identité",
        doctolib: "Même format que tous les autres"
      },
      {
        name: "Spécialisations détaillées",
        us: "Pages dédiées illimitées",
        doctolib: "Quelques lignes de description"
      },
      {
        name: "Référencement Google",
        us: "Votre nom de domaine, SEO optimisé",
        doctolib: "Noyé parmi les autres fiches"
      },
      {
        name: "Contrôle total",
        us: "Vous décidez de tout",
        doctolib: "Format imposé par la plateforme"
      },
      {
        name: "Tarifs et mutuelles",
        us: "Section dédiée complète",
        doctolib: "Informations limitées"
      },
      {
        name: "Blog / Expertise",
        us: "Partagez vos conseils",
        doctolib: "Impossible"
      },
      {
        name: "Indépendance",
        us: "Votre propriété",
        doctolib: "Dépendance à la plateforme"
      }
    ],
    note: "Doctolib reste utile pour la prise de rendez-vous. Votre site devient votre vitrine professionnelle complète, celle qui vous différencie et inspire confiance."
  },

  faq: {
    title: "Questions Fréquentes des Ostéopathes",
    subtitle: "Tout ce que vous devez savoir sur la création d'un site pour votre cabinet",
    items: [
      {
        question: "J'ai déjà une fiche Doctolib, pourquoi avoir un site en plus ?",
        answer: "Doctolib est un excellent outil de prise de rendez-vous, mais ce n'est pas une vitrine professionnelle. Sur Doctolib, vous ressemblez à tous les autres ostéopathes : même format, même présentation, noyé parmi des dizaines de confrères.\n\nVotre site vous permet de :\n• Vous différencier avec un design unique qui reflète votre approche\n• Détailler vos spécialisations avec des pages complètes (pédiatrie, sport, périnatalité...)\n• Apparaître sur Google quand un patient cherche \"ostéopathe + votre spécialité + votre ville\"\n• Contrôler totalement votre image professionnelle\n\nLes deux sont complémentaires : Doctolib pour la réservation, votre site pour convaincre."
      },
      {
        question: "Combien de temps avant de voir des résultats ?",
        answer: "Le référencement naturel (SEO) prend du temps. En général :\n\n• 1-2 mois : votre site est indexé sur Google, vous apparaissez sur votre nom\n• 3-4 mois : vous commencez à apparaître sur des recherches locales (\"ostéopathe + ville\")\n• 6-12 mois : positionnement stable sur vos mots-clés stratégiques\n\nLes premiers patients via le site arrivent généralement entre le 2ème et le 4ème mois. Plus votre zone est concurrentielle, plus ça peut prendre de temps, d'où l'importance d'un SEO bien travaillé dès le départ.\n\nLe site est aussi utile immédiatement : vous pouvez partager le lien à vos patients actuels, l'ajouter sur vos cartes de visite, votre signature email, etc."
      },
      {
        question: "Mon site sera-t-il conforme au RGPD et au secret professionnel ?",
        answer: "Oui, absolument. Nous créons des sites spécifiquement pour les professionnels de santé, avec une conformité totale :\n\n• Formulaire de contact avec chiffrement SSL/TLS bout en bout\n• Hébergement français en Union Européenne (données sensibles)\n• Politique de confidentialité respectant le secret professionnel\n• Pas de traceurs publicitaires, uniquement cookies essentiels\n• Documentation complète fournie (politique RGPD, mentions légales, gestion cookies)\n\nVous recevez tous les documents nécessaires pour prouver votre conformité en cas de contrôle ou pour votre assurance RCP."
      },
      {
        question: "Combien de temps prend la création du site ?",
        answer: "• Pack Essentiel : 2-3 semaines après validation du contenu et des visuels\n• Pack Professionnel : 3-4 semaines (incluant configuration Calendly et SEO avancé)\n• Pack Premium : 4-6 semaines (incluant rédaction des 3 articles de blog)\n\nLe délai dépend aussi de votre réactivité pour fournir les contenus (textes de présentation, photos, diplômes).\n\nNous vous accompagnons à chaque étape : brief initial, maquettes pour validation, développement, formation, mise en ligne."
      },
      {
        question: "Que comprend l'abonnement mensuel ?",
        answer: "Votre abonnement mensuel inclut :\n\n• Hébergement cloud premium (serveurs français, sauvegardes quotidiennes)\n• Nom de domaine (renouvellement annuel)\n• Certificat SSL/TLS (sécurité HTTPS)\n• Mises à jour de sécurité\n• Modifications de contenu (textes, images, coordonnées, tarifs)\n• Support technique par email\n• Surveillance et maintenance préventive\n\nPas de surprise, pas de frais cachés. Votre site reste en ligne, sécurisé et à jour tant que l'abonnement est actif."
      },
      {
        question: "Et si je veux arrêter l'abonnement ?",
        answer: "Vous êtes libre d'arrêter à tout moment, sans pénalité. Un préavis de 30 jours est demandé.\n\nSi vous arrêtez l'abonnement, le site sera désactivé (plus d'hébergement = site hors ligne). Vous pouvez cependant récupérer l'intégralité du code source de votre site si vous souhaitez le transférer chez un autre hébergeur.\n\nNous recommandons un engagement minimum de 12 mois pour amortir l'investissement initial et laisser le temps au SEO de produire des résultats."
      },
      {
        question: "Comment fonctionne l'intégration Calendly ?",
        answer: "Vous créez votre propre compte Calendly (plan Standard à partir de 12€/mois, géré par vos soins). Nous nous occupons de :\n\n• Configuration initiale : création de vos types de séances (première consultation, suivi, urgence, etc.)\n• Intégration technique : widget Calendly intégré à votre site, boutons de prise de RDV\n• Formation : session de 30 minutes pour vous apprendre à gérer vos disponibilités et paramètres\n\nVous gardez le contrôle total de votre agenda. Calendly se synchronise avec votre Google Calendar ou Outlook. Vos patients réservent en ligne, vous recevez les confirmations automatiquement."
      },
      {
        question: "Je débute, est-ce le bon moment pour investir dans un site ?",
        answer: "C'est justement le meilleur moment. Les premières années sont les plus difficiles pour se constituer une patientèle dans un marché saturé. Un site web professionnel vous donne une longueur d'avance sur les confrères qui n'en ont pas.\n\nLe pack Essentiel à 1 500€ + 35€/mois est conçu pour les ostéopathes en début d'activité : un investissement raisonnable qui commence à générer des résultats pendant que vous développez votre réseau.\n\n3 nouveaux patients par mois via votre site = le site se rembourse tout seul."
      }
    ]
  },

  pricing: {
    title: "Investissement pour Votre Site Professionnel",
    subtitle: "Tarifs transparents, adaptés aux ostéopathes libéraux",
    packages: [
      {
        name: "Pack Essentiel",
        price: "1 500€",
        monthly: "35€/mois",
        description: "Pour ostéopathe souhaitant une présence professionnelle solide",
        features: [
          "5 pages professionnelles (Accueil, À propos, Spécialisations, Contact, Mentions légales)",
          "Design moderne et professionnel adapté au monde de la santé",
          "Présentation de vos spécialisations et formations",
          "Section diplômes, parcours et numéro ADELI",
          "Motifs de consultation détaillés",
          "Zone d'intervention avec carte Google Maps",
          "Formulaire de contact sécurisé (chiffrement SSL/TLS)",
          "Responsive mobile & tablette",
          "SEO local de base (balises meta, Schema.org HealthBusiness)",
          "Politique de confidentialité conforme RGPD + Secret professionnel",
          "Mentions légales conformes",
          "Nom de domaine + hébergement premium UE inclus 1 an (valeur 200€/an)",
          "Certificat SSL/TLS",
          "3 mois de maintenance et mises à jour de sécurité"
        ],
        cta: "Choisir ce pack"
      },
      {
        name: "Pack Professionnel",
        price: "2 500€",
        monthly: "50€/mois",
        description: "Pour ostéopathe souhaitant développer activement sa patientèle",
        features: [
          "Tout du pack Essentiel +",
          "Pages illimitées (détail par spécialité, par motif de consultation, FAQ étendue)",
          "Intégration de votre calendrier Calendly personnel (abonnement Calendly à partir de 12€/mois non inclus)",
          "Configuration et paramétrage des types de séances (première consultation, suivi, urgence)",
          "Formation Calendly (30min) pour gérer vos disponibilités en autonomie",
          "Section tarifs détaillée + remboursements mutuelles",
          "SEO local avancé (stratégie mots-clés, optimisation \"ostéopathe + ville\")",
          "Google Business Profile optimisé",
          "Google Search Console + analytics configurés",
          "FAQ étendue et personnalisée",
          "6 mois de maintenance prioritaire"
        ],
        cta: "Le plus choisi",
        highlighted: true
      },
      {
        name: "Pack Premium",
        price: "4 000€",
        monthly: "75€/mois",
        description: "Pour ostéopathe souhaitant maximiser sa visibilité et son expertise en ligne",
        features: [
          "Tout du pack Professionnel +",
          "Blog professionnel intégré (CMS pour publier en autonomie)",
          "3 articles de blog rédigés (prévention, conseils santé, thématiques de votre choix)",
          "Formation complète CMS (1h) pour gérer votre blog en autonomie",
          "Stratégie éditoriale et calendrier de publication conseillé",
          "Optimisation SEO avancée pour chaque article",
          "Section ressources et conseils téléchargeables pour vos patients",
          "Stratégie SEO approfondie (audit, optimisations techniques, netlinking de base)",
          "Support prioritaire illimité",
          "12 mois de maintenance premium"
        ],
        cta: "Choisir ce pack"
      }
    ],
    note: "Tous nos forfaits incluent : hébergement premium, maintenance, conformité RGPD, respect du secret professionnel, et support technique.",
    justification: {
      title: "Pourquoi investir dans un site professionnel ?",
      points: [
        "Dans un marché saturé, la visibilité en ligne n'est plus optionnelle",
        "1 Français sur 4 consulte un ostéopathe : les patients existent, il faut qu'ils vous trouvent",
        "Un site professionnel vous différencie des 40 000 autres ostéopathes",
        "Votre site travaille 24h/24, même quand vous êtes en consultation",
        "3 nouveaux patients par mois = site rentabilisé"
      ]
    }
  },

  badges: [
    {
      label: "Conforme RGPD",
      icon: Shield
    },
    {
      label: "Secret Professionnel",
      icon: Lock
    },
    {
      label: "SEO Local Optimisé",
      icon: Search
    },
    {
      label: "Hébergement UE",
      icon: Database
    }
  ],

  cta: {
    title: "Prêt à Développer Votre Patientèle ?",
    subtitle: "Discutons de votre projet sans engagement",
    description: "Que vous débutiez ou que vous souhaitiez développer un cabinet existant, nous créons le site qui vous différencie dans un marché saturé. Échange gratuit de 30 minutes pour comprendre vos besoins, analyser votre zone de chalandise et vous conseiller sur l'offre la plus adaptée.",
    ctaPrimary: "Prendre rendez-vous pour un échange gratuit",
    ctaSecondary: "M'envoyer un message"
  }
};
