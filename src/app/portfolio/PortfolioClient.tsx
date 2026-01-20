"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/* ================= TYPES ================= */

type Category = "logos" | "web" | "apps" | "social";

type Project = {
  id: string;
  title: string;
  category: Category;
  tag: string;
  cover: string;
  description: string;
};

/* ================= FILTER TABS ================= */

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "logos", label: "Logos" },
  { key: "web", label: "Web Design & Dev" },
  { key: "apps", label: "Mobile Applications" },
  { key: "social", label: "Social Media" },
];

/* ================= PROJECTS (ALL TABS INCLUDED) ================= */

const PROJECTS: Project[] = [
  // LOGOS
  { id: "l1", title: "Brand Mark System", category: "logos", tag: "Logo Design", cover: "/images/portfolio/logo1.webp", description: "Clean identity system." },
  { id: "l2", title: "Minimal Logotype", category: "logos", tag: "Logo Design", cover: "/images/portfolio/logo5.webp", description: "Bold typographic logo." },
  { id: "l3", title: "Minimal Logotype", category: "logos", tag: "Logo Design", cover: "/images/portfolio/logo4.webp", description: "Modern brand mark." },
  { id: "l4", title: "Minimal Logotype", category: "logos", tag: "Logo Design", cover: "/images/portfolio/logo3.webp", description: "Timeless branding." },
  { id: "l5", title: "Minimal Logotype", category: "logos", tag: "Logo Design", cover: "/images/portfolio/logo2.webp", description: "Clean logotype." },

  // WEB
  { id: "w1", title: "Landing Experience", category: "web", tag: "Web Design & Dev", cover: "/images/portfolio/web7.webp", description: "High-impact landing page." },
  { id: "w2", title: "Business Website", category: "web", tag: "Web Design & Dev", cover: "/images/portfolio/web1.webp", description: "Modern business site." },
  { id: "w3", title: "Business Website", category: "web", tag: "Web Design & Dev", cover: "/images/portfolio/UI-1.webp", description: "Scalable website." },
  { id: "w4", title: "Business Website", category: "web", tag: "Web Design & Dev", cover: "/images/portfolio/web3.webp", description: "Performance-first build." },
  { id: "w5", title: "Business Website", category: "web", tag: "Web Design & Dev", cover: "/images/portfolio/ux-screen-5.webp", description: "Clean UI structure." },
  { id: "w6", title: "Business Website", category: "web", tag: "Web Design & Dev", cover: "/images/portfolio/web2.webp", description: "UI-focused website." },
  // { id: "w7", title: "Business Website", category: "web", tag: "Web Design & Dev", cover: "/images/portfolio/web5.webp", description: "UI-focused website." },

  // APPS
  { id: "a1", title: "Mobile UI Concept", category: "apps", tag: "App Development", cover: "/images/portfolio/App-1.webp", description: "Mobile UI concept." },
  { id: "a2", title: "App Feature Screens", category: "apps", tag: "App Development", cover: "/images/portfolio/App-2-2.webp", description: "Feature screens." },
  { id: "a3", title: "App Feature Screens", category: "apps", tag: "App Development", cover: "/images/portfolio/App-3.webp", description: "Task-based UI." },

  // SOCIAL
  { id: "s1", title: "Social Campaign", category: "social", tag: "Social Media Design", cover: "/images/portfolio/smm-post-1.webp", description: "Engaging campaign." },
  { id: "s2", title: "Content Carousel", category: "social", tag: "Social Media Design", cover: "/images/portfolio/smm-post-2.webp", description: "Carousel layout." },
  { id: "s3", title: "Content Carousel", category: "social", tag: "Social Media Design", cover: "/images/portfolio/smm-post-3.webp", description: "Retention focused." },
  { id: "s4", title: "Content Carousel", category: "social", tag: "Social Media Design", cover: "/images/portfolio/smm-post-4.webp", description: "Visual storytelling." },
  { id: "s5", title: "Content Carousel", category: "social", tag: "Social Media Design", cover: "/images/portfolio/smm-post-5.webp", description: "Sharp visuals." },
  { id: "s6", title: "Content Carousel", category: "social", tag: "Social Media Design", cover: "/images/portfolio/smm-post-6.webp", description: "High engagement." },
];

/* ================= UTILS ================= */

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/* ================= PAGE ================= */

export default function PortfolioClient() {
  const [active, setActive] = useState<Category>("logos");
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const filtered = useMemo(
    () => PROJECTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <main className="bg-black text-white pt-40 pb-32">
      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Our <span className="text-[#ed7922]">Portfolio</span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Branding, Web, Mobile & Social work — all in one place.
        </p>
      </section>

      {/* FILTER */}
      <section className="mt-16 px-6">
        <div className="flex justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-sm ${
                active === c.key
                  ? "bg-[#ed7922] text-black"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="mt-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filtered.map((p) => (
            <DribbbleCard key={p.id} project={p} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0b0b] max-w-4xl w-full rounded-2xl overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <div className="relative h-[70vh] bg-black">
                <Image
                  src={selected.cover}
                  alt={selected.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-bold">{selected.title}</h3>
                <p className="mt-3 text-gray-400">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* ================= CARD ================= */

function DribbbleCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  return (
    <button
      onClick={onOpen}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({
          ry: clamp(((e.clientX - r.left) / r.width - 0.5) * 10, -8, 8),
          rx: clamp((0.5 - (e.clientY - r.top) / r.height) * 10, -8, 8),
        });
      }}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      className="w-full text-left"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        className="rounded-2xl overflow-hidden border border-white/10 bg-black"
      >
        {/* MEDIA */}
      <div
  className={`relative w-full ${
    project.category === "web" || project.category === "apps"
      ? "aspect-[16/50]"   // web & app screenshots
      : "aspect-[4/3]"    // logos & social
  }`}
>

        <Image
  src={project.cover}
  alt={project.title}
  fill
  className={
    project.category === "web" || project.category === "apps"
      ? "object-contain object-top"
      : "object-contain object-center"
  }
/>

        </div>

        {/* TEXT */}
        <div className="p-4">
          <div className="text-xs text-gray-400">{project.tag}</div>
          <div className="mt-1 text-lg font-semibold">{project.title}</div>
        </div>
      </motion.div>
    </button>
  );
}
