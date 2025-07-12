"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqItems = [
    {
      value: "q1",
      question: "Comment se déroule la mise en ligne de mon site ?",
      answer: `Une fois le site finalisé et validé, je m’occupe de tout. Deux options s'offrent à vous : un hébergement clé en main sur mon serveur (avec maintenance incluse), ou une installation sur votre propre serveur (OVH, etc.) avec mon accompagnement technique.`
    },
    {
      value: "q2",
      question: "Dois-je acheter un nom de domaine avant de commencer ?",
      answer: `Oui, c'est indispensable. Si vous n'en avez pas, pas d'inquiétude, je peux vous conseiller sur les meilleures options (OVH, Namecheap...) et vous aider à le configurer correctement pour votre projet.`
    },
    {
      value: "q3",
      question: "Quels types d'outils pouvez-vous connecter à mon site ?",
      answer: `Je peux intégrer une large gamme de services pour étendre les capacités de votre site, notamment : des systèmes de paiement (Stripe), des outils d'emailing (Brevo), des agendas (Google Calendar), et bien sûr des automatisations sur-mesure (n8n) et votre espace d'administration (Directus).`
    },
    {
      value: "q4",
      question: "Y a-t-il des coûts ou abonnements cachés ?",
      answer: `Non, la transparence est totale. Certains services externes comme Stripe ou Google Cloud fonctionnent à l'usage, mais souvent avec des offres gratuites généreuses. Si vous optez pour mon offre d'hébergement, tout est compris dans un abonnement annuel clair : hébergement, sécurité et maintenance.`
    },
    {
      value: "q5",
      question: "Pourrai-je modifier mon site moi-même après la livraison ?",
      answer: `Absolument, et en toute sécurité. Grâce à l'espace d'administration personnalisé, vous pouvez gérer tous vos contenus (textes, images, articles…) sans jamais risquer de modifier le design ou de casser une fonctionnalité.`
    }
  ];

  return (
    <section
      role="region"
      aria-labelledby="faq-title"
      className="py-24 sm:py-32 px-4"
      id="faq"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="faq-title"
          className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500text-transparent bg-clip-text"
        >
          Questions fréquentes
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Quelques réponses pour vous aider à y voir plus clair.
        </p>

        <div className="mt-12 text-left">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.value} 
                value={item.value}
                // On transforme chaque item en carte de verre, avec un espace en dessous
                className="mb-4 rounded-2xl border bg-gray-950/20 backdrop-blur-md border-white/10"
              >
                <AccordionTrigger className="p-6 text-left font-semibold text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}