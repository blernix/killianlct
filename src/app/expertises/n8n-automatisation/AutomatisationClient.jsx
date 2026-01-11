"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import ROICalculator from "@/components/ROICalculator";
import {
  CheckCircle,
  AlertCircle,
  X,
  TrendingUp,
  Shield,
  ArrowRight,
  Sparkles,
  Zap,
  BarChart,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { n8nData } from './data';

export default function AutomatisationClient() {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'automatisation';

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Liste des offres disponibles pour le formulaire
  const availableOffers = n8nData.pricing.packages.map(pkg => `${pkg.name} - ${pkg.price}`);

  const renderComparisonValue = (value) => {
    if (value === true) return <CheckCircle className="text-[#0066FF] mx-auto" size={24} />;
    if (value === false) return <X className="text-[#666666] mx-auto" size={24} />;
    return <span className="text-[#666666] text-sm">{value}</span>;
  };

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO - Swiss Minimal */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 py-32">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <Zap className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">n8n Certifié</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <Shield className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Infrastructure Sécurisée</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <BarChart className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Monitoring 24/7</span>
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-10 leading-[1.05]">
              {n8nData.hero.title.split('20h').map((part, i) =>
                i === 0 ? part : (
                  <span key={i}>
                    <span className="text-[#0066FF]">20h</span>
                    {part}
                  </span>
                )
              )}
            </h1>

            <p className="text-xl sm:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed mb-16 font-light">
              {n8nData.hero.subtitle}
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => openModal()}
                className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  {n8nData.hero.ctaLabel}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <div className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] bg-white">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#0066FF] border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-[#2A2A2A] border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-[#666666] border-2 border-white" />
                </div>
                <span className="text-sm text-[#666666] font-light">
                  <strong className="text-[#2A2A2A] font-medium">50+ workflows</strong> automatisés
                </span>
              </div>
            </div>

            {/* Micro-promesses */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] max-w-4xl mx-auto">
              {n8nData.hero.microPromises.map((promise, i) => (
                <div key={i} className="flex items-center gap-3 p-6 bg-white hover:bg-[#FAFAFA] transition-colors">
                  <CheckCircle className="text-[#0066FF] flex-shrink-0" size={18} />
                  <span className="text-sm text-[#2A2A2A] font-light">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Défis/Solutions */}
        <section className="relative py-32 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Les Pièges à Éviter
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Les 3 Freins à la{' '}
                <span className="text-[#0066FF]">Croissance de Votre Business</span>
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                Et comment l'automatisation résout chacun définitivement
              </p>
            </div>

            <div className="space-y-px bg-[#E5E5E5]">
              {n8nData.challenges.map((challenge, index) => (
                <div key={index} className="bg-white">
                  <div className="p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center text-[#0066FF] font-light text-2xl">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-light text-[#2A2A2A]">{challenge.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Problème */}
                      <div className="border border-[#E5E5E5] p-8">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                            <X className="text-[#666666]" size={20} />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wider text-[#666666] font-medium">Problème</span>
                            <p className="text-[#2A2A2A] font-light mt-2">{challenge.problem}</p>
                          </div>
                        </div>
                        {challenge.stat && (
                          <div className="flex items-start gap-2 p-4 border border-[#E5E5E5] mt-4">
                            <p className="text-sm text-[#666666] font-light">{challenge.stat}</p>
                          </div>
                        )}
                      </div>

                      {/* Solution */}
                      <div className="border border-[#0066FF] p-8 bg-[#FAFAFA]">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 border border-[#0066FF] flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="text-[#0066FF]" size={20} />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wider text-[#0066FF] font-medium">Notre Solution</span>
                            <p className="text-[#2A2A2A] font-light mt-2">{challenge.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Processus */}
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Notre Méthode
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                {n8nData.process.title}
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                {n8nData.process.subtitle}
              </p>
            </div>

            <div className="space-y-px bg-[#E5E5E5]">
              {n8nData.process.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Numéro et icône */}
                      <div className="flex lg:flex-col items-center lg:items-start gap-4">
                        <div className="w-16 h-16 border border-[#E5E5E5] flex items-center justify-center text-[#0066FF] font-light text-3xl flex-shrink-0 group-hover:border-[#0066FF] transition-colors">
                          {step.number}
                        </div>
                        <div className="w-14 h-14 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 group-hover:border-[#0066FF] transition-colors">
                          <Icon className="text-[#0066FF]" size={24} />
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-light text-[#2A2A2A]">
                            {step.title}
                          </h3>
                          <span className="text-sm text-[#0066FF] font-light border border-[#E5E5E5] px-3 py-1">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-[#666666] leading-relaxed font-light mb-6">
                          {step.description}
                        </p>

                        {/* Livrables */}
                        <div>
                          <p className="text-sm text-[#666666] mb-3 font-medium">Livrables :</p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable, i) => (
                              <span
                                key={i}
                                className="text-xs border border-[#E5E5E5] px-3 py-1 text-[#666666] font-light"
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

            <div className="mt-16 text-center">
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
              >
                Lancer mon premier workflow
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Section Cas d'usage */}
        <section className="relative py-32 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Cas d'Usage
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                {n8nData.useCases.title}
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                {n8nData.useCases.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
              {n8nData.useCases.cases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-8 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <div className="w-14 h-14 border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:border-[#0066FF] transition-colors">
                      <Icon className="text-[#0066FF]" size={24} />
                    </div>

                    <h3 className="text-xl font-light text-[#2A2A2A] mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed mb-4 font-light">
                      {useCase.description}
                    </p>

                    <div className="pt-4 border-t border-[#E5E5E5]">
                      <p className="text-xs text-[#666666] italic font-light">
                        {useCase.examples}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Intégrations */}
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Intégrations
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                {n8nData.integrations.title}
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                {n8nData.integrations.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
              {n8nData.integrations.categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-8 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:border-[#0066FF] transition-colors">
                      <Icon className="text-[#0066FF]" size={24} />
                    </div>
                    <h3 className="text-lg font-light text-[#2A2A2A] mb-2">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-xs border border-[#E5E5E5] px-2 py-1 text-[#666666] font-light"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#666666] mb-6 font-light">
                Et 200+ autres intégrations disponibles. Si votre outil a une API, on peut le connecter !
              </p>
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-[#0066FF] bg-white hover:bg-[#0066FF] hover:text-white transition-all duration-300"
              >
                <span className="font-medium">Vérifier mes intégrations</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Calculateur ROI */}
        <section className="relative py-32 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Calculateur ROI
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Calculez Votre{' '}
                <span className="text-[#0066FF]">Retour sur Investissement</span>
              </h2>

              <p className="text-lg text-[#666666] font-light">
                Combien votre entreprise peut-elle économiser en automatisant ?
              </p>
            </div>

            <ROICalculator
              title={<>Calculez Votre <span className="text-[#0066FF]">Retour sur Investissement</span></>}
              subtitle="Combien votre entreprise peut-elle économiser en automatisant ?"
              color="orange"
              inputs={[
                { name: 'teamSize', label: 'Taille équipe', defaultValue: 3, min: 1, max: 50, step: 1 },
                { name: 'hoursPerDay', label: 'Heures gagnées/pers./jour', defaultValue: 1, min: 0.5, max: 8, step: 0.5 },
                { name: 'hourlyRate', label: 'Coût horaire (€)', defaultValue: 50, min: 20, max: 200, step: 5 },
              ]}
              packageOptions={{
                label: 'Forfait choisi',
                defaultValue: 3500,
                options: [
                  { value: 1500, label: '1 Workflow - 1 500€' },
                  { value: 3500, label: 'Pack 3 - 3 500€' },
                ],
              }}
              calculate={(values) => {
                const monthlyHoursSaved = values.teamSize * values.hoursPerDay * 20;
                const monthlySavings = monthlyHoursSaved * values.hourlyRate;
                const monthsToROI = (values.selectedPackage / monthlySavings).toFixed(1);
                const yearlyROI = (monthlySavings * 12) - values.selectedPackage;

                return {
                  description: `Avec <strong class="text-[#2A2A2A]">${values.teamSize} personnes</strong> qui gagnent <strong class="text-[#2A2A2A]">${values.hoursPerDay}h/jour</strong> chacune à <strong class="text-[#2A2A2A]">${values.hourlyRate}€/h</strong> :`,
                  metrics: [
                    { label: 'Économie mensuelle', value: `${monthlySavings.toLocaleString()}€` },
                    { label: 'Workflow rentabilisé en', value: `${monthsToROI} mois`, highlight: true },
                    { label: 'ROI sur 12 mois', value: `+${yearlyROI > 0 ? yearlyROI.toLocaleString() : 0}€`, icon: TrendingUp, highlight: true },
                  ],
                  cta: {
                    label: 'Obtenir mon devis pour cette offre',
                    icon: ArrowRight,
                    onClick: () => openModal(values.selectedPackage === 1500 ? 'Workflow Unique - 1 500€' : 'Pack 3 Workflows - 3 500€'),
                  },
                };
              }}
            />
          </div>
        </section>

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-32 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Tarifs Transparents
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                {n8nData.pricing.title}
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                {n8nData.pricing.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E5] mb-16">
              {n8nData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group bg-white p-10 hover:bg-[#FAFAFA] transition-colors duration-300 ${
                    pkg.highlighted ? 'md:scale-105 border-2 border-[#0066FF] relative' : ''
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white text-xs font-medium uppercase tracking-wider">
                      {pkg.cta}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-light text-[#2A2A2A] mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-[#666666] text-sm mb-2 font-light">
                      {pkg.description}
                    </p>
                    <p className="text-xs text-[#0066FF] mb-6 font-light">
                      {pkg.timeframe}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light text-[#2A2A2A]">
                        {pkg.price.split('€')[0].split('/')[0]}
                      </span>
                      {pkg.price.includes('€') && <span className="text-2xl text-[#666666]">€{pkg.price.includes('/mois') ? '/mois' : ''}</span>}
                    </div>
                    {pkg.savingsExample && (
                      <p className="text-xs text-[#0066FF] mt-3 font-light">
                        {pkg.savingsExample}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="text-[#0066FF] flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-[#666666] leading-relaxed font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price}`)}
                    className={`w-full py-4 px-6 font-medium transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-[#0066FF] text-white border border-[#0066FF] hover:bg-white hover:text-[#0066FF]'
                        : 'bg-white text-[#0066FF] border border-[#0066FF] hover:bg-[#0066FF] hover:text-white'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* ROI Justification */}
            <div className="max-w-4xl mx-auto">
              <div className="relative border border-[#E5E5E5] bg-white p-12">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white text-sm font-medium whitespace-nowrap">
                  {n8nData.pricing.roi.title}
                </div>

                <div className="grid sm:grid-cols-2 gap-px bg-[#E5E5E5] mt-4">
                  {n8nData.pricing.roi.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white">
                      <div className="w-8 h-8 border border-[#0066FF] flex items-center justify-center flex-shrink-0 text-[#0066FF] font-medium">
                        {index + 1}
                      </div>
                      <p className="text-[#666666] leading-relaxed font-light pt-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-[#666666] max-w-3xl mx-auto leading-relaxed p-8 border border-[#E5E5E5] bg-white font-light">
                  <strong className="text-[#2A2A2A] font-medium">{n8nData.pricing.note}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison */}
        <section className="relative py-32 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                {n8nData.comparison.title}
              </h2>
              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                {n8nData.comparison.subtitle}
              </p>
            </div>

            <div className="border border-[#E5E5E5] bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E5E5E5]">
                      <th className="text-left p-6 text-[#666666] font-light">Critère</th>
                      {n8nData.comparison.columns.map((col, index) => (
                        <th
                          key={index}
                          className={`p-6 text-center font-light ${
                            col.highlighted ? 'text-[#0066FF] bg-[#FAFAFA]' : 'text-[#2A2A2A]'
                          }`}
                        >
                          {col.label}
                          {col.highlighted && <span className="block text-xs text-[#0066FF] mt-1 font-medium">Notre Choix</span>}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {n8nData.comparison.categories.map((category, index) => (
                      <tr key={index} className="border-b border-[#E5E5E5] hover:bg-[#FAFAFA] transition-colors">
                        <td className="p-6 text-[#666666] font-light">{category.name}</td>
                        <td className="p-6 text-center">{renderComparisonValue(category.zapier)}</td>
                        <td className="p-6 text-center bg-[#FAFAFA]">{renderComparisonValue(category.n8n)}</td>
                        <td className="p-6 text-center">{renderComparisonValue(category.custom)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                {n8nData.faq.title}
              </h2>

              <p className="text-lg text-[#666666] font-light">
                {n8nData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-px bg-[#E5E5E5]">
              {n8nData.faq.items.map((item, index) => (
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
