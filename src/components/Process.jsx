"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

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

  const stepsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.7", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section
      id="processus"
      className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal className="mb-24">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
            <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
              Notre Processus
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1] mb-6">
            Notre Méthode en<br />
            <span className="text-[#0066FF]">4 Étapes</span>
          </h2>
          <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl font-light">
            De l'appel découverte à la mise en ligne, tout est chronométré et transparent
          </p>
        </Reveal>

        <div ref={stepsRef} className="relative">
          {/* Rail */}
          <div className="absolute left-8 top-2 bottom-2 w-px bg-[#E5E5E5] dark:bg-[#2A2A2A] -translate-x-1/2" />
          <motion.div
            className="absolute left-8 top-2 bottom-2 w-[2px] bg-[#0066FF] -translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="group relative flex items-start gap-12 px-4 sm:px-8 py-8">
                {/* Number */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] group-hover:border-[#0066FF] transition-colors">
                    <span className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] group-hover:text-[#0066FF] transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                    {step.stepTitle}
                  </h3>
                  <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <Reveal className="mt-16">
          <div className="p-8 border border-[#0066FF]">
            <p className="text-center text-lg font-light text-[#2A2A2A] dark:text-[#FAFAFA]">
              Total : <span className="text-[#0066FF] font-medium">3 semaines</span> pour un site vitrine complet
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
