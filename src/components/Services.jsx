"use client";

import Link from 'next/link';
// On importe les icônes, y compris la nouvelle pour le SEO
import { MonitorSmartphone, AppWindow, ShoppingCart, TrendingUp, Info, } from "lucide-react";

export function Services() {
const mainServices = [
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-white" />,
      title: "Sites Vitrines",
      description: "Site professionnel en 3 semaines. Design moderne, ultra-rapide et optimisé SEO. Interface admin épurée pour gérer vos contenus en autonomie.",
      url: "/services/site-vitrine",
      badge: "Le plus populaire",
      popular: true,
      price: "À partir de 1000€"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      title: "E-commerce",
      description: "Boutique en ligne performante avec gestion des stocks, paiements sécurisés et tableau de bord admin intuitif. Prêt à vendre en 4 semaines.",
      url: "/services/e-commerce",
      price: "À partir de 5000€"
    },
    {
      icon: <AppWindow className="h-8 w-8 text-white" />,
      title: "Applications Web",
      description: "Outil métier sur-mesure : espace client, plateforme de gestion, SaaS. Pour digitaliser et automatiser vos processus métier complexes.",
      url: "/services/application-web",
      price: "À partir de 15 000€"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Optimisation SEO",
      description: "Audit technique complet + plan d'action SEO. Améliorez votre visibilité Google et attirez plus de clients qualifiés chaque mois.",
      url: "/services/optimisation-seo",
      price: "À partir de 800€"
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
            Nos Services & Tarifs
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
            Tarifs transparents, délais garantis. Choisissez la solution adaptée à votre projet.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mainServices.map((service) => (
            <Link key={service.title} href={service.url}>
              <div className={`relative h-full flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl backdrop-blur-lg hover:-translate-y-1 transition-all duration-300 ${
                service.popular
                  ? 'bg-gradient-to-b from-blue-950/60 to-gray-950/40 border-blue-500/40 hover:border-blue-400/60'
                  : 'bg-gray-950/40 border-white/15 hover:border-white/40'
              }`}>

                {/* Badge "Le plus populaire" */}
                {service.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {service.badge}
                  </div>
                )}

                {/* L'icône Info, visible uniquement sur mobile (cachée à partir de "sm") */}
                <Info className="absolute top-4 right-4 h-5 w-5 text-white/50 sm:hidden" aria-hidden="true" />

                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${
                  service.popular ? 'bg-blue-500/20' : 'bg-white/10'
                }`}>
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-300 flex-grow">{service.description}</p>

                {/* Prix */}
                <div className="mt-4 text-lg font-bold text-white">
                  {service.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}