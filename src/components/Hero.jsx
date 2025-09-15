"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { BackgroundPaths } from '@/components/ui/background-paths';
import { Button } from "@/components/ui/button"; // Le bouton stylé vient d'ici

export default function Hero() {
    // Ton contenu
    const title = "Artisan du web, je crée le site sur-mesure qui développe votre activité.";
    const paragraph = "Des expériences web rapides, intuitives et uniques pour renforcer votre image de marque et atteindre vos objectifs.";
    const buttonText = "Découvrir mes services";

    const words = title.split(" ");

    return (
        <BackgroundPaths>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="max-w-4xl mx-auto"
            >
                {/* 1. Le titre avec l'animation lettre par lettre */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tighter">
                    {words.map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                            {word.split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${letterIndex}`}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: letterIndex * 0.02, // On simplifie un peu le delay
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 25,
                                    }}
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80"
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </h1>

                {/* 2. Ton paragraphe, avec un style adapté */}
                <p className="mt-6 max-w-xl mx-auto text-lg text-neutral-700 dark:text-neutral-300">
                    {paragraph}
                </p>

                {/* 3. Le bouton, qui est un Link mais avec le style de la démo */}
                <div className="mt-10 inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Button
                        asChild // Important: dis au bouton de se comporter comme son enfant (le Link)
                        variant="ghost"
                        className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
                    >
                        <Link href="/#services">
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                {buttonText}
                            </span>
                            <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                                →
                            </span>
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </BackgroundPaths>
    );
}