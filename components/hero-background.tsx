"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useMemo(() => Array.from({ length: 40 }), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const gradient = { angle: 145 };

    const gradientTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    gradientTimeline.to(gradient, {
      angle: 320,
      duration: 14,
      ease: "sine.inOut",
      onUpdate: () => {
        container.style.setProperty(
          "background",
          `linear-gradient(${gradient.angle}deg, rgba(255, 140, 104, 0.55), rgba(255, 93, 177, 0.45), rgba(107, 91, 255, 0.55))`
        );
      }
    });

    const dots = container.querySelectorAll<HTMLSpanElement>(".particle");
    dots.forEach((dot, index) => {
      const x = gsap.utils.random(0, window.innerWidth);
      const y = gsap.utils.random(0, window.innerHeight * 0.9);
      gsap.set(dot, { x, y, opacity: 0 });

      gsap.to(dot, {
        opacity: gsap.utils.random(0.25, 0.8),
        scale: gsap.utils.random(0.8, 1.4),
        duration: gsap.utils.random(4, 10),
        delay: index * 0.06,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      gsap.to(dot, {
        x: `+=${gsap.utils.random(-60, 60)}`,
        y: `+=${gsap.utils.random(-60, 60)}`,
        duration: gsap.utils.random(6, 12),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });

    return () => {
      gradientTimeline.kill();
      gsap.killTweensOf(".particle");
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,224,173,0.65),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(0,195,255,0.45),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,93,177,0.3),transparent_60%)]" />
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        {particles.map((_, index) => (
          <span key={index} className="particle" />
        ))}
      </div>
    </div>
  );
}
