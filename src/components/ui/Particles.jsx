"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Constellation de petits points bleus qui flottent doucement.
 * Sobre, géométrique, Swiss Clean. Généré côté client uniquement
 * (évite les erreurs d'hydratation avec Math.random).
 */
export function Particles({ count = 24, className }) {
  const [reduced, setReduced] = useState(false);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(prefersReduced);
    if (prefersReduced) return;

    setDots(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 6,
        drift: 20 + Math.random() * 50,
        opacity: 0.12 + Math.random() * 0.28,
      }))
    );
  }, [count]);

  if (reduced || dots.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute rounded-full bg-[#0066FF]"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            y: [0, -dot.drift, 0],
            x: [0, dot.drift * 0.4, 0],
            opacity: [dot.opacity, dot.opacity * 0.4, dot.opacity],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
