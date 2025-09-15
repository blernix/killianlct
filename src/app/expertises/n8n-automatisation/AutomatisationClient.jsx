"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
import { Zap, BrainCircuit, SlidersHorizontal, Bot, Code, ShieldCheck, Repeat, GitBranch } from 'lucide-react';
import Image from 'next/image';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero'; // ✅ 1. On importe le Hero

export default function AutomatisationClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'automatisation';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ✅ 2. On prépare les données pour le Hero
  const heroTitle = (
    <>
      <span className="block text-lg font-semibold text-primary mb-4">
        Expertise en Automatisation de Workflows
      </span>
      Travaillez Moins, Accomplissez Plus
    </>
  );

  const heroSubtitle = (
    <>
      Je conçois et déploie des systèmes d'automatisation sur-mesure avec <strong>n8n</strong> pour interconnecter vos applications, éliminer les tâches répétitives et libérer le plein potentiel de votre entreprise.
    </>
  );

  const heroActions = [
    {
      label: "Optimiser mon activité",
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
          className="[&_.bg-primary\\/60]:bg-orange-500/60 pt-23" // On adapte la couleur du halo à l'orange de la page
        />

        {/* Section "Ma Proposition de Valeur" */}
        <section className="py-16 sm:py-24 px-4 ">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Ma Proposition de Valeur : n8n Auto-Hébergé</h2>
                    <p className="mt-4 text-lg text-gray-400">J'utilise n8n, une plateforme "source-available" conçue pour la flexibilité. En l'hébergeant sur mon propre serveur, je vous offre des avantages stratégiques que les solutions SaaS grand public ne peuvent égaler.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col text-center items-center p-6 bg-gray-950/20 rounded-2xl"><Code size={32} className="text-orange-400 mb-4" /><h3 className="text-xl font-semibold text-white">Flexibilité Maximale</h3><p className="mt-2 text-gray-400 flex-grow">Intégration de code personnalisé (JS/Python) pour une logique sur-mesure, sans aucune limite de la plateforme.</p></div>
                    <div className="flex flex-col text-center items-center p-6 bg-gray-950/20 rounded-2xl"><ShieldCheck size={32} className="text-orange-400 mb-4" /><h3 className="text-xl font-semibold text-white">Contrôle des Données</h3><p className="mt-2 text-gray-400 flex-grow">Vos données sensibles ne transitent jamais par un service tiers, garantissant une confidentialité et une conformité RGPD totales.</p></div>
                    <div className="flex flex-col text-center items-center p-6 bg-gray-950/20 rounded-2xl"><Repeat size={32} className="text-orange-400 mb-4" /><h3 className="text-xl font-semibold text-white">Coûts Maîtrisés</h3><p className="mt-2 text-gray-400 flex-grow">Un modèle économique prévisible, sans facturation à la tâche, qui rend les workflows complexes et à grand volume plus rentables.</p></div>
                    <div className="flex flex-col text-center items-center p-6 bg-gray-950/20 rounded-2xl"><BrainCircuit size={32} className="text-orange-400 mb-4" /><h3 className="text-xl font-semibold text-white">Capacités d'IA Avancées</h3><p className="mt-2 text-gray-400 flex-grow">Une plateforme conçue pour orchestrer des systèmes d'agents IA complexes, bien au-delà d'un simple appel API.</p></div>
                </div>
            </div>
        </section>

        {/* Section "Comment ça marche ?" */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Comment ça marche ? L'Anatomie d'un Workflow.</h2>
                    <p className="mt-6 text-gray-300 leading-relaxed">
                      Chaque automatisation est un <strong>workflow</strong>, une séquence logique de "nœuds" que je construis visuellement. Chaque nœud est une brique de construction qui accomplit une action précise.
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4"><Zap size={24} className="text-orange-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong className="text-white">Le Déclencheur (Trigger) :</strong> C'est le point de départ. Il écoute un événement : un formulaire rempli, un email reçu, un paiement validé, ou un planning (ex: tous les lundis à 9h).</p></li>
                      <li className="flex items-start gap-4"><GitBranch size={24} className="text-orange-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong className="text-white">Les Nœuds d'Action :</strong> Ce sont les étapes du processus. Envoyer un message sur Telegram, créer une tâche dans Trello, interroger une IA avec vos données, mettre à jour une base de données... Les possibilités sont infinies.</p></li>
                    </ul>
                </div>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/10">
                    <Image 
                        src="/n8nlogo.png"
                        alt="Logo de n8n, plateforme d'automatisation" 
                        fill 
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>

        {/* Section "Cas d'usage" */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Des Possibilités Infinies pour Votre Entreprise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <BrainCircuit size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Orchestration d'IA Avancée</h3><p className="mt-2 text-gray-300">Créez des agents IA capables de converser avec vos documents internes (RAG), de générer du contenu personnalisé ou d'agir comme un support client de premier niveau.</p>
              </div>
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <SlidersHorizontal size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Opérations & Productivité</h3><p className="mt-2 text-gray-300">Synchronisez vos outils : créez une carte Trello depuis un email, recevez une notification Slack ou Telegram pour chaque vente, générez et envoyez des rapports automatiquement.</p>
              </div>
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Bot size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Marketing & Vente</h3><p className="mt-2 text-gray-300">Automatisez votre pipeline de leads : enrichissez les contacts issus de votre site, ajoutez-les à votre CRM et déclenchez des séquences d'emails personnalisées.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100">Prêt à automatiser votre succès ?</h2>
                <p className="mt-4 text-lg text-gray-300">Discutons de vos tâches répétitives et voyons comment les faire disparaître.</p>
                <button onClick={openModal} className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                    Optimiser mon activité
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