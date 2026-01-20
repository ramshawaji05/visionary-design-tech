"use client";

import React, { useState } from "react";
import { User, Building, Mail, Phone, MessageSquare } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactConversationSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mvzzznry", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <div>
          <span className="block text-sm uppercase tracking-widest text-gray-400 mb-6">
            Start Here
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">
            Let’s Build <br />
            <span className="text-[#f97316]">
              Something Intelligent <br /> & Built to Perform
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-xl mb-12 leading-relaxed">
            Whether you’re planning a new website, redesigning an existing
            platform, building an application, or exploring automation and AI —
            we help turn ideas into scalable digital systems with clarity and
            purpose.
          </p>

          {/* SOCIAL LINKS */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Follow Us
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574564094211"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#f97316] hover:text-[#f97316] transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://www.instagram.com/visionarydesigntech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#f97316] hover:text-[#f97316] transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://www.linkedin.com/company/visionarydesigntech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#f97316] hover:text-[#f97316] transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <h3 className="text-4xl font-semibold mb-10 text-white">
            Start a Conversation With Us
          </h3>

          {status === "success" && (
            <p className="mb-6 text-green-400">
              ✅ Message sent successfully. We’ll be in touch shortly.
            </p>
          )}

          {status === "error" && (
            <p className="mb-6 text-red-400">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Optional hidden context (helps you identify where the lead came from) */}
            <input type="hidden" name="source" value="ContactConversationSection" />
            <input type="hidden" name="_subject" value="New Lead — Website Contact" />

            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name*"
                className="bg-transparent w-full outline-none placeholder-gray-500 text-white"
              />
            </div>

            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <Building size={18} className="text-gray-400" />
              <input
                type="text"
                name="company"
                placeholder="Company Name*"
                className="bg-transparent w-full outline-none placeholder-gray-500 text-white"
              />
            </div>

            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address*"
                className="bg-transparent w-full outline-none placeholder-gray-500 text-white"
              />
            </div>

            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <Phone size={18} className="text-gray-400" />
              <input
                type="text"
                name="phone"
                required
                placeholder="Phone Number / WhatsApp*"
                className="bg-transparent w-full outline-none placeholder-gray-500 text-white"
              />
            </div>

            <div className="flex items-start gap-4 border-b border-white/20 pb-4">
              <MessageSquare size={18} className="text-gray-400 mt-1" />
              <textarea
                name="message"
                rows={3}
                required
                placeholder="Briefly tell us about your project*"
                className="bg-transparent w-full outline-none placeholder-gray-500 text-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-10 inline-flex items-center justify-center px-12 py-4 rounded-full bg-[#f97316] text-black font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}