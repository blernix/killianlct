import {
  CalendarClock,
  CalendarCheck,
  Camera,
  CheckCircle,
  Clock,
  MapPin,
  Megaphone,
  Percent,
  Phone,
  ScrollText,
  Share2,
  Star,
  UtensilsCrossed
} from 'lucide-react';

export const restaurantData = {
  hero: {
    eyebrow: "Sites Web pour Restaurateurs Indépendants",
    title: "Votre Restaurant, Vos Réservations,",
    titleGradient: "Sans Commission",
    subtitle: "Aujourd'hui, vos clients vous trouvent surtout sur des fiches tierces : horaires périmés, carte incomplète, réservations captées par des plateformes. Nous créons le site qui vous redonne la main sur votre carte, vos horaires et vos réservations.",
    description: "Un site à votre image, visible sur Google dans votre ville, qui travaille pour votre salle sans prélever de commission sur chaque couvert.",
    ctaLabel: "Obtenir mon devis restaurant gratuit",
    microPromises: [
      "Réservations directes, sans commission",
      "Carte et horaires toujours à jour",
      "Visibilité locale sur Google",
      "Livré en 3 semaines"
    ]
  },

  challenges: [
    {
      icon: CalendarClock,
      title: "Carte et horaires périmés ailleurs",
      problem: "Sur les plateformes et les annuaires, vos horaires et votre carte sont rarement à jour. Un client qui réserve une table un jour de fermeture, ou qui découvre une carte qui n'existe plus, repart chez le voisin. Et vous ne pouvez pas corriger l'information vous-même.",
      solution: "Un site qui vous appartient : vous mettez à jour la carte, les horaires, les fermetures exceptionnelles et les menus du jour. L'information affichée est la vôtre, au moment où vous le décidez."
    },
    {
      icon: Percent,
      title: "Réservations captées par les plateformes",
      problem: "Quand tout passe par une plateforme, elle garde la relation avec votre client, prélève une commission sur les réservations et décide de la mise en avant. Vous remplissez la salle sans construire votre propre fichier clients.",
      solution: "Un module de réservation directe (formulaire, téléphone, email) et un lien unique à partager sur vos réseaux et votre fiche Google. La réservation vous revient en direct, sans intermédiaire ni commission."
    },
    {
      icon: Megaphone,
      title: "Aucune maîtrise de votre image",
      problem: "Photos génériques fournies par des tiers, avis mélangés, présentation qui ne reflète ni votre cuisine ni votre ambiance. Vous subissez la façon dont on parle de votre restaurant au lieu de la construire.",
      solution: "Un site qui raconte votre établissement avec vos mots et vos photos : l'histoire de la maison, la cuisine, la salle, le chef. Une image cohérente, du premier aperçu Google à la réservation."
    }
  ],

  features: [
    {
      icon: UtensilsCrossed,
      title: "Carte et menus en ligne",
      description: "Carte des plats, menus du jour, formules et boissons présentés clairement. Modifiable quand vous voulez, y compris les plats épuisés et les suggestions du moment.",
      technical: "Structure pensée pour une lecture rapide sur mobile"
    },
    {
      icon: CalendarCheck,
      title: "Réservation directe",
      description: "Formulaire de réservation ou de demande de table relié à votre email et à votre téléphone. Le client reste le vôtre, sans commission prélevée sur le couvert.",
      technical: "Notifications instantanées + confirmation au client"
    },
    {
      icon: MapPin,
      title: "Visibilité locale sur Google",
      description: "Structure optimisée pour la recherche locale : nom de l'établissement, type de cuisine, ville, spécialités. Votre fiche Google Business est reliée à votre site.",
      technical: "SEO local par ville et par spécialité"
    },
    {
      icon: Camera,
      title: "Photos de vos plats et de la salle",
      description: "Mise en valeur de votre cuisine et de votre ambiance. Des photos prises au smartphone suffisent, nous les optimisons pour le web.",
      technical: "Galerie responsive optimisée pour le chargement"
    },
    {
      icon: Clock,
      title: "Horaires et infos pratiques",
      description: "Horaires, jours de fermeture, adresse, accès et parking. Une information exacte pour éviter les déplacements inutiles et les appels répétés.",
      technical: "Mise à jour simple des horaires et fermetures"
    },
    {
      icon: Phone,
      title: "Appel et itinéraire en un clic",
      description: "Sur mobile, bouton d'appel direct et itinéraire vers l'établissement. Les clients pressés vous joignent immédiatement.",
      technical: "Click-to-call et lien Google Maps"
    },
    {
      icon: Star,
      title: "Avis clients",
      description: "Mise en avant des avis que vous avez déjà obtenus, avec un lien vers votre fiche Google. La preuve sociale de votre restaurant, présentée proprement.",
      technical: "Renvoi vers votre fiche Google existante"
    },
    {
      icon: Share2,
      title: "Réseaux sociaux et actualités",
      description: "Renvoi vers vos réseaux et espace d'actualités : arrivées, événements, fermetures. Un seul endroit à jour pour tout communiquer.",
      technical: "Liens vers vos comptes et actualités datées"
    }
  ],

  pricing: {
    simplified: true,
    startingAt: "1 000€",
    monthly: "150€",
    subtitle: "Un investissement au niveau d'une activité locale indépendante",
    includes: [
      "Site sur-mesure jusqu'à 5 pages (Accueil, Carte, Réservation, Nous trouver, Contact)",
      "Design sobre adapté à l'identité de votre établissement",
      "Carte et menus en ligne, modifiables",
      "Formulaire de réservation ou de demande de table",
      "Horaires, accès et coordonnées toujours à jour",
      "Galerie photos de vos plats et de la salle",
      "Hébergement premium + nom de domaine (1ère année)",
      "SEO local optimisé pour votre ville",
      "Formation de 2h + 3 mois de support",
      "Livraison en 3 semaines"
    ],
    note: "Options avancées (réservation reliée à votre logiciel de salle, blog, espace d'administration complet) disponibles sur devis",
    justification: {
      title: "Pourquoi cet investissement ?",
      points: [
        "Une réservation directe n'entraîne aucune commission prélevée par une plateforme.",
        "Vous fixez votre carte et vos horaires, sans dépendre d'un tiers.",
        "Votre site travaille pour votre salle en continu, même pendant le service.",
        "Paiement en 2× sans frais possible."
      ]
    }
  },

  comparison: {
    title: "Votre site vs plateformes tierces",
    subtitle: "Ce que vous gagnez à reprendre la main",
    left: "Votre site",
    right: "Plateformes tierces",
    rows: [
      { feature: "Réservations directes", leftValue: "✓", rightValue: "Selon plateforme" },
      { feature: "Commission sur réservation", leftValue: "Aucune", rightValue: "Prélevée" },
      { feature: "Carte et horaires exacts", leftValue: "Vous décidez", rightValue: "Souvent périmés" },
      { feature: "Propriété du fichier clients", leftValue: "✓", rightValue: "✗" },
      { feature: "Maîtrise de votre image", leftValue: "✓", rightValue: "Limitée" },
      { feature: "Visibilité dans votre ville", leftValue: "✓", rightValue: "Partagée" },
      { feature: "Coût annuel", leftValue: "150€/an", rightValue: "Variable selon réservations" }
    ]
  },

  faq: {
    title: "Questions Fréquentes des Restaurateurs",
    subtitle: "Tout ce que vous devez savoir sur la création d'un site pour votre établissement",
    items: [
      {
        question: "Pourquoi un site alors que je suis déjà sur TripAdvisor ou TheFork ?",
        answer: "Ces plateformes vous apportent de la visibilité, mais elles gardent la relation avec le client et prélèvent une commission sur les réservations. Votre site ne les remplace pas : il vous donne votre propre vitrine, que vous contrôlez de bout en bout. Vous y affichez votre carte exacte, vos horaires et votre actualité, et vous recevez des réservations directes. Les clients qui vous connaissent déjà réservent chez vous, pas chez l'intermédiaire."
      },
      {
        question: "Puis-je mettre à jour ma carte et mes horaires moi-même ?",
        answer: "Oui pour les formules avec espace d'administration : vous modifiez la carte, les menus du jour, les horaires et les fermetures exceptionnelles en autonomie, après une formation d'une heure. Pour un site sans espace d'administration, vous nous transmettez les changements et nous nous en chargeons (les petites modifications sont comprises dans le support). Dans les deux cas, l'information affichée reste exacte."
      },
      {
        question: "Combien coûte un site pour restaurant ?",
        answer: "Un site de restaurant démarre à 1 000€, hébergement et nom de domaine la première année inclus : site sur-mesure, carte en ligne, formulaire de réservation, horaires, photos et SEO local de base. Les options comme la réservation reliée à votre logiciel de salle ou un espace d'administration complet sont disponibles sur devis. À partir de la 2ème année, l'abonnement de 150€/an couvre l'hébergement, le nom de domaine, les mises à jour de sécurité, la maintenance et le support."
      },
      {
        question: "Combien de temps pour mettre le site en ligne ?",
        answer: "Comptez 3 semaines : une semaine pour le design et la maquette (validation avec vous), une semaine et demie de développement, puis quelques jours de tests et d'ajustements. Vous fournissez les photos et les informations (carte, horaires), nous rédigeons et structurons le contenu."
      },
      {
        question: "Je n'ai pas de photos professionnelles, est-ce bloquant ?",
        answer: "Non. Des photos prises au smartphone suffisent pour démarrer : nous les recadrons et les optimisons pour le web. Si vous le souhaitez, nous pouvons aussi vous accompagner sur la préparation d'une séance photo de vos plats et de votre salle."
      },
      {
        question: "Est-ce que le site m'aidera à être visible sur Google ?",
        answer: "Nous optimisons la structure pour la recherche locale : nom de votre restaurant, type de cuisine, ville, quartiers et horaires. Votre fiche Google Business est reliée à votre site. Le référencement local se met en place progressivement sur quelques semaines, mais il s'agit d'un canal durable que vous ne louez pas à une plateforme."
      },
      {
        question: "Que comprend l'abonnement annuel de 150€ ?",
        answer: "Hébergement cloud premium (serveurs français, sauvegardes quotidiennes), nom de domaine, certificat SSL, mises à jour de sécurité, modifications mineures (textes, images, horaires, prix), maintenance préventive et support par email. La première année est incluse dans le prix de création de votre site. À partir de la 2ème année, l'abonnement prend le relais. Pas de frais cachés."
      }
    ]
  },

  badges: [
    {
      label: "Réservations sans commission",
      icon: CalendarCheck
    },
    {
      label: "Carte toujours à jour",
      icon: ScrollText
    },
    {
      label: "SEO Local Optimisé",
      icon: MapPin
    },
    {
      label: "Site Livré en 3 Semaines",
      icon: CheckCircle
    }
  ]
};
