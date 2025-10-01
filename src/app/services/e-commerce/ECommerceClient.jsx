"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
// ✅ Import de nouvelles icônes pour la nouvelle structure
import { Zap, Palette, KeyRound, Scaling, Check, Server, MonitorSmartphone, PackageCheck, Banknote, Users, BarChart, Mail, AlertTriangle } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero';

// --- PLACEHOLDER POUR LES LOGOS ---
// Lucide-React n'inclut pas les logos de marques.
// Tu devras créer ces composants toi-même en utilisant les SVG officiels.
// Exemple de composant StripeLogo.js : export const StripeLogo = () => <svg>...</svg>;
const StripeLogo = () => <span className="font-bold text-indigo-500">Stripe</span>;
const PayPalLogo = () => <span className="font-bold text-blue-400">PayPal</span>;


export default function ECommerceClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'e-commerce';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // --- HERO REVISITÉ ---
  // Un message qui attaque directement les points faibles des concurrents
  const heroTitle = "Une Boutique en Ligne Performante, sur Mesure et sans Abonnement Mensuel.";
  const heroSubtitle = "Au-delà des plateformes standards, notre agence crée des solutions e-commerce qui vous appartiennent vraiment, conçues pour convertir et évoluer avec votre entreprise.";
  const heroActions = [{ label: "Discuter de mon projet e-commerce", variant: "default", onClick: openModal }];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />
        
        <Hero 
          title={heroTitle}
          subtitle={heroSubtitle}
          actions={heroActions}
          className="[&_.bg-primary\\/60]:bg-green-500/60 pt-23"
        />
        
        {/* --- NOUVELLE SECTION : Le Problème --- */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100 flex items-center justify-center gap-3">
              <AlertTriangle className="text-yellow-400" />
              Quand les solutions standards atteignent leurs limites
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Les plateformes comme Shopify ou Wix sont excellentes pour démarrer, mais leur modèle montre vite ses faiblesses : thèmes rigides qui brident votre marque, lenteur due à l'accumulation d'applications tierces, et des frais mensuels qui augmentent avec votre succès.
            </p>
          </div>
        </section>

        {/* --- SECTION REVISITÉE : Notre Approche Technique --- */}
        <section className="py-16 sm:py-24 px-4 bg-gray-950/30">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Notre Approche : La Maîtrise Technique au Service de la Vente</h2>
                    <p className="mt-4 text-lg text-gray-400">Nous ne sommes pas des installateurs de thèmes. Nous sommes des développeurs. Chaque choix technique est pensé pour avoir un impact direct sur votre business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-2xl border border-white/10"><Zap size={32} className="text-green-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">La Vitesse comme Levier de Conversion</h3><p className="mt-2 text-gray-400">Chaque milliseconde compte. Nous utilisons Next.js pour garantir des temps de chargement quasi instantanés, ce qui augmente la satisfaction client, le taux de conversion et votre classement SEO.</p></div></div>
                    <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-2xl border border-white/10"><Palette size={32} className="text-green-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Le Sur-Mesure pour une Marque Unique</h3><p className="mt-2 text-gray-400">Libérez-vous des contraintes des templates. Nous créons le parcours client exact que vous souhaitez, des fiches produits interactives à un tunnel de paiement 100% personnalisé.</p></div></div>
                    <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-2xl border border-white/10"><KeyRound size={32} className="text-green-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Propriété Totale, Zéro Frais de Plateforme</h3><p className="mt-2 text-gray-400">Votre boutique vous appartient. Fini les 'loyers' mensuels et les frais sur transaction. Vous investissez dans un actif durable pour votre entreprise, pas dans une location.</p></div></div>
                    <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-2xl border border-white/10"><Scaling size={32} className="text-green-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Une Architecture Prête à Grandir</h3><p className="mt-2 text-gray-400">Notre code est propre et modulaire. Vous voulez connecter un ERP, un CRM ou un outil d'automatisation ? Votre boutique est conçue pour évoluer avec vos ambitions.</p></div></div>
                </div>
            </div>
        </section>

        {/* --- NOUVELLE SECTION : Notre Secret Technique --- */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Notre Secret : l'Architecture Headless & Open-Source</h2>
              <p className="mt-4 text-lg text-gray-400">Nous séparons le 'moteur' de la 'carrosserie' pour une flexibilité et une performance inégalées.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <div className="flex items-center gap-3 mb-4"><Server size={24} className="text-white" /><h3 className="text-2xl font-semibold text-white">Le Moteur (Back-end) : MedusaJS</h3></div>
                <p className="text-gray-300">Pour la gestion, nous nous appuyons sur MedusaJS, une fondation e-commerce open-source reconnue pour sa robustesse. C'est le cœur sécurisé de votre boutique : gestion des produits, commandes, clients, et promotions.</p>
              </div>
              <div className="p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <div className="flex items-center gap-3 mb-4"><MonitorSmartphone size={24} className="text-white" /><h3 className="text-2xl font-semibold text-white">La Vitrine (Front-end) : Next.js</h3></div>
                <p className="text-gray-300">Pour l'interface que voient vos clients, nous construisons une application 100% sur-mesure avec Next.js. Cette séparation garantit une expérience utilisateur unique et des performances exceptionnelles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- NOUVELLE SECTION : Checklist des Fonctionnalités --- */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">
              Toutes les fonctionnalités d'une plateforme leader, sans les contraintes
            </h2>
            <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 text-left">
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" /><span className="text-gray-300">Gestion de produits avancée</span></li>
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" /><span className="text-gray-300">Paniers et commande optimisée</span></li>
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" /><span className="text-gray-300">Comptes clients & historique</span></li>
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" /><span className="text-gray-300">Moteur de promotions</span></li>
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" /><span className="text-gray-300">Multi-devises & multi-régions</span></li>
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" /><span className="text-gray-300">Gestion des retours (RMA)</span></li>
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" /><span className="text-gray-300">SEO technique natif</span></li>
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" /><span className="text-gray-300">Intégrations sur-mesure (API)</span></li>
              <li className="flex items-center gap-3"><Check className="text-green-400 flex-shrink-0" />
                <div className="flex items-center gap-2">
                    <span className="text-gray-300">Paiements via</span> <StripeLogo /> / <PayPalLogo />
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* --- CTA & FAQ --- */}
        <section className="py-16 sm:py-24 px-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100">Prêt à construire une boutique qui vous ressemble vraiment ?</h2>
                <p className="mt-4 text-lg text-gray-300">Discutons de votre projet pour bâtir une solution e-commerce performante et pérenne.</p>
                <button 
                    onClick={openModal}
                    className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105"
                >
                    Obtenir mon devis sur-mesure
                </button>
            </div>
        </section>

        {/* On passe les nouvelles données FAQ à ton composant */}
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