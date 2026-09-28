"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import ROICalculator from "@/components/ROICalculator";
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Particles } from "@/components/ui/Particles";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { trackCTAClick, trackPricingClick, trackFAQToggle, trackExternalClick } from '@/lib/tracking';

const EASE = [0.22, 1, 0.36, 1];

const GRID_LIGHT = "bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px]";
const GRID_DARK = "dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)]";

export default function SecteurTemplate({ data, formType = 'general' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFaq = (index) => {
    const isOpening = expandedFaq !== index;
    setExpandedFaq(isOpening ? index : null);
    if (isOpening && data.faq?.items?.[index]?.question) {
      trackFAQToggle(data.faq.items[index].question, formType, true);
    }
  };

  // Générer la liste des offres disponibles à partir des données de pricing
  const availableOffers = data.pricing?.packages
    ? data.pricing.packages.map(pkg => `${pkg.name} - ${pkg.price}${pkg.monthly ? ` + ${pkg.monthly}` : ''}`)
    : [];

  return (
    <>
      <main className="bg-[#FAFAFA] dark:bg-[#0A0A0A] font-light">
        <Header onOpenModal={openModal} />

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] px-4 py-20 md:py-32">
          {/* Subtle grid with parallax */}
          <motion.div
            style={{ y: gridY }}
            className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-40`}
          />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Eyebrow */}
            {data.hero.eyebrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="inline-block px-4 py-1 mb-12 border border-[#0066FF] bg-white dark:bg-[#1A1A1A]"
              >
                <span className="text-xs font-medium text-[#0066FF] uppercase tracking-[0.2em]">
                  {data.hero.eyebrow}
                </span>
              </motion.div>
            )}

            {/* Title - mask reveal */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-10 md:mb-16 tracking-[-0.02em] leading-[1.05] md:leading-[0.95] text-[#2A2A2A] dark:text-[#FAFAFA]">
              <span className="block overflow-hidden pb-1 -mb-1">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.9, ease: EASE }}
                  className="block"
                >
                  {data.hero.title}
                </motion.span>
              </span>
              {data.hero.titleGradient && (
                <span className="block overflow-hidden pb-1 -mb-1">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.45, duration: 0.9, ease: EASE }}
                    className="block text-[#0066FF]"
                  >
                    {data.hero.titleGradient}
                  </motion.span>
                </span>
              )}
            </h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
              className="max-w-3xl mb-10 md:mb-16 border-l-2 border-[#0066FF] pl-5 md:pl-8"
            >
              <p className="text-base md:text-xl text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                {data.hero.subtitle}
              </p>
              {data.hero.description && (
                <p className="text-sm md:text-lg text-[#666666] dark:text-[#999999] leading-relaxed font-light mt-4">
                  {data.hero.description}
                </p>
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 md:gap-6 mb-10 md:mb-16"
            >
              <Magnetic strength={0.25}>
                <button
                  onClick={() => { trackCTAClick(data.hero.ctaLabel || 'Hero CTA', formType); openModal(); }}
                  className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300 justify-center sm:justify-start"
                >
                  <span className="flex items-center gap-3">
                    {data.hero.ctaLabel}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>
              </Magnetic>

              {data.hero.demoUrl && (
                <Link
                  href={data.hero.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalClick('demo', data.hero.demoUrl)}
                  className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white dark:bg-[#1A1A1A] text-[#2A2A2A] dark:text-[#FAFAFA] font-medium border border-[#E5E5E5] dark:border-[#2A2A2A] hover:border-[#0066FF] transition-all duration-300 justify-center sm:justify-start"
                >
                  <span className="flex items-center gap-3">
                    {data.hero.demoLabel || "Voir la démo"}
                    <ExternalLink className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </Link>
              )}
            </motion.div>

            {/* Micro-promises */}
            {data.hero.microPromises && Array.isArray(data.hero.microPromises) && data.hero.microPromises.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ delayChildren: 0.9, staggerChildren: 0.08 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {data.hero.microPromises.map((promise, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-center gap-3 bg-white dark:bg-[#1A1A1A] p-4 border border-[#E5E5E5] dark:border-[#2A2A2A]"
                  >
                    <div className="w-1 h-1 bg-[#0066FF] flex-shrink-0" />
                    <span className="text-sm text-[#666666] dark:text-[#999999] font-light">{promise}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
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
              <motion.div
                className="absolute top-0 left-0 w-full h-5 bg-[#0066FF]"
                animate={{ y: [-20, 48] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Challenges Section */}
        {data.challenges && Array.isArray(data.challenges) && data.challenges.length > 0 && (
          <section className="relative py-20 md:py-32 px-4 bg-white dark:bg-[#0A0A0A]">
            <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />

            <div className="relative z-10 mx-auto max-w-7xl">
              <Reveal className="mb-12 md:mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Les Défis
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1]">
                  Challenges à <span className="text-[#0066FF]">surmonter</span>
                </h2>
              </Reveal>

              <RevealStagger className="space-y-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                {data.challenges.map((challenge, index) => (
                  <motion.div key={index} variants={staggerItem} className="bg-white dark:bg-[#1A1A1A] p-6 md:p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
                      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-[#0066FF] flex-shrink-0">
                        {challenge.icon && <challenge.icon className="h-6 w-6 md:h-8 md:w-8 text-[#0066FF]" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4 md:mb-6">{challenge.title}</h3>

                        <div className="space-y-6">
                          <div>
                            <div className="inline-block px-3 py-1 mb-3 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                              <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-wide">
                                Problème
                              </span>
                            </div>
                            <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                              {challenge.problem}
                            </p>
                          </div>

                          <div>
                            <div className="inline-block px-3 py-1 mb-3 border border-[#0066FF]">
                              <span className="text-xs font-medium text-[#0066FF] uppercase tracking-wide">
                                Solution
                              </span>
                            </div>
                            <p className="text-[#2A2A2A] dark:text-[#FAFAFA] leading-relaxed font-light">
                              {challenge.solution}
                            </p>
                          </div>

                          {challenge.stat && (
                            <div className="pt-4 border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
                              <p className="text-sm text-[#0066FF] font-medium italic">
                                → {challenge.stat}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </RevealStagger>
            </div>
          </section>
        )}

        {/* Conformity Section (Avocat) */}
        {data.conformity && Array.isArray(data.conformity) && data.conformity.length > 0 && (
          <section className="relative py-20 md:py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
            <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />

            <div className="relative z-10 mx-auto max-w-7xl">
              <Reveal className="mb-12 md:mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Conformité
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1]">
                  100% <span className="text-[#0066FF]">conforme</span>
                </h2>
              </Reveal>

              <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                {data.conformity.map((item, index) => (
                  <motion.div key={index} variants={staggerItem} className="bg-white dark:bg-[#1A1A1A] p-8 md:p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#0066FF] mb-8">
                      {item.icon && <item.icon className="h-6 w-6 text-[#0066FF]" />}
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">{item.title}</h3>
                    <p className="text-[#666666] dark:text-[#999999] leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>
                    {item.reference && (
                      <div className="inline-block px-3 py-1 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                        <span className="text-xs font-medium text-[#666666] dark:text-[#999999]">
                          {item.reference}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </RevealStagger>
            </div>
          </section>
        )}

        {/* Services Section (Artisan) */}
        {data.services && Array.isArray(data.services) && data.services.length > 0 && (
          <section className="relative py-20 md:py-32 px-4 bg-white dark:bg-[#0A0A0A]">
            <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />

            <div className="relative z-10 mx-auto max-w-7xl">
              <Reveal className="mb-12 md:mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Métiers
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1]">
                  Pour tous les <span className="text-[#0066FF]">artisans</span>
                </h2>
              </Reveal>

              <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                {data.services.map((service, index) => (
                  <motion.div key={index} variants={staggerItem} className="group bg-white dark:bg-[#1A1A1A] p-6 md:p-10 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#E5E5E5] dark:border-[#2A2A2A] mb-8 group-hover:border-[#0066FF] transition-colors">
                      {service.icon && <service.icon className="h-6 w-6 text-[#2A2A2A] dark:text-[#FAFAFA] group-hover:text-[#0066FF] transition-colors" />}
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">{service.title}</h3>
                    <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                    {service.keywords && Array.isArray(service.keywords) && service.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {service.keywords.slice(0, 3).map((keyword, i) => (
                          <span key={i} className="text-xs px-2 py-1 border border-[#E5E5E5] dark:border-[#2A2A2A] text-[#666666] dark:text-[#999999]">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </RevealStagger>
            </div>
          </section>
        )}

        {/* Features Section */}
        {data.features && Array.isArray(data.features) && data.features.length > 0 && (
          <section className="relative py-20 md:py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
            <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />

            <div className="relative z-10 mx-auto max-w-7xl">
              <Reveal className="mb-12 md:mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Fonctionnalités
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1]">
                  Tout ce dont vous avez <span className="text-[#0066FF]">besoin</span>
                </h2>
              </Reveal>

              <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                {data.features.map((feature, index) => (
                  <motion.div key={index} variants={staggerItem} className="bg-white dark:bg-[#1A1A1A] p-6 md:p-10 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 flex items-center justify-center border border-[#0066FF] flex-shrink-0">
                        {feature.icon && <feature.icon className="h-5 w-5 text-[#0066FF]" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-light text-[#2A2A2A] dark:text-[#FAFAFA]">{feature.title}</h3>
                        {feature.packRequired && (
                          <span className="inline-block mt-1 px-2 py-1 text-xs border border-[#0066FF] text-[#0066FF]">
                            Pack {feature.packRequired}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed mb-4 font-light">
                      {feature.description}
                    </p>
                    {feature.technical && (
                      <p className="text-xs text-[#0066FF] italic">
                        → {feature.technical}
                      </p>
                    )}
                  </motion.div>
                ))}
              </RevealStagger>
            </div>
          </section>
        )}

        {/* ROI Calculator */}
        {data.roi && data.roi.inputs && data.roi.calculate && (
          <section className="relative py-20 md:py-32 px-4 bg-white dark:bg-[#0A0A0A]">
            <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />

            <div className="relative z-10 mx-auto max-w-4xl">
              <Reveal>
                <ROICalculator
                  theme="swiss"
                  title={data.roi.title}
                  subtitle={data.roi.subtitle}
                  inputs={data.roi.inputs}
                  calculate={data.roi.calculate}
                  packageOptions={data.roi.packageOptions}
                />
              </Reveal>
            </div>
          </section>
        )}

        {/* Comparison Section */}
        {data.comparison && data.comparison.rows && data.comparison.rows.length > 0 && (
          <section className="relative py-20 md:py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
            <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />

            <div className="relative z-10 mx-auto max-w-5xl">
              <Reveal className="mb-10 md:mb-16 text-center">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Comparaison
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1]">
                  {data.comparison.title}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2A2A2A] overflow-x-auto">
                  <div className="min-w-[480px] md:min-w-0">
                    <div className="grid grid-cols-3 border-b border-[#E5E5E5] dark:border-[#2A2A2A]">
                      <div className="p-4 md:p-6 border-r border-[#E5E5E5] dark:border-[#2A2A2A]"></div>
                      <div className="p-4 md:p-6 border-r border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#0066FF]">
                        <p className="text-xs md:text-sm font-medium text-white text-center">{data.comparison.left}</p>
                      </div>
                      <div className="p-4 md:p-6">
                        <p className="text-xs md:text-sm font-medium text-[#666666] dark:text-[#999999] text-center">{data.comparison.right}</p>
                      </div>
                    </div>

                    {data.comparison.rows.map((row, index) => (
                      <div key={index} className="grid grid-cols-3 border-b border-[#E5E5E5] dark:border-[#2A2A2A] last:border-b-0">
                        <div className="p-4 md:p-6 border-r border-[#E5E5E5] dark:border-[#2A2A2A]">
                          <p className="text-xs md:text-sm font-light text-[#2A2A2A] dark:text-[#FAFAFA]">{row.feature}</p>
                        </div>
                        <div className="p-4 md:p-6 border-r border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#FAFAFA] dark:bg-[#0A0A0A]">
                          <p className="text-xs md:text-sm font-light text-[#2A2A2A] dark:text-[#FAFAFA] text-center">{row.leftValue}</p>
                        </div>
                        <div className="p-4 md:p-6">
                          <p className="text-xs md:text-sm font-light text-[#666666] dark:text-[#999999] text-center">{row.rightValue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        {data.pricing && ((
          data.pricing.simplified && data.pricing.startingAt
        ) || (
          !data.pricing.simplified && data.pricing.packages && Array.isArray(data.pricing.packages) && data.pricing.packages.length > 0
        )) && (
          <section className="relative py-20 md:py-32 px-4 bg-white dark:bg-[#0A0A0A]">
            <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />

            <div className="relative z-10 mx-auto max-w-7xl">
              <Reveal className="mb-24 text-center">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    Tarifs
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] leading-[1.1] mb-6">
                  Transparence <span className="text-[#0066FF]">totale</span>
                </h2>
                {data.pricing.subtitle && (
                  <p className="text-lg text-[#666666] dark:text-[#999999] font-light max-w-2xl mx-auto">
                    {data.pricing.subtitle}
                  </p>
                )}
              </Reveal>

              {data.pricing.simplified ? (
                /* MODE SIMPLIFIÉ : une carte "À partir de" */
                <Reveal delay={0.1} className="max-w-4xl mx-auto">
                  <div className="bg-white dark:bg-[#1A1A1A] border-2 border-[#0066FF] p-8 md:p-16">
                    <div className="text-center mb-8 md:mb-12">
                      <div className="inline-block px-4 py-1 mb-6 border border-[#0066FF] bg-white dark:bg-[#1A1A1A]">
                        <span className="text-xs font-medium text-[#0066FF] uppercase tracking-[0.2em]">
                          Prix d'entrée
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm text-[#666666] dark:text-[#999999] font-light">À partir de</span>
                      </div>
                      <div className="text-5xl md:text-7xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4 tracking-[-0.02em]">
                        {data.pricing.startingAt}
                      </div>
                      {data.pricing.monthly && (
                        <p className="text-sm text-[#666666] dark:text-[#999999] font-light">
                          + {data.pricing.monthly} d'hébergement/an
                        </p>
                      )}
                    </div>

                    {data.pricing.includes && Array.isArray(data.pricing.includes) && data.pricing.includes.length > 0 && (
                      <div className="mb-8 md:mb-12">
                        <h3 className="text-lg font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 text-center">
                          Ce qui est toujours inclus
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {data.pricing.includes.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-[#666666] dark:text-[#999999] font-light">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="text-center">
                      <Magnetic strength={0.25}>
                        <button
                          onClick={() => { trackPricingClick(data.pricing.startingAt, formType); openModal(); }}
                          className="group w-full sm:w-auto inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300 justify-center sm:justify-start"
                        >
                          Obtenir mon devis personnalisé
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                      </Magnetic>
                      {data.pricing.note && (
                        <p className="text-xs text-[#666666] dark:text-[#999999] font-light mt-4">
                          {data.pricing.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {data.pricing.justification && data.pricing.justification.points && Array.isArray(data.pricing.justification.points) && (
                    <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
                      <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2A2A2A] p-8 md:p-12">
                        <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-8">
                          {data.pricing.justification.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {data.pricing.justification.points.map((point, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-[#666666] dark:text-[#999999] font-light">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Reveal>
              ) : (
                /* MODE PACKS : l'ancienne version 3-packs */
                <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                  {data.pricing.packages.map((pkg, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className={`bg-white dark:bg-[#1A1A1A] p-12 hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-all duration-300 ${
                        pkg.highlighted ? 'border-2 border-[#0066FF] relative' : ''
                      }`}
                    >
                      {pkg.highlighted && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white">
                          <span className="text-xs font-medium uppercase tracking-wide">Populaire</span>
                        </div>
                      )}

                      <div className="mb-8">
                        <h3 className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">{pkg.name}</h3>
                        <div className="mb-2">
                          <span className="text-4xl font-light text-[#2A2A2A] dark:text-[#FAFAFA]">{pkg.price}</span>
                        </div>
                        {pkg.monthly && (
                          <p className="text-sm text-[#666666] dark:text-[#999999] font-light">
                            + {pkg.monthly}
                          </p>
                        )}
                      </div>

                      <ul className="space-y-4 mb-8">
                        {pkg.features && Array.isArray(pkg.features) && pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#666666] dark:text-[#999999] font-light">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => { trackPricingClick(pkg.name, formType); openModal(); }}
                        className={`w-full py-4 font-medium transition-all duration-300 ${
                          pkg.highlighted
                            ? 'bg-[#0066FF] text-white border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF]'
                            : 'bg-white dark:bg-[#1A1A1A] text-[#2A2A2A] dark:text-[#FAFAFA] border border-[#E5E5E5] dark:border-[#2A2A2A] hover:border-[#0066FF]'
                        }`}
                      >
                        {pkg.ctaLabel || 'Obtenir un devis'}
                      </button>
                    </motion.div>
                  ))}
                </RevealStagger>
              )}

              {!data.pricing.simplified && data.pricing.justification && data.pricing.justification.points && Array.isArray(data.pricing.justification.points) && (
                <Reveal delay={0.15} className="mt-12 md:mt-16 max-w-4xl mx-auto">
                  <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2A2A2A] p-12">
                    <h3 className="text-xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-8">
                      {data.pricing.justification.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.pricing.justification.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-[#666666] dark:text-[#999999] font-light">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {data.faq && data.faq.items && Array.isArray(data.faq.items) && data.faq.items.length > 0 && (
          <section className="relative py-20 md:py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
            <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />

            <div className="relative z-10 mx-auto max-w-4xl">
              <Reveal className="mb-12 md:mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
                  <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                    FAQ
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
                  {data.faq.title || 'Questions fréquentes'}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
                  {data.faq.items.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-[#1A1A1A]">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors"
                      >
                        <span className="text-base md:text-lg font-light text-[#2A2A2A] dark:text-[#FAFAFA] pr-6 md:pr-8">
                          {item.question}
                        </span>
                        {expandedFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-[#0066FF] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-[#666666] dark:text-[#999999] flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                          <p className="text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="relative py-20 md:py-32 px-4 bg-white dark:bg-[#0A0A0A]">
          <div className={`absolute inset-0 ${GRID_LIGHT} ${GRID_DARK} opacity-20`} />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#FAFAFA] dark:bg-[#1A1A1A] p-8 md:p-16">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 md:mb-8 leading-[1.1]">
                  Prêt à vous <span className="text-[#0066FF]">lancer</span> ?
                </h2>
                <p className="text-base md:text-lg text-[#666666] dark:text-[#999999] max-w-xl mx-auto leading-relaxed mb-8 md:mb-12 font-light">
                  Discutons de votre projet. Premier échange gratuit et sans engagement.
                </p>
                <Magnetic strength={0.25}>
                  <button
                    onClick={() => { trackCTAClick('Final CTA', formType); openModal(); }}
                    className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300 justify-center sm:justify-start"
                  >
                    <span className="flex items-center gap-3">
                      Obtenir mon devis gratuit
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                  </button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={getModalTitle(formType)}
      >
        <ContactForm formType={formType} onClose={closeModal} availableOffers={availableOffers} />
      </Modal>
    </>
  );
}
