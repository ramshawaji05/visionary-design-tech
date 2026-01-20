"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  PenTool,
  Palette,
  LayoutGrid,
  Layers,
  Image as ImageIcon,
  Type,
  Shapes,
  BadgeCheck,
  Package,
  Megaphone,
  Monitor,
  Smartphone,
  Printer,
  FileText,
  Camera,
  Video,
  Wrench,
  Workflow,
  ChevronDown,
} from "lucide-react";

const ORANGE = "#ed7922";

/* =========================
   ANIMATION HELPERS
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
      : ({ duration: 0.7, ease: [0.16, 1, 0.3, 1] } as any),
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
      <p className="inline-flex items-center gap-2 text-sm tracking-widest" style={{ color: ORANGE }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      {desc ? (
        <p className={`mt-5 text-gray-400 leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
      {children}
    </span>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm text-gray-300">
      <span
        className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border"
        style={{ backgroundColor: "rgba(237,121,34,0.12)", borderColor: "rgba(237,121,34,0.25)" }}
      >
        <Check className="h-3.5 w-3.5" style={{ color: ORANGE }} />
      </span>
      <span className="text-gray-400 leading-relaxed">{children}</span>
    </div>
  );
}

function StackBlock({
  icon,
  title,
  subtitle,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <GlassCard className="p-7">
      <div className="flex items-start gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
          style={{
            backgroundColor: "rgba(237,121,34,0.10)",
            borderColor: "rgba(237,121,34,0.25)",
            color: ORANGE,
          }}
        >
          {icon}
        </span>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((x) => (
          <Pill key={x}>{x}</Pill>
        ))}
      </div>
    </GlassCard>
  );
}

/* =========================
   PAGE
========================= */
export default function GraphicDesignPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* ================= HERO (NO animation) ================= */}
      <section className="relative min-h-[92vh] bg-black overflow-hidden">
        <ParticlesBg />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(237,121,34,0.22),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_0%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/65 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm tracking-wide"
                style={{
                  borderColor: "rgba(237,121,34,0.30)",
                  backgroundColor: "rgba(237,121,34,0.10)",
                  color: ORANGE,
                }}
              >
                <Sparkles className="h-4 w-4" />
                Graphic Design • Branding • Social • Print • Marketing
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Design that looks{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  premium
                </span>
                —and communicates{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  clearly
                </span>
                .
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We create modern graphic design for brands that want consistency, clarity, and higher impact across
                digital and print. From logos and brand kits to social creatives, ads, pitch decks, and packaging.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book Free Design Consult
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                >
                  Explore Services <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                {["Brand consistency", "Fast turnaround", "Print-ready files", "Editable source files"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                      <Check className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl blur-3xl" style={{ backgroundColor: "rgba(237,121,34,0.20)" }} />

              <GlassCard className="relative p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm text-gray-400">What we design</p>
                    <h3 className="mt-1 text-xl font-semibold">A full visual system</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    Digital + Print
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Brand Identity", icon: <BadgeCheck className="h-4 w-4" /> },
                    { label: "Social Creatives", icon: <ImageIcon className="h-4 w-4" /> },
                    { label: "Marketing Ads", icon: <Megaphone className="h-4 w-4" /> },
                    { label: "UI Graphics", icon: <Monitor className="h-4 w-4" /> },
                    { label: "Print Design", icon: <Printer className="h-4 w-4" /> },
                    { label: "Pitch Decks", icon: <FileText className="h-4 w-4" /> },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group rounded-xl border border-white/10 bg-black/35 p-4 text-sm text-gray-300 hover:border-white/20 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition">
                          <span style={{ color: ORANGE }}>{item.icon}</span>
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { k: "Turnaround", v: "Fast" },
                    { k: "Files", v: "Source" },
                    { k: "Quality", v: "Premium" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
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

      {/* ================= DESIGN TYPES ================= */}
      <AnimatedSection className="border-y border-white/10 bg-[#0b0b0b] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-400">What we commonly design (customized to your goals)</p>
            <p className="mt-2 text-xs text-gray-500">Replace or reorder based on your services.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
            {["Logos", "Brand Kit", "Social Posts", "Ads", "Print", "Pitch Decks"].map((t) => (
              <AnimatedItem
                key={t}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs text-gray-300"
              >
                {t}
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= SERVICES ================= */}
      <AnimatedSection id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div className="sticky top-24 self-start">
            <SectionTitle
              eyebrow="SERVICES"
              title="Graphic design services that support your brand everywhere"
              desc="From visuals to messaging, we create designs that are consistent, conversion-friendly, and ready for real-world use."
            />

            <div className="mt-10 space-y-3">
              <Bullet>Logo design + brand identity systems</Bullet>
              <Bullet>Brand guidelines: colors, typography, usage rules</Bullet>
              <Bullet>Social media templates + content visuals</Bullet>
              <Bullet>Ad creatives (Meta, Google, YouTube thumbnails)</Bullet>
              <Bullet>Print assets: flyers, brochures, menus, signage</Bullet>
              <Bullet>Pitch decks + presentations</Bullet>
              <Bullet>Packaging + label design (where needed)</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Branding", "Logos", "Social Design", "Ads", "Print", "Packaging", "Presentation Design"].map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Brand Identity",
                text: "Logo, typography, colors, and a style system that scales across platforms.",
                icon: <BadgeCheck className="h-5 w-5" />,
              },
              {
                title: "Marketing Design",
                text: "Ad creatives, banners, promo assets, and campaign visuals built for conversion.",
                icon: <Megaphone className="h-5 w-5" />,
              },
              {
                title: "Social Content Design",
                text: "Carousels, reels covers, stories, and templates that keep your feed consistent.",
                icon: <ImageIcon className="h-5 w-5" />,
              },
              {
                title: "Print + Production",
                text: "Print-ready files (CMYK, bleed, export specs) for professional production.",
                icon: <Printer className="h-5 w-5" />,
              },
            ].map((item) => (
              <AnimatedItem key={item.title}>
                <GlassCard className="p-7 hover:border-white/20 transition">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                      style={{
                        backgroundColor: "rgba(237,121,34,0.10)",
                        borderColor: "rgba(237,121,34,0.25)",
                        color: ORANGE,
                      }}
                    >
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">{item.text}</p>
                </GlassCard>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= PROCESS ================= */}
      <AnimatedSection className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="PROCESS"
            title="A clean design workflow that stays fast"
            desc="We keep it simple: brief → concepts → revisions → final files."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Brief + Direction", points: ["Goal + audience", "Style references", "Content requirements"] },
              { step: "02", title: "Concepts + Iteration", points: ["Design concepts", "Feedback loop", "Refinement + polish"] },
              { step: "03", title: "Delivery + Files", points: ["Exports + formats", "Source files", "Usage guidelines"] },
            ].map((s) => (
              <AnimatedItem key={s.step}>
                <GlassCard className="p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Step</p>
                    <p className="text-2xl font-bold" style={{ color: ORANGE }}>
                      {s.step}
                    </p>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                  <div className="mt-5 space-y-3">
                    {s.points.map((p) => (
                      <Bullet key={p}>{p}</Bullet>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= TOOLS ================= */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="TOOLS"
            title="Tools we use for design, editing, and production"
            desc="We work in professional tools and deliver clean, editable files."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <StackBlock
                icon={<PenTool className="h-5 w-5" />}
                title="Design Tools"
                subtitle="Core tools for UI and graphic design."
                items={["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva (templates)", "Adobe XD (legacy)"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Video className="h-5 w-5" />}
                title="Motion & Video"
                subtitle="For reels, ads, and promo edits."
                items={["After Effects", "Premiere Pro", "CapCut", "Short-form templates", "Export presets"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Printer className="h-5 w-5" />}
                title="Print & Production"
                subtitle="Print-ready assets and exports."
                items={["CMYK exports", "Bleed & margins", "PDF/X (if required)", "Mockups", "Packaging dielines (if provided)"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Workflow className="h-5 w-5" />}
                title="Workflow"
                subtitle="Smooth feedback and approvals."
                items={["Notion / Trello", "Google Drive", "Figma comments", "Versioning", "Delivery checklists"]}
              />
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* ================= LONG SEO CONTENT ================= */}
      <AnimatedSection className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="rounded-3xl p-8 md:p-12">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm tracking-widest" style={{ color: ORANGE }}>
                  SEO-FRIENDLY GUIDE
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                  Graphic Design Services for Branding, Marketing, Social Media, and Print
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Graphic design helps your brand communicate clearly and stand out in crowded markets. A strong visual identity
                  improves trust, recognition, and conversion—especially on websites, social media, and advertising platforms.
                  We provide professional graphic design services for businesses that need consistent visuals across every channel,
                  from brand identity and logo design to social media creatives, marketing ads, and print-ready assets.
                </p>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Brand identity and logo design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A brand identity includes your logo, color palette, typography, and usage guidelines. It ensures your brand looks
                    consistent everywhere—from your website to your social posts, ads, packaging, and presentations. We design logos and
                    brand systems that are modern, scalable, and easy to apply across digital and print.
                  </p>

                  <h3 className="text-2xl font-semibold">Marketing and advertising creatives</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ads must communicate quickly. We design campaign creatives for Meta ads, Google display, YouTube thumbnails, banners,
                    and promotional materials. Design is aligned with your message and call-to-action so visuals support conversions—not
                    just aesthetics.
                  </p>

                  <h3 className="text-2xl font-semibold">Social media design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Social media requires consistency and speed. We design templates for posts, stories, carousels, and reel covers so your
                    team can publish quickly while staying on-brand. This improves brand recognition and reduces the time required to create content.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Print design and production</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Print design requires precision: sizing, bleed, safe margins, and color profiles (CMYK). We deliver print-ready files for
                    flyers, brochures, menus, signage, packaging, and more—formatted to match real production requirements.
                  </p>

                  <h3 className="text-2xl font-semibold">Presentation and pitch deck design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A good presentation improves clarity and persuasion. We design pitch decks, proposals, and marketing presentations with strong
                    hierarchy, clean layouts, and visual storytelling so your message lands with investors, clients, and stakeholders.
                  </p>

                  <h3 className="text-2xl font-semibold">File delivery and formats</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We deliver the formats you need: PNG/JPG for digital, vector files (AI/SVG/PDF) for scalability, and print-ready PDFs when needed.
                    Where applicable, we also provide editable source files and brand guidelines for future consistency.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">Graphic Design FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Do you provide source files?",
                      a: "Yes. Where applicable, we provide editable source files (AI/PSD/Figma) along with export formats.",
                    },
                    {
                      q: "Can you design for print?",
                      a: "Yes. We deliver print-ready assets with correct sizing, bleed, margins, and CMYK profiles where needed.",
                    },
                    {
                      q: "Do you offer monthly design support?",
                      a: "Yes. We can provide ongoing design support for social media, marketing, and campaigns.",
                    },
                    {
                      q: "How many revisions do we get?",
                      a: "Revisions depend on scope. We typically include a clear revision round structure to keep projects fast and aligned.",
                    },
                  ].map((f) => (
                    <div key={f.q} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                      <p className="font-semibold">{f.q}</p>
                      <p className="mt-3 text-sm text-gray-400 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Book Free Design Consult <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
                  >
                    View Services <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* ================= PACKAGES ================= */}
      <AnimatedSection id="packages" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            center
            eyebrow="PACKAGES"
            title="Graphic design packages"
            desc="Replace pricing placeholders with your real tiers. We scope by deliverables and turnaround."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Brand Starter",
                // price: "From $___",
                desc: "Logo + basic identity for a clean, professional presence.",
                items: ["Logo concepts", "Color + typography", "Basic brand guide", "Export formats"],
                featured: false,
              },
              {
                name: "Monthly Design",
                // price: "From $___/mo",
                desc: "Ongoing design support for social and marketing assets.",
                items: ["Social templates", "Ads + promos", "Fast turnaround", "Consistent style"],
                featured: true,
              },
              {
                name: "Marketing Kit",
                // price: "From $___",
                desc: "Campaign-ready design assets across channels.",
                items: ["Banners + ads", "Print files", "Presentation layouts", "Deliverables package"],
                featured: false,
              },
            ].map((p) => (
              <AnimatedItem key={p.name}>
                <div className="relative h-full">
                  {p.featured ? (
                    <div className="pointer-events-none absolute -inset-2 rounded-3xl blur-2xl" style={{ backgroundColor: "rgba(237,121,34,0.20)" }} />
                  ) : null}

                  <GlassCard className="relative p-8 h-full">
                    {p.featured ? (
                      <div
                        className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs"
                        style={{ borderColor: "rgba(237,121,34,0.30)", backgroundColor: "rgba(237,121,34,0.10)", color: ORANGE }}
                      >
                        Most popular
                      </div>
                    ) : null}

                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{p.desc}</p>

                    {/* <p className="mt-6 text-3xl font-bold">{p.price}</p> */}
                    <p className="mt-2 text-xs text-gray-500">*Pricing depends on scope & deliverables</p>

                    <div className="mt-6 space-y-3">
                      {p.items.map((i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                            <Check className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                          </span>
                          {i}
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className={[
                        "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition",
                        p.featured ? "text-black hover:opacity-90" : "border border-white/15 hover:bg-white/10",
                      ].join(" ")}
                      style={p.featured ? { backgroundColor: ORANGE } : undefined}
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

      {/* ================= FAQ (Accordion) ================= */}
      <AnimatedSection className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle center eyebrow="FAQ" title="Common questions" desc="Clear answers—fast and simple." />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Do you design in Canva too?",
                a: "Yes—especially for templates your team will reuse. For complex identity work we typically use Adobe/Figma and then provide Canva-friendly templates if needed.",
              },
              {
                q: "Can you match my existing brand?",
                a: "Yes. We can follow your existing guidelines or refine them to improve consistency and quality.",
              },
              {
                q: "Can you design reels covers and thumbnails?",
                a: "Yes. We design social covers, thumbnails, and templates optimized for scroll-stopping impact.",
              },
              {
                q: "Do you provide print files with bleed?",
                a: "Yes. We deliver print-ready PDFs with correct sizing, bleed, safe margins, and export specs.",
              },
            ].map((f) => (
              <AnimatedItem key={f.q}>
                <details className="group rounded-2xl border border-white/10 bg-white/5 p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-semibold">{f.q}</span>
                    <ChevronDown className="h-5 w-5 text-gray-400 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">{f.a}</p>
                </details>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= FINAL CTA ================= */}
      <AnimatedSection className="relative py-24 px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_50%,rgba(237,121,34,0.16),transparent_70%)]" />
        <div className="max-w-3xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold">Ready for premium visuals?</h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Tell us what you need—branding, social templates, ads, print, or a full marketing kit—and we’ll deliver a clean, consistent design system.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Book Free Design Consult <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
            >
              View Services <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
