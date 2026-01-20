"use client";
import { useEffect, useRef } from "react";
import { useRegisterGsap } from "@/lib/gsap";
import { motion } from "framer-motion";
import { Zap, Globe2, Code2 } from "lucide-react";

export default function WhyChooseUsCinematic() {
  const gsap = useRegisterGsap();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reset and animate items on scroll
      gsap.killTweensOf(".why-item");
      gsap.set(".why-item", { opacity: 0, y: 60 });

      gsap.to(".why-item", {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative z-[10] bg-gradient-to-b from-[#0b0b0b] via-[#111] to-black text-white py-28 mt-[-1px] px-6 md:px-16 overflow-visible"
    >
      {/* 🔥 Cinematic Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[25%] w-[350px] h-[350px] bg-[#ed7922]/15 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[250px] h-[250px] bg-[#ed7922]/15 blur-[120px]" />
      </div>

      {/* 🧠 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        Why Choose <span className="text-[#ed7922]">Visionary Design Tech</span>?
      </motion.h2>

      {/* 💎 Layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        {/* 🎬 Left Large Feature */}
        <div className="why-item flex-1 bg-gradient-to-br from-[#111] to-[#1a1a1a] p-10 rounded-2xl border border-[#ed7922]/20 hover:border-[#ed7922]/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.03]">
          <Zap className="w-10 h-10 text-[#ed7922] mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Cinematic Animations</h3>
          <p className="text-gray-400 leading-relaxed">
            We create fluid, immersive motion powered by GSAP & Framer Motion.
            Every scroll, hover, and transition feels alive — blending design
            and storytelling seamlessly.
          </p>
        </div>

        {/* ⚡ Right Column (2 Stacked Features) */}
        <div className="flex flex-col gap-8 flex-1">
          <div className="why-item flex-1 bg-gradient-to-br from-[#111] to-[#1a1a1a] p-8 rounded-2xl border border-[#ed7922]/20 hover:border-[#ed7922]/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.03]">
            <Globe2 className="w-8 h-8 text-[#ed7922] mb-3" />
            <h3 className="text-xl font-semibold mb-2">SEO-Driven Architecture</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every line of code and design element is optimized for search
              visibility and performance — turning creativity into measurable
              growth.
            </p>
          </div>

          <div className="why-item flex-1 bg-gradient-to-br from-[#111] to-[#1a1a1a] p-8 rounded-2xl border border-[#ed7922]/20 hover:border-[#ed7922]/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.03]">
            <Code2 className="w-8 h-8 text-[#ed7922] mb-3" />
            <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From WordPress to Next.js, we build fast, scalable, and secure
              solutions — engineered for cinematic experiences and long-term
              reliability.
            </p>
          </div>
        </div>
      </div>

      {/* 🌒 Gradient Overlays for Smooth Merge */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
    </section>
  );
}
