"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import { FAQ } from '@/components/FAQ';
import {
  CheckCircle,
  AlertCircle,
  X,
  TrendingUp,
  Shield,
  Terminal,
  RefreshCw,
  ArrowRight,
  Sparkles,
  Code,
  Zap,
  ChevronRight
} from 'lucide-react';
import { applicationWebData } from './data';

export default function ApplicationWebClient() {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [teamSize, setTeamSize] = useState(5);
  const [hoursSaved, setHoursSaved] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [selectedPackage, setSelectedPackage] = useState(35000);
  const formType = 'application-web';

  // Liste des offres disponibles pour le formulaire
  const availableOffers = applicationWebData.pricing.packages.map(pkg => `${pkg.name} - ${pkg.price}`);

  // Calculs ROI
  const monthlyTimeSaved = teamSize * hoursSaved * 4; // heures/mois
  const monthlySavings = monthlyTimeSaved * hourlyRate;
  const monthsToROI = (selectedPackage / monthlySavings).toFixed(1);
  const yearlyROI = (monthlySavings * 12) - selectedPackage;

  // Préparer les données FAQ
  const faqItems = applicationWebData.faq.items.map((item, index) => ({
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
          {/* Grille de fond */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          {/* Gradient spot cyan */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]" />

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* Badges en haut */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Terminal className="text-cyan-400" size={16} />
                  Code Source 100% à Vous
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Shield className="text-green-400" size={16} />
                  RGPD Natif
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <RefreshCw className="text-blue-400" size={16} />
                  Architecture Évolutive
                </span>
              </div>

              {/* Titre principal */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {applicationWebData.hero.title.split('Transforme').map((part, i) =>
                    i === 0 ? part : (
                      <span key={i}>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                          Transforme
                        </span>
                        {part}
                      </span>
                    )
                  )}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {applicationWebData.hero.subtitle}
                </p>
              </div>

              {/* CTA principal */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => openModal()}
                  className="group relative px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] flex items-center gap-3"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  {applicationWebData.hero.ctaLabel}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 border-2 border-gray-900" />
                  </div>
                  <span className="text-sm text-gray-300">
                    <strong className="text-white">20+ apps</strong> développées
                  </span>
                </div>
              </div>

              {/* Micro-promesses */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {applicationWebData.hero.microPromises.map((promise, i) => (
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
                Les 3 Défis des{' '}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Logiciels Standards
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Et comment une application sur-mesure résout chacun définitivement
              </p>
            </div>

            <div className="space-y-8">
              {applicationWebData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500"
                  >
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                      {/* Problème */}
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

                      {/* Solution */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-6 h-full">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="text-green-400" size={20} />
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-wider text-green-400 font-bold">Notre Solution</span>
                              <h3 className="text-xl font-bold text-white mt-1">Application Sur-Mesure</h3>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-6">
                <Code size={16} />
                <span className="font-semibold">Notre Méthode</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {applicationWebData.process.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {applicationWebData.process.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {applicationWebData.process.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Numéro et icône */}
                      <div className="flex lg:flex-col items-center lg:items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="text-cyan-400" size={28} />
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {step.title}
                          </h3>
                          <span className="text-sm text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Livrables */}
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
              >
                Lancer mon projet maintenant
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Section Cas d'usage */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Sparkles size={16} />
                <span className="font-semibold">Nos Spécialités</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {applicationWebData.useCases.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {applicationWebData.useCases.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationWebData.useCases.cases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-cyan-400" size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    <div className="pt-3 border-t border-white/10">
                      <p className="text-xs text-cyan-400/70 italic">
                        💼 {useCase.examples}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Stack Technique */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400 mb-6">
                <Zap size={16} />
                <span className="font-semibold">Technologies</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {applicationWebData.techStack.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {applicationWebData.techStack.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationWebData.techStack.categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-xs text-gray-400 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.techs.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-purple-500/10 border border-purple-500/30 px-2 py-1 rounded text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Calculateur ROI */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 mb-6">
                <TrendingUp size={16} />
                <span className="font-semibold">Simulation Personnalisée</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Calculez Votre{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Retour sur Investissement
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Combien votre application peut-elle vous faire économiser ?
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Taille de l'équipe
                  </label>
                  <input
                    type="number"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Heures gagnées/pers./semaine
                  </label>
                  <input
                    type="number"
                    value={hoursSaved}
                    onChange={(e) => setHoursSaved(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Coût horaire (€)
                  </label>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Forfait choisi
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all [&>option]:bg-gray-900"
                  >
                    <option value={15000}>MVP - 15 000€</option>
                    <option value={35000}>Complet - 35 000€</option>
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl p-8 border border-green-500/30">
                <p className="text-gray-300 text-center mb-6">
                  Avec <strong className="text-white">{teamSize} personnes</strong> qui gagnent{' '}
                  <strong className="text-white">{hoursSaved}h/semaine</strong> chacune à{' '}
                  <strong className="text-white">{hourlyRate}€/h</strong> :
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">Économie mensuelle</p>
                    <p className="text-3xl font-bold text-white">
                      {monthlySavings.toLocaleString()}€
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">App rentabilisée en</p>
                    <p className="text-3xl font-bold text-green-400">
                      {monthsToROI} mois
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">ROI sur 12 mois</p>
                    <p className="text-3xl font-bold text-green-400 flex items-center justify-center gap-2">
                      <TrendingUp size={28} />
                      +{yearlyROI > 0 ? yearlyROI.toLocaleString() : 0}€
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <button
                  onClick={() => openModal(selectedPackage === 15000 ? 'MVP Simple - 15 000€' : 'Application Métier Complète - 35 000€')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]"
                >
                  Obtenir mon devis pour cette offre
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 mb-6">
                <Sparkles size={16} />
                <span className="font-semibold">Tarifs Transparents</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                {applicationWebData.pricing.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {applicationWebData.pricing.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {applicationWebData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-cyan-500/50 shadow-[0_0_60px_rgba(34,211,238,0.3)] scale-105 md:scale-110'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg">
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
                    <p className="text-xs text-cyan-400 mb-6">
                      ⏱️ {pkg.timeframe}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        {pkg.price.split('€')[0]}
                      </span>
                      {pkg.price.includes('€') && <span className="text-2xl text-gray-400">€</span>}
                    </div>
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
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan-500/50'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Maintenance */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {applicationWebData.pricing.maintenance.title}
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {applicationWebData.pricing.maintenance.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {applicationWebData.pricing.maintenance.plans.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                    <p className="text-3xl font-bold text-cyan-400 mb-6">{plan.price}</p>
                    <ul className="space-y-3">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed p-6 bg-white/5 rounded-2xl border border-white/10">
                <strong className="text-white">✨ {applicationWebData.pricing.note}</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Comparaison Build vs Buy */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {applicationWebData.comparison.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {applicationWebData.comparison.subtitle}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 text-gray-400 font-semibold">Critère</th>
                      {applicationWebData.comparison.columns.map((col, index) => (
                        <th
                          key={index}
                          className={`p-6 text-center font-bold ${
                            col.highlighted ? 'text-cyan-400' : 'text-gray-300'
                          }`}
                        >
                          {col.label}
                          {col.highlighted && <span className="block text-xs text-cyan-500 mt-1">Recommandé</span>}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {applicationWebData.comparison.categories.map((category, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300 font-medium">{category.name}</td>
                        <td className="p-6 text-center">{renderComparisonValue(category.saas)}</td>
                        <td className="p-6 text-center bg-cyan-500/5">{renderComparisonValue(category.custom)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          title={applicationWebData.faq.title}
          subtitle={applicationWebData.faq.subtitle}
          faqItems={faqItems}
        />

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
