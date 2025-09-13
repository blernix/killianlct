// Fichier : /components/FAQ.jsx
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ({ title, subtitle, faqItems }) {
  if (!faqItems || faqItems.length === 0) {
    return null; // Ne rien afficher si pas de questions
  }

  return (
    <section id="faq" className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          {subtitle}
        </p>

        <div className="mt-12 text-left">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.value} 
                value={item.value}
                className="mb-4 rounded-2xl border bg-gray-950/20 backdrop-blur-md border-white/20"
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