"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ParticleBackground from "@/components/hero/ParticleBackground";
import { Zap, Layers, Gauge, Workflow } from "lucide-react";
import CallToActionCinematic from "@/components/sections/CallToActionCinematic";


gsap.registerPlugin(ScrollTrigger);

function ServiceCard({ title }: { title: string }) {
  return (
    <div
      className="bg-gradient-to-br from-white/5 to-transparent 
                 border border-white/10 rounded-2xl p-8 
                 backdrop-blur hover:border-[#ed7922]/40 
                 transition duration-300"
    >
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => {
    // GSAP section reveal
    const sections = gsap.utils.toArray<HTMLElement>(".gsap-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });

    // Floating accents
    gsap.to(".float-slow", {
      y: -40,
      repeat: -1,
      yoyo: true,
      duration: 6,
      ease: "sine.inOut",
    });

    gsap.to(".float-fast", {
      y: -25,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  }, []);

  return (
<main className="bg-black text-white">

      {/* ================= HERO ================= */}
<section className="relative min-h-[95vh] pt-32 overflow-hidden text-center">

  {/* Particles */}
  <ParticleBackground />

  {/* Dark overlay */}
  <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/60 via-black/70 to-black/90" />

  {/* Floating accents */}
  <div className="absolute top-28 left-24 z-10 w-3 h-3 rounded-full bg-[#ed7922]/80 float-fast" />
  <div className="absolute bottom-36 right-32 z-10 w-4 h-4 rounded-full bg-[#ed7922]/40 float-slow" />

  {/* Content */}
  <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">

    <span className="mb-5 text-sm tracking-widest text-gray-400 uppercase">
      About Visionary Design Tech
    </span>

    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
      Building Digital Systems
      <br />
      That <span className="text-[#ed7922]">Perform</span>, Scale & Convert
    </h1>

    <p className="mt-6 max-w-3xl text-gray-400 text-lg leading-relaxed">
      Visionary Design Tech is a digital agency focused on designing and
      engineering high-performance websites, applications, and automation
      systems. We help businesses transform ideas into scalable digital
      products built for speed, clarity, and measurable growth.
    </p>

    {/* CTA Buttons */}
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <a
        href="/contact"
        className="inline-flex items-center gap-2 bg-[#ed7922] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
      >
        Start a Conversation →
      </a>

      <a
        href="/about"
        className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full text-white hover:bg-white/10 transition"
      >
        View Our Capabilities
      </a>
    </div>

    {/* Stats */}
    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
      {[
        { value: "30+", label: "High-Impact Projects" },
        { value: "<1s", label: "Performance-Focused Builds" },
        { value: "A+", label: "Core Web Vitals Targets" },
        { value: "100%", label: "Custom Solutions" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur"
        >
          <h3 className="text-3xl font-bold text-[#ed7922]">
            {item.value}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {item.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= WHO WE ARE ================= */}
{/* ================= WHAT MAKES US DIFFERENT ================= */}
<section className="relative py-28 bg-black">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-bold">
        What Makes Us <span className="text-[#ed7922]">Different</span>
      </h2>
      <p className="mt-4 text-gray-400 text-lg">
        We focus on clarity, performance, and long-term value — not shortcuts or surface-level design.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Clarity Over Complexity",
          desc:
            "We break down complex ideas into clear plans, realistic timelines, and actionable steps so decisions are never based on assumptions.",
        },
        {
          title: "Performance Built In",
          desc:
            "Speed, stability, and scalability are engineered from the start — not added later as patches or optimizations.",
        },
        {
          title: "Results You Can Measure",
          desc:
            "Every system is built with tracking, analytics, and KPIs in mind so growth is visible, not guessed.",
        },
        {
          title: "Long-Term Partnership",
          desc:
            "We work alongside your team, document decisions, and build systems that are easy to maintain and evolve.",
        },
        {
          title: "Scalable Architecture",
          desc:
            "Our solutions are designed to grow with your business using clean structure, reusable components, and smart automation.",
        },
        {
          title: "Practical Use of AI",
          desc:
            "We apply AI only where it creates real value — improving efficiency, insight, or experience without unnecessary complexity.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative p-8 rounded-2xl border border-white/10 
                     bg-gradient-to-br from-white/5 to-transparent 
                     hover:border-[#ed7922]/40 transition duration-300"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-[#ed7922]/5 opacity-0 group-hover:opacity-100 blur-xl transition" />

          <h3 className="relative z-10 text-xl font-semibold mb-4">
            {item.title}
          </h3>
          <p className="relative z-10 text-gray-400 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
    
  </div>
  
</section>
  <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, label: "Performance First" },
              { icon: Layers, label: "System Thinking" },
              { icon: Gauge, label: "Measured Results" },
              { icon: Workflow, label: "Smart Automation" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#ed7922]/40 transition"
              >
                <item.icon className="mx-auto mb-4 text-[#ed7922]" size={32} />
                <p className="font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>


{/* ================= WHAT WE BUILD ================= */}
<section className="gsap-section py-28 bg-gradient-to-b from-black to-[#0a0a0a]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-bold">
        What We <span className="text-[#ed7922]">Build</span>
      </h2>
      <p className="mt-4 text-gray-400 text-lg">
        A focused set of digital services designed to help brands design,
        launch, grow, and scale with confidence.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "UI / UX Design",
          desc:
            "User-focused interface and experience design that improves clarity, usability, and engagement across digital products.",
        },
        {
          title: "Web Design & Development",
          desc:
            "Custom-built websites engineered for speed, SEO, scalability, and long-term performance.",
        },
        {
          title: "App Development",
          desc:
            "Modern web and mobile applications built with clean architecture and smooth user experience.",
        },
        {
          title: "Social Media Management & Marketing",
          desc:
            "Strategic content, posting, and campaigns designed to increase reach, engagement, and leads.",
        },
        {
          title: "Graphic Designing",
          desc:
            "Visual assets and creative designs crafted to strengthen brand identity and communication.",
        },
        {
          title: "AI & Automation",
          desc:
            "Smart automation systems that reduce manual work and improve operational efficiency.",
        },
        {
          title: "2D / 3D Animation",
          desc:
            "High-quality motion graphics and animations that bring products and ideas to life.",
        },
        {
          title: "Content Creation",
          desc:
            "Purpose-driven content including copy, visuals, and media aligned with business goals.",
        },
        {
          title: "Hosting & Migration",
          desc:
            "Secure hosting setup and seamless migrations with performance and reliability in mind.",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="group relative p-8 rounded-2xl
                     bg-gradient-to-br from-white/5 to-transparent
                     border border-white/10
                     hover:border-[#ed7922]/40
                     transition duration-300"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-[#ed7922]/5 opacity-0 group-hover:opacity-100 blur-xl transition" />

          <h3 className="relative z-10 text-xl font-semibold mb-3">
            {service.title}
          </h3>

          <p className="relative z-10 text-gray-400 leading-relaxed text-sm">
            {service.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>




      {/* ================= PROCESS ================= */}
{/* ================= PROCESS ================= */}
<section className="gsap-section relative py-28 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-bold">
        Our Delivery <span className="text-[#ed7922]">Process</span>
      </h2>
      <p className="mt-5 text-gray-400 text-lg">
        A structured approach that keeps projects aligned, efficient,
        and focused on real business outcomes.
      </p>
    </div>

    {/* Process Steps */}
    <div className="grid md:grid-cols-5 gap-10 text-center">

      {[
        {
          title: "Discovery",
          desc:
            "We analyze goals, audience, challenges, and existing systems to create a clear foundation.",
          icon: "🧭",
        },
        {
          title: "Strategy",
          desc:
            "We define direction, priorities, timelines, and success metrics before execution begins.",
          icon: "💡",
        },
        {
          title: "Planning",
          desc:
            "Workflows, resources, and technical structure are mapped for smooth delivery.",
          icon: "🧩",
        },
        {
          title: "Execution",
          desc:
            "Design, development, and implementation with continuous collaboration and feedback.",
          icon: "⚙️",
        },
        {
          title: "Optimization",
          desc:
            "We monitor performance, refine systems, and scale based on real data.",
          icon: "📈",
        },
      ].map((step, i) => (
        <div
          key={i}
          className="group relative flex flex-col items-center"
        >
          {/* Icon */}
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full 
                       bg-[#ed7922]/20 text-[#ed7922] text-2xl mb-6
                       group-hover:scale-110 transition"
          >
            {step.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-3">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            {step.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

<CallToActionCinematic />



    </main>
  );
}
