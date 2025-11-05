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
      <main className="min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Mentions Légales et Politique de Confidentialité
          </h1>
          <p className="text-gray-400 mb-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          {/* Section 1 : Mentions Légales */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">1. Mentions Légales</h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Éditeur du site</h3>
                <p>Le site <strong>killian-lecrut.com</strong> est édité par :</p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li><strong>Raison sociale :</strong> KIKIDEV</li>
                  <li><strong>Forme juridique :</strong> Entrepreneur Individuel</li>
                  <li><strong>SIREN :</strong> 922 893 169</li>
                  <li><strong>SIRET :</strong> 922 893 169 00016</li>
                  <li><strong>N° TVA intracommunautaire :</strong> FR80922893169</li>
                  <li><strong>Code APE :</strong> 62.01Z - Programmation informatique</li>
                  <li><strong>Adresse :</strong> CESSON, France</li>
                  <li><strong>Email :</strong> contact@killian-lecrut.com</li>
                  <li><strong>Téléphone :</strong> 06 41 97 03 83</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Directeur de publication</h3>
                <p>Le directeur de publication du site est <strong>Killian Lecrut</strong>, en sa qualité d'entrepreneur individuel.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Hébergement</h3>
                <p>Le site est hébergé par :</p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li><strong>Hébergeur :</strong> Hostinger International Ltd.</li>
                  <li><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
                  <li><strong>Localisation du serveur :</strong> France</li>
                  <li><strong>Site web :</strong> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">www.hostinger.fr</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Propriété intellectuelle</h3>
                <p>
                  L'ensemble du contenu de ce site (textes, images, logos, code source) est la propriété exclusive de KIKIDEV,
                  sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle,
                  est strictement interdite sans l'autorisation écrite préalable de l'éditeur.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 : Politique de Confidentialité */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">2. Politique de Confidentialité (RGPD)</h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Responsable du traitement des données</h3>
                <p>
                  Le responsable du traitement des données personnelles collectées sur ce site est <strong>Killian Lecrut</strong> (KIKIDEV),
                  joignable à l'adresse email : <a href="mailto:contact@killian-lecrut.com" className="text-violet-400 hover:underline">contact@killian-lecrut.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Données collectées et finalités</h3>
                <p className="mb-3">Nous collectons les données personnelles suivantes, uniquement lorsque vous nous les communiquez volontairement :</p>

                <div className="bg-gray-950/40 border border-white/10 rounded-xl p-6 mb-4">
                  <h4 className="font-semibold text-white mb-2">Via le formulaire de contact</h4>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Données collectées :</strong> Nom, prénom, email, téléphone (optionnel), entreprise (optionnel), message</li>
                    <li><strong>Finalité :</strong> Répondre à votre demande d'information ou de devis</li>
                    <li><strong>Base légale :</strong> Consentement (article 6.1.a du RGPD)</li>
                    <li><strong>Durée de conservation :</strong> 3 ans à compter du dernier contact</li>
                    <li><strong>Destinataires :</strong> Vos données sont envoyées directement à notre adresse email via le service EmailJS. Elles ne sont pas stockées dans une base de données tierce.</li>
                  </ul>
                </div>

                <div className="bg-gray-950/40 border border-white/10 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">Via Google Analytics</h4>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Données collectées :</strong> Données de navigation anonymisées (pages visitées, durée, provenance, type d'appareil)</li>
                    <li><strong>Finalité :</strong> Analyse statistique de l'audience et amélioration de l'expérience utilisateur</li>
                    <li><strong>Base légale :</strong> Consentement via le bandeau cookies</li>
                    <li><strong>Durée de conservation :</strong> 26 mois (paramétrage Google Analytics)</li>
                    <li><strong>Destinataires :</strong> Google LLC (États-Unis) - Accord de transfert UE-USA en vigueur</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Vos droits</h3>
                <p className="mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Droit d'accès :</strong> Obtenir confirmation que vos données sont traitées et en recevoir une copie</li>
                  <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> Supprimer vos données dans certaines conditions</li>
                  <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données dans certains cas</li>
                  <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données pour des raisons légitimes</li>
                  <li><strong>Droit de retirer votre consentement :</strong> À tout moment, sans affecter la licéité du traitement effectué avant le retrait</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@killian-lecrut.com" className="text-violet-400 hover:underline">contact@killian-lecrut.com</a>
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline ml-1">www.cnil.fr</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Sécurité des données</h3>
                <p>
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre
                  la destruction, la perte, l'altération, la divulgation ou l'accès non autorisés :
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Hébergement sur un serveur sécurisé en France</li>
                  <li>Connexion HTTPS (SSL/TLS) pour chiffrer les échanges</li>
                  <li>Accès limité aux données aux seules personnes habilitées</li>
                  <li>Pas de stockage de données bancaires sur notre site</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 : Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">3. Gestion des Cookies</h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Qu'est-ce qu'un cookie ?</h3>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web.
                  Il permet de conserver des informations sur votre navigation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Cookies utilisés sur ce site</h3>

                <div className="space-y-4">
                  <div className="bg-gray-950/40 border border-white/10 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-2">Cookies analytiques (Google Analytics)</h4>
                    <ul className="list-disc ml-6 space-y-1">
                      <li><strong>Nom :</strong> _ga, _gid, _gat</li>
                      <li><strong>Finalité :</strong> Mesurer l'audience et analyser le comportement des visiteurs</li>
                      <li><strong>Durée :</strong> 2 ans (_ga), 24h (_gid), 1 minute (_gat)</li>
                      <li><strong>Nécessite le consentement :</strong> Oui</li>
                    </ul>
                  </div>

                  <div className="bg-gray-950/40 border border-white/10 rounded-xl p-6">
                    <h4 className="font-semibold text-white mb-2">Cookies strictement nécessaires</h4>
                    <p className="mb-2">Ces cookies sont indispensables au fonctionnement du site et ne nécessitent pas votre consentement :</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Cookies de session (authentification si applicable)</li>
                      <li>Cookies de mémorisation de vos préférences (langue, cookies acceptés/refusés)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Comment gérer les cookies ?</h3>
                <p className="mb-3">Vous pouvez à tout moment modifier vos préférences concernant les cookies :</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Via le bandeau de consentement :</strong> Lors de votre première visite, un bandeau vous permet d'accepter ou refuser les cookies</li>
                  <li><strong>Via les paramètres de votre navigateur :</strong>
                    <ul className="ml-6 mt-1 list-circle space-y-1 text-sm">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Google Chrome</a></li>
                      <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Mozilla Firefox</a></li>
                      <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Safari</a></li>
                      <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Microsoft Edge</a></li>
                    </ul>
                  </li>
                  <li><strong>Désactiver Google Analytics :</strong> Installez le module complémentaire <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Google Analytics Opt-out</a></li>
                </ul>
                <p className="mt-3 text-sm text-gray-400">
                  ⚠️ Attention : La désactivation de certains cookies peut impacter votre expérience de navigation sur le site.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 : Service Tiers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">4. Services Tiers Utilisés</h2>

            <div className="space-y-6 text-gray-300">
              <div className="bg-gray-950/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">EmailJS</h3>
                <p>Le formulaire de contact utilise le service EmailJS pour l'envoi d'emails.</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Finalité :</strong> Transmission de votre message depuis le formulaire vers notre boîte email</li>
                  <li><strong>Données transmises :</strong> Nom, email, téléphone, entreprise, message</li>
                  <li><strong>Stockage :</strong> EmailJS ne stocke pas vos données de manière permanente, elles transitent uniquement</li>
                  <li><strong>Politique de confidentialité :</strong> <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">EmailJS Privacy Policy</a></li>
                </ul>
              </div>

              <div className="bg-gray-950/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Google Analytics</h3>
                <p>Nous utilisons Google Analytics pour analyser l'audience de notre site.</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Finalité :</strong> Statistiques de fréquentation et amélioration de l'expérience utilisateur</li>
                  <li><strong>Anonymisation :</strong> Les adresses IP sont anonymisées</li>
                  <li><strong>Politique de confidentialité :</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Google Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 : Liens externes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">5. Liens Externes</h2>
            <p className="text-gray-300">
              Ce site peut contenir des liens hypertextes vers d'autres sites web. Nous n'exerçons aucun contrôle sur ces sites
              et déclinons toute responsabilité quant à leur contenu ou leur politique de confidentialité. Nous vous encourageons
              à consulter les mentions légales et politiques de confidentialité de ces sites tiers.
            </p>
          </section>

          {/* Section 6 : Modifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">6. Modifications</h2>
            <p className="text-gray-300">
              Nous nous réservons le droit de modifier ces mentions légales et cette politique de confidentialité à tout moment.
              La version en vigueur est celle publiée sur cette page. Nous vous invitons à la consulter régulièrement.
              En cas de modification substantielle, nous vous en informerons par un avis sur notre page d'accueil.
            </p>
          </section>

          {/* Section 7 : Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">7. Nous Contacter</h2>
            <div className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/20 rounded-2xl p-8">
              <p className="text-gray-300 mb-4">
                Pour toute question relative à ces mentions légales, à notre politique de confidentialité,
                ou pour exercer vos droits sur vos données personnelles, vous pouvez nous contacter :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li><strong className="text-white">Par email :</strong> <a href="mailto:contact@killian-lecrut.com" className="text-violet-400 hover:underline">contact@killian-lecrut.com</a></li>
                <li><strong className="text-white">Par téléphone :</strong> <a href="tel:+33641970383" className="text-violet-400 hover:underline">06 41 97 03 83</a></li>
                <li><strong className="text-white">Par courrier :</strong> KIKIDEV - CESSON, France</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
