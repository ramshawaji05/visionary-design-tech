"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Megaphone,
  TrendingUp,
  BarChart3,
  Target,
  Users,
  MessageCircle,
  PenTool,
  Video,
  Camera,
  CalendarDays,
  BadgeCheck,
  ShieldCheck,
  Search,
  Link2,
  Zap,
  Workflow,
  Wrench,
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
export default function SocialMediaManagementMarketingPage() {
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
                Social Media Management & Marketing
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Turn attention into{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  leads
                </span>
                ,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  sales
                </span>{" "}
                & brand trust.
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We manage and grow your social presence with strategy, content, community management, and paid
                campaigns—optimized for engagement, conversions, and consistent brand identity across platforms.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book Free Strategy Call
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                >
                  See Services <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                {["Content + strategy", "Ads + retargeting", "Monthly reporting", "Brand consistency"].map((t) => (
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
                    <p className="text-sm text-gray-400">What we deliver</p>
                    <h3 className="mt-1 text-xl font-semibold">A complete growth system</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    Organic + Paid
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Content Strategy", icon: <Target className="h-4 w-4" /> },
                    { label: "Creative & Design", icon: <PenTool className="h-4 w-4" /> },
                    { label: "Video/Reels", icon: <Video className="h-4 w-4" /> },
                    { label: "Community Mgmt", icon: <MessageCircle className="h-4 w-4" /> },
                    { label: "Ads & Retargeting", icon: <Megaphone className="h-4 w-4" /> },
                    { label: "Reporting", icon: <BarChart3 className="h-4 w-4" /> },
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
                    { k: "Reach", v: "↑ growth" },
                    { k: "Leads", v: "↑ quality" },
                    { k: "Brand", v: "↑ trust" },
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

      {/* ================= PLATFORMS ================= */}
      <AnimatedSection className="border-y border-white/10 bg-[#0b0b0b] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-400">
              Platforms we manage & advertise on (tailored to your audience)
            </p>
            <p className="mt-2 text-xs text-gray-500">Replace or expand based on your services.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
            {["Instagram", "Facebook", "TikTok", "LinkedIn", "YouTube", "X (Twitter)"].map((t) => (
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
              title="Social media management + performance marketing"
              desc="We combine creative, consistency, and performance. Organic content builds trust; paid campaigns scale results."
            />

            <div className="mt-10 space-y-3">
              <Bullet>Content strategy aligned with business goals (leads, sales, awareness)</Bullet>
              <Bullet>Monthly content calendar + posting schedule</Bullet>
              <Bullet>Design system for social posts (consistent brand identity)</Bullet>
              <Bullet>Short-form video planning (Reels / TikTok / Shorts)</Bullet>
              <Bullet>Community management (DMs, comments, reputation)</Bullet>
              <Bullet>Paid ads: lead gen, conversions, retargeting, lookalikes</Bullet>
              <Bullet>Monthly performance reporting + next-step optimizations</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Organic Growth", "Paid Ads", "Reels/TikTok", "Branding", "Lead Gen", "Retargeting", "Content Calendar"].map(
                (x) => (
                  <Pill key={x}>{x}</Pill>
                )
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Content Strategy",
                text: "Positioning, pillars, hooks, and messaging that match your audience and niche.",
                icon: <Target className="h-5 w-5" />,
              },
              {
                title: "Creative Production",
                text: "Post designs, carousels, stories, thumbnails, and templates built for attention.",
                icon: <PenTool className="h-5 w-5" />,
              },
              {
                title: "Video & Short Content",
                text: "Reels/TikTok scripting, editing direction, ideas, and conversion-first formats.",
                icon: <Video className="h-5 w-5" />,
              },
              {
                title: "Ads & Growth",
                text: "Campaign setup, creatives, targeting, retargeting, and optimization for ROI.",
                icon: <TrendingUp className="h-5 w-5" />,
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
            title="A simple workflow that stays consistent"
            desc="From strategy to content to reporting—everything runs on a repeatable system."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Audit + Strategy",
                points: ["Brand + content audit", "Competitors + positioning", "Content pillars + KPIs"],
                icon: <Search className="h-5 w-5" />,
              },
              {
                step: "02",
                title: "Create + Publish",
                points: ["Monthly content calendar", "Design + copywriting", "Posting + scheduling"],
                icon: <CalendarDays className="h-5 w-5" />,
              },
              {
                step: "03",
                title: "Optimize + Scale",
                points: ["Ads + retargeting", "A/B testing creatives", "Monthly reporting + iteration"],
                icon: <BarChart3 className="h-5 w-5" />,
              },
            ].map((s) => (
              <AnimatedItem key={s.step}>
                <GlassCard className="p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Step</p>
                    <p className="text-2xl font-bold" style={{ color: ORANGE }}>
                      {s.step}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                      style={{
                        backgroundColor: "rgba(237,121,34,0.10)",
                        borderColor: "rgba(237,121,34,0.25)",
                        color: ORANGE,
                      }}
                    >
                      {s.icon}
                    </span>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                  </div>

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
            title="Tools we use for content, scheduling, and performance"
            desc="We keep your content organized, consistent, and trackable across platforms."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <StackBlock
                icon={<Camera className="h-5 w-5" />}
                title="Creative & Content"
                subtitle="Design, editing, and brand assets."
                items={["Canva", "Adobe (PS/AI)", "CapCut", "Premiere", "Figma (templates)", "Brand kits"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Workflow className="h-5 w-5" />}
                title="Scheduling & Management"
                subtitle="Posting, approvals, and collaboration."
                items={["Meta Business Suite", "Buffer", "Hootsuite", "Later", "Notion", "Trello/Asana"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<BarChart3 className="h-5 w-5" />}
                title="Analytics & Reporting"
                subtitle="Track performance and optimize."
                items={["Meta Insights", "TikTok Analytics", "LinkedIn Analytics", "GA4", "UTMs", "Looker Studio"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Link2 className="h-5 w-5" />}
                title="Integrations"
                subtitle="Connect social to your business systems."
                items={["Pixel setup", "UTM tracking", "CRM (HubSpot)", "Zapier", "Email marketing tools", "Landing pages"]}
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
                  Social Media Management & Marketing Services for Growth, Leads, and Conversions
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Social media management is more than posting content. A strong social media marketing strategy includes
                  audience research, content planning, creative production, community engagement, and performance tracking.
                  For many businesses, social media is a primary channel for brand awareness, customer trust, and lead generation.
                  We help brands grow on platforms like Instagram, Facebook, TikTok, LinkedIn, YouTube, and X by combining organic
                  content systems with paid advertising campaigns.
                </p>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">What is social media management?</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Social media management includes planning and publishing content, building a consistent brand presence,
                    responding to comments and DMs, maintaining a content calendar, and monitoring performance. A management system
                    ensures content stays consistent and aligned with brand identity, messaging, and business goals.
                  </p>

                  <h3 className="text-2xl font-semibold">Social media marketing strategy</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Strategy determines what you post and why. We define content pillars, audience personas, positioning, and KPIs
                    such as reach, engagement, clicks, leads, and sales. We also design creative guidelines so your posts look consistent
                    and recognizable across platforms.
                  </p>

                  <h3 className="text-2xl font-semibold">Organic growth vs paid advertising</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Organic content builds trust and long-term community, while paid ads scale results quickly. A healthy marketing plan
                    usually combines both: organic establishes authority and social proof, and paid campaigns generate leads, conversions,
                    and retarget engaged users.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Content creation (posts, reels, and storytelling)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Today’s best-performing content is structured and intentional. We create content formats that match each platform—
                    carousel posts for education, short-form video for reach, stories for behind-the-scenes, and social proof for conversions.
                    We also use hooks, captions, CTAs, and consistent design templates to increase performance.
                  </p>

                  <h3 className="text-2xl font-semibold">Community management & reputation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Engagement is a ranking signal and a trust signal. Community management includes responding to comments and messages,
                    answering questions, and maintaining brand voice. For service businesses, fast and helpful replies often improve lead quality.
                  </p>

                  <h3 className="text-2xl font-semibold">Reporting and optimization</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We track what works and improve every month: best-performing content topics, hook styles, posting times, ad creatives,
                    audience segments, and cost-per-lead. Monthly reporting highlights results and next-step recommendations.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">Social Media Marketing FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Which platforms should my business focus on?",
                      a: "It depends on your audience. Instagram/TikTok are great for reach, LinkedIn for B2B, and Facebook for local/service businesses. We recommend based on your niche and goals.",
                    },
                    {
                      q: "How many posts per week do you recommend?",
                      a: "Consistency matters more than volume. We typically start with 3–5 posts/week plus stories and expand based on performance and capacity.",
                    },
                    {
                      q: "Do you run paid ads too?",
                      a: "Yes. We can manage Meta ads, retargeting, lead gen funnels, and creative testing for better ROI.",
                    },
                    {
                      q: "How long until I see results?",
                      a: "Organic growth usually improves steadily over 30–90 days. Paid ads can generate leads faster, but optimization still improves over a few weeks.",
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
                    Book Free Strategy Call <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
                  >
                    Explore Services <ArrowRight className="h-5 w-5" />
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
            title="Social media packages"
            desc="Replace pricing placeholders with your real tiers. We scope by platforms, content volume, and ad spend."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter Management",
                // price: "From $___/mo",
                desc: "For consistent posting and a clean, professional social presence.",
                items: ["Content calendar", "Design templates", "Posting + scheduling", "Basic reporting"],
                featured: false,
              },
              {
                name: "Growth Management",
                // price: "From $___/mo",
                desc: "Organic growth + content optimization + stronger creative strategy.",
                items: ["3–5 posts/week", "Reels/shorts plan", "Community replies", "Monthly reporting"],
                featured: true,
              },
              {
                name: "Marketing + Ads",
                // price: "From $___/mo",
                desc: "Full social marketing: content + paid ads + retargeting for leads/sales.",
                items: ["Meta ads setup", "Creative testing", "Retargeting", "Lead tracking + optimization"],
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
                    <p className="mt-2 text-xs text-gray-500">*Pricing depends on scope & platforms</p>

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
          <SectionTitle
            center
            eyebrow="FAQ"
            title="Common questions"
            desc="Clear answers—happy to tailor the plan to your niche."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Do you create content or do we provide it?",
                a: "Either works. We can create the strategy + creative assets, or we can use your raw content and polish it into high-performing posts and reels.",
              },
              {
                q: "Do you handle comments and DMs?",
                a: "Yes. Community management can be included based on package—replying to comments, DMs, FAQs, and filtering spam.",
              },
              {
                q: "Can you run ads with my budget?",
                a: "Yes. We can work with small budgets and scale as performance improves. We focus on creative testing and retargeting for efficiency.",
              },
              {
                q: "Do you provide monthly reports?",
                a: "Yes. Reports include what performed best, what didn’t, and clear action steps for the next month.",
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to grow your brand on social?</h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Tell us your niche and goals. We’ll build a strategy, content system, and campaign plan designed to turn attention into results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Book Free Strategy Call <ArrowRight className="h-5 w-5" />
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
