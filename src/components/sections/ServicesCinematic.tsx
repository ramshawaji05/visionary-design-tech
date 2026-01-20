"use client";
import { useEffect, useRef, useState } from "react";
import { useRegisterGsap } from "@/lib/gsap";
import Image from "next/image";

const services = [
  {
    title: "AI & Automation",
    subtitle: "Streamline workflows intelligently",
    image: "/images/services/ai.webp",
  },
  {
    title: "Graphic Designing",
    subtitle: "Unique brand identity visuals",
    image: "/images/services/logo.webp",
  },
  {
    title: "2D / 3D Animation",
    subtitle: "Motion graphics & product visuals",
    image: "/images/services/animation.webp",
  },
  {
    title: "Web Design & Development",
    subtitle: "Responsive, SEO-ready websites",
    image: "/images/services/web.webp",
  },
  {
    title: "App Development",
    subtitle: "Mobile & web apps with modern UX",
    image: "/images/services/app.webp",
  },
  {
    title: "Social Media Marketing",
    subtitle: "Brand growth across platforms",
    image: "/images/services/social.webp",
  },
  {
    title: "Content Creation",
    subtitle: "Strategic, engaging media assets",
    image: "/images/services/content.webp",
  },
];

export default function ServicesCinematic() {
  const gsap = useRegisterGsap();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeImage, setActiveImage] = useState<string>(services[0].image);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".service-line") as HTMLElement[];

      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              end: "bottom 70%",
              toggleActions: "play reverse play reverse", // ✅ plays up & down
              once: false, // ✅ allows replay
              scrub: 1.2, // ✅ smooth motion synced to scroll
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] text-[#ed7922] px-12 md:px-24 overflow-hidden"
    >
      {/* Background transition image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        <Image
          key={activeImage}
          src={activeImage}
          alt="Service Background"
          fill
          className="object-cover transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] opacity-80 scale-105 hover:scale-100"
        />
      </div>

      {/* Overlay glow gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,121,34,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Text content */}
      <div className="relative z-10 text-[5vw] md:text-[3.8vw] font-bold leading-tight">
        {services.map((service, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveImage(service.image)}
            className="service-line border-t border-[#ed7922]/30 py-6 cursor-pointer group transition-all"
          >
            <div className="flex justify-between items-center">
              <span className="group-hover:text-white transition-colors duration-300">
                {service.title}
              </span>
              <span className="text-white/70 text-[1rem] md:text-[1.2rem] italic tracking-wide group-hover:text-[#ed7922]/90 transition-colors duration-300">
                {service.subtitle}
              </span>
            </div>
          </div>
        ))}
        {/* Bottom border */}
        <div className="border-t border-[#ed7922]/30 mt-6"></div>
      </div>
    </section>
  );
}
