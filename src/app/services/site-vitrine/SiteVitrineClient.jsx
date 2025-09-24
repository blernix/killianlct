// Fichier : app/site-vitrine/page.js (ou où que tu places ce composant)

"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { formFieldsConfig } from '@/components/ContactForm';
// ✅ J'ai ajouté de nouvelles icônes pour la section "Anatomie"
import { TrendingUp, ShieldCheck, Zap, Info, Users, Building, UserCheck, LayoutDashboard, FileText, Image as ImageIcon, MessageSquare, Phone, Newspaper, HelpCircle, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/blocks/hero';

export default function SiteVitrineClient({ faqData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formType = 'site-vitrine';
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ✅ 1. Contenu du Hero enrichi avec les stats du PDF pour créer l'urgence
  const heroTitle = (
    <>
      <span className="block text-lg font-semibold text-primary mb-4">
        Le Socle de Votre Présence en Ligne
      </span>
      Votre Site Vitrine : Un Commercial Actif 24h/24, 7j/7
    </>
  );
  
  const heroSubtitle = "Dans un marché où 80% des consommateurs recherchent en ligne avant d'acheter, être absent du web n'est plus une opportunité manquée, c'est un risque concurrentiel majeur. Le site vitrine est le premier pas pour transformer votre présence numérique en un puissant moteur de croissance.";

  const heroActions = [
    {
      label: "Discutons de votre projet",
      variant: "default",
      onClick: openModal,
    },
  ];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />
        
        <Hero 
          title={heroTitle}
          subtitle={heroSubtitle}
          actions={heroActions}
          className="[&_.bg-primary\\/60]:bg-violet-500/60 pt-23"
        />

        {/* ✅ 2. NOUVELLE SECTION : Qu'est-ce qu'un site vitrine stratégique ? */}
        <section className="py-16 sm:py-24 px-4 ">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Plus qu'une simple carte de visite numérique</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Fondamentalement, un site vitrine présente votre entreprise, vos services et vos valeurs. Mais sa mission stratégique va bien au-delà : c'est un écosystème d'information conçu pour <strong className="text-white">générer des opportunités commerciales qualifiées</strong>. Contrairement à un site e-commerce, il ne gère pas de transactions directes, ce qui le rend plus simple et plus rapide à déployer, constituant ainsi le point d'entrée idéal dans le digital.
            </p>
          </div>
        </section>

        {/* ✅ 3. Section 4 Piliers Stratégiques avec contenu enrichi */}
        <section className="py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Un écosystème conçu pour bâtir la confiance</h2>
                    <p className="mt-4 text-lg text-gray-400">Le rôle d'un site vitrine repose sur quatre piliers qui transforment un simple visiteur en prospect qualifié en surmontant son scepticisme naturel.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    <div className="flex items-start gap-4"><TrendingUp size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Visibilité & Notoriété</h3><p className="mt-2 text-gray-400">Apparaître dans les résultats Google lorsque des clients recherchent vos services. Votre entreprise devient accessible 24h/24, 7j/7, sans contraintes géographiques, captant ainsi la demande active.</p></div></div>
                    <div className="flex items-start gap-4"><ShieldCheck size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Crédibilité & Image de Marque</h3><p className="mt-2 text-gray-400">Un design professionnel et un contenu de qualité sont des signaux de confiance puissants. Vous contrôlez votre récit de marque pour vous différencier et asseoir votre expertise.</p></div></div>
                    <div className="flex items-start gap-4"><Zap size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Acquisition de Prospects (Lead Gen)</h3><p className="mt-2 text-gray-400">Convertir les visiteurs anonymes en contacts identifiés via des formulaires de contact clairs, des demandes de devis simplifiées et des appels à l'action incitatifs. C'est un outil de prospection qui travaille pour vous en continu.</p></div></div>
                    <div className="flex items-start gap-4"><Info size={32} className="text-violet-400 mt-1 flex-shrink-0" /><div><h3 className="text-xl font-semibold text-white">Centre d'Information & Relation Client</h3><p className="mt-2 text-gray-400">Centraliser les informations essentielles (horaires, services, FAQ) pour améliorer l'expérience client, rassurer les prospects et soulager votre service client des questions récurrentes.</p></div></div>
                </div>
            </div>
        </section>

        {/* ✅ 4. Section "À qui s'adresse ?" avec contenu plus spécifique et orienté "problème résolu" */}
        <section className="py-16 sm:py-24 px-4 ">
            <div className="mx-auto max-w-5xl space-y-20">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Un outil sur-mesure pour chaque professionnel</h2>
                    <p className="mt-4 text-lg text-gray-400">Le site vitrine s'adapte pour rationaliser le processus commercial propre à chaque métier.</p>
                </div>
                {/* ... (Le reste de la section reste identique, mais le contenu est maintenant bien contextualisé) ... */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image src="/artisan.png" alt="Site vitrine pour artisan ou indépendant" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" priority={true} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white flex items-center gap-3"><Users size={24} className="text-violet-400"/>Artisans & Indépendants</h3>
                      <p className="mt-4 text-gray-400">Le site devient un <strong className="text-white">portfolio interactif</strong> qui bâtit la confiance sur la preuve de votre savoir-faire. Présentez vos réalisations "avant/après", mettez en avant vos certifications (RGE, Qualibat...), et rationalisez les demandes de devis. Un prospect qui vous contacte est déjà convaincu.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-last relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image src="/pme.png" alt="Site vitrine pour TPE, PME et commerçant" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white flex items-center gap-3"><Building size={24} className="text-violet-400"/>TPE, PME & Commerçants</h3>
                      <p className="mt-4 text-gray-400">L'enjeu est la <strong className="text-white">visibilité locale</strong>. Un site optimisé pour le SEO local devient votre premier point de contact : horaires, carte Google Maps, téléphone cliquable, promotions. Il libère un temps précieux à votre personnel et transforme les recherches en ligne en visites physiques.</p></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image src="/liberal.png" alt="Site vitrine pour profession libérale" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white flex items-center gap-3"><UserCheck size={24} className="text-violet-400"/>Professions Libérales</h3>
                      <p className="mt-4 text-gray-400">Pour un consultant, avocat ou thérapeute, la crédibilité repose sur l'expertise. Le site est l'outil idéal pour <strong className="text-white">asseoir votre autorité</strong>. Détaillez votre parcours, publiez des analyses via un blog et intégrez la prise de rendez-vous en ligne pour automatiser votre agenda et filtrer les demandes.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ✅ 5. NOUVELLE SECTION : Anatomie d'un site efficace pour montrer ton expertise */}
        <section className="py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Anatomie d'un site vitrine efficace</h2>
              <p className="mt-4 text-lg text-gray-400">Un site performant n'est pas une collection de pages au hasard. C'est une architecture réfléchie où chaque élément guide le visiteur vers la prise de contact.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Les Pages Incontournables</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3"><LayoutDashboard className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">Accueil :</strong> La porte d'entrée. Doit répondre en 3 secondes à "Suis-je au bon endroit ?".</p></div>
                  <div className="flex items-start gap-3"><Users className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">À Propos :</strong> La page de la confiance. Raconte votre histoire, présente l'équipe et les valeurs.</p></div>
                  <div className="flex items-start gap-3"><FileText className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">Services / Prestations :</strong> Le cœur de votre offre. Doit se concentrer sur les bénéfices pour le client.</p></div>
                  <div className="flex items-start gap-3"><ImageIcon className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">Portfolio / Réalisations :</strong> La preuve sociale. Démontre votre compétence avec des études de cas ou des galeries.</p></div>
                  <div className="flex items-start gap-3"><Phone className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">Contact :</strong> L'aboutissement. Doit être la page la plus simple et accessible possible.</p></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Les Fonctionnalités qui font la différence</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3"><MessageSquare className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">Témoignages Clients :</strong> Une validation par les pairs qui rassure énormément les prospects.</p></div>
                  <div className="flex items-start gap-3"><Newspaper className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">Blog / Actualités :</strong> Le moteur du SEO. Positionne comme un expert et attire du trafic qualifié.</p></div>
                  <div className="flex items-start gap-3"><HelpCircle className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">FAQ (Foire Aux Questions) :</strong> Répond aux objections avant même qu'elles ne soient posées.</p></div>
                  <div className="flex items-start gap-3"><CheckCircle className="text-violet-400 mt-1 flex-shrink-0" /><p><strong className="text-gray-200">Appels à l'Action (CTA) :</strong> Des boutons clairs ("Demander un devis") pour guider le visiteur à chaque étape.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ✅ 6. Section Budget retravaillée comme un "Investissement" */}
        <section className="py-16 sm:py-24 px-4 ">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">Un Investissement Rentable, Pas une Dépense</h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">Le prix d'un site dépend de vos ambitions. La vraie question est : "Combien de clients me faut-il pour rentabiliser cet investissement ?". Souvent, un ou deux suffisent.</p>
            <div className="mt-12 text-left border border-white/10 rounded-2xl bg-gray-900">
              <div className="grid grid-cols-3 p-4 border-b border-white/10"><div className="font-semibold text-white">Niveau</div><div className="font-semibold text-white">Description</div><div className="font-semibold text-white text-right">Budget (Freelance)</div></div>
              <div className="grid grid-cols-3 p-4 border-b border-white/10 items-center"><div className="text-gray-300">Essentiel</div><div className="text-gray-400 text-sm">3-5 pages, design basé sur un template premium, formulaire simple. Idéal pour démarrer.</div><div className="text-gray-300 text-right font-mono">1 000€ - 3 000€</div></div>
              <div className="grid grid-cols-3 p-4 border-b border-white/10 items-center"><div className="text-gray-300">Personnalisé</div><div className="text-gray-400 text-sm">5-10 pages, design sur-mesure, blog, SEO de base. La solution la plus populaire.</div><div className="text-gray-300 text-right font-mono">2 500€ - 6 000€</div></div>
              <div className="grid grid-cols-3 p-4 items-center"><div className="text-gray-300">Avancé</div><div className="text-gray-400 text-sm">10+ pages, design premium, fonctionnalités sur-mesure, SEO approfondi. Pour les projets ambitieux.</div><div className="text-gray-300 text-right font-mono">5 000€+</div></div>
            </div>
            <div className="mt-8 text-left max-w-2xl mx-auto">
              <h4 className="font-semibold text-white">N'oubliez pas les coûts récurrents :</h4>
              <ul className="mt-2 text-sm text-gray-400 list-disc list-inside">
                <li><strong className="text-gray-300">Nom de Domaine :</strong> L'adresse de votre site (~15€/an).</li>
                <li><strong className="text-gray-300">Hébergement Web :</strong> L'espace serveur où vit votre site (~100€/an pour de la qualité).</li>
                <li><strong className="text-gray-300">Maintenance :</strong> Pour la sécurité et les mises à jour (contrat optionnel).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ✅ 7. CTA Section - On garde la simplicité, elle est efficace */}
        <section className="py-16 sm:py-24 px-4">
          <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-100">Prêt à construire votre principal actif numérique ?</h2>
              <p className="mt-4 text-lg text-gray-300">Chaque projet est unique. Discutons-en pour définir une stratégie et un devis sur-mesure, sans engagement.</p>
              <button onClick={openModal} className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-200 hover:scale-105">
                  Obtenir mon devis gratuit
              </button>
          </div>
        </section>
        
        {/* ✅ 8. Section FAQ - Le contenu devra être ajouté via les props */}
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