export function Process() {
  const steps = [
    {
      title: "📌 On discute de votre projet, simplement",
      description:
        "Pas besoin de savoir coder ou de connaître les dernières tendances du web. Vous m'expliquez vos besoins, vos envies, vos objectifs... et je traduis tout ça en solution digitale concrète. C'est ma partie du job.",
    },
    {
      title: "🛠️ Je vous propose un plan clair",
      description:
        "Une fois que j'ai bien compris, je vous présente une maquette simple et un plan de création. Pas de jargon ni de phrases compliquées : vous savez où on va, combien ça coûte et comment ça se passera.",
    },
    {
      title: "🚧 Je construis votre site étape par étape",
      description:
        "Je m'occupe du développement en vous montrant régulièrement l'avancement. Vous pouvez donner votre avis, ajuster certains détails... Bref, vous êtes impliqué sans avoir besoin de gérer quoi que ce soit de technique.",
    },
    {
      title: "🚀 On teste, on peaufine, et on met en ligne",
      description:
        "Avant la mise en ligne officielle, je vérifie tout (rapidité, affichage sur mobile, bugs...). Ensemble, on valide le résultat final. Quand c'est prêt → on appuie sur le bouton.",
    },
    {
      title: "🤝 Je reste disponible après la livraison",
      description:
        "Un problème ? Un besoin d'évolution ? Une envie d'ajouter quelque chose ? Vous pourrez toujours me contacter pour faire évoluer votre site. Je ne disparais pas une fois le projet terminé.",
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="process-title"
      className="py-24 sm:py-32 px-4"
      id="processus"
    >
      {/* En-tête de section, standardisé */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2
          id="process-title"
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100"
        >
          Un Processus en 5 Étapes Claires
        </h2>
        <p className="mt-4 text-lg  max-w-2xl mx-auto text-gray-100">
          De la première discussion à la mise en ligne et au-delà, je vous accompagne avec une méthode simple et transparente.
        </p>
      </div>

      {/* Grille pour les étapes, maintenant en une seule colonne pour mieux voir la chronologie */}
      <div className="relative z-10 mt-16 grid max-w-3xl mx-auto gap-8 text-left">
        {steps.map((step, index) => (
          // Chaque étape est maintenant une carte en verre
          <div
            key={index}
            className="flex gap-6 p-6 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/10"
          >
            {/* Le numéro de l'étape */}
            <div className="text-2xl font-bold text-gray-300">
              {(index + 1).toString().padStart(2, '0')}
            </div>
            {/* Le contenu de l'étape */}
            <div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}