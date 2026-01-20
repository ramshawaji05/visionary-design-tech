"use client";
import { useEffect, useRef } from "react";
import { useRegisterGsap } from "@/lib/gsap";
import Image from "next/image";
import { motion } from "framer-motion";

const showcases = [
  {
    category: "Mobile Experience",
    title: "Next-Gen App Development",
    subtitle:
      "Crafting sleek, high-performance mobile solutions that connect users seamlessly.",
    bullets: [
      "Native iOS & Android development",
      "Cross-platform React Native / Flutter apps",
      "UI/UX designed for engagement",
      "Optimized for scalability & speed",
    ],
    image: "/images/showcase/app.webp",
    side: "left",
  },
  {
    category: "Web Presence",
    title: "Cinematic Website Experiences",
    subtitle:
      "We combine motion design, storytelling, and code to build visually powerful websites.",
    bullets: [
      "SEO-ready Next.js architecture",
      "GSAP / Framer Motion animations",
      "Custom WordPress & Shopify builds",
      "Ultra-fast, responsive performance",
    ],
    image: "/images/showcase/web.webp",
    side: "right",
  },
  {
    category: "Brand Identity",
    title: "Strategic Branding That Converts",
    subtitle:
      "From visuals to voice — we shape identities that leave a lasting digital impact.",
    bullets: [
      "Logo design & typography systems",
      "Complete brand guidelines",
      "Color palette psychology",
      "Consistency across digital assets",
    ],
    image: "/images/showcase/branding.webp",
    side: "left",
  },
  {
    category: "Illustration & Storytelling",
    title: "Character Design & Animation",
    subtitle:
      "We bring imagination to life with hand-crafted 2D/3D visuals and storytelling.",
    bullets: [
      "Custom character design",
      "Product & explainer animations",
      "3D modeling & rendering",
      "Branded motion graphics",
    ],
    image: "/images/showcase/character.webp",
    side: "right",
  },
];

export default function ShowcaseScroll3D() {
  const gsap = useRegisterGsap();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".showcase-image-anim") as HTMLElement[];

      cards.forEach((card, i) => {
        const isLeft = i % 2 === 0;

        // 🎬 Scroll-linked parallax effect ONLY on image cards
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 150,
            x: isLeft ? -150 : 150,
            scale: 0.9,
            rotateZ: isLeft ? -4 : 4,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotateZ: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 50%",
              scrub: true, // 🔥 smooth scroll-linked motion
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  // ✨ Framer Motion text fade (independent, no scroll scrub)
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
      ref={sectionRef}
      className="relative bg-black text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {showcases.map((item, i) => (
        <div
          key={i}
          className={`relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-28 ${
            item.side === "right" ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* 🎞 Image Card (Scroll-synced) */}
          <div
            className={`showcase-image-anim w-full md:w-1/2 flex justify-center ${
              item.side === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-[0_15px_45px_rgba(237,121,34,0.25)] bg-[#0c0c0c] p-3 md:p-4 transform-gpu transition-transform duration-700"
              style={{
                width: "90%",
                maxWidth: "600px",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={700}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* ✍️ Static Cinematic Text Section */}
          <motion.div
            className={`w-full md:w-1/2 mt-10 md:mt-0 ${
              item.side === "left"
                ? "flex flex-col items-start text-left pl-4 sm:pl-6 md:pl-[6rem]"
                : "flex flex-col items-end text-right pr-4 sm:pr-6 md:pr-[6rem]"
            }`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-[#ed7922]/80 text-sm md:text-base uppercase tracking-widest mb-2 font-semibold"
              variants={textAnim}
              custom={0}
            >
              {item.category}
            </motion.h3>

            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-[#ed7922] leading-snug"
              variants={textAnim}
              custom={0.2}
            >
              {item.title}
            </motion.h2>

            <motion.p
              className="mt-4 text-gray-300 text-lg md:text-xl leading-relaxed md:max-w-xl"
              variants={textAnim}
              custom={0.4}
            >
              {item.subtitle}
            </motion.p>

            <motion.ul
              className={`mt-5 space-y-2 text-gray-400 text-base md:text-lg ${
                item.side === "left" ? "list-disc pl-5" : "list-none"
              }`}
              variants={textAnim}
              custom={0.6}
            >
              {item.bullets.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
