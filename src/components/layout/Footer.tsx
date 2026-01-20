"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  // WhatsApp config
  const whatsappNumberE164 = "+14704493629"; // keep + and country code
  const whatsappNumberDigits = "14704493629"; // WhatsApp wa.me expects digits only
  const whatsappMessage = encodeURIComponent(
    "Hi Visionary Design Tech! I’d like to discuss a project. Can we connect?"
  );

  return (
    <footer className="bg-black text-white mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Visionary Design Tech</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Premium digital experiences with motion, performance & strategy.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574564094211"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://www.instagram.com/visionarydesigntech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://www.linkedin.com/company/visionarydesigntech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition"
              >
                <FaLinkedinIn size={16} />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumberDigits}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>

            {/* Small CTA */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                Let’s build something <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/ui-ux-design" className="hover:text-white transition">
                  UI / UX Design
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/app-development" className="hover:text-white transition">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/social-media-management-marketing" className="hover:text-white transition">
                  Social Media Management & Marketing
                </Link>
              </li>
              <li>
                <Link href="/graphic-designing" className="hover:text-white transition">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="hover:text-white transition">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/2d-3d-animation" className="hover:text-white transition">
                  2D / 3D Animation
                </Link>
              </li>
              <li>
                <Link href="/content-creation" className="hover:text-white transition">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/hosting-migration" className="hover:text-white transition">
                  Hosting & Migration
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              {/* <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link> */}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {/* WhatsApp instead of tel */}
              <li className="flex gap-3">
                <Phone size={16} className="mt-1 text-gray-500" />
                <a
                  href={`https://wa.me/${whatsappNumberDigits}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {whatsappNumberE164}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail size={16} className="mt-1 text-gray-500" />
                <a href="mailto:info@visionarydesigntech.com" className="hover:text-white transition">
                  info@visionarydesigntech.com
                </a>
              </li>

              <li className="flex gap-3">
                <MapPin size={16} className="mt-1 text-gray-500" />
                <span>KIRKWOOD RD NE, ATLANTA, GA 30317</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          © {year} Visionary Design Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
