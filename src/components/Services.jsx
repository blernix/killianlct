"use client";

import Link from 'next/link';
import { MonitorSmartphone, AppWindow, ShoppingCart, TrendingUp, ArrowRight } from "lucide-react";

export function Services() {
const mainServices = [
    {
      icon: <MonitorSmartphone className="h-6 w-6" />,
      title: "Sites Vitrines",
      description: "Site professionnel en 3 semaines. Design moderne, ultra-rapide et optimisé SEO.",
      url: "/services/site-vitrine",
      badge: "Populaire",
      popular: true,
      price: "À partir de 1000€"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce",
      description: "Boutique en ligne performante avec gestion stocks, paiements sécurisés.",
      url: "/services/e-commerce",
      price: "À partir de 5000€"
    },
    {
      icon: <AppWindow className="h-6 w-6" />,
      title: "Applications Web",
      description: "Outil métier sur-mesure : espace client, plateforme de gestion, SaaS.",
      url: "/services/application-web",
      price: "À partir de 15 000€"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Optimisation SEO",
      description: "Audit technique complet + plan d'action SEO. Améliorez votre visibilité Google.",
      url: "/services/optimisation-seo",
      price: "À partir de 800€"
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="services-title"
      className="relative py-32 px-4 bg-[#FAFAFA]"
      id="services"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-24">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
            <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
              Nos Services
            </span>
          </div>
          <h2 id="services-title" className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1]">
            Tarifs <span className="text-[#0066FF]">transparents</span>,<br />
            délais garantis
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5]">
          {mainServices.map((service, index) => (
            <Link key={service.title} href={service.url}>
              <div className="group relative h-full bg-white p-10 hover:bg-[#FAFAFA] transition-all duration-300">
                {/* Popular badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 px-2 py-1 border border-[#0066FF] bg-white">
                    <span className="text-[10px] font-medium text-[#0066FF] uppercase tracking-wide">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] mb-8 group-hover:border-[#0066FF] transition-colors">
                  <div className="text-[#2A2A2A] group-hover:text-[#0066FF] transition-colors">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#666666] leading-relaxed mb-8 font-light min-h-[60px]">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-4">
                  <span className="text-sm font-medium text-[#2A2A2A]">
                    {service.price}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#0066FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
