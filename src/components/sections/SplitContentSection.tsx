"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  beforeImage: string;
  afterImage: string;
};

const projects: Project[] = [
  {
    title: "Website Revamped for Modern Business",
    beforeImage: "/images/3.webp",
    afterImage: "/images/4.webp",
  },
  {
    title: "E-Commerce UX & Performance Redesign",
    beforeImage: "/images/3.webp",
    afterImage: "/images/4.webp",
  },
];

export default function BeforeAfterWebsiteSection() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const next = () =>
    setIndex((prev) => (prev + 1) % projects.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );

  return (
    <section className="bg-black text-white py-24 border-t border-white/10">
      {/* HEADER */}
      <div className="flex items-center justify-between px-8 md:px-16 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#f97316] max-w-3xl">
          {project.title}
        </h2>

        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* COMPARISON */}
      <div className="flex gap-10 px-8 md:px-16">

        {/* BEFORE */}
        <div className="w-1/2">
          <span className="block mb-4 text-sm uppercase tracking-widest text-gray-400">
            Before
          </span>

          <div className="relative w-full min-h-[140vh] rounded-xl border border-white/10 bg-black">
            <Image
              src={project.beforeImage}
              alt="Before website"
              width={1600}
              height={4800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* AFTER */}
        <div className="w-1/2">
          <span className="block mb-4 text-sm uppercase tracking-widest text-gray-300 text-right">
            After
          </span>

          <div className="relative w-full min-h-[140vh] rounded-xl border border-white/20 bg-black">
            <Image
              src={project.afterImage}
              alt="After website"
              width={1600}
              height={4800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
