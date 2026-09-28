"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Particles } from "@/components/ui/Particles";

export default function ContactClient() {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const formType = 'general';

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);

   return (
     <main>
       <Header onOpenModal={openModal} />

       {/* HERO - Swiss Minimal */}
        <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] px-4 py-28 lg:py-32">
          {/* Subtle grid with parallax */}
          <motion.div style={{ y: gridY }} className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
          <Particles />
         
         {/* Blue accent line */}
         <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

         <div className="relative z-10 max-w-6xl mx-auto text-center">
           {/* Badges */}
           <div className="flex flex-wrap justify-center gap-3 mb-12">
             <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
               <CheckCircle className="text-[#0066FF]" size={16} />
               <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">Réponse sous 24h</span>
             </span>
             <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
               <CheckCircle className="text-[#0066FF]" size={16} />
               <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">Devis gratuit</span>
             </span>
             <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
               <CheckCircle className="text-[#0066FF]" size={16} />
               <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">Expertise sur-mesure</span>
             </span>
           </div>

            {/* Titre */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-10 leading-[1.05]">
              <span className="block overflow-hidden pb-1 -mb-1">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.22,1,0.36,1] }} className="block">
                  Contactez Votre{' '}
                  <span className="text-[#0066FF]">Expert Digital</span>
                </motion.span>
              </span>
            </h1>

           <p className="text-xl sm:text-2xl text-[#666666] dark:text-[#999999] max-w-3xl mx-auto leading-relaxed mb-16 font-light">
             Discutons de votre projet web, de votre stratégie SEO, ou de vos besoins en automatisation. 
             Un premier échange gratuit pour définir ensemble la meilleure solution.
           </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Magnetic strength={0.25}>
                <button
                  onClick={() => openModal()}
                  className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Demander un devis gratuit
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Magnetic>
            </div>

           {/* Micro-promesses */}
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] max-w-4xl mx-auto">
             {[
               "Analyse gratuite de votre besoin",
               "Devis détaillé sous 48h",
               "Pas d'engagement",
               "Conseils experts"
             ].map((promise, i) => (
               <div key={i} className="flex items-center gap-3 p-6 bg-white dark:bg-[#1A1A1A] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors">
                 <CheckCircle className="text-[#0066FF] flex-shrink-0" size={18} />
                 <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">{promise}</span>
               </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#999999] dark:text-[#666666]">Découvrir</span>
            <div className="relative w-px h-12 bg-[#E5E5E5] dark:bg-[#2A2A2A] overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-full h-5 bg-[#0066FF]" animate={{ y: [-20, 48] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </section>

       {/* Section Informations de Contact */}
       <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
         {/* Subtle grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
         
         {/* Blue accent line */}
         <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-20">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Nos Coordonnées
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                  Plusieurs Façons de{' '}
                  <span className="text-[#0066FF]">Nous Contacter</span>
                </h2>

                <p className="text-lg text-[#666666] dark:text-[#999999] max-w-3xl mx-auto font-light">
                  Choisissez le canal qui vous convient le mieux. Nous sommes disponibles pour échanger sur votre projet.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] mb-16">
             {[
               {
                 icon: Phone,
                 title: "Téléphone",
                 content: "06 41 97 03 83",
                 description: "Du lundi au vendredi, 9h-18h",
                 action: {
                   label: "Appeler maintenant",
                   href: "tel:+33641970383"
                 }
               },
               {
                 icon: Mail,
                 title: "Email",
                 content: "killian.lecrut@gmail.com",
                 description: "Réponse sous 24h maximum",
                 action: {
                   label: "Envoyer un email",
                   href: "mailto:killian.lecrut@gmail.com"
                 }
               },
               {
                 icon: MapPin,
                 title: "Localisation",
                 content: "Melun, Seine-et-Marne (77)",
                 description: "Agence web basée en Île-de-France",
                 action: {
                   label: "Voir sur Google Maps",
                   href: "https://maps.google.com/?q=Melun+Seine-et-Marne"
                 }
               }
              ].map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="group bg-white dark:bg-[#1A1A1A] p-12 text-center hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
                  >
                   <div className="w-16 h-16 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center mx-auto mb-8 group-hover:border-[#0066FF] transition-colors">
                     <Icon className="text-[#0066FF]" size={28} />
                   </div>
                   <h3 className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                     {method.title}
                   </h3>
                   <p className="text-3xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-3">
                     {method.content}
                   </p>
                   <p className="text-sm text-[#666666] dark:text-[#999999] mb-6 font-light">
                     {method.description}
                   </p>
                   <a
                     href={method.action.href}
                     className="inline-flex items-center gap-2 text-[#0066FF] font-medium hover:text-[#2A2A2A] dark:text-[#FAFAFA] transition-colors"
                     target={method.action.href.startsWith('http') ? '_blank' : '_self'}
                     rel={method.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                   >
                      {method.action.label}
                      <ArrowRight size={16} />
                    </a>
                  </motion.div>
                );
              })}
            </RevealStagger>

           {/* Horaires */}
           <div className="max-w-4xl mx-auto">
             <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-12">
               <div className="flex items-center justify-center gap-4 mb-8">
                 <Clock className="text-[#0066FF]" size={32} />
                 <h3 className="text-3xl font-light text-[#2A2A2A] dark:text-[#FAFAFA]">
                   Nos Horaires d'Ouverture
                 </h3>
               </div>
               <div className="grid md:grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                 <div className="bg-white dark:bg-[#1A1A1A] p-8 text-center">
                   <h4 className="font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">Du lundi au vendredi</h4>
                   <p className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-2">9h00 - 18h00</p>
                   <p className="text-sm text-[#666666] dark:text-[#999999] font-light">
                     Disponible par téléphone, email et visioconférence
                   </p>
                 </div>
                 <div className="bg-white dark:bg-[#1A1A1A] p-8 text-center">
                   <h4 className="font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">Le samedi</h4>
                   <p className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-2">Sur rendez-vous</p>
                   <p className="text-sm text-[#666666] dark:text-[#999999] font-light">
                     Pour les projets urgents ou les entrepreneurs
                   </p>
                 </div>
               </div>
               <div className="mt-8 pt-8 border-t border-[#E5E5E5] dark:border-[#2A2A2A] text-center">
                 <p className="text-[#666666] dark:text-[#999999] font-light">
                   <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">Note :</strong> Les délais de réponse par email peuvent être légèrement plus longs les week-ends et jours fériés.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Section Pourquoi Nous Contacter */}
       <section className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
         {/* Subtle grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
         
         {/* Blue accent line */}
         <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-20">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Nos Services
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                  Quand Nous{' '}
                  <span className="text-[#0066FF]">Contacter</span>
                </h2>

                <p className="text-lg text-[#666666] dark:text-[#999999] max-w-3xl mx-auto font-light">
                  Voici les situations où notre expertise peut vous être utile
                </p>
              </div>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
             {[
               {
                 title: "Création de site web",
                 description: "Vous souhaitez un site vitrine, e-commerce ou une application sur-mesure pour votre activité.",
                 cta: "Demander un devis site web"
               },
               {
                 title: "Optimisation SEO",
                 description: "Votre site n'apparaît pas sur Google, vous voulez attirer plus de clients qualifiés.",
                 cta: "Discuter stratégie SEO"
               },
               {
                 title: "Refonte de site",
                 description: "Votre site actuel est obsolète, lent ou ne convertit pas assez de visiteurs.",
                 cta: "Évaluer ma refonte"
               },
               {
                 title: "Automatisation",
                 description: "Vous perdez du temps sur des tâches répétitives et souhaitez automatiser vos processus.",
                 cta: "Découvrir n8n"
               },
               {
                 title: "Interface admin",
                 description: "Vous voulez gérer votre contenu facilement sans risquer de casser votre site.",
                 cta: "Voir Directus CMS"
               },
               {
                 title: "Conseil stratégique",
                 description: "Vous avez un projet digital mais ne savez pas par où commencer ni quel budget prévoir.",
                 cta: "Obtenir un audit gratuit"
               }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group bg-white dark:bg-[#1A1A1A] p-10 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
                >
                 <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                   {service.title}
                 </h3>
                 <p className="text-[#666666] dark:text-[#999999] mb-6 leading-relaxed font-light">
                   {service.description}
                 </p>
                 <button
                   onClick={() => openModal(service.title.toLowerCase().includes('seo') ? 'seo' : 'general')}
                   className="inline-flex items-center gap-2 text-[#0066FF] font-medium hover:text-[#2A2A2A] dark:text-[#FAFAFA] transition-colors"
                 >
                    {service.cta}
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ))}
            </RevealStagger>

           <div className="mt-16 text-center">
             <p className="text-lg text-[#666666] dark:text-[#999999] max-w-3xl mx-auto font-light mb-8">
               <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">Pas sûr de votre besoin ?</strong> Contactez-nous quand même. Nous prendrons le temps de comprendre votre situation et vous orienterons vers la solution la plus adaptée, même si ce n'est pas chez nous.
             </p>
              <Magnetic strength={0.25}>
                <button
                  onClick={() => openModal()}
                  className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Prendre rendez-vous téléphonique
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Magnetic>
           </div>
         </div>
       </section>

       <Footer />
       <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(formType)}>
         <ContactForm formType={formType} onClose={closeModal} initialData={initialData} />
       </Modal>
     </main>
   );
 }
