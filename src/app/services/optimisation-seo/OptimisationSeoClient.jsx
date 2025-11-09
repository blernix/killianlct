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

        {/* 🎨 HERO REDESIGNÉ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <TrendingUp className="text-blue-400" size={16} />
                  Croissance durable
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <LineChart className="text-violet-400" size={16} />
                  Analytics avancées
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Award className="text-amber-400" size={16} />
                  Stratégie sur-mesure
                </span>
              </div>

              {/* Titre */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Le SEO, Votre{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                    Moteur de Croissance
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Arrêtez de <strong className="text-white">payer pour chaque clic</strong>. Construisez un canal d'acquisition durable qui attire des clients qualifiés 24h/24, sans dépendre des publicités.
                </p>
              </div>

              {/* CTA + Social proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => openModal()}
                  className="group relative px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center gap-3"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  Discuter de ma stratégie SEO
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Micro-promesses */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "Trafic qualifié constant",
                  "ROI mesurable",
                  "Indépendance publicitaire",
                  "Autorité de marque"
                ].map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <CheckCircle className="text-blue-400 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-300">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🎨 Section Redéfinition SEO REDESIGNÉE */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
              <Target size={16} />
              <span className="font-semibold">Notre Approche</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Le SEO a changé.{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Votre Stratégie Aussi
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Le référencement naturel n'est pas une tactique ponctuelle, c'est un <strong className="text-white">investissement stratégique</strong>. Comme un portefeuille financier, il nécessite une analyse continue, des ajustements réguliers et une vision long terme pour maximiser le retour sur investissement.
            </p>
          </div>
        </section>

        {/* 🎨 Section Les Deux Piliers REDESIGNÉE */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm text-violet-400 mb-6">
                <Zap size={16} />
                <span className="font-semibold">Méthodologie</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                2 Piliers pour une{' '}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Croissance Durable
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Le succès en référencement repose sur des fondations techniques irréprochables, activées par une stratégie de contenu dynamique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  ],
                  color: "blue"
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
                  ],
                  color: "violet"
                }
              ].map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color === 'blue' ? 'from-blue-500/20 to-cyan-500/20 border-blue-500/30' : 'from-violet-500/20 to-purple-500/20 border-violet-500/30'} backdrop-blur-sm border rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={pillar.color === 'blue' ? 'text-blue-400' : 'text-violet-400'} size={28} />
                      </div>
                      <div className="flex-1">
                        <div className={`inline-block px-3 py-1 mb-3 rounded-full text-xs font-bold ${pillar.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : 'bg-violet-500/20 text-violet-400'}`}>
                          Pilier {pillar.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    <ul className="space-y-3">
                      {pillar.features.map((feature, fIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <li key={fIndex} className="flex items-center gap-3 text-gray-300">
                            <FeatureIcon className={pillar.color === 'blue' ? 'text-blue-400' : 'text-violet-400'} size={16} />
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

        {/* 🎨 Calculateur ROI SEO - NOUVELLE SECTION */}
        <ROICalculator
          title={
            <>
              Estimez Votre{' '}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
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
              description: `En atteignant le <strong>Top 3</strong> sur vos mots-clés cibles (CTR: ${currentCTR}% → ${targetCTR}%) :`,
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

        {/* 🎨 Section Tarifs REDESIGNÉE */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Euro size={16} />
                <span className="font-semibold">Nos Offres</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Deux Manières de{' '}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Collaborer
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Selon votre maturité et vos objectifs, nous proposons deux approches complémentaires
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
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
                  className={`group relative rounded-3xl p-10 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-blue-500/50 shadow-[0_0_60px_rgba(59,130,246,0.3)] scale-105'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-bold rounded-full shadow-lg">
                      ⭐ {pkg.cta}
                    </div>
                  )}

                  <div className="mb-8">
                    <p className={`text-sm font-bold mb-3 ${pkg.highlighted ? 'text-blue-400' : 'text-violet-400'}`}>
                      {pkg.badge}
                    </p>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      {pkg.description}
                    </p>
                    <p className="text-3xl font-bold text-white">
                      {pkg.price}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-blue-400" size={14} />
                        </div>
                        <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(`${pkg.name}`)}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-blue-500/50'
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
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  💡 Pourquoi le SEO est un investissement, pas une dépense
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <MousePointerClick className="text-blue-400" size={24} />
                    </div>
                    <h4 className="font-bold text-white mb-2">Coût par clic = 0€</h4>
                    <p className="text-sm text-gray-400">Contrairement à Google Ads, chaque visiteur organique est gratuit</p>
                  </div>
                  <div>
                    <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="text-violet-400" size={24} />
                    </div>
                    <h4 className="font-bold text-white mb-2">Effet cumulatif</h4>
                    <p className="text-sm text-gray-400">Chaque mois de travail SEO s'additionne et amplifie vos résultats</p>
                  </div>
                  <div>
                    <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Award className="text-purple-400" size={24} />
                    </div>
                    <h4 className="font-bold text-white mb-2">Actif durable</h4>
                    <p className="text-sm text-gray-400">Votre positionnement reste même si vous pausez temporairement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {faqData && (
          <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
            <div className="relative z-10 mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  {faqData.title}
                </h2>
                <p className="text-xl text-gray-400">
                  {faqData.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {faqData.items.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-lg font-semibold text-white pr-4">{item.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="text-violet-400 flex-shrink-0" size={24} />
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
        )}

        <Footer />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(formType)}>
        <ContactForm formType={formType} onClose={closeModal} initialData={initialData} />
      </Modal>
    </>
  );
}
