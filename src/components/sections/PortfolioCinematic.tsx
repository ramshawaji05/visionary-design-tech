"use client";
import { useEffect, useRef } from "react";
import { useRegisterGsap } from "@/lib/gsap";
import Image from "next/image";
import { motion } from "framer-motion";

const portfolioImages = [
  "/images/portfolio/web1.webp",
  "/images/portfolio/web5.webp",
  "/images/portfolio/web2.webp",
  "/images/portfolio/web3.webp",
  "/images/portfolio/web4.webp",
  "/images/portfolio/web6.webp",
];

export default function PortfolioCinematic() {
  const gsap = useRegisterGsap();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🌀 Continuous seamless upward scroll
      const scroll = gsap.to(".scroll-wrap", {
        yPercent: -100,
        ease: "none",
        duration: 30,
        repeat: -1,
      });

      return () => scroll.kill();
    }, scrollRef);

    return () => ctx.revert();
  }, [gsap]);

  // ✨ Reusable cinematic text animation (same as other sections)
  const textAnim: Record<string, any> = {
    hidden: { opacity: 0, y: 40 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay },
    }),
  };

  return (
    <section
      ref={scrollRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Double stacked grids for continuous scroll */}
      <div className="absolute inset-0 scroll-wrap">
        {[...Array(2)].map((_, dupIndex) => (
          <div
            key={dupIndex}
            className="masonry-scroll columns-1 sm:columns-2 lg:columns-3 gap-4 px-4"
          >
            {portfolioImages.map((img, i) => (
              <div
                key={`${dupIndex}-${i}`}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
              >
                <Image
                  src={img}
                  alt={`Portfolio ${i}`}
                  width={1000}
                  height={700}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 🖤 Dark overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      {/* 🧡 Text overlay with cinematic reveal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
        <motion.h2
          className="text-[#ed7922] text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-[0_0_15px_rgba(237,121,34,0.4)]"
          variants={textAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
        >
          Start Designing <br /> with Visionary Blocks.
        </motion.h2>

        <motion.p
          className="text-white text-lg md:text-2xl mt-4 max-w-2xl"
          variants={textAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.3}
        >
          A cinematic wall of websites, apps & creative builds — crafted by our team.
        </motion.p>
      </div>

      {/* 🎨 Top & bottom fade merges */}
      <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-black via-black/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
    </section>
  );
}
