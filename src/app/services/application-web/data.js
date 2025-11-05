import {
  Code,
  Zap,
  Lock,
  LineChart,
  Layers,
  RefreshCw,
  Rocket,
  Shield,
  Users,
  Database,
  Cloud,
  Terminal,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Briefcase,
  Calendar,
  FileText,
  Settings,
  BarChart,
  DollarSign,
  Star,
  Sparkles,
  Cog
} from 'lucide-react';

export const applicationWebData = {
  hero: {
    eyebrow: "Développement d'Applications Web sur Mesure",
    title: "L'Outil Métier qui Transforme Votre Façon de Travailler",
    subtitle: "Arrêtez de vous adapter aux logiciels standards. Nous créons l'application web qui s'adapte à VOS processus uniques et devient votre véritable avantage concurrentiel. MVP en 10 semaines.",
    ctaLabel: "Discuter de mon projet",
    microPromises: [
      "MVP livré en 10 semaines",
      "Architecture évolutive garantie",
      "Code source 100% à vous",
      "Support technique 6 mois inclus"
    ]
  },

  challenges: [
    {
      icon: AlertCircle,
      title: "Processus bridés par les outils",
      problem: "Vous avez investi dans Salesforce, Monday, ou Notion. Mais votre façon unique de travailler (qui fait votre force) ne rentre pas dans leurs cases. Vous perdez 2h/jour à contourner les limitations, à ressaisir des données, et à bricoler avec Zapier.",
      solution: "Nous développons un outil qui épouse parfaitement vos processus métier. Workflow sur-mesure, automatisations natives, interface pensée pour VOS utilisateurs. Résultat : 2h/jour récupérées par collaborateur = 40h/mois = 1 ETP récupéré.",
      stat: "68% des entreprises abandonnent un logiciel dans les 12 mois car trop rigide"
    },
    {
      icon: DollarSign,
      title: "Coûts SaaS qui explosent",
      problem: "Vous payez 500€/mois par outil (CRM + Gestion de projet + Facturation + Support client). 2 500€/mois pour 5 outils qui ne communiquent pas entre eux. Et chaque ajout d'utilisateur coûte 50€/mois. Votre budget SaaS double tous les 2 ans.",
      solution: "Une application sur-mesure = un coût unique de développement, puis 150-300€/mois d'hébergement. Pas de limite d'utilisateurs, pas d'augmentation surprise. Sur 3 ans, vous économisez 60 000€ tout en ayant un outil 10x plus adapté.",
      stat: "Budget SaaS moyen d'une PME : 30 000€/an. ROI d'une app custom : 18 mois"
    },
    {
      icon: Lock,
      title: "Dépendance à un éditeur",
      problem: "Votre business repose sur un SaaS. Demain, l'éditeur augmente ses prix de 40% (comme Zoom en 2023), change ses conditions, ou se fait racheter. Vous n'avez aucun levier. Vos données sont prisonnières. Migrer = 6 mois de chaos.",
      solution: "Avec votre propre application, VOUS contrôlez tout : vos données, votre code source, votre roadmap. Vous pouvez revendre votre outil à des concurrents. Ou l'utiliser comme levier de négociation lors d'une levée de fonds. Votre technologie devient un actif valorisable.",
      stat: "45% des scale-ups citent la dépendance SaaS comme risque majeur"
    }
  ],

  process: {
    title: "Notre Méthode en 4 Étapes",
    subtitle: "De l'idée à la mise en production, un processus rodé qui élimine 90% des risques",
    steps: [
      {
        icon: Sparkles,
        number: "01",
        title: "Atelier Stratégique (Semaines 1-2)",
        description: "3 sessions de 2h pour décortiquer vos processus métier, identifier les gains rapides, et définir le MVP. On ressort avec un cahier des charges visuel (wireframes) et un backlog priorisé.",
        deliverables: ["User stories prioritisées", "Wireframes cliquables", "Architecture technique", "Roadmap MVP vs V2"],
        duration: "2 semaines"
      },
      {
        icon: Code,
        number: "02",
        title: "Design & Prototypage (Semaines 3-5)",
        description: "Nous créons l'interface dans Figma. Vous testez chaque écran en conditions réelles avec vos équipes. On itère jusqu'à validation complète avant d'écrire la moindre ligne de code.",
        deliverables: ["Maquettes Figma haute-fidélité", "Design system", "Prototype interactif", "Tests utilisateurs"],
        duration: "3 semaines"
      },
      {
        icon: Rocket,
        number: "03",
        title: "Développement Agile (Semaines 6-9)",
        description: "Sprints de 1 semaine avec démo chaque vendredi. Vous voyez l'app grandir en temps réel et donnez votre feedback. Architecture modulaire pour faciliter les évolutions futures.",
        deliverables: ["Code source propre et documenté", "Tests automatisés", "API REST sécurisée", "Dashboard admin"],
        duration: "4 semaines"
      },
      {
        icon: CheckCircle,
        number: "04",
        title: "Mise en Production & Formation (Semaine 10)",
        description: "Déploiement sur infrastructure sécurisée, formation de vos équipes, documentation complète. Puis 6 mois de support inclus pour garantir l'adoption.",
        deliverables: ["App en production", "Documentation technique", "Formation équipe", "Monitoring & alertes"],
        duration: "1 semaine + 6 mois de support"
      }
    ]
  },

  techStack: {
    title: "Technologies Modernes & Éprouvées",
    subtitle: "Nous utilisons les meilleurs outils pour garantir performance, sécurité et évolutivité",
    categories: [
      {
        name: "Frontend",
        icon: Code,
        techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        description: "Interfaces rapides et réactives"
      },
      {
        name: "Backend",
        icon: Database,
        techs: ["Node.js", "Python/Django", "PostgreSQL", "Redis"],
        description: "API robustes et scalables"
      },
      {
        name: "Cloud & DevOps",
        icon: Cloud,
        techs: ["AWS", "Docker", "GitHub Actions", "Vercel"],
        description: "Déploiement automatisé et sécurisé"
      },
      {
        name: "Monitoring",
        icon: BarChart,
        techs: ["Sentry", "Grafana", "Google Analytics", "Hotjar"],
        description: "Suivi de performance et bugs"
      }
    ]
  },

  useCases: {
    title: "Types d'Applications que Nous Développons",
    subtitle: "Des outils métier qui résolvent de vrais problèmes business",
    cases: [
      {
        icon: Briefcase,
        title: "CRM & Gestion Client",
        description: "Pipeline commercial sur-mesure, qualification automatique des leads, historique client 360°, prévisions de ventes.",
        examples: "Pour cabinets de conseil, agences, courtiers"
      },
      {
        icon: Calendar,
        title: "Planification & Ressources",
        description: "Gestion de planning d'équipe, affectation de ressources, suivi de projets, timetracking intégré.",
        examples: "Pour agences créatives, ESN, cabinets d'architecture"
      },
      {
        icon: FileText,
        title: "Gestion Documentaire",
        description: "GED avec workflow de validation, signature électronique, recherche avancée, versioning automatique.",
        examples: "Pour cabinets juridiques, experts-comptables, notaires"
      },
      {
        icon: Settings,
        title: "Automatisation de Processus",
        description: "Workflow métier personnalisé, intégrations API, génération de documents, notifications intelligentes.",
        examples: "Pour toute entreprise avec processus complexes"
      },
      {
        icon: BarChart,
        title: "Tableaux de Bord & BI",
        description: "Dashboards temps réel, KPIs métier, exports automatisés, alertes sur seuils critiques.",
        examples: "Pour directions et C-level"
      },
      {
        icon: Users,
        title: "Portails Client/Partenaire",
        description: "Espace client sécurisé, suivi de commandes, facturation, support intégré.",
        examples: "Pour e-commerce, SaaS, services B2B"
      }
    ]
  },

  features: [
    {
      icon: Shield,
      title: "Sécurité de Niveau Entreprise",
      description: "Authentification 2FA, chiffrement des données, sauvegardes quotidiennes, conformité RGPD native. Certificat SSL/TLS, protection contre les injections SQL et attaques XSS.",
      technical: "OWASP Top 10 + ISO 27001"
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Temps de chargement < 2 secondes, pagination intelligente, cache Redis, CDN pour les assets. Optimisation des requêtes SQL, code splitting automatique.",
      technical: "Google PageSpeed > 90/100"
    },
    {
      icon: RefreshCw,
      title: "Architecture Évolutive",
      description: "Code modulaire qui facilite l'ajout de fonctionnalités. API REST documentée pour futures intégrations. Base de données normalisée pour éviter la dette technique.",
      technical: "Microservices + API-first"
    },
    {
      icon: Users,
      title: "Multi-utilisateurs & Rôles",
      description: "Gestion fine des permissions par profil utilisateur. Logs d'activité pour traçabilité. Interface admin complète pour gérer votre équipe sans développeur.",
      technical: "RBAC (Role-Based Access Control)"
    },
    {
      icon: Cloud,
      title: "Hébergement Cloud Sécurisé",
      description: "Serveurs en France/UE pour conformité RGPD. Uptime garanti 99.9%. Backups automatiques quotidiens avec rétention 30 jours. Scalabilité automatique selon la charge.",
      technical: "AWS / OVH / Scaleway"
    },
    {
      icon: Terminal,
      title: "Code Source & Documentation",
      description: "Vous possédez 100% du code source (pas de licence restrictive). Documentation technique complète pour faciliter la reprise par une autre équipe si besoin. Tests unitaires inclus.",
      technical: "Licence MIT + README complet"
    }
  ],

  pricing: {
    title: "Investissement pour Votre Application",
    subtitle: "Tarifs transparents adaptés à la complexité de votre projet",
    packages: [
      {
        name: "MVP Simple",
        price: "15 000€",
        description: "Pour valider rapidement un concept",
        features: [
          "Atelier stratégique (1-2 semaines)",
          "Design UX/UI sobre (5-7 écrans)",
          "Développement MVP (3-4 fonctionnalités core)",
          "Authentification utilisateur",
          "Dashboard simple",
          "Base de données PostgreSQL",
          "API REST documentée",
          "Déploiement sur cloud sécurisé",
          "SSL/TLS + backups quotidiens",
          "Formation équipe (2h)",
          "Documentation utilisateur",
          "3 mois de support technique",
          "Code source fourni (licence MIT)"
        ],
        cta: "Démarrer rapidement",
        timeframe: "8-10 semaines"
      },
      {
        name: "Application Métier Complète",
        price: "35 000€",
        description: "Pour transformer vos processus en profondeur",
        features: [
          "Tout du pack MVP Simple +",
          "Atelier stratégique approfondi (2 semaines)",
          "Design system complet & maquettes avancées",
          "10-15 fonctionnalités métier sur-mesure",
          "Gestion des rôles et permissions (RBAC)",
          "Workflow métier automatisé",
          "Intégrations API externes (CRM, compta, etc.)",
          "Tableaux de bord temps réel avec KPIs",
          "Export de données (PDF, Excel, CSV)",
          "Notifications email/SMS personnalisées",
          "Module de reporting avancé",
          "Tests automatisés (95% de couverture)",
          "Monitoring & alertes (Sentry)",
          "Formation avancée équipe (1 journée)",
          "6 mois de support technique prioritaire",
          "Documentation technique complète"
        ],
        cta: "La plus populaire",
        highlighted: true,
        timeframe: "12-14 semaines"
      },
      {
        name: "Plateforme Enterprise",
        price: "Sur devis",
        description: "Pour applications critiques à fort volume",
        features: [
          "Tout du pack Complet +",
          "Architecture microservices scalable",
          "Multi-tenancy (SaaS multi-clients)",
          "Haute disponibilité (99.99% uptime)",
          "Conformité avancée (ISO 27001, SOC 2)",
          "Intégrations complexes (ERP, BI, etc.)",
          "API publique pour partenaires",
          "Interface mobile native (iOS/Android)",
          "Intelligence artificielle / ML sur-mesure",
          "Audit de sécurité par pentester",
          "Infrastructure multi-région",
          "Support 24/7 avec SLA garanti",
          "Évolutions continues (forfait mensuel)",
          "Accompagnement stratégique long terme"
        ],
        cta: "Discutons-en",
        timeframe: "20+ semaines"
      }
    ],
    note: "Tous nos forfaits incluent : code source 100% à vous, hébergement 1ère année incluse, conformité RGPD, et garantie satisfaction.",
    maintenance: {
      title: "Maintenance & Évolution Continue",
      description: "Après la livraison, votre application a besoin de vivre et d'évoluer. Nous proposons des forfaits mensuels pour assurer la pérennité de votre investissement.",
      plans: [
        {
          name: "Support Basique",
          price: "500€/mois",
          includes: ["Monitoring 24/7", "Correctifs de bugs", "Mises à jour de sécurité", "Backups quotidiens", "Support email sous 48h"]
        },
        {
          name: "Évolution Active",
          price: "2 000€/mois",
          includes: ["Tout du Support Basique +", "4h de dev par mois pour nouvelles features", "Support prioritaire sous 4h", "Optimisations performance", "Rapports mensuels"]
        },
        {
          name: "Partenariat Stratégique",
          price: "5 000€/mois",
          includes: ["Tout de l'Évolution Active +", "20h de dev par mois", "Roadmap trimestrielle", "Support 24/7 avec SLA", "Conseil stratégique mensuel"]
        }
      ]
    }
  },

  comparison: {
    title: "Build vs Buy : Pourquoi Développer sur Mesure ?",
    subtitle: "Comparaison objective entre SaaS standard et application custom",
    categories: [
      {
        name: "Coût sur 3 ans",
        saas: "90 000€ (30k/an)",
        custom: "50 000€ (dev + hosting)"
      },
      {
        name: "Adaptation à vos processus",
        saas: "20-30% de fit",
        custom: "100% sur-mesure"
      },
      {
        name: "Limite d'utilisateurs",
        saas: "10-50 (puis +50€/user)",
        custom: "Illimité"
      },
      {
        name: "Propriété des données",
        saas: "Chez l'éditeur",
        custom: "100% chez vous"
      },
      {
        name: "Évolution de la roadmap",
        saas: "Décidée par l'éditeur",
        custom: "Vous décidez tout"
      },
      {
        name: "Risque de fermeture",
        saas: "Dépendance totale",
        custom: "Zéro risque"
      },
      {
        name: "Valorisation à la revente",
        saas: "0€",
        custom: "Actif valorisable"
      }
    ],
    columns: [
      { key: "saas", label: "SaaS Standard", highlighted: false },
      { key: "custom", label: "Application Custom", highlighted: true }
    ]
  },

  testimonial: {
    name: "Thomas D.",
    role: "CEO",
    company: "Cabinet de Conseil RH",
    location: "Paris (75)",
    photo: "/testimonials/default-avatar.jpg",
    quote: "Nous perdions 10h/semaine à jongler entre Notion, Trello et Excel pour gérer nos missions de recrutement. Killian a développé un CRM sur-mesure qui centralise tout : candidats, clients, facturation. Résultat : 2x plus de missions gérées avec la même équipe, et notre outil devient un argument commercial face aux concurrents.",
    result: "ROI en 4 mois",
    metrics: {
      before: "15 missions/mois",
      after: "30 missions/mois",
      timeSaved: "10h/semaine récupérées"
    }
  },

  faq: {
    title: "Questions Fréquentes sur le Développement d'Applications Web",
    subtitle: "Tout ce que vous devez savoir avant de lancer votre projet",
    items: [
      {
        question: "Combien de temps pour développer mon application ?",
        answer: "Cela dépend de la complexité. Un MVP simple (5-7 fonctionnalités core) prend 8-10 semaines. Une application métier complète (10-15 features avec intégrations) prend 12-14 semaines (3-3.5 mois). Une plateforme complexe peut prendre 5-6 mois. Nous fonctionnons en sprints d'1 semaine avec démo chaque vendredi, donc vous voyez les avancées en temps réel et pouvez réajuster les priorités."
      },
      {
        question: "Est-ce que je possède le code source ?",
        answer: "OUI, absolument. Contrairement aux SaaS où vous ne possédez rien, nous vous livrons 100% du code source avec une licence MIT (vous pouvez en faire ce que vous voulez). Vous pouvez le revendre, le modifier, ou faire appel à une autre équipe pour le maintenir. Nous fournissons aussi la documentation technique complète et les accès aux serveurs. Votre application = votre actif."
      },
      {
        question: "Pourquoi pas utiliser un SaaS type Monday, Notion ou Airtable ?",
        answer: "Les SaaS sont excellents pour des besoins standards. Mais si votre processus métier fait votre différence concurrentielle, un SaaS devient une limitation. Exemple concret : un cabinet de recrutement qui doit gérer 10 statuts de candidats personnalisés, des workflows d'approbation complexes, et des intégrations avec leur système de facturation. Aucun SaaS ne fait ça nativement. Résultat : 2h/jour perdues en bricolage. Sur 3 ans, un SaaS coûte 90k€ pour un fit de 30%. Une app custom coûte 35k€ pour un fit de 100%. Le ROI est évident."
      },
      {
        question: "Comment gérez-vous la sécurité et le RGPD ?",
        answer: "Sécurité et RGPD sont intégrés dès le départ, pas ajoutés après coup. Nous appliquons les bonnes pratiques OWASP Top 10 : authentification 2FA, chiffrement des mots de passe (bcrypt), protection contre injections SQL et XSS, certificat SSL/TLS. Hébergement en France/UE (AWS Paris ou OVH) pour conformité RGPD. Backups quotidiens chiffrés avec rétention 30 jours. Logs d'activité pour traçabilité. Nous fournissons la documentation RGPD (registre des traitements, mentions légales, politique de confidentialité) et pouvons organiser un audit de sécurité par un pentester si besoin."
      },
      {
        question: "Que se passe-t-il après la livraison ?",
        answer: "6 mois de support technique sont inclus dans tous nos forfaits : corrections de bugs, hotfixes, réponses à vos questions techniques sous 48h. Après cette période, nous proposons des forfaits de maintenance mensuels (à partir de 500€/mois) pour : monitoring 24/7, mises à jour de sécurité, évolutions fonctionnelles, optimisations. Mais vous n'êtes pas bloqué : puisque vous possédez le code source, vous pouvez aussi faire appel à une autre équipe ou recruter un développeur en interne."
      },
      {
        question: "Puis-je commencer petit et faire évoluer ensuite ?",
        answer: "C'est exactement notre recommandation ! Nous démarrons toujours par un MVP (Minimum Viable Product) qui résout votre problème le plus urgent. Par exemple : un CRM basique avec pipeline et gestion de contacts. Vous le testez 2-3 mois avec vos équipes, récoltez du feedback, puis on ajoute phase 2 : intégration avec votre outil de facturation, automatisations, dashboards avancés. Cette approche itérative limite les risques et garantit que chaque euro investi apporte de la valeur métier immédiate."
      },
      {
        question: "Comment garantissez-vous que l'app correspondra à mes besoins ?",
        answer: "Nous ne codons JAMAIS avant validation complète du design. Processus : (1) Atelier stratégique de 3 sessions pour comprendre vos processus métier. (2) Création de wireframes cliquables que vous testez avec vos équipes. (3) Design Figma haute-fidélité avec prototype interactif. Vous validez chaque écran, chaque workflow. (4) Seulement après validation, on démarre le développement. Et même là, sprints d'1 semaine avec démo chaque vendredi = vous pouvez réorienter en temps réel. Résultat : 95% de nos projets sont validés du premier coup à la livraison."
      },
      {
        question: "Proposez-vous un paiement échelonné ?",
        answer: "Oui, nous fractionnons le paiement pour faciliter votre trésorerie. Exemple pour un projet à 35 000€ : 30% à la signature (10 500€), 40% à la validation du design (14 000€), 30% à la mise en production (10 500€). Pour les forfaits > 50k€, nous pouvons étaler sur 4 ou 5 échéances. Nous nous adaptons à vos contraintes budgétaires."
      }
    ]
  },

  badges: [
    {
      label: "Code Source Fourni",
      icon: Terminal
    },
    {
      label: "Conformité RGPD",
      icon: Shield
    },
    {
      label: "Architecture Évolutive",
      icon: RefreshCw
    },
    {
      label: "Support 6 Mois Inclus",
      icon: CheckCircle
    }
  ],

  roi: {
    title: "Calculez Votre Retour sur Investissement",
    description: "Simulation personnalisée pour évaluer la rentabilité de votre application sur-mesure"
  }
};
