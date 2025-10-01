// components/Process.jsx (ou là où il se trouve)

import { Timeline } from "@/components/ui/timeline"; // Assure-toi que le chemin est correct

export function Process() {
 const steps = [
    {
      // Titre plus formel : On parle d'écoute et de stratégie.
      stepTitle: "📌 Écoute & Cadrage Stratégique",
      // Description qui met en avant l'analyse et la compréhension des objectifs.
      description:
        "Nous commençons par un atelier de découverte pour comprendre en profondeur vos objectifs, votre cible et vos défis. Cette phase est cruciale pour transformer votre vision en une feuille de route technique et fonctionnelle.",
    },
    {
      // Titre qui inclut la phase de conception (design).
      stepTitle: "🛠️ Proposition & Conception",
      // Description qui parle de maquette et de transparence.
      description:
        "Sur la base de nos échanges, nous vous soumettons une proposition détaillée incluant une maquette (wireframe ou design) et un calendrier de production. Chaque aspect est présenté de manière transparente pour une visibilité totale sur le projet.",
    },
    {
      // Titre qui utilise le terme "Développement" et "Itérations" (agile).
      stepTitle: "🚧 Développement & Itérations",
      // Description qui rassure sur le suivi et la collaboration.
      description:
        "Notre agence prend en charge le développement complet de la solution. Vous avez accès à un environnement de pré-production pour suivre l'avancement en temps réel et nous faire vos retours à chaque étape clé du processus.",
    },
    {
      // Titre qui utilise les termes professionnels "Assurance Qualité" et "Déploiement".
      stepTitle: "🚀 Assurance Qualité & Déploiement",
      // Description qui met en avant la rigueur des tests.
      description:
        "Avant toute mise en production, nous procédons à une phase de tests rigoureux (performance, affichage sur tous les appareils, sécurité). Après votre validation finale, nous planifions le déploiement de votre site ou application.",
    },
    {
      // Titre qui parle de partenariat sur le long terme.
      stepTitle: "🤝 Support & Partenariat à Long Terme",
      // Description qui transforme la promesse en une offre de service concrète.
      description:
        "Notre relation ne s'arrête pas à la livraison. Nous restons votre partenaire technique pour assurer la maintenance, gérer les évolutions futures et répondre à toutes vos questions, garantissant la pérennité de votre investissement.",
    },
  ];
  // On transforme les données pour le composant Timeline
  const timelineData = steps.map((step, index) => ({
    title: `Étape ${index + 1}`,
    content: (
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
          {step.stepTitle}
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
          {step.description}
        </p>
      </div>
    ),
  }));

  return (
    // On appelle notre composant Timeline flexible
    <Timeline 
      title="Un Processus en 5 Étapes Claires"
      description="De la première discussion à la mise en ligne et au-delà, nous vous accompagnons avec une méthode simple et transparente."
      data={timelineData}
    />
  );
}