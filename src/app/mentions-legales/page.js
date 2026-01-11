import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Mentions Légales et Politique de Confidentialité | Killian Lecrut",
  description: "Mentions légales, politique de confidentialité et gestion des données personnelles de l'agence Killian Lecrut.",
  robots: "noindex, follow",
  alternates: {
    canonical: '/mentions-legales'
  }
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-[#FAFAFA]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] bg-white">
              <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                Informations Légales
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
              Mentions Légales et Politique de Confidentialité
            </h1>
            <p className="text-[#666666] font-light">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">{/* Content wrapper */}

          {/* Section 1 : Mentions Légales */}
          <section className="mb-16">
            <h2 className="text-3xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 pb-4 border-b-2 border-[#0066FF]">1. Mentions Légales</h2>

            <div className="space-y-8">
              <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Éditeur du site</h3>
                <p className="text-[#666666] font-light mb-4">Le site <strong className="text-[#2A2A2A] font-normal">killian-lecrut.com</strong> est édité par :</p>
                <div className="space-y-2 text-[#666666] font-light">
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Raison sociale :</span> <strong className="text-[#2A2A2A] font-normal">KIKIDEV</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Forme juridique :</span> <strong className="text-[#2A2A2A] font-normal">Entrepreneur Individuel</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">SIREN :</span> <strong className="text-[#2A2A2A] font-normal">922 893 169</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">SIRET :</span> <strong className="text-[#2A2A2A] font-normal">922 893 169 00016</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">N° TVA :</span> <strong className="text-[#2A2A2A] font-normal">FR80922893169</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Code APE :</span> <strong className="text-[#2A2A2A] font-normal">62.01Z - Programmation informatique</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Adresse :</span> <strong className="text-[#2A2A2A] font-normal">CESSON, France</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Email :</span> <strong className="text-[#2A2A2A] font-normal">killian.lecrut@gmail.com</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Téléphone :</span> <strong className="text-[#2A2A2A] font-normal">06 41 97 03 83</strong></p>
                </div>
              </div>

              <div className="border border-[#E5E5E5] bg-white p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Directeur de publication</h3>
                <p className="text-[#666666] font-light">Le directeur de publication du site est <strong className="text-[#2A2A2A] font-normal">Killian Lecrut</strong>, en sa qualité d'entrepreneur individuel.</p>
              </div>

              <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Hébergement</h3>
                <p className="text-[#666666] font-light mb-4">Le site est hébergé par :</p>
                <div className="space-y-2 text-[#666666] font-light">
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Hébergeur :</span> <strong className="text-[#2A2A2A] font-normal">Hostinger International Ltd.</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Adresse :</span> <strong className="text-[#2A2A2A] font-normal">61 Lordou Vironos Street, 6023 Larnaca, Chypre</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Serveur :</span> <strong className="text-[#2A2A2A] font-normal">France</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em] text-[#666666]">Site web :</span> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline font-normal">www.hostinger.fr</a></p>
                </div>
              </div>

              <div className="border border-[#E5E5E5] bg-white p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Propriété intellectuelle</h3>
                <p className="text-[#666666] font-light leading-relaxed">
                  L'ensemble du contenu de ce site (textes, images, logos, code source) est la propriété exclusive de KIKIDEV,
                  sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle,
                  est strictement interdite sans l'autorisation écrite préalable de l'éditeur.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 : Politique de Confidentialité */}
          <section className="mb-16">
            <h2 className="text-3xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 pb-4 border-b-2 border-[#0066FF]">2. Politique de Confidentialité (RGPD)</h2>

            <div className="space-y-8">
              <div className="border border-[#E5E5E5] bg-white p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Responsable du traitement des données</h3>
                <p className="text-[#666666] font-light">
                  Le responsable du traitement des données personnelles collectées sur ce site est <strong className="text-[#2A2A2A] font-normal">Killian Lecrut</strong> (KIKIDEV),
                  joignable à l'adresse email : <a href="mailto:killian.lecrut@gmail.com" className="text-[#0066FF] hover:underline">killian.lecrut@gmail.com</a>
                </p>
              </div>

              <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Données collectées et finalités</h3>
                <p className="text-[#666666] font-light mb-6">Nous collectons les données personnelles suivantes, uniquement lorsque vous nous les communiquez volontairement :</p>

                <div className="space-y-px bg-[#E5E5E5] mb-6">
                  <div className="bg-white p-6">
                    <h4 className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-4">Via le formulaire de contact</h4>
                    <div className="space-y-3 text-[#666666] font-light text-sm">
                      <p><span className="text-xs uppercase tracking-[0.2em]">Données collectées :</span> <strong className="text-[#2A2A2A] font-normal">Nom, prénom, email, téléphone (optionnel), entreprise (optionnel), message</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Finalité :</span> <strong className="text-[#2A2A2A] font-normal">Répondre à votre demande d'information ou de devis</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Base légale :</span> <strong className="text-[#2A2A2A] font-normal">Consentement (article 6.1.a du RGPD)</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Conservation :</span> <strong className="text-[#2A2A2A] font-normal">3 ans à compter du dernier contact</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Destinataires :</span> <strong className="text-[#2A2A2A] font-normal">Envoi via EmailJS, pas de stockage en base tierce</strong></p>
                    </div>
                  </div>

                  <div className="bg-white p-6">
                    <h4 className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-4">Via Google Analytics</h4>
                    <div className="space-y-3 text-[#666666] font-light text-sm">
                      <p><span className="text-xs uppercase tracking-[0.2em]">Données collectées :</span> <strong className="text-[#2A2A2A] font-normal">Données de navigation anonymisées</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Finalité :</span> <strong className="text-[#2A2A2A] font-normal">Analyse statistique de l'audience</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Base légale :</span> <strong className="text-[#2A2A2A] font-normal">Consentement via bandeau cookies</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Conservation :</span> <strong className="text-[#2A2A2A] font-normal">26 mois</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Destinataires :</span> <strong className="text-[#2A2A2A] font-normal">Google LLC (USA) - Accord UE-USA</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#E5E5E5] bg-white p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Vos droits</h3>
                <p className="text-[#666666] font-light mb-6">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
                <div className="space-y-3 text-[#666666] font-light">
                  <p><span className="text-[#2A2A2A] font-normal">• Droit d'accès :</span> Obtenir confirmation que vos données sont traitées</p>
                  <p><span className="text-[#2A2A2A] font-normal">• Droit de rectification :</span> Corriger des données inexactes</p>
                  <p><span className="text-[#2A2A2A] font-normal">• Droit à l'effacement :</span> Supprimer vos données</p>
                  <p><span className="text-[#2A2A2A] font-normal">• Droit à la limitation :</span> Limiter le traitement de vos données</p>
                  <p><span className="text-[#2A2A2A] font-normal">• Droit à la portabilité :</span> Récupérer vos données</p>
                  <p><span className="text-[#2A2A2A] font-normal">• Droit d'opposition :</span> Vous opposer au traitement</p>
                  <p><span className="text-[#2A2A2A] font-normal">• Droit de retrait :</span> Retirer votre consentement à tout moment</p>
                </div>
                <div className="mt-6 p-4 border border-[#E5E5E5] bg-[#FAFAFA]">
                  <p className="text-[#666666] font-light text-sm">
                    Pour exercer ces droits : <a href="mailto:killian.lecrut@gmail.com" className="text-[#0066FF] hover:underline">killian.lecrut@gmail.com</a>
                  </p>
                  <p className="text-[#666666] font-light text-sm mt-2">
                    Réclamation CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">www.cnil.fr</a>
                  </p>
                </div>
              </div>

              <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Sécurité des données</h3>
                <p className="text-[#666666] font-light mb-4">
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
                </p>
                <div className="space-y-2 text-[#666666] font-light">
                  <p>• Hébergement sur un serveur sécurisé en France</p>
                  <p>• Connexion HTTPS (SSL/TLS) pour chiffrer les échanges</p>
                  <p>• Accès limité aux données aux seules personnes habilitées</p>
                  <p>• Pas de stockage de données bancaires sur notre site</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 : Cookies */}
          <section className="mb-16">
            <h2 className="text-3xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 pb-4 border-b-2 border-[#0066FF]">3. Gestion des Cookies</h2>

            <div className="space-y-8">
              <div className="border border-[#E5E5E5] bg-white p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Qu'est-ce qu'un cookie ?</h3>
                <p className="text-[#666666] font-light leading-relaxed">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web.
                  Il permet de conserver des informations sur votre navigation.
                </p>
              </div>

              <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-6">Cookies utilisés sur ce site</h3>

                <div className="space-y-px bg-[#E5E5E5]">
                  <div className="bg-white p-6">
                    <h4 className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-4">Cookies analytiques (Google Analytics)</h4>
                    <div className="space-y-2 text-[#666666] font-light text-sm">
                      <p><span className="text-xs uppercase tracking-[0.2em]">Nom :</span> <strong className="text-[#2A2A2A] font-normal">_ga, _gid, _gat</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Finalité :</span> <strong className="text-[#2A2A2A] font-normal">Mesurer l'audience</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Durée :</span> <strong className="text-[#2A2A2A] font-normal">2 ans (_ga), 24h (_gid), 1 min (_gat)</strong></p>
                      <p><span className="text-xs uppercase tracking-[0.2em]">Consentement :</span> <strong className="text-[#2A2A2A] font-normal">Oui</strong></p>
                    </div>
                  </div>

                  <div className="bg-white p-6">
                    <h4 className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-4">Cookies strictement nécessaires</h4>
                    <p className="text-[#666666] font-light text-sm mb-3">Indispensables au fonctionnement, ne nécessitent pas de consentement :</p>
                    <div className="space-y-2 text-[#666666] font-light text-sm">
                      <p>• Cookies de session (authentification)</p>
                      <p>• Cookies de préférences (langue, choix cookies)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#E5E5E5] bg-white p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Comment gérer les cookies ?</h3>
                <p className="text-[#666666] font-light mb-6">Vous pouvez modifier vos préférences à tout moment :</p>
                <div className="space-y-4 text-[#666666] font-light">
                  <p><span className="text-[#2A2A2A] font-normal">• Bandeau de consentement :</span> Lors de votre première visite</p>
                  <div>
                    <p className="text-[#2A2A2A] font-normal mb-2">• Paramètres de votre navigateur :</p>
                    <div className="ml-6 space-y-1 text-sm">
                      <p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">Google Chrome</a></p>
                      <p><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">Mozilla Firefox</a></p>
                      <p><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">Safari</a></p>
                      <p><a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">Microsoft Edge</a></p>
                    </div>
                  </div>
                  <p><span className="text-[#2A2A2A] font-normal">• Module Google Analytics Opt-out :</span> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">Télécharger</a></p>
                </div>
                <div className="mt-6 p-4 border border-[#E5E5E5] bg-[#FAFAFA]">
                  <p className="text-[#666666] font-light text-sm">
                    La désactivation de certains cookies peut impacter votre expérience de navigation
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 : Service Tiers */}
          <section className="mb-16">
            <h2 className="text-3xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 pb-4 border-b-2 border-[#0066FF]">4. Services Tiers Utilisés</h2>

            <div className="space-y-px bg-[#E5E5E5]">
              <div className="bg-white p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">EmailJS</h3>
                <p className="text-[#666666] font-light mb-4">Le formulaire de contact utilise le service EmailJS pour l'envoi d'emails.</p>
                <div className="space-y-2 text-[#666666] font-light text-sm">
                  <p><span className="text-xs uppercase tracking-[0.2em]">Finalité :</span> <strong className="text-[#2A2A2A] font-normal">Transmission de votre message vers notre email</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em]">Données :</span> <strong className="text-[#2A2A2A] font-normal">Nom, email, téléphone, entreprise, message</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em]">Stockage :</span> <strong className="text-[#2A2A2A] font-normal">Transit uniquement, pas de stockage permanent</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em]">Confidentialité :</span> <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">EmailJS Privacy Policy</a></p>
                </div>
              </div>

              <div className="bg-[#FAFAFA] p-8">
                <h3 className="text-xl font-light text-[#2A2A2A] mb-4">Google Analytics</h3>
                <p className="text-[#666666] font-light mb-4">Analyse de l'audience du site.</p>
                <div className="space-y-2 text-[#666666] font-light text-sm">
                  <p><span className="text-xs uppercase tracking-[0.2em]">Finalité :</span> <strong className="text-[#2A2A2A] font-normal">Statistiques de fréquentation</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em]">Anonymisation :</span> <strong className="text-[#2A2A2A] font-normal">Les adresses IP sont anonymisées</strong></p>
                  <p><span className="text-xs uppercase tracking-[0.2em]">Confidentialité :</span> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">Google Privacy Policy</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 : Liens externes */}
          <section className="mb-16">
            <h2 className="text-3xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 pb-4 border-b-2 border-[#0066FF]">5. Liens Externes</h2>
            <div className="border border-[#E5E5E5] bg-white p-8">
              <p className="text-[#666666] font-light leading-relaxed">
                Ce site peut contenir des liens hypertextes vers d'autres sites web. Nous n'exerçons aucun contrôle sur ces sites
                et déclinons toute responsabilité quant à leur contenu ou leur politique de confidentialité. Nous vous encourageons
                à consulter les mentions légales et politiques de confidentialité de ces sites tiers.
              </p>
            </div>
          </section>

          {/* Section 6 : Modifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 pb-4 border-b-2 border-[#0066FF]">6. Modifications</h2>
            <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-8">
              <p className="text-[#666666] font-light leading-relaxed">
                Nous nous réservons le droit de modifier ces mentions légales et cette politique de confidentialité à tout moment.
                La version en vigueur est celle publiée sur cette page. Nous vous invitons à la consulter régulièrement.
                En cas de modification substantielle, nous vous en informerons par un avis sur notre page d'accueil.
              </p>
            </div>
          </section>

          {/* Section 7 : Contact */}
          <section className="mb-16">
            <h2 className="text-3xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 pb-4 border-b-2 border-[#0066FF]">7. Nous Contacter</h2>
            <div className="border-2 border-[#0066FF] bg-white p-12">
              <p className="text-[#666666] font-light mb-8 leading-relaxed">
                Pour toute question relative à ces mentions légales, à notre politique de confidentialité,
                ou pour exercer vos droits sur vos données personnelles, vous pouvez nous contacter :
              </p>
              <div className="space-y-4 text-[#666666] font-light">
                <p><span className="text-xs uppercase tracking-[0.2em]">Email :</span> <a href="mailto:killian.lecrut@gmail.com" className="text-[#0066FF] hover:underline font-normal">killian.lecrut@gmail.com</a></p>
                <p><span className="text-xs uppercase tracking-[0.2em]">Téléphone :</span> <a href="tel:+33641970383" className="text-[#0066FF] hover:underline font-normal">06 41 97 03 83</a></p>
                <p><span className="text-xs uppercase tracking-[0.2em]">Courrier :</span> <strong className="text-[#2A2A2A] font-normal">KIKIDEV - CESSON, France</strong></p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
