"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
// ✅ Nouvelles icônes pour la nouvelle structure
import { Target, Building2, TrendingUp, Search, PenTool, Link as LinkIcon, BarChart3, Wrench, FileText, Smartphone, Shield, Clock, BrainCircuit, ArrowRight } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero';

export default function SeoClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'seo';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // --- HERO STRATÉGIQUE ---
  const heroTitle = "Le SEO n'est pas une dépense. C'est votre principal canal d'acquisition.";
  const heroSubtitle = "Arrêtons de 'jouer' avec Google. Notre agence met en place une véritable stratégie de référencement pour attirer un flux constant de clients qualifiés et construire votre croissance sur le long terme.";
  const heroActions = [{ label: "Découvrir notre approche", variant: "default", href: "#approche" }];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        <Hero 
          title={heroTitle}
          subtitle={heroSubtitle}
          actions={heroActions}
          className="[&_.bg-primary\\/60]:bg-amber-500/60 pt-23"
        />

        {/* --- SECTION 1 : REDÉFINITION DU SEO --- */}
        <section id="approche" className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Le SEO a changé. Votre stratégie aussi.</h2>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Pensez au SEO comme à un marché financier. Les "actions" sont les mots-clés que vos clients recherchent. Leur "valeur" (l'intention) change constamment. Une stratégie SEO moderne ne consiste pas à acheter une action une fois et à espérer. Elle consiste à **analyser le marché en continu, à investir dans les bons contenus et à ajuster sa position** pour maximiser le retour sur investissement.
                </p>
            </div>
        </section>

        {/* --- SECTION 2 : LES DEUX PILIERS --- */}
        <section className="py-16 sm:py-24 px-4 bg-white/5">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Notre Méthode : 2 Piliers pour une Croissance Durable</h2>
                    <p className="mt-4 text-lg text-gray-400">Le succès en référencement repose sur des fondations techniques irréprochables, activées par une stratégie de contenu dynamique.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Pilier 1: Fondations Techniques */}
                  <div className="flex flex-col p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <div className="flex items-center gap-3 mb-4"><Building2 size={32} className="text-amber-300" /><h3 className="text-2xl font-semibold text-white">Pilier 1 : Les Fondations Techniques</h3></div>
                    <p className="text-gray-300 mb-6 flex-grow">Avant toute chose, nous nous assurons que votre site est une piste de décollage parfaite pour Google. C'est le socle non-négociable de toute performance future.</p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3"><Clock size={16} /> Vitesse & Core Web Vitals</li>
                      <li className="flex items-center gap-3"><Wrench size={16} /> Structure sémantique & Schema.org</li>
                      <li className="flex items-center gap-3"><FileText size={16} /> Indexation & Crawlabilité</li>
                      <li className="flex items-center gap-3"><Smartphone size={16} /> Expérience Mobile-First</li>
                    </ul>
                  </div>
                  {/* Pilier 2: Moteur de Croissance */}
                  <div className="flex flex-col p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <div className="flex items-center gap-3 mb-4"><TrendingUp size={32} className="text-amber-300" /><h3 className="text-2xl font-semibold text-white">Pilier 2 : Le Moteur de Croissance</h3></div>
                    <p className="text-gray-300 mb-6 flex-grow">Une fois les fondations posées, le vrai travail commence. Nous devenons votre partenaire pour analyser le "marché", produire du contenu pertinent et construire votre autorité.</p>
                     <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3"><Search size={16} /> Analyse d'intention utilisateur</li>
                      <li className="flex items-center gap-3"><PenTool size={16} /> Stratégie de contenu à forte valeur</li>
                      <li className="flex items-center gap-3"><LinkIcon size={16} /> Construction d'autorité (Netlinking)</li>
                      <li className="flex items-center gap-3"><BarChart3 size={16} /> Suivi des performances & ajustements</li>
                    </ul>
                  </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 3 : NOS OFFRES --- */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Deux Manières de Collaborer</h2>
                  <p className="mt-4 text-lg text-gray-400">Selon votre maturité et vos objectifs, nous proposons deux approches complémentaires.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  {/* Offre 1 */}
                  <div className="flex flex-col text-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <h3 className="text-xl font-semibold text-amber-300">OFFRE INITIALE</h3>
                    <h4 className="text-2xl font-bold text-white mt-2">Audit & Socle Technique</h4>
                    <p className="mt-4 text-gray-300 flex-grow">Idéal pour démarrer ou corriger un site existant. Nous réalisons un audit complet de votre présence en ligne et mettons en place toutes les fondations techniques (Pilier 1) pour préparer votre croissance.</p>
                    <button onClick={openModal} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20">
                        Demander un audit <ArrowRight size={20} />
                    </button>
                  </div>
                  {/* Offre 2 */}
                   <div className="flex flex-col text-center p-8 rounded-3xl border-2 shadow-2xl bg-gray-950/60 backdrop-blur-lg border-amber-400">
                    <h3 className="text-xl font-semibold text-amber-300">NOTRE RECOMMANDATION</h3>
                    <h4 className="text-2xl font-bold text-white mt-2">Partenariat de Croissance SEO</h4>
                    <p className="mt-4 text-gray-300 flex-grow">Notre offre principale. Un accompagnement mensuel pour piloter activement votre stratégie de contenu, construire votre autorité et analyser les résultats (Pilier 2). C'est la voie royale vers une croissance durable et prévisible.</p>
                    <button onClick={openModal} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                        Démarrer notre partenariat <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
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
