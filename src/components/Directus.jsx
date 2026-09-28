"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { ImageIcon, ShieldCheck, SlidersHorizontal, ArrowRight } from "lucide-react";
import { trackCTAClick } from '@/lib/tracking';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';

export function AdminSection() {
  const features = [
    {
      title: "Gestion de contenu simplifiée",
      icon: ImageIcon,
      description: "Modifiez textes, images, produits en 2 clics. Interface épurée, zéro complexité. Formation de 2h pour être 100% autonome.",
      price: "Option recommandée"
    },
    {
      title: "Sécurité totale vs WordPress",
      icon: ShieldCheck,
      description: "Impossible de casser le design ou le code. Vous ne voyez QUE vos contenus, pas les réglages techniques. Zéro risque, 100% sérénité.",
      price: "Protection native"
    },
    {
      title: "Configuration 100% sur-mesure",
      icon: SlidersHorizontal,
      description: "On configure uniquement les champs dont vous avez besoin. Pas de 50 menus comme WordPress. Vous gagnez 80% de temps sur vos mises à jour.",
      price: "À partir de 2 500€"
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="admin-title"
      className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <Reveal>
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
            <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
              CMS Directus
            </span>
          </div>
          <h2
            id="admin-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1] max-w-4xl mx-auto"
          >
            Interface admin <span className="text-[#0066FF]">sur-mesure</span><br />
            pour gérer votre contenu en autonomie
          </h2>
          <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl mx-auto mb-10 font-light">
            Option CMS Directus : interface épurée où vous ne voyez QUE vos contenus. Oubliez les 50 menus WordPress et les risques de casser votre site.
          </p>

          <div className="inline-block px-4 py-2 mb-12 border border-[#E5E5E5] dark:border-[#2A2A2A]">
            <span className="text-sm font-light text-[#666666] dark:text-[#999999]">
              Option selon besoins • Formation de 2h incluse si souscrite
            </span>
          </div>
        </Reveal>

        <Reveal className="mb-24">
          <Link
            href="/expertises/directus-cms"
            onClick={() => trackCTAClick('Découvrir Directus', 'home')}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#0066FF] bg-[#0066FF] text-white hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
          >
            <span className="font-medium">Découvrir la solution sur-mesure</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group bg-white dark:bg-[#1A1A1A] p-10 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center mb-8 mx-auto group-hover:border-[#0066FF] group-hover:scale-110 transition-all duration-300">
                <div className="text-[#2A2A2A] dark:text-[#FAFAFA] group-hover:text-[#0066FF] transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-light text-lg text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed mb-6 font-light">
                {feature.description}
              </p>
              <div className="inline-block px-3 py-1 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#2A2A2A] dark:text-[#FAFAFA]">
                  {feature.price}
                </span>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
