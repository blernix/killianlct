"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
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

  const toggleFaq = (index) => {
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
    if (value === false) return <X className="text-[#666666]" size={20} />;
    return <span className="text-[#666666] text-sm">{value}</span>;
  };

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 container mx-auto max-w-6xl">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {directusData.badges.map((badge, i) => {
                  const Icon = badge.icon;
                  return (
                    <div key={i} className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                      <Icon className="text-[#0066FF]" size={16} />
                      <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="text-center space-y-8 mb-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1]">
                  Gérez Votre Contenu{" "}
                  <span className="text-[#0066FF]">Sans Jamais Risquer</span>{" "}
                  de Tout Casser
                </h1>
                <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed font-light">
                  {directusData.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => openModal()}
                  className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    {directusData.hero.ctaLabel}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>

                <div className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] bg-white">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-[#2A2A2A] border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-[#666666] border-2 border-white" />
                  </div>
                  <span className="text-sm text-[#666666] font-light">
                    <strong className="text-[#2A2A2A] font-medium">30+ interfaces</strong> créées
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] max-w-4xl mx-auto">
                {directusData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white hover:bg-[#FAFAFA] transition-colors">
                    <div className="w-1 h-1 bg-[#0066FF] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#666666] font-light">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Défis/Solutions */}
        <section className="relative py-32 px-4 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Les Problèmes à Résoudre
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
                Les 3 Cauchemars des{' '}
                <span className="text-[#0066FF]">CMS Traditionnels</span>
              </h2>
              <p className="text-lg text-[#666666] max-w-2xl font-light">
                Et comment Directus résout chacun définitivement
              </p>
            </div>

            <div className="space-y-px bg-[#E5E5E5]">
              {directusData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div key={index} className="bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center text-[#0066FF] font-light text-2xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#666666]" size={20} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-[#E5E5E5]">
                      <div className="bg-white p-8">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                              <X className="text-[#666666]" size={14} />
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] text-[#666666] font-medium">
                              Problème
                            </span>
                          </div>
                          <h3 className="text-xl font-light text-[#2A2A2A]">{challenge.title}</h3>
                        </div>
                        <p className="text-[#666666] leading-relaxed mb-4 font-light">
                          {challenge.problem}
                        </p>
                        {challenge.stat && (
                          <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA]">
                            <p className="text-sm text-[#666666] font-light">{challenge.stat}</p>
                          </div>
                        )}
                      </div>

                      <div className="bg-white p-8">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="text-[#0066FF]" size={14} />
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] text-[#0066FF] font-medium">
                              Solution Directus
                            </span>
                          </div>
                          <h3 className="text-xl font-light text-[#2A2A2A]">Interface Sur-Mesure</h3>
                        </div>
                        <p className="text-[#666666] leading-relaxed font-light">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Processus */}
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Notre Méthode
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
                {directusData.process.title}
              </h2>
              <p className="text-lg text-[#666666] max-w-2xl font-light">
                {directusData.process.subtitle}
              </p>
            </div>

            <div className="space-y-px bg-[#E5E5E5]">
              {directusData.process.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex items-center lg:items-start gap-4">
                        <div className="w-16 h-16 border border-[#E5E5E5] flex items-center justify-center text-[#0066FF] font-light text-3xl flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="w-14 h-14 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                          <Icon className="text-[#666666]" size={24} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <h3 className="text-2xl font-light text-[#2A2A2A] mb-2 md:mb-0">
                            {step.title}
                          </h3>
                          <span className="text-sm text-[#0066FF] border border-[#E5E5E5] px-3 py-1 w-fit">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-[#666666] leading-relaxed mb-6 font-light">
                          {step.description}
                        </p>

                        <div>
                          <p className="text-xs text-[#666666] mb-3 uppercase tracking-[0.2em]">Livrables :</p>
                          <div className="flex flex-wrap gap-px bg-[#E5E5E5]">
                            {step.deliverables.map((deliverable, i) => (
                              <span
                                key={i}
                                className="text-sm bg-white px-4 py-2 text-[#666666] font-light"
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
                onClick={() => openModal()}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
              >
                Configurer mon interface Directus
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Section Cas d'usage */}
        <section className="relative py-32 px-4 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Cas d'Usage
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
                {directusData.useCases.title}
              </h2>
              <p className="text-lg text-[#666666] max-w-2xl font-light">
                {directusData.useCases.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
              {directusData.useCases.cases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-8 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mb-6">
                      <Icon className="text-[#0066FF]" size={20} />
                    </div>

                    <h3 className="text-xl font-light text-[#2A2A2A] mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4 font-light">
                      {useCase.description}
                    </p>

                    <div className="pt-4 border-t border-[#E5E5E5]">
                      <p className="text-xs text-[#666666] font-light">
                        {useCase.examples}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-32 px-4 bg-[#FAFAFA]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Tarifs Transparents
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
                {directusData.pricing.title}
              </h2>
              <p className="text-lg text-[#666666] max-w-2xl font-light">
                {directusData.pricing.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E5] mb-16">
              {directusData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative p-10 transition-all duration-300 ${
                    pkg.highlighted
                      ? 'bg-[#0066FF] text-white'
                      : 'bg-white hover:bg-[#FAFAFA]'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-px left-0 right-0 h-[2px] bg-white" />
                  )}

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-2xl font-light ${pkg.highlighted ? 'text-white' : 'text-[#2A2A2A]'}`}>
                        {pkg.name}
                      </h3>
                      {pkg.highlighted && (
                        <span className="text-xs uppercase tracking-[0.2em] border border-white px-2 py-1">
                          {pkg.cta}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mb-2 font-light ${pkg.highlighted ? 'text-white/80' : 'text-[#666666]'}`}>
                      {pkg.description}
                    </p>
                    <p className={`text-xs mb-6 font-light ${pkg.highlighted ? 'text-white/60' : 'text-[#666666]'}`}>
                      {pkg.timeframe}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl font-light ${pkg.highlighted ? 'text-white' : 'text-[#2A2A2A]'}`}>
                        {pkg.price.split('€')[0]}
                      </span>
                      {pkg.price.includes('€') && (
                        <span className={`text-2xl font-light ${pkg.highlighted ? 'text-white/80' : 'text-[#666666]'}`}>
                          €
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className={`w-1 h-1 rounded-full flex-shrink-0 mt-2 ${pkg.highlighted ? 'bg-white' : 'bg-[#0066FF]'}`} />
                        <span className={`text-sm leading-relaxed font-light ${pkg.highlighted ? 'text-white' : 'text-[#666666]'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price}`)}
                    className={`w-full py-4 px-6 font-medium transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-white text-[#0066FF] border border-white hover:bg-transparent hover:text-white'
                        : 'bg-[#0066FF] text-white border border-[#0066FF] hover:bg-white hover:text-[#0066FF]'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Maintenance */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="mb-12">
                <h3 className="text-3xl font-light text-[#2A2A2A] mb-4">
                  {directusData.pricing.maintenance.title}
                </h3>
                <p className="text-[#666666] max-w-2xl font-light">
                  {directusData.pricing.maintenance.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E5]">
                {directusData.pricing.maintenance.plans.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <h4 className="text-xl font-light text-[#2A2A2A] mb-2">{plan.name}</h4>
                    <p className="text-3xl font-light text-[#0066FF] mb-6">{plan.price}</p>
                    <ul className="space-y-3">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#666666] font-light">
                          <div className="w-1 h-1 bg-[#0066FF] rounded-full flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#666666] max-w-3xl mx-auto leading-relaxed p-6 border border-[#E5E5E5] bg-white font-light">
                {directusData.pricing.note}
              </p>
            </div>
          </div>
        </section>

        {/* Comparaison */}
        <section className="relative py-32 px-4 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
                {directusData.comparison.title}
              </h2>
              <p className="text-lg text-[#666666] max-w-2xl font-light">
                {directusData.comparison.subtitle}
              </p>
            </div>

            <div className="border border-[#E5E5E5] bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E5E5E5]">
                      <th className="text-left p-6 text-[#666666] font-medium text-sm">Critère</th>
                      {directusData.comparison.columns.map((col, index) => (
                        <th
                          key={index}
                          className={`p-6 text-center font-light text-sm ${
                            col.highlighted ? 'text-[#0066FF] bg-[#FAFAFA]' : 'text-[#2A2A2A]'
                          }`}
                        >
                          {col.label}
                          {col.highlighted && (
                            <span className="block text-xs text-[#666666] mt-1 font-light">
                              Notre Choix
                            </span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {directusData.comparison.categories.map((category, index) => (
                      <tr key={index} className="border-b border-[#E5E5E5] hover:bg-[#FAFAFA] transition-colors">
                        <td className="p-6 text-[#2A2A2A] font-light">{category.name}</td>
                        <td className="p-6 text-center">{renderComparisonValue(category.wordpress)}</td>
                        <td className="p-6 text-center bg-[#FAFAFA]">{renderComparisonValue(category.directus)}</td>
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
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  FAQ
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
                {directusData.faq.title}
              </h2>

              <p className="text-lg text-[#666666] font-light">
                {directusData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-px bg-[#E5E5E5]">
              {directusData.faq.items.map((item, index) => (
                <div key={index} className="bg-white">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-8 text-left hover:bg-[#FAFAFA] transition-colors"
                  >
                    <span className="text-lg font-light text-[#2A2A2A] pr-4">{item.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-[#0066FF] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-[#666666] flex-shrink-0" size={24} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-8 pb-8 border-t border-[#E5E5E5]">
                      <p className="text-[#666666] leading-relaxed font-light pt-6">{item.answer}</p>
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
