import {
  Search,
  Shield,
  Clock,
  Lock,
  TrendingUp,
  Briefcase,
  Euro,
  FileText,
  Mail,
  Calendar,
  Star,
  Award,
  HelpCircle,
  CheckCircle,
  Scale,
  Database,
  UserCheck,
  FileCheck
} from 'lucide-react';

export const avocatData = {
  hero: {
    eyebrow: "Agence Web pour Professions Juridiques",
    title: "Un Site d'Avocat Conforme CNB 2023",
    titleGradient: "Qui Convertit Vos Visiteurs en Clients",
    subtitle: "Attirez 3x plus de clients qualifiés sans enfreindre la déontologie. Site internet conforme RGPD, optimisé pour le référencement local, et conçu pour transformer vos visiteurs en rendez-vous.",
    ctaLabel: "Obtenir mon devis avocat gratuit",
    demoUrl: "https://maquette.avocat.killian-lecrut.com/",
    demoLabel: "Voir la démo",
    microPromises: [
      "Livraison en 3 semaines",
      "Conformité CNB 2023 garantie",
      "Modifications illimitées pendant 30 jours",
      "Support prioritaire 6 mois inclus"
    ]
  },

  challenges: [
    {
      icon: Search,
      title: "Invisible sur Google",
      problem: "Vos clients potentiels cherchent 'avocat divorce Melun' ou 'avocat droit du travail Seine-et-Marne' sur Google, mais trouvent vos concurrents. Sans présence digitale optimisée, vous perdez des dossiers qualifiés chaque semaine.",
      solution: "Nous créons un site optimisé pour le référencement local juridique, avec des pages dédiées par domaine de compétence (droit de la famille, pénal, affaires, travail...). Votre cabinet apparaît dans les recherches pertinentes de votre zone géographique.",
      stat: "73% des clients choisissent un avocat via une recherche Google"
    },
    {
      icon: Lock,
      title: "Site non conforme",
      problem: "Secret professionnel, données sensibles, communication encadrée par le CNB et le RIN. Un site non conforme expose le cabinet à des sanctions disciplinaires et à des risques juridiques graves. Une radiation = 150 000€/an de CA perdus.",
      solution: "Nous garantissons une conformité totale : formulaire sécurisé SSL, hébergement français RGPD, mentions légales conformes CNB 2023, respect absolu du Code de déontologie et du Règlement Intérieur National. Documentation complète fournie pour déclaration à l'Ordre.",
      stat: "Conformité RGPD obligatoire + sanctions disciplinaires possibles"
    },
    {
      icon: Shield,
      title: "Design amateur",
      problem: "Choisir un avocat = confier un problème juridique grave. Le visiteur scrute chaque détail de votre site pour juger votre sérieux. Un site amateur ou template WordPress générique détruit instantanément la confiance et vous fait perdre 85% de vos visiteurs.",
      solution: "Design sobre et professionnel conforme aux codes de la profession. Diplômes et inscriptions au barreau mis en avant, architecture pensée pour la conversion, présentation claire de votre parcours et de vos domaines d'intervention.",
      stat: "85% des visiteurs jugent la crédibilité d'un cabinet en moins de 5 secondes"
    }
  ],

  conformity: [
    {
      icon: Shield,
      title: "Conformité RGPD + Secret Professionnel",
      description: "Hébergement français en UE, formulaire sécurisé avec chiffrement bout en bout, politique de confidentialité respectant le secret professionnel de l'avocat (art. 14.5, 17.3, 21 et 15.4 du RGPD), pas de traceurs publicitaires (uniquement cookies essentiels).",
      reference: "RGPD UE 2016/679 + Guide pratique CNB Mai 2023"
    },
    {
      icon: Scale,
      title: "Code de Déontologie CNB",
      description: "Communication sincère, modérée, loyale et non comparative conforme au nouveau Code de déontologie. Pas de promesse de résultat, pas de témoignages clients, pas de mention de dossiers. Contenu factuel et vérifiable. Site déclaré au Conseil de l'Ordre.",
      reference: "Décret n°2023-552 du 30 juin 2023"
    },
    {
      icon: FileCheck,
      title: "Vade-mecum Communication",
      description: "Respect strict du Vade-mecum (Octobre 2023) : pas de diffusion de commentaires faisant l'éloge de l'avocat, maximum 3 domaines d'activités dominantes, nom de domaine avec nom du cabinet. Communication préalable de toute publicité au Conseil de l'Ordre.",
      reference: "Vade-mecum Communication CNB - 3ème édition Octobre 2023"
    },
    {
      icon: Database,
      title: "Sécurité et Documentation",
      description: "Authentification forte (2FA), sauvegardes quotidiennes cryptées, protection maximale des données sensibles. Documentation complète fournie : notice de gestion des données, politique cookies, modèle mentions légales, attestation de déclaration au Conseil de l'Ordre.",
      reference: "Loi n°2004-575 + Guide RGPD CNB 2023"
    }
  ],

  features: [
    {
      icon: Briefcase,
      title: "Présentation des Domaines de Compétence",
      description: "Droit de la famille, pénal, affaires, travail... Chaque domaine avec sa page dédiée, explications claires et pédagogiques pour vos clients potentiels.",
      technical: "Structure SEO optimisée par domaine"
    },
    {
      icon: Euro,
      title: "Espace Honoraires Transparent",
      description: "Grille tarifaire (forfait ou taux horaire) conforme aux recommandations du CNB. Rassure les clients sérieux et filtre les demandes non qualifiées.",
      technical: "Affichage clair sans promesse trompeuse"
    },
    {
      icon: FileText,
      title: "Blog Juridique (Pack Pro)",
      description: "Démontrez votre expertise avec des articles pédagogiques sur l'actualité juridique. Excellent pour le SEO et la crédibilité professionnelle. Disponible à partir du pack Professionnel.",
      technical: "CMS intégré, optimisé référencement"
    },
    {
      icon: Mail,
      title: "Formulaire de Contact Sécurisé",
      description: "Chiffrement SSL/TLS, respect du secret professionnel, pré-qualification automatique pour éviter les demandes hors compétence. Pas de traceurs publicitaires, uniquement cookies essentiels. Information claire sur la finalité et la durée de conservation.",
      technical: "Chiffrement bout en bout, conformité RGPD + Secret professionnel"
    },
    {
      icon: Calendar,
      title: "Prise de Rendez-vous en Ligne (Pack Pro)",
      description: "Intégration Calendly ou solution sur-mesure pour automatiser votre agenda et réduire les allers-retours par téléphone. Disponible à partir du pack Professionnel.",
      technical: "Synchronisation agenda, confirmation auto"
    },
    {
      icon: Award,
      title: "Diplômes et Certifications",
      description: "Barreau d'inscription, CAPA, spécialisations officielles, formations continues... Tout ce qui bâtit la confiance et légitime votre expertise.",
      technical: "Section dédiée avec visuels professionnels"
    },
    {
      icon: HelpCircle,
      title: "FAQ Juridique",
      description: "Réponses aux questions récurrentes (honoraires, délais, procédures...) qui déchargent votre secrétariat et rassurent les visiteurs hésitants.",
      technical: "Format accordéon, recherche intégrée"
    },
    {
      icon: Lock,
      title: "Mentions Légales Conformes",
      description: "Page complète conforme à la Loi n°2004-575 : SIREN/SIRET, barreau d'inscription, assurance RCP, politique RGPD respectant le secret professionnel, droits d'accès et de suppression des données. Documentation fournie : notice de gestion des données, politique cookies, modèle mentions légales, attestation de déclaration.",
      technical: "Conforme Décret 30/06/2023 + Vade-mecum 10/2023"
    }
  ],

  testimonial: {
    name: "Maître Sophie L.",
    role: "Avocat en Droit du Travail",
    location: "Melun (77)",
    photo: "/testimonials/avocat-placeholder.jpg",
    quote: "En tant qu'avocate indépendante, j'avais besoin d'un site qui reflète mon professionnalisme sans être froid. Killian a parfaitement compris mes contraintes déontologiques et a créé un site sobre, conforme au CNB, qui convertit réellement. Mes demandes de rendez-vous qualifiés ont triplé en 6 mois.",
    result: "x3 demandes qualifiées",
    before: "2-3 appels/semaine",
    after: "8-10 RDV qualifiés/semaine"
  },

  faq: {
    title: "Questions Fréquentes des Avocats",
    subtitle: "Tout ce que vous devez savoir sur la création d'un site conforme pour votre cabinet",
    items: [
      {
        question: "Un avocat a-t-il le droit de faire de la publicité sur son site ?",
        answer: "Oui, la publicité personnelle est permise depuis le nouveau Code de déontologie (Décret n°2023-552 du 30 juin 2023), à condition qu'elle procure une information sincère et respecte les principes essentiels de la profession. Votre site peut présenter vos domaines de compétence (maximum 3 activités dominantes selon le Vade-mecum Octobre 2023), vos honoraires et votre parcours. Important : toute publicité doit être communiquée au Conseil de l'Ordre sans délai, et vous ne pouvez pas mentionner le nom de vos clients, vos dossiers, ni diffuser des témoignages clients."
      },
      {
        question: "Comment gérer les données sensibles des clients qui me contactent ?",
        answer: "Spécificité avocat : le secret professionnel vous permet de ne pas souscrire à certaines obligations RGPD (articles 14.5, 17.3, 21 et 15.4 du RGPD) selon le Guide pratique CNB Mai 2023. Nous mettons en place un formulaire sécurisé avec chiffrement SSL/TLS, hébergement français en UE, et politique de confidentialité respectant ce cadre juridique spécifique. Pas de traceurs publicitaires (uniquement cookies essentiels). Documentation fournie : registre des traitements, notice de gestion des données, DPA avec l'hébergeur. Important : nous informons les visiteurs que le formulaire n'est pas adapté aux urgences ni aux informations confidentielles détaillées (à réserver à l'entretien en cabinet)."
      },
      {
        question: "Dois-je afficher mes tarifs publiquement ?",
        answer: "Ce n'est pas obligatoire selon le CNB, mais c'est fortement recommandé pour la transparence et pour filtrer les demandes. Vous pouvez afficher soit une fourchette tarifaire (ex: 'Entre 150€ et 250€/heure selon la complexité'), soit des forfaits pour des prestations types (ex: 'Divorce par consentement mutuel : à partir de 1 500€ HT'). Cela rassure les clients sérieux et évite de perdre du temps avec des prospects qui n'ont pas le budget. Nous vous aidons à rédiger cette section de manière conforme et claire."
      },
      {
        question: "Pourquoi vos tarifs sont-ils plus élevés qu'un site classique ?",
        answer: "Nos sites intègrent une expertise juridique spécialisée : conformité CNB 2023, RGPD natif, mentions légales rédigées par des juristes, dossier technique pour l'Ordre. Un site non-conforme peut entraîner une radiation (= 150 000€/an de CA perdus). Nous vous protégons de ce risque tout en vous faisant gagner 40h de votre temps facturable (soit 10 000€ de manque à gagner si vous le faisiez vous-même). De plus, 1 seul nouveau client à 2 000€ rentabilise l'investissement."
      },
      {
        question: "Proposez-vous un paiement échelonné ?",
        answer: "Oui, nous proposons un paiement en 2 ou 3 fois sans frais pour faciliter votre trésorerie. Par exemple, pour le forfait Professionnel à 4 500€ : 1 500€ à la commande, 1 500€ à la livraison de la maquette, 1 500€ à la mise en ligne. Nous nous adaptons à vos contraintes budgétaires."
      },
      {
        question: "Quel délai pour créer un site d'avocat conforme ?",
        answer: "Comptez 3 semaines pour un site vitrine essentiel conforme (pack à 2 500€) : 1 semaine de cadrage et maquette, 1,5 semaine de développement avec intégration RGPD, 0,5 semaine de tests et validation finale. Pour le pack Professionnel avec blog, prise de RDV en ligne et SEO avancé (4 500€), prévoyez 4 semaines. Pour un site Premium sur-mesure avec espace client sécurisé et CRM, comptez 5 à 6 semaines."
      },
      {
        question: "Le site sera-t-il compatible avec l'inscription à l'Ordre des Avocats ?",
        answer: "Absolument. Votre site respectera scrupuleusement le Code de déontologie (Décret n°2023-552 du 30/06/2023) et le Vade-mecum Communication (Octobre 2023) : communication digne et mesurée, maximum 3 domaines d'activités dominantes, pas de démarchage, pas de témoignages clients, pas de mention de dossiers, informations factuelles sans promesse de résultat. Important : l'ouverture ou la modification substantielle d'un site doit être communiquée au Conseil de l'Ordre sans délai. Nous vous fournissons un dossier technique complet pour cette déclaration : attestation de conformité, documentation RGPD, politique de confidentialité, copie des mentions légales."
      },
      {
        question: "Que se passe-t-il si les règles du CNB évoluent ?",
        answer: "Nous assurons une veille juridique continue sur les évolutions du RIN et des règles déontologiques. Si une modification réglementaire impacte votre site, nous vous informons immédiatement et proposons les mises à jour nécessaires. De plus, nous incluons systématiquement 3 mois de maintenance dans nos forfaits, couvrant les ajustements de conformité éventuels post-livraison."
      },
      {
        question: "Que comprend l'abonnement annuel ?",
        answer: "Votre abonnement annuel de 150€ inclut :\n\n• Hébergement cloud premium (serveurs français en UE, sauvegardes quotidiennes)\n• Nom de domaine (renouvellement annuel inclus)\n• Certificat SSL/TLS (sécurité HTTPS)\n• Mises à jour de sécurité automatiques\n• Modifications mineures (textes, images, coordonnées, tarifs, couleurs)\n• Support technique par email\n• Veille réglementaire CNB et alertes conformité\n• Surveillance et maintenance préventive\n\nLa première année d'hébergement est incluse dans le prix de création de votre site. À partir de la 2ème année, l'abonnement annuel de 150€/an prend le relais.\n\nPas de surprise, pas de frais cachés. Votre site reste en ligne, sécurisé et conforme tant que l'abonnement est actif."
      }
    ]
  },

  pricing: {
    simplified: true,
    startingAt: "1 200€",
    monthly: "150€",
    subtitle: "Un investissement réfléchi pour votre cabinet",
    includes: [
      "Site 5 pages sur-mesure (Accueil, Présentation, Domaines, Contact, Mentions légales)",
      "Design sobre et professionnel conforme aux codes de la profession",
      "Mentions légales CNB 2023 rédigées (Décret n°2023-552 du 30/06/2023)",
      "Politique de confidentialité respectant le secret professionnel",
      "Formulaire de contact avec chiffrement SSL/TLS",
      "Hébergement premium UE + nom de domaine (1ère année)",
      "Dossier de conformité pour déclaration au Conseil de l'Ordre",
      "Formation de 2h + 3 mois de support",
      "Modifications illimitées pendant 30 jours"
    ],
    note: "Options avancées (blog juridique, prise de RDV en ligne, espace client sécurisé) disponibles sur devis",
    justification: {
      title: "Pourquoi cet investissement ?",
      points: [
        "Un avocat radié pour site non-conforme perd 150 000€/an de CA.",
        "1 seul nouveau client à 2 000€ rentabilise l'investissement.",
        "Notre expertise juridique vous protège ET vous fait gagner du temps.",
        "Paiement en 3× sans frais pour votre trésorerie."
      ]
    }
  },

  badges: [
    {
      label: "Conforme CNB 2023",
      icon: Scale
    },
    {
      label: "RGPD Natif",
      icon: Shield
    },
    {
      label: "Secret Professionnel Respecté",
      icon: Lock
    },
    {
      label: "Validé par des Avocats",
      icon: CheckCircle
    }
  ],

  comparison: {
    title: "Pourquoi Nous Choisir ?",
    subtitle: "Comparaison objective avec les autres solutions",
    left: "Nous",
    right: "Agence Web Classique",
    rows: [
      { feature: "Conformité CNB 2023", leftValue: "✓", rightValue: "✗" },
      { feature: "Conformité RGPD native", leftValue: "✓", rightValue: "Partielle" },
      { feature: "Mentions légales avocat", leftValue: "✓", rightValue: "✗" },
      { feature: "Dossier pour l'Ordre", leftValue: "✓", rightValue: "✗" },
      { feature: "Performance optimisée", leftValue: "✓", rightValue: "✓" },
      { feature: "Support dédié juridique", leftValue: "✓", rightValue: "✗" },
      { feature: "Prix moyen", leftValue: "2 500€", rightValue: "3 000-8 000€" },
    ]
  }
};
