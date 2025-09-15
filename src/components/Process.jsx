// components/Process.jsx (ou là où il se trouve)

import { Timeline } from "@/components/ui/timeline"; // Assure-toi que le chemin est correct

export function Process() {
  const steps = [
    {
      stepTitle: "📌 On discute de votre projet, simplement",
      description:
        "Vous m'expliquez vos besoins, vos envies, vos objectifs... et je traduis tout ça en solution digitale concrète. C'est ma partie du job.",
    },
    {
      stepTitle: "🛠️ Je vous propose un plan clair",
      description:
        "Je vous présente une maquette simple et un plan de création. Pas de jargon : vous savez où on va, combien ça coûte et comment ça se passera.",
    },
    {
      stepTitle: "🚧 Je construis votre site étape par étape",
      description:
        "Je m'occupe du développement en vous montrant régulièrement l'avancement. Vous pouvez donner votre avis et ajuster les détails.",
    },
    {
      stepTitle: "🚀 On teste, on peaufine, et on met en ligne",
      description:
        "Avant la mise en ligne, je vérifie tout (rapidité, affichage mobile...). Ensemble, on valide le résultat final et on appuie sur le bouton.",
    },
    {
      stepTitle: "🤝 Je reste disponible après la livraison",
      description:
        "Un problème ? Un besoin d'évolution ? Je ne disparais pas une fois le projet terminé, vous pourrez toujours me contacter.",
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
      description="De la première discussion à la mise en ligne et au-delà, je vous accompagne avec une méthode simple et transparente."
      data={timelineData}
    />
  );
}