"use client";

export function Process() {
 const steps = [
    {
      stepTitle: "Appel Découverte (30 min)",
      description:
        "Un échange sans engagement pour comprendre votre projet, vos objectifs et vos contraintes. Nous vous donnons un premier avis technique et une estimation de délai dès cet appel. Réponse sous 24h garantie.",
    },
    {
      stepTitle: "Proposition & Devis Détaillé (48h)",
      description:
        "Nous vous présentons une proposition détaillée avec architecture technique et un devis ligne par ligne. Aucune surprise : vous voyez exactement ce que vous payez et le scope du projet avant de signer.",
    },
    {
      stepTitle: "Développement avec Accès Live (3-10 semaines selon projet)",
      description:
        "Nous développons votre projet sur un environnement de préproduction accessible 24/7. Vous suivez l'avancement en temps réel et nous faites vos retours. Points hebdomadaires pour valider chaque étape ensemble.",
    },
    {
      stepTitle: "Tests, Formation & Mise en Ligne",
      description:
        "Avant le déploiement, nous testons tout : performances, responsive, SEO. Formation de 2h incluse pour maîtriser votre site (gestion interface admin si option souscrite). Mise en ligne sans interruption de service.",
    },
  ];

  return (
    <section
      id="processus"
      className="relative py-32 px-4 bg-white"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-24">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
            <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
              Notre Processus
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1] mb-6">
            Notre Méthode en<br />
            <span className="text-[#0066FF]">4 Étapes</span>
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl font-light">
            De l'appel découverte à la mise en ligne, tout est chronométré et transparent
          </p>
        </div>

        <div className="space-y-px bg-[#E5E5E5]">
          {steps.map((step, index) => (
            <div key={index} className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300">
              <div className="flex items-start gap-12">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center border border-[#E5E5E5] group-hover:border-[#0066FF] transition-colors">
                    <span className="text-2xl font-light text-[#2A2A2A] group-hover:text-[#0066FF] transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-light text-[#2A2A2A] mb-4">
                    {step.stepTitle}
                  </h3>
                  <p className="text-[#666666] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 p-8 border border-[#0066FF]">
          <p className="text-center text-lg font-light text-[#2A2A2A]">
            Total : <span className="text-[#0066FF] font-medium">3 semaines</span> pour un site vitrine complet
          </p>
        </div>
      </div>
    </section>
  );
}
