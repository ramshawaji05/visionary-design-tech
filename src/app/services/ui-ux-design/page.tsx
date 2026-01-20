"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Gauge,
  LayoutGrid,
  Search,
  Layers,
  MousePointerClick,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const ORANGE = "#ed7922";

/* =========================
   ANIMATION HELPERS
   (used on all sections EXCEPT Hero; and you can also skip header/footer)
========================= */
function useMotionConfig() {
  const reduce = useReducedMotion();
  return {
    reduce,
    section: {
      hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
      show: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0 },
    },
    transition: reduce
      ? { duration: 0 }
      : { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
    stagger: reduce ? 0 : 0.08,
  };
}

function AnimatedSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const m = useMotionConfig();
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={m.section as any}
      transition={m.transition as any}
    >
      <motion.div
        variants={{ show: { transition: { staggerChildren: m.stagger } } } as any}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

function AnimatedItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const m = useMotionConfig();
  return (
    <motion.div
      className={className}
      variants={m.item as any}
      transition={m.transition as any}
      whileHover={m.reduce ? undefined : ({ y: -2 } as any)}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   UI HELPERS
========================= */
function SectionTitle({
  eyebrow,
  title,
  desc,
  center,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p
        className="inline-flex items-center gap-2 text-sm tracking-widest text-[#ed7922]"
        style={{ color: ORANGE }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#ed7922]" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {desc ? (
        <p
          className={`mt-5 text-gray-400 leading-relaxed ${
            center ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* =========================
   PAGE
========================= */
export default function UiUxDesignPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* ================= HERO (NO animation) ================= */}
      <section className="relative min-h-[92vh] bg-black overflow-hidden">
        <ParticlesBg />

        {/* layered glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(237,121,34,0.22),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_0%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/65 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ed7922]/30 bg-[#ed7922]/10 text-sm tracking-wide text-[#ed7922]">
                <Sparkles className="h-4 w-4" />
                UI / UX Design & Product Experience
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Interfaces that feel{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  effortless
                </span>
                <br />
                and products that{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  convert.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We design high-performing UI/UX for websites, web apps, and mobile
                products — research-led, system-driven, and built to reduce friction
                from intent to action.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ed7922] text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                >
                  Book Free UX Consult
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                >
                  See Case Studies <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                {[
                  "Fast turnaround",
                  "Figma + dev-ready handoff",
                  "Mobile-first by default",
                  "Accessible components",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                      <Check className="h-3.5 w-3.5 text-[#ed7922]" />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-[#ed7922]/20 blur-3xl" />

              <GlassCard className="relative p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm text-gray-400">What you get</p>
                    <h3 className="mt-1 text-xl font-semibold">
                      A conversion-focused design system
                    </h3>
                  </div>

                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    2–6 weeks typical
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "UX Research", icon: <Search className="h-4 w-4" /> },
                    {
                      label: "User Flows",
                      icon: <MousePointerClick className="h-4 w-4" />,
                    },
                    { label: "Wireframes", icon: <LayoutGrid className="h-4 w-4" /> },
                    { label: "High-Fidelity UI", icon: <Layers className="h-4 w-4" /> },
                    { label: "Design Systems", icon: <ShieldCheck className="h-4 w-4" /> },
                    { label: "Conversion UX", icon: <Gauge className="h-4 w-4" /> },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group rounded-xl border border-white/10 bg-black/35 p-4 text-sm text-gray-300 hover:border-[#ed7922]/40 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-[#ed7922]/30 transition">
                          <span className="text-[#ed7922]">{item.icon}</span>
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { k: "↑ Conversions", v: "10–35%" },
                    { k: "Faster tasks", v: "20–40%" },
                    { k: "Less churn", v: "5–15%" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-xs text-gray-400">{s.k}</p>
                      <p className="mt-1 text-lg font-semibold">{s.v}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROOF (Animated) ================= */}
      <AnimatedSection className="border-y border-white/10 bg-[#0b0b0b] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-400">
                Trusted by teams building SaaS, eCommerce, and mobile products
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Swap these placeholders with real logos when ready.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
              {["Figma", "Webflow", "Next.js", "React", "Framer", "Stripe UX"].map(
                (t) => (
                  <AnimatedItem
                    key={t}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs text-gray-300"
                  >
                    {t}
                  </AnimatedItem>
                )
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ================= OUTCOMES (Animated) ================= */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div className="sticky top-24 self-start">
            <SectionTitle
              eyebrow="OUTCOMES"
              title="UI/UX that removes friction and drives action"
              desc="Design isn’t decoration — it’s direction. We build interfaces with clear hierarchy, consistent components, and interaction patterns users instantly understand."
            />

            <div className="mt-10 space-y-3 text-gray-300">
              {[
                "Clearer navigation + faster decision-making",
                "Mobile-first layouts that feel native",
                "Accessible components (WCAG-aware patterns)",
                "Developer-ready design systems",
              ].map((x) => (
                <div key={x} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ed7922]/15 border border-[#ed7922]/25">
                    <Check className="h-3.5 w-3.5 text-[#ed7922]" />
                  </span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "UX Strategy",
                text: "User journeys, flows, and IA built around real behavior.",
                icon: <Search className="h-5 w-5" />,
              },
              {
                title: "UI Design",
                text: "Modern layouts, typography, spacing, and components.",
                icon: <LayoutGrid className="h-5 w-5" />,
              },
              {
                title: "Prototyping",
                text: "Clickable prototypes to validate before development.",
                icon: <MousePointerClick className="h-5 w-5" />,
              },
              {
                title: "Design Systems",
                text: "Reusable components aligned to dev workflows.",
                icon: <Layers className="h-5 w-5" />,
              },
            ].map((item) => (
              <AnimatedItem key={item.title}>
                <GlassCard className="p-7 hover:border-white/20 transition">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#ed7922]/10 border border-[#ed7922]/25 text-[#ed7922]">
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </GlassCard>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= PROCESS (Animated) ================= */}
      <AnimatedSection id="process" className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="PROCESS"
            title="A clean, repeatable system from research to handoff"
            desc="You’ll always know what’s happening, what’s next, and what you’ll receive."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                points: ["Audit + analytics review", "User goals + pain points", "Competitor patterns"],
              },
              {
                step: "02",
                title: "Design",
                points: ["Flows + wireframes", "UI exploration", "Component library"],
              },
              {
                step: "03",
                title: "Validate + Handoff",
                points: ["Prototype testing", "Iterations", "Dev-ready specs + tokens"],
              },
            ].map((s) => (
              <AnimatedItem key={s.step}>
                <GlassCard className="p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Step</p>
                    <p className="text-2xl font-bold text-[#ed7922]">{s.step}</p>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                  <div className="mt-5 space-y-3">
                    {s.points.map((p) => (
                      <div key={p} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                          <Check className="h-3.5 w-3.5 text-[#ed7922]" />
                        </span>
                        {p}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= CASE STUDIES (Animated) ================= */}
      <AnimatedSection id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title="Recent UI/UX transformations"
            desc="Replace these placeholders with real case studies and metrics."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              {
                name: "SaaS Dashboard Redesign",
                metric: "↑ 22% activation",
                tags: ["UX Audit", "Design System", "Prototype"],
              },
              {
                name: "eCommerce Checkout UX",
                metric: "↓ 18% drop-off",
                tags: ["Flow redesign", "Mobile UI", "A/B-ready"],
              },
              {
                name: "Mobile App MVP UI",
                metric: "2x faster dev",
                tags: ["Components", "Tokens", "Handoff"],
              },
            ].map((c) => (
              <AnimatedItem key={c.name}>
                <GlassCard className="p-8 hover:border-white/20 transition">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">{c.name}</h3>
                    <span className="rounded-full border border-[#ed7922]/25 bg-[#ed7922]/10 px-3 py-1 text-xs text-[#ed7922]">
                      {c.metric}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                  >
                    Request full case study
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </GlassCard>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= PACKAGES (Animated) ================= */}
      <AnimatedSection id="packages" className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            center
            eyebrow="PACKAGES"
            title="Choose a package that matches your stage"
            desc="Simple scopes you can start with — we’ll tailor screens and deliverables to your product."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "UX Review",
                // price: "From $___",
                desc: "Best for quick clarity and a prioritized roadmap.",
                items: ["Heuristic audit", "Key flow review", "Actionable fixes"],
                featured: false,
              },
              {
                name: "UI/UX Sprint",
                // price: "From $___",
                desc: "Ideal for new pages, MVPs, and redesign sprints.",
                items: ["Flows + wireframes", "High-fi UI", "Prototype + iteration"],
                featured: true,
              },
              {
                name: "Design System",
                // price: "From $___",
                desc: "For teams that need consistency and speed.",
                items: ["Component library", "Tokens + styles", "Handoff documentation"],
                featured: false,
              },
            ].map((p) => (
              <AnimatedItem key={p.name}>
                <div className="relative h-full">
                  {p.featured ? (
                    <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-[#ed7922]/20 blur-2xl" />
                  ) : null}

                  <GlassCard
                    className={[
                      "relative p-8 h-full",
                      p.featured ? "border-[#ed7922]/30" : "",
                    ].join(" ")}
                  >
                    {p.featured ? (
                      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ed7922]/30 bg-[#ed7922]/10 px-4 py-1.5 text-xs text-[#ed7922]">
                        Most popular
                      </div>
                    ) : null}

                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{p.desc}</p>

                    {/* <p className="mt-6 text-3xl font-bold">{p.price}</p> */}
                    <p className="mt-2 text-xs text-gray-500">
                      *Pricing depends on screens & complexity
                    </p>

                    <div className="mt-6 space-y-3">
                      {p.items.map((i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                            <Check className="h-3.5 w-3.5 text-[#ed7922]" />
                          </span>
                          {i}
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className={[
                        "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition",
                        p.featured
                          ? "bg-[#ed7922] text-black hover:opacity-90"
                          : "border border-white/15 hover:bg-white/10",
                      ].join(" ")}
                    >
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </GlassCard>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= LONG SEO CONTENT (Animated) ================= */}
      <AnimatedSection className="bg-black py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="rounded-3xl p-8 md:p-12">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm tracking-widest text-[#ed7922]">IN-DEPTH GUIDE</p>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                  UI/UX Design Services That Improve Usability, Retention, and Conversions
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Strong UI/UX design helps users accomplish tasks faster, reduces confusion,
                  and creates a consistent experience across devices. Whether you’re building
                  a new product or redesigning an existing one, UI/UX is the difference between
                  “looks good” and “works beautifully.” Our approach blends research, interaction
                  design, and modern interface systems so your product feels intuitive from the
                  first click.
                </p>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold">What is UI/UX design?</h3>
                  <p className="text-gray-400 leading-relaxed">
                    UI (User Interface) design focuses on the visual and interactive layer —
                    layout, typography, colors, components, and states. UX (User Experience) design
                    focuses on how the product works — structure, user flows, information architecture,
                    accessibility, and ease of use. Together, UI and UX ensure your screens not only
                    look modern, but guide users confidently toward their next action.
                  </p>

                  <h3 className="text-xl font-semibold">Why UI/UX matters for business</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Improving UI/UX can reduce drop-offs in onboarding, raise form completion rates,
                    increase add-to-cart and checkout success, and improve retention for SaaS platforms.
                    When users don’t have to “figure it out,” they stay longer, trust your brand faster,
                    and convert more reliably.
                  </p>

                  <h3 className="text-xl font-semibold">When to hire a UI/UX designer</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Hire UI/UX design support if your product has high bounce rates, low activation,
                    or users frequently ask support questions about basic actions. You should also
                    invest in UI/UX when launching a new MVP, expanding features, rebuilding a design system,
                    or targeting new devices like mobile-first experiences.
                  </p>
                </div>

                <div className="space-y-5">
                  <h3 className="text-xl font-semibold">Our UI/UX deliverables</h3>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      "UX audit (heuristics + journey review) with a prioritized fix list",
                      "Information architecture and user flow diagrams",
                      "Wireframes for key screens and user journeys",
                      "High-fidelity UI designs aligned to brand and accessibility",
                      "Interactive prototypes for stakeholder alignment and testing",
                      "Design system components, tokens, and handoff documentation",
                    ].map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ed7922]/15 border border-[#ed7922]/25">
                          <Check className="h-3.5 w-3.5 text-[#ed7922]" />
                        </span>
                        <span className="text-gray-400 leading-relaxed">{x}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold">UI/UX for websites vs apps</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Website UI/UX typically focuses on messaging clarity, navigation, page structure,
                    and conversion paths (like lead forms, checkout, or booking). App UI/UX focuses more
                    on flows, repeat usage patterns, and scalability as features grow. In both cases, the goal
                    is the same: reduce cognitive load and make actions feel effortless.
                  </p>

                  <h3 className="text-xl font-semibold">Industries we design for</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We commonly design for SaaS dashboards, eCommerce stores, fintech platforms, marketplaces,
                    booking systems, and mobile apps. If your product involves complex decisions, multi-step flows,
                    or repeat usage, a strong UI/UX foundation makes the experience feel simple and premium.
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">UI/UX Design FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "How long does a UI/UX project take?",
                      a: "Most projects take 2–6 weeks depending on screens, complexity, and feedback cycles. Audits can be faster; design systems can take longer.",
                    },
                    {
                      q: "Do you work with developers?",
                      a: "Yes. We design with implementation in mind: consistent components, states, spacing rules, and handoff specs so dev teams can build faster.",
                    },
                    {
                      q: "Can you redesign only one user flow?",
                      a: "Absolutely. Checkout, onboarding, pricing, and signup flows are common high-impact starting points.",
                    },
                    {
                      q: "Do you provide Figma files?",
                      a: "Yes. Figma is our standard for UI design, components, prototypes, and developer handoff documentation.",
                    },
                  ].map((f) => (
                    <div
                      key={f.q}
                      className="rounded-2xl border border-white/10 bg-black/40 p-6"
                    >
                      <p className="font-semibold">{f.q}</p>
                      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm text-gray-500 leading-relaxed">
                  Looking for UI/UX design for your website, web app, or mobile product? We can start with
                  an audit, then move into wireframes, high-fidelity UI, and a design system for a smooth
                  development handoff.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ed7922] text-black font-semibold hover:opacity-90 transition"
                >
                  Book Free UX Consultation <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
                >
                  View Packages <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* ================= FAQ (Animated) ================= */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            center
            eyebrow="FAQ"
            title="Common questions"
            desc="Quick answers — happy to tailor details to your project."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "How fast can we start?",
                a: "Typically within a few days depending on current workload. The first week is discovery + flow mapping.",
              },
              {
                q: "Do you deliver dev-ready files?",
                a: "Yes — Figma with components, tokens, spacing rules, and handoff notes. If needed, we can align to your existing component library.",
              },
              {
                q: "Can you redesign just one flow (like checkout)?",
                a: "Absolutely. High-impact flows are often the best place to start for measurable conversion gains.",
              },
            ].map((f) => (
              <AnimatedItem key={f.q}>
                <details className="group rounded-2xl border border-white/10 bg-white/5 p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-semibold">{f.q}</span>
                    <ChevronDown className="h-5 w-5 text-gray-400 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= FINAL CTA (Animated) ================= */}
      <AnimatedSection className="relative py-24 px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_50%,rgba(237,121,34,0.16),transparent_70%)]" />
        <div className="max-w-3xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to improve your product experience?
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            We’ll review your current UI/UX, identify friction, and propose practical
            improvements that boost clarity and conversions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#ed7922] text-black font-semibold hover:opacity-90 transition"
            >
              Book Free UX Consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
            >
              View Packages <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
