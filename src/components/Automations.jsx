"use client";

import Link from 'next/link';
import { Bot, Zap, Network, ArrowRight } from "lucide-react";

export function Automations() {
const features = [
    {
      title: "Workflows Automatisés",
      icon: <Zap className="h-6 w-6" />,
      description: "Rappels de RDV automatiques, facturation récurrente, envoi de newsletters. Configuré en 2 semaines, économisez 20h/mois dès le premier mois.",
      price: "À partir de 1 500€"
    },
    {
      title: "Agents IA Métier",
      icon: <Bot className="h-6 w-6" />,
      description: "IA qui analyse vos données, qualifie vos prospects ou répond à vos clients 24/7. Intégré directement dans vos processus existants.",
      price: "Sur devis"
    },
    {
      title: "Synchronisation d'Outils",
      icon: <Network className="h-6 w-6" />,
      description: "Connectez site web, CRM, agenda, messagerie. Les données circulent automatiquement, zéro double saisie, zéro erreur humaine.",
      price: "À partir de 800€"
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="automations-title"
      className="relative py-32 px-4 bg-[#FAFAFA]"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Left column: Text */}
          <div>
            <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
              <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                Automatisation
              </span>
            </div>
            <h2
              id="automations-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]"
            >
              Gagnez{" "}
              <span className="text-[#0066FF]">20h/semaine</span><br />
              avec l'automatisation
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-10 font-light max-w-xl">
              Nous connectons vos outils (CRM, email, calendrier) et automatisons vos tâches répétitives. Plus d'erreurs, plus de saisies manuelles.
            </p>

            <Link
              href="/expertises/n8n-automatisation"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#0066FF] bg-[#0066FF] text-white hover:bg-white hover:text-[#0066FF] transition-all duration-300"
            >
              <span className="font-medium">En savoir plus</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right column: Cards */}
          <div className="space-y-px bg-[#E5E5E5]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-10 hover:bg-[#FAFAFA] transition-colors duration-300"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 group-hover:border-[#0066FF] transition-colors">
                    <div className="text-[#2A2A2A] group-hover:text-[#0066FF] transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-light text-lg text-[#2A2A2A] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4 font-light">
                      {feature.description}
                    </p>
                    <div className="inline-block px-3 py-1 border border-[#E5E5E5]">
                      <span className="text-xs font-medium text-[#2A2A2A]">
                        {feature.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
