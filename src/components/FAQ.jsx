"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ({ title, subtitle, faqItems }) {
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="relative py-32 px-4 bg-[#FAFAFA]">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-24">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
            <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6 leading-[1.1]">
            {title}
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl font-light">
            {subtitle}
          </p>
        </div>

        <div className="space-y-px bg-[#E5E5E5]">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="group bg-white border-0"
              >
                <AccordionTrigger className="p-8 text-left font-light text-[#2A2A2A] hover:no-underline hover:text-[#0066FF] transition-colors text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-[#666666] leading-relaxed font-light">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-16 p-10 border border-[#E5E5E5] text-center">
          <p className="text-[#2A2A2A] text-lg font-light mb-6">
            Vous avez d'autres questions ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#0066FF] bg-[#0066FF] text-white hover:bg-white hover:text-[#0066FF] transition-all duration-300"
          >
            <span className="font-medium">Contactez-nous</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
