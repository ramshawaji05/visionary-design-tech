"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Code2,
  LayoutGrid,
  Smartphone,
  MonitorSmartphone,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Lock,
  Gauge,
  Search,
  Workflow,
  GitBranch,
  Boxes,
  Cpu,
  PlugZap,
  Wrench,
  FileCode2,
  Package,
  Webhook,
  ChevronDown,
} from "lucide-react";

const ORANGE = "#ed7922";

/* =========================
   ANIMATION HELPERS
   (Use for ALL sections except Hero; keep Header/Footer outside if needed)
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
          style={{ backgroundColor: "rgba(237,121,34,0.10)", borderColor: "rgba(237,121,34,0.25)", color: ORANGE }}
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

export default function WebDevelopmentPage() {
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
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border bg-white/5 text-sm tracking-wide"
                style={{ borderColor: "rgba(237,121,34,0.30)", backgroundColor: "rgba(237,121,34,0.10)", color: ORANGE }}
              >
                <Sparkles className="h-4 w-4" />
                Web Development • Frontend • Backend • Full-Stack • CMS
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Modern websites & apps
                <br />
                built for{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  speed
                </span>
                ,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  security
                </span>{" "}
                & scale.
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We build responsive websites, web apps, and custom systems using modern stacks—optimized
                for performance, SEO, conversions, and clean developer handoff. From landing pages to
                full platforms with APIs, dashboards, and CMS.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book Free Dev Consult
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="#stacks"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                >
                  Explore Tech Stack <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                {[
                  "Core Web Vitals friendly",
                  "SEO + schema-ready",
                  "Secure auth + APIs",
                  "Clean CI/CD deployments",
                ].map((t) => (
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
                    <p className="text-sm text-gray-400">What we build</p>
                    <h3 className="mt-1 text-xl font-semibold">Production-grade web systems</h3>
                  </div>

                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    Next.js • APIs • CMS
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Frontend Apps", icon: <LayoutGrid className="h-4 w-4" /> },
                    { label: "Backend APIs", icon: <Server className="h-4 w-4" /> },
                    { label: "Databases", icon: <Database className="h-4 w-4" /> },
                    { label: "Cloud Deploy", icon: <Cloud className="h-4 w-4" /> },
                    { label: "Security", icon: <ShieldCheck className="h-4 w-4" /> },
                    { label: "Performance", icon: <Gauge className="h-4 w-4" /> },
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
                    { k: "Performance", v: "90+ scores" },
                    { k: "SEO", v: "Schema-ready" },
                    { k: "Deploy", v: "CI/CD" },
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

      {/* ================= QUICK PROOF ================= */}
      <AnimatedSection className="border-y border-white/10 bg-[#0b0b0b] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-400">We ship modern stacks with clean code, documentation, and scalable architecture.</p>
            <p className="mt-2 text-xs text-gray-500">Replace placeholders with your real clients/tools if needed.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
            {["Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Stripe"].map((t) => (
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

      {/* ================= SERVICES OVERVIEW ================= */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div className="sticky top-24 self-start">
            <SectionTitle
              eyebrow="OVERVIEW"
              title="Frontend, backend, full-stack, CMS, and custom builds"
              desc="We build modern web experiences end-to-end: UI, APIs, databases, integrations, CMS, security, and deployments—so your product is fast, stable, and easy to grow."
            />
            <div className="mt-10 space-y-3">
              <Bullet>Mobile-first responsive layouts (UI/UX aligned)</Bullet>
              <Bullet>SEO architecture: metadata, schema, performance, content structure</Bullet>
              <Bullet>Secure authentication, roles, permissions, dashboards</Bullet>
              <Bullet>APIs + integrations: payments, email, analytics, CRMs, automations</Bullet>
              <Bullet>CMS for easy content management (headless or traditional)</Bullet>
              <Bullet>Maintainable code: components, types, tests, CI/CD</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Landing Pages", "Business Websites", "Web Apps", "Dashboards", "Portals", "Ecommerce", "MVPs", "Admin Panels"].map(
                (x) => (
                  <Pill key={x}>{x}</Pill>
                )
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Frontend Development",
                text: "Modern UI with reusable components, animations, accessibility, and best practices.",
                icon: <LayoutGrid className="h-5 w-5" />,
              },
              {
                title: "Backend Development",
                text: "Secure APIs, databases, auth, and scalable architecture for real products.",
                icon: <Server className="h-5 w-5" />,
              },
              {
                title: "Full-Stack Systems",
                text: "End-to-end builds: UI + APIs + DB + deployment + documentation.",
                icon: <Boxes className="h-5 w-5" />,
              },
              {
                title: "CMS & Content Platforms",
                text: "Headless CMS, custom CMS, and content workflows for marketing teams.",
                icon: <FileCode2 className="h-5 w-5" />,
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

      {/* ================= TECH STACKS ================= */}
      <AnimatedSection id="stacks" className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="TECH STACK"
            title="Every stack we use — explained clearly"
            desc="Choose what fits your product. We can follow your existing stack or recommend the best option based on performance, scalability, and budget."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <StackBlock
                icon={<Code2 className="h-5 w-5" />}
                title="Frontend"
                subtitle="Modern UI for web & app-like experiences."
                items={[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Shadcn/UI",
                  "Framer Motion",
                  "Redux / Zustand",
                  "TanStack Query",
                  "Vite (when needed)",
                  "SASS (legacy)",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Smartphone className="h-5 w-5" />}
                title="Mobile & Cross-Platform"
                subtitle="When you need mobile apps or shared logic."
                items={[
                  "React Native",
                  "Expo",
                  "PWA (Next.js)",
                  "Capacitor",
                  "Mobile-first UI",
                  "Deep linking",
                  "Push notifications (via providers)",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Server className="h-5 w-5" />}
                title="Backend"
                subtitle="Secure APIs, business logic, and server-side systems."
                items={[
                  "Node.js",
                  "Express",
                  "NestJS",
                  "Next.js API Routes",
                  "REST APIs",
                  "GraphQL (when needed)",
                  "Webhooks",
                  "Cron jobs",
                  "Queues (BullMQ / RabbitMQ)",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Database className="h-5 w-5" />}
                title="Databases"
                subtitle="Structured, scalable data with the right model."
                items={[
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Redis",
                  "Prisma",
                  "Drizzle",
                  "ORM best practices",
                  "Migrations",
                  "Indexing + performance",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Lock className="h-5 w-5" />}
                title="Authentication & Security"
                subtitle="Login, roles, permissions, and protection."
                items={[
                  "NextAuth / Auth.js",
                  "JWT",
                  "OAuth (Google, GitHub, etc.)",
                  "RBAC Roles & Permissions",
                  "Rate limiting",
                  "Input validation",
                  "Secure headers",
                  "OWASP-aware patterns",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Cloud className="h-5 w-5" />}
                title="Cloud & Deployment"
                subtitle="Fast builds, reliable hosting, scalable infra."
                items={[
                  "Vercel",
                  "Netlify",
                  "AWS",
                  "DigitalOcean",
                  "Docker",
                  "CI/CD (GitHub Actions)",
                  "Environment management",
                  "CDN caching",
                  "Monitoring & logs",
                ]}
              />
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* ================= CMS SECTION ================= */}
      <AnimatedSection id="cms" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionTitle
              eyebrow="CMS"
              title="Headless CMS, custom CMS, and content workflows"
              desc="If your team needs to update content without developers, we implement the right CMS setup and content model."
            />

            <div className="mt-10 space-y-3">
              <Bullet>Headless CMS for structured content + multi-channel publishing</Bullet>
              <Bullet>Traditional CMS for simpler sites and editorial workflows</Bullet>
              <Bullet>Custom CMS for unique requirements, roles, and approvals</Bullet>
              <Bullet>Content modeling: pages, blogs, categories, tags, authors, media</Bullet>
              <Bullet>SEO fields: meta titles, descriptions, OG images, canonical URLs</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Sanity", "Strapi", "Contentful", "Prismic", "WordPress", "Payload CMS", "Directus", "Custom Admin"].map(
                (x) => (
                  <Pill key={x}>{x}</Pill>
                )
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Headless CMS",
                text: "Best for modern sites where performance, flexibility, and structured content matter.",
                icon: <Package className="h-5 w-5" />,
              },
              {
                title: "WordPress",
                text: "Great for editorial publishing or where your team already uses WP workflows.",
                icon: <FileCode2 className="h-5 w-5" />,
              },
              {
                title: "Custom CMS",
                text: "When you need approvals, roles, complex fields, or custom business logic.",
                icon: <Wrench className="h-5 w-5" />,
              },
              {
                title: "Ecommerce CMS",
                text: "Product catalogs, collections, inventory, checkout, and marketing tools.",
                icon: <PlugZap className="h-5 w-5" />,
              },
            ].map((c) => (
              <AnimatedItem key={c.title}>
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
                      {c.icon}
                    </span>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">{c.text}</p>
                </GlassCard>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= TOOLS & WORKFLOW ================= */}
      <AnimatedSection className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="TOOLS & WORKFLOW"
            title="How we build: tooling, QA, performance, and delivery"
            desc="A modern build process is what keeps your product stable, fast, and easy to maintain."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            <AnimatedItem>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ backgroundColor: "rgba(237,121,34,0.10)", borderColor: "rgba(237,121,34,0.25)", color: ORANGE }}
                  >
                    <GitBranch className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">Code Quality</h3>
                </div>
                <div className="mt-5 space-y-3">
                  <Bullet>TypeScript types + consistent patterns</Bullet>
                  <Bullet>ESLint + Prettier standards</Bullet>
                  <Bullet>Component architecture + reusable UI</Bullet>
                  <Bullet>Code reviews + documentation</Bullet>
                </div>
              </GlassCard>
            </AnimatedItem>

            <AnimatedItem>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ backgroundColor: "rgba(237,121,34,0.10)", borderColor: "rgba(237,121,34,0.25)", color: ORANGE }}
                  >
                    <Gauge className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">Performance</h3>
                </div>
                <div className="mt-5 space-y-3">
                  <Bullet>Core Web Vitals optimization</Bullet>
                  <Bullet>Image/CDN strategy + caching</Bullet>
                  <Bullet>Bundle control + code splitting</Bullet>
                  <Bullet>Server rendering/streaming where needed</Bullet>
                </div>
              </GlassCard>
            </AnimatedItem>

            <AnimatedItem>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ backgroundColor: "rgba(237,121,34,0.10)", borderColor: "rgba(237,121,34,0.25)", color: ORANGE }}
                  >
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">Security</h3>
                </div>
                <div className="mt-5 space-y-3">
                  <Bullet>Auth, roles, and protected routes</Bullet>
                  <Bullet>Input validation + safe APIs</Bullet>
                  <Bullet>Rate limits + secure headers</Bullet>
                  <Bullet>OWASP-aware build patterns</Bullet>
                </div>
              </GlassCard>
            </AnimatedItem>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ backgroundColor: "rgba(237,121,34,0.10)", borderColor: "rgba(237,121,34,0.25)", color: ORANGE }}
                  >
                    <Webhook className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">Integrations</h3>
                </div>
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  We connect your site/app to the tools your business uses—payments, email, analytics, CRMs,
                  support, automation, and more.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Stripe", "PayPal", "Mailchimp", "Resend", "SendGrid", "GA4", "Meta Pixel", "HubSpot", "Zapier"].map(
                    (x) => (
                      <Pill key={x}>{x}</Pill>
                    )
                  )}
                </div>
              </GlassCard>
            </AnimatedItem>

            <AnimatedItem>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ backgroundColor: "rgba(237,121,34,0.10)", borderColor: "rgba(237,121,34,0.25)", color: ORANGE }}
                  >
                    <Workflow className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">Delivery & Maintenance</h3>
                </div>
                <div className="mt-5 space-y-3">
                  <Bullet>Staging + production environments</Bullet>
                  <Bullet>CI/CD pipelines (GitHub Actions)</Bullet>
                  <Bullet>Monitoring, error tracking, and logs</Bullet>
                  <Bullet>Feature updates, performance tuning, security patches</Bullet>
                </div>
              </GlassCard>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* ================= LONG SEO CONTENT ================= */}
      <AnimatedSection className="bg-black py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="rounded-3xl p-8 md:p-12">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm tracking-widest" style={{ color: ORANGE }}>
                  SEO-FRIENDLY GUIDE
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                  Web Development Services: Frontend, Backend, Full-Stack, CMS, and Custom Builds
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Web development is more than “building pages.” A production-ready website or web application
                  needs performance, accessibility, SEO structure, security, scalable architecture, and clean
                  deployment workflows. We develop modern web solutions for businesses that need fast load times,
                  stable systems, and the flexibility to grow—whether that’s a marketing website, a SaaS platform,
                  an admin dashboard, an ecommerce store, or a custom portal.
                </p>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-10">
                {/* LEFT */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Frontend development</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Frontend development focuses on what users see and interact with: layout, components,
                    navigation, accessibility, responsiveness, and UI states. We build modern frontends with
                    reusable components and consistent design systems so your website stays easy to extend.
                    Typical frontend work includes responsive UI, animations, form UX, filtering/search, data-driven
                    pages, and client-side performance optimizations.
                  </p>

                  <h3 className="text-2xl font-semibold">Backend development</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Backend development powers the logic behind the UI: APIs, authentication, authorization,
                    database operations, validations, webhooks, file uploads, and integrations. We build secure,
                    well-structured backend services—whether it’s REST APIs or GraphQL—so your system can handle
                    real users, real payments, and real data safely.
                  </p>

                  <h3 className="text-2xl font-semibold">Full-stack development</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Full-stack development covers everything end-to-end: UI + backend + database + deployment.
                    This is ideal for MVPs, SaaS products, dashboards, internal tools, and platforms where features
                    evolve quickly. We focus on scalable architecture, clean data modeling, and maintainability so
                    your product doesn’t become hard to change later.
                  </p>

                  <h3 className="text-2xl font-semibold">Performance & SEO</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Modern SEO depends on performance and structure. We implement technical SEO foundations including
                    metadata, structured headings, clean URLs, internal linking, schema markup, sitemap/robots setup,
                    image optimization, caching strategies, and Core Web Vitals improvements—helping your pages rank
                    and load faster.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">CMS development</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A CMS (Content Management System) lets your team publish and update content without developer help.
                    We implement headless CMS platforms (for modern performance and flexibility), WordPress (for editorial
                    workflows), and custom CMS solutions (for unique roles, approvals, and complex content types).
                  </p>

                  <h3 className="text-2xl font-semibold">Custom web development</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Custom development is for businesses that need something more specific than a template: portals,
                    marketplaces, booking systems, dashboards, subscriptions, multi-tenant SaaS, internal tools,
                    automation-heavy workflows, and advanced integrations. We design the architecture around your business
                    logic so the system fits how you operate.
                  </p>

                  <h3 className="text-2xl font-semibold">Common integrations</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Many products depend on integrations: payments, email, analytics, CRMs, chat, and automation.
                    We implement integrations using secure keys, server-side processing, webhook verification, and
                    well-structured data flows. This helps prevent fragile integrations that break during scale.
                  </p>

                  <h3 className="text-2xl font-semibold">Maintenance and scaling</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Websites and apps must stay updated and secure. We support ongoing maintenance including dependency
                    updates, performance tuning, security hardening, feature iterations, and infrastructure upgrades.
                    If traffic grows, we optimize caching, database indexing, and server performance to keep the product stable.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">Web Development FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Which tech stack is best for my project?",
                      a: "It depends on goals: Next.js is excellent for SEO + speed, Node APIs for custom logic, and a headless CMS for scalable content. We recommend based on your scope and timeline.",
                    },
                    {
                      q: "Can you build only frontend or only backend?",
                      a: "Yes. We can deliver UI-only, API-only, or full-stack. If you already have a team, we can integrate into your workflow.",
                    },
                    {
                      q: "Do you provide source code and documentation?",
                      a: "Yes. You receive the full codebase, deployment instructions, environment setup, and handoff docs.",
                    },
                    {
                      q: "Do you support ecommerce?",
                      a: "Yes. We can build custom ecommerce experiences and integrate payments, shipping, product catalogs, and analytics.",
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
                    Book Free Dev Consultation <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href="#stacks"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
                  >
                    Review Tech Stack <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* ================= PACKAGES ================= */}
      <AnimatedSection id="packages" className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            center
            eyebrow="PACKAGES"
            title="Development packages"
            desc="Replace pricing placeholders with your real packages. We can scope by pages, features, integrations, and timeline."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Business Website",
                // price: "From $___",
                desc: "Fast, SEO-ready website with modern UI and clean structure.",
                items: ["Next.js build", "SEO + performance", "Responsive UI", "Deploy + handoff"],
                featured: false,
              },
              {
                name: "Web App / MVP",
                // price: "From $___",
                desc: "Full-stack MVP with auth, dashboards, and scalable architecture.",
                items: ["Frontend + APIs", "Database + auth", "Admin/dashboard", "Deploy + CI/CD"],
                featured: true,
              },
              {
                name: "CMS Platform",
                // price: "From $___",
                desc: "Headless CMS setup with content modeling and workflows.",
                items: ["CMS integration", "Content types", "SEO fields", "Training + docs"],
                featured: false,
              },
            ].map((p) => (
              <AnimatedItem key={p.name}>
                <div className="relative h-full">
                  {p.featured ? (
                    <div className="pointer-events-none absolute -inset-2 rounded-3xl blur-2xl" style={{ backgroundColor: "rgba(237,121,34,0.20)" }} />
                  ) : null}

                  <GlassCard className={["relative p-8 h-full", p.featured ? "border-white/20" : ""].join(" ")}>
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
                    <p className="mt-2 text-xs text-gray-500">*Pricing depends on scope & complexity</p>

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
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            center
            eyebrow="FAQ"
            title="Common questions"
            desc="Fast answers. We can tailor everything to your stack and your product."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Do you work with existing codebases?",
                a: "Yes. We can improve, refactor, migrate, or extend your existing website/app while keeping downtime low.",
              },
              {
                q: "Can you build custom admin panels and dashboards?",
                a: "Yes. We build role-based dashboards, data tables, workflows, and internal tools with secure access control.",
              },
              {
                q: "Will the website be SEO-friendly?",
                a: "Yes. We focus on technical SEO, performance, metadata, schema options, and clean content structure.",
              },
              {
                q: "Do you provide hosting and maintenance?",
                a: "We can set up hosting and CI/CD and also offer maintenance for updates, fixes, and improvements.",
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to build something powerful?</h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Tell us what you’re building. We’ll recommend the right stack and provide a clear plan for development,
            CMS (if needed), integrations, and deployment.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Book Free Dev Consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#stacks"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
            >
              See Tech Stack <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
