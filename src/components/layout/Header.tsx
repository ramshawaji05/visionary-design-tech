"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // 🔒 lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 h-[64px] bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 h-full">

          {/* LOGO */}
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

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
            <Link href="/" className="hover:text-white">Home</Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white">
                Services <ChevronDown size={14} />
              </button>

              <div className="absolute left-0 top-full mt-3 w-64 rounded-xl bg-black border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="p-4 space-y-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block text-sm text-gray-300 hover:text-[#ed7922]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link href="/about" className="hover:text-white">About</Link>

            <Link
              href="/contact"
              className="ml-3 px-5 py-2 rounded-full bg-[#ed7922] text-black font-semibold hover:opacity-90"
            >
              Contact
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      {menuOpen && (
        <div className="fixed top-[64px] left-0 right-0 bottom-0 z-[9999] bg-black md:hidden">

          {/* CLOSE BAR */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <Image
              src="/logo.webp"
              alt="Visionary Design Tech"
              width={120}
              height={30}
              className="h-32 w-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="px-6 py-6 text-white text-lg">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block py-4 border-b border-white/10"
            >
              Home
            </Link>

            {/* SERVICES (accordion) */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-4 border-b border-white/10"
            >
              Services
              <ChevronDown
                className={`transition ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="pl-4 py-3 space-y-3 text-base text-gray-300">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-[#ed7922]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="block py-4 border-b border-white/10"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block py-4 border-b border-white/10"
            >
              About
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full mt-8 text-center py-4 rounded-full bg-[#ed7922] text-black font-semibold"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
