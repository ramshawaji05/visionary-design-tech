"use client";

import { useEffect, useRef, useState } from "react";
import { useRegisterGsap } from "@/lib/gsap";

type Props = {
  count?: number;
  className?: string;
};

type Dot = {
  left: number;
  top: number;
  size: number;
  tone: string;
};

export default function AmbientDust({ count = 42, className = "" }: Props) {
  const gsap = useRegisterGsap();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [dots, setDots] = useState<Dot[]>([]);

  // ✅ Generate dots only after the component mounts (client-side only)
  useEffect(() => {
    const arr: Dot[] = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() < 0.85 ? 2 : 3,
      tone: Math.random() < 0.6 ? "bg-white/30" : "bg-amber-300/25",
    }));
    setDots(arr);
  }, [count]);

  // Animate movement
  useEffect(() => {
    if (!wrapRef.current) return;
    const dotsEl = Array.from(wrapRef.current.querySelectorAll<HTMLSpanElement>("[data-dot]"));

    dotsEl.forEach((el) => {
      const duration = gsap.utils.random(8, 16);
      const delay = gsap.utils.random(0, 8);
      const x = gsap.utils.random(-40, 40);
      const y = gsap.utils.random(-40, 40);

      gsap.to(el, {
        x,
        y,
        opacity: gsap.utils.random(0.15, 0.45),
        filter: "blur(0px)",
        duration,
        delay,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, [dots, gsap]);

  return (
    <div ref={wrapRef} className={`pointer-events-none ${className}`}>
      {dots.map((dot, i) => (
        <span
          key={i}
          data-dot
          className={`absolute ${dot.tone} rounded-full`}
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: dot.size,
            height: dot.size,
            opacity: 0.08,
            filter: "blur(1.5px)",
          }}
        />
      ))}
    </div>
  );
}
