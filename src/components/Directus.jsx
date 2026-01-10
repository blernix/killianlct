"use client";

import Link from 'next/link';
import { ImageIcon, ShieldCheck, SlidersHorizontal, ArrowRight } from "lucide-react";

export function AdminSection() {
  const features = [
    {
      title: "Gestion de contenu simplifiée",
      icon: <ImageIcon className="h-6 w-6" />,
      description: "Modifiez textes, images, produits en 2 clics. Interface épurée, zéro complexité. Formation de 2h suffit pour être 100% autonome.",
      price: "Inclus dans votre site"
    },
    {
      title: "Sécurité totale vs WordPress",
      icon: <ShieldCheck className="h-6 w-6" />,
      description: "Impossible de casser le design ou le code. Vous ne voyez QUE vos contenus, pas les réglages techniques. Zéro risque, 100% sérénité.",
      price: "Protection native"
    },
    {
      title: "Interface 100% sur-mesure",
      icon: <SlidersHorizontal className="h-6 w-6" />,
      description: "On configure uniquement les champs dont vous avez besoin. Pas de 50 menus comme WordPress. Vous gagnez 80% de temps sur vos mises à jour.",
      price: "À partir de 2 500€"
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="admin-title"
      className="relative py-32 px-4 bg-white"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
          <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
            CMS Directus
          </span>
        </div>
        <h2
          id="admin-title"
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1] max-w-4xl mx-auto"
        >
          Interface admin <span className="text-[#0066FF]">épurée</span>,<br />
          zéro risque de casser votre site
        </h2>
        <p className="text-lg text-[#666666] max-w-2xl mx-auto mb-10 font-light">
          Oubliez les 50 menus WordPress. Interface sur-mesure où vous ne voyez QUE vos contenus.
        </p>

        <div className="inline-block px-4 py-2 mb-12 border border-[#E5E5E5]">
          <span className="text-sm font-light text-[#666666]">
            Livré en 3 semaines • Formation 2h incluse
          </span>
        </div>

        <Link
          href="/expertises/directus-cms"
          className="inline-flex items-center gap-3 px-8 py-4 border border-[#0066FF] bg-white hover:bg-[#0066FF] hover:text-white transition-all duration-300 mb-24"
        >
          <span className="font-medium">Découvrir la solution sur-mesure</span>
          <ArrowRight size={20} />
        </Link>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-10 hover:bg-[#FAFAFA] transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mb-8 mx-auto group-hover:border-[#0066FF] transition-colors">
                <div className="text-[#2A2A2A] group-hover:text-[#0066FF] transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-light text-lg text-[#2A2A2A] mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-6 font-light">
                {feature.description}
              </p>
              <div className="inline-block px-3 py-1 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#2A2A2A]">
                  {feature.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
