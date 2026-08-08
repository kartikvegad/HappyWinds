"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.14,
      wheelMultiplier: 1.28,
      smoothWheel: true,
      // Native touch scrolling on phones — syncTouch feels snappy/jumpy on iOS
      syncTouch: false,
      touchMultiplier: 1.2,
      autoRaf: false,
    });
    lenisRef.current = lenis;

    document.documentElement.classList.add("lenis", "lenis-smooth");

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const resize = () => lenis.resize();
    window.addEventListener("load", resize);
    window.addEventListener("resize", resize);

    const images = Array.from(document.images);
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", resize, { once: true });
    });

    const observer = new MutationObserver(() => {
      requestAnimationFrame(resize);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", resize);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
