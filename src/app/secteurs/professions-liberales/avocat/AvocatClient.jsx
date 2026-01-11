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
  Scale,
  Lock,
  ArrowRight,
  Sparkles,
  ChevronUp,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { avocatData } from './data';

export default function AvocatClient() {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'site-avocat';

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Liste des offres disponibles pour le formulaire
  const availableOffers = avocatData.pricing.packages.map(pkg => `${pkg.name} - ${pkg.price}${pkg.monthly ? ` + ${pkg.monthly}` : ''}`);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes goldShine {
          0%, 100% { opacity: 0.5; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gold-accent {
          background: linear-gradient(135deg, #C5A572 0%, #D4AF37 50%, #B8986F 100%);
        }

        .text-gold {
          color: #C5A572;
        }

        .border-gold {
          border-color: #C5A572;
        }

        .card-premium {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-premium:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(197, 165, 114, 0.15);
        }

        .divider-gold {
          height: 2px;
          background: linear-gradient(90deg, transparent, #C5A572, transparent);
        }
      `}</style>

      <main className="bg-[#FAF9F6] font-outfit">
        <Header onOpenModal={openModal} />

        {/* Hero Section - Executive & Professional */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#2D4263] pt-32 pb-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#C5A572]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />

          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A572' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-[#C5A572]/30 rounded-full text-sm text-[#FAF9F6] font-medium">
                  <Scale className="text-[#C5A572]" size={16} />
                  Conforme CNB 2023
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-[#C5A572]/30 rounded-full text-sm text-[#FAF9F6] font-medium">
                  <Shield className="text-[#C5A572]" size={16} />
                  RGPD Natif
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-[#C5A572]/30 rounded-full text-sm text-[#FAF9F6] font-medium">
                  <Lock className="text-[#C5A572]" size={16} />
                  Secret Professionnel
                </span>
              </div>

              {/* Main Heading */}
              <div className="text-center space-y-8 mb-14">
                <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                  Un Site d'Avocat{' '}
                  <span className="text-[#C5A572] italic">Conforme CNB 2023</span>{' '}
                  Qui Convertit
                </h1>
                <p className="text-xl sm:text-2xl text-[#E5E5E5] max-w-3xl mx-auto leading-relaxed">
                  Attirez <strong className="text-white">3x plus de clients qualifiés</strong> sans enfreindre la déontologie.
                  Site internet conforme RGPD, optimisé pour le référencement local, et conçu pour transformer vos visiteurs en rendez-vous.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button
                  onClick={() => openModal()}
                  className="group relative px-8 py-4 gold-accent text-[#0A1628] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(197,165,114,0.4)] flex items-center gap-3"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  {avocatData.hero.ctaLabel}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={avocatData.hero.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white hover:bg-white/20 hover:border-[#C5A572]/50 transition-all flex items-center gap-2 font-semibold"
                >
                  <span className="flex flex-col items-start">
                    <span>Voir un exemple de maquette</span>
                    <span className="text-xs opacity-70 font-normal">100% personnalisable</span>
                  </span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Micro-promises Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {avocatData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 hover:border-[#C5A572]/30 transition-all duration-300">
                    <CheckCircle className="text-[#C5A572] flex-shrink-0" size={20} />
                    <span className="text-sm text-[#E5E5E5] font-medium">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conformity Section - Premium Cards */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          {/* Decorative gold line */}
          <div className="absolute top-0 left-0 right-0 divider-gold" />

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-full text-sm text-[#C5A572] mb-6 font-semibold">
                <Shield size={16} />
                <span>Votre Protection Juridique</span>
              </div>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#0A1628] mb-6">
                Conformité{' '}
                <span className="text-[#C5A572] italic">CNB 2023 & RGPD</span>{' '}
                Garantie
              </h2>
              <p className="text-xl text-[#2F3640] max-w-3xl mx-auto leading-relaxed">
                Un site d'avocat ne se crée pas comme n'importe quel site web. Nous maîtrisons les obligations du nouveau Code de déontologie, du Vade-mecum Octobre 2023, et du RGPD adapté au secret professionnel.
              </p>
            </div>

            {/* Conformity Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {avocatData.conformity.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-[#FAF9F6] border-2 border-[#E5E2DD] rounded-2xl p-8 hover:border-[#C5A572]/50 hover:shadow-xl transition-all duration-500 card-premium"
                  >
                    {/* Gold accent on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                    <div className="relative flex gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#C5A572]/20 to-[#D4AF37]/20 backdrop-blur-sm border border-[#C5A572]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-[#C5A572]" size={24} />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-playfair text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#C5A572] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#C5A572] mb-3 font-semibold">
                          📋 {item.reference}
                        </p>
                        <p className="text-[#2F3640] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Conformity Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {avocatData.badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="group relative inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-[#E5E2DD] rounded-full hover:border-[#C5A572]/50 hover:bg-[#FAF9F6] transition-all duration-300"
                  >
                    <Icon className="text-[#C5A572] group-hover:scale-110 transition-transform" size={18} />
                    <span className="text-[#0A1628] font-semibold text-sm">{badge.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center gap-3 px-8 py-4 gold-accent text-[#0A1628] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(197,165,114,0.4)]"
              >
                Vérifier la conformité de mon projet
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Challenges Section - Problem/Solution */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#F8F7F3] to-[#FAF9F6]">
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-50 border border-red-200 rounded-full text-sm text-red-600 mb-6 font-semibold">
                <AlertCircle size={16} />
                <span>Les Pièges à Éviter</span>
              </div>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#0A1628] mb-6">
                Les 3 Défis Majeurs des{' '}
                <span className="text-[#C5A572] italic">Cabinets d'Avocats</span>
              </h2>
              <p className="text-xl text-[#2F3640] max-w-2xl mx-auto">
                Et comment votre site web résout chacun d'eux définitivement
              </p>
            </div>

            {/* Challenges Cards */}
            <div className="space-y-8">
              {avocatData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-1 shadow-lg hover:shadow-2xl transition-all duration-500 card-premium"
                  >
                    {/* Challenge Number Badge */}
                    <div className="absolute -top-5 -left-5 w-14 h-14 gold-accent rounded-2xl flex items-center justify-center text-[#0A1628] font-bold text-2xl shadow-lg">
                      {index + 1}
                    </div>

                    <div className="grid md:grid-cols-2 gap-1 p-8">
                      {/* Problem Side */}
                      <div className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100">
                        <div className="flex items-start gap-3 mb-5">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <X className="text-red-500" size={22} />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wider text-red-600 font-bold">Problème</span>
                            <h3 className="font-playfair text-xl font-bold text-[#0A1628] mt-1">{challenge.title}</h3>
                          </div>
                        </div>
                        <p className="text-[#2F3640] leading-relaxed mb-4">{challenge.problem}</p>
                        {challenge.stat && (
                          <div className="flex items-start gap-2 p-3 bg-white border border-red-200 rounded-lg">
                            <span className="text-xl flex-shrink-0">📊</span>
                            <p className="text-sm text-red-700 font-semibold">{challenge.stat}</p>
                          </div>
                        )}
                      </div>

                      {/* Solution Side */}
                      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-100">
                        <div className="flex items-start gap-3 mb-5">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <CheckCircle className="text-emerald-600" size={22} />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wider text-emerald-600 font-bold">Notre Solution</span>
                            <h3 className="font-playfair text-xl font-bold text-[#0A1628] mt-1">Comment Nous Résolvons Ça</h3>
                          </div>
                        </div>
                        <p className="text-[#2F3640] leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0A1628] hover:bg-[#1E3A5F] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Résoudre ces problèmes maintenant
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section - Modern Grid */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-full text-sm text-[#C5A572] mb-6 font-semibold">
                <Sparkles size={16} />
                <span>Ce Qui Est Inclus</span>
              </div>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#0A1628] mb-6">
                Fonctionnalités{' '}
                <span className="text-[#C5A572] italic">Essentielles</span>
              </h2>
              <p className="text-xl text-[#2F3640] max-w-2xl mx-auto">
                Chaque élément est pensé pour renforcer votre crédibilité et faciliter la prise de contact
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {avocatData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-[#FAF9F6] to-white border-2 border-[#E5E2DD] rounded-3xl p-7 hover:border-[#C5A572]/40 hover:shadow-xl transition-all duration-500 card-premium"
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 gold-accent rounded-full flex items-center justify-center text-[#0A1628] text-xs font-bold shadow-md">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C5A572]/15 to-[#D4AF37]/15 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#C5A572]" size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="font-playfair text-lg font-bold text-[#0A1628] mb-3 group-hover:text-[#C5A572] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#2F3640] leading-relaxed mb-3">
                      {feature.description}
                    </p>

                    {feature.technical && (
                      <div className="pt-3 border-t border-[#E5E2DD]/50">
                        <p className="text-xs text-[#C5A572] italic flex items-center gap-1.5 font-medium">
                          ⚡ {feature.technical}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-[#2F3640] mb-6 text-lg">
                Ces fonctionnalités sont <strong className="text-[#0A1628]">disponibles selon le pack choisi</strong>. Détails ci-dessous.
              </p>
              <a
                href="#tarifs"
                className="group inline-flex items-center gap-3 px-8 py-4 gold-accent text-[#0A1628] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(197,165,114,0.4)]"
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

        {/* ROI Calculator */}
        <ROICalculator
          theme="premium"
          title={
            <>
              Calculez Votre{' '}
              <span className="text-[#C5A572] font-playfair italic">Retour sur Investissement</span>
            </>
          }
          subtitle="Simulation simple pour évaluer la rentabilité réelle de votre site"
          inputs={[
            { name: 'feePerCase', label: 'Honoraires moyens par dossier', defaultValue: 2000, min: 500, max: 20000, step: 100 },
            { name: 'clientsPerMonth', label: 'Nouveaux clients visés/mois', defaultValue: 2, min: 1, max: 20, step: 1 },
          ]}
          packageOptions={{
            label: 'Forfait choisi',
            defaultValue: 2500,
            options: [
              { value: 2500, label: 'Essentiel - 2 500€' },
              { value: 4500, label: 'Professionnel - 4 500€' },
            ],
          }}
          calculate={(values) => {
            const monthlyRevenue = values.feePerCase * values.clientsPerMonth;
            const monthsToROI = (values.selectedPackage / monthlyRevenue).toFixed(1);
            const yearlyROI = (monthlyRevenue * 12) - values.selectedPackage;

            return {
              description: `Si votre site vous amène <strong>${values.clientsPerMonth} nouveaux clients/mois</strong> à <strong>${values.feePerCase}€</strong> le dossier :`,
              metrics: [
                { label: 'CA mensuel supplémentaire', value: `${monthlyRevenue.toLocaleString()}€` },
                { label: 'Site rentabilisé en', value: `${monthsToROI} mois`, highlight: true },
                { label: 'ROI sur 12 mois', value: `+${yearlyROI > 0 ? yearlyROI.toLocaleString() : 0}€`, icon: TrendingUp, highlight: true },
              ],
              cta: {
                label: 'Obtenir mon devis pour cette offre',
                icon: ArrowRight,
                onClick: () => openModal(values.selectedPackage === 2500 ? 'Site Vitrine Essentiel - 2 500€' : 'Site Professionnel Complet - 4 500€'),
              },
            };
          }}
        />

        {/* Pricing Section - Premium Cards */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#F8F7F3] to-white">
          {/* Decorative gold line */}
          <div className="absolute top-0 left-0 right-0 divider-gold" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-full text-sm text-[#C5A572] mb-6 font-semibold">
                <Sparkles size={16} />
                <span>Tarifs Transparents</span>
              </div>
              <h2 className="font-playfair text-4xl sm:text-6xl font-bold text-[#0A1628] mb-6">
                Investissement pour un{' '}
                <span className="text-[#C5A572] italic">Site Conforme</span>
              </h2>
              <p className="text-xl text-[#2F3640] max-w-2xl mx-auto">
                Tarifs transparents, tout compris, sans surprise. Choisissez l'offre adaptée à vos besoins.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {avocatData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] border-3 border-[#C5A572] shadow-2xl scale-105'
                      : 'bg-white border-2 border-[#E5E2DD] hover:border-[#C5A572]/30 hover:shadow-xl card-premium'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 gold-accent text-[#0A1628] text-sm font-bold rounded-full shadow-lg">
                      ⭐ {pkg.cta}
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className={`font-playfair text-2xl font-bold mb-3 ${pkg.highlighted ? 'text-white' : 'text-[#0A1628]'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm mb-6 leading-relaxed ${pkg.highlighted ? 'text-gray-300' : 'text-[#2F3640]'}`}>
                      {pkg.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-playfair text-5xl font-bold ${pkg.highlighted ? 'text-[#C5A572]' : 'text-[#0A1628]'}`}>
                        {pkg.price.split('€')[0]}
                      </span>
                      {pkg.price.includes('€') && <span className={`text-2xl ${pkg.highlighted ? 'text-gray-400' : 'text-[#2F3640]'}`}>€</span>}
                    </div>
                    {pkg.monthly && <p className={`text-sm mt-2 font-semibold ${pkg.highlighted ? 'text-[#C5A572]' : 'text-[#C5A572]'}`}>+ {pkg.monthly}</p>}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'bg-[#C5A572]/20' : 'bg-emerald-500/15'}`}>
                          <CheckCircle className={pkg.highlighted ? 'text-[#C5A572]' : 'text-emerald-600'} size={14} />
                        </div>
                        <span className={`text-sm leading-relaxed ${pkg.highlighted ? 'text-gray-300' : 'text-[#2F3640]'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price}${pkg.monthly ? ` + ${pkg.monthly}` : ''}`)}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'gold-accent text-[#0A1628] shadow-lg hover:shadow-[0_8px_25px_rgba(197,165,114,0.5)] hover:scale-105'
                        : 'bg-[#FAF9F6] hover:bg-[#0A1628] text-[#0A1628] hover:text-white border-2 border-[#E5E2DD] hover:border-[#0A1628]'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Pricing Justification */}
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border-2 border-[#E5E2DD]">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 gold-accent text-[#0A1628] font-bold rounded-full shadow-lg">
                  💡 Pourquoi ces tarifs ?
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {avocatData.pricing.justification.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl gold-accent flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-[#0A1628] font-bold text-lg">{index + 1}</span>
                      </div>
                      <p className="text-[#2F3640] leading-relaxed pt-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mt-12 text-center">
                <p className="text-sm text-[#2F3640] max-w-3xl mx-auto leading-relaxed p-6 bg-[#FAF9F6] rounded-2xl border-2 border-[#E5E2DD]">
                  <strong className="text-[#0A1628]">✨ {avocatData.pricing.note}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Elegant Accordion */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#0A1628] mb-6">
                {avocatData.faq.title}
              </h2>
              <p className="text-xl text-[#2F3640]">
                {avocatData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {avocatData.faq.items.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-[#FAF9F6] to-white border-2 border-[#E5E2DD] rounded-2xl overflow-hidden hover:border-[#C5A572]/30 hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF9F6] transition-colors"
                  >
                    <span className="font-playfair text-lg font-semibold text-[#0A1628] pr-4">{item.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-[#C5A572] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-[#2F3640] flex-shrink-0" size={24} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 bg-[#FAF9F6]">
                      <p className="text-[#2F3640] leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Executive */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#2D4263]">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#C5A572]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              Prêt à Développer Votre{' '}
              <span className="text-[#C5A572] italic">Cabinet d'Avocats</span>{' '}
              ?
            </h2>
            <p className="text-xl text-[#E5E5E5] mb-8 max-w-2xl mx-auto leading-relaxed">
              Échange gratuit de 30 minutes pour comprendre vos besoins, vérifier la conformité de votre projet, et vous conseiller sur l'offre la plus adaptée à votre cabinet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal()}
                className="group px-8 py-4 gold-accent text-[#0A1628] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(197,165,114,0.5)] flex items-center gap-3"
              >
                <Scale size={20} />
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
