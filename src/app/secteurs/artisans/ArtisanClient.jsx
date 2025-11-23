"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import ROICalculator from "@/components/ROICalculator";
import { artisanData } from './data';
import { ArrowRight, Check, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';

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
      <main className="bg-black">
        <Header onOpenModal={openModal} />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
          {/* Grille de fond */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          {/* Gradient spot orange */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]" />

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto text-center">
              {/* Eyebrow */}
              <p className="text-orange-400 font-semibold mb-4">{artisanData.hero.eyebrow}</p>

              {/* Titre principal */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                {artisanData.hero.title}
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {artisanData.hero.subtitle}
              </p>

              {/* CTA */}
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] mb-12"
              >
                {artisanData.hero.ctaLabel}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              {/* Micro-promesses en grille */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {artisanData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <Check className="text-orange-400 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-300">{promise}</span>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {artisanData.badges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                      <Icon className="text-orange-400" size={16} />
                      <span className="text-sm text-orange-300 font-medium">{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGES SECTION */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                3 Problèmes Qui{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Freinent Votre Activité
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Vous êtes excellent dans votre métier, mais ces obstacles vous empêchent de développer votre entreprise
              </p>
            </div>

            <div className="space-y-8">
              {artisanData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div key={index} className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Icône */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                          <Icon className="text-orange-400" size={32} />
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 space-y-6">
                        <h3 className="text-2xl font-bold text-white">{challenge.title}</h3>

                        {/* Problème */}
                        <div className="space-y-2">
                          <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
                            <span className="text-sm text-red-400 font-semibold">❌ Problème</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{challenge.problem}</p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-2">
                          <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                            <span className="text-sm text-green-400 font-semibold">✅ Solution</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{challenge.solution}</p>
                        </div>

                        {/* Stat */}
                        <div className="flex items-center gap-3 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                          <span className="text-3xl">📊</span>
                          <span className="text-orange-300 font-semibold">{challenge.stat}</span>
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
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Nos Sites Sont Optimisés Pour{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Tous les Corps de Métier
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Chaque site est adapté aux spécificités de votre profession et optimisé pour les recherches locales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisanData.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                    <Icon className="text-orange-400 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.slice(0, 2).map((keyword, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-orange-500/10 text-orange-300 rounded-full">
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
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Fonctionnalités Conçues Pour{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Générer des Chantiers
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Chaque élément de votre site a un objectif : transformer les visiteurs en clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artisanData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
                    <div className="w-12 h-12 flex-shrink-0 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center">
                      <Icon className="text-orange-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                      <span className="text-xs text-orange-400">{feature.technical}</span>
                    </div>
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(234,88,12,0.6)]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Voir les tarifs
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {artisanData.pricing.title}
              </h2>
              <p className="text-xl text-gray-400">
                {artisanData.pricing.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {artisanData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-orange-500/50 shadow-[0_0_60px_rgba(234,88,12,0.3)] scale-105'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm font-bold rounded-full shadow-lg">
                      ⭐ {pkg.cta}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{pkg.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                    <p className="text-3xl font-bold text-white">{pkg.price}</p>
                    {pkg.monthly && <p className="text-orange-400 font-medium mt-2">+ {pkg.monthly}</p>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={openModal}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-orange-500/50'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10 text-center mb-8">
              <p className="text-gray-400">{artisanData.pricing.note}</p>
            </div>

            {/* Justification */}
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{artisanData.pricing.justification.title}</h3>
              <ul className="space-y-4 max-w-3xl mx-auto">
                {artisanData.pricing.justification.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {artisanData.comparison.title}
              </h2>
              <p className="text-xl text-gray-400">
                {artisanData.comparison.subtitle}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 text-gray-400 font-semibold">Critère</th>
                      <th className="text-center p-6 text-orange-400 font-bold">{artisanData.comparison.labels.us}</th>
                      <th className="text-center p-6 text-gray-400 font-semibold">{artisanData.comparison.labels.facebook}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artisanData.comparison.categories.map((category, index) => (
                      <tr key={index} className="border-b border-white/10 last:border-b-0">
                        <td className="p-6 text-white">{category.name}</td>
                        <td className="p-6 text-center">
                          {typeof category.us === 'boolean' ? (
                            category.us ? <Check className="text-green-400 mx-auto" size={24} /> : <span className="text-red-400 text-2xl">✗</span>
                          ) : (
                            <span className="text-orange-400 font-semibold">{category.us}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof category.facebook === 'boolean' ? (
                            category.facebook ? <Check className="text-green-400 mx-auto" size={24} /> : <span className="text-red-400 text-2xl">✗</span>
                          ) : (
                            <span className="text-gray-400">{category.facebook}</span>
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

        {/* CALCULATEUR ROI */}
        <ROICalculator
          title={
            <>
              Calculez Votre{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Retour sur Investissement
              </span>
            </>
          }
          subtitle="Simulation simple pour évaluer la rentabilité réelle de votre site"
          color="orange"
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
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {artisanData.faq.title}
              </h2>
              <p className="text-xl text-gray-400">
                {artisanData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {artisanData.faq.items.map((item, index) => (
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

            {/* CTA final */}
            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-6">
                Prêt à développer votre activité avec un site professionnel ?
              </p>
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(234,88,12,0.6)]"
              >
                Discuter de mon projet
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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
