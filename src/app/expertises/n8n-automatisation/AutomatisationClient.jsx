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

  // Préparer les données FAQ
  const faqItems = n8nData.faq.items.map((item, index) => ({
    value: `item-${index}`,
    question: item.question,
    answer: item.answer
  }));

  const renderComparisonValue = (value) => {
    if (value === true) return <CheckCircle className="text-green-400 mx-auto" size={24} />;
    if (value === false) return <X className="text-red-400 mx-auto" size={24} />;
    return <span className="text-gray-300 text-sm">{value}</span>;
  };

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO MODERNE */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]" />

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Zap className="text-orange-400" size={16} />
                  n8n Certifié
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Shield className="text-green-400" size={16} />
                  Infrastructure Sécurisée
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <BarChart className="text-blue-400" size={16} />
                  Monitoring 24/7
                </span>
              </div>

              <div className="text-center space-y-6 mb-12">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {n8nData.hero.title.split('20h').map((part, i) =>
                    i === 0 ? part : (
                      <span key={i}>
                        <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                          20h
                        </span>
                        {part}
                      </span>
                    )
                  )}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {n8nData.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => openModal()}
                  className="group relative px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.5)] flex items-center gap-3"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  {n8nData.hero.ctaLabel}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 border-2 border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 border-2 border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 border-2 border-gray-900" />
                  </div>
                  <span className="text-sm text-gray-300">
                    <strong className="text-white">50+ workflows</strong> automatisés
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {n8nData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-300">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Défis/Solutions */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[150px]" />
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-green-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-sm text-red-400 mb-6">
                <AlertCircle size={16} />
                <span className="font-semibold">Les Pièges à Éviter</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Les 3 Freins à la{' '}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Croissance de Votre Business
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Et comment l'automatisation résout chacun définitivement
              </p>
            </div>

            <div className="space-y-8">
              {n8nData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500"
                  >
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20 rounded-2xl p-6 h-full">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <X className="text-red-400" size={20} />
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-wider text-red-400 font-bold">Problème</span>
                              <h3 className="text-xl font-bold text-white mt-1">{challenge.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed mb-4">{challenge.problem}</p>
                          {challenge.stat && (
                            <div className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                              <span className="text-xl flex-shrink-0">📊</span>
                              <p className="text-sm text-red-300 font-medium">{challenge.stat}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-6 h-full">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="text-green-400" size={20} />
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-wider text-green-400 font-bold">Notre Solution</span>
                              <h3 className="text-xl font-bold text-white mt-1">Automatisation n8n</h3>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Processus */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm text-orange-400 mb-6">
                <Zap size={16} />
                <span className="font-semibold">Notre Méthode</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {n8nData.process.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {n8nData.process.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {n8nData.process.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.2)] transition-all duration-500"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex lg:flex-col items-center lg:items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="text-orange-400" size={28} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                            {step.title}
                          </h3>
                          <span className="text-sm text-orange-400 font-semibold bg-orange-500/10 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        <div>
                          <p className="text-sm text-gray-500 mb-2 font-semibold">Livrables :</p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable, i) => (
                              <span
                                key={i}
                                className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400"
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,146,60,0.6)]"
              >
                Lancer mon premier workflow
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Section Cas d'usage */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Sparkles size={16} />
                <span className="font-semibold">Cas d'Usage</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {n8nData.useCases.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {n8nData.useCases.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {n8nData.useCases.cases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)] transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-orange-400" size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    <div className="pt-3 border-t border-white/10">
                      <p className="text-xs text-orange-400/70 italic">
                        🔗 {useCase.examples}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Intégrations */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400 mb-6">
                <Zap size={16} />
                <span className="font-semibold">Intégrations</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {n8nData.integrations.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {n8nData.integrations.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {n8nData.integrations.categories.map((category, index) => {
                const Icon = category.icon;
                const colorMap = {
                  blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                  green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
                  purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
                  orange: 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
                  cyan: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
                  red: 'from-red-500/20 to-orange-500/20 border-red-500/30'
                };
                const iconColorMap = {
                  blue: 'text-blue-400',
                  green: 'text-green-400',
                  purple: 'text-purple-400',
                  orange: 'text-orange-400',
                  cyan: 'text-cyan-400',
                  red: 'text-red-400'
                };
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colorMap[category.color]} backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${colorMap[category.color]} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={iconColorMap[category.color]} size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/10 border border-white/20 px-2 py-1 rounded text-gray-300"
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
              <p className="text-gray-400 mb-6">
                Et 200+ autres intégrations disponibles. Si votre outil a une API, on peut le connecter !
              </p>
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-orange-500/50 text-white font-bold rounded-full transition-all duration-300"
              >
                Vérifier mes intégrations
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Calculateur ROI */}
        <ROICalculator
          title={
            <>
              Calculez Votre{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Retour sur Investissement
              </span>
            </>
          }
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
            const monthlyHoursSaved = values.teamSize * values.hoursPerDay * 20; // jours ouvrés/mois
            const monthlySavings = monthlyHoursSaved * values.hourlyRate;
            const monthsToROI = (values.selectedPackage / monthlySavings).toFixed(1);
            const yearlyROI = (monthlySavings * 12) - values.selectedPackage;

            return {
              description: `Avec <strong>${values.teamSize} personnes</strong> qui gagnent <strong>${values.hoursPerDay}h/jour</strong> chacune à <strong>${values.hourlyRate}€/h</strong> :`,
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

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm text-orange-400 mb-6">
                <Sparkles size={16} />
                <span className="font-semibold">Tarifs Transparents</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                {n8nData.pricing.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {n8nData.pricing.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {n8nData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-orange-500/50 shadow-[0_0_60px_rgba(251,146,60,0.3)] scale-105 md:scale-110'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm font-bold rounded-full shadow-lg">
                      ⭐ {pkg.cta}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {pkg.description}
                    </p>
                    <p className="text-xs text-orange-400 mb-6">
                      ⏱️ {pkg.timeframe}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        {pkg.price.split('€')[0].split('/')[0]}
                      </span>
                      {pkg.price.includes('€') && <span className="text-2xl text-gray-400">€{pkg.price.includes('/mois') ? '/mois' : ''}</span>}
                    </div>
                    {pkg.savingsExample && (
                      <p className="text-xs text-green-400 mt-3">
                        💡 {pkg.savingsExample}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-green-400" size={14} />
                        </div>
                        <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price}`)}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-orange-500/50'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* ROI Justification */}
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-full shadow-lg">
                  {n8nData.pricing.roi.title}
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {n8nData.pricing.roi.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed pt-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed p-6 bg-white/5 rounded-2xl border border-white/10">
                  <strong className="text-white">✨ {n8nData.pricing.note}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {n8nData.comparison.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {n8nData.comparison.subtitle}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 text-gray-400 font-semibold">Critère</th>
                      {n8nData.comparison.columns.map((col, index) => (
                        <th
                          key={index}
                          className={`p-6 text-center font-bold ${
                            col.highlighted ? 'text-orange-400' : 'text-gray-300'
                          }`}
                        >
                          {col.label}
                          {col.highlighted && <span className="block text-xs text-orange-500 mt-1">Notre Choix</span>}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {n8nData.comparison.categories.map((category, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300 font-medium">{category.name}</td>
                        <td className="p-6 text-center">{renderComparisonValue(category.zapier)}</td>
                        <td className="p-6 text-center bg-orange-500/5">{renderComparisonValue(category.n8n)}</td>
                        <td className="p-6 text-center">{renderComparisonValue(category.custom)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {n8nData.faq.title}
              </h2>
              <p className="text-xl text-gray-400">
                {n8nData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {n8nData.faq.items.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">{item.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-orange-400 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
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
