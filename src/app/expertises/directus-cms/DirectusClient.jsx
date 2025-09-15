"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
import { SlidersHorizontal, Database, Code, Briefcase, Bot, CheckCircle, ShoppingCart, PenTool } from 'lucide-react';
import Image from 'next/image';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero'; // ✅ 1. On importe le Hero

export default function DirectusClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'directus';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ✅ 2. On prépare les données pour le Hero
  const heroTitle = (
    <>
      <span className="block text-lg font-semibold text-primary mb-4">
        Back-office Sur-Mesure & Plateforme de Données
      </span>
      Reprenez le Contrôle Total de Vos Données
    </>
  );

  const heroSubtitle = "Je ne vous livre pas une \"boîte noire\". Je construis votre site sur Directus, une plateforme de données open-source qui vous offre une interface d'administration 100% sur-mesure et vous garantit la pleine propriété de vos données, sans jamais être prisonnier d'une technologie.";

  const heroActions = [
    {
      label: "Découvrir la solution",
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
          className="[&_.bg-primary\\/60]:bg-gray-400/60 pt-23" // On adapte la couleur du halo au gris/blanc de la page
        />

        {/* Section Philosophie */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">
                La Philosophie Directus : Vos Données d'Abord
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Database size={32} className="text-white mb-4" />
                <h3 className="text-xl font-semibold text-white">Base de Données Pure</h3>
                <p className="mt-2 text-gray-300">Directus s'installe par-dessus votre base de données SQL sans la modifier. Vos données restent pures, standard et portables. Vous n'êtes jamais prisonnier.</p>
              </div>
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Code size={32} className="text-white mb-4" />
                <h3 className="text-xl font-semibold text-white">API Instantanée</h3>
                <p className="mt-2 text-gray-300">Dès que votre structure de données est définie, Directus génère automatiquement une API REST et GraphQL rapide et sécurisée pour les développeurs.</p>
              </div>
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <SlidersHorizontal size={32} className="text-white mb-4" />
                <h3 className="text-xl font-semibold text-white">Interface No-Code</h3>
                <p className="mt-2 text-gray-300">Une interface de gestion intuitive et 100% personnalisable est créée pour vous, permettant à vos équipes de gérer le contenu sans aucune compétence technique.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Cas d'usage : CRM */}
        <section className="py-16 sm:py-24 px-4 bg-white/5">
            <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/10">
                    <Image 
                        src="/directuslogo.png"
                        alt="Exemple d'interface de CRM personnalisé construit avec Directus" 
                        fill 
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Cas d'Usage : Votre CRM 100% Personnalisé</h2>
                    <p className="mt-6 text-gray-300 leading-relaxed">
                      Oubliez les CRM rigides et coûteux. Avec Directus, nous pouvons construire un outil de gestion client qui s'adapte parfaitement à VOS processus métier, et non l'inverse.
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4"><CheckCircle className="text-white mt-1 flex-shrink-0" /><p className="text-gray-300"><strong>Gestion des Contacts & Organisations :</strong> Suivez vos clients et prospects dans une interface claire.</p></li>
                      <li className="flex items-start gap-4"><CheckCircle className="text-white mt-1 flex-shrink-0" /><p className="text-gray-300"><strong>Pipelines de Vente Visuels :</strong> Gérez vos opportunités commerciales sur un tableau Kanban de type "glisser-déposer".</p></li>
                      <li className="flex items-start gap-4"><CheckCircle className="text-white mt-1 flex-shrink-0" /><p className="text-gray-300"><strong>Suivi des Activités :</strong> Historisez chaque interaction (appels, emails, rendez-vous) pour une relation client sans faille.</p></li>
                      <li className="flex items-start gap-4"><CheckCircle className="text-white mt-1 flex-shrink-0" /><p className="text-gray-300"><strong>Automatisation :</strong> Déclenchez des emails de suivi ou des notifications internes à chaque étape clé de votre cycle de vente.</p></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Section "Les Possibilités" */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Bien plus qu'un simple CMS</h2>
                    <p className="mt-4 text-lg text-gray-400">La flexibilité de Directus permet de construire une infinité d'outils pilotés par la donnée, tous accessibles depuis une seule et même interface.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    <div className="flex items-start gap-4"><PenTool size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Gestion de Blog</h3><p className="mt-2 text-gray-400">Écrivez, planifiez et publiez vos articles de blog pour alimenter votre stratégie SEO.</p></div></div>
                    <div className="flex items-start gap-4"><Briefcase size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Gestion de Projets</h3><p className="mt-2 text-gray-400">Suivez l'avancement de vos projets, assignez des tâches et centralisez vos documents.</p></div></div>
                    <div className="flex items-start gap-4"><ShoppingCart size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Catalogue Produits</h3><p className="mt-2 text-gray-400">Gérez un inventaire de produits pour un site e-commerce, avec photos, prix et descriptions.</p></div></div>
                    <div className="flex items-start gap-4"><Bot size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Base de Connaissance IA</h3><p className="mt-2 text-gray-400">Centralisez vos documents pour alimenter un chatbot intelligent capable de répondre aux questions de vos clients.</p></div></div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100">Envie d'autonomie pour gérer votre site ?</h2>
                <p className="mt-4 text-lg text-gray-300">Parlons de la mise en place d'un espace d'administration fait pour vous.</p>
                <button onClick={openModal} className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                    Découvrir la solution
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