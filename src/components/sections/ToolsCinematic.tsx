"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useRegisterGsap } from "@/lib/gsap";
import { FaShopify, FaJoomla, FaStripe, FaPaypal, FaCubes } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiDrupal,
  SiFlutter,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiFigma,
  SiBlender,
  SiHostinger,
  SiVercel,
  SiNamecheap,
  SiGodaddy,
} from "react-icons/si";

export default function ToolsCinematic() {
  const gsap = useRegisterGsap();
  const reduce = useReducedMotion();

  const topInner = useRef<HTMLDivElement | null>(null);
  const bottomInner = useRef<HTMLDivElement | null>(null);

  // 🧩 Tool Rows
  const row1 = useMemo(
    () => [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "WordPress", icon: <SiWordpress /> },
      { name: "Shopify", icon: <FaShopify /> },
      { name: "Joomla", icon: <FaJoomla /> },
      { name: "Drupal", icon: <SiDrupal /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ],
    []
  );

  const row2 = useMemo(
    () => [
      { name: "Adobe XD", icon: <SiAdobexd /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Maya", icon: <FaCubes /> },
      { name: "3ds Max", icon: <FaCubes /> },
      { name: "Blender", icon: <SiBlender /> },
      { name: "Stripe", icon: <FaStripe /> },
      { name: "PayPal", icon: <FaPaypal /> },
      { name: "Hostinger", icon: <SiHostinger /> },
      { name: "Namecheap", icon: <SiNamecheap /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "GoDaddy", icon: <SiGodaddy /> },
    ],
    []
  );

  // ✅ KEEP YOUR CARD STYLING EXACTLY
  const Card = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
    <div className="flex flex-col items-center justify-center min-w-[180px] md:min-w-[220px] rounded-2xl px-6 py-6 bg-gradient-to-br from-black to-[#ed7922] text-white shadow-[0_0_25px_rgba(237,121,34,0.4)] hover:scale-105 transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center text-4xl text-[#fff] mb-3">
        {icon}
      </div>
      <p className="capitalize text-sm md:text-base">{name}</p>
    </div>
  );

  useEffect(() => {
    if (reduce) return;
    if (!gsap) return;

    const ctx = gsap.context(() => {
      const makeMarquee = (inner: HTMLElement, seconds: number, direction: 1 | -1) => {
        gsap.killTweensOf(inner);

        // We duplicate items inside the SAME inner container:
        // totalWidth = width of both copies; loopWidth = width of ONE copy
        const totalWidth = inner.scrollWidth;
        const loopWidth = totalWidth / 2;

        if (!loopWidth || loopWidth < 50) return;

        gsap.set(inner, { x: 0, force3D: true });

        gsap.to(inner, {
          x: direction * -loopWidth, // direction: -1 moves right, +1 moves left (because negative x = left)
          duration: seconds,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x: string) => {
              const v = parseFloat(x);
              // wrap inside [-loopWidth, 0] so it never overlaps/jumps
              return `${gsap.utils.wrap(-loopWidth, 0, v)}px`;
            },
          },
        });
      };

      const run = () => {
        if (topInner.current) makeMarquee(topInner.current, 40, +1); // top: left
        if (bottomInner.current) makeMarquee(bottomInner.current, 45, -1); // bottom: right
      };

      // Run after layout is stable (fonts/images)
      requestAnimationFrame(() => {
        requestAnimationFrame(run);
      });

      // Recalc on resize
      const onResize = () => run();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    });

    return () => ctx.revert();
  }, [gsap, reduce]);

  // Duplicate rows INSIDE the same inner
  const row1Doubled = useMemo(() => [...row1, ...row1], [row1]);
  const row2Doubled = useMemo(() => [...row2, ...row2], [row2]);

  return (
    <section id="tools" className="relative bg-black text-white py-24 overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] left-[20%] w-[350px] h-[350px] bg-[#ed7922]/25 blur-[180px]" />
        <div className="absolute bottom-[15%] right-[20%] w-[250px] h-[250px] bg-[#ed7922]/25 blur-[150px]" />
      </div>

      {/* ✨ Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        Tools We <span className="text-[#ed7922]">Work With</span>
      </motion.h2>

      {/* 🔹 TOP ROW */}
      <div className="relative w-full overflow-hidden mb-12 h-[200px]">
        <div ref={topInner} className="flex gap-10 will-change-transform">
          {row1Doubled.map((t, i) => (
            <Card key={`${t.name}-${i}`} icon={t.icon} name={t.name} />
          ))}
        </div>
      </div>

      {/* 🔸 BOTTOM ROW */}
      <div className="relative w-full overflow-hidden h-[200px]">
        <div ref={bottomInner} className="flex gap-10 will-change-transform">
          {row2Doubled.map((t, i) => (
            <Card key={`${t.name}-${i}`} icon={t.icon} name={t.name} />
          ))}
        </div>
      </div>

      {/* 🎬 Cinematic Fade Edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black/10 to-transparent pointer-events-none" />
    </section>
  );
}
