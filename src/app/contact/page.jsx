import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Agence Web Melun (77) | Killian Lecrut - Expert Sites Professionnels",
  description: "Contactez l'agence web Killian Lecrut pour créer votre site vitrine, optimiser votre SEO ou automatiser vos processus. Réponse sous 24h, devis gratuit.",
  keywords: "contact agence web Melun, création site internet Seine-et-Marne, expert SEO 77, développeur web Melun, contact killian lecrut",
  openGraph: {
    title: 'Contact - Agence Web Killian Lecrut',
    description: 'Contactez l\'agence web Killian Lecrut pour votre projet de site internet',
    url: 'https://killian-lecrut.com/contact',
    images: [{ url: 'https://killian-lecrut.com/logoK.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
