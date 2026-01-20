"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function PreloaderCinematic() {
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const vRef = useRef<HTMLSpanElement | null>(null);
  const dtRef = useRef<HTMLSpanElement | null>(null);
  const flashRef = useRef<HTMLDivElement | null>(null);
  const lightRef = useRef<HTMLDivElement | null>(null);
  const reflectionRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const orangeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    // 🌌 shimmer background
    gsap.to(bgRef.current, {
      backgroundPosition: "200% 0",
      duration: 6,
      repeat: -1,
      ease: "linear",
    });

    // 🧡 1. same intro animation
    tl.fromTo(
      vRef.current,
      { opacity: 0, scale: 3 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }
    )
      .fromTo(
        reflectionRef.current,
        { x: "-150%", opacity: 0 },
        {
          x: "150%",
          opacity: 1,
          duration: 1.2,
          ease: "power2.inOut",
          onStart: () => {
            gsap.to(vRef.current, {
              color: "#ffae5a",
              textShadow:
                "0 0 30px #ed7922, 0 0 60px #ed7922, 0 0 100px #ffaa44",
              duration: 0.4,
              repeat: 1,
              yoyo: true,
            });
          },
        }
      )
      .fromTo(
        lightRef.current,
        { x: "-150%", opacity: 0 },
        { x: "150%", opacity: 1, duration: 1.4, ease: "power2.inOut" },
        "-=0.4"
      )
      .fromTo(
        dtRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .to([vRef.current, dtRef.current], {
        scale: 1.05,
        duration: 0.4,
        yoyo: true,
        repeat: 1,
      })
      .add(() => {
        gsap.fromTo(
          flashRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power2.inOut" }
        );
        gsap.to(flashRef.current, {
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
        });
      });

    // 🧡 2. V zooms out (covers screen in orange)
    tl.to(vRef.current, {
      scale: 10,
      duration: 1.4,
      ease: "power4.inOut",
      onStart: () => {
        gsap.to(dtRef.current, { opacity: 0, duration: 0.16 });
      },
      onUpdate: () => {
        gsap.to(orangeRef.current, { opacity: 1, duration: 0.8 });
      },
      onComplete: () => {
        gsap.set(orangeRef.current, { opacity: 1 });
        gsap.set(vRef.current, { opacity: 0 });
      },
    })

      // 🧡 3. Circular squeeze-in reveal
      .to(orangeRef.current, {
        scale: 0,
        duration: 1.2,
        ease: "power4.inOut",
        transformOrigin: "center center",
        borderRadius: "50%", // <-- circle
        onStart: () => {
          gsap.set(orangeRef.current, { borderRadius: "50%" });
        },
        onComplete: () => {
          if (preloaderRef.current) preloaderRef.current.style.display = "none";
          document.body.style.overflow = "auto";
        },
      });
  }, []);

  return (
    <motion.div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center text-white overflow-hidden"
    >
      {/* background shimmer */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[linear-gradient(120deg,#000,#1a1a1a,#000)] bg-[length:200%_200%]"
        style={{ filter: "brightness(1.1)" }}
      ></div>

      {/* circular orange layer */}
      <div
        ref={orangeRef}
        className="absolute inset-0 bg-[#ed7922] opacity-0 scale-1"
        style={{
          zIndex: 5,
          borderRadius: "50%",
          width: "150vmax",
          height: "150vmax",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) scale(1)",
        }}
      ></div>

      {/* reflection + light */}
      <div
        ref={reflectionRef}
        className="absolute top-0 left-0 w-[120%] h-full bg-gradient-to-r from-transparent via-[#fff8e6]/50 to-transparent blur-lg mix-blend-screen"
      ></div>
      <div
        ref={lightRef}
        className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl mix-blend-screen"
      ></div>

      {/* logo */}
      <div className="flex items-end justify-center gap-2 relative z-10">
        <span
          ref={vRef}
          className="text-[220px] font-extrabold text-[#ed7922] leading-none tracking-tight relative z-20"
        >
          V
        </span>
        <span
          ref={dtRef}
          className="text-[220px] font-extrabold text-white leading-none opacity-0 relative z-10"
        >
          DT
        </span>
      </div>

      {/* flash overlay */}
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white opacity-0 mix-blend-screen"
      ></div>
    </motion.div>
  );
}
