"use client";

import Link from 'next/link'; // On importe le composant Link
import { ImageIcon, ShieldCheck, SlidersHorizontal, ArrowRight } from "lucide-react"; // On ajoute l'icône flèche

export function AdminSection() {
  const features = [
    {
      title: "Mettez à jour votre site en toute simplicité",
      icon: <ImageIcon className="h-7 w-7 text-white" />,
      description: "Ajoutez articles, photos ou services quand vous le souhaitez. Une interface intuitive vous permet de gérer votre contenu facilement, sans passer par un développeur.",
    },
    {
      title: "Une structure protégée, sans risques",
      icon: <ShieldCheck className="h-7 w-7 text-white" />,
      description: "Contrairement à WordPress, vous n'avez pas accès aux parties sensibles du site. Vous pouvez modifier votre contenu librement sans jamais risquer de casser l’affichage.",
    },
    {
      title: "Un espace admin 100% adapté à votre besoin",
      icon: <SlidersHorizontal className="h-7 w-7 text-white" />,
      description: "Votre tableau de bord ne contient que l’essentiel. Pas de menus inutiles ou d’options compliquées : vous voyez uniquement ce que vous avez besoin de gérer.",
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="admin-title"
      className="py-24 sm:py-32 px-4 text-center"
    >
      <div className="mx-auto max-w-5xl">
        <h2 
            id="admin-title" 
            className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-300 via-gray-400 to-white text-transparent bg-clip-text"
        >
          Prenez la main sur votre contenu
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
          Modifiez votre site quand vous le souhaitez, sans jamais risquer de le dégrader. Vous avez la liberté de gérer, sans la peur de tout casser.
        </p>

        {/* Pilule de mise en avant (style légèrement corrigé pour la lisibilité) */}
        <div className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gray-200 border border-white/20">
            <span>🔒 Accès sécurisé – contenu uniquement</span>
        </div>

        {/* BOUTON AJOUTÉ ICI */}
        <div className="mt-8">
            <Link
              href="/expertises/directus-cms"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900
                         transition duration-300 hover:bg-gray-200 hover:scale-105"
            >
              Découvrir la solution sur-mesure
              <ArrowRight size={20} />
            </Link>
        </div>

        {/* La grille des 3 arguments */}
        <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
                key={index}
                className="flex flex-col items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/20"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                {feature.icon}
              </div>
              <h3 className="mt-6 font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}