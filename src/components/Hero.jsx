"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { trackCTAClick } from '@/lib/tracking';
import { Magnetic } from '@/components/ui/Magnetic';
import { Particles } from "@/components/ui/Particles";

const EASE = [0.22, 1, 0.36, 1];

const professions = [
  { label: "Avocats", href: "/secteurs/professions-liberales/avocat" },
  { label: "Psychologues", href: "/secteurs/professions-liberales/psychologue" },
  { label: "Ostéopathes", href: "/secteurs/professions-liberales/osteopathe" },
  { label: "Artisans", href: "/secteurs/artisans" },
];

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);

    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % professions.length), 2600);
        return () => clearInterval(id);
    }, [paused]);

    const paragraph = "Sites web sur-mesure pour avocats, psychologues, ostéopathes et artisans. Conformité réglementaire, performances optimales et formation incluse.";
    const buttonText = "Découvrir nos offres";

    return (
        <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] px-4 py-28 lg:py-32">
            {/* Subtle grid with parallax */}
            <motion.div
                style={{ y: gridY }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-40"
            />
          <Particles />

            {/* Blue accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">

                    {/* ===== Left column : texte ===== */}
                    <div className="lg:col-span-7">
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.6 }}
                            className="inline-flex items-center gap-3 mb-10"
                        >
                            <span className="w-2 h-2 bg-[#0066FF]" />
                            <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.25em]">
                                Agence Web — Spécialiste des métiers réglementés
                            </span>
                        </motion.div>

                        {/* Headline - réduite et rythmée, avec mot pivot */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.05] text-[#2A2A2A] dark:text-[#FAFAFA] mb-10">
                            <span className="block overflow-hidden pb-1 -mb-1">
                                <motion.span
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
                                    className="block"
                                >
                                    Des sites web
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden pb-1 -mb-1">
                                <motion.span
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.38, duration: 0.8, ease: EASE }}
                                    className="block"
                                >
                                    pensés pour les
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden pb-2 -mb-2">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                        key={professions[index].label}
                                        initial={{ y: "110%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-110%" }}
                                        transition={{ duration: 0.45, ease: EASE }}
                                        className="inline-block text-[#0066FF]"
                                    >
                                        {professions[index].label.toLowerCase()}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>

                        {/* Paragraph */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.7, ease: EASE }}
                            className="text-lg text-[#666666] dark:text-[#999999] leading-relaxed font-light max-w-xl mb-12 border-l-2 border-[#0066FF] pl-6"
                        >
                            {paragraph}
                        </motion.p>

                        {/* CTA + micro-promises */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
                            className="flex flex-col sm:flex-row sm:items-center gap-8"
                        >
                            <Magnetic strength={0.25}>
                                <Link href="/#services" onClick={() => trackCTAClick('Découvrir nos offres', 'home')}>
                                    <button className="group relative px-9 py-4 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300">
                                        <span className="flex items-center gap-3">
                                            {buttonText}
                                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                        </span>
                                    </button>
                                </Link>
                            </Magnetic>

                            <div className="flex flex-col gap-3">
                                {[
                                    "Livraison en 3 semaines",
                                    "Formation de 2h incluse",
                                    "3 mois de support offert"
                                ].map((promise, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.85 + i * 0.1, duration: 0.5 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-1 h-1 bg-[#0066FF]" />
                                        <span className="text-sm text-[#666666] dark:text-[#999999] font-light">{promise}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ===== Right column : index des secteurs ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
                        className="hidden lg:block lg:col-span-5"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <div className="border-t border-[#E5E5E5] dark:border-[#2A2A2A] pt-2">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#999999] dark:text-[#666666] font-medium">
                                Vos métiers
                            </span>
                        </div>

                        <ul>
                            {professions.map((p, i) => {
                                const active = i === index;
                                return (
                                    <li key={p.label}>
                                        <Link
                                            href={p.href}
                                            onMouseEnter={() => setIndex(i)}
                                            onClick={() => trackCTAClick('Secteur - ' + p.label, 'hero')}
                                            className={`w-full flex items-center justify-between py-5 border-b border-[#E5E5E5] dark:border-[#2A2A2A] transition-colors duration-300 group/item ${
                                                active ? "border-[#0066FF]" : ""
                                            }`}
                                        >
                                            <span className="flex items-baseline gap-4">
                                                <span className={`text-xs font-medium tabular-nums transition-colors ${active ? "text-[#0066FF]" : "text-[#999999] dark:text-[#666666]"}`}>
                                                    0{i + 1}
                                                </span>
                                                <span className={`text-2xl sm:text-3xl font-light tracking-[-0.02em] transition-colors ${active ? "text-[#0066FF]" : "text-[#2A2A2A] dark:text-[#FAFAFA]"}`}>
                                                    {p.label}
                                                </span>
                                            </span>
                                            <ArrowUpRight
                                                size={22}
                                                className={`transition-all duration-300 ${
                                                    active ? "text-[#0066FF] opacity-100 translate-x-0" : "text-[#999999] dark:text-[#666666] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                                                }`}
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="pt-6 flex items-center justify-between">
                            <span className="text-xs text-[#999999] dark:text-[#666666] font-light uppercase tracking-[0.2em]">
                                6 projets livrés en 2025
                            </span>
                            <span className="w-10 h-[1px] bg-[#E5E5E5] dark:bg-[#2A2A2A]" />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#999999] dark:text-[#666666]">Découvrir</span>
                <div className="relative w-px h-12 bg-[#E5E5E5] dark:bg-[#2A2A2A] overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-5 bg-[#0066FF]"
                        animate={{ y: [-20, 48] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
