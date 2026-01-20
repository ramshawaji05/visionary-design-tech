"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Clapperboard,
  Film,
  Video,
  Wand2,
  Box,
  Layers,
  Camera,
  Palette,
  PencilRuler,
  Speaker,
  Workflow,
  Wrench,
  Gauge,
  ShieldCheck,
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
export default function Animation2D3DPage() {
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
                2D / 3D Animation • Motion Graphics • Explainers • Product Videos
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Bring ideas to life with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  cinematic
                </span>{" "}
                animation.
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We create high-impact 2D and 3D animations for brands—explainer videos, product promos, social ads,
                character animation, logo motion, and cinematic visuals. Designed to grab attention and communicate
                clearly within seconds.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book Free Video Call
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
                {["Script + storyboard", "2D & 3D styles", "Sound + music", "Social-ready versions"].map((t) => (
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
                    <h3 className="mt-1 text-xl font-semibold">A full animation pipeline</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    15s → 2min+
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Explainer Videos", icon: <Clapperboard className="h-4 w-4" /> },
                    { label: "2D Motion", icon: <Wand2 className="h-4 w-4" /> },
                    { label: "3D Product", icon: <Box className="h-4 w-4" /> },
                    { label: "Logo Animation", icon: <Layers className="h-4 w-4" /> },
                    { label: "Social Ads", icon: <Video className="h-4 w-4" /> },
                    { label: "Storytelling", icon: <Film className="h-4 w-4" /> },
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
                    { k: "Style", v: "Modern" },
                    { k: "Delivery", v: "Fast" },
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

      {/* ================= VIDEO TYPES ================= */}
      <AnimatedSection className="border-y border-white/10 bg-[#0b0b0b] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-400">Formats we deliver (optimized per platform)</p>
            <p className="mt-2 text-xs text-gray-500">Reels, Shorts, YouTube, website, ads, product pages.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
            {["15s Ads", "Explainers", "3D Product", "Logo Motion", "Reels", "YouTube"].map((t) => (
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
              title="2D and 3D animation services for brands and products"
              desc="From script to final export—we handle the full process and deliver platform-ready versions."
            />

            <div className="mt-10 space-y-3">
              <Bullet>Scriptwriting and messaging (optional)</Bullet>
              <Bullet>Storyboards and style frames</Bullet>
              <Bullet>2D motion graphics and kinetic typography</Bullet>
              <Bullet>3D modeling, lighting, and product visualization</Bullet>
              <Bullet>Character animation (2D/3D as required)</Bullet>
              <Bullet>Sound design, voiceover (optional), music</Bullet>
              <Bullet>Export versions for Reels/Shorts/YouTube/ads</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Explainers", "Product Promos", "Motion Graphics", "3D Renders", "Social Ads", "Brand Films"].map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "2D Motion Graphics",
                text: "Clean, modern animations for explainers, ads, and brand content.",
                icon: <Wand2 className="h-5 w-5" />,
              },
              {
                title: "3D Product Animation",
                text: "Cinematic 3D visuals for product demos, launches, and hero videos.",
                icon: <Box className="h-5 w-5" />,
              },
              {
                title: "Explainer Videos",
                text: "Story-driven videos that simplify complex services and improve conversions.",
                icon: <Clapperboard className="h-5 w-5" />,
              },
              {
                title: "Logo & Brand Motion",
                text: "Logo animation, intro/outro, lower thirds, and branded motion packages.",
                icon: <Layers className="h-5 w-5" />,
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
            title="A simple production pipeline"
            desc="Clear steps, fast feedback loops, and polished deliverables."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Plan", points: ["Brief + goals", "Script (optional)", "Style direction"] },
              { step: "02", title: "Design + Animate", points: ["Storyboards", "Animation + 3D", "Revisions"] },
              { step: "03", title: "Finalize", points: ["Sound + exports", "Platform versions", "Delivery package"] },
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
            title="Tools we use for 2D/3D animation"
            desc="We choose the right tools based on your style, timeline, and output needs."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <StackBlock
                icon={<Video className="h-5 w-5" />}
                title="2D Motion & Editing"
                subtitle="Motion graphics, compositing, and cuts."
                items={[
                  "After Effects",
                  "Premiere Pro",
                  "CapCut (short-form)",
                  "Kinetic Typography",
                  "Transitions + overlays",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Box className="h-5 w-5" />}
                title="3D Pipeline"
                subtitle="Modeling, animation, lighting, render."
                items={[
                  "Blender",
                  "Cinema 4D (optional)",
                  "3D Modeling",
                  "Lighting + Materials",
                  "Rendering + Compositing",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Palette className="h-5 w-5" />}
                title="Design Assets"
                subtitle="Style frames and visuals."
                items={[
                  "Illustrator",
                  "Photoshop",
                  "Figma (style frames)",
                  "Brand kits",
                  "Texture libraries",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Speaker className="h-5 w-5" />}
                title="Audio"
                subtitle="Sound design and voice (optional)."
                items={[
                  "SFX libraries",
                  "Music licensing (as required)",
                  "Voiceover (optional)",
                  "Mixing + mastering basics",
                ]}
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
                  2D & 3D Animation Services for Brands, Products, and Marketing Campaigns
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  2D and 3D animation helps brands explain ideas quickly and create content that feels premium. Whether you need a short
                  ad for social media, a full explainer video for your website, or a 3D product animation for a launch, animation can
                  increase attention, retention, and conversion. We create motion content that matches your brand style and is optimized
                  for platforms like Instagram Reels, TikTok, YouTube Shorts, and paid ads.
                </p>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">2D animation and motion graphics</h3>
                  <p className="text-gray-400 leading-relaxed">
                    2D animation is ideal for explainers, UI-style motion graphics, brand storytelling, and educational content. With clean
                    typography and smooth transitions, 2D motion videos help audiences understand services, processes, and features in a
                    short time. We often combine icons, illustrations, and kinetic typography to keep videos fast, modern, and clear.
                  </p>

                  <h3 className="text-2xl font-semibold">3D animation and product visualization</h3>
                  <p className="text-gray-400 leading-relaxed">
                    3D animation is best for product-focused brands that want a cinematic feel. We can model your product (or use existing CAD),
                    create materials and lighting, animate camera movements, and render high-quality visuals. 3D is perfect for product launches,
                    ecommerce product pages, and hero videos that build trust and premium perception.
                  </p>

                  <h3 className="text-2xl font-semibold">Explainer videos that convert</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A good explainer video is structured: problem → solution → features → proof → call to action. We help with script direction,
                    storyboarding, and pacing so the message stays simple and conversion-friendly. Explainers are commonly used on landing pages,
                    social ads, and sales presentations.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Social media animations and ads</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Social content must grab attention quickly. We create short animations optimized for vertical formats, fast hooks, and clear CTAs.
                    We also deliver variations for A/B testing: different hooks, lengths, and captions so you can improve performance over time.
                  </p>

                  <h3 className="text-2xl font-semibold">Brand motion packages</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A motion package includes animated logo, intro/outro, lower thirds, transitions, and templates. This helps your brand look consistent
                    across YouTube, webinars, ads, and presentations—without redesigning every time.
                  </p>

                  <h3 className="text-2xl font-semibold">Delivery formats and versions</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We export platform-ready versions: vertical (9:16) for Reels/Shorts, square (1:1) for feeds, and horizontal (16:9) for YouTube and websites.
                    We also provide compressed versions for fast loading and high-quality masters for archiving.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">2D/3D Animation FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Do you provide script and storyboard?",
                      a: "Yes. We can provide script guidance and storyboards, or work from your existing script.",
                    },
                    {
                      q: "Can you create short-form ads for Reels/TikTok?",
                      a: "Yes. We produce vertical short-form videos and can deliver multiple hooks/versions for testing.",
                    },
                    {
                      q: "Can you animate my product in 3D?",
                      a: "Yes. If you have CAD/3D files, we can use them; otherwise, we can model based on references depending on complexity.",
                    },
                    {
                      q: "What length is best for an explainer?",
                      a: "Most explainers perform best at 45–90 seconds, but we tailor length to your message and audience.",
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
                    Book Free Video Call <ArrowRight className="h-5 w-5" />
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
            title="2D/3D animation packages"
            desc="Replace pricing placeholders with your real tiers. We scope by length, style, and complexity."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Short Social Ads",
                // price: "From $___",
                desc: "15–30s animations for Reels/TikTok/ads with multiple variations.",
                items: ["1–3 versions", "Vertical format", "Captions/CTA", "Fast delivery"],
                featured: false,
              },
              {
                name: "Explainer Video",
                // price: "From $___",
                desc: "45–90s explainer with storyboard, motion design, and sound.",
                items: ["Storyboard", "Motion graphics", "Voiceover optional", "Multi-format exports"],
                featured: true,
              },
              {
                name: "3D Product Video",
                // price: "From $___",
                desc: "Cinematic 3D product animation for launches and premium marketing.",
                items: ["3D modeling/scene", "Lighting + render", "Camera animation", "Final exports"],
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
                    <p className="mt-2 text-xs text-gray-500">*Pricing depends on style & complexity</p>

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
                q: "Do you provide voiceover and music?",
                a: "Yes. Voiceover and music can be included depending on your package. We can also work with your existing voice or brand audio.",
              },
              {
                q: "Can you match a specific animation style?",
                a: "Yes. Share references and we’ll match the style while keeping it modern and brand-consistent.",
              },
              {
                q: "Do you deliver multiple sizes (Reels, YouTube, website)?",
                a: "Yes. We can export 9:16, 1:1, and 16:9 versions depending on where you’ll publish.",
              },
              {
                q: "Can you animate our existing logo/brand assets?",
                a: "Yes. If you have vector files (AI/SVG), we can create a clean motion package.",
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to create stunning animation?</h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Tell us your goal and preferred style. We’ll propose a concept, timeline, and deliver a polished 2D/3D animation package.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Book Free Video Call <ArrowRight className="h-5 w-5" />
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
