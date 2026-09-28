"use client";

import { Rocket, Target, Shield } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Rocket,
    value: 3,
    suffix: "",
    unit: "semaines",
    title: "Livraison en 3 Semaines",
    description: "Site vitrine livré en 21 jours, pas en 3 mois. Nous travaillons en sprints courts avec des validations hebdomadaires. Vous suivez l'avancement en temps réel.",
    badge: "3× plus rapide",
  },
  {
    icon: Target,
    value: 95,
    suffix: "/100",
    unit: "score Google",
    title: "Score Google Lighthouse",
    description: "Tous nos sites obtiennent un score Lighthouse supérieur à 95/100. Temps de chargement inférieur à 1 seconde.",
    badge: "Performance garantie",
  },
  {
    icon: Shield,
    value: 2,
    suffix: "h",
    unit: "de formation",
    title: "Formation & Support Inclus",
    description: "Formation de 2h pour maîtriser votre site. Support technique pendant 3 mois pour vous accompagner au démarrage.",
    badge: "Accompagnement garanti",
  },
];

export default function ValueProposition() {
  return (
    <section
      role="region"
      aria-label="Notre philosophie de travail"
      className="relative w-full px-4 py-32 bg-white dark:bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-24">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
            <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
              Pourquoi nous choisir ?
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1] max-w-4xl">
            Des résultats mesurables,<br />
            <span className="text-[#0066FF]">pas des promesses</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              className="group bg-white dark:bg-[#1A1A1A] p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#0066FF] mb-10 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="h-6 w-6 text-[#0066FF]" />
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-7xl font-light tracking-[-0.03em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-none">
                  <Counter to={card.value} />
                  <span className="text-[#0066FF]">{card.suffix}</span>
                </span>
                <span className="text-sm text-[#666666] dark:text-[#999999] font-light uppercase tracking-[0.15em]">
                  {card.unit}
                </span>
              </div>

              <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                {card.title}
              </h3>
              <p className="text-[#666666] dark:text-[#999999] leading-relaxed mb-6 font-light">
                {card.description}
              </p>
              <div className="inline-block px-3 py-1 border border-[#0066FF]">
                <span className="text-xs font-medium text-[#0066FF] uppercase tracking-wide">
                  {card.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
