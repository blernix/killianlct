"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackCTAClick } from '@/lib/tracking';
import { Reveal } from '@/components/ui/Reveal';
import { Magnetic } from '@/components/ui/Magnetic';

export function ContactSection({ onOpenModal }) {
  const promises = [
    "Sans engagement",
    "Tarifs transparents",
    "Premier échange offert",
  ];

  return (
    <section
      id="contact"
      role="region"
      aria-labelledby="contact-title"
      className="relative py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-16 md:p-20 text-center group">

            <div className="inline-block px-4 py-1 mb-10 border border-[#E5E5E5] dark:border-[#2A2A2A]">
              <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                Parlons de votre projet
              </span>
            </div>

            <h2
              id="contact-title"
              className="text-fill-sweep text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] mb-8 leading-[1.1]"
            >
              Un projet en tête ?
            </h2>

            <p className="text-lg text-[#666666] dark:text-[#999999] max-w-xl mx-auto leading-relaxed mb-12 font-light">
              Discutons-en ensemble. Que ce soit pour une simple question ou un projet déjà bien défini, nous sommes à votre écoute pour vous aider à concrétiser votre idée.
            </p>

            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={() => { trackCTAClick('Discuter de mon projet', 'home'); onOpenModal('general'); }}
                className="group/btn relative px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300 mb-10"
              >
                <span className="flex items-center gap-3">
                  Discuter de mon projet
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </span>
              </button>
            </Magnetic>

            <div className="flex flex-wrap justify-center gap-6">
              {promises.map((promise, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1 h-1 bg-[#0066FF]" />
                  <span className="text-sm text-[#666666] dark:text-[#999999] font-light">{promise}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
