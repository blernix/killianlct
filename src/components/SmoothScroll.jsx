"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const path = href.slice(0, hashIndex);
      const hash = href.slice(hashIndex + 1);
      if (!hash) return;
      // Only intercept same-page anchors (path is empty or matches current route)
      if (path && path !== window.location.pathname) return;
      const target = document.getElementById(hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
