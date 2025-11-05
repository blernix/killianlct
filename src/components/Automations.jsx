"use client";

import Link from 'next/link'; // On importe le composant Link
import { Bot, Zap, Network, ArrowRight } from "lucide-react"; // On ajoute l'icône flèche

export function Automations() {
const features = [
    {
      title: "Workflows Automatisés",
      icon: <Zap className="h-6 w-6 text-orange-300" />,
      description: "Rappels de RDV automatiques, facturation récurrente, envoi de newsletters. Configuré en 2 semaines, économisez 20h/mois dès le premier mois.",
      price: "À partir de 1 500€"
    },
    {
      title: "Agents IA Métier",
      icon: <Bot className="h-6 w-6 text-orange-300" />,
      description: "IA qui analyse vos données, qualifie vos prospects ou répond à vos clients 24/7. Intégré directement dans vos processus existants.",
      price: "Sur devis"
    },
    {
      title: "Synchronisation d'Outils",
      icon: <Network className="h-6 w-6 text-orange-300" />,
      description: "Connectez site web, CRM, agenda, messagerie. Les données circulent automatiquement, zéro double saisie, zéro erreur humaine.",
      price: "À partir de 800€"
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="automations-title"
      className="py-24 sm:py-32 px-4"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Colonne de Gauche : Le Texte */}
        <div className="text-center lg:text-left">
          <div className="inline-block rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300 border border-orange-500/30 mb-4">
            Expertise complémentaire
          </div>
          <h2
            id="automations-title"
            className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 text-transparent bg-clip-text"
          >
            Gagnez 20h/semaine avec l'automatisation
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto lg:mx-0 text-gray-300">
            Nous connectons vos outils (CRM, email, calendrier) et automatisons vos tâches répétitives. Plus d'erreurs, plus de saisies manuelles. Tout se fait tout seul.
          </p>

          {/* BOUTON AJOUTÉ ICI */}
          <div className="mt-8">
            <Link
              href="/expertises/n8n-automatisation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900
                         transition duration-300 hover:bg-gray-200 hover:scale-105"
            >
              En savoir plus sur l'automatisation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Colonne de Droite : Les Cartes */}
        <div className="flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-6 rounded-2xl border bg-gray-950/20 backdrop-blur-md border-white/20"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-950/50 border border-orange-400/30">
                {feature.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{feature.description}</p>
                <div className="mt-3 text-sm font-bold text-orange-300">
                  {feature.price}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}