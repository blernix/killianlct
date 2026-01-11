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
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Manrope:wght@400;500;600;700;800&display=swap');

        .font-fraunces {
          font-family: 'Fraunces', serif;
        }

        .font-manrope {
          font-family: 'Manrope', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }

        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }

        .text-shadow-warm {
          text-shadow: 0 2px 20px rgba(224, 122, 95, 0.1);
        }

        .card-hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(224, 122, 95, 0.15);
        }
      `}</style>

      <main className="bg-[#FAF8F5] font-manrope">
        <Header onOpenModal={openModal} />

        {/* Hero Section - Light, Airy, Editorial */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF9F5] via-[#FAF8F5] to-[#F5F3F0] pt-32 pb-20">
          {/* Decorative geometric shapes */}
          <div className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-[#E07A5F]/10 to-[#D97757]/5 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-40 left-[15%] w-[250px] h-[250px] bg-gradient-to-br from-[#A07DC0]/10 to-[#9B8FC7]/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

          {/* Abstract decorative circles */}
          <div className="absolute top-1/4 left-[8%] w-24 h-24 border-2 border-[#E07A5F]/20 rounded-full animate-float" />
          <div className="absolute bottom-1/3 right-[12%] w-16 h-16 bg-[#A07DC0]/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#E07A5F]/20 rounded-full text-sm text-[#2D3748] font-medium shadow-sm hover:shadow-md transition-all">
                  <Shield className="text-[#E07A5F]" size={16} />
                  Conformité RGPD
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#A07DC0]/20 rounded-full text-sm text-[#2D3748] font-medium shadow-sm hover:shadow-md transition-all">
                  <Lock className="text-[#A07DC0]" size={16} />
                  Secret Professionnel
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#E07A5F]/20 rounded-full text-sm text-[#2D3748] font-medium shadow-sm hover:shadow-md transition-all">
                  <Heart className="text-[#E07A5F]" size={16} />
                  Design Empathique
                </span>
              </div>

              {/* Main Heading */}
              <div className="text-center space-y-8 mb-14 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
                <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1F2E] leading-[1.1] text-shadow-warm">
                  {psychologueData.hero.title}{' '}
                  <span className="bg-gradient-to-r from-[#E07A5F] via-[#D97757] to-[#A07DC0] bg-clip-text text-transparent italic">
                    {psychologueData.hero.titleGradient}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-[#4A5568] max-w-3xl mx-auto leading-relaxed font-normal">
                  {psychologueData.hero.subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
                <a
                  href="#tarifs"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative px-8 py-4 bg-[#E07A5F] hover:bg-[#D97757] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(224,122,95,0.3)] flex items-center gap-3"
                >
                  <Heart size={20} className="group-hover:scale-110 transition-transform" />
                  {psychologueData.hero.ctaLabel}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://maquette.psychologue.killian-lecrut.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white/60 backdrop-blur-sm border-2 border-[#2D3748]/20 rounded-full text-[#2D3748] hover:bg-white hover:border-[#E07A5F]/30 transition-all flex items-center gap-2 font-semibold"
                >
                  <span className="flex flex-col items-start">
                    <span>Voir un exemple de maquette</span>
                    <span className="text-xs opacity-60 font-normal">100% personnalisable</span>
                  </span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Micro-promises Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
                {psychologueData.hero.microPromises.map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm border border-[#E07A5F]/10 rounded-2xl hover:bg-white hover:border-[#E07A5F]/30 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="text-[#E07A5F] flex-shrink-0" size={20} />
                    <span className="text-sm text-[#2D3748] font-medium">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section - Bento Box Style */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#F5F3F0] to-white">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#A07DC0]/5 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#E07A5F]/10 to-[#D97757]/10 border border-[#E07A5F]/20 rounded-full text-sm text-[#E07A5F] mb-6 font-semibold">
                <Heart size={16} />
                <span>Les Limites des Annuaires</span>
              </div>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-[#1A1F2E] mb-6">
                3 Limites des{' '}
                <span className="bg-gradient-to-r from-[#E07A5F] to-[#A07DC0] bg-clip-text text-transparent italic">
                  Annuaires et Plateformes
                </span>
              </h2>
              <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
                Pourquoi une simple fiche Doctolib ne reflète pas qui vous êtes vraiment
              </p>
            </div>

            {/* Challenges Cards */}
            <div className="space-y-8">
              {psychologueData.challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-1 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(224,122,95,0.15)] transition-all duration-500 card-hover-lift"
                  >
                    {/* Challenge Number Badge */}
                    <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-[#E07A5F] to-[#D97757] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                      {index + 1}
                    </div>

                    <div className="grid md:grid-cols-2 gap-1 p-8">
                      {/* Problem Side */}
                      <div className="relative bg-gradient-to-br from-[#FFF5F2] to-[#FFE8E3] rounded-2xl p-8">
                        <div className="flex items-start gap-3 mb-5">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Icon className="text-[#E07A5F]" size={22} />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wider text-[#E07A5F] font-bold">Limite</span>
                            <h3 className="font-fraunces text-xl font-bold text-[#1A1F2E] mt-1">{challenge.title}</h3>
                          </div>
                        </div>
                        <p className="text-[#4A5568] leading-relaxed">{challenge.problem}</p>
                      </div>

                      {/* Solution Side */}
                      <div className="relative bg-gradient-to-br from-[#F5F2FF] to-[#EBE6FF] rounded-2xl p-8">
                        <div className="flex items-start gap-3 mb-5">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <CheckCircle className="text-[#A07DC0]" size={22} />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wider text-[#A07DC0] font-bold">Votre Site</span>
                            <h3 className="font-fraunces text-xl font-bold text-[#1A1F2E] mt-1">Comment Votre Site Change Cela</h3>
                          </div>
                        </div>
                        <p className="text-[#4A5568] leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section - Modern Grid */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          {/* Decorative blob */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#E07A5F]/5 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#A07DC0]/10 to-[#9B8FC7]/10 border border-[#A07DC0]/20 rounded-full text-sm text-[#A07DC0] mb-6 font-semibold">
                <Sparkles size={16} />
                <span>Ce Qui Est Inclus</span>
              </div>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-[#1A1F2E] mb-6">
                Un Site Sobre et Professionnel,{' '}
                <span className="bg-gradient-to-r from-[#E07A5F] to-[#A07DC0] bg-clip-text text-transparent italic">
                  Pensé Pour Votre Pratique
                </span>
              </h2>
              <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
                Chaque élément est conçu pour refléter votre authenticité professionnelle
              </p>
            </div>

            {/* Features Grid - Masonry Style */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {psychologueData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-[#FAF8F5] border-2 border-[#E5E2DD] rounded-3xl p-7 hover:border-[#E07A5F]/40 hover:shadow-[0_10px_30px_rgba(224,122,95,0.12)] transition-all duration-500 card-hover-lift"
                  >
                    {/* Pack Badge */}
                    {feature.packRequired && (
                      <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-gradient-to-r from-[#E07A5F] to-[#D97757] rounded-full text-white text-xs font-bold shadow-md">
                        Pack {feature.packRequired}
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E07A5F]/15 to-[#A07DC0]/15 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="text-[#E07A5F]" size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="font-fraunces text-lg font-bold text-[#1A1F2E] mb-3 group-hover:text-[#E07A5F] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                      {feature.description}
                    </p>

                    {feature.technical && (
                      <div className="pt-3 border-t border-[#E5E2DD]/50">
                        <p className="text-xs text-[#A07DC0] italic flex items-center gap-1.5 font-medium">
                          <Sparkles size={12} /> {feature.technical}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-[#4A5568] mb-6 text-lg">
                Ces fonctionnalités sont <strong className="text-[#1A1F2E]">disponibles selon le pack choisi</strong>. Détails ci-dessous.
              </p>
              <a
                href="#tarifs"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E07A5F] to-[#D97757] hover:from-[#D97757] hover:to-[#C96947] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(224,122,95,0.3)]"
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

        {/* Pricing Section - Clean Cards */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F5F3F0]">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#A07DC0]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#E07A5F]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 border border-[#E07A5F]/20 rounded-full text-sm text-[#E07A5F] mb-6 font-semibold">
                <Heart size={16} />
                <span>Tarifs Transparents</span>
              </div>
              <h2 className="font-fraunces text-4xl sm:text-6xl font-bold text-[#1A1F2E] mb-6">
                Investissement pour{' '}
                <span className="bg-gradient-to-r from-[#E07A5F] to-[#A07DC0] bg-clip-text text-transparent italic">
                  Votre Site Professionnel
                </span>
              </h2>
              <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
                {psychologueData.pricing.subtitle}
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {psychologueData.pricing.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white to-[#FFF9F5] border-3 border-[#E07A5F] shadow-[0_10px_50px_rgba(224,122,95,0.25)] scale-105'
                      : 'bg-white border-2 border-[#E5E2DD] hover:border-[#E07A5F]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] card-hover-lift'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#E07A5F] to-[#D97757] text-white text-sm font-bold rounded-full shadow-lg">
                      {pkg.cta}
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="font-fraunces text-2xl font-bold text-[#1A1F2E] mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-[#4A5568] text-sm mb-6 leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-fraunces text-5xl font-bold text-[#1A1F2E]">
                        {pkg.price.split('€')[0]}
                      </span>
                      <span className="text-2xl text-[#4A5568]">€</span>
                    </div>
                    <p className="text-[#E07A5F] text-sm mt-2 font-semibold">+ {pkg.monthly}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#E07A5F]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-[#E07A5F]" size={14} />
                        </div>
                        <span className="text-sm text-[#2D3748] leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price} + ${pkg.monthly}`)}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-[#E07A5F] to-[#D97757] hover:from-[#D97757] hover:to-[#C96947] text-white shadow-lg hover:shadow-[0_8px_25px_rgba(224,122,95,0.35)] hover:scale-105'
                        : 'bg-[#FAF8F5] hover:bg-[#E07A5F] text-[#2D3748] hover:text-white border-2 border-[#E5E2DD] hover:border-[#E07A5F]'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Pricing Justification */}
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white rounded-3xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-[#A07DC0] to-[#9B8FC7] text-white font-bold rounded-full shadow-lg">
                  {psychologueData.pricing.justification.title}
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {psychologueData.pricing.justification.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E07A5F] to-[#D97757] flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <p className="text-[#4A5568] leading-relaxed pt-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mt-12 text-center">
                <p className="text-sm text-[#4A5568] max-w-3xl mx-auto leading-relaxed p-6 bg-white/60 rounded-2xl border border-[#E5E2DD]">
                  <strong className="text-[#1A1F2E]">{psychologueData.pricing.note}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Elegant Accordion */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-[#1A1F2E] mb-6">
                {psychologueData.faq.title}
              </h2>
              <p className="text-xl text-[#4A5568]">
                {psychologueData.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {psychologueData.faq.items.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-[#FAF8F5] border-2 border-[#E5E2DD] rounded-2xl overflow-hidden hover:border-[#E07A5F]/30 hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FFF9F5] transition-colors"
                  >
                    <span className="font-fraunces text-lg font-semibold text-[#1A1F2E] pr-4">{item.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-[#E07A5F] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-[#4A5568] flex-shrink-0" size={24} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 bg-[#FFF9F5]">
                      <p className="text-[#4A5568] leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Bold & Inviting */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#E07A5F] to-[#D97757]">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white mb-6">
              Prêt à Contrôler Votre{' '}
              <span className="italic">
                Identité Professionnelle
              </span>{' '}
              ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Que vous soyez en installation ou déjà établi, nous créons le site qui reflète votre approche thérapeutique et votre éthique de soin. Échange gratuit de 30 minutes pour comprendre vos besoins et vous conseiller sur l'offre la plus adaptée.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal()}
                className="group px-8 py-4 bg-white hover:bg-[#FAF8F5] text-[#E07A5F] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-3"
              >
                <Heart size={20} />
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
