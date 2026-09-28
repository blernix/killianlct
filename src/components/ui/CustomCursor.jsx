"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      setHovering(Boolean(target));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 bg-[#0066FF]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none border border-[#0066FF]/50"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 44 : 26,
          height: hovering ? 44 : 26,
          opacity: hovering ? 1 : 0.45,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
    </>
  );
}
