"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import {
  Zap, Palette, KeyRound, Scaling, Check, Server, MonitorSmartphone,
  PackageCheck, Banknote, Users, BarChart, Mail, AlertTriangle,
  TrendingUp, ShieldCheck, Sparkles, ArrowRight, Euro, CreditCard, ShoppingCart, CheckCircle
} from 'lucide-react';
import { FAQ } from '@/components/FAQ';

const StripeLogo = () => <span className="font-bold text-indigo-500">Stripe</span>;
const PayPalLogo = () => <span className="font-bold text-blue-400">PayPal</span>;

export default function ECommerceClient({ faqData }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [monthlyVisitors, setMonthlyVisitors] = useState(1000);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageCart, setAverageCart] = useState(80);

  const formType = 'e-commerce';

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

  // Calculs ROI e-commerce
  const monthlyOrders = Math.round((monthlyVisitors * conversionRate) / 100);
  const monthlyRevenue = monthlyOrders * averageCart;
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* 🎨 HERO REDESIGNÉ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[120px]" />

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <KeyRound className="text-green-400" size={16} />
                  100% sur-mesure
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Zap className="text-yellow-400" size={16} />
                  Performance maximale
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <CreditCard className="text-blue-400" size={16} />
                  Zéro abonnement
                </span>
              </div>

              {/* Titre */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Une Boutique{' '}
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Qui Vous Appartient
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Au-delà des plateformes standards, créez une <strong className="text-white">solution e-commerce performante et sur-mesure</strong>, sans abonnement mensuel, conçue pour convertir et évoluer.
                </p>
              </div>

              {/* CTA + Social proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => openModal()}
                  className="group relative px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center gap-3"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  Discuter de mon projet
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <span className="text-sm text-gray-300">
                    <strong className="text-white">Next.js</strong> + <strong className="text-white">MedusaJS</strong>
                  </span>
                </div>
              </div>

              {/* Micro-promesses */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "Propriété totale",
                  "Headless architecture",
                  "SEO optimisé",
                  "Paiements sécurisés"
                ].map((promise, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-300">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🎨 Section Problème REDESIGNÉE */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm text-yellow-400 mb-6">
              <AlertTriangle size={16} />
              <span className="font-semibold">Les Limites des Plateformes Standards</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Quand Shopify & Wix{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Freinent Votre Croissance
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Les plateformes SaaS sont excellentes pour démarrer, mais leur modèle montre vite ses faiblesses : <strong className="text-white">thèmes rigides</strong> qui brident votre marque, <strong className="text-white">lenteur</strong> due aux apps tierces, et <strong className="text-white">frais mensuels</strong> qui augmentent avec votre succès.
            </p>
          </div>
        </section>

        {/* 🎨 Section Approche Technique REDESIGNÉE */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 mb-6">
                <Zap size={16} />
                <span className="font-semibold">Notre Approche</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                La Maîtrise Technique au{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Service de la Vente
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Nous ne sommes pas des installateurs de thèmes. Chaque choix technique est pensé pour avoir un impact direct sur votre business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-green-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 🎨 Section Architecture Headless REDESIGNÉE */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Server size={16} />
                <span className="font-semibold">Architecture Headless</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Notre Secret :{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Headless & Open-Source
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Nous séparons le 'moteur' de la 'carrosserie' pour une flexibilité et une performance inégalées
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Server,
                  title: "Le Moteur (Back-end)",
                  subtitle: "MedusaJS",
                  description: "Pour la gestion, nous utilisons MedusaJS, une fondation e-commerce open-source robuste. C'est le cœur sécurisé : produits, commandes, clients, promotions.",
                  color: "violet"
                },
                {
                  icon: MonitorSmartphone,
                  title: "La Vitrine (Front-end)",
                  subtitle: "Next.js",
                  description: "Pour l'interface client, nous construisons une application 100% sur-mesure avec Next.js. Cette séparation garantit une UX unique et des performances exceptionnelles.",
                  color: "green"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color === 'violet' ? 'from-violet-500/20 to-purple-500/20 border-violet-500/30' : 'from-green-500/20 to-emerald-500/20 border-green-500/30'} backdrop-blur-sm border rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={item.color === 'violet' ? 'text-violet-400' : 'text-green-400'} size={28} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider">{item.title}</p>
                        <h3 className="text-2xl font-bold text-white">{item.subtitle}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 🎨 Fonctionnalités REDESIGNÉE */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 mb-6">
                <PackageCheck size={16} />
                <span className="font-semibold">Fonctionnalités Incluses</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Toutes les Fonctionnalités{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Sans les Contraintes
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-green-500/30 hover:bg-white/10 transition-all"
                >
                  <Check className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🎨 Calculateur ROI E-COMMERCE - NOUVELLE SECTION */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 mb-6">
                <TrendingUp size={16} />
                <span className="font-semibold">Simulation E-commerce</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Calculez Votre{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Chiffre d'Affaires
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Estimez le potentiel de votre boutique en ligne avec notre calculateur
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Visiteurs mensuels
                  </label>
                  <input
                    type="number"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Taux de conversion (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Panier moyen (€)
                  </label>
                  <input
                    type="number"
                    value={averageCart}
                    onChange={(e) => setAverageCart(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="80"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl p-8 border border-green-500/30">
                <p className="text-gray-300 text-center mb-6">
                  Avec <strong className="text-white">{monthlyVisitors} visiteurs/mois</strong> et un taux de conversion de <strong className="text-white">{conversionRate}%</strong> :
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">Commandes mensuelles</p>
                    <p className="text-3xl font-bold text-white">
                      {monthlyOrders}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">CA mensuel</p>
                    <p className="text-3xl font-bold text-green-400">
                      {monthlyRevenue.toLocaleString()}€
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">CA annuel</p>
                    <p className="text-3xl font-bold text-green-400 flex items-center justify-center gap-2">
                      <TrendingUp size={28} />
                      {yearlyRevenue.toLocaleString()}€
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a
                  href="#tarifs"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]"
                >
                  Voir les tarifs
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 🎨 Section Tarifs REDESIGNÉE */}
        <section id="tarifs" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 mb-6">
                <Euro size={16} />
                <span className="font-semibold">Investissement</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Tarifs pour une{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Boutique Performante
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Investissez dans une boutique qui vous appartient. <strong className="text-white">Aucun abonnement mensuel</strong>, uniquement votre investissement initial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-green-500/50 shadow-[0_0_60px_rgba(16,185,129,0.3)] scale-105 md:scale-110'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
                      ⭐ {pkg.cta}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
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
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-green-400" size={14} />
                        </div>
                        <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price}`)}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-green-500/50'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Note importante + Maintenance */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  💡 Investissement unique, rentabilité sur le long terme
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Contrairement aux plateformes SaaS qui prélèvent des frais mensuels à vie, vous investissez une seule fois dans une boutique qui <strong className="text-white">vous appartient totalement</strong>. Après la 1ère année, seuls l'hébergement (~100-200€/an) et la maintenance optionnelle s'appliquent.
                </p>
              </div>

              {/* Forfaits Maintenance */}
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  🔧 Maintenance & Support Continu (après période incluse)
                </h3>
                <p className="text-gray-400 text-center mb-8">
                  ⚠️ Le support inclus couvre les corrections de bugs. La maintenance payante ajoute les évolutions, le monitoring proactif et l'hébergement continu.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
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
                    <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="font-bold text-white mb-2">{plan.name}</h4>
                      <p className="text-2xl font-bold text-green-400 mb-4">{plan.price}</p>
                      <ul className="space-y-2">
                        {plan.features.map((f, j) => (
                          <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                            <Check className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
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
          <FAQ
            title={faqData.title}
            subtitle={faqData.subtitle}
            faqItems={faqData.items}
          />
        )}

        <Footer />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(formType)}>
        <ContactForm formType={formType} onClose={closeModal} initialData={initialData} availableOffers={availableOffers} />
      </Modal>
    </>
  );
}
