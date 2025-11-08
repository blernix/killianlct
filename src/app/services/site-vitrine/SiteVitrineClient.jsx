"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import {
  TrendingUp, ShieldCheck, Zap, Info, Users, Building, UserCheck,
  LayoutDashboard, FileText, Image as ImageIcon, MessageSquare, Phone,
  Newspaper, HelpCircle, CheckCircle, ArrowRight, Sparkles, Euro, Clock, Target
} from 'lucide-react';
import Image from 'next/image';
import { FAQ } from '@/components/FAQ';

export default function SiteVitrineClient({ faqData }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [monthlyVisitors, setMonthlyVisitors] = useState(500);
  const [conversionRate, setConversionRate] = useState(3);
  const [averageSale, setAverageSale] = useState(1500);
  const [selectedPackage, setSelectedPackage] = useState(2500);

  const formType = 'site-vitrine';

  // Packages disponibles
  const packages = [
    {
      name: "Essentiel",
      price: "1 000€ - 3 000€",
      description: "Pour démarrer votre présence en ligne",
      features: [
        "3-5 pages professionnelles",
        "Design basé sur template premium",
        "Formulaire de contact simple",
        "Responsive mobile & tablette",
        "SEO technique de base (balises meta, alt, Schema.org)",
        "Nom de domaine offert 1 an",
        "Hébergement inclus ou sur votre serveur",
        "1 mois de support technique",
        "Livraison : 3 semaines"
      ],
      cta: "Idéal pour démarrer",
      highlighted: false
    },
    {
      name: "Personnalisé",
      price: "2 500€ - 6 000€",
      description: "La solution la plus populaire",
      features: [
        "5-10 pages sur-mesure",
        "Design 100% personnalisé",
        "Blog intégré avec CMS Directus",
        "SEO optimisé : stratégie mots-clés + sitemap XML + GSC",
        "Intégration Google Analytics",
        "Formulaires avancés",
        "Formation CMS incluse (2h)",
        "Nom de domaine offert 1 an",
        "Hébergement inclus ou sur votre serveur",
        "3 mois de support technique",
        "Livraison : 3-4 semaines"
      ],
      cta: "Le plus populaire",
      highlighted: true
    },
    {
      name: "Avancé",
      price: "5 000€+",
      description: "Pour les projets ambitieux",
      features: [
        "10+ pages complexes",
        "Design premium sur-mesure",
        "Fonctionnalités personnalisées",
        "SEO approfondi : audit + stratégie contenu + backlinks",
        "Animations & interactions avancées",
        "Multilingue",
        "Intégrations tierces (API, CRM, etc.)",
        "CMS Directus avec workflows personnalisés",
        "Formation avancée (4h)",
        "Nom de domaine offert 1 an",
        "Hébergement premium inclus ou sur votre serveur",
        "6 mois de support premium",
        "Livraison : 4-6 semaines (selon complexité)"
      ],
      cta: "Discutons-en",
      highlighted: false
    }
  ];

  // Liste des offres pour le formulaire
  const availableOffers = packages.map(pkg => `${pkg.name} - ${pkg.price}`);

  // Calculs ROI
  const monthlyLeads = Math.round((monthlyVisitors * conversionRate) / 100);
  const monthlyRevenue = monthlyLeads * averageSale;
  const monthsToROI = (selectedPackage / monthlyRevenue).toFixed(1);
  const yearlyROI = (monthlyRevenue * 12) - selectedPackage;

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* 🎨 HERO REDESIGNÉ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
          {/* Grille de fond subtile */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          {/* Gradient spot violet */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]" />

          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* Badges en haut */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <Zap className="text-yellow-400" size={16} />
                  Livré en 3 semaines
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <ShieldCheck className="text-green-400" size={16} />
                  Performance garantie
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
                  <TrendingUp className="text-blue-400" size={16} />
                  SEO optimisé
                </span>
              </div>

              {/* Titre principal */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Votre{' '}
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Commercial Digital
                  </span>{' '}
                  Actif 24h/24
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Transformez votre présence en ligne avec un <strong className="text-white">site vitrine professionnel</strong>, performant et optimisé pour <strong className="text-white">générer des clients</strong>.
                </p>
              </div>

              {/* CTA principal + stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => openModal()}
                  className="group relative px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] flex items-center gap-3"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  Obtenir mon devis gratuit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 border-2 border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-2 border-gray-900" />
                  </div>
                  <span className="text-sm text-gray-300">
                    <strong className="text-white">50+ clients</strong> satisfaits
                  </span>
                </div>
              </div>

              {/* Micro-promesses en grille */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "Design sur-mesure",
                  "SEO optimisé",
                  "Mobile-first",
                  "Support inclus"
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

        {/* 🎨 Section Introduction REDESIGNÉE */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm text-violet-400 mb-6">
              <Info size={16} />
              <span className="font-semibold">Bien Plus qu'une Carte de Visite</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Un Site Vitrine, C'est Quoi{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Exactement ?
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Fondamentalement, un site vitrine présente votre entreprise, vos services et vos valeurs. Mais sa mission stratégique va bien au-delà : c'est un <strong className="text-white">écosystème d'information conçu pour générer des opportunités commerciales qualifiées</strong>. Contrairement à un site e-commerce, il ne gère pas de transactions directes, ce qui le rend plus simple et plus rapide à déployer.
            </p>
          </div>
        </section>

        {/* 🎨 Section 4 Piliers REDESIGNÉE */}
        <section className="relative py-24 px-4 overflow-hidden bg-black">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Target size={16} />
                <span className="font-semibold">Les 4 Piliers de la Réussite</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Un Écosystème Conçu pour{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Bâtir la Confiance
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Le rôle d'un site vitrine repose sur quatre piliers qui transforment un simple visiteur en prospect qualifié
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Visibilité & Notoriété",
                  description: "Apparaître dans les résultats Google lorsque des clients recherchent vos services. Votre entreprise devient accessible 24h/24, 7j/7, sans contraintes géographiques."
                },
                {
                  icon: ShieldCheck,
                  title: "Crédibilité & Image de Marque",
                  description: "Un design professionnel et un contenu de qualité sont des signaux de confiance puissants. Vous contrôlez votre récit de marque pour vous différencier."
                },
                {
                  icon: Zap,
                  title: "Acquisition de Prospects",
                  description: "Convertir les visiteurs anonymes en contacts identifiés via des formulaires de contact clairs et des appels à l'action incitatifs."
                },
                {
                  icon: Info,
                  title: "Centre d'Information",
                  description: "Centraliser les informations essentielles (horaires, services, FAQ) pour améliorer l'expérience client et soulager votre service client."
                }
              ].map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-violet-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 🎨 Calculateur ROI - NOUVELLE SECTION */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 mb-6">
                <TrendingUp size={16} />
                <span className="font-semibold">Simulation Personnalisée</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Calculez Votre{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Retour sur Investissement
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Combien de clients votre site peut-il vous apporter ? Faites le calcul.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Visiteurs mensuels estimés
                  </label>
                  <input
                    type="number"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                    placeholder="500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Taux de conversion (%)
                  </label>
                  <input
                    type="number"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                    placeholder="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tarifs prestation moyenne (€)
                  </label>
                  <input
                    type="number"
                    value={averageSale}
                    onChange={(e) => setAverageSale(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/40 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                    placeholder="1500"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl p-8 border border-green-500/30">
                <p className="text-gray-300 text-center mb-6">
                  Avec <strong className="text-white">{monthlyVisitors} visiteurs/mois</strong> et un taux de conversion de <strong className="text-white">{conversionRate}%</strong> :
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">Leads mensuels</p>
                    <p className="text-3xl font-bold text-white">
                      {monthlyLeads}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">CA mensuel potentiel</p>
                    <p className="text-3xl font-bold text-green-400">
                      {monthlyRevenue.toLocaleString()}€
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">ROI sur 12 mois</p>
                    <p className="text-3xl font-bold text-green-400 flex items-center justify-center gap-2">
                      <TrendingUp size={28} />
                      +{yearlyROI > 0 ? yearlyROI.toLocaleString() : 0}€
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
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm text-violet-400 mb-6">
                <Euro size={16} />
                <span className="font-semibold">Tarifs Transparents</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Un Investissement{' '}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Rentable
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Le prix d'un site dépend de vos ambitions. La vraie question est : combien de clients me faut-il pour le rentabiliser ? Souvent, <strong className="text-white">un ou deux suffisent</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-2 border-violet-500/50 shadow-[0_0_60px_rgba(139,92,246,0.3)] scale-105 md:scale-110'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
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
                          <CheckCircle className="text-green-400" size={14} />
                        </div>
                        <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openModal(`${pkg.name} - ${pkg.price}`)}
                    className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-violet-500/50'
                    }`}
                  >
                    {pkg.highlighted ? 'Choisir cette offre' : pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            {/* Coûts après la première année */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  💡 Coûts après la première année
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: "🌐", title: "Nom de Domaine", price: "~15€/an", desc: "Offert la 1ère année, puis renouvellement annuel" },
                    { icon: "☁️", title: "Hébergement", price: "Inclus ou 100€/an", desc: "Sur notre serveur (payant) ou le vôtre (gratuit)" },
                    { icon: "🔧", title: "Support / Maintenance", price: "Optionnel", desc: "Forfaits disponibles selon vos besoins" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-violet-400 font-bold mb-2">{item.price}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-400 mt-6">
                  Le nom de domaine et l'hébergement (si sur notre serveur) sont <strong className="text-white">offerts pendant 1 an</strong>. Après, vous choisissez de renouveler ou de migrer.
                </p>
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
