"use client";

import { useState } from 'react';
import  Header  from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm'; 
import { ShoppingCart, ShieldCheck, Database, CheckCircle, Smartphone, Truck, Package, Store, Users } from 'lucide-react';
import { FAQ } from '@/components/FAQ';

export default function ECommerceClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'e-commerce';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />
        {/* Section Hero */}
        <section className="w-full px-4 pt-32 pb-20 flex flex-col items-center justify-center text-center">
            <div className="relative w-full max-w-5xl">
                <p className="font-semibold text-green-300">Solutions E-commerce</p>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-100 mt-4">
                  Construisons Votre Moteur de Vente en Ligne
                </h1>
                <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-300">
                  Une boutique en ligne est plus qu'un catalogue de produits. C'est un écosystème complet qui transforme votre entreprise en une force de vente accessible 24h/24, 7j/7, partout dans le monde.
                </p>
                <button 
                  onClick={openModal}
                  className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105"
                >
                  Démarrer mon projet E-commerce
                </button>
            </div>
        </section>
        
        {/* Section "Les 4 Piliers du Succès" */}
        <section className="py-16 sm:py-24 px-4 ">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Les 4 Piliers d'une Boutique en Ligne Rentable</h2>
                    <p className="mt-4 text-lg text-gray-400">Le succès en e-commerce repose sur l'intégration parfaite de ces quatre domaines d'expertise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col text-center items-center p-6 bg-gray-950/20 rounded-2xl"><Database size={32} className="text-green-400 mb-4" /><h3 className="text-xl font-semibold text-white">1. Fondation Technologique</h3><p className="mt-2 text-gray-400 flex-grow">Le choix de la bonne plateforme (SaaS ou Open-Source) pour garantir la flexibilité, la sécurité et la capacité à évoluer.</p></div>
                    <div className="flex flex-col text-center items-center p-6 bg-gray-950/20 rounded-2xl"><Smartphone size={32} className="text-green-400 mb-4" /><h3 className="text-xl font-semibold text-white">2. Expérience Client (UX)</h3><p className="mt-2 text-gray-400 flex-grow">Un site rapide, "Mobile-First", avec une navigation intuitive et un processus de paiement sans friction pour maximiser la conversion.</p></div>
                    <div className="flex flex-col text-center items-center p-6 bg-gray-950/20 rounded-2xl"><Users size={32} className="text-green-400 mb-4" /><h3 className="text-xl font-semibold text-white">3. Acquisition de Trafic</h3><p className="mt-2 text-gray-400 flex-grow">Une stratégie multi-canaux (SEO, SEA, réseaux sociaux) pour attirer un flux constant de visiteurs qualifiés sur votre boutique.</p></div>
                    <div className="flex flex-col text-center items-center p-6 bg-gray-950/20 rounded-2xl"><ShieldCheck size={32} className="text-green-400 mb-4" /><h3 className="text-xl font-semibold text-white">4. Confiance & Opérations</h3><p className="mt-2 text-gray-400 flex-grow">Des paiements sécurisés, un service client réactif et une logistique fiable pour bâtir une réputation solide et fidéliser vos clients.</p></div>
                </div>
            </div>
        </section>

        {/* Section "Modèles de Distribution" */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Choisir Votre Modèle Opérationnel</h2>
              <p className="mt-4 text-lg text-gray-400">La manière dont vous livrez vos produits est une décision stratégique qui définit votre business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Package size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Vente Directe (Stock Interne)</h3><p className="mt-2 text-gray-300">Le contrôle total sur l'expérience client et les marges les plus élevées, en échange d'un investissement initial et d'une complexité logistique.</p>
              </div>
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Truck size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Dropshipping</h3><p className="mt-2 text-gray-300">L'approche sans actifs, idéale pour se lancer avec un risque financier minimal, mais avec des marges plus faibles et moins de contrôle sur la marque.</p>
              </div>
              <div className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/15">
                <Store size={32} className="text-white mb-4" /><h3 className="text-xl font-semibold text-white">Vente sur Marketplace</h3><p className="mt-2 text-gray-300">Un accès instantané à une audience massive (Amazon, etc.), en contrepartie de commissions et d'une concurrence directe féroce.</p>
              </div>
            </div>
             <p className="mt-8 text-center text-sm text-gray-500">Une approche hybride est souvent optimale : utiliser le dropshipping pour tester le marché, la vente directe pour les produits gagnants, et les marketplaces comme canal d'acquisition.</p>
          </div>
        </section>

        {/* Section "Mon Approche" */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">
              Ma Solution E-commerce Sur-Mesure
            </h2>
            <ul className="mt-8 text-left space-y-4">
              <li className="flex items-start gap-4"><CheckCircle className="text-green-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong>Technologie Moderne :</strong> Pas de plateformes lourdes et lentes. J'utilise Next.js pour une boutique ultra-rapide, un avantage SEO majeur.</p></li>
              <li className="flex items-start gap-4"><CheckCircle className="text-green-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong>Intégration de Paiement Sécurisé :</strong> Je connecte votre site à des solutions de paiement fiables et reconnues comme Stripe pour une confiance maximale.</p></li>
              <li className="flex items-start gap-4"><CheckCircle className="text-green-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong>Optimisé pour la Conversion :</strong> Des fiches produits claires, un tunnel de commande simple et un design qui incite à l'achat.</p></li>
              <li className="flex items-start gap-4"><CheckCircle className="text-green-400 mt-1 flex-shrink-0" /><p className="text-gray-300"><strong>Autonomie Totale :</strong> Grâce à une interface d'administration sur-mesure, vous gérez vos produits, stocks et commandes sans dépendre de moi au quotidien.</p></li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100">Prêt à lancer votre boutique en ligne ?</h2>
                <p className="mt-4 text-lg text-gray-300">Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé.</p>
                <button 
                    onClick={openModal}
                    className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105"
                >
                    Démarrer mon projet E-commerce
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
