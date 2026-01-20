"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
            className="h-21 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm text-gray-200 relative">

          {/* Home */}
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-white transition flex items-center gap-1">
              Services
              <span className="text-xs">▾</span>
            </button>

            {open && (
              <div className="absolute top-full left-0 mt-3 w-64 rounded-xl 
                              bg-black/90 backdrop-blur-xl border border-white/10 
                              shadow-xl p-4 space-y-2">
                {[
                  "UI / UX Design",
                  "Web Development",
                  "App Development",
                  "Social Media Management & Marketing",
                  "Graphic Designing",
                  "AI & Automation",
                  "2D / 3D Animation",
                  "Content Creation",
                  "Hosting & Migration",
                ].map((service) => (
                  <Link
                    key={service}
                    href="/services"
                    className="block text-sm text-gray-300 hover:text-[#ed7922] transition"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio */}
          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>

          {/* About */}
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 rounded-full bg-[#ed7922] text-black 
                       font-semibold hover:opacity-90 transition"
          >
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}
