"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import ParticleBackground from "../hero/ParticleBackground";


export default function HeroCinematic() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonGroupRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Background gradient animation
    gsap.to(bgRef.current, {
      // backgroundPosition: "200% 0",
      duration: 12,
      repeat: -12,
      ease: "linear",
    });

    // Animate hero and stats sequentially
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        subtitleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.5"
      )
      .fromTo(
        buttonGroupRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      );

    // Animate each stat box with stagger + shimmer
    const statItems = statsRef.current ? Array.from(statsRef.current.children) : [];

    tl.fromTo(
      statItems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        onStart: () => {
          // each stat gets its shimmer
          statItems.forEach((el, i) => {
            const shine = el.querySelector(".shine") as HTMLElement;
            gsap.fromTo(
              shine,
              { x: "-150%", opacity: 0 },
              {
                x: "150%",
                opacity: 1,
                duration: 1.4,
                ease: "power2.inOut",
                delay: 0.3 + i * 0.2, 
              }
            );
          });
        },
      },
      "-=0.3"
    );
  }, []);

  return (
    <section
    
      ref={bgRef}
className="relative flex flex-col items-center justify-center min-h-screen pt-24 text-center text-white overflow-hidden
bg-[linear-gradient(120deg,#000000,#0a0a0a,#1a1a1a,#000000)]
bg-[length:200%_200%]"

    >
       <ParticleBackground />
      {/* Ambient radial shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,121,34,0.15)_0%,transparent_70%)] animate-pulse"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl px-6">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          We Craft <span className="text-[#ed7922]">Cinematic</span> Digital
          Experiences
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Visionary Design Tech — where design meets technology to build
          next-generation web & app experiences.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonGroupRef}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="bg-[#ed7922] hover:bg-[#ff9133] text-black font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_#ed7922]/40 transition"
          >
            Start a Project
          </motion.a>

          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-3 rounded-full text-white"
          >
            See Work
          </motion.a>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "30+", label: "Enterprise Projects" },
            { value: "8", label: "Specialists Team" },
            { value: "<1s", label: "LCP Target" },
            { value: "A+", label: "Core Web Vitals" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-[#0c0c0c]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[#ed7922]/50 transition"
            >
              {/* Shimmer sweep overlay */}
              <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm opacity-0 pointer-events-none"></div>

              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
