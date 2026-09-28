"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { MonitorSmartphone, AppWindow, ShoppingCart, TrendingUp, ArrowRight } from "lucide-react";
import { trackCTAClick } from '@/lib/tracking';
import { Reveal, RevealStagger, staggerItem } from '@/components/ui/Reveal';

export function Services() {
const mainServices = [
    {
      icon: MonitorSmartphone,
      title: "Site Vitrine Professionnel",
      description: "Site conforme à votre déontologie (avocat, psy, ostéo) ou optimisé SEO local (artisan). Livraison en 3 semaines.",
      url: "/services/site-vitrine",
      badge: "Populaire",
      popular: true,
      price: "Selon profession"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Boutique en ligne sur-mesure avec MedusaJS. Idéal pour artisans qui souhaitent vendre leurs créations en ligne.",
      url: "/services/e-commerce",
      price: "À partir de 3 000€"
    },
    {
      icon: AppWindow,
      title: "Espace Client Sécurisé",
      description: "Portail pour partager documents avec vos clients (avocats) ou gérer prises de RDV en ligne (professions santé).",
      url: "/services/application-web",
      price: "Sur devis"
    },
    {
      icon: TrendingUp,
      title: "Optimisation SEO",
      description: "Audit technique complet + stratégie de contenu. Idéal pour renforcer votre visibilité locale ou sectorielle.",
      url: "/services/optimisation-seo",
      price: "À partir de 800€"
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="services-title"
      className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]"
      id="services"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-24">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
            <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
              Nos Services
            </span>
          </div>
          <h2 id="services-title" className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1]">
            Tarifs <span className="text-[#0066FF]">transparents</span>,<br />
            délais garantis
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
          {mainServices.map((service) => (
            <motion.div key={service.title} variants={staggerItem} className="h-full">
              <Link href={service.url} onClick={() => trackCTAClick('Service - ' + service.title, 'home')} className="block h-full">
                <div className="group relative h-full bg-white dark:bg-[#1A1A1A] p-10 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-all duration-300 overflow-hidden">
                  {service.badge && (
                    <div className="absolute top-4 right-4 px-2 py-1 border border-[#0066FF] bg-white dark:bg-[#1A1A1A]">
                      <span className="text-[10px] font-medium text-[#0066FF] uppercase tracking-wide">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <div className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-[#2A2A2A] mb-8 group-hover:border-[#0066FF] transition-colors">
                    <div className="text-[#2A2A2A] dark:text-[#FAFAFA] group-hover:text-[#0066FF] transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed mb-8 font-light min-h-[60px]">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-[#E5E5E5] dark:border-[#2A2A2A] pt-4">
                    <span className="text-sm font-medium text-[#2A2A2A] dark:text-[#FAFAFA]">
                      {service.price}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#0066FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>

                  {/* Bottom border draw */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0066FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
