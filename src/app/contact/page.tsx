"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  User,
  Building,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
const res = await fetch("https://formspree.io/f/mvzzznry", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
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
    <main className="bg-black text-white min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-[#ed7922]">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Tell us about your project and we’ll get back with clear next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT — INFO */}
          <div className="space-y-10">
            <div className="flex gap-5">
              <FaWhatsapp className="text-[#ed7922] text-2xl mt-1" />
              <p className="text-gray-400">+1 (470) 449-3629</p>
            </div>

            <div className="flex gap-5">
              <Mail className="text-[#ed7922] mt-1" />
              <p className="text-gray-400">info@visionarydesigntech.com</p>
            </div>

            <div className="flex gap-5">
              <MapPin className="text-[#ed7922] mt-1" />
              <p className="text-gray-400">
                KIRKWOOD RD NE<br />
                ATLANTA, GA 30317
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61574564094211" target="_blank"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:border-[#ed7922] hover:text-[#ed7922] transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/visionarydesigntech/" target="_blank"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:border-[#ed7922] hover:text-[#ed7922] transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/visionarydesigntech" target="_blank"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:border-[#ed7922] hover:text-[#ed7922] transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div>
            <h2 className="text-3xl font-semibold mb-10">Send a Message</h2>

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


              <div className="flex gap-4 border-b border-white/20 pb-4">
                <User className="text-gray-400" />
                <input name="name" required placeholder="Your Name*"
                  className="bg-transparent w-full outline-none placeholder-gray-500" />
              </div>

              <div className="flex gap-4 border-b border-white/20 pb-4">
                <Building className="text-gray-400" />
                <input name="company" placeholder="Company Name"
                  className="bg-transparent w-full outline-none placeholder-gray-500" />
              </div>

              <div className="flex gap-4 border-b border-white/20 pb-4">
                <Mail className="text-gray-400" />
                <input type="email" name="email" required placeholder="Email Address*"
                  className="bg-transparent w-full outline-none placeholder-gray-500" />
              </div>

              <div className="flex gap-4 border-b border-white/20 pb-4">
                <Phone className="text-gray-400" />
                <input name="phone" required placeholder="Phone / WhatsApp*"
                  className="bg-transparent w-full outline-none placeholder-gray-500" />
              </div>

              <div className="flex gap-4 border-b border-white/20 pb-4">
                <MessageSquare className="text-gray-400 mt-1" />
                <textarea name="message" rows={3} required
                  placeholder="Tell us about your project*"
                  className="bg-transparent w-full outline-none placeholder-gray-500 resize-none" />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="px-12 py-4 rounded-full bg-[#ed7922] text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
