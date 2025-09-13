// Fichier: /data/faq/applicationWeb.js
export const applicationWebFaqData = {
  title: "Vos questions sur les Applications Web",
  subtitle: "Les réponses aux interrogations courantes sur le développement d'outils sur-mesure.",
  items: [
    {
      value: "q1",
      question: "Quelle est la différence entre une application web et une application mobile (iOS/Android) ?",
      answer: "Une application web est accessible via un navigateur (Chrome, Safari...) sur n'importe quel appareil, sans installation. Une application mobile doit être téléchargée depuis un store (App Store, Google Play). Pour un outil métier interne ou un MVP, une application web est souvent plus rapide et économique à développer."
    },
    {
      value: "q2",
      question: "Comment garantissez-vous la sécurité des données de mon entreprise et de mes utilisateurs ?",
      answer: "La sécurité est la priorité numéro un. J'applique les meilleures pratiques : protection contre les injections SQL et XSS, authentification forte, gestion sécurisée des mots de passe et chiffrement des données sensibles. Le code est conçu pour être robuste face aux menaces courantes."
    },
    {
      value: "q3",
      question: "Mon application pourra-t-elle évoluer si mon entreprise grandit ?",
      answer: "Absolument. J'utilise des architectures logicielles modernes et modulaires. Cela signifie que l'application est conçue dès le départ pour être évolutive. Ajouter de nouvelles fonctionnalités ou supporter plus d'utilisateurs se fait de manière saine, sans avoir à tout reconstruire."
    },
    {
      value: "q4",
      question: "Utilisez-vous des technologies spécifiques pour le backend ?",
      answer: "Oui, je m'appuie principalement sur l'écosystème JavaScript avec Node.js pour le backend. Couplé à un CMS Headless comme Directus, cela permet de créer des API robustes et performantes pour gérer toute la logique métier de votre application."
    },
    {
      value: "q5",
      question: "Puis-je connecter l'application à d'autres outils que j'utilise déjà (CRM, ERP...) ?",
      answer: "Oui, c'est l'un des grands avantages d'une solution sur-mesure. Nous pouvons créer des connecteurs (via des API) pour synchroniser les données de votre application avec vos logiciels existants, ce qui permet de centraliser vos informations et d'automatiser vos flux de travail."
    }
  ]
};