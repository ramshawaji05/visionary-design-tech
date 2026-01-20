"use client";
import { useEffect, useRef } from "react";
import { useRegisterGsap } from "@/lib/gsap";
import { motion } from "framer-motion";

export default function CallToActionCinematic() {
  const gsap = useRegisterGsap();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow pulse
      gsap.to(".orb", {
        scale: 1.2,
        opacity: 0.6,
        yoyo: true,
        repeat: -1,
        duration: 4,
        ease: "sine.inOut",
      });

    
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
  <section
  ref={sectionRef}
  className="relative min-h-[100vh] overflow-visible bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center text-center px-6 z-[5]"
>

      {/* Glowing Motion Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb absolute top-[20%] left-[25%] w-[400px] h-[400px] rounded-full bg-[#ed7922]/25 blur-3xl" />
        <div className="orb absolute bottom-[25%] right-[20%] w-[350px] h-[350px] rounded-full bg-[#ed7922]/20 blur-3xl" />
        <div className="orb absolute top-[65%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#ed7922]/15 blur-3xl" />
      </div>

      {/* Floating Heading */}
      <motion.h2
        className="cta-text relative text-[#ed7922] text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-[0_0_35px_rgba(237,121,34,0.7)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Let’s Build Something Exceptional
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="cta-text text-gray-300 text-lg md:text-2xl mt-4 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      >
        From immersive websites to high-performance apps —  
        we transform your ideas into cinematic digital experiences.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        className="mt-10 inline-block bg-[#ed7922] text-black text-lg md:text-xl font-semibold px-10 py-4 rounded-full shadow-[0_0_30px_rgba(237,121,34,0.5)] hover:shadow-[0_0_50px_rgba(237,121,34,0.9)] transition-all duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
        whileHover={{ scale: 1.05 }}
      >
        Start a Project →
      </motion.a>

      {/* 🎬 Fade merges */}
      <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
    </section>
  );
}
