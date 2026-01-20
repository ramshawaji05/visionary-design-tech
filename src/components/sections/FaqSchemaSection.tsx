"use client";

import { useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does a full-service digital agency do?",
    a: "A full-service digital agency manages strategy, design, development, animation, content creation, automation, and marketing to create a cohesive, scalable, and performance-driven digital presence."
  },
  {
    q: "Do you design custom websites or use templates?",
    a: "We design fully custom websites tailored to your brand identity, goals, and audience. While modern frameworks are used for efficiency, the design and structure are never generic or template-based."
  },
  {
    q: "How long does a website or digital project take?",
    a: "Project timelines depend on scope and complexity. Smaller websites may take several weeks, while larger platforms, applications, or automation systems can take several months."
  },
  {
    q: "Do you offer services beyond web design?",
    a: "Yes. In addition to web design and development, we offer branding, graphic design, 2D and 3D animation, AI and automation solutions, social media marketing, and content creation."
  },
  {
    q: "How do you measure the success of a digital project?",
    a: "Success is measured using KPIs such as search visibility, traffic quality, engagement, conversion rates, operational efficiency, and long-term scalability aligned with project goals."
  }
];

export default function FaqSchemaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-32 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <header className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f97316] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Common questions businesses ask when choosing a digital agency and
            planning a website or digital transformation project.
          </p>
        </header>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                >
                  <span className="text-base font-medium">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ SCHEMA (MATCHES VISIBLE CONTENT) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
    </section>
  );
}
