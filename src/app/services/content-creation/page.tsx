"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  PenTool,
  Video,
  Camera,
  Mic,
  Clapperboard,
  LayoutGrid,
  Megaphone,
  TrendingUp,
  BarChart3,
  Target,
  CalendarDays,
  Workflow,
  Wand2,
  Image as ImageIcon,
  FileText,
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
export default function ContentCreationPage() {
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
                Content Creation • Video • Design • Copy • UGC • Ads
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Content that{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  grabs attention
                </span>{" "}
                and converts.
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We create scroll-stopping content for brands—short-form videos, social creatives, ad visuals, brand photography,
                scripts, captions, and content calendars. Built for performance across Instagram, TikTok, YouTube, LinkedIn, and ads.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book Free Content Call
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
                {["Monthly calendars", "Video + design", "Hooks + scripts", "Ad-ready versions"].map((t) => (
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
                    <p className="text-sm text-gray-400">What we produce</p>
                    <h3 className="mt-1 text-xl font-semibold">A content system</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    Organic + Ads
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Short-form video", icon: <Video className="h-4 w-4" /> },
                    { label: "Design posts", icon: <ImageIcon className="h-4 w-4" /> },
                    { label: "Copywriting", icon: <FileText className="h-4 w-4" /> },
                    { label: "Photoshoots", icon: <Camera className="h-4 w-4" /> },
                    { label: "UGC direction", icon: <Clapperboard className="h-4 w-4" /> },
                    { label: "Monthly calendar", icon: <CalendarDays className="h-4 w-4" /> },
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
                    { k: "Formats", v: "All" },
                    { k: "Output", v: "Fast" },
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

      {/* ================= CONTENT FORMATS ================= */}
      <AnimatedSection className="border-y border-white/10 bg-[#0b0b0b] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-400">Content formats we create (based on your niche)</p>
            <p className="mt-2 text-xs text-gray-500">Reels, TikTok, Shorts, carousels, graphics, blogs, ads.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
            {["Reels", "TikTok", "Shorts", "Carousels", "Ads", "Blogs"].map((t) => (
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
              title="Content creation services that scale"
              desc="We create content for awareness, trust, and conversions—organized into a system your business can run every month."
            />

            <div className="mt-10 space-y-3">
              <Bullet>Content strategy: pillars, formats, and messaging</Bullet>
              <Bullet>Short-form scripting: hooks, structure, CTA</Bullet>
              <Bullet>Video editing: captions, cuts, pacing, thumbnails</Bullet>
              <Bullet>Design creatives: carousels, templates, promo posts</Bullet>
              <Bullet>Content calendars: monthly planning + batch production</Bullet>
              <Bullet>UGC direction: briefs + editing for creator content</Bullet>
              <Bullet>Ad creative versions: multiple hooks and angles</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Video Editing", "Scripts", "Carousels", "Templates", "UGC", "Ads", "Calendars"].map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Short-Form Video (Reels/TikTok)",
                text: "High-retention edits, captions, hooks, and platform-ready exports.",
                icon: <Video className="h-5 w-5" />,
              },
              {
                title: "Social Design",
                text: "Carousels, posters, thumbnails, and templates that stay on-brand.",
                icon: <ImageIcon className="h-5 w-5" />,
              },
              {
                title: "Copywriting & Captions",
                text: "Captions, CTAs, and messaging that drive comments, clicks, and leads.",
                icon: <FileText className="h-5 w-5" />,
              },
              {
                title: "Content Systems",
                text: "Monthly calendars, batch production, and repeatable formats that scale.",
                icon: <Workflow className="h-5 w-5" />,
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
            title="A repeatable content workflow"
            desc="Strategy → batch production → publish → improve. Simple and consistent."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Plan", points: ["Audience + goals", "Content pillars", "Monthly calendar"] },
              { step: "02", title: "Create", points: ["Scripts + design", "Batch editing", "Approvals"] },
              { step: "03", title: "Optimize", points: ["Performance review", "New hooks/angles", "Ad-ready versions"] },
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
            title="Tools we use for content creation"
            desc="Professional editing, design, and planning tools for fast output."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <StackBlock
                icon={<Video className="h-5 w-5" />}
                title="Video Editing"
                subtitle="Short-form edits and social-ready exports."
                items={["Premiere Pro", "After Effects", "CapCut", "Subtitles + captions", "Thumbnail templates"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<PenTool className="h-5 w-5" />}
                title="Design"
                subtitle="Carousels, templates, and brand visuals."
                items={["Figma", "Canva", "Photoshop", "Illustrator", "Brand kits"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<CalendarDays className="h-5 w-5" />}
                title="Planning"
                subtitle="Calendars, approvals, and consistency."
                items={["Notion", "Trello/Asana", "Google Drive", "Content calendars", "Approval workflows"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<BarChart3 className="h-5 w-5" />}
                title="Performance"
                subtitle="Track what works and iterate."
                items={["Platform analytics", "UTM tracking", "GA4 (optional)", "Reporting dashboards", "Content tests"]}
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
                  Content Creation Services for Social Media, Ads, and Brand Growth
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Content creation helps businesses build visibility, trust, and conversions. Modern content creation includes
                  strategy, scripting, design, filming direction, editing, and publishing workflows. For most brands, short-form video
                  performs best because it increases reach quickly. Social graphics and carousels build authority, and ad creatives convert
                  attention into leads and sales. We create content packages that make brands look consistent across platforms while improving performance.
                </p>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Short-form content for Reels, TikTok, and Shorts</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Short-form video is currently one of the best ways to grow brand reach. We create hook-driven content with fast pacing,
                    captions, and clear CTAs. We also create multiple variations (different hooks and angles) so brands can test what performs best.
                  </p>

                  <h3 className="text-2xl font-semibold">Content calendars and batch production</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Consistency is the key. We plan content monthly, batch-produce videos and graphics, and build a repeatable publishing system.
                    This reduces the stress of daily posting while keeping content consistent across platforms.
                  </p>

                  <h3 className="text-2xl font-semibold">Design templates and brand consistency</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Templates speed up output. We design reusable templates for posts, carousels, stories, and thumbnails so your team can create content faster
                    while staying aligned with brand identity.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Ad creatives that convert</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Social ads require strong creative. We create ad-ready videos and graphics built around different offers, hooks, and messaging angles.
                    With multiple variations, brands can improve results through testing and optimization.
                  </p>

                  <h3 className="text-2xl font-semibold">UGC content and creator-style videos</h3>
                  <p className="text-gray-400 leading-relaxed">
                    User-generated style content often performs well because it feels authentic. We can create UGC briefs, direct creators, and edit content into
                    high-performing ads and organic posts.
                  </p>

                  <h3 className="text-2xl font-semibold">Performance tracking and iteration</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Content improves through iteration. We review what performs best, identify winning formats and hooks, and adjust the content plan each month.
                    This makes content creation a growth system—not just random posting.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">Content Creation FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Do you provide scripts and hooks?",
                      a: "Yes. We write hooks and scripts tailored to your niche, offer, and audience—optimized for retention and action.",
                    },
                    {
                      q: "Can you create content calendars?",
                      a: "Yes. We plan monthly calendars so your content stays consistent and strategic.",
                    },
                    {
                      q: "Do you create ad creatives too?",
                      a: "Yes. We create multiple variations for testing, including different hooks, angles, and CTAs.",
                    },
                    {
                      q: "Can you work with our existing footage?",
                      a: "Yes. We can edit your existing content, improve pacing, add captions, and turn it into high-performing videos.",
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
                    Book Free Content Call <ArrowRight className="h-5 w-5" />
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
            title="Content creation packages"
            desc="Replace pricing placeholders with your real tiers. We scope by output volume and platforms."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter Content",
                // price: "From $___/mo",
                desc: "Consistent content to build presence and trust.",
                items: ["8–12 posts/mo", "Basic captions", "Templates", "Monthly planning"],
                featured: false,
              },
              {
                name: "Growth Content",
                // price: "From $___/mo",
                desc: "More video + better creative system for faster growth.",
                items: ["12–20 posts/mo", "Reels/shorts focus", "Hooks + scripts", "Optimization plan"],
                featured: true,
              },
              {
                name: "Content + Ads",
                // price: "From $___/mo",
                desc: "Content plus ad creatives for lead generation and sales.",
                items: ["Ad creatives", "Multiple hooks", "Landing CTA assets", "Testing-ready outputs"],
                featured: false,
              },
            ].map((p) => (
              <AnimatedItem key={p.name}>
                <div className="relative h-full">
                  {p.featured ? (
                    <div
                      className="pointer-events-none absolute -inset-2 rounded-3xl blur-2xl"
                      style={{ backgroundColor: "rgba(237,121,34,0.20)" }}
                    />
                  ) : null}

                  <GlassCard className="relative p-8 h-full">
                    {p.featured ? (
                      <div
                        className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs"
                        style={{
                          borderColor: "rgba(237,121,34,0.30)",
                          backgroundColor: "rgba(237,121,34,0.10)",
                          color: ORANGE,
                        }}
                      >
                        Most popular
                      </div>
                    ) : null}

                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{p.desc}</p>

                    {/* <p className="mt-6 text-3xl font-bold">{p.price}</p> */}
                    <p className="mt-2 text-xs text-gray-500">*Pricing depends on output & complexity</p>

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
          <SectionTitle center eyebrow="FAQ" title="Common questions" desc="Clear answers—fast." />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Do you help with content ideas?",
                a: "Yes. We build content pillars and produce monthly ideas tailored to your niche and audience.",
              },
              {
                q: "Do you film content too?",
                a: "We can provide filming direction and shot lists. If you have a team, we guide the shoot and handle editing and creative.",
              },
              {
                q: "Can you create UGC-style ads?",
                a: "Yes. We can produce UGC briefs and edit creator content into ad-ready versions for testing.",
              },
              {
                q: "Do you deliver captions and hashtags?",
                a: "Yes. Captions and hashtag direction can be included depending on scope and platform.",
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to scale your content?</h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Tell us your niche, platforms, and goals. We’ll build a monthly content system that grows reach and converts attention into results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Book Free Content Call <ArrowRight className="h-5 w-5" />
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
