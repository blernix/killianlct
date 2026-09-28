"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import ROICalculator from "@/components/ROICalculator";
import { trackCTAClick, trackPricingClick, trackFAQToggle, trackExternalClick } from '@/lib/tracking';
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Particles } from "@/components/ui/Particles";
import {
  Zap, Palette, KeyRound, Scaling, Check, Server, MonitorSmartphone,
  PackageCheck, Banknote, Users, BarChart, Mail, AlertTriangle,
  TrendingUp, ShieldCheck, Sparkles, ArrowRight, Euro, CreditCard, ShoppingCart, CheckCircle,
  ChevronUp, ChevronDown
} from 'lucide-react';

const StripeLogo = () => <span className="font-bold text-indigo-500">Stripe</span>;
const PayPalLogo = () => <span className="font-bold text-blue-400">PayPal</span>;

export default function ECommerceClient({ faqData }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'e-commerce';
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const toggleFaq = (index) => {
    const isOpening = expandedFaq !== index;
    if (isOpening && faqData?.items?.[index]) {
      trackFAQToggle(faqData.items[index].question, formType, true);
    }
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const availableOffers = [];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO SECTION - Swiss Minimal */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] px-4 py-32">
          {/* Subtle grid */}
          <motion.div style={{ y: gridY }} className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
          <Particles />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
                <KeyRound className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">100% sur-mesure</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
                <Zap className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">Performance maximale</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
                <CreditCard className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">Zéro abonnement</span>
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-10 leading-[1.05]">
              <span className="block overflow-hidden pb-1 -mb-1">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="block">
                  Une Boutique{' '}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1 -mb-1">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="block text-[#0066FF]">
                  Qui Vous Appartient
                </motion.span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#666666] dark:text-[#999999] max-w-3xl mx-auto leading-relaxed mb-16 font-light">
              Au-delà des plateformes standards, créez une <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">solution e-commerce performante et sur-mesure</strong>, sans abonnement mensuel, conçue pour convertir et évoluer.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Magnetic strength={0.25}>
                <button
                  onClick={() => { trackCTAClick('Discuter de mon projet', 'e-commerce'); openModal(); }}
                  className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Discuter de mon projet
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Magnetic>

              <div className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
                <span className="text-sm text-[#666666] dark:text-[#999999] font-light">
                  <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-medium">Next.js</strong> + <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-medium">MedusaJS</strong>
                </span>
              </div>
            </div>

            {/* Micro-promesses */}
            <RevealStagger className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] max-w-4xl mx-auto">
              {[
                "Propriété totale",
                "Headless architecture",
                "SEO optimisé",
                "Paiements sécurisés"
              ].map((promise, i) => (
                <motion.div key={i} variants={staggerItem} className="flex items-center gap-3 p-6 bg-white dark:bg-[#1A1A1A] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors">
                  <CheckCircle className="text-[#0066FF] flex-shrink-0" size={18} />
                  <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">{promise}</span>
                </motion.div>
              ))}
            </RevealStagger>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#999999] dark:text-[#666666]">Découvrir</span>
            <div className="relative w-px h-12 bg-[#E5E5E5] dark:bg-[#2A2A2A] overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-full h-5 bg-[#0066FF]" animate={{ y: [-20, 48] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </section>

        {/* Section Problème */}
        <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
              <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                Les Limites des Plateformes Standards
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
              Quand Shopify & Wix{' '}
              <span className="text-[#0066FF]">Freinent Votre Croissance</span>
            </h2>

            <p className="text-lg text-[#666666] dark:text-[#999999] leading-relaxed font-light">
              Les plateformes SaaS sont excellentes pour démarrer, mais leur modèle montre vite ses faiblesses : <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">thèmes rigides</strong> qui brident votre marque, <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">lenteur</strong> due aux apps tierces, et <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">frais mensuels</strong> qui augmentent avec votre succès.
            </p>
          </Reveal>
        </section>

        {/* Section Approche Technique */}
        <section className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <Reveal className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Notre Approche
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                La Maîtrise Technique au{' '}
                <span className="text-[#0066FF]">Service de la Vente</span>
              </h2>

              <p className="text-lg text-[#666666] dark:text-[#999999] max-w-3xl mx-auto font-light">
                Nous ne sommes pas des installateurs de thèmes. Chaque choix technique est pensé pour avoir un impact direct sur votre business.
              </p>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              {[
                {
                  icon: Zap,
                  title: "Vitesse = Conversion",
                  description: "Next.js garantit des temps de chargement quasi instantanés. Chaque milliseconde compte pour le taux de conversion et le SEO."
                },
                {
                  icon: Palette,
                  title: "Sur-Mesure Total",
                  description: "Libérez-vous des templates. Créez le parcours client exact que vous souhaitez, des fiches produits au tunnel de paiement."
                },
                {
                  icon: KeyRound,
                  title: "Propriété Totale",
                  description: "Votre boutique vous appartient. Fini les 'loyers' mensuels. Investissez dans un actif durable."
                },
                {
                  icon: Scaling,
                  title: "Architecture Évolutive",
                  description: "Code propre et modulaire. Connectez un ERP, CRM ou outil d'automatisation. Votre boutique évolue avec vos ambitions."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="group bg-white dark:bg-[#1A1A1A] p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:border-[#0066FF] transition-colors">
                      <Icon className="text-[#0066FF]" size={24} />
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* Section Architecture Headless */}
        <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <Reveal className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Architecture Headless
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                Notre Secret :{' '}
                <span className="text-[#0066FF]">Headless & Open-Source</span>
              </h2>

              <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl mx-auto font-light">
                Nous séparons le 'moteur' de la 'carrosserie' pour une flexibilité et une performance inégalées
              </p>
            </Reveal>

            <RevealStagger className="grid lg:grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              {[
                {
                  icon: Server,
                  title: "Le Moteur (Back-end)",
                  subtitle: "MedusaJS",
                  description: "Pour la gestion, nous utilisons MedusaJS, une fondation e-commerce open-source robuste. C'est le cœur sécurisé : produits, commandes, clients, promotions."
                },
                {
                  icon: MonitorSmartphone,
                  title: "La Vitrine (Front-end)",
                  subtitle: "Next.js",
                  description: "Pour l'interface client, nous construisons une application 100% sur-mesure avec Next.js. Cette séparation garantit une UX unique et des performances exceptionnelles."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="group bg-white dark:bg-[#1A1A1A] p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center group-hover:border-[#0066FF] transition-colors">
                        <Icon className="text-[#0066FF]" size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-[#666666] dark:text-[#999999] uppercase tracking-wider font-medium">{item.title}</p>
                        <h3 className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA]">{item.subtitle}</h3>
                      </div>
                    </div>
                    <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <Reveal className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Fonctionnalités Incluses
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                Toutes les Fonctionnalités{' '}
                <span className="text-[#0066FF]">Sans les Contraintes</span>
              </h2>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              {[
                "Gestion de produits avancée",
                "Paniers et commande optimisée",
                "Comptes clients & historique",
                "Moteur de promotions",
                "Multi-devises & multi-régions",
                "Gestion des retours (RMA)",
                "SEO technique natif",
                "Intégrations sur-mesure (API)",
                "Paiements Stripe / PayPal"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-center gap-3 p-6 bg-white dark:bg-[#1A1A1A] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors"
                >
                  <Check className="text-[#0066FF] flex-shrink-0" size={18} />
                  <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">{feature}</span>
                </motion.div>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* Calculateur ROI */}
        <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <Reveal className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Calculateur ROI
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                Calculez Votre <span className="text-[#0066FF]">Chiffre d'Affaires</span>
              </h2>

              <p className="text-lg text-[#666666] dark:text-[#999999] font-light">
                Estimez le potentiel de votre boutique en ligne avec notre calculateur
              </p>
            </Reveal>

            <ROICalculator
              title={<>Calculez Votre <span className="text-[#0066FF]">Chiffre d'Affaires</span></>}
              subtitle="Estimez le potentiel de votre boutique en ligne avec notre calculateur"
              color="green"
              inputs={[
                {
                  name: 'monthlyVisitors',
                  label: 'Visiteurs mensuels',
                  defaultValue: 1000,
                  min: 0,
                  max: 1000000,
                  step: 100,
                  placeholder: '1000'
                },
                {
                  name: 'conversionRate',
                  label: 'Taux de conversion (%)',
                  defaultValue: 2,
                  min: 0,
                  max: 100,
                  step: 0.1,
                  placeholder: '2'
                },
                {
                  name: 'averageCart',
                  label: 'Panier moyen (€)',
                  defaultValue: 80,
                  min: 0,
                  max: 10000,
                  step: 10,
                  placeholder: '80'
                }
              ]}
              calculate={(values) => {
                const monthlyOrders = Math.round((values.monthlyVisitors * values.conversionRate) / 100);
                const monthlyRevenue = monthlyOrders * values.averageCart;
                const yearlyRevenue = monthlyRevenue * 12;

                return {
                  description: `Avec <strong class="text-[#2A2A2A] dark:text-[#FAFAFA]">${values.monthlyVisitors} visiteurs/mois</strong> et un taux de conversion de <strong class="text-[#2A2A2A] dark:text-[#FAFAFA]">${values.conversionRate}%</strong> :`,
                  metrics: [
                    {
                      label: 'Commandes mensuelles',
                      value: monthlyOrders,
                      highlight: false
                    },
                    {
                      label: 'CA mensuel',
                      value: `${monthlyRevenue.toLocaleString()}€`,
                      highlight: true
                    },
                    {
                      label: 'CA annuel',
                      value: `${yearlyRevenue.toLocaleString()}€`,
                      highlight: true,
                      icon: TrendingUp
                    }
                  ],
                  cta: {
                    label: 'Voir les tarifs',
                    icon: ArrowRight,
                    onClick: () => {
                      trackCTAClick('Voir les tarifs', 'e-commerce');
                      document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                };
              }}
            />
          </div>
        </section>

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <Reveal className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Investissement
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                Une Boutique Qui{' '}
                <span className="text-[#0066FF]">Vous Appartient</span>
              </h2>

              <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl mx-auto font-light">
                Investissement unique, pas d'abonnement obligatoire. Votre boutique est 100% votre propriété.
              </p>
            </Reveal>

            <div className="bg-white dark:bg-[#1A1A1A] border-2 border-[#0066FF] p-16 text-center">
              <div className="inline-block px-4 py-1 mb-6 border border-[#0066FF] bg-white dark:bg-[#1A1A1A]">
                <span className="text-xs font-medium text-[#0066FF] uppercase tracking-[0.2em]">
                  Prix d'entrée
                </span>
              </div>
              <div className="mb-4">
                <span className="text-sm text-[#666666] dark:text-[#999999] font-light">À partir de</span>
              </div>
              <div className="text-7xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4 tracking-[-0.02em]">
                3 000€
              </div>
              <p className="text-sm text-[#666666] dark:text-[#999999] font-light mb-12">
                Pour une boutique Headless complète (MedusaJS + Next.js)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
                {[
                  "Boutique 100% sur-mesure, design personnalisé",
                  "Gestion complète des produits, stocks et commandes",
                  "Paiement sécurisé (Stripe, PayPal, CB)",
                  "Paniers et tunnel de paiement optimisés",
                  "Espace client avec historique",
                  "Hébergement premium + nom de domaine (1ère année)",
                  "Formation de 2h + 3 mois de support",
                  "Architecture headless évolutive (MedusaJS + Next.js)"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#666666] dark:text-[#999999] font-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
                <Magnetic strength={0.25}>
                  <button
                    onClick={() => { trackPricingClick('E-commerce', formType); openModal(); }}
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
                  >
                    Discuter de mon projet
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </Magnetic>
              </div>
              <p className="text-xs text-[#666666] dark:text-[#999999] font-light">
                Prix variable selon le nombre de produits et la complexité des intégrations
              </p>
            </div>

            {/* Maintenance */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-12 text-center">
                <h3 className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                  Investissement unique, rentabilité long terme
                </h3>
                <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                  Contrairement à Shopify (30-300€/mois), vous investissez une fois. Après la 1ère année, seuls l'hébergement (~100-200€/an) et la maintenance optionnelle s'appliquent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqData && (
          <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <Reveal className="text-center mb-16">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    FAQ
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
                  {faqData.title}
                </h2>

                <p className="text-lg text-[#666666] dark:text-[#999999] font-light">
                  {faqData.subtitle}
                </p>
              </Reveal>

              <div className="space-y-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                {faqData.items.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-[#1A1A1A]">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-8 text-left hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors"
                    >
                      <span className="text-lg font-light text-[#2A2A2A] dark:text-[#FAFAFA] pr-4">{item.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="text-[#0066FF] flex-shrink-0" size={24} />
                      ) : (
                        <ChevronDown className="text-[#666666] dark:text-[#999999] flex-shrink-0" size={24} />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-8 pb-8 border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
                        <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light pt-6">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(formType)}>
        <ContactForm formType={formType} onClose={closeModal} initialData={initialData} availableOffers={availableOffers} />
      </Modal>
    </>
  );
}
