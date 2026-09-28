"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import { trackCTAClick, trackPricingClick, trackFAQToggle, trackExternalClick } from '@/lib/tracking';
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Particles } from "@/components/ui/Particles";
import {
  CheckCircle,
  AlertCircle,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { directusData } from './data';

export default function DirectusClient() {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'directus';

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const toggleFaq = (index) => {
    const isOpening = expandedFaq !== index;
    if (isOpening && directusData?.faq?.items?.[index]) {
      trackFAQToggle(directusData.faq.items[index].question, formType, true);
    }
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Liste des offres disponibles pour le formulaire
  const availableOffers = directusData.pricing.packages.map(pkg => `${pkg.name} - ${pkg.price}`);

  // Préparer les données FAQ
  const faqItems = directusData.faq.items.map((item, index) => ({
    value: `item-${index}`,
    question: item.question,
    answer: item.answer
  }));

  const renderComparisonValue = (value) => {
    if (value === true) return <CheckCircle className="text-[#0066FF]" size={20} />;
    if (value === false) return <X className="text-[#666666] dark:text-[#999999]" size={20} />;
    return <span className="text-[#666666] dark:text-[#999999] text-sm">{value}</span>;
  };

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] px-4 py-32">
          <motion.div style={{ y: gridY }} className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
          <Particles />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 container mx-auto max-w-6xl">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {directusData.badges.map((badge, i) => {
                  const Icon = badge.icon;
                  return (
                    <div key={i} className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
                      <Icon className="text-[#0066FF]" size={16} />
                      <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="text-center space-y-8 mb-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1]">
                  <span className="block overflow-hidden pb-1 -mb-1">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="block"
                    >
                      Gérez Votre Contenu{" "}
                      <motion.span className="text-[#0066FF]">Sans Jamais Risquer</motion.span>{" "}
                      de Tout Casser
                    </motion.span>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-[#666666] dark:text-[#999999] max-w-3xl mx-auto leading-relaxed font-light">
                  {directusData.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Magnetic strength={0.25}>
                  <button
                    onClick={() => { trackCTAClick('Hero CTA', 'directus'); openModal(); }}
                    className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      {directusData.hero.ctaLabel}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                  </button>
                </Magnetic>

                <div className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-[#2A2A2A] border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-[#666666] border-2 border-white" />
                  </div>
                  <span className="text-sm text-[#666666] dark:text-[#999999] font-light">
                    <strong className="text-[#2A2A2A] dark:text-[#FAFAFA] font-medium">30+ interfaces</strong> créées
                  </span>
                </div>
              </div>

              <RevealStagger className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] max-w-4xl mx-auto">
                {directusData.hero.microPromises.map((promise, i) => (
                  <motion.div key={i} variants={staggerItem} className="flex items-center gap-3 p-4 bg-white dark:bg-[#1A1A1A] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors">
                    <div className="w-1 h-1 bg-[#0066FF] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#666666] dark:text-[#999999] font-light">{promise}</span>
                  </motion.div>
                ))}
              </RevealStagger>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#999999] dark:text-[#666666]">Découvrir</span>
            <div className="relative w-px h-12 bg-[#E5E5E5] dark:bg-[#2A2A2A] overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-full h-5 bg-[#0066FF]" animate={{ y: [-20, 48] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </section>

        {/* Section Défis/Solutions */}
        <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <Reveal>
              <div className="mb-20">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Les Problèmes à Résoudre
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
                  Les 3 Cauchemars des{' '}
                  <span className="text-[#0066FF]">CMS Traditionnels</span>
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl font-light">
                  Et comment Directus résout chacun définitivement
                </p>
              </div>
            </Reveal>

            <div className="space-y-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              {directusData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div key={index} className="bg-white dark:bg-[#1A1A1A] p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center text-[#0066FF] font-light text-2xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#666666] dark:text-[#999999]" size={20} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                      <div className="bg-white dark:bg-[#1A1A1A] p-8">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                              <X className="text-[#666666] dark:text-[#999999]" size={14} />
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] text-[#666666] dark:text-[#999999] font-medium">
                              Problème
                            </span>
                          </div>
                          <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA]">{challenge.title}</h3>
                        </div>
                        <p className="text-[#666666] dark:text-[#999999] leading-relaxed mb-4 font-light">
                          {challenge.problem}
                        </p>
                        {challenge.stat && (
                          <div className="p-4 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#FAFAFA] dark:bg-[#1A1A1A]">
                            <p className="text-sm text-[#666666] dark:text-[#999999] font-light">{challenge.stat}</p>
                          </div>
                        )}
                      </div>

                      <div className="bg-white dark:bg-[#1A1A1A] p-8">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="text-[#0066FF]" size={14} />
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] text-[#0066FF] font-medium">
                              Solution Directus
                            </span>
                          </div>
                          <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA]">Interface Sur-Mesure</h3>
                        </div>
                        <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Processus */}
        <section className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <Reveal>
              <div className="mb-20">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Notre Méthode
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
                  {directusData.process.title}
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl font-light">
                  {directusData.process.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="space-y-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              {directusData.process.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white dark:bg-[#1A1A1A] p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex items-center lg:items-start gap-4">
                        <div className="w-16 h-16 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center text-[#0066FF] font-light text-3xl flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="w-14 h-14 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                          <Icon className="text-[#666666] dark:text-[#999999]" size={24} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <h3 className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-2 md:mb-0">
                            {step.title}
                          </h3>
                          <span className="text-sm text-[#0066FF] border border-[#E5E5E5] dark:border-[#2A2A2A] px-3 py-1 w-fit">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-[#666666] dark:text-[#999999] leading-relaxed mb-6 font-light">
                          {step.description}
                        </p>

                        <div>
                          <p className="text-xs text-[#666666] dark:text-[#999999] mb-3 uppercase tracking-[0.2em]">Livrables :</p>
                          <div className="flex flex-wrap gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                            {step.deliverables.map((deliverable, i) => (
                              <span
                                key={i}
                                className="text-sm bg-white dark:bg-[#1A1A1A] px-4 py-2 text-[#666666] dark:text-[#999999] font-light"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => { trackCTAClick('Configurer mon interface Directus', 'directus'); openModal(); }}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
              >
                Configurer mon interface Directus
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Section Cas d'usage */}
        <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <Reveal>
              <div className="mb-20">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Cas d'Usage
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
                  {directusData.useCases.title}
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl font-light">
                  {directusData.useCases.subtitle}
                </p>
              </div>
            </Reveal>

            <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              {directusData.useCases.cases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="group bg-white dark:bg-[#1A1A1A] p-8 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center mb-6">
                      <Icon className="text-[#0066FF]" size={20} />
                    </div>

                    <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed mb-4 font-light">
                      {useCase.description}
                    </p>

                    <div className="pt-4 border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
                      <p className="text-xs text-[#666666] dark:text-[#999999] font-light">
                        {useCase.examples}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <Reveal>
              <div className="mb-20">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Tarifs Transparents
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
                  {directusData.pricing.title}
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl font-light">
                  {directusData.pricing.subtitle}
                </p>
              </div>
            </Reveal>

            <RevealStagger className="grid md:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] mb-16">
              {directusData.pricing.packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className={`group relative p-10 transition-all duration-300 ${
                    pkg.highlighted
                      ? 'bg-[#0066FF] text-white'
                      : 'bg-white dark:bg-[#1A1A1A] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F]'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-px left-0 right-0 h-[2px] bg-white dark:bg-[#1A1A1A]" />
                  )}

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-2xl font-light ${pkg.highlighted ? 'text-white' : 'text-[#2A2A2A] dark:text-[#FAFAFA]'}`}>
                        {pkg.name}
                      </h3>
                      {pkg.highlighted && (
                        <span className="text-xs uppercase tracking-[0.2em] border border-white px-2 py-1">
                          {pkg.cta}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mb-2 font-light ${pkg.highlighted ? 'text-white/80' : 'text-[#666666] dark:text-[#999999]'}`}>
                      {pkg.description}
                    </p>
                    <p className={`text-xs mb-6 font-light ${pkg.highlighted ? 'text-white/60' : 'text-[#666666] dark:text-[#999999]'}`}>
                      {pkg.timeframe}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl font-light ${pkg.highlighted ? 'text-white' : 'text-[#2A2A2A] dark:text-[#FAFAFA]'}`}>
                        {pkg.price.split('€')[0]}
                      </span>
                      {pkg.price.includes('€') && (
                        <span className={`text-2xl font-light ${pkg.highlighted ? 'text-white/80' : 'text-[#666666] dark:text-[#999999]'}`}>
                          €
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className={`w-1 h-1 rounded-full flex-shrink-0 mt-2 ${pkg.highlighted ? 'bg-white dark:bg-[#1A1A1A]' : 'bg-[#0066FF]'}`} />
                        <span className={`text-sm leading-relaxed font-light ${pkg.highlighted ? 'text-white' : 'text-[#666666] dark:text-[#999999]'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Magnetic strength={0.25}>
                    <button
                      onClick={() => { trackPricingClick(pkg.name, formType); openModal(`${pkg.name} - ${pkg.price}`); }}
                      className={`w-full py-4 px-6 font-medium transition-all duration-300 ${
                        pkg.highlighted
                          ? 'bg-white dark:bg-[#1A1A1A] text-[#0066FF] border border-white hover:bg-transparent hover:text-white'
                          : 'bg-[#0066FF] text-white border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF]'
                      }`}
                    >
                      {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                    </button>
                  </Magnetic>
                </motion.div>
              ))}
            </RevealStagger>

            {/* Maintenance */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="mb-12">
                <h3 className="text-3xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">
                  {directusData.pricing.maintenance.title}
                </h3>
                <p className="text-[#666666] dark:text-[#999999] max-w-2xl font-light">
                  {directusData.pricing.maintenance.description}
                </p>
              </div>

              <RevealStagger className="grid md:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                {directusData.pricing.maintenance.plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="bg-white dark:bg-[#1A1A1A] p-8 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300"
                  >
                    <h4 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-2">{plan.name}</h4>
                    <p className="text-3xl font-light text-[#0066FF] mb-6">{plan.price}</p>
                    <ul className="space-y-3">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#666666] dark:text-[#999999] font-light">
                          <div className="w-1 h-1 bg-[#0066FF] rounded-full flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </RevealStagger>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#666666] dark:text-[#999999] max-w-3xl mx-auto leading-relaxed p-6 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] font-light">
                {directusData.pricing.note}
              </p>
            </div>
          </div>
        </section>

        {/* Comparaison */}
        <section className="relative py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <Reveal>
              <div className="mb-16">
                <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
                  {directusData.comparison.title}
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl font-light">
                  {directusData.comparison.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E5E5E5] dark:border-[#2A2A2A]">
                      <th className="text-left p-6 text-[#666666] dark:text-[#999999] font-medium text-sm">Critère</th>
                      {directusData.comparison.columns.map((col, index) => (
                        <th
                          key={index}
                          className={`p-6 text-center font-light text-sm ${
                            col.highlighted ? 'text-[#0066FF] bg-[#FAFAFA] dark:bg-[#1A1A1A]' : 'text-[#2A2A2A] dark:text-[#FAFAFA]'
                          }`}
                        >
                          {col.label}
                          {col.highlighted && (
                            <span className="block text-xs text-[#666666] dark:text-[#999999] mt-1 font-light">
                              Notre Choix
                            </span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {directusData.comparison.categories.map((category, index) => (
                      <tr key={index} className="border-b border-[#E5E5E5] dark:border-[#2A2A2A] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors">
                        <td className="p-6 text-[#2A2A2A] dark:text-[#FAFAFA] font-light">{category.name}</td>
                        <td className="p-6 text-center">{renderComparisonValue(category.wordpress)}</td>
                        <td className="p-6 text-center bg-[#FAFAFA] dark:bg-[#1A1A1A]">{renderComparisonValue(category.directus)}</td>
                        <td className="p-6 text-center">{renderComparisonValue(category.strapi)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Swiss Clean Style */}
        <section className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    FAQ
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
                  {directusData.faq.title}
                </h2>

                <p className="text-lg text-[#666666] dark:text-[#999999] font-light">
                  {directusData.faq.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="space-y-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              {directusData.faq.items.map((item, index) => (
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

        <Footer />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(formType)}>
        <ContactForm
          formType={formType}
          onClose={closeModal}
          initialData={initialData}
          availableOffers={availableOffers}
        />
      </Modal>
    </>
  );
}
