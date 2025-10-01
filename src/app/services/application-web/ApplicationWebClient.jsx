"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
// ✅ Nouvelles icônes pour la nouvelle structure
import { BoxSelect, Layers, GitBranch, Puzzle, DraftingCompass, TestTube2, Rocket, LifeBuoy, ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero';

export default function ApplicationWebClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'application-web';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // --- HERO STRATÉGIQUE ---
  const heroTitle = "Et si votre logiciel métier était votre meilleur avantage concurrentiel ?";
  const heroSubtitle = "Arrêtez de tordre vos processus pour qu'ils rentrent dans un logiciel standard. Nous créons l'application web sur-mesure qui s'adapte à votre façon unique de travailler et qui accélère votre croissance.";
  const heroActions = [{ label: "Découvrir notre méthode", variant: "default", href: "#methode" }];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        <Hero 
          title={heroTitle}
          subtitle={heroSubtitle}
          actions={heroActions}
          className="[&_.bg-primary\\/60]:bg-cyan-500/60 pt-23"
        />

        {/* --- SECTION 1 : LE PROBLÈME À RÉSOUDRE --- */}
        <section id="methode" className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Le Plafond de Verre du Logiciel Standard</h2>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Les logiciels SaaS sont puissants, mais ils sont conçus pour le plus grand nombre. Résultat : vous payez pour des fonctionnalités que vous n'utilisez pas, pendant que le processus unique qui fait votre force est bridé par des limitations techniques. C'est le moment de construire un outil qui vous ressemble vraiment.
                </p>
            </div>
        </section>

        {/* --- SECTION 2 : LES DEUX PILIERS --- */}
        <section className="py-16 sm:py-24 px-4 bg-white/5">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Notre Méthode : 2 Piliers pour une Solution Durable</h2>
                    <p className="mt-4 text-lg text-gray-400">Une application réussie combine une conception initiale rigoureuse et une capacité à évoluer dans le temps.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Pilier 1: Application Socle */}
                  <div className="flex flex-col p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <div className="flex items-center gap-3 mb-4"><Layers size={32} className="text-cyan-300" /><h3 className="text-2xl font-semibold text-white">Pilier 1 : L'Application Socle (MVP)</h3></div>
                    <p className="text-gray-300 mb-6 flex-grow">Nous transformons votre idée en une première version fonctionnelle et robuste. L'objectif est de valider le concept, de résoudre votre problème le plus urgent et de déployer rapidement une solution qui apporte une valeur immédiate.</p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3"><Lightbulb size={16} /> Atelier de conception & stratégie</li>
                      <li className="flex items-center gap-3"><DraftingCompass size={16} /> Design UX/UI centré utilisateur</li>
                      <li className="flex items-center gap-3"><Puzzle size={16} /> Développement d'un socle robuste</li>
                      <li className="flex items-center gap-3"><TestTube2 size={16} /> Phase de tests & assurance qualité</li>
                    </ul>
                  </div>
                  {/* Pilier 2: Partenariat d'Évolution */}
                  <div className="flex flex-col p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <div className="flex items-center gap-3 mb-4"><GitBranch size={32} className="text-cyan-300" /><h3 className="text-2xl font-semibold text-white">Pilier 2 : Le Partenariat d'Évolution</h3></div>
                    <p className="text-gray-300 mb-6 flex-grow">Une application n'est jamais vraiment "terminée". C'est un actif qui doit vivre. Nous devenons votre partenaire technique pour maintenir, sécuriser et faire évoluer votre outil en fonction des retours utilisateurs et de vos nouveaux défis.</p>
                     <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3"><LifeBuoy size={16} /> Maintenance préventive & sécurité</li>
                      <li className="flex items-center gap-3"><Rocket size={16} /> Ajout de nouvelles fonctionnalités</li>
                      <li className="flex items-center gap-3"><TrendingUp size={16} /> Optimisation des performances</li>
                      <li className="flex items-center gap-3"><BoxSelect size={16} /> Intégration avec d'autres outils</li>
                    </ul>
                  </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 3 : NOS OFFRES --- */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Deux Offres pour Concrétiser Votre Projet</h2>
                  <p className="mt-4 text-lg text-gray-400">Que vous ayez besoin de construire l'outil ou de le faire grandir, nous avons une solution.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  {/* Offre 1 */}
                  <div className="flex flex-col text-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <h3 className="text-xl font-semibold text-cyan-300">OFFRE INITIALE</h3>
                    <h4 className="text-2xl font-bold text-white mt-2">Développement d'Application Socle</h4>
                    <p className="mt-4 text-gray-300 flex-grow">Pour les entreprises qui souhaitent lancer une nouvelle application. Nous gérons le projet de A à Z, de l'idée à la mise en production de votre Produit Minimum Viable (MVP).</p>
                    <button onClick={openModal} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20">
                        Lancer mon projet <ArrowRight size={20} />
                    </button>
                  </div>
                  {/* Offre 2 */}
                   <div className="flex flex-col text-center p-8 rounded-3xl border-2 shadow-2xl bg-gray-950/60 backdrop-blur-lg border-cyan-400">
                    <h3 className="text-xl font-semibold text-cyan-300">NOTRE RECOMMANDATION</h3>
                    <h4 className="text-2xl font-bold text-white mt-2">Partenariat d'Évolution</h4>
                    <p className="mt-4 text-gray-300 flex-grow">Pour les entreprises qui ont déjà une application (créée par nous ou non). Un accompagnement mensuel pour assurer la maintenance, la sécurité et le développement continu de nouvelles fonctionnalités.</p>
                    <button onClick={openModal} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                        Faire évoluer mon application <ArrowRight size={20} />
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
