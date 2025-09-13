"use client";

import Link from 'next/link';
// On importe les icônes, y compris la nouvelle pour le SEO
import { MonitorSmartphone, AppWindow, ShoppingCart, TrendingUp, Info, } from "lucide-react";

export function Services() {
  const mainServices = [
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-white" />,
      title: "Sites Vitrines sur-mesure",
      description: "Présentez votre activité avec un site rapide, responsive et unique. Parfait pour les indépendants, PME et artisans.",
      url: "/services/site-vitrine"
    },
    {
      icon: <AppWindow className="h-8 w-8 text-white" />,
      title: "Applications Web complexes",
      description: "Besoin d’un outil métier spécifique ? Je développe votre solution : espace client, outil de gestion, plateforme interne…",
      url: "/services/application-web"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      title: "E-commerce & Vente en ligne",
      description: "Vendez en ligne avec une boutique optimisée et simple à gérer pour vous (paniers, paiements, abonnements).",
      url: "/services/e-commerce"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Optimisation SEO & Suivi",
      description: "Améliorez votre classement sur Google et attirez plus de clients. J'optimise votre site et assure un suivi pour des résultats durables.",
      url: "/services/optimisation-seo"
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="services-title"
      className="py-24 sm:py-32 px-4"
      id="services"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 id="services-title" className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
            Des solutions pour chaque projet
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
            Que vous partiez de zéro ou cherchiez à améliorer l'existant, je propose des prestations adaptées à vos ambitions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mainServices.map((service) => (
            <Link key={service.title} href={service.url}>
              {/* 2. On ajoute "relative" pour pouvoir positionner l'icône à l'intérieur */}
              <div className="relative h-full flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
                
                {/* 3. L'icône Info, visible uniquement sur mobile (cachée à partir de "sm") */}
                <Info className="absolute top-4 right-4 h-5 w-5 text-white/50 sm:hidden" aria-hidden="true" />
                
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-300 flex-grow">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}