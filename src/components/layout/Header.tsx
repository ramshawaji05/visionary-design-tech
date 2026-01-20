"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "UI / UX Design", slug: "ui-ux-design" },
  { label: "Web Development", slug: "web-development" },
  { label: "App Development", slug: "app-development" },
  { label: "Social Media Management & Marketing", slug: "social-media-management-&-marketing" },
  { label: "Graphic Designing", slug: "graphic-designing" },
  { label: "AI & Automation", slug: "ai-&-automation" },
  { label: "2D / 3D Animation", slug: "2d-3d-animation" },
  { label: "Content Creation", slug: "content-creation" },
  { label: "Hosting & Migration", slug: "hosting-&-migration" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-[72px]">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Visionary Design Tech"
            width={140}
            height={36}
            priority
            className="h-32 md:h-32 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200 relative">
          <Link href="/" className="hover:text-white transition">Home</Link>

          {/* Desktop Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-white transition">
              Services <ChevronDown size={14} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 rounded-xl
                              bg-black/90 backdrop-blur-xl border border-white/10
                              shadow-xl p-4 space-y-2">
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

          <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>

          <Link
            href="/contact"
            className="ml-2 px-5 py-2 rounded-full bg-[#ed7922]
                       text-black font-semibold hover:opacity-90 transition"
          >
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg md:hidden">
          <div className="flex items-center justify-between px-4 h-[72px] border-b border-white/10">
            <Image src="/logo.webp" alt="Logo" width={120} height={32} />
            <button onClick={() => setMenuOpen(false)} className="text-white">
              <X size={26} />
            </button>
          </div>

          <div className="px-6 py-6 space-y-5 text-gray-200">
            <Link onClick={() => setMenuOpen(false)} href="/">Home</Link>
            <Link onClick={() => setMenuOpen(false)} href="/portfolio">Portfolio</Link>
            <Link onClick={() => setMenuOpen(false)} href="/about">About</Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-3 ml-3 space-y-3 text-sm text-gray-400">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-[#ed7922]"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              onClick={() => setMenuOpen(false)}
              href="/contact"
              className="inline-block mt-4 px-6 py-3 rounded-full bg-[#ed7922]
                         text-black font-semibold"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
