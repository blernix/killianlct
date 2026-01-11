"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import ROICalculator from "@/components/ROICalculator";
import { artisanData } from './data';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function ArtisanClient() {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'artisan';

  // Liste des offres disponibles pour le formulaire
  const availableOffers = artisanData.pricing.packages.map(pkg => `${pkg.name} - ${pkg.price}${pkg.monthly ? ` + ${pkg.monthly}` : ''}`);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Archivo:wght@300;400;500;600;700;800;900&display=swap');

        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.02em;
        }

        .font-archivo {
          font-family: 'Archivo', sans-serif;
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandWidth {
          from { width: 0; }
          to { width: 100%; }
        }

        .brick-gradient {
          background: linear-gradient(135deg, #B85C3D 0%, #D4724E 50%, #A0522D 100%);
        }

        .concrete-texture {
          background-image:
            linear-gradient(45deg, #2A2A2A 25%, transparent 25%),
            linear-gradient(-45deg, #2A2A2A 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #2A2A2A 75%),
            linear-gradient(-45deg, transparent 75%, #2A2A2A 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          opacity: 0.03;
        }

        .tool-shadow {
          box-shadow:
            0 4px 6px -1px rgba(184, 92, 61, 0.1),
            0 2px 4px -1px rgba(184, 92, 61, 0.06),
            inset 0 -1px 0 0 rgba(184, 92, 61, 0.2);
        }

        .card-craftsman {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .card-craftsman::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, #B85C3D, #D4724E);
          transition: height 0.3s ease;
        }

        .card-craftsman:hover::before {
          height: 100%;
        }

        .card-craftsman:hover {
          transform: translateX(8px);
          border-left-color: #B85C3D;
        }
      `}</style>

      <main className="bg-[#FAF7F4] font-archivo">
        <Header onOpenModal={openModal} />

        {/* HERO SECTION - Industrial Craftsman */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3A3A3A] via-[#4A4A4A] to-[#2A2A2A] pt-32 pb-20">
          {/* Concrete texture overlay */}
          <div className="absolute inset-0 concrete-texture" />

          {/* Diagonal stripe accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#B85C3D]/20 to-transparent skew-x-[-15deg] origin-top-right" />

          {/* Tool icons decorative (simulated with geometric shapes) */}
          <div className="absolute top-20 left-[10%] w-16 h-16 border-4 border-[#B85C3D]/30 rotate-45" />
          <div className="absolute bottom-32 right-[15%] w-20 h-20 bg-[#D4724E]/10 rotate-12" />
          <div className="absolute top-1/2 left-[5%] w-2 h-40 bg-[#B85C3D]/20 rotate-[-20deg]" />

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Eyebrow badge */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#B85C3D]/20 border-l-4 border-[#B85C3D] backdrop-blur-sm">
                  <span className="text-[#D4724E] font-bold text-sm uppercase tracking-wider">{artisanData.hero.eyebrow}</span>
                </div>
              </div>

              {/* Main title */}
              <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white text-center leading-[0.95] mb-8">
                {artisanData.hero.title}
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-10">
                {artisanData.hero.subtitle}
              </p>

              {/* CTA */}
              <div className="flex justify-center mb-16">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center gap-3 px-10 py-5 brick-gradient text-white font-bold text-lg uppercase tracking-wide tool-shadow hover:shadow-[0_8px_16px_rgba(184,92,61,0.4)] transition-all duration-300 hover:scale-105"
                >
                  {artisanData.hero.ctaLabel}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </button>
              </div>

              {/* Micro-promises grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {artisanData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm border-l-4 border-[#B85C3D] hover:bg-white/15 transition-all">
                    <Check className="text-[#D4724E] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm text-gray-200 font-medium">{promise}</span>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {artisanData.badges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 px-5 py-3 bg-[#B85C3D]/20 border border-[#B85C3D]/40 backdrop-blur-sm">
                      <Icon className="text-[#D4724E]" size={18} />
                      <span className="text-sm text-gray-200 font-semibold uppercase tracking-wide">{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGES SECTION */}
        <section className="relative py-24 px-4 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-[#B85C3D]/10 border-l-4 border-[#B85C3D] mb-6">
                <span className="font-bebas text-2xl text-[#B85C3D] tracking-wider">VOS DÉFIS</span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl text-[#2A2A2A] mb-6">
                3 Problèmes Qui{' '}
                <span className="text-[#B85C3D]">
                  Freinent Votre Activité
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vous êtes excellent dans votre métier, mais ces obstacles vous empêchent de développer votre entreprise
              </p>
            </div>

            <div className="space-y-6">
              {artisanData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div key={index} className="card-craftsman bg-[#FAF7F4] border-l-4 border-gray-200 shadow-lg hover:shadow-2xl p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 brick-gradient flex items-center justify-center tool-shadow">
                          <Icon className="text-white" size={36} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-6">
                        <h3 className="font-bebas text-3xl text-[#2A2A2A] tracking-wide">{challenge.title}</h3>

                        {/* Problem */}
                        <div className="space-y-3">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-l-4 border-red-500">
                            <span className="text-sm text-red-700 font-bold uppercase">Problème</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{challenge.problem}</p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-3">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border-l-4 border-green-600">
                            <span className="text-sm text-green-700 font-bold uppercase">Solution</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{challenge.solution}</p>
                        </div>

                        {/* Stat */}
                        <div className="flex items-center gap-4 p-5 bg-[#B85C3D]/10 border-l-4 border-[#B85C3D]">
                          <span className="text-4xl">📊</span>
                          <span className="text-[#B85C3D] font-bold text-lg">{challenge.stat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="relative py-24 px-4 bg-[#F5F1ED]">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-[#B85C3D]/10 border-l-4 border-[#B85C3D] mb-6">
                <span className="font-bebas text-2xl text-[#B85C3D] tracking-wider">MÉTIERS</span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl text-[#2A2A2A] mb-6">
                Optimisé Pour{' '}
                <span className="text-[#B85C3D]">
                  Tous les Corps de Métier
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque site est adapté aux spécificités de votre profession et optimisé pour les recherches locales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisanData.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="group bg-white border-l-4 border-gray-200 hover:border-[#B85C3D] shadow-md hover:shadow-xl transition-all duration-300 p-6">
                    <div className="w-14 h-14 brick-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bebas text-2xl text-[#2A2A2A] mb-3 tracking-wide">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.slice(0, 2).map((keyword, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-[#B85C3D]/10 text-[#B85C3D] font-semibold uppercase tracking-wide">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="relative py-24 px-4 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-[#B85C3D]/10 border-l-4 border-[#B85C3D] mb-6">
                <span className="font-bebas text-2xl text-[#B85C3D] tracking-wider">FONCTIONNALITÉS</span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl text-[#2A2A2A] mb-6">
                Conçu Pour{' '}
                <span className="text-[#B85C3D]">
                  Générer des Chantiers
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque élément de votre site a un objectif : transformer les visiteurs en clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artisanData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-5 p-6 bg-[#FAF7F4] border-l-4 border-gray-200 hover:border-[#B85C3D] shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 flex-shrink-0 brick-gradient flex items-center justify-center tool-shadow">
                      <Icon className="text-white" size={26} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bebas text-xl text-[#2A2A2A] mb-2 tracking-wide">{feature.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{feature.description}</p>
                      <span className="text-xs text-[#B85C3D] font-semibold uppercase tracking-wide">{feature.technical}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA after features */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6 text-lg">
                Ces fonctionnalités sont <strong className="text-[#2A2A2A]">disponibles selon le pack choisi</strong>. Détails ci-dessous.
              </p>
              <a
                href="#tarifs"
                className="group inline-flex items-center gap-3 px-10 py-5 brick-gradient text-white font-bold text-lg uppercase tracking-wide tool-shadow hover:shadow-[0_8px_16px_rgba(184,92,61,0.4)] transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Voir les tarifs
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="tarifs" className="relative py-24 px-4 bg-gradient-to-br from-[#FAF7F4] to-[#F5F1ED]">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-[#B85C3D]/10 border-l-4 border-[#B85C3D] mb-6">
                <span className="font-bebas text-2xl text-[#B85C3D] tracking-wider">TARIFS</span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl text-[#2A2A2A] mb-4">
                {artisanData.pricing.title}
              </h2>
              <p className="text-xl text-gray-600">
                {artisanData.pricing.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {artisanData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white shadow-lg transition-all duration-500 ${
                    pkg.highlighted
                      ? 'border-4 border-[#B85C3D] scale-105 shadow-2xl'
                      : 'border border-gray-200 hover:border-[#B85C3D] hover:shadow-xl'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 brick-gradient text-white font-bold uppercase tracking-wide tool-shadow">
                      {pkg.cta}
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="font-bebas text-3xl text-[#2A2A2A] mb-3 tracking-wide">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    <p className="font-bebas text-4xl text-[#B85C3D] mb-2">{pkg.price}</p>
                    {pkg.monthly && <p className="text-[#B85C3D] font-bold">+ {pkg.monthly}</p>}
                  </div>

                  <div className="px-8 pb-8">
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <Check className="text-[#B85C3D] flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={openModal}
                      className={`w-full py-4 px-6 font-bold uppercase tracking-wide transition-all duration-300 ${
                        pkg.highlighted
                          ? 'brick-gradient text-white tool-shadow hover:shadow-[0_8px_16px_rgba(184,92,61,0.4)] hover:scale-105'
                          : 'bg-gray-100 hover:bg-[#B85C3D]/10 text-[#2A2A2A] border-2 border-gray-200 hover:border-[#B85C3D]'
                      }`}
                    >
                      {pkg.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="bg-white border-l-4 border-[#B85C3D] shadow-lg p-8 text-center mb-8">
              <p className="text-gray-700 text-lg">{artisanData.pricing.note}</p>
            </div>

            {/* Justification */}
            <div className="bg-gradient-to-br from-[#B85C3D]/10 to-[#D4724E]/10 border-l-4 border-[#B85C3D] p-10">
              <h3 className="font-bebas text-3xl text-[#2A2A2A] mb-6 text-center tracking-wide">{artisanData.pricing.justification.title}</h3>
              <ul className="space-y-4 max-w-3xl mx-auto">
                {artisanData.pricing.justification.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-[#B85C3D] flex-shrink-0 mt-1" size={22} />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="relative py-24 px-4 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-[#B85C3D]/10 border-l-4 border-[#B85C3D] mb-6">
                <span className="font-bebas text-2xl text-[#B85C3D] tracking-wider">COMPARAISON</span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl text-[#2A2A2A] mb-4">
                {artisanData.comparison.title}
              </h2>
              <p className="text-xl text-gray-600">
                {artisanData.comparison.subtitle}
              </p>
            </div>

            <div className="bg-[#FAF7F4] border border-gray-200 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#3A3A3A] to-[#2A2A2A]">
                    <tr>
                      <th className="text-left p-6 text-gray-300 font-bebas text-xl tracking-wider">Critère</th>
                      <th className="text-center p-6 text-[#D4724E] font-bebas text-xl tracking-wider">{artisanData.comparison.labels.us}</th>
                      <th className="text-center p-6 text-gray-300 font-bebas text-xl tracking-wider">{artisanData.comparison.labels.facebook}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artisanData.comparison.categories.map((category, index) => (
                      <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-[#B85C3D]/5 transition-colors">
                        <td className="p-6 text-[#2A2A2A] font-semibold">{category.name}</td>
                        <td className="p-6 text-center">
                          {typeof category.us === 'boolean' ? (
                            category.us ? <Check className="text-green-600 mx-auto" size={26} /> : <span className="text-red-500 text-2xl font-bold">✗</span>
                          ) : (
                            <span className="text-[#B85C3D] font-bold">{category.us}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof category.facebook === 'boolean' ? (
                            category.facebook ? <Check className="text-green-600 mx-auto" size={26} /> : <span className="text-red-500 text-2xl font-bold">✗</span>
                          ) : (
                            <span className="text-gray-600">{category.facebook}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ROI CALCULATOR */}
        <ROICalculator
          theme="artisan"
          title="CALCULEZ VOTRE RETOUR SUR INVESTISSEMENT"
          subtitle="Simulation simple pour évaluer la rentabilité réelle de votre site"
          inputs={[
            { name: 'pricePerJob', label: 'Prix moyen par chantier', defaultValue: 800, min: 200, max: 10000, step: 100 },
            { name: 'jobsPerMonth', label: 'Nouveaux chantiers visés/mois', defaultValue: 3, min: 1, max: 20, step: 1 },
          ]}
          packageOptions={{
            label: 'Forfait choisi',
            defaultValue: 2000,
            options: [
              { value: 2000, label: 'Essentiel - 1 500-2 500€ (moyenne 2 000€)' },
              { value: 4000, label: 'Professionnel - 3 500-5 000€ (moyenne 4 000€)' },
            ],
          }}
          calculate={(values) => {
            const monthlyRevenue = values.pricePerJob * values.jobsPerMonth;
            const monthsToROI = Math.ceil(values.selectedPackage / monthlyRevenue);
            const yearlyRevenue = monthlyRevenue * 12;

            return {
              description: `Si votre site vous amène <strong>${values.jobsPerMonth} nouveaux chantiers/mois</strong> à <strong>${values.pricePerJob}€</strong> le chantier :`,
              metrics: [
                { label: 'CA mensuel supplémentaire', value: `${monthlyRevenue.toLocaleString()}€` },
                { label: 'Site rentabilisé en', value: `${monthsToROI} mois`, highlight: true },
                { label: 'CA supplémentaire 1ère année', value: `${yearlyRevenue.toLocaleString()}€` },
              ],
              cta: {
                label: 'Obtenir mon devis gratuit',
                icon: ArrowRight,
                onClick: () => openModal(),
              },
            };
          }}
        />

        {/* FAQ SECTION */}
        <section className="relative py-24 px-4 bg-[#FAF7F4]">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-[#B85C3D]/10 border-l-4 border-[#B85C3D] mb-6">
                <span className="font-bebas text-2xl text-[#B85C3D] tracking-wider">FAQ</span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl text-[#2A2A2A] mb-4">
                {artisanData.faq.title}
              </h2>
              <p className="text-xl text-gray-600">
                {artisanData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {artisanData.faq.items.map((item, index) => (
                <div key={index} className="bg-white border-l-4 border-gray-200 hover:border-[#B85C3D] shadow-md transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF7F4] transition-colors"
                  >
                    <span className="font-bebas text-xl text-[#2A2A2A] pr-4 tracking-wide">{item.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-[#B85C3D] flex-shrink-0" size={28} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={28} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA final */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6 text-lg">
                Prêt à développer votre activité avec un site professionnel ?
              </p>
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-3 px-10 py-5 brick-gradient text-white font-bold text-lg uppercase tracking-wide tool-shadow hover:shadow-[0_8px_16px_rgba(184,92,61,0.4)] transition-all duration-300 hover:scale-105"
              >
                Discuter de mon projet
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(formType)}>
        <ContactForm formType={formType} onClose={closeModal} initialData={initialData} availableOffers={availableOffers} />
      </Modal>
    </>
  );
}
