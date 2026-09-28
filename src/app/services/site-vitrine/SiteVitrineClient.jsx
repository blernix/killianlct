"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import ROICalculator from "@/components/ROICalculator";
import { trackCTAClick, trackPricingClick, trackFAQToggle } from '@/lib/tracking';
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Particles } from "@/components/ui/Particles";
import {
  TrendingUp, ShieldCheck, Zap, Info, Users, Building, UserCheck,
  LayoutDashboard, FileText, Image as ImageIcon, MessageSquare, Phone,
  Newspaper, HelpCircle, CheckCircle, ArrowRight, Sparkles, Euro, Clock, Target,
  ChevronUp, ChevronDown
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

export default function SiteVitrineClient({ faqData }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'site-vitrine';

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

  // Packages disponibles par secteur
  const availableOffers = [];

  const badges = [
    { icon: Zap, label: "Livré en 3 semaines" },
    { icon: ShieldCheck, label: "Performance garantie" },
    { icon: TrendingUp, label: "SEO optimisé" },
  ];

  const titleLines = [
    { text: "Votre", accent: false },
    { text: "Commercial Digital", accent: true },
    { text: "Actif 24h/24", accent: false },
  ];

  const pillars = [
    {
      icon: TrendingUp,
      title: "Visibilité & Notoriété",
      description: "Apparaître dans les résultats Google lorsque des clients recherchent vos services. Votre entreprise devient accessible 24h/24, 7j/7, sans contraintes géographiques."
    },
    {
      icon: ShieldCheck,
      title: "Crédibilité & Image de Marque",
      description: "Un design professionnel et un contenu de qualité sont des signaux de confiance puissants. Vous contrôlez votre récit de marque pour vous différencier."
    },
    {
      icon: Zap,
      title: "Acquisition de Prospects",
      description: "Convertir les visiteurs anonymes en contacts identifiés via des formulaires de contact clairs et des appels à l'action incitatifs."
    },
    {
      icon: Info,
      title: "Centre d'Information",
      description: "Centraliser les informations essentielles (horaires, services, FAQ) pour améliorer l'expérience client et soulager votre service client."
    }
  ];

  const pricingItems = [
    "Site 5 pages sur-mesure (sans template)",
    "Design professionnel adapté à votre métier",
    "Formulaire de contact sécurisé (SSL/TLS)",
    "Hébergement premium UE + nom de domaine (1ère année)",
    "Responsive mobile & tablette",
    "Formation de 2h + 3 mois de support",
    "Conformité RGPD selon votre profession",
    "Modifications illimitées pendant 30 jours"
  ];

  const subscriptionPoints = [
    "Hébergement cloud premium (serveurs français, sauvegardes quotidiennes)",
    "Nom de domaine (renouvellement annuel inclus)",
    "Certificat SSL/TLS (sécurité HTTPS)",
    "Mises à jour de sécurité",
    "Modifications mineures (textes, images, coordonnées)",
    "Support technique par email",
    "Surveillance et maintenance préventive"
  ];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO SECTION */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] px-4 py-28 lg:py-32">
          {/* Subtle grid with parallax */}
          <motion.div
            style={{ y: gridY }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-40"
          />
          <Particles />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            {/* Badges */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {badges.map((badge, i) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: EASE }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]"
                >
                  <badge.icon className="text-[#0066FF]" size={16} />
                  <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">{badge.label}</span>
                </motion.span>
              ))}
            </motion.div>

            {/* Titre principal - reveal ligne par ligne */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.02em] mb-10 leading-[1.05]">
              {titleLines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1 -mb-1">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.9, ease: EASE }}
                    className={`block ${line.accent ? "text-[#0066FF]" : "text-[#2A2A2A] dark:text-[#FAFAFA]"}`}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
              className="text-xl sm:text-2xl text-[#666666] dark:text-[#999999] max-w-3xl mx-auto leading-relaxed mb-16 font-light"
            >
              Transformez votre présence en ligne avec un <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">site vitrine professionnel</strong>, performant et optimisé pour <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">générer des clients</strong>.
            </motion.p>

            {/* CTA principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: EASE }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Magnetic strength={0.25}>
                <button
                  onClick={() => { trackCTAClick('Hero CTA', 'site-vitrine'); openModal(); }}
                  className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Obtenir mon devis gratuit
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Magnetic>

              <div className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
                <div className="flex -space-x-1">
                  <div className="w-8 h-8 bg-[#0066FF] border border-white dark:border-[#1A1A1A]" />
                  <div className="w-8 h-8 bg-[#2A2A2A] border border-white dark:border-[#1A1A1A]" />
                  <div className="w-8 h-8 bg-[#666666] border border-white dark:border-[#1A1A1A]" />
                </div>
                <span className="text-sm text-[#666666] dark:text-[#999999] font-light">
                  <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-medium">50+ clients</strong> satisfaits
                </span>
              </div>
            </motion.div>

            {/* Micro-promesses */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] max-w-4xl mx-auto"
            >
              {[
                "Design sur-mesure",
                "SEO optimisé",
                "Mobile-first",
                "Support inclus"
              ].map((promise, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  transition={{ delay: 1.0 + i * 0.08 }}
                  className="flex items-center gap-3 p-6 bg-white dark:bg-[#1A1A1A] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors"
                >
                  <CheckCircle className="text-[#0066FF] flex-shrink-0" size={18} />
                  <span className="text-sm text-[#2A2A2A] dark:text-[#FAFAFA] font-light">{promise}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#999999] dark:text-[#666666]">Découvrir</span>
            <div className="relative w-px h-12 bg-[#E5E5E5] dark:bg-[#2A2A2A] overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-5 bg-[#0066FF]"
                animate={{ y: [-20, 48] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Section Introduction */}
        <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Bien Plus qu'une Carte de Visite
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                Un Site Vitrine, C'est Quoi{' '}
                <span className="text-[#0066FF]">Exactement</span> ?
              </h2>

              <p className="text-lg text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                Fondamentalement, un site vitrine présente votre entreprise, vos services et vos valeurs. Mais sa mission stratégique va bien au-delà : c'est un <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-normal">écosystème d'information conçu pour générer des opportunités commerciales qualifiées</strong>. Contrairement à un site e-commerce, il ne gère pas de transactions directes, ce qui le rend plus simple et plus rapide à déployer.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 4 Piliers */}
        <section className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <Reveal className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Les 4 Piliers de la Réussite
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                Un Écosystème Conçu pour{' '}
                <span className="text-[#0066FF]">Bâtir la Confiance</span>
              </h2>

              <p className="text-lg text-[#666666] dark:text-[#999999] max-w-3xl mx-auto font-light">
                Le rôle d'un site vitrine repose sur quatre piliers qui transforment un simple visiteur en prospect qualifié
              </p>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="group bg-white dark:bg-[#1A1A1A] p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:border-[#0066FF] group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-[#0066FF]" size={24} />
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* Calculateur ROI */}
        <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <Reveal className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Calculateur ROI
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                Calculez Votre <span className="text-[#0066FF]">Retour sur Investissement</span>
              </h2>

              <p className="text-lg text-[#666666] dark:text-[#999999] font-light">
                Combien de clients votre site peut-il vous apporter ? Faites le calcul.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ROICalculator
                title={<>Calculez Votre <span className="text-[#0066FF]">Retour sur Investissement</span></>}
                subtitle="Combien de clients votre site peut-il vous apporter ? Faites le calcul."
                color="cyan"
                inputs={[
                  {
                    name: 'monthlyVisitors',
                    label: 'Visiteurs mensuels estimés',
                    defaultValue: 500,
                    min: 0,
                    max: 100000,
                    step: 50,
                    placeholder: '500'
                  },
                  {
                    name: 'conversionRate',
                    label: 'Taux de conversion (%)',
                    defaultValue: 3,
                    min: 0,
                    max: 100,
                    step: 0.5,
                    placeholder: '3'
                  },
                  {
                    name: 'averageSale',
                    label: 'Tarifs prestation moyenne (€)',
                    defaultValue: 1500,
                    min: 0,
                    max: 100000,
                    step: 100,
                    placeholder: '1500'
                  }
                ]}
                calculate={(values) => {
                  const monthlyLeads = Math.round((values.monthlyVisitors * values.conversionRate) / 100);
                  const monthlyRevenue = monthlyLeads * values.averageSale;
                  const yearlyROI = (monthlyRevenue * 12);

                  return {
                    description: `Avec <strong class="text-[#2A2A2A] dark:text-[#FAFAFA]">${values.monthlyVisitors} visiteurs/mois</strong> et un taux de conversion de <strong class="text-[#2A2A2A] dark:text-[#FAFAFA]">${values.conversionRate}%</strong> :`,
                    metrics: [
                      {
                        label: 'Leads mensuels',
                        value: monthlyLeads,
                        highlight: false
                      },
                      {
                        label: 'CA mensuel potentiel',
                        value: `${monthlyRevenue.toLocaleString()}€`,
                        highlight: true
                      },
                      {
                        label: 'ROI sur 12 mois',
                        value: `+${yearlyROI > 0 ? yearlyROI.toLocaleString() : 0}€`,
                        highlight: true,
                        icon: TrendingUp
                      }
                    ],
                    cta: {
                      label: 'Voir les tarifs',
                      icon: ArrowRight,
                      onClick: () => {
                        trackCTAClick('Voir les tarifs', 'site-vitrine');
                        document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  };
                }}
              />
            </Reveal>
          </div>
        </section>

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <Reveal className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                  Tarifs
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.1]">
                Un Site Vitrine{' '}
                <span className="text-[#0066FF]">Sur-Mesure</span>
              </h2>

              <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl mx-auto font-light">
                Adapté à votre profession. Les tarifs varient selon votre secteur et ses contraintes spécifiques.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
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
                  800€
                </div>
                <p className="text-sm text-[#666666] dark:text-[#999999] font-light mb-12">
                  + 150€/an d'hébergement
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
                  {pricingItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#666666] dark:text-[#999999] font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
                  <Magnetic strength={0.25}>
                    <button
                      onClick={() => { trackPricingClick('Site Vitrine', formType); openModal(); }}
                      className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
                    >
                      Obtenir mon devis personnalisé
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                  </Magnetic>
                </div>
                <p className="text-xs text-[#666666] dark:text-[#999999] font-light">
                  Tarif exact selon votre profession (avocat, psychologue, ostéopathe, artisan...)
                </p>
              </div>
            </Reveal>

            {/* Abonnement */}
            <Reveal delay={0.15} className="mt-16 max-w-4xl mx-auto">
              <div className="relative border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-12">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white text-sm font-medium">
                  Que comprend l'abonnement ?
                </div>
                <div className="grid sm:grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] mt-4">
                  {subscriptionPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-[#1A1A1A]">
                      <CheckCircle className="text-[#0066FF] flex-shrink-0 mt-1" size={18} />
                      <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-sm text-[#666666] dark:text-[#999999] max-w-3xl mx-auto leading-relaxed p-8 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] font-light">
                  <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-medium">Pas de frais cachés.</strong> La première année d'hébergement est incluse. À partir de la 2ème année : 150€/an.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        {faqData && (
          <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
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

              <Reveal delay={0.1}>
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
              </Reveal>
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
