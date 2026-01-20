import type { Metadata } from "next";

import HeroCinematic from "@/components/sections/HeroCinematic";
import ServicesCinematic from "@/components/sections/ServicesCinematic";
import ShowcaseScroll3D from "@/components/sections/ShowcaseScroll3D";
import PortfolioCinematic from "@/components/sections/PortfolioCinematic";
import WhyChooseUsCinematic from "@/components/sections/WhyChooseUsCinematic";
import ProcessSection from "@/components/sections/ProcessSection";
import SplitContentSection from "@/components/sections/SplitContentSection";
import ToolsCinematic from "@/components/sections/ToolsCinematic";
import SeoContentSection from "@/components/sections/SeoContentSection";
import FaqSchemaSection from "@/components/sections/FaqSchemaSection";
import ContactConversationSection from "@/components/sections/ContactConversationSection";
import CallToActionCinematic from "@/components/sections/CallToActionCinematic";

export const metadata: Metadata = {
  title: "Visionary Design Tech — Digital Agency",
  description:
    "Next.js + GSAP agency site with premium motion design, micro-SaaS tools, and SEO-ready performance.",
  openGraph: {
    title: "Visionary Design Tech — Digital Agency",
    description:
      "Premium motion, ultra-fast performance, and conversion-focused UX.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — Attention */}
      <HeroCinematic />

      {/* 2. SERVICES — What you do */}
      <ServicesCinematic />

      {/* 3. SHOWCASE — Capability */}
      <ShowcaseScroll3D />

      {/* 4. PORTFOLIO — Proof */}
      <PortfolioCinematic />

      {/* 5. WHY CHOOSE US — Trust */}
      <WhyChooseUsCinematic />

      {/* 6. PROCESS — How you work */}
      <ProcessSection />

      {/* 7. STRATEGIC STORY — Depth */}
      <SplitContentSection />

      {/* 8. TOOLS / STACK — Credibility */}
      <ToolsCinematic />

      {/* 9. SEO AUTHORITY — Long-form content */}
      <SeoContentSection />

      {/* 10. FAQ — Objection handling */}
      <FaqSchemaSection />

      {/* 11. CONTACT — Primary conversion */}
      <ContactConversationSection />

      {/* 12. FINAL CTA — Reinforcement */}
      <CallToActionCinematic />
    </>
  );
}
