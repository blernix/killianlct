"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  delay = 0,
  y = 28,
  once = true,
  amount = 0.2,
  className,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({ children, className, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
