"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({ to, duration = 2, prefix = "", suffix = "", className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
