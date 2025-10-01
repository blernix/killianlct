"use client";

import Link from 'next/link'; // On importe le composant Link
import { Bot, Zap, Network, ArrowRight } from "lucide-react"; // On ajoute l'icône flèche

export function Automations() {
const features = [
    {
      title: "Automatisations Métier",
      icon: <Zap className="h-6 w-6 text-orange-300" />,
      // On passe au "nous" avec des verbes plus forts ("concevoir", "déployer")
      // et on se concentre sur le bénéfice final ("libérer votre temps").
      description: "Nous concevons et déployons des workflows sur-mesure (rappels de RDV, facturation, newsletters) pour libérer votre temps et fiabiliser vos processus.",
    },
    {
      title: "Agents IA sur-mesure", // "sur-mesure" a plus de valeur que "intégrés"
      icon: <Bot className="h-6 w-6 text-orange-300" />,
      // On affirme l'action ("Nous intégrons") et on donne des exemples à forte valeur business.
      description: "Notre agence intègre des agents IA personnalisés dans vos processus pour analyser vos données, qualifier des prospects ou automatiser le support client.",
    },
    {
      title: "Interconnexion de vos Outils", // "Interconnexion" est un terme plus pro.
      icon: <Network className="h-6 w-6 text-orange-300" />,
      // La description précédente était déjà bonne. On la reformule pour parler d' "écosystème".
      description: "Nous synchronisons l'ensemble de votre écosystème digital : site web, CRM, agenda, messagerie... L'information circule de manière fluide et automatique.",
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
          <h2
            id="automations-title"
            className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 text-transparent bg-clip-text"
          >
            Allez plus loin avec les automatisations.
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto lg:mx-0 text-gray-300">
            Nous relions vos outils entre eux pour que les tâches répétitives se fassent toutes seules. Vous gagnez en temps et en efficacité, vous vous concentrez sur l'essentiel.
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
              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}