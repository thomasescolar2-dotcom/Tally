"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function InteractiveCursor() {
  const haloRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const halo = haloRef.current;
    const dot = dotRef.current;

    if (!halo || !dot) return;

    const enter = () => {
      gsap.to([halo, dot], { opacity: 1, duration: 0.3, ease: "power2.out" });
    };

    const leave = () => {
      gsap.to([halo, dot], { opacity: 0, duration: 0.4, ease: "power2.out" });
    };

    const move = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(halo, {
        x: clientX,
        y: clientY,
        duration: 0.45,
        ease: "expo.out"
      });
      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div ref={haloRef} className="cursor-halo" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
