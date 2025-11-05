"use client";

import Link from 'next/link'; // On importe le composant Link
import { ImageIcon, ShieldCheck, SlidersHorizontal, ArrowRight } from "lucide-react"; // On ajoute l'icône flèche

export function AdminSection() {
  const features = [
    {
      title: "Gestion de contenu simplifiée",
      icon: <ImageIcon className="h-7 w-7 text-white" />,
      description: "Modifiez textes, images, produits en 2 clics. Interface épurée, zéro complexité. Formation de 2h suffit pour être 100% autonome.",
      price: "Inclus dans votre site"
    },
    {
      title: "Sécurité totale vs WordPress",
      icon: <ShieldCheck className="h-7 w-7 text-white" />,
      description: "Impossible de casser le design ou le code. Vous ne voyez QUE vos contenus, pas les réglages techniques. Zéro risque, 100% sérénité.",
      price: "Protection native"
    },
    {
      title: "Interface 100% sur-mesure",
      icon: <SlidersHorizontal className="h-7 w-7 text-white" />,
      description: "On configure uniquement les champs dont vous avez besoin. Pas de 50 menus comme WordPress. Vous gagnez 80% de temps sur vos mises à jour.",
      price: "À partir de 2 500€"
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="admin-title"
      className="py-24 sm:py-32 px-4 text-center"
    >
      <div className="mx-auto max-w-5xl">
        <div className="inline-block rounded-full bg-indigo-500/20 px-4 py-1.5 text-sm font-medium text-indigo-300 border border-indigo-500/30 mb-4">
          Expertise complémentaire
        </div>
        <h2
            id="admin-title"
            className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-300 via-gray-400 to-white text-transparent bg-clip-text"
        >
          Interface admin épurée : zéro risque de casser votre site
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
          Oubliez les 50 menus WordPress. Interface sur-mesure où vous ne voyez QUE vos contenus. Modifier votre site en toute sérénité, impossible de toucher au code.
        </p>

        {/* Pilule de mise en avant (style légèrement corrigé pour la lisibilité) */}
        <div className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gray-200 border border-white/20">
            <span>🔒 Livré en 3 semaines • Formation 2h incluse</span>
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
              <p className="mt-2 text-sm text-gray-300 flex-grow">{feature.description}</p>
              <div className="mt-4 text-sm font-bold text-indigo-300">
                {feature.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}