"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { trackFAQToggle } from '@/lib/tracking';
import { Reveal } from '@/components/ui/Reveal';

export function FAQ({ title, subtitle, faqItems }) {
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal className="mb-24">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
            <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.1]">
            {title}
          </h2>
          <p className="text-lg text-[#666666] dark:text-[#999999] max-w-2xl font-light">
            {subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-px bg-[#E5E5E5] dark:bg-[#2A2A2A]">
            <Accordion type="single" collapsible className="w-full" onValueChange={(value) => {
                if (value) {
                  const openedItem = faqItems.find(i => i.value === value);
                  if (openedItem) {
                    trackFAQToggle(openedItem.question, 'home', true);
                  }
                }
              }}>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="group bg-white dark:bg-[#1A1A1A] border-0"
                >
                  <AccordionTrigger className="p-8 text-left font-light text-[#2A2A2A] dark:text-[#FAFAFA] hover:no-underline hover:text-[#0066FF] transition-colors text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <div className="p-10 border border-[#E5E5E5] dark:border-[#2A2A2A] text-center">
            <p className="text-[#2A2A2A] dark:text-[#FAFAFA] text-lg font-light mb-6">
              Vous avez d'autres questions ?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#0066FF] bg-[#0066FF] text-white hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
            >
              <span className="font-medium">Contactez-nous</span>
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
