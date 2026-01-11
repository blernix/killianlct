"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const title = "Votre site web livré en 3 semaines, pas en 3 mois.";
    const paragraph = "Développement sur-mesure sans les bugs de WordPress. Interface d'administration épurée, performances optimales et formation incluse. Vous êtes autonome dès le premier jour.";
    const buttonText = "Voir nos tarifs";

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 py-32">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

            {/* Blue accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-6xl mx-auto"
            >
                {/* Small label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-block px-4 py-1 mb-12 border border-[#0066FF] bg-white"
                >
                    <span className="text-xs font-medium text-[#0066FF] uppercase tracking-[0.2em]">
                        Agence Web • 6 projets livrés en 2025
                    </span>
                </motion.div>

                {/* Main title - clean and large */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-16 tracking-[-0.02em] leading-[0.95] text-[#2A2A2A]">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Votre site web
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-[#0066FF]"
                    >
                        livré en 3 semaines,
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        pas en 3 mois.
                    </motion.div>
                </h1>

                {/* Subtitle with vertical line accent */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="max-w-2xl mb-16 border-l-2 border-[#0066FF] pl-8"
                >
                    <p className="text-xl text-[#666666] leading-relaxed font-light">
                        {paragraph}
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-start gap-8"
                >
                    <Link href="/#services">
                        <button className="group relative px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300">
                            <span className="flex items-center gap-3">
                                {buttonText}
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </span>
                        </button>
                    </Link>

                    {/* Micro-promises - minimal style */}
                    <div className="flex flex-col gap-3 pt-2">
                        {[
                            "Livraison en 3 semaines",
                            "Formation de 2h incluse",
                            "Support technique 3 mois offert"
                        ].map((promise, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-1 h-1 bg-[#0066FF]" />
                                <span className="text-sm text-[#666666] font-light">{promise}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap');

                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    font-weight: 300;
                }

                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }
            `}</style>
        </section>
    );
}
