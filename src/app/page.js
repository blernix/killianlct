"use client"; // Étape 1: Indispensable pour utiliser des hooks comme useState

import { useState } from 'react'; // Étape 2: On importe le hook pour gérer l'état
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValuePropositions";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Automations } from "@/components/Automations";
import { AdminSection } from "@/components/Directus";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/Cta";
import { Footer } from "@/components/layout/Footer";
import { LogoCarousel } from "@/components/LogoCarousel";
import Header from "@/components/layout/Header";
import Modal from '@/components/Modal';
import ContactForm, { getModalTitle } from '@/components/ContactForm';
import { accueilFaqData } from './data/faq/accueil';

export default function Home() {
  // Étape 3: On crée les états pour piloter la modale
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState('general');

  // Étape 4: On crée les fonctions pour ouvrir/fermer la modale
  const openModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main>
        {/* Étape 5: On passe la fonction aux composants qui doivent ouvrir la modale */}
        <Header onOpenModal={openModal} />
        
        {/* J'ai corrigé et ajouté les IDs manquants pour la navigation */}
        <Hero id="accueil" />
        <ValueProposition />
        <Process id="processus" />
        <Services id="services" onOpenModal={openModal} />
        <Automations />
        <AdminSection />
        <LogoCarousel />
        <FAQ id="faq"
          title={accueilFaqData.title}
        subtitle={accueilFaqData.subtitle}
        faqItems={accueilFaqData.items} />
        <ContactSection onOpenModal={openModal} />
        <Footer />
      </main>

      {/* Étape 6: La modale est ajoutée ici, en dehors du 'main', prête à être affichée */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={getModalTitle(formType)}
      >
        <ContactForm formType={formType} onClose={closeModal} />
      </Modal>
    </>
  );
}