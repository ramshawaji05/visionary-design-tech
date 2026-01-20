"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { label: "UI / UX Design", slug: "ui-ux-design" },
  { label: "Web Development", slug: "web-development" },
  { label: "App Development", slug: "app-development" },
  {
    label: "Social Media Management & Marketing",
    slug: "social-media-management-&-marketing",
  },
  { label: "Graphic Designing", slug: "graphic-designing" },
  { label: "AI & Automation", slug: "ai-&-automation" },
  { label: "2D / 3D Animation", slug: "2d-3d-animation" },
  { label: "Content Creation", slug: "content-creation" },
  { label: "Hosting & Migration", slug: "hosting-&-migration" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Visionary Design Tech"
            width={140}
            height={36}
            priority
            className="h-32 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm text-gray-200 relative">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="hover:text-white transition flex items-center gap-1"
            >
              Services
              <span className="text-xs">▾</span>
            </button>

            {open && (
              <div
                className="absolute top-full left-0 mt-3 w-64 rounded-xl
                           bg-black/90 backdrop-blur-xl border border-white/10
                           shadow-xl p-4 space-y-2"
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block text-sm text-gray-300 hover:text-[#ed7922] transition"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About
          </Link>

          <Link
            href="/contact"
            className="ml-4 px-5 py-2 rounded-full bg-[#ed7922]
                       text-black font-semibold hover:opacity-90 transition"
          >
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}
