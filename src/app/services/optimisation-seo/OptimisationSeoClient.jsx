"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import ROICalculator from "@/components/ROICalculator";
import {
  Target, Building2, TrendingUp, Search, PenTool, Link as LinkIcon,
  BarChart3, Wrench, FileText, Smartphone, Clock, Sparkles, ArrowRight,
  CheckCircle, Zap, LineChart, Award, Check, Euro, Users, MousePointerClick,
  ChevronUp, ChevronDown
} from 'lucide-react';

export default function SeoClient({ faqData }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'seo';

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
                <TrendingUp className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Croissance durable</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <LineChart className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Analytics avancées</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <Award className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Stratégie sur-mesure</span>
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-10 leading-[1.05]">
              Le SEO, Votre{' '}
              <span className="text-[#0066FF]">Moteur de Croissance</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed mb-16 font-light">
              Arrêtez de <strong className="text-[#2A2A2A] font-normal">payer pour chaque clic</strong>. Construisez un canal d'acquisition durable qui attire des clients qualifiés 24h/24, sans dépendre des publicités.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => openModal()}
                className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Discuter de ma stratégie SEO
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Micro-promesses */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] max-w-4xl mx-auto">
              {[
                "Trafic qualifié constant",
                "ROI mesurable",
                "Indépendance publicitaire",
                "Autorité de marque"
              ].map((promise, i) => (
                <div key={i} className="flex items-center gap-3 p-6 bg-white hover:bg-[#FAFAFA] transition-colors">
                  <CheckCircle className="text-[#0066FF] flex-shrink-0" size={18} />
                  <span className="text-sm text-[#2A2A2A] font-light">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Redéfinition SEO */}
        <section className="relative py-32 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
              <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                Notre Approche
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
              Le SEO a changé.{' '}
              <span className="text-[#0066FF]">Votre Stratégie Aussi</span>
            </h2>

            <p className="text-lg text-[#666666] leading-relaxed font-light">
              Le référencement naturel n'est pas une tactique ponctuelle, c'est un <strong className="text-[#2A2A2A] font-normal">investissement stratégique</strong>. Comme un portefeuille financier, il nécessite une analyse continue, des ajustements réguliers et une vision long terme pour maximiser le retour sur investissement.
            </p>
          </div>
        </section>

        {/* Section Les Deux Piliers */}
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Méthodologie
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                2 Piliers pour une{' '}
                <span className="text-[#0066FF]">Croissance Durable</span>
              </h2>

              <p className="text-lg text-[#666666] max-w-3xl mx-auto font-light">
                Le succès en référencement repose sur des fondations techniques irréprochables, activées par une stratégie de contenu dynamique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5]">
              {[
                {
                  icon: Building2,
                  badge: "01",
                  title: "Les Fondations Techniques",
                  description: "Avant toute chose, nous nous assurons que votre site est optimisé pour Google. C'est le socle non-négociable de toute performance future.",
                  features: [
                    { icon: Clock, text: "Vitesse & Core Web Vitals" },
                    { icon: Wrench, text: "Structure sémantique & Schema.org" },
                    { icon: FileText, text: "Indexation & Crawlabilité" },
                    { icon: Smartphone, text: "Expérience Mobile-First" }
                  ]
                },
                {
                  icon: TrendingUp,
                  badge: "02",
                  title: "Le Moteur de Croissance",
                  description: "Une fois les fondations posées, le vrai travail commence. Nous analysons le marché, produisons du contenu pertinent et construisons votre autorité.",
                  features: [
                    { icon: Search, text: "Analyse d'intention utilisateur" },
                    { icon: PenTool, text: "Stratégie de contenu à forte valeur" },
                    { icon: LinkIcon, text: "Construction d'autorité (Netlinking)" },
                    { icon: BarChart3, text: "Suivi des performances & ajustements" }
                  ]
                }
              ].map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#0066FF] transition-colors">
                        <Icon className="text-[#0066FF]" size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 mb-3 border border-[#E5E5E5] text-xs font-medium text-[#0066FF]">
                          Pilier {pillar.badge}
                        </div>
                        <h3 className="text-2xl font-light text-[#2A2A2A] mb-3">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[#666666] mb-6 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                    <ul className="space-y-3">
                      {pillar.features.map((feature, fIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <li key={fIndex} className="flex items-center gap-3 text-[#666666] font-light">
                            <FeatureIcon className="text-[#0066FF] flex-shrink-0" size={16} />
                            <span className="text-sm">{feature.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Calculateur ROI SEO */}
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
                Estimez Votre{' '}
                <span className="text-[#0066FF]">Potentiel de Croissance</span>
              </h2>

              <p className="text-lg text-[#666666] font-light">
                Calculez l'impact d'un meilleur positionnement sur votre chiffre d'affaires
              </p>
            </div>

            <ROICalculator
              title={
                <>
                  Estimez Votre{' '}
                  <span className="text-[#0066FF]">
                    Potentiel de Croissance
                  </span>
                </>
              }
              subtitle="Calculez l'impact d'un meilleur positionnement sur votre chiffre d'affaires"
              color="violet"
              inputs={[
                {
                  name: 'searchVolume',
                  label: 'Volume de recherches mensuelles',
                  defaultValue: 1000,
                  min: 100,
                  max: 100000,
                  step: 100,
                  placeholder: '1000'
                },
                {
                  name: 'currentPosition',
                  label: 'Position moyenne actuelle',
                  defaultValue: 15,
                  min: 1,
                  max: 100,
                  step: 1,
                  placeholder: '15'
                },
                {
                  name: 'conversionRate',
                  label: 'Taux de conversion (%)',
                  defaultValue: 3,
                  min: 0.1,
                  max: 20,
                  step: 0.1,
                  placeholder: '3'
                },
                {
                  name: 'clientValue',
                  label: 'Valeur moyenne par client (€)',
                  defaultValue: 1500,
                  min: 50,
                  max: 50000,
                  step: 50,
                  placeholder: '1500'
                },
              ]}
              calculate={(values) => {
                // Position 1-3: 30% CTR, 4-10: 10% CTR, 11-20: 3% CTR, >20: 0.5% CTR
                const getCTR = (pos) => {
                  if (pos <= 3) return 30;
                  if (pos <= 10) return 10;
                  if (pos <= 20) return 3;
                  return 0.5;
                };

                const currentCTR = getCTR(values.currentPosition);
                const targetCTR = getCTR(3); // Objectif top 3

                const currentVisitors = Math.round((values.searchVolume * currentCTR) / 100);
                const targetVisitors = Math.round((values.searchVolume * targetCTR) / 100);
                const additionalVisitors = targetVisitors - currentVisitors;

                const currentLeads = Math.round((currentVisitors * values.conversionRate) / 100);
                const targetLeads = Math.round((targetVisitors * values.conversionRate) / 100);
                const additionalLeads = targetLeads - currentLeads;

                const additionalRevenue = additionalLeads * values.clientValue;
                const yearlyRevenue = additionalRevenue * 12;

                return {
                  description: `En atteignant le <strong class="text-[#2A2A2A]">Top 3</strong> sur vos mots-clés cibles (CTR: ${currentCTR}% → ${targetCTR}%) :`,
                  metrics: [
                    {
                      label: 'Visiteurs additionnels/mois',
                      value: `+${additionalVisitors}`
                    },
                    {
                      label: 'Leads additionnels/mois',
                      value: `+${additionalLeads}`
                    },
                    {
                      label: 'CA additionnel/mois',
                      value: `+${additionalRevenue.toLocaleString()}€`,
                      highlight: true
                    },
                    {
                      label: 'Potentiel annuel additionnel',
                      value: `${yearlyRevenue.toLocaleString()}€`,
                      icon: TrendingUp,
                      highlight: true
                    },
                  ],
                  cta: {
                    label: 'Voir nos offres',
                    icon: ArrowRight,
                    onClick: () => {
                      document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    },
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
                  Nos Offres
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Deux Manières de{' '}
                <span className="text-[#0066FF]">Collaborer</span>
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                Selon votre maturité et vos objectifs, nous proposons deux approches complémentaires
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-[#E5E5E5] max-w-5xl mx-auto mb-16">
              {[
                {
                  badge: "OFFRE INITIALE",
                  name: "Audit & Recommandations SEO",
                  price: "800€ - 2 000€",
                  description: "Diagnostic complet + plan d'action détaillé (implémentation sur devis)",
                  features: [
                    "Audit SEO complet (technique, contenu, backlinks)",
                    "Analyse concurrentielle approfondie",
                    "Analyse Core Web Vitals et performance",
                    "Audit Schema.org et données structurées",
                    "Rapport détaillé des erreurs critiques à corriger",
                    "Plan d'action priorisé pour la croissance",
                    "Recommandations stratégiques de contenu",
                    "Devis séparé pour l'implémentation des corrections",
                    "Livraison : 2-3 semaines"
                  ],
                  cta: "Demander un audit",
                  highlighted: false
                },
                {
                  badge: "NOTRE RECOMMANDATION",
                  name: "Partenariat de Croissance SEO",
                  price: "À partir de 800€/mois",
                  description: "Accompagnement mensuel pour une croissance durable (engagement 6 mois minimum)",
                  features: [
                    "Audit complet inclus le 1er mois",
                    "Implémentation des corrections techniques critiques",
                    "Stratégie de contenu mensuelle personnalisée",
                    "Rédaction et optimisation de contenus (selon forfait)",
                    "Netlinking qualitatif (construction d'autorité)",
                    "Suivi des positions et analytics détaillés",
                    "Ajustements stratégiques mensuels basés sur les données",
                    "Appels stratégiques réguliers (mensuel ou bimensuel)",
                    "Reporting transparent des résultats et KPIs",
                    "Engagement minimum : 6 mois recommandé"
                  ],
                  cta: "Le plus populaire",
                  highlighted: true
                }
              ].map((pkg, index) => (
                <div
                  key={index}
                  className={`group bg-white p-10 hover:bg-[#FAFAFA] transition-colors duration-300 ${
                    pkg.highlighted ? 'border-2 border-[#0066FF] relative md:scale-105' : ''
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white text-xs font-medium uppercase tracking-wider">
                      {pkg.cta}
                    </div>
                  )}

                  <div className="mb-8">
                    <p className="text-sm font-medium mb-3 text-[#0066FF]">
                      {pkg.badge}
                    </p>
                    <h3 className="text-3xl font-light text-[#2A2A2A] mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-[#666666] text-sm mb-6 font-light">
                      {pkg.description}
                    </p>
                    <p className="text-3xl font-light text-[#2A2A2A]">
                      {pkg.price}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="text-[#0066FF] flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-[#666666] leading-relaxed font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(`${pkg.name}`)}
                    className={`w-full py-4 px-6 font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      pkg.highlighted
                        ? 'bg-[#0066FF] text-white border border-[#0066FF] hover:bg-white hover:text-[#0066FF]'
                        : 'bg-white text-[#0066FF] border border-[#0066FF] hover:bg-[#0066FF] hover:text-white'
                    }`}
                  >
                    {pkg.highlighted ? 'Démarrer le partenariat' : pkg.cta}
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Note importante */}
            <div className="max-w-4xl mx-auto">
              <div className="border border-[#E5E5E5] bg-white p-12">
                <h3 className="text-2xl font-light text-[#2A2A2A] mb-6 text-center">
                  Pourquoi le SEO est un investissement, pas une dépense
                </h3>
                <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E5]">
                  <div className="bg-white p-8 text-center">
                    <div className="w-14 h-14 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-4">
                      <MousePointerClick className="text-[#0066FF]" size={24} />
                    </div>
                    <h4 className="font-light text-[#2A2A2A] mb-2">Coût par clic = 0€</h4>
                    <p className="text-sm text-[#666666] font-light">Contrairement à Google Ads, chaque visiteur organique est gratuit</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="w-14 h-14 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="text-[#0066FF]" size={24} />
                    </div>
                    <h4 className="font-light text-[#2A2A2A] mb-2">Effet cumulatif</h4>
                    <p className="text-sm text-[#666666] font-light">Chaque mois de travail SEO s'additionne et amplifie vos résultats</p>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <div className="w-14 h-14 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-4">
                      <Award className="text-[#0066FF]" size={24} />
                    </div>
                    <h4 className="font-light text-[#2A2A2A] mb-2">Actif durable</h4>
                    <p className="text-sm text-[#666666] font-light">Votre positionnement reste même si vous pausez temporairement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqData && (
          <section className="relative py-32 px-4 bg-white">
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
                  {faqData.title}
                </h2>

                <p className="text-lg text-[#666666] font-light">
                  {faqData.subtitle}
                </p>
              </div>

              <div className="space-y-px bg-[#E5E5E5]">
                {faqData.items.map((item, index) => (
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
        )}

        <Footer />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(formType)}>
        <ContactForm formType={formType} onClose={closeModal} initialData={initialData} />
      </Modal>
    </>
  );
}
