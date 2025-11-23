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
  Search,
  Lock,
  ArrowRight,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Activity,
  ExternalLink
} from 'lucide-react';
import { osteopatheData } from './data';

export default function OsteopatheClient() {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'site-osteopathe';

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Liste des offres disponibles pour le formulaire
  const availableOffers = osteopatheData.pricing.packages.map(pkg => `${pkg.name} - ${pkg.price} + ${pkg.monthly}`);

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
          {/* Grille de fond subtile */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          {/* Gradient spot bleu/vert (santé) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-600/15 rounded-full blur-[100px]" />

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* Badges de conformité en haut */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Activity className="text-blue-400" size={16} />
                  40 000+ ostéopathes en France
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Shield className="text-emerald-400" size={16} />
                  Conforme RGPD
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Lock className="text-blue-400" size={16} />
                  Secret Professionnel
                </span>
              </div>

              {/* Titre principal */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Site Web pour{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Ostéopathe
                  </span>
                </h1>
                <p className="text-2xl sm:text-3xl text-gray-200 font-medium">
                  {osteopatheData.hero.subtitle}
                </p>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  {osteopatheData.hero.description}
                </p>
              </div>

              {/* CTA principal + démo */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="group relative px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center gap-3"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  {osteopatheData.hero.ctaLabel}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={osteopatheData.hero.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="flex flex-col items-start">
                    <span>Voir un exemple de maquette</span>
                    <span className="text-xs font-normal opacity-70">100% personnalisable</span>
                  </span>
                </a>
              </div>

              {/* Micro-promesses en grille */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {osteopatheData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-300">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Défis/Solutions */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          {/* Gradient spot gauche */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[150px]" />
          {/* Gradient spot droit */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Titre */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-sm text-red-400 mb-6">
                <AlertCircle size={16} />
                <span className="font-semibold">Les Défis à Surmonter</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                3 Obstacles Qui Freinent{' '}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  le Développement de Votre Cabinet
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Et comment un site web professionnel résout chacun d'eux
              </p>
            </div>

            {/* Défis en cartes verticales */}
            <div className="space-y-8">
              {osteopatheData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500"
                  >
                    {/* Numéro du défi */}
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                      {/* Colonne Problème */}
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

                      {/* Colonne Solution */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-2xl p-6 h-full">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="text-emerald-400" size={20} />
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Notre Solution</span>
                              <h3 className="text-xl font-bold text-white mt-1">Comment Nous Résolvons Ça</h3>
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

            {/* CTA après défis */}
            <div className="mt-16 text-center">
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                Discuter de mon projet
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Section Fonctionnalités */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          {/* Grille de fond */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Titre */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Sparkles size={16} />
                <span className="font-semibold">Fonctionnalités Essentielles</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Un Site Conçu Pour{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Développer Votre Cabinet
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Chaque élément est pensé pour attirer et rassurer vos futurs patients
              </p>
            </div>

            {/* Grille de fonctionnalités */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {osteopatheData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Badge numéro */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icône avec gradient */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-blue-400" size={24} />
                    </div>

                    {/* Contenu */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">
                      {feature.description}
                    </p>

                    {feature.technical && (
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-blue-400/70 italic">
                          ⚡ {feature.technical}
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
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

        {/* Calculateur ROI */}
        <ROICalculator
          title={
            <>
              Calculez Votre{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Retour sur Investissement
              </span>
            </>
          }
          subtitle={osteopatheData.roi.subtitle}
          color="cyan"
          inputs={[
            { name: 'pricePerSession', label: 'Prix moyen d\'une séance (€)', defaultValue: 55, min: 40, max: 100, step: 5 },
            { name: 'clientsPerMonth', label: 'Nouveaux patients visés/mois', defaultValue: 3, min: 1, max: 20, step: 1 },
          ]}
          packageOptions={{
            label: 'Forfait choisi',
            defaultValue: 1500,
            options: [
              { value: 1500, label: 'Essentiel - 1 500€' },
              { value: 2500, label: 'Professionnel - 2 500€' },
              { value: 4000, label: 'Premium - 4 000€' },
            ],
          }}
          calculate={(values) => {
            const monthlyRevenue = values.pricePerSession * values.clientsPerMonth;
            const monthsToROI = (values.selectedPackage / monthlyRevenue).toFixed(1);
            const yearlyRevenue = monthlyRevenue * 12;
            const yearlyROI = yearlyRevenue - values.selectedPackage;

            return {
              description: `Si votre site vous amène <strong>${values.clientsPerMonth} nouveaux patients/mois</strong> à <strong>${values.pricePerSession}€</strong> la séance :`,
              metrics: [
                { label: 'CA mensuel supplémentaire', value: `${monthlyRevenue.toLocaleString()}€` },
                { label: 'CA annuel supplémentaire', value: `${yearlyRevenue.toLocaleString()}€` },
                { label: 'Site rentabilisé en', value: `${monthsToROI} mois`, highlight: true },
                { label: 'ROI sur 12 mois', value: `+${yearlyROI > 0 ? yearlyROI.toLocaleString() : 0}€`, icon: TrendingUp, highlight: true },
              ],
              note: osteopatheData.roi.note,
              cta: {
                label: 'Obtenir mon devis pour cette offre',
                icon: ArrowRight,
                onClick: () => {
                  const packageName = values.selectedPackage === 1500 ? 'Pack Essentiel - 1 500€ + 35€/mois' :
                                      values.selectedPackage === 2500 ? 'Pack Professionnel - 2 500€ + 50€/mois' :
                                      'Pack Premium - 4 000€ + 75€/mois';
                  openModal(packageName);
                },
              },
            };
          }}
        />

        {/* Section Comparatif */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {osteopatheData.comparison.title}
              </h2>
              <p className="text-xl text-gray-400">
                {osteopatheData.comparison.subtitle}
              </p>
            </div>

            {/* Tableau comparatif */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 text-center p-4 border-b border-white/10 bg-white/5">
                <div className="text-gray-400 font-medium">Critère</div>
                <div className="text-white font-bold">Site Professionnel</div>
                <div className="text-gray-400 font-medium">Fiche Doctolib</div>
              </div>
              {osteopatheData.comparison.categories.map((cat, index) => (
                <div key={index} className="grid grid-cols-3 text-center p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                  <div className="text-gray-300 font-medium text-left pl-4">{cat.name}</div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="text-emerald-400" size={18} />
                    <span className="text-emerald-400 text-sm">{cat.us}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <X className="text-red-400" size={18} />
                    <span className="text-red-400 text-sm">{cat.doctolib}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
              {osteopatheData.comparison.note}
            </p>
          </div>
        </section>

        {/* Section Tarifs */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
          {/* Gradients multiples */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Titre */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Sparkles size={16} />
                <span className="font-semibold">Tarifs Transparents</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                {osteopatheData.pricing.title.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {osteopatheData.pricing.title.split(' ').slice(2).join(' ')}
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {osteopatheData.pricing.subtitle}
              </p>
            </div>

            {/* Grille de cartes tarifaires */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {osteopatheData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-blue-500/50 shadow-[0_0_60px_rgba(59,130,246,0.3)] scale-105 md:scale-110'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                  }`}
                >
                  {/* Badge "Le plus choisi" */}
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg">
                      ⭐ {pkg.cta}
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
                        {pkg.price.replace('€', '')}
                      </span>
                      <span className="text-2xl text-gray-400">€</span>
                    </div>
                    <p className="text-blue-400 font-medium mt-2">+ {pkg.monthly}</p>
                  </div>

                  {/* Liste de fonctionnalités */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-emerald-400" size={14} />
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
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-blue-500/50'
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
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-full shadow-lg">
                  💡 {osteopatheData.pricing.justification.title}
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {osteopatheData.pricing.justification.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
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
                  <strong className="text-white">✨ {osteopatheData.pricing.note}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {osteopatheData.faq.title}
              </h2>
              <p className="text-xl text-gray-400">
                {osteopatheData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {osteopatheData.faq.items.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">{item.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-blue-400 flex-shrink-0" size={24} />
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
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-black to-gray-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {osteopatheData.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              {osteopatheData.cta.subtitle}
            </p>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              {osteopatheData.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal()}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] flex items-center gap-3"
              >
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                {osteopatheData.cta.ctaPrimary}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openModal()}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 hover:border-blue-500/50 transition-all duration-300"
              >
                {osteopatheData.cta.ctaSecondary}
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
