"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
// Les icônes restent pertinentes pour la section "Méthode"
import { Shield, LockKeyhole, Puzzle, DraftingCompass, Eye, CheckCircle, SlidersHorizontal, Layers } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero';

export default function DirectusClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'directus';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // --- HERO STRATÉGIQUE (INCHANGÉ) ---
  const heroTitle = "Gérez votre contenu en toute confiance. Sans jamais risquer de tout casser.";
  const heroSubtitle = "Oubliez la complexité et l'anxiété des usines à gaz. Nous créons pour vous un espace d'administration 100% sur-mesure, simple et sécurisé, qui vous donne la liberté de gérer votre site, sans la peur de faire une fausse manipulation.";
  const heroActions = [{ label: "Découvrir notre approche", variant: "default", href: "#approche" }];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />
        
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          actions={heroActions}
          className="[&_.bg-primary\\/60]:bg-gray-400/60 pt-23"
        />

        {/* --- SECTION 1 : LE PROBLÈME À RÉSOUDRE (INCHANGÉE) --- */}
        <section id="approche" className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Le Paradoxe de l'Autonomie</h2>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Les CMS traditionnels comme WordPress vous donnent les clés de toute la machine. Résultat : des interfaces surchargées de menus techniques, des mises à jour de plugins angoissantes et un risque permanent de dégrader le design ou le SEO de votre site. <strong>Avoir trop de contrôle, c'est ne plus rien contrôler du tout.</strong>
                </p>
            </div>
        </section>

        {/* --- SECTION 2 : LES DEUX PILIERS (INCHANGÉE) --- */}
        <section className="py-16 sm:py-24 px-4 bg-white/5">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Notre Méthode : La Gestion de Contenu Sereine</h2>
                    <p className="mt-4 text-lg text-gray-400">Nous séparons les fondations de votre site de l'interface de gestion pour vous offrir une expérience simple et sans risque.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Pilier 1: Le Socle de Données */}
                  <div className="flex flex-col p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <div className="flex items-center gap-3 mb-4"><Layers size={32} className="text-gray-300" /><h3 className="text-2xl font-semibold text-white">Pilier 1 : Le Socle de Données (Directus)</h3></div>
                    <p className="text-gray-300 mb-6 flex-grow">Nous architecturons d'abord vos contenus. En utilisant Directus, nous créons un "moteur" de données robuste et sur-mesure qui contient uniquement ce qui est nécessaire à votre activité (articles, produits, services, etc.).</p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3"><DraftingCompass size={16} /> Architecture de contenu personnalisée</li>
                      <li className="flex items-center gap-3"><Puzzle size={16} /> Base de données saine et propriétaire</li>
                      <li className="flex items-center gap-3"><LockKeyhole size={16} /> Séparation totale du code et du contenu</li>
                    </ul>
                  </div>
                  {/* Pilier 2: L'Interface sur-mesure */}
                  <div className="flex flex-col p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                    <div className="flex items-center gap-3 mb-4"><Eye size={32} className="text-gray-300" /><h3 className="text-2xl font-semibold text-white">Pilier 2 : L'Interface de Gestion Dédiée</h3></div>
                    <p className="text-gray-300 mb-6 flex-grow">C'est notre plus grande valeur ajoutée. Nous configurons une interface d'administration qui ne vous montre QUE ce que vous avez besoin de gérer. Fini les menus techniques, place à une expérience intuitive et 100% sécurisée.</p>
                     <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3"><SlidersHorizontal size={16} /> Interface épurée et sur-mesure</li>
                      <li className="flex items-center gap-3"><CheckCircle size={16} /> Rôles et permissions définis</li>
                      <li className="flex items-center gap-3"><Shield size={16} /> Aucun risque de "casser" le site</li>
                    </ul>
                  </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 3 : NOS OFFRES (SUPPRIMÉE) --- */}
        {/* L'ancienne section a été retirée pour se concentrer sur une offre unique de création. */}

        {/* --- NOUVELLE SECTION CTA --- */}
        <section className="py-16 sm:py-24 px-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100">Prêt à gérer votre site en toute sérénité ?</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Discutons de vos besoins pour construire l'espace d'administration sur-mesure qui vous simplifiera la vie.</p>
                <button 
                  onClick={openModal} 
                  className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105"
                >
                  Demander une consultation gratuite
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

