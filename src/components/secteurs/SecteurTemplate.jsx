"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import ROICalculator from "@/components/ROICalculator";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

export default function SecteurTemplate({ data, formType = 'general' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 300;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      <main className="bg-[#FAFAFA] font-light">
        <Header onOpenModal={openModal} />

        {/* Hero Section - Swiss Clean */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 py-32">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-6xl mx-auto"
          >
            {/* Eyebrow */}
            {data.hero.eyebrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-1 mb-12 border border-[#0066FF] bg-white"
              >
                <span className="text-xs font-medium text-[#0066FF] uppercase tracking-[0.2em]">
                  {data.hero.eyebrow}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-16 tracking-[-0.02em] leading-[0.95] text-[#2A2A2A]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {data.hero.title}
              </motion.div>
              {data.hero.titleGradient && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-[#0066FF]"
                >
                  {data.hero.titleGradient}
                </motion.div>
              )}
            </h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="max-w-3xl mb-16 border-l-2 border-[#0066FF] pl-8"
            >
              <p className="text-xl text-[#666666] leading-relaxed font-light">
                {data.hero.subtitle}
              </p>
              {data.hero.description && (
                <p className="text-lg text-[#666666] leading-relaxed font-light mt-4">
                  {data.hero.description}
                </p>
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-6 mb-16"
            >
              <button
                onClick={openModal}
                className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  {data.hero.ctaLabel}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </button>

              {data.hero.demoUrl && (
                <Link
                  href={data.hero.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-5 bg-white text-[#2A2A2A] font-medium border border-[#E5E5E5] hover:border-[#0066FF] transition-all duration-300"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {data.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 border border-[#E5E5E5]">
                    <div className="w-1 h-1 bg-[#0066FF] flex-shrink-0" />
                    <span className="text-sm text-[#666666] font-light">{promise}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Challenges Section */}
        {data.challenges && Array.isArray(data.challenges) && data.challenges.length > 0 && (
          <section className="relative py-32 px-4 bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                    Les Défis
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1]">
                  Challenges à <span className="text-[#0066FF]">surmonter</span>
                </h2>
              </div>

              <div className="space-y-px bg-[#E5E5E5]">
                {data.challenges.map((challenge, index) => (
                  <div key={index} className="bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300">
                    <div className="flex items-start gap-8">
                      <div className="w-16 h-16 flex items-center justify-center border border-[#0066FF] flex-shrink-0">
                        {challenge.icon && <challenge.icon className="h-8 w-8 text-[#0066FF]" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-light text-[#2A2A2A] mb-6">{challenge.title}</h3>

                        <div className="space-y-6">
                          <div>
                            <div className="inline-block px-3 py-1 mb-3 border border-[#E5E5E5]">
                              <span className="text-xs font-medium text-[#666666] uppercase tracking-wide">
                                Problème
                              </span>
                            </div>
                            <p className="text-[#666666] leading-relaxed font-light">
                              {challenge.problem}
                            </p>
                          </div>

                          <div>
                            <div className="inline-block px-3 py-1 mb-3 border border-[#0066FF]">
                              <span className="text-xs font-medium text-[#0066FF] uppercase tracking-wide">
                                Solution
                              </span>
                            </div>
                            <p className="text-[#2A2A2A] leading-relaxed font-light">
                              {challenge.solution}
                            </p>
                          </div>

                          {challenge.stat && (
                            <div className="pt-4 border-t border-[#E5E5E5]">
                              <p className="text-sm text-[#0066FF] font-medium italic">
                                → {challenge.stat}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Conformity Section (Avocat) */}
        {data.conformity && Array.isArray(data.conformity) && data.conformity.length > 0 && (
          <section className="relative py-32 px-4 bg-[#FAFAFA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                    Conformité
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1]">
                  100% <span className="text-[#0066FF]">conforme</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5]">
                {data.conformity.map((item, index) => (
                  <div key={index} className="bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#0066FF] mb-8">
                      {item.icon && <item.icon className="h-6 w-6 text-[#0066FF]" />}
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A] mb-4">{item.title}</h3>
                    <p className="text-[#666666] leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>
                    {item.reference && (
                      <div className="inline-block px-3 py-1 border border-[#E5E5E5]">
                        <span className="text-xs font-medium text-[#666666]">
                          {item.reference}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Section (Artisan) */}
        {data.services && Array.isArray(data.services) && data.services.length > 0 && (
          <section className="relative py-32 px-4 bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                    Métiers
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1]">
                  Pour tous les <span className="text-[#0066FF]">artisans</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
                {data.services.map((service, index) => (
                  <div key={index} className="bg-white p-10 hover:bg-[#FAFAFA] transition-colors duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#E5E5E5] mb-8">
                      {service.icon && <service.icon className="h-6 w-6 text-[#2A2A2A]" />}
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A] mb-4">{service.title}</h3>
                    <p className="text-sm text-[#666666] leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                    {service.keywords && Array.isArray(service.keywords) && service.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {service.keywords.slice(0, 3).map((keyword, i) => (
                          <span key={i} className="text-xs px-2 py-1 border border-[#E5E5E5] text-[#666666]">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {data.features && Array.isArray(data.features) && data.features.length > 0 && (
          <section className="relative py-32 px-4 bg-[#FAFAFA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                    Fonctionnalités
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1]">
                  Tout ce dont vous avez <span className="text-[#0066FF]">besoin</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
                {data.features.map((feature, index) => (
                  <div key={index} className="bg-white p-10 hover:bg-[#FAFAFA] transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 flex items-center justify-center border border-[#0066FF] flex-shrink-0">
                        {feature.icon && <feature.icon className="h-5 w-5 text-[#0066FF]" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-light text-[#2A2A2A]">{feature.title}</h3>
                        {feature.packRequired && (
                          <span className="inline-block mt-1 px-2 py-1 text-xs border border-[#0066FF] text-[#0066FF]">
                            Pack {feature.packRequired}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4 font-light">
                      {feature.description}
                    </p>
                    {feature.technical && (
                      <p className="text-xs text-[#0066FF] italic">
                        → {feature.technical}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ROI Calculator */}
        {data.roi && data.roi.inputs && data.roi.calculate && (
          <section className="relative py-32 px-4 bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <ROICalculator
                theme="swiss"
                title={data.roi.title}
                subtitle={data.roi.subtitle}
                inputs={data.roi.inputs}
                calculate={data.roi.calculate}
                packageOptions={data.roi.packageOptions}
              />
            </div>
          </section>
        )}

        {/* Comparison Section */}
        {data.comparison && data.comparison.rows && data.comparison.rows.length > 0 && (
          <section className="relative py-32 px-4 bg-[#FAFAFA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-5xl">
              <div className="mb-16 text-center">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                    Comparaison
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1]">
                  {data.comparison.title}
                </h2>
              </div>

              <div className="bg-white border border-[#E5E5E5]">
                <div className="grid grid-cols-3 border-b border-[#E5E5E5]">
                  <div className="p-6 border-r border-[#E5E5E5]"></div>
                  <div className="p-6 border-r border-[#E5E5E5] bg-[#0066FF]">
                    <p className="text-sm font-medium text-white text-center">{data.comparison.left}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-[#666666] text-center">{data.comparison.right}</p>
                  </div>
                </div>

                {data.comparison.rows.map((row, index) => (
                  <div key={index} className="grid grid-cols-3 border-b border-[#E5E5E5] last:border-b-0">
                    <div className="p-6 border-r border-[#E5E5E5]">
                      <p className="text-sm font-light text-[#2A2A2A]">{row.feature}</p>
                    </div>
                    <div className="p-6 border-r border-[#E5E5E5] bg-[#FAFAFA]">
                      <p className="text-sm font-light text-[#2A2A2A] text-center">{row.leftValue}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-light text-[#666666] text-center">{row.rightValue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        {data.pricing && data.pricing.packages && Array.isArray(data.pricing.packages) && data.pricing.packages.length > 0 && (
          <section className="relative py-32 px-4 bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mb-24 text-center">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                    Tarifs
                  </span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1] mb-6">
                  Transparence <span className="text-[#0066FF]">totale</span>
                </h2>
                {data.pricing.subtitle && (
                  <p className="text-lg text-[#666666] font-light max-w-2xl mx-auto">
                    {data.pricing.subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
                {data.pricing.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`bg-white p-12 hover:bg-[#FAFAFA] transition-all duration-300 ${
                      pkg.highlighted ? 'border-2 border-[#0066FF] relative' : ''
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white">
                        <span className="text-xs font-medium uppercase tracking-wide">Populaire</span>
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-[#2A2A2A] mb-4">{pkg.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-light text-[#2A2A2A]">{pkg.price}</span>
                      </div>
                      {pkg.monthly && (
                        <p className="text-sm text-[#666666] font-light">
                          + {pkg.monthly}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features && Array.isArray(pkg.features) && pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#666666] font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={openModal}
                      className={`w-full py-4 font-medium transition-all duration-300 ${
                        pkg.highlighted
                          ? 'bg-[#0066FF] text-white border border-[#0066FF] hover:bg-white hover:text-[#0066FF]'
                          : 'bg-white text-[#2A2A2A] border border-[#E5E5E5] hover:border-[#0066FF]'
                      }`}
                    >
                      {pkg.ctaLabel || 'Obtenir un devis'}
                    </button>
                  </div>
                ))}
              </div>

              {data.pricing.justification && data.pricing.justification.points && Array.isArray(data.pricing.justification.points) && (
                <div className="mt-16 max-w-4xl mx-auto">
                  <div className="bg-white border border-[#E5E5E5] p-12">
                    <h3 className="text-xl font-light text-[#2A2A2A] mb-8">
                      {data.pricing.justification.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.pricing.justification.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-[#666666] font-light">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {data.faq && Array.isArray(data.faq) && data.faq.length > 0 && (
          <section className="relative py-32 px-4 bg-[#FAFAFA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <div className="mb-24">
                <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                    FAQ
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
                  Questions fréquentes
                </h2>
              </div>

              <div className="space-y-px bg-[#E5E5E5]">
                {data.faq.map((item, index) => (
                  <div key={index} className="bg-white">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left flex items-center justify-between hover:bg-[#FAFAFA] transition-colors"
                    >
                      <span className="text-lg font-light text-[#2A2A2A] pr-8">
                        {item.question}
                      </span>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-[#0066FF] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#666666] flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-8 pb-8">
                        <p className="text-[#666666] leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="relative py-32 px-4 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Prêt à vous <span className="text-[#0066FF]">lancer</span> ?
              </h2>
              <p className="text-lg text-[#666666] max-w-xl mx-auto leading-relaxed mb-12 font-light">
                Discutons de votre projet. Premier échange gratuit et sans engagement.
              </p>
              <button
                onClick={openModal}
                className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Obtenir mon devis gratuit
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </button>
            </div>
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
        <ContactForm formType={formType} onClose={closeModal} />
      </Modal>
    </>
  );
}
