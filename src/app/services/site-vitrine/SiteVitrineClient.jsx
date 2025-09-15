"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
import { TrendingUp, ShieldCheck, Zap, Info, Users, Building, UserCheck } from 'lucide-react';
import Image from 'next/image';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero'; // ✅ 1. On importe notre nouveau Hero

export default function SiteVitrineClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'site-vitrine';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ✅ 2. On prépare les données pour le Hero pour garder le code propre
  const heroTitle = (
    <>
      <span className="block text-lg font-semibold text-primary mb-4">
        Votre Atout Stratégique Numérique
      </span>
      Pourquoi un Site Vitrine est Indispensable Aujourd'hui
    </>
  );
  
  const heroSubtitle = "Alors que 76% des PME jugent une présence en ligne \"indispensable\", près d'un tiers n'ont toujours pas de site web. Dans un marché où 80% des consommateurs recherchent en ligne avant d'agir, cette absence n'est plus une option, c'est un risque.";

  const heroActions = [
    {
      label: "Démarrez Votre Projet",
      variant: "default", // Style du bouton principal
      onClick: openModal, // On passe la fonction pour ouvrir la modale
    },
  ];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />
        
        {/* ✅ 3. L'ancienne section est remplacée par le nouveau composant Hero */}
        <Hero 
          title={heroTitle}
          subtitle={heroSubtitle}
          actions={heroActions}
          className="[&_.bg-primary\\/60]:bg-violet-500/60 pt-23"
        />

        {/* Section 4 Piliers Stratégiques */}
        <section className="py-16 sm:py-24 px-4 ">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Plus qu'une brochure, un écosystème de confiance</h2>
                    <p className="mt-4 text-lg text-gray-400">Un site vitrine moderne est un outil stratégique reposant sur quatre piliers conçus pour transformer un visiteur en prospect qualifié.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    <div className="flex items-start gap-4"><TrendingUp size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Visibilité & Notoriété</h3><p className="mt-2 text-gray-400">Être trouvable sur Google 24h/24, 7j/7, pour capter la demande active des consommateurs qui recherchent activement des solutions en ligne.</p></div></div>
                    <div className="flex items-start gap-4"><ShieldCheck size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Crédibilité & Image de Marque</h3><p className="mt-2 text-gray-400">Asseoir votre sérieux avec un design professionnel qui forge une image solide et réduit le risque perçu par le visiteur.</p></div></div>
                    <div className="flex items-start gap-4"><Zap size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Acquisition de Prospects</h3><p className="mt-2 text-gray-400">Convertir un visiteur anonyme en un contact identifié grâce à des formulaires de devis et des appels à l'action clairs.</p></div></div>
                    <div className="flex items-start gap-4"><Info size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Centre d'Information</h3><p className="mt-2 text-gray-400">Centraliser vos informations (horaires, services, FAQ) pour améliorer l'expérience client et soulager votre service client.</p></div></div>
                </div>
            </div>
        </section>

        {/* Section "À qui s'adresse ?" */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-5xl space-y-20">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Un Outil sur-mesure pour Chaque Professionnel</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image 
                            src="/artisan.png"
                            alt="Site vitrine pour artisan ou indépendant" 
                            fill 
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={true}
                        />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <Users size={24} className="text-violet-400"/>Artisans & Indépendants
                      </h3>
                      <p className="mt-4 text-gray-400">Le site vitrine devient un portfolio interactif et convaincant. Il présente vos réalisations "avant/après", met en avant vos certifications (RGE, Qualibat...), et rationalise les demandes de devis. Un prospect qui vous contacte est déjà convaincu de la qualité de votre travail.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-last relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image 
                            src="/pme.png"
                            alt="Site vitrine pour TPE, PME et commerçant" 
                            fill 
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <Building size={24} className="text-violet-400"/>TPE, PME & Commerçants
                      </h3>
                      <p className="mt-4 text-gray-400">Pour une entreprise locale, l'enjeu est d'être visible et de faciliter la venue. Un site optimisé pour le SEO local devient votre premier point de contact : horaires, carte Google Maps, téléphone cliquable, promotions. Il transforme les recherches en ligne en visites physiques.</p></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image 
                            src="/liberal.png"
                            alt="Site vitrine pour profession libérale" 
                            fill 
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <UserCheck size={24} className="text-violet-400"/>Professions Libérales
                      </h3>
                      <p className="mt-4 text-gray-400">Pour un consultant, avocat ou thérapeute, la crédibilité repose sur l'expertise. Le site est l'outil idéal pour asseoir votre autorité, détailler votre parcours, et publier des analyses via un blog. Il devient un canal de communication informatif et un moyen d'automatiser la prise de rendez-vous.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section Budget */}
        <section className="py-16 sm:py-24 px-4 ">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">L'Investissement pour un Site Vitrine</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">Le coût dépend de la complexité et du niveau de personnalisation. Voici des fourchettes de prix indicatives basées sur le marché français pour un travail de qualité.</p>
            <div className="mt-12 text-left border border-white/10 rounded-2xl">
              <div className="grid grid-cols-3 p-4 border-b border-white/10"><div className="font-semibold text-white">Niveau</div><div className="font-semibold text-white">Description</div><div className="font-semibold text-white text-right">Budget (Freelance)</div></div>
              <div className="grid grid-cols-3 p-4 border-b border-white/10"><div className="text-gray-300">Basique</div><div className="text-gray-400 text-sm">3-5 pages, design basé sur un template, formulaire simple.</div><div className="text-gray-300 text-right">1 000€ - 3 000€</div></div>
              <div className="grid grid-cols-3 p-4 border-b border-white/10"><div className="text-gray-300">Personnalisé</div><div className="text-gray-400 text-sm">5-10 pages, design sur-mesure, blog, SEO de base.</div><div className="text-gray-300 text-right">2 500€ - 6 000€</div></div>
              <div className="grid grid-cols-3 p-4"><div className="text-gray-300">Avancé</div><div className="text-gray-400 text-sm">10+ pages, design premium, fonctionnalités sur-mesure, SEO approfondi.</div><div className="text-gray-300 text-right">5 000€+</div></div>
            </div>
            <p className="mt-8 text-sm text-gray-500">Un site vitrine est souvent rentabilisé dès le premier ou deuxième client qu'il vous apporte.</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4">
          <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-100">Prêt à construire votre actif numérique ?</h2>
              <p className="mt-4 text-lg text-gray-300">Discutons de votre projet pour établir une stratégie et un devis sur-mesure.</p>
              <button onClick={openModal} className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                  Demander un devis gratuit
              </button>
          </div>
        </section>
        
          {faqData && (
          <FAQ 
            title={faqData.title}
            subtitle={faqData.subtitle}
            faqItems={faqData.items}
          />
        )}
        <Footer />
      </main>

      
      <Modal isOpen={isModalOpen} onClose={closeModal} title={formFieldsConfig[formType]?.subject}>
        <ContactForm formType={formType} onClose={closeModal} />
      </Modal>
    </>
  );
}