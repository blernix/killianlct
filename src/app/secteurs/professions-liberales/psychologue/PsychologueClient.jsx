"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import {
  CheckCircle,
  X,
  Shield,
  Lock,
  ArrowRight,
  Heart,
  ChevronUp,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { psychologueData } from './data';

export default function PsychologueClient() {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'site-psychologue';

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Liste des offres disponibles pour le formulaire
  const availableOffers = psychologueData.pricing.packages.map(pkg => `${pkg.name} - ${pkg.price} + ${pkg.monthly}`);

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* Hero Section - Design doux et apaisant */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a2e35] via-[#1f3640] to-[#243b45]">
          {/* Grille de fond subtile */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          {/* Gradient spot apaisant - teal/cyan doux */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* Badges en haut */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Shield className="text-teal-400" size={16} />
                  Conformité RGPD
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Lock className="text-cyan-400" size={16} />
                  Secret Professionnel
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Heart className="text-rose-300" size={16} />
                  Design Empathique
                </span>
              </div>

              {/* Titre principal */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {psychologueData.hero.title}{' '}
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                    {psychologueData.hero.titleGradient}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {psychologueData.hero.subtitle}
                </p>
              </div>

              {/* CTA principal */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a
                  href="#tarifs"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(94,234,212,0.4)] flex items-center gap-3"
                >
                  <Heart size={20} className="group-hover:scale-110 transition-transform text-teal-600" />
                  {psychologueData.hero.ctaLabel}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://maquette.psychologue.killian-lecrut.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <span className="flex flex-col items-start">
                    <span className="font-bold">Voir un exemple de maquette</span>
                    <span className="text-xs opacity-70">100% personnalisable</span>
                  </span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Micro-promesses en grille */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {psychologueData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <CheckCircle className="text-teal-400 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-300">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section "Les 3 Défis d'Image Professionnelle" */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#243b45] via-[#1f3640] to-[#1a2e35]">
          {/* Gradient spot */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Titre */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-300 mb-6">
                <Heart size={16} />
                <span className="font-medium">Les Limites des Annuaires</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                3 Limites des{' '}
                <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent">
                  Annuaires et Plateformes
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Pourquoi une simple fiche Doctolib ne reflète pas qui vous êtes vraiment
              </p>
            </div>

            {/* Défis en cartes verticales */}
            <div className="space-y-8">
              {psychologueData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-teal-500/30 transition-all duration-500"
                  >
                    {/* Numéro du défi */}
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                      {/* Colonne Problème */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-2xl p-6 h-full">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="text-amber-400" size={20} />
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Limite</span>
                              <h3 className="text-xl font-bold text-white mt-1">{challenge.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{challenge.problem}</p>
                        </div>
                      </div>

                      {/* Colonne Solution */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-teal-500/5 to-cyan-500/5 border border-teal-500/20 rounded-2xl p-6 h-full">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="text-teal-400" size={20} />
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-wider text-teal-400 font-bold">Votre Site</span>
                              <h3 className="text-xl font-bold text-white mt-1">Comment Votre Site Change Cela</h3>
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

        {/* Section Fonctionnalités */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#1a2e35] via-[#1f3640] to-[#243b45]">
          {/* Grille de fond */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Titre */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm text-teal-400 mb-6">
                <Sparkles size={16} />
                <span className="font-medium">Ce Qui Est Inclus</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Un Site Sobre et Professionnel,{' '}
                <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Pensé Pour Votre Pratique
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Chaque élément est conçu pour refléter votre authenticité professionnelle
              </p>
            </div>

            {/* Grille de fonctionnalités */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {psychologueData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(94,234,212,0.1)] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Badge pack requis */}
                    {feature.packRequired && (
                      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full text-white text-xs font-bold shadow-lg">
                        Pack {feature.packRequired}
                      </div>
                    )}

                    {/* Icône avec gradient */}
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-teal-400" size={24} />
                    </div>

                    {/* Contenu */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">
                      {feature.description}
                    </p>

                    {feature.technical && (
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-teal-400/70 italic flex items-center gap-1">
                          <Sparkles size={12} /> {feature.technical}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA après fonctionnalités */}
            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-6">
                Ces fonctionnalités sont <strong className="text-white">disponibles selon le pack choisi</strong>. Détails ci-dessous.
              </p>
              <a
                href="#tarifs"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(94,234,212,0.4)]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Voir les offres complètes
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#243b45] via-[#1f3640] to-[#1a2e35]">
          {/* Gradients multiples */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Titre */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm text-teal-400 mb-6">
                <Heart size={16} />
                <span className="font-medium">Tarifs Transparents</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Investissement pour{' '}
                <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Votre Site Professionnel
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {psychologueData.pricing.subtitle}
              </p>
            </div>

            {/* Grille de cartes tarifaires */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {psychologueData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-teal-500/50 shadow-[0_0_60px_rgba(94,234,212,0.2)] scale-105 md:scale-110'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(94,234,212,0.1)]'
                  }`}
                >
                  {/* Badge "Plus populaire" */}
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg">
                      {pkg.cta}
                    </div>
                  )}

                  {/* Header de la carte */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      {pkg.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        {pkg.price.split('€')[0]}
                      </span>
                      <span className="text-2xl text-gray-400">€</span>
                    </div>
                    <p className="text-teal-400 text-sm mt-2">+ {pkg.monthly}</p>
                  </div>

                  {/* Liste de fonctionnalités */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-teal-400" size={14} />
                        </div>
                        <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price} + ${pkg.monthly}`)}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(94,234,212,0.4)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-teal-500/50'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Justification des tarifs */}
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg">
                  {psychologueData.pricing.justification.title}
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {psychologueData.pricing.justification.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed pt-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note finale */}
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed p-6 bg-white/5 rounded-2xl border border-white/10">
                  <strong className="text-white">{psychologueData.pricing.note}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#1a2e35] via-[#1f3640] to-[#243b45]">
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {psychologueData.faq.title}
              </h2>
              <p className="text-xl text-gray-400">
                {psychologueData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {psychologueData.faq.items.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">{item.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-teal-400 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#243b45] to-[#1a2e35]">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-transparent to-cyan-600/10" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Prêt à Contrôler Votre{' '}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                Identité Professionnelle
              </span>{' '}
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Que vous soyez en installation ou déjà établi, nous créons le site qui reflète votre approche thérapeutique et votre éthique de soin. Échange gratuit de 30 minutes pour comprendre vos besoins et vous conseiller sur l'offre la plus adaptée.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal()}
                className="group px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(94,234,212,0.4)] flex items-center gap-3"
              >
                <Heart size={20} className="text-teal-600" />
                Prendre rendez-vous pour un échange gratuit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
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
