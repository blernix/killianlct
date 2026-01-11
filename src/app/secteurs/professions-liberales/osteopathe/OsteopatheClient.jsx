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
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap');

        .font-merriweather {
          font-family: 'Merriweather', serif;
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes floatSoft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-float-soft {
          animation: floatSoft 4s ease-in-out infinite;
        }

        .sage-gradient {
          background: linear-gradient(135deg, #7A9F8F 0%, #8FB8A4 50%, #A4C5B5 100%);
        }

        .card-wellness {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-wellness:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(122, 159, 143, 0.15);
        }

        .leaf-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c-3.3 7.4-3.3 15.6 0 23 3.3-7.4 3.3-15.6 0-23zm0 30c-3.3 7.4-3.3 15.6 0 23 3.3-7.4 3.3-15.6 0-23z' fill='%237A9F8F' fill-opacity='0.03'/%3E%3C/svg%3E");
        }
      `}</style>

      <main className="bg-[#F5F3EF] font-inter">
        <Header onOpenModal={openModal} />

        {/* Hero Section - Natural & Wellness */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#EBE9E5] via-[#F5F3EF] to-[#E8F4F0] pt-32 pb-20">
          {/* Decorative organic shapes */}
          <div className="absolute top-20 right-[5%] w-[400px] h-[400px] bg-gradient-to-br from-[#7A9F8F]/20 to-[#8FB8A4]/10 rounded-full blur-3xl animate-float-soft" />
          <div className="absolute bottom-40 left-[8%] w-[350px] h-[350px] bg-gradient-to-br from-[#A8D5E2]/15 to-[#B4D4E1]/10 rounded-full blur-3xl animate-float-soft" style={{ animationDelay: '1.5s' }} />

          {/* Subtle leaf pattern */}
          <div className="absolute inset-0 leaf-pattern opacity-40" />

          {/* Organic circles */}
          <div className="absolute top-1/3 left-[12%] w-20 h-20 border-2 border-[#7A9F8F]/20 rounded-full animate-float-soft" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 right-[15%] w-16 h-16 bg-[#8FB8A4]/10 rounded-full animate-float-soft" style={{ animationDelay: '2s' }} />

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#7A9F8F]/20 rounded-full text-sm text-[#2D3E3A] font-medium shadow-sm">
                  <Activity className="text-[#7A9F8F]" size={16} />
                  40 000+ ostéopathes en France
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#7A9F8F]/20 rounded-full text-sm text-[#2D3E3A] font-medium shadow-sm">
                  <Shield className="text-[#7A9F8F]" size={16} />
                  Conforme RGPD
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#7A9F8F]/20 rounded-full text-sm text-[#2D3E3A] font-medium shadow-sm">
                  <Lock className="text-[#7A9F8F]" size={16} />
                  Secret Professionnel
                </span>
              </div>

              {/* Main Heading */}
              <div className="text-center space-y-8 mb-14">
                <h1 className="font-merriweather text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2D3E3A] leading-[1.1]">
                  Site Web pour{' '}
                  <span className="text-[#7A9F8F] italic">Ostéopathe</span>
                </h1>
                <p className="text-2xl sm:text-3xl text-[#4A5C56] font-semibold">
                  {osteopatheData.hero.subtitle}
                </p>
                <p className="text-xl text-[#5C6F68] max-w-3xl mx-auto leading-relaxed">
                  {osteopatheData.hero.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button
                  onClick={() => document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="group relative px-8 py-4 sage-gradient text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(122,159,143,0.3)] flex items-center gap-3"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  {osteopatheData.hero.ctaLabel}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={osteopatheData.hero.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3.5 bg-white/60 backdrop-blur-sm border-2 border-[#7A9F8F]/30 rounded-full text-[#2D3E3A] hover:bg-white hover:border-[#7A9F8F]/50 transition-all flex items-center gap-2 font-semibold"
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
                {osteopatheData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm border border-[#7A9F8F]/10 rounded-2xl hover:bg-white hover:border-[#7A9F8F]/30 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="text-[#7A9F8F] flex-shrink-0" size={20} />
                    <span className="text-sm text-[#2D3E3A] font-medium">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section - Natural Cards */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-50 border border-red-200 rounded-full text-sm text-red-600 mb-6 font-semibold">
                <AlertCircle size={16} />
                <span>Les Défis à Surmonter</span>
              </div>
              <h2 className="font-merriweather text-4xl sm:text-5xl font-bold text-[#2D3E3A] mb-6">
                3 Obstacles Qui Freinent{' '}
                <span className="text-[#7A9F8F] italic">le Développement de Votre Cabinet</span>
              </h2>
              <p className="text-xl text-[#5C6F68] max-w-2xl mx-auto">
                Et comment un site web professionnel résout chacun d'eux
              </p>
            </div>

            {/* Challenges Cards */}
            <div className="space-y-8">
              {osteopatheData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-[#FAFAF8] rounded-3xl p-1 shadow-md hover:shadow-xl transition-all duration-500 card-wellness"
                  >
                    {/* Challenge Number Badge */}
                    <div className="absolute -top-5 -left-5 w-14 h-14 sage-gradient rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
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
                            <h3 className="font-merriweather text-xl font-bold text-[#2D3E3A] mt-1">{challenge.title}</h3>
                          </div>
                        </div>
                        <p className="text-[#4A5C56] leading-relaxed mb-4">{challenge.problem}</p>
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
                            <CheckCircle className="text-[#7A9F8F]" size={22} />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wider text-[#7A9F8F] font-bold">Notre Solution</span>
                            <h3 className="font-merriweather text-xl font-bold text-[#2D3E3A] mt-1">Comment Nous Résolvons Ça</h3>
                          </div>
                        </div>
                        <p className="text-[#4A5C56] leading-relaxed">{challenge.solution}</p>
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2D3E3A] hover:bg-[#3A4D48] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Discuter de mon projet
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section - Wellness Grid */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#F5F3EF] to-[#EBE9E5]">
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#7A9F8F]/10 border border-[#7A9F8F]/30 rounded-full text-sm text-[#7A9F8F] mb-6 font-semibold">
                <Sparkles size={16} />
                <span>Fonctionnalités Essentielles</span>
              </div>
              <h2 className="font-merriweather text-4xl sm:text-5xl font-bold text-[#2D3E3A] mb-6">
                Un Site Conçu Pour{' '}
                <span className="text-[#7A9F8F] italic">Développer Votre Cabinet</span>
              </h2>
              <p className="text-xl text-[#5C6F68] max-w-2xl mx-auto">
                Chaque élément est pensé pour attirer et rassurer vos futurs patients
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {osteopatheData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white border-2 border-[#E5E2DD] rounded-3xl p-7 hover:border-[#7A9F8F]/40 hover:shadow-xl transition-all duration-500 card-wellness"
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 sage-gradient rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7A9F8F]/15 to-[#8FB8A4]/15 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#7A9F8F]" size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="font-merriweather text-lg font-bold text-[#2D3E3A] mb-3 group-hover:text-[#7A9F8F] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#5C6F68] leading-relaxed mb-3">
                      {feature.description}
                    </p>

                    {feature.technical && (
                      <div className="pt-3 border-t border-[#E5E2DD]/50">
                        <p className="text-xs text-[#7A9F8F] italic flex items-center gap-1.5 font-medium">
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
              <p className="text-[#5C6F68] mb-6 text-lg">
                Ces fonctionnalités sont <strong className="text-[#2D3E3A]">disponibles selon le pack choisi</strong>. Détails ci-dessous.
              </p>
              <a
                href="#tarifs"
                className="group inline-flex items-center gap-3 px-8 py-4 sage-gradient text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(122,159,143,0.3)]"
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
          theme="wellness"
          title={
            <>
              Calculez Votre{' '}
              <span className="text-[#7A9F8F] font-merriweather italic">Retour sur Investissement</span>
            </>
          }
          subtitle={osteopatheData.roi.subtitle}
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

        {/* Comparison Section */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-merriweather text-4xl sm:text-5xl font-bold text-[#2D3E3A] mb-6">
                {osteopatheData.comparison.title}
              </h2>
              <p className="text-xl text-[#5C6F68]">
                {osteopatheData.comparison.subtitle}
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-[#FAFAF8] border-2 border-[#E5E2DD] rounded-3xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-3 text-center p-6 border-b-2 border-[#E5E2DD] bg-gradient-to-r from-[#F5F3EF] to-[#EBE9E5]">
                <div className="text-[#5C6F68] font-semibold">Critère</div>
                <div className="text-[#2D3E3A] font-bold text-lg">Site Professionnel</div>
                <div className="text-[#5C6F68] font-semibold">Fiche Doctolib</div>
              </div>
              {osteopatheData.comparison.categories.map((cat, index) => (
                <div key={index} className="grid grid-cols-3 text-center p-5 border-b border-[#E5E2DD]/50 hover:bg-[#F5F3EF] transition-colors">
                  <div className="text-[#4A5C56] font-medium text-left pl-4">{cat.name}</div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="text-[#7A9F8F]" size={18} />
                    <span className="text-[#7A9F8F] text-sm font-semibold">{cat.us}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <X className="text-red-500" size={18} />
                    <span className="text-red-600 text-sm font-semibold">{cat.doctolib}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-[#5C6F68] mt-8 max-w-2xl mx-auto leading-relaxed">
              {osteopatheData.comparison.note}
            </p>
          </div>
        </section>

        {/* Pricing Section - Natural Cards */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#F5F3EF] to-[#EBE9E5]">
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#7A9F8F]/10 border border-[#7A9F8F]/30 rounded-full text-sm text-[#7A9F8F] mb-6 font-semibold">
                <Sparkles size={16} />
                <span>Tarifs Transparents</span>
              </div>
              <h2 className="font-merriweather text-4xl sm:text-6xl font-bold text-[#2D3E3A] mb-6">
                {osteopatheData.pricing.title.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="text-[#7A9F8F] italic">
                  {osteopatheData.pricing.title.split(' ').slice(2).join(' ')}
                </span>
              </h2>
              <p className="text-xl text-[#5C6F68] max-w-2xl mx-auto">
                {osteopatheData.pricing.subtitle}
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {osteopatheData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-[#7A9F8F] to-[#8FB8A4] border-3 border-[#7A9F8F] shadow-2xl scale-105'
                      : 'bg-white border-2 border-[#E5E2DD] hover:border-[#7A9F8F]/30 hover:shadow-xl card-wellness'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#2D3E3A] text-white text-sm font-bold rounded-full shadow-lg">
                      ⭐ {pkg.cta}
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className={`font-merriweather text-2xl font-bold mb-3 ${pkg.highlighted ? 'text-white' : 'text-[#2D3E3A]'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm mb-6 leading-relaxed ${pkg.highlighted ? 'text-white/90' : 'text-[#5C6F68]'}`}>
                      {pkg.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-merriweather text-5xl font-bold ${pkg.highlighted ? 'text-white' : 'text-[#2D3E3A]'}`}>
                        {pkg.price.replace('€', '')}
                      </span>
                      <span className={`text-2xl ${pkg.highlighted ? 'text-white/70' : 'text-[#5C6F68]'}`}>€</span>
                    </div>
                    <p className={`text-sm mt-2 font-semibold ${pkg.highlighted ? 'text-white/90' : 'text-[#7A9F8F]'}`}>+ {pkg.monthly}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'bg-white/20' : 'bg-[#7A9F8F]/15'}`}>
                          <CheckCircle className={pkg.highlighted ? 'text-white' : 'text-[#7A9F8F]'} size={14} />
                        </div>
                        <span className={`text-sm leading-relaxed ${pkg.highlighted ? 'text-white/90' : 'text-[#4A5C56]'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price} + ${pkg.monthly}`)}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-white text-[#7A9F8F] shadow-lg hover:shadow-xl hover:scale-105'
                        : 'bg-[#F5F3EF] hover:bg-[#7A9F8F] text-[#2D3E3A] hover:text-white border-2 border-[#E5E2DD] hover:border-[#7A9F8F]'
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
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 sage-gradient text-white font-bold rounded-full shadow-lg">
                  💡 {osteopatheData.pricing.justification.title}
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {osteopatheData.pricing.justification.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl sage-gradient flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <p className="text-[#4A5C56] leading-relaxed pt-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mt-12 text-center">
                <p className="text-sm text-[#5C6F68] max-w-3xl mx-auto leading-relaxed p-6 bg-white/60 rounded-2xl border-2 border-[#E5E2DD]">
                  <strong className="text-[#2D3E3A]">✨ {osteopatheData.pricing.note}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-merriweather text-4xl sm:text-5xl font-bold text-[#2D3E3A] mb-6">
                {osteopatheData.faq.title}
              </h2>
              <p className="text-xl text-[#5C6F68]">
                {osteopatheData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {osteopatheData.faq.items.map((item, index) => (
                <div key={index} className="bg-[#FAFAF8] border-2 border-[#E5E2DD] rounded-2xl overflow-hidden hover:border-[#7A9F8F]/30 hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F3EF] transition-colors"
                  >
                    <span className="font-merriweather text-lg font-semibold text-[#2D3E3A] pr-4">{item.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-[#7A9F8F] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-[#5C6F68] flex-shrink-0" size={24} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 bg-[#F5F3EF]">
                      <p className="text-[#4A5C56] leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Wellness */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#7A9F8F] to-[#8FB8A4]">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-merriweather text-4xl sm:text-5xl font-bold text-white mb-6">
              {osteopatheData.cta.title}
            </h2>
            <p className="text-xl text-white/95 mb-4">
              {osteopatheData.cta.subtitle}
            </p>
            <p className="text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {osteopatheData.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal()}
                className="group px-8 py-4 bg-white hover:bg-[#F5F3EF] text-[#7A9F8F] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3"
              >
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                {osteopatheData.cta.ctaPrimary}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openModal()}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300"
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
