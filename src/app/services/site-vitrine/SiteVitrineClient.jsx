"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import ROICalculator from "@/components/ROICalculator";
import {
  TrendingUp, ShieldCheck, Zap, Info, Users, Building, UserCheck,
  LayoutDashboard, FileText, Image as ImageIcon, MessageSquare, Phone,
  Newspaper, HelpCircle, CheckCircle, ArrowRight, Sparkles, Euro, Clock, Target,
  ChevronUp, ChevronDown
} from 'lucide-react';
import Image from 'next/image';

export default function SiteVitrineClient({ faqData }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const formType = 'site-vitrine';

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Packages disponibles
  const packages = [
    {
      name: "Essentiel",
      price: "1000-3000€",
      monthly: "35€/mois",
      description: "Pour démarrer votre présence en ligne",
      features: [
        "3-5 pages professionnelles",
        "Design basé sur template premium",
        "Formulaire de contact simple",
        "Responsive mobile & tablette",
        "SEO technique de base (balises meta, alt, Schema.org)",
        "Nom de domaine inclus",
        "Hébergement premium inclus",
        "Certificat SSL/TLS",
        "1 mois de support technique",
        "Livraison : 3 semaines"
      ],
      cta: "Idéal pour démarrer",
      highlighted: false
    },
    {
      name: "Personnalisé",
      price: "4 500€",
      monthly: "50€/mois",
      description: "La solution la plus populaire",
      features: [
        "5-10 pages sur-mesure",
        "Design 100% personnalisé",
        "Blog intégré avec CMS Directus",
        "SEO optimisé : stratégie mots-clés + sitemap XML + GSC",
        "Intégration Google Analytics",
        "Formulaires avancés",
        "Formation CMS incluse (2h)",
        "Nom de domaine inclus",
        "Hébergement premium inclus",
        "Certificat SSL/TLS",
        "3 mois de support technique",
        "Livraison : 3-4 semaines"
      ],
      cta: "Le plus populaire",
      highlighted: true
    },
    {
      name: "Avancé",
      price: "Sur devis",
      monthly: "75€/mois",
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
        "Nom de domaine inclus",
        "Hébergement premium inclus",
        "Certificat SSL/TLS",
        "6 mois de support premium",
        "Livraison : 4-6 semaines (selon complexité)"
      ],
      cta: "Discutons-en",
      highlighted: false
    }
  ];

  // Liste des offres pour le formulaire
  const availableOffers = packages.map(pkg => `${pkg.name} - ${pkg.price}${pkg.monthly ? ` + ${pkg.monthly}` : ''}`);

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
                <Zap className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Livré en 3 semaines</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <ShieldCheck className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">Performance garantie</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white">
                <TrendingUp className="text-[#0066FF]" size={16} />
                <span className="text-sm text-[#2A2A2A] font-light">SEO optimisé</span>
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-10 leading-[1.05]">
              Votre{' '}
              <span className="text-[#0066FF]">Commercial Digital</span>{' '}
              Actif 24h/24
            </h1>

            <p className="text-xl sm:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed mb-16 font-light">
              Transformez votre présence en ligne avec un <strong className="text-[#2A2A2A] font-normal">site vitrine professionnel</strong>, performant et optimisé pour <strong className="text-[#2A2A2A] font-normal">générer des clients</strong>.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => openModal()}
                className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Obtenir mon devis gratuit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <div className="flex items-center gap-3 px-6 py-3 border border-[#E5E5E5] bg-white">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#0066FF] border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-[#2A2A2A] border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-[#666666] border-2 border-white" />
                </div>
                <span className="text-sm text-[#666666] font-light">
                  <strong className="text-[#2A2A2A] font-medium">50+ clients</strong> satisfaits
                </span>
              </div>
            </div>

            {/* Micro-promesses */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] max-w-4xl mx-auto">
              {[
                "Design sur-mesure",
                "SEO optimisé",
                "Mobile-first",
                "Support inclus"
              ].map((promise, i) => (
                <div key={i} className="flex items-center gap-3 p-6 bg-white hover:bg-[#FAFAFA] transition-colors">
                  <CheckCircle className="text-[#0066FF] flex-shrink-0" size={18} />
                  <span className="text-sm text-[#2A2A2A] font-light">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Introduction */}
        <section className="relative py-32 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
              <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                Bien Plus qu'une Carte de Visite
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
              Un Site Vitrine, C'est Quoi{' '}
              <span className="text-[#0066FF]">Exactement</span> ?
            </h2>

            <p className="text-lg text-[#666666] leading-relaxed font-light">
              Fondamentalement, un site vitrine présente votre entreprise, vos services et vos valeurs. Mais sa mission stratégique va bien au-delà : c'est un <strong className="text-[#2A2A2A] font-normal">écosystème d'information conçu pour générer des opportunités commerciales qualifiées</strong>. Contrairement à un site e-commerce, il ne gère pas de transactions directes, ce qui le rend plus simple et plus rapide à déployer.
            </p>
          </div>
        </section>

        {/* Section 4 Piliers */}
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
                <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                  Les 4 Piliers de la Réussite
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Un Écosystème Conçu pour{' '}
                <span className="text-[#0066FF]">Bâtir la Confiance</span>
              </h2>

              <p className="text-lg text-[#666666] max-w-3xl mx-auto font-light">
                Le rôle d'un site vitrine repose sur quatre piliers qui transforment un simple visiteur en prospect qualifié
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5]">
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
                    className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mb-8 group-hover:border-[#0066FF] transition-colors">
                      <Icon className="text-[#0066FF]" size={24} />
                    </div>
                    <h3 className="text-xl font-light text-[#2A2A2A] mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Calculateur ROI - Adapter au style Swiss */}
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
                Calculez Votre <span className="text-[#0066FF]">Retour sur Investissement</span>
              </h2>

              <p className="text-lg text-[#666666] font-light">
                Combien de clients votre site peut-il vous apporter ? Faites le calcul.
              </p>
            </div>

            <ROICalculator
              title={<>Calculez Votre <span className="text-[#0066FF]">Retour sur Investissement</span></>}
              subtitle="Combien de clients votre site peut-il vous apporter ? Faites le calcul."
              color="cyan"
              inputs={[
                {
                  name: 'monthlyVisitors',
                  label: 'Visiteurs mensuels estimés',
                  defaultValue: 500,
                  min: 0,
                  max: 100000,
                  step: 50,
                  placeholder: '500'
                },
                {
                  name: 'conversionRate',
                  label: 'Taux de conversion (%)',
                  defaultValue: 3,
                  min: 0,
                  max: 100,
                  step: 0.5,
                  placeholder: '3'
                },
                {
                  name: 'averageSale',
                  label: 'Tarifs prestation moyenne (€)',
                  defaultValue: 1500,
                  min: 0,
                  max: 100000,
                  step: 100,
                  placeholder: '1500'
                }
              ]}
              calculate={(values) => {
                const monthlyLeads = Math.round((values.monthlyVisitors * values.conversionRate) / 100);
                const monthlyRevenue = monthlyLeads * values.averageSale;
                const yearlyROI = (monthlyRevenue * 12);

                return {
                  description: `Avec <strong class="text-[#2A2A2A]">${values.monthlyVisitors} visiteurs/mois</strong> et un taux de conversion de <strong class="text-[#2A2A2A]">${values.conversionRate}%</strong> :`,
                  metrics: [
                    {
                      label: 'Leads mensuels',
                      value: monthlyLeads,
                      highlight: false
                    },
                    {
                      label: 'CA mensuel potentiel',
                      value: `${monthlyRevenue.toLocaleString()}€`,
                      highlight: true
                    },
                    {
                      label: 'ROI sur 12 mois',
                      value: `+${yearlyROI > 0 ? yearlyROI.toLocaleString() : 0}€`,
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
                  Tarifs Transparents
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
                Un Investissement{' '}
                <span className="text-[#0066FF]">Rentable</span>
              </h2>

              <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                Le prix d'un site dépend de vos ambitions. La vraie question est : combien de clients me faut-il pour le rentabiliser ? Souvent, <strong className="text-[#2A2A2A] font-normal">un ou deux suffisent</strong>.
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
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light text-[#2A2A2A]">
                        {pkg.price.replace('€', '')}
                      </span>
                      {pkg.price.includes('€') && <span className="text-2xl text-[#666666]">€</span>}
                    </div>
                    {pkg.monthly && <p className="text-[#0066FF] font-light mt-2">+ {pkg.monthly}</p>}
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
                    onClick={() => openModal(`${pkg.name} - ${pkg.price}${pkg.monthly ? ` + ${pkg.monthly}` : ''}`)}
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

            {/* Ce que comprend l'abonnement */}
            <div className="max-w-4xl mx-auto">
              <div className="relative border border-[#E5E5E5] bg-white p-12">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0066FF] text-white text-sm font-medium">
                  Que comprend l'abonnement ?
                </div>

                <div className="grid sm:grid-cols-2 gap-px bg-[#E5E5E5] mt-4">
                  {[
                    "Hébergement cloud premium (serveurs français, sauvegardes quotidiennes)",
                    "Nom de domaine (renouvellement annuel inclus)",
                    "Certificat SSL/TLS (sécurité HTTPS)",
                    "Mises à jour de sécurité",
                    "Modifications de contenu (textes, images, coordonnées)",
                    "Support technique par email",
                    "Surveillance et maintenance préventive"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white">
                      <CheckCircle className="text-[#0066FF] flex-shrink-0 mt-1" size={18} />
                      <p className="text-[#666666] leading-relaxed font-light">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note finale */}
              <div className="mt-12 text-center">
                <p className="text-sm text-[#666666] max-w-3xl mx-auto leading-relaxed p-8 border border-[#E5E5E5] bg-white font-light">
                  <strong className="text-[#2A2A2A] font-medium">Pas de surprise, pas de frais cachés.</strong> Votre site reste en ligne, sécurisé et performant tant que l'abonnement est actif.
                </p>
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
