"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
import { Search, PenTool, BarChart3, Link as LinkIcon, Wrench, FileText, TrendingUp, Smartphone, Shield, Clock, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero'; // ✅ 1. On importe le Hero

export default function SeoClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'seo';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ✅ 2. On prépare les données pour le Hero
  const heroTitle = (
    <>
      <span className="block text-lg font-semibold text-primary mb-4">
        Stratégie de Référencement Naturel
      </span>
      Devenez la Meilleure Réponse sur Google
    </>
  );

  const heroSubtitle = (
    <>
      Le SEO n'est pas un jeu pour "battre l'algorithme", mais une pratique durable pour servir vos utilisateurs. Je mets en place des stratégies <strong>"People-First"</strong> pour transformer votre site en un aimant à prospects qualifiés.
    </>
  );

  const heroActions = [
    {
      label: "Planifier un audit gratuit",
      variant: "default",
      onClick: openModal,
    },
  ];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* ✅ 3. On remplace l'ancienne section par le nouveau composant Hero */}
        <Hero 
          title={heroTitle}
          subtitle={heroSubtitle}
          actions={heroActions}
          className="[&_.bg-primary\\/60]:bg-amber-500/60 pt-23" // On adapte la couleur du halo à l'ambre de la page
        />

        {/* Section "Ma Philosophie" */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Ma Philosophie : un SEO Centré sur l'Humain</h2>
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                      Google récompense les contenus utiles, fiables et créés pour les personnes. Ma stratégie se base sur ce principe fondamental : chaque optimisation doit d'abord et avant tout améliorer l'expérience de votre visiteur. En vous positionnant comme une autorité fiable dans votre domaine (E-E-A-T), nous construisons une visibilité durable.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-gray-950/40 border border-white/15 p-6 rounded-2xl"><Search size={32} className="mx-auto text-amber-300 mb-2"/><h3 className="font-semibold text-white">Mots-clés & Intention</h3></div>
                    <div className="bg-gray-950/40 border border-white/15 p-6 rounded-2xl"><PenTool size={32} className="mx-auto text-amber-300 mb-2"/><h3 className="font-semibold text-white">Contenu de Qualité</h3></div>
                    <div className="bg-gray-950/40 border border-white/15 p-6 rounded-2xl"><LinkIcon size={32} className="mx-auto text-amber-300 mb-2"/><h3 className="font-semibold text-white">Autorité (Backlinks)</h3></div>
                    <div className="bg-gray-950/40 border border-white/15 p-6 rounded-2xl"><BarChart3 size={32} className="mx-auto text-amber-300 mb-2"/><h3 className="font-semibold text-white">Analyse & Suivi</h3></div>
                </div>
            </div>
        </section>

        {/* Section 3 Piliers */}
        <section className="py-16 sm:py-24 px-4 bg-white/5">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Une Stratégie Complète sur 3 Piliers</h2>
                    <p className="mt-4 text-lg text-gray-400">Un bon référencement repose sur l'alignement parfait de la technique, du contenu et de l'autorité.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <Wrench size={32} className="text-amber-300 mb-4" /><h3 className="text-xl font-semibold text-white">1. SEO Technique</h3><p className="mt-2 text-gray-300">Une base saine est non-négociable. J'assure que votre site est rapide, sécurisé et parfaitement adapté aux mobiles.</p>
                  </div>
                  <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <FileText size={32} className="text-amber-300 mb-4" /><h3 className="text-xl font-semibold text-white">2. Contenu & On-Page</h3><p className="mt-2 text-gray-300">Nous créons un contenu qui répond à l'intention de vos utilisateurs et démontre votre expertise (E-E-A-T), en optimisant chaque balise.</p>
                  </div>
                  <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <TrendingUp size={32} className="text-amber-300 mb-4" /><h3 className="text-xl font-semibold text-white">3. Autorité & Off-Page</h3><p className="mt-2 text-gray-300">Un bon site a besoin de signaux de confiance. Nous travaillons à construire votre autorité via des backlinks de qualité et une présence locale cohérente.</p>
                  </div>
                </div>
            </div>
        </section>

        {/* Section "Piliers Techniques Fondamentaux" */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
                    <Image 
                        src="/seo.png"
                        alt="Illustration des piliers techniques du SEO" 
                        fill 
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Des Fondations Techniques Irréprochables</h2>
                    <p className="mt-6 text-gray-300 leading-relaxed">
                      Le meilleur contenu au monde est inutile si Google ne peut pas y accéder correctement. Je m'assure que votre site respecte les prérequis techniques essentiels.
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4"><Clock size={24} className="text-amber-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong className="text-white">Vitesse de Page (Core Web Vitals) :</strong> J'optimise chaque aspect de votre site pour un chargement quasi instantané, un facteur de classement crucial.</p></li>
                      <li className="flex items-start gap-4"><Shield size={24} className="text-amber-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong className="text-white">Sécurité (HTTPS) :</strong> La norme pour protéger vos utilisateurs et renforcer la confiance de Google.</p></li>
                      <li className="flex items-start gap-4"><Smartphone size={24} className="text-amber-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong className="text-white">Indexation "Mobile-First" :</strong> Votre site est conçu pour offrir une expérience parfaite sur mobile, car c'est la version que Google analyse en priorité.</p></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Section "Suivi Mensuel" */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Le SEO est un Marathon, Pas un Sprint</h2>
                    <p className="mt-4 text-lg text-gray-400">Le référencement n'est pas une action ponctuelle, mais un processus continu d'analyse et d'amélioration. Mon forfait de suivi mensuel est conçu pour assurer une croissance durable.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    <div className="flex items-start gap-4"><Wrench size={32} className="text-amber-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Audit Continu</h3><p className="mt-2 text-gray-400">Surveillance de la santé de votre site via la Google Search Console pour corriger les erreurs techniques.</p></div></div>
                    <div className="flex items-start gap-4"><BarChart3 size={32} className="text-amber-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Suivi de Positionnement</h3><p className="mt-2 text-gray-400">Analyse de vos mots-clés pour identifier les opportunités de croissance.</p></div></div>
                    <div className="flex items-start gap-4"><FileText size={32} className="text-amber-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Rapports Mensuels</h3><p className="mt-2 text-gray-400">Un rapport clair pour suivre les progrès et ajuster la stratégie ensemble.</p></div></div>
                    <div className="flex items-start gap-4"><BrainCircuit size={32} className="text-amber-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Conseils Stratégiques</h3><p className="mt-2 text-gray-400">Recommandations pour créer du contenu pertinent (articles de blog, etc.) qui attire un trafic qualifié.</p></div></div>
                </div>
            </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100">Prêt à dominer les résultats de recherche ?</h2>
                <p className="mt-4 text-lg text-gray-300">Discutons de votre stratégie SEO et commençons à attirer le trafic que vous méritez.</p>
                <button onClick={openModal} className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                    Planifier un audit SEO gratuit
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