"use client";

import { useState } from 'react';
import  Header  from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
import { Package, Cpu, Users, Code, Server, Shield, CheckCircle, BrainCircuit, PenTool, Rocket, LifeBuoy } from 'lucide-react';
import Image from 'next/image';
import { FAQ } from '@/components/FAQ';


export default function ApplicationWebClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'application-web';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <main>
        <Header onOpenModal={openModal} />
        {/* Section Hero */}
        <section className="w-full px-4 pt-32 pb-20 flex flex-col items-center justify-center text-center">
            <div className="relative w-full max-w-5xl">
                <p className="font-semibold text-cyan-300">Solutions Métier Sur-Mesure</p>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-100 mt-4">
                  Transformez Vos Processus en Avantage Concurrentiel
                </h1>
                <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-300">
                  Au-delà d'un simple site, une application web est un levier stratégique pour optimiser vos opérations, créer de nouvelles sources de revenus et proposer des expériences utilisateur exceptionnelles.
                </p>
                <button 
                  onClick={openModal}
                  className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105"
                >
                  Concevoir mon outil
                </button>
            </div>
        </section>

        {/* Section "Application vs Site Web" */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Plus qu'un Site, un Outil Conçu pour l'Action</h2>
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                      La distinction est fondamentale : un site web est conçu pour <strong>informer</strong> ; une application web est conçue pour <strong>agir</strong>. Elle permet à vos utilisateurs de manipuler des données, d'interagir avec des fonctionnalités complexes et d'obtenir des résultats personnalisés, transformant votre navigateur en un véritable logiciel métier.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div className="bg-gray-950/40 border border-white/15 p-8 rounded-2xl"><h3 className="text-xl font-semibold text-white">Site Web</h3><p className="mt-2 text-gray-400">Présente du contenu (brochure, blog). L'interaction est limitée à la navigation.</p></div>
                    <div className="bg-cyan-600/20 border border-cyan-400/30 p-8 rounded-2xl"><h3 className="text-xl font-semibold text-white">Application Web</h3><p className="mt-2 text-gray-400">Permet d'exécuter des tâches (gestion de projet, facturation, réservation).</p></div>
                </div>
            </div>
        </section>

        {/* Section "Architecture" */}
        <section className="py-16 sm:py-24 px-4 ">
            <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Les Coulisses de la Performance</h2>
                    <p className="mt-6 text-gray-300 leading-relaxed">
                      Toute application robuste repose sur le modèle client-serveur. Je construis les deux facettes de votre projet avec la même rigueur, en assurant que la partie visible soit aussi solide que la partie immergée.
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4"><Code size={24} className="text-cyan-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong className="text-white">Le Frontend (Partie Visible) :</strong> C'est l'interface avec laquelle vos utilisateurs interagissent. Je la conçois avec Next.js pour garantir une expérience fluide, rapide et agréable sur tous les appareils.</p></li>
                      <li className="flex items-start gap-4"><Server size={24} className="text-cyan-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong className="text-white">Le Backend (Le Cerveau) :</strong> C'est le moteur invisible de l'application. Il gère la logique métier, la base de données et la sécurité. C'est le coffre-fort de votre projet, développé pour être robuste et évolutif.</p></li>
                    </ul>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/10">
                    <Image 
                        src="/applicationweb.png" // Votre image
                        alt="Diagramme de l'architecture client-serveur d'une application web" 
                        fill 
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>

        {/* Section "Cas d'usage" */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Des Outils Adaptés à Votre Stade de Croissance</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Package size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Pour les Startups</h3><p className="mt-2 text-gray-300">Développement rapide d'un <strong>Produit Minimum Viable (MVP)</strong> pour valider votre concept sur le marché avec un investissement maîtrisé.</p>
              </div>
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Cpu size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Pour les PME</h3><p className="mt-2 text-gray-300"><strong>Automatisation des processus</strong> internes (CRM, gestion de chantier) pour optimiser vos opérations, réduire les erreurs et libérer du temps précieux.</p>
              </div>
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Users size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Pour les Grandes Entreprises</h3><p className="mt-2 text-gray-300">Création de <strong>portails intranet/extranet</strong> pour centraliser l'information, intégrer vos systèmes existants et faciliter la collaboration à grande échelle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section "Cycle de vie" */}
        <section className="py-16 sm:py-24 px-4 ">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Un Processus Structuré, de l'Idée à la Réalité</h2>
                    <p className="mt-4 text-lg text-gray-400">Le développement d'une application performante n'est pas un événement, mais un processus structuré et cyclique.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    <div className="flex items-start gap-4"><BrainCircuit size={32} className="text-cyan-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Stratégie & Planification</h3><p className="mt-2 text-gray-400">Tout commence par un cahier des charges détaillé pour définir les objectifs, l'audience et le périmètre du projet.</p></div></div>
                    <div className="flex items-start gap-4"><PenTool size={32} className="text-cyan-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Conception UX/UI</h3><p className="mt-2 text-gray-400">Je conçois des maquettes et prototypes pour créer une interface intuitive et agréable à utiliser, avant d'écrire la moindre ligne de code.</p></div></div>
                    <div className="flex items-start gap-4"><Code size={32} className="text-cyan-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Développement</h3><p className="mt-2 text-gray-400">Je transforme le design en une application fonctionnelle, en construisant un backend robuste et une interface utilisateur réactive.</p></div></div>
                    <div className="flex items-start gap-4"><Shield size={32} className="text-cyan-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Tests & Qualité</h3><p className="mt-2 text-gray-400">Une phase de tests rigoureux est menée pour garantir la qualité, la stabilité et la sécurité de l'application.</p></div></div>
                    <div className="flex items-start gap-4"><Rocket size={32} className="text-cyan-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Déploiement & Lancement</h3><p className="mt-2 text-gray-400">Je m'occupe de la mise en production sur votre serveur pour rendre l'application accessible à vos utilisateurs finaux.</p></div></div>
                    <div className="flex items-start gap-4"><LifeBuoy size={32} className="text-cyan-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Maintenance & Évolution</h3><p className="mt-2 text-gray-400">Le travail ne s'arrête pas au lancement. Je reste disponible pour corriger les bugs, ajouter des fonctionnalités et assurer les mises à jour de sécurité.</p></div></div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100">Votre projet d'application commence ici</h2>
                <p className="mt-4 text-lg text-gray-300">Discutons de vos besoins pour créer l'outil qui fera la différence.</p>
                <button onClick={openModal} className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                    Obtenir une consultation gratuite
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
