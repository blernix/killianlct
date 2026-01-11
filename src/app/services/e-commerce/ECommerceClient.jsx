"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import ROICalculator from "@/components/ROICalculator";
import {
  Zap, Palette, KeyRound, Scaling, Check, Server, MonitorSmartphone,
  PackageCheck, Banknote, Users, BarChart, Mail, AlertTriangle,
  TrendingUp, ShieldCheck, Sparkles, ArrowRight, Euro, CreditCard, ShoppingCart, CheckCircle,
  ChevronUp, ChevronDown
} from 'lucide-react';

const StripeLogo = () => <span className="font-bold text-indigo-500">Stripe</span>;
const PayPalLogo = () => <span className="font-bold text-blue-400">PayPal</span>;

export default function ECommerceClient({ faqData }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'e-commerce';

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Packages disponibles
  const packages = [
    {
      name: "Starter",
      price: "5 000€ - 10 000€",
      description: "Pour lancer votre boutique",
      features: [
        "10-20 produits",
        "Design personnalisé",
        "Paiement Stripe/PayPal sécurisé",
        "Gestion des stocks & commandes",
        "Paniers & tunnel de paiement",
        "Espace client basique",
        "SEO technique de base (balises meta, Schema.org, sitemap)",
        "Responsive mobile & tablette",
        "Formation backoffice (2h)",
        "Nom de domaine offert 1 an",
        "Hébergement cloud 1 an inclus",
        "3 mois de support technique (corrections de bugs)",
        "Livraison : 4-5 semaines"
      ],
      cta: "Idéal pour démarrer",
      highlighted: false
    },
    {
      name: "Business",
      price: "10 000€ - 20 000€",
      description: "La solution la plus complète",
      features: [
        "Produits illimités",
        "Design premium 100% sur-mesure",
        "Architecture headless (Next.js + MedusaJS)",
        "Multi-devises & multi-régions",
        "Promotions & codes promo avancés",
        "Espace client complet avec historique",
        "SEO optimisé avancé : stratégie mots-clés + GSC",
        "Intégrations tierces (analytics, email, etc.)",
        "Blog intégré avec CMS",
        "Formation backoffice avancée (4h)",
        "Nom de domaine offert 1 an",
        "Hébergement cloud premium 1 an inclus",
        "6 mois de support technique prioritaire",
        "Livraison : 6-8 semaines"
      ],
      cta: "Le plus populaire",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      description: "Pour les projets ambitieux",
      features: [
        "Tout du Business inclus",
        "Intégrations ERP/CRM complexes",
        "Marketplace multi-vendeurs",
        "API personnalisées pour partenaires",
        "B2B & B2C combinés",
        "Gestion avancée RMA & SAV",
        "Workflows métier automatisés",
        "SEO approfondi : audit + backlinks",
        "Formation équipe complète (sur-mesure)",
        "Nom de domaine offert 1 an",
        "Hébergement cloud enterprise 1 an inclus",
        "Support prioritaire 12 mois avec SLA",
        "Livraison : selon complexité (8-12 semaines)"
      ],
      cta: "Discutons-en",
      highlighted: false
    }
  ];

  // Liste des offres pour le formulaire
  const availableOffers = packages.map(pkg => `${pkg.name} - ${pkg.price}`);

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO SECTION - Swiss Minimal */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 py-32">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <KeyRound className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">100% sur-mesure</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <Zap className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Performance maximale</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <CreditCard className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Zéro abonnement</span>
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-10 leading-[1.05]">
              Une Boutique{' '}
              <span className="text-[#0066FF]">Qui Vous Appartient</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed mb-16 font-light">
              Au-delà des plateformes standards, créez une <strong className="text-[#2A2A2A] font-normal">solution e-commerce performante et sur-mesure</strong>, sans abonnement mensuel, conçue pour convertir et évoluer.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => openModal()}
                className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Discuter de mon projet
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <div className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] bg-white">
                <span className="text-sm text-[#666666] font-light">
                  <strong className="text-[#2A2A2A] font-medium">Next.js</strong> + <strong className="text-[#2A2A2A] font-medium">MedusaJS</strong>
                </span>
              </div>
            </div>

            {/* Micro-promesses */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] max-w-4xl mx-auto">
              {[
                "Propriété totale",
                "Headless architecture",
                "SEO optimisé",
                "Paiements sécurisés"
              ].map((promise, i) => (
                <div key={i} className="flex items-center gap-3 p-6 bg-white hover:bg-[#FAFAFA] transition-colors">
                  <CheckCircle className="text-[#0066FF] flex-shrink-0" size={18} />
                  <span className="text-sm text-[#2A2A2A] font-light">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Problème */}
        <section className="relative py-32 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
              <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                Les Limites des Plateformes Standards
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
              Quand Shopify & Wix{' '}
              <span className="text-[#0066FF]">Freinent Votre Croissance</span>
            </h2>

            <p className="text-lg text-[#666666] leading-relaxed font-light">
              Les plateformes SaaS sont excellentes pour démarrer, mais leur modèle montre vite ses faiblesses : <strong className="text-[#2A2A2A] font-normal">thèmes rigides</strong> qui brident votre marque, <strong className="text-[#2A2A2A] font-normal">lenteur</strong> due aux apps tierces, et <strong className="text-[#2A2A2A] font-normal">frais mensuels</strong> qui augmentent avec votre succès.
            </p>
          </div>
        </section>

        {/* Section Approche Technique */}
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Notre Approche
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                La Maîtrise Technique au{' '}
                <span className="text-[#0066FF]">Service de la Vente</span>
              </h2>

              <p className="text-lg text-[#666666] max-w-3xl mx-auto font-light">
                Nous ne sommes pas des installateurs de thèmes. Chaque choix technique est pensé pour avoir un impact direct sur votre business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5]">
              {[
                {
                  icon: Zap,
                  title: "Vitesse = Conversion",
                  description: "Next.js garantit des temps de chargement quasi instantanés. Chaque milliseconde compte pour le taux de conversion et le SEO."
                },
                {
                  icon: Palette,
                  title: "Sur-Mesure Total",
                  description: "Libérez-vous des templates. Créez le parcours client exact que vous souhaitez, des fiches produits au tunnel de paiement."
                },
                {
                  icon: KeyRound,
                  title: "Propriété Totale",
                  description: "Votre boutique vous appartient. Fini les 'loyers' mensuels. Investissez dans un actif durable."
                },
                {
                  icon: Scaling,
                  title: "Architecture Évolutive",
                  description: "Code propre et modulaire. Connectez un ERP, CRM ou outil d'automatisation. Votre boutique évolue avec vos ambitions."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mb-8 group-hover:border-[#0066FF] transition-colors">
                      <Icon className="text-[#0066FF]" size={24} />
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Architecture Headless */}
        <section className="relative py-32 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Architecture Headless
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Notre Secret :{' '}
                <span className="text-[#0066FF]">Headless & Open-Source</span>
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                Nous séparons le 'moteur' de la 'carrosserie' pour une flexibilité et une performance inégalées
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-px bg-[#E5E5E5]">
              {[
                {
                  icon: Server,
                  title: "Le Moteur (Back-end)",
                  subtitle: "MedusaJS",
                  description: "Pour la gestion, nous utilisons MedusaJS, une fondation e-commerce open-source robuste. C'est le cœur sécurisé : produits, commandes, clients, promotions."
                },
                {
                  icon: MonitorSmartphone,
                  title: "La Vitrine (Front-end)",
                  subtitle: "Next.js",
                  description: "Pour l'interface client, nous construisons une application 100% sur-mesure avec Next.js. Cette séparation garantit une UX unique et des performances exceptionnelles."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#0066FF] transition-colors">
                        <Icon className="text-[#0066FF]" size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-[#666666] uppercase tracking-wider font-medium">{item.title}</p>
                        <h3 className="text-2xl font-light text-[#2A2A2A]">{item.subtitle}</h3>
                      </div>
                    </div>
                    <p className="text-[#666666] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Fonctionnalités Incluses
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Toutes les Fonctionnalités{' '}
                <span className="text-[#0066FF]">Sans les Contraintes</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#E5E5E5]">
              {[
                "Gestion de produits avancée",
                "Paniers et commande optimisée",
                "Comptes clients & historique",
                "Moteur de promotions",
                "Multi-devises & multi-régions",
                "Gestion des retours (RMA)",
                "SEO technique natif",
                "Intégrations sur-mesure (API)",
                "Paiements Stripe / PayPal"
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-6 bg-white hover:bg-[#FAFAFA] transition-colors"
                >
                  <Check className="text-[#0066FF] flex-shrink-0" size={18} />
                  <span className="text-sm text-[#2A2A2A] font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculateur ROI */}
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
                Calculez Votre <span className="text-[#0066FF]">Chiffre d'Affaires</span>
              </h2>

              <p className="text-lg text-[#666666] font-light">
                Estimez le potentiel de votre boutique en ligne avec notre calculateur
              </p>
            </div>

            <ROICalculator
              title={<>Calculez Votre <span className="text-[#0066FF]">Chiffre d'Affaires</span></>}
              subtitle="Estimez le potentiel de votre boutique en ligne avec notre calculateur"
              color="green"
              inputs={[
                {
                  name: 'monthlyVisitors',
                  label: 'Visiteurs mensuels',
                  defaultValue: 1000,
                  min: 0,
                  max: 1000000,
                  step: 100,
                  placeholder: '1000'
                },
                {
                  name: 'conversionRate',
                  label: 'Taux de conversion (%)',
                  defaultValue: 2,
                  min: 0,
                  max: 100,
                  step: 0.1,
                  placeholder: '2'
                },
                {
                  name: 'averageCart',
                  label: 'Panier moyen (€)',
                  defaultValue: 80,
                  min: 0,
                  max: 10000,
                  step: 10,
                  placeholder: '80'
                }
              ]}
              calculate={(values) => {
                const monthlyOrders = Math.round((values.monthlyVisitors * values.conversionRate) / 100);
                const monthlyRevenue = monthlyOrders * values.averageCart;
                const yearlyRevenue = monthlyRevenue * 12;

                return {
                  description: `Avec <strong class="text-[#2A2A2A]">${values.monthlyVisitors} visiteurs/mois</strong> et un taux de conversion de <strong class="text-[#2A2A2A]">${values.conversionRate}%</strong> :`,
                  metrics: [
                    {
                      label: 'Commandes mensuelles',
                      value: monthlyOrders,
                      highlight: false
                    },
                    {
                      label: 'CA mensuel',
                      value: `${monthlyRevenue.toLocaleString()}€`,
                      highlight: true
                    },
                    {
                      label: 'CA annuel',
                      value: `${yearlyRevenue.toLocaleString()}€`,
                      highlight: true,
                      icon: TrendingUp
                    }
                  ],
                  cta: {
                    label: 'Voir les tarifs',
                    icon: ArrowRight,
                    onClick: () => {
                      document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
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
                  Investissement
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Tarifs pour une{' '}
                <span className="text-[#0066FF]">Boutique Performante</span>
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                Investissez dans une boutique qui vous appartient. <strong className="text-[#2A2A2A] font-normal">Aucun abonnement mensuel</strong>, uniquement votre investissement initial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E5] mb-16">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group bg-white p-10 hover:bg-[#FAFAFA] transition-colors duration-300 ${
                    pkg.highlighted ? 'md:scale-105 border-2 border-[#0066FF] relative' : ''
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white text-xs font-medium uppercase tracking-wider">
                      {pkg.cta}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-light text-[#2A2A2A] mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-[#666666] text-sm mb-6 font-light">
                      {pkg.description}
                    </p>
                    <p className="text-3xl font-light text-[#2A2A2A]">
                      {pkg.price}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="text-[#0066FF] flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-[#666666] leading-relaxed font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price}`)}
                    className={`w-full py-4 px-6 font-medium transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-[#0066FF] text-white border border-[#0066FF] hover:bg-white hover:text-[#0066FF]'
                        : 'bg-white text-[#0066FF] border border-[#0066FF] hover:bg-[#0066FF] hover:text-white'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Note importante + Maintenance */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="border border-[#E5E5E5] bg-white p-12 text-center">
                <h3 className="text-2xl font-light text-[#2A2A2A] mb-4">
                  Investissement unique, rentabilité sur le long terme
                </h3>
                <p className="text-[#666666] leading-relaxed font-light">
                  Contrairement aux plateformes SaaS qui prélèvent des frais mensuels à vie, vous investissez une seule fois dans une boutique qui <strong className="text-[#2A2A2A] font-normal">vous appartient totalement</strong>. Après la 1ère année, seuls l'hébergement (~100-200€/an) et la maintenance optionnelle s'appliquent.
                </p>
              </div>

              {/* Forfaits Maintenance */}
              <div className="border border-[#E5E5E5] bg-white p-12">
                <div className="relative mb-8">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white text-sm font-medium whitespace-nowrap">
                    Maintenance & Support Continu
                  </div>
                </div>

                <p className="text-[#666666] text-center mb-8 font-light">
                  Le support inclus couvre les corrections de bugs. La maintenance payante ajoute les évolutions, le monitoring proactif et l'hébergement continu.
                </p>

                <div className="grid sm:grid-cols-3 gap-px bg-[#E5E5E5]">
                  {[
                    {
                      name: "Maintenance Basique",
                      price: "300€/mois",
                      features: ["Monitoring 24/7", "Correctifs de bugs", "Mises à jour sécurité", "Hébergement inclus", "Support email sous 48h"]
                    },
                    {
                      name: "Évolution Active",
                      price: "800€/mois",
                      features: ["Tout Basique +", "3h de dev/mois", "Nouvelles features", "Optimisations", "Support sous 24h"]
                    },
                    {
                      name: "Partenariat Premium",
                      price: "2000€/mois",
                      features: ["Tout Évolution +", "15h de dev/mois", "Roadmap stratégique", "Support prioritaire", "Conseil mensuel"]
                    }
                  ].map((plan, i) => (
                    <div key={i} className="bg-white p-6">
                      <h4 className="font-light text-[#2A2A2A] mb-2">{plan.name}</h4>
                      <p className="text-2xl font-light text-[#0066FF] mb-4">{plan.price}</p>
                      <ul className="space-y-2">
                        {plan.features.map((f, j) => (
                          <li key={j} className="text-sm text-[#666666] font-light flex items-start gap-2">
                            <Check className="text-[#0066FF] flex-shrink-0 mt-0.5" size={14} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
        <ContactForm formType={formType} onClose={closeModal} initialData={initialData} availableOffers={availableOffers} />
      </Modal>
    </>
  );
}
