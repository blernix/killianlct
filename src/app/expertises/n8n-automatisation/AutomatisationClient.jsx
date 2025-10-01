"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
// ✅ Nouvelles icônes pour la nouvelle structure
import { Map, Settings, PlayCircle, ShieldCheck, Repeat, Code, ArrowRight, Lightbulb, BoxSelect } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero';

export default function AutomatisationClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'automatisation';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // --- HERO STRATÉGIQUE ---
  const heroTitle = "Et si vos logiciels travaillaient enfin ensemble, pour vous ?";
  const heroSubtitle = "Arrêtez de perdre du temps en tâches manuelles et en copier-coller. Notre agence conçoit des systèmes d'automatisation intelligents qui connectent vos outils, fiabilisent vos processus et libèrent le potentiel de votre équipe.";
  const heroActions = [{ label: "Découvrir notre méthode", variant: "default", href: "#methode" }];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />
        
        <Hero 
          title={heroTitle}
          subtitle={heroSubtitle}
          actions={heroActions}
          className="[&_.bg-primary\\/60]:bg-orange-500/60 pt-23"
        />

        {/* --- SECTION 1 : LE PROBLÈME À RÉSOUDRE --- */}
        <section id="methode" className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Le Coût Invisible de la "Désynchronisation"</h2>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Chaque tâche manuelle, chaque information recopiée d'un outil à l'autre est une micro-perte de temps et un risque d'erreur. Cumulées, ces frictions créent des "silos de données", ralentissent votre croissance et frustrent vos équipes. L'automatisation n'est pas un luxe, c'est la colonne vertébrale d'une entreprise efficace.
                </p>
            </div>
        </section>

        {/* --- SECTION 2 : LES DEUX PILIERS --- */}
        <section className="py-16 sm:py-24 px-4 bg-white/5">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Notre Méthode : De la Stratégie à l'Exécution</h2>
                    <p className="mt-4 text-lg text-gray-400">Un workflow efficace n'est pas juste un branchement de tuyaux. Il naît d'une réflexion stratégique sur vos processus métiers.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Pilier 1: Conception Stratégique */}
                  <div className="flex flex-col p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <div className="flex items-center gap-3 mb-4"><Map size={32} className="text-orange-300" /><h3 className="text-2xl font-semibold text-white">Pilier 1 : La Conception Stratégique</h3></div>
                    <p className="text-gray-300 mb-6 flex-grow">Nous ne commençons jamais par la technique. Nous cartographions vos processus actuels pour identifier les goulots d'étranglement et les tâches à plus fort potentiel d'automatisation. C'est la phase de l'architecte.</p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3"><Lightbulb size={16} /> Audit de vos processus existants</li>
                      <li className="flex items-center gap-3"><BoxSelect size={16} /> Identification des opportunités</li>
                      <li className="flex items-center gap-3"><Settings size={16} /> Architecture du workflow cible</li>
                    </ul>
                  </div>
                  {/* Pilier 2: Développement & Maintenance */}
                  <div className="flex flex-col p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <div className="flex items-center gap-3 mb-4"><PlayCircle size={32} className="text-orange-300" /><h3 className="text-2xl font-semibold text-white">Pilier 2 : Le Développement & la Maintenance</h3></div>
                    <p className="text-gray-300 mb-6 flex-grow">Une fois la stratégie validée, nous construisons, testons et déployons les workflows sur notre infrastructure sécurisée. Nous gérons tout de A à Z pour votre tranquillité d'esprit. C'est la phase de l'ingénieur.</p>
                     <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3"><Code size={16} /> Développement de workflows robustes</li>
                      <li className="flex items-center gap-3"><ShieldCheck size={16} /> Déploiement et surveillance pro-active</li>
                      <li className="flex items-center gap-3"><Repeat size={16} /> Optimisation continue des performances</li>
                    </ul>
                  </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 3 : NOS OFFRES --- */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Deux Offres pour Mettre Votre Business sur Pilote Automatique</h2>
                  <p className="mt-4 text-lg text-gray-400">Selon vos besoins, nous pouvons résoudre un problème ponctuel ou devenir votre partenaire d'automatisation.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  {/* Offre 1 */}
                  <div className="flex flex-col text-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <h3 className="text-xl font-semibold text-orange-300">OFFRE INITIALE</h3>
                    <h4 className="text-2xl font-bold text-white mt-2">Audit & Workflow Initial</h4>
                    <p className="mt-4 text-gray-300 flex-grow">Idéal pour démarrer. Nous analysons vos processus et construisons un premier workflow pour résoudre votre problème le plus chronophage et démontrer un retour sur investissement immédiat.</p>
                    <button onClick={openModal} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20">
                        Automatiser une tâche <ArrowRight size={20} />
                    </button>
                  </div>
                  {/* Offre 2 */}
                   <div className="flex flex-col text-center p-8 rounded-3xl border-2 shadow-2xl bg-gray-950/60 backdrop-blur-lg border-orange-400">
                    <h3 className="text-xl font-semibold text-orange-300">NOTRE RECOMMANDATION</h3>
                    <h4 className="text-2xl font-bold text-white mt-2">Partenariat d'Automatisation</h4>
                    <p className="mt-4 text-gray-300 flex-grow">Notre offre principale. Un accompagnement mensuel pour identifier, construire et maintenir l'ensemble de vos workflows. Nous devenons votre pôle d'automatisation externalisé.</p>
                    <button onClick={openModal} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                        Devenir partenaire <ArrowRight size={20} />
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
