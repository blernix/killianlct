// components/Process.jsx (ou là où il se trouve)

import { Timeline } from "@/components/ui/timeline"; // Assure-toi que le chemin est correct

export function Process() {
 const steps = [
    {
      stepTitle: "📌 Appel Découverte (30 min)",
      description:
        "Un échange sans engagement pour comprendre votre projet, vos objectifs et vos contraintes. Nous vous donnons un premier avis technique et une estimation de délai dès cet appel. Réponse sous 24h garantie.",
    },
    {
      stepTitle: "🛠️ Maquette & Devis Détaillé (48h)",
      description:
        "Nous créons une maquette interactive de votre site et un devis ligne par ligne. Aucune surprise : vous voyez exactement ce que vous payez et à quoi ressemblera votre site avant de signer.",
    },
    {
      stepTitle: "🚧 Développement avec Accès Live (2-3 semaines)",
      description:
        "Nous développons votre site sur un environnement de préproduction accessible 24/7. Vous suivez l'avancement en temps réel et nous faites vos retours. Points hebdomadaires pour valider chaque étape ensemble.",
    },
    {
      stepTitle: "🚀 Formation & Mise en Ligne (2h)",
      description:
        "Avant le déploiement, nous testons tout : performances, responsive, SEO. Puis nous vous formons pendant 2h à l'utilisation de votre interface admin. Mise en ligne sans interruption de service.",
    },
    {
      stepTitle: "🤝 Support Offert (3 mois)",
      description:
        "Les 3 premiers mois, nous restons disponibles pour toute question ou ajustement mineur. Support par email/téléphone inclus. Ensuite, vous pouvez souscrire à un forfait maintenance selon vos besoins.",
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
      title="Notre Méthode en 5 Étapes (Total : 3 Semaines)"
      description="De l'appel découverte à la mise en ligne, tout est chronométré et transparent. Vous savez exactement où vous en êtes à chaque instant."
      data={timelineData}
    />
  );
}