import {
  Zap,
  Clock,
  TrendingDown,
  AlertTriangle,
  Workflow,
  GitBranch,
  Shield,
  BarChart,
  Settings,
  RefreshCw,
  Link2,
  Database,
  Mail,
  Calendar,
  ShoppingCart,
  FileText,
  Users,
  Bell,
  CheckCircle,
  AlertCircle,
  X,
  TrendingUp,
  Sparkles,
  Code,
  ArrowRight,
  PlayCircle,
  Box,
  Repeat
} from 'lucide-react';

export const n8nData = {
  hero: {
    eyebrow: "Automatisation de Workflows avec n8n",
    title: "Libérez 20h par Semaine en Automatisant vos Tâches Répétitives",
    subtitle: "Arrêtez de copier-coller entre vos outils. Nous connectons vos logiciels et automatisons vos processus métier. Vos équipes se concentrent sur ce qui compte vraiment : faire grandir votre business.",
    ctaLabel: "Automatiser mes processus",
    microPromises: [
      "Premier workflow en 2 semaines",
      "ROI visible dès le 1er mois",
      "Infrastructure n8n sécurisée",
      "Formation équipe incluse"
    ]
  },

  challenges: [
    {
      icon: Clock,
      title: "Tâches manuelles chronophages",
      problem: "Votre équipe passe 2-3h/jour à faire des copier-coller entre outils : créer des contacts dans le CRM après un formulaire web, exporter des données Excel pour les mettre dans un autre outil, envoyer des emails de relance manuellement. Ces tâches ne créent aucune valeur mais pompent 40% du temps de travail.",
      solution: "Nous automatisons ces flux de données entre vos outils. Un formulaire Typeform remplit automatiquement votre CRM HubSpot, déclenche un email de bienvenue, crée une tâche dans Notion, et notifie votre équipe sur Slack. Résultat : 15h/semaine récupérées par personne pour des tâches à valeur ajoutée.",
      stat: "Les PME perdent en moyenne 30% de leur temps en tâches répétitives"
    },
    {
      icon: AlertTriangle,
      title: "Erreurs humaines & données perdues",
      problem: "Un commercial oublie de noter un lead dans le CRM = opportunité perdue. Une facture mal saisie = client mécontent. Un email non envoyé = relance manquée. Les erreurs manuelles coûtent cher : pertes financières directes, insatisfaction client, temps passé à corriger.",
      solution: "Les workflows automatisés sont fiables à 100%. Chaque lead est capturé, chaque facture générée automatiquement, chaque relance envoyée au bon moment. Logs complets pour traçabilité. Alertes en cas de problème. Vos processus deviennent industrialisés et reproductibles.",
      stat: "Les erreurs manuelles coûtent 25% du CA aux entreprises de services"
    },
    {
      icon: TrendingDown,
      title: "Impossible de scaler",
      problem: "Votre business grandit, mais vos processus restent manuels. Résultat : vous devez embaucher pour absorber la charge administrative. 1 nouveau commercial = 1 assistant administratif. Votre marge se dégrade. Vous êtes bloqué dans une logique de coûts linéaires.",
      solution: "L'automatisation casse ce plafond de verre. 10 commerciaux ou 100, le workflow reste le même. Vous scalez sans embaucher proportionnellement. Exemple concret : une agence passe de 50 à 200 clients sans augmenter son équipe admin grâce à l'automatisation de la facturation, des relances, et du onboarding client.",
      stat: "Les entreprises automatisées scalent 3x plus vite avec 40% de coûts fixes en moins"
    }
  ],

  process: {
    title: "Notre Méthode en 4 Étapes",
    subtitle: "De l'audit à la mise en production, un processus éprouvé sur 50+ projets d'automatisation",
    steps: [
      {
        icon: BarChart,
        number: "01",
        title: "Audit de Vos Processus (Semaine 1)",
        description: "Nous analysons vos workflows actuels pour identifier les tâches à fort potentiel d'automatisation. On calcule le ROI de chaque workflow : temps gagné, erreurs évitées, coût de développement. On priorise ensemble.",
        deliverables: ["Cartographie des processus actuels", "Liste priorisée des workflows", "Estimation ROI par workflow", "Roadmap d'automatisation"],
        duration: "1 semaine"
      },
      {
        icon: Code,
        number: "02",
        title: "Design du Workflow (Semaine 2)",
        description: "Nous créons le schéma visuel du workflow dans n8n : déclencheurs, actions, conditions, gestion d'erreurs. Vous validez la logique avant qu'on développe quoi que ce soit.",
        deliverables: ["Schéma workflow détaillé", "Documentation des cas limites", "Plan de gestion d'erreurs", "Validation client"],
        duration: "1 semaine"
      },
      {
        icon: Settings,
        number: "03",
        title: "Développement & Tests (Semaine 3)",
        description: "Nous construisons le workflow sur notre infrastructure n8n cloud. Tests avec données réelles, gestion des cas d'erreur, optimisation des performances. Monitoring actif pour détecter tout bug.",
        deliverables: ["Workflow fonctionnel en staging", "Tests validés", "Documentation technique", "Alertes configurées"],
        duration: "1 semaine"
      },
      {
        icon: PlayCircle,
        number: "04",
        title: "Déploiement & Formation (Semaine 4)",
        description: "Mise en production progressive, formation de vos équipes, documentation utilisateur. Puis monitoring continu et optimisations pendant 1 mois offert.",
        deliverables: ["Workflow en production", "Formation équipe (2h)", "Documentation utilisateur", "1 mois de support inclus"],
        duration: "1 semaine + 1 mois de suivi"
      }
    ]
  },

  useCases: {
    title: "Types d'Automatisations que Nous Développons",
    subtitle: "Des workflows qui résolvent de vrais problèmes business",
    cases: [
      {
        icon: Users,
        title: "Lead Management & CRM",
        description: "Capture automatique des leads depuis formulaires web, qualification, enrichissement de données, création de contacts CRM, attribution au bon commercial, notifications.",
        examples: "Typeform → HubSpot → Slack → Google Sheets"
      },
      {
        icon: Mail,
        title: "Email Marketing & Relances",
        description: "Séquences d'emails automatiques, relances clients, nurturing, notifications transactionnelles, synchronisation avec CRM.",
        examples: "Brevo → n8n → CRM → Analytics"
      },
      {
        icon: FileText,
        title: "Génération de Documents",
        description: "Création automatique de devis, factures, contrats, rapports PDF à partir de templates. Envoi automatique par email, stockage dans Drive.",
        examples: "CRM → Google Docs → PDF → Email → Drive"
      },
      {
        icon: Calendar,
        title: "Gestion de Projets",
        description: "Création automatique de tâches, affectation selon règles, notifications d'échéances, rapports d'avancement, synchronisation entre outils.",
        examples: "Notion → Asana → Slack → Email"
      },
      {
        icon: ShoppingCart,
        title: "E-commerce & Facturation",
        description: "Workflow de commande : paiement → création client → génération facture → email confirmation → ajout à la compta → notification équipe.",
        examples: "Stripe → Notion → Facture PDF → Email → Slack"
      },
      {
        icon: Database,
        title: "Synchronisation de Données",
        description: "Synchronisation bidirectionnelle entre bases de données, exports automatiques vers Excel/Google Sheets, consolidation de données multi-sources.",
        examples: "PostgreSQL → Google Sheets → Airtable → CRM"
      }
    ]
  },

  integrations: {
    title: "200+ Intégrations Disponibles",
    subtitle: "Nous connectons tous vos outils favoris avec n8n",
    categories: [
      {
        name: "CRM & Sales",
        icon: Users,
        tools: ["HubSpot", "Pipedrive", "Salesforce", "Zoho CRM"],
        color: "blue"
      },
      {
        name: "Email & Communication",
        icon: Mail,
        tools: ["Gmail", "Outlook", "Brevo", "Mailchimp"],
        color: "green"
      },
      {
        name: "Gestion de Projet",
        icon: Settings,
        tools: ["Notion", "Asana", "Trello", "Monday"],
        color: "purple"
      },
      {
        name: "E-commerce & Paiement",
        icon: ShoppingCart,
        tools: ["Stripe", "Shopify", "WooCommerce", "PayPal"],
        color: "orange"
      },
      {
        name: "Productivité",
        icon: Box,
        tools: ["Google Sheets", "Airtable", "Slack", "Teams"],
        color: "cyan"
      },
      {
        name: "Bases de Données",
        icon: Database,
        tools: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
        color: "red"
      }
    ]
  },

  features: [
    {
      icon: Shield,
      title: "Infrastructure Sécurisée",
      description: "Workflows hébergés sur serveurs européens dédiés. Chiffrement des données en transit et au repos. Authentification sécurisée par API keys ou OAuth2. Backups quotidiens automatiques.",
      technical: "Cloud AWS Europe + SSL/TLS"
    },
    {
      icon: BarChart,
      title: "Monitoring & Alertes",
      description: "Dashboard de suivi en temps réel de tous vos workflows. Alertes instantanées en cas d'erreur (email + Slack). Logs détaillés pour debugging. Statistiques d'exécution.",
      technical: "Uptime monitoring 24/7"
    },
    {
      icon: RefreshCw,
      title: "Gestion des Erreurs Robuste",
      description: "Retry automatique en cas d'échec temporaire. Workflows de secours (fallback). Notifications d'erreur avec contexte complet. Historique des exécutions pour audit.",
      technical: "Error handling avancé"
    },
    {
      icon: Zap,
      title: "Performance Optimisée",
      description: "Workflows optimisés pour traiter des milliers d'événements par jour. Parallélisation des tâches quand possible. Cache intelligent pour réduire les appels API.",
      technical: "Jusqu'à 10k exécutions/jour"
    },
    {
      icon: Code,
      title: "Code Custom si Besoin",
      description: "Si une intégration n'existe pas, on développe du code JavaScript/Python custom. Vous n'êtes jamais bloqué par les limitations d'un no-code.",
      technical: "JavaScript + Python nodes"
    },
    {
      icon: Users,
      title: "Formation & Documentation",
      description: "Formation de votre équipe à l'utilisation et la modification des workflows. Documentation complète pour chaque workflow. Accès à votre instance n8n si souhaité.",
      technical: "Session 2h + docs complètes"
    }
  ],

  pricing: {
    title: "Investissement pour Automatiser Vos Processus",
    subtitle: "Tarifs transparents, ROI mesurable dès le 1er mois",
    packages: [
      {
        name: "Workflow Unique",
        price: "1 500€",
        description: "Pour automatiser un processus spécifique",
        features: [
          "Audit du processus ciblé (1 session)",
          "Design du workflow (validation client)",
          "Développement d'1 workflow n8n",
          "Connexion de 2-3 outils max",
          "Tests & gestion d'erreurs basique",
          "Déploiement sur notre infra cloud",
          "Monitoring & alertes email",
          "Documentation workflow",
          "Formation équipe (1h)",
          "1 mois de support technique",
          "1 round de modifications inclus"
        ],
        cta: "Automatiser 1 tâche",
        timeframe: "2-3 semaines",
        savingsExample: "Exemple : automatiser la création de devis = 5h/semaine gagnées"
      },
      {
        name: "Pack 3 Workflows",
        price: "3 500€",
        description: "Pour transformer vos processus clés",
        features: [
          "Tout du Workflow Unique +",
          "Audit complet de vos processus (3 sessions)",
          "3 workflows développés et déployés",
          "Connexion illimitée d'outils",
          "Gestion d'erreurs avancée + retry",
          "Dashboard de monitoring dédié",
          "Alertes multi-canal (email + Slack)",
          "Tests avec données réelles",
          "Documentation complète",
          "Formation avancée équipe (2h)",
          "3 mois de support technique",
          "3 rounds de modifications inclus",
          "Optimisations pendant 3 mois"
        ],
        cta: "La plus populaire",
        highlighted: true,
        timeframe: "4-6 semaines",
        savingsExample: "Exemple : 3 workflows = 15-20h/semaine gagnées"
      },
      {
        name: "Partenariat Mensuel",
        price: "1 200€/mois",
        description: "Automatisation continue de votre business",
        features: [
          "Tout du Pack 3 Workflows +",
          "Développement continu de nouveaux workflows",
          "4h de dev incluses par mois",
          "Audit trimestriel de nouveaux processus",
          "Maintenance proactive de tous les workflows",
          "Optimisations de performance",
          "Support prioritaire sous 4h",
          "Accès à votre instance n8n dédiée",
          "Formation continue de votre équipe",
          "Veille technologique (nouvelles intégrations)",
          "Rapports mensuels de performance",
          "Conseil stratégique sur l'automatisation",
          "Évolutions illimitées"
        ],
        cta: "Devenir partenaire",
        timeframe: "Engagement 6 mois minimum",
        savingsExample: "ROI : 1 200€/mois vs 3 000€/mois d'un assistant admin"
      }
    ],
    note: "Tous nos forfaits incluent : hébergement cloud sécurisé, monitoring 24/7, et garantie de disponibilité.",
    roi: {
      title: "💡 Comment calculer votre ROI ?",
      points: [
        "1h/jour gagnée par personne = 20h/mois = 1 000€ économisés (coût horaire 50€)",
        "3 personnes qui gagnent 1h/jour = 3 000€/mois = 36 000€/an",
        "Investissement workflow : 1 500€ → ROI en 2 semaines",
        "Automatisation = investissement à vie (pas de coût récurrent humain)"
      ]
    }
  },

  comparison: {
    title: "n8n vs Zapier vs Développement Custom",
    subtitle: "Pourquoi nous recommandons n8n pour 90% des cas d'usage",
    categories: [
      {
        name: "Coût mensuel (10 workflows)",
        zapier: "200-400€/mois",
        n8n: "50€/mois (infra)",
        custom: "0€ (dev initial 10k€)"
      },
      {
        name: "Limite d'exécutions",
        zapier: "10 000 tasks/mois",
        n8n: "Illimité",
        custom: "Illimité"
      },
      {
        name: "Propriété des workflows",
        zapier: "Chez Zapier",
        n8n: "Vous possédez tout",
        custom: "Vous possédez tout"
      },
      {
        name: "Code custom possible",
        zapier: "Limité",
        n8n: "JavaScript natif",
        custom: "Total"
      },
      {
        name: "Hébergement",
        zapier: "Cloud Zapier uniquement",
        n8n: "Cloud ou self-hosted",
        custom: "Où vous voulez"
      },
      {
        name: "Temps de développement",
        zapier: "1-2 jours",
        n8n: "2-3 jours",
        custom: "2-4 semaines"
      },
      {
        name: "Maintenance",
        zapier: "Gérée par Zapier",
        n8n: "On gère pour vous",
        custom: "Vous devez gérer"
      }
    ],
    columns: [
      { key: "zapier", label: "Zapier", highlighted: false },
      { key: "n8n", label: "n8n (Notre Choix)", highlighted: true },
      { key: "custom", label: "Développement Custom", highlighted: false }
    ]
  },

  testimonial: {
    name: "Sophie M.",
    role: "CEO",
    company: "Agence Marketing",
    location: "Paris (75)",
    photo: "/testimonials/default-avatar.jpg",
    quote: "On perdait 10h/semaine à recopier nos leads depuis Typeform vers HubSpot, créer les deals, envoyer les emails de bienvenue. Killian a automatisé tout ça en 2 semaines. Maintenant c'est instantané et sans erreur. On a récupéré 40h/mois qu'on investit dans la prospection.",
    result: "40h/mois récupérées",
    metrics: {
      before: "10h/semaine de saisie manuelle",
      after: "0h - tout automatisé",
      roi: "ROI en 3 semaines"
    }
  },

  faq: {
    title: "Questions Fréquentes sur l'Automatisation avec n8n",
    subtitle: "Tout ce que vous devez savoir avant de vous lancer",
    items: [
      {
        question: "C'est quoi n8n exactement ?",
        answer: "n8n est une plateforme d'automatisation open-source (alternative à Zapier/Make) qui permet de connecter vos outils et d'automatiser vos processus métier. Contrairement à Zapier où vous payez par tâche exécutée, avec n8n hébergé vous n'avez aucune limite. Vous possédez vos workflows, pouvez coder en JavaScript si besoin, et n'êtes jamais bloqué par une intégration manquante. C'est plus puissant, plus flexible, et beaucoup moins cher sur le long terme."
      },
      {
        question: "Combien de temps pour automatiser un processus ?",
        answer: "Un workflow simple (ex: formulaire web → CRM → email) prend 2-3 semaines de bout en bout : audit (1 semaine), développement (1 semaine), tests et mise en prod (quelques jours). Un pack de 3 workflows interconnectés prend 4-6 semaines. Si vous optez pour le partenariat mensuel, on démarre immédiatement avec vos processus prioritaires et on itère chaque mois."
      },
      {
        question: "Mes outils sont-ils compatibles avec n8n ?",
        answer: "n8n intègre nativement 400+ applications (HubSpot, Google Workspace, Notion, Slack, Stripe, Shopify, etc.). Si votre outil a une API, on peut l'intégrer même sans connecteur natif grâce au node HTTP Request + code JavaScript. Nous avons déjà connecté des dizaines d'outils métier spécifiques. Dans 99% des cas, c'est techniquement possible. Envoyez-nous votre liste d'outils, on vous confirme la faisabilité gratuitement."
      },
      {
        question: "Que se passe-t-il si un workflow plante ?",
        answer: "Nous mettons en place une gestion d'erreurs robuste : retry automatique (si l'API est temporairement down), workflow de secours (fallback), alertes instantanées par email et Slack avec contexte complet. Vous êtes notifié en temps réel. Nous avons accès aux logs détaillés pour débugger en quelques minutes. Avec le monitoring 24/7, on détecte souvent les problèmes avant même qu'ils impactent vos processus."
      },
      {
        question: "Est-ce que je peux modifier les workflows moi-même après ?",
        answer: "OUI, absolument. Avec le forfait Partenariat, vous avez accès à votre instance n8n et pouvez modifier les workflows vous-même après notre formation. C'est justement l'avantage de n8n : interface visuelle intuitive, pas besoin d'être développeur. Mais si vous préférez qu'on gère 100% de la maintenance et des évolutions, on le fait pour vous. Vous choisissez votre niveau d'autonomie."
      },
      {
        question: "Quelle est la différence avec Zapier ou Make ?",
        answer: "Zapier et Make sont des SaaS où vous payez par tâche exécutée (200-500€/mois pour un usage intensif). n8n est open-source et s'héberge : coût d'infrastructure fixe (50€/mois pour notre hébergement cloud dédié), aucune limite d'exécutions. n8n est aussi plus puissant : code JavaScript natif, gestion d'erreurs avancée, workflows complexes, self-hosting possible. Sur 3 ans, n8n coûte 5x moins cher que Zapier pour des capacités supérieures."
      },
      {
        question: "Comment calculer le ROI d'une automatisation ?",
        answer: "Méthode simple : identifiez une tâche répétitive (ex: recopier des leads dans le CRM = 1h/jour). Multipliez par votre coût horaire chargé (ex: 50€/h). 1h/jour = 20h/mois = 1 000€/mois économisés = 12 000€/an. Si le workflow coûte 1 500€ à développer, il est rentabilisé en 6 semaines. Ensuite, c'est 12 000€/an économisés à vie. L'automatisation est l'investissement avec le meilleur ROI : effet immédiat, bénéfice perpétuel, coût unique."
      },
      {
        question: "Puis-je commencer petit et automatiser progressivement ?",
        answer: "C'est exactement ce qu'on recommande ! Démarrez avec 1 workflow sur votre processus le plus chronophage (souvent : capture de leads → CRM). Vous voyez le ROI immédiat, vos équipes adoptent l'automatisation, et vous gagnez en confiance. Ensuite on ajoute workflow par workflow, mois après mois. L'approche progressive limite les risques et garantit l'adoption par vos équipes. En 6 mois, vous avez automatisé 80% de vos tâches manuelles."
      }
    ]
  },

  badges: [
    {
      label: "n8n Certifié",
      icon: CheckCircle
    },
    {
      label: "Infrastructure Sécurisée",
      icon: Shield
    },
    {
      label: "Monitoring 24/7",
      icon: BarChart
    },
    {
      label: "ROI Garanti",
      icon: TrendingUp
    }
  ]
};
