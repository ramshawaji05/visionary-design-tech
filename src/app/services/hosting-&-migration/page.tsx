"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Cloud,
  Server,
  Globe,
  ShieldCheck,
  Lock,
  Gauge,
  RefreshCw,
  ArrowUpRight,
  Database,
  HardDrive,
  Cable,
  GitBranch,
  Wrench,
  AlertTriangle,
  BarChart3,
  Activity,
  Settings2,
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
export default function HostingMigrationPage() {
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
                Hosting • Cloud Setup • Website Migration • Performance • Security
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Fast, secure hosting—and{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  zero-downtime
                </span>{" "}
                migrations.
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We migrate websites and apps safely, configure production hosting, set up domains/SSL, improve performance,
                and add monitoring. From WordPress and Shopify to Next.js and full-stack apps—moved cleanly to modern infrastructure.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book Free Migration Call
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
                {["No-downtime strategy", "Backups + rollback", "SSL + DNS handled", "Performance optimization"].map((t) => (
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
                    <p className="text-sm text-gray-400">What we handle</p>
                    <h3 className="mt-1 text-xl font-semibold">Everything around deployment</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    DevOps-lite
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Cloud Hosting", icon: <Cloud className="h-4 w-4" /> },
                    { label: "Zero Downtime", icon: <RefreshCw className="h-4 w-4" /> },
                    { label: "Domains & DNS", icon: <Globe className="h-4 w-4" /> },
                    { label: "Databases", icon: <Database className="h-4 w-4" /> },
                    { label: "Security", icon: <ShieldCheck className="h-4 w-4" /> },
                    { label: "Monitoring", icon: <Activity className="h-4 w-4" /> },
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
                    { k: "Speed", v: "↑" },
                    { k: "Risk", v: "↓" },
                    { k: "Uptime", v: "99.9%" },
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

      {/* ================= HOSTING OPTIONS ================= */}
      <AnimatedSection className="border-y border-white/10 bg-[#0b0b0b] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-400">Hosting environments we work with</p>
            <p className="mt-2 text-xs text-gray-500">We recommend based on traffic, budget, and stack.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
            {["Vercel", "AWS", "DigitalOcean", "cPanel", "Cloudflare", "Firebase"].map((t) => (
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
              title="Hosting setup + website migration services"
              desc="We migrate, deploy, and harden your site so it runs fast and stays stable."
            />

            <div className="mt-10 space-y-3">
              <Bullet>Hosting setup for websites, apps, and APIs</Bullet>
              <Bullet>Domain + DNS setup, SSL certificates, redirects</Bullet>
              <Bullet>Website migrations: WordPress, Shopify, Next.js, custom stacks</Bullet>
              <Bullet>Database migration and connection updates</Bullet>
              <Bullet>Performance: caching, CDN, image optimization</Bullet>
              <Bullet>Backups, rollback plans, and uptime monitoring</Bullet>
              <Bullet>Security hardening and basic WAF configuration</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["DNS", "SSL", "CDN", "Backups", "Server Setup", "Monitoring", "Performance"].map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Website Migration",
                text: "Move your site safely with backups, staging, and a clean cutover plan.",
                icon: <RefreshCw className="h-5 w-5" />,
              },
              {
                title: "Hosting Setup",
                text: "Modern hosting configured for performance, stability, and easy deployments.",
                icon: <Server className="h-5 w-5" />,
              },
              {
                title: "Performance & CDN",
                text: "Caching, CDN, compression, and optimization for faster load times.",
                icon: <Gauge className="h-5 w-5" />,
              },
              {
                title: "Security & Monitoring",
                text: "SSL, basic hardening, alerts, and visibility so issues are caught early.",
                icon: <ShieldCheck className="h-5 w-5" />,
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
            title="A safe migration process (with rollback)"
            desc="We migrate with staging, backups, and verification before switching traffic."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Audit + Plan", points: ["Inventory site + DNS", "Backup + export", "Migration strategy"] },
              { step: "02", title: "Migrate + Test", points: ["Staging deploy", "Database + files", "Performance checks"] },
              { step: "03", title: "Cutover + Monitor", points: ["DNS switch", "SSL verification", "Monitoring + rollback ready"] },
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

      {/* ================= TECH & TOOLING ================= */}
      <AnimatedSection id="stack" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="TECH & TOOLING"
            title="Stacks we migrate and host"
            desc="We handle common platforms and custom apps. If it runs on the web, we can migrate it."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <StackBlock
                icon={<Globe className="h-5 w-5" />}
                title="Web Platforms"
                subtitle="Popular CMS and ecommerce platforms."
                items={["WordPress", "Shopify", "Webflow", "Wix (limited)", "Headless CMS setups"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Server className="h-5 w-5" />}
                title="Apps & Frameworks"
                subtitle="Full-stack apps and modern frontends."
                items={["Next.js", "React", "Node.js", "Laravel", "Django", "APIs + microservices"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Database className="h-5 w-5" />}
                title="Databases & Storage"
                subtitle="Safe migration and connection handling."
                items={["MySQL", "PostgreSQL", "MongoDB", "Redis (cache)", "S3/object storage", "Backups"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Security & Reliability"
                subtitle="Hardening, monitoring, and protection."
                items={["Cloudflare", "SSL/TLS", "WAF rules (basic)", "Uptime checks", "Logs + alerts", "Rollback plans"]}
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
                  Hosting & Migration Services: Secure Deployments, Faster Performance, and Smooth Transfers
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Hosting and migration are critical for website speed, stability, and search performance. A migration can involve moving a website
                  from one hosting provider to another, switching domains, upgrading a CMS, or redeploying a web application to modern cloud infrastructure.
                  The goal is to move safely with minimal downtime, preserve SEO, and improve performance. We provide hosting setup and migration services
                  for websites and apps, including WordPress migrations, Shopify transfers, Next.js deployments, and custom full-stack hosting solutions.
                </p>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Website migration with SEO protection</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Poor migrations can break SEO and cause downtime. We protect SEO by verifying redirects, preserving URLs where possible, updating DNS carefully,
                    and testing staging environments before cutover. We also confirm SSL certificates, sitemap updates, and analytics tracking after launch.
                  </p>

                  <h3 className="text-2xl font-semibold">Domain, DNS, and SSL configuration</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Hosting changes usually require DNS updates. We configure DNS records, set up SSL/TLS certificates, verify domain routing, and ensure correct redirects
                    (www/non-www, HTTP→HTTPS). This reduces errors and prevents traffic loss during migration.
                  </p>

                  <h3 className="text-2xl font-semibold">Performance optimization and CDN</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Hosting impacts speed. We improve performance using caching, CDN setup, compression, image optimization, and best-practice deployment configurations.
                    Faster sites reduce bounce rate and often improve conversion rates and search rankings.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Cloud hosting for modern apps</h3>
                  <p className="text-gray-400 leading-relaxed">
                    For modern applications, we deploy on platforms like Vercel, AWS, DigitalOcean, or Firebase depending on the stack. We configure environment variables,
                    databases, secrets, build pipelines, and reliable deployments so your app can scale safely.
                  </p>

                  <h3 className="text-2xl font-semibold">Backups, monitoring, and rollback plans</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every migration should include backups and a rollback plan. We set up pre-migration backups, verify data integrity, and monitor uptime after cutover.
                    If anything goes wrong, a rollback strategy allows the site to recover quickly without extended downtime.
                  </p>

                  <h3 className="text-2xl font-semibold">Security and basic hardening</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We configure common security essentials: SSL, basic server hardening (where applicable), firewall/WAF rules, and access best practices.
                    For CMS platforms like WordPress, we can also recommend plugin updates and security settings.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">Hosting & Migration FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Will my website go down during migration?",
                      a: "We plan for minimal downtime and can often do a near-zero downtime cutover using staging and careful DNS timing.",
                    },
                    {
                      q: "Will migration affect SEO?",
                      a: "If done incorrectly, yes. We protect SEO with redirects, URL checks, sitemap updates, and post-launch verification.",
                    },
                    {
                      q: "Do you handle emails and DNS records too?",
                      a: "Yes. We coordinate DNS carefully so email records and other services stay working.",
                    },
                    {
                      q: "Can you move a Next.js app to Vercel?",
                      a: "Yes. We deploy Next.js apps with env vars, domains, preview deployments, and performance tuning.",
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
                    Book Free Migration Call <ArrowRight className="h-5 w-5" />
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
            title="Hosting & migration packages"
            desc="Replace pricing placeholders with your real tiers. We scope by platform, size, and complexity."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Simple Migration",
                // price: "From $___",
                desc: "Move a small website safely with backups and DNS support.",
                items: ["Backup + restore", "DNS updates", "SSL setup", "Basic checks"],
                featured: false,
              },
              {
                name: "Managed Hosting Setup",
                // price: "From $___",
                desc: "Deploy and harden your site/app on modern hosting with monitoring.",
                items: ["Deployment setup", "CDN + caching", "Monitoring", "Security basics"],
                featured: true,
              },
              {
                name: "Complex Migration",
                // price: "From $___",
                desc: "Large site/app migration with staging, DB moves, and rollback strategy.",
                items: ["Staging environment", "DB migration", "Redirects + SEO checks", "Cutover plan"],
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
                    <p className="mt-2 text-xs text-gray-500">*Pricing depends on scope & platform</p>

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
                q: "Can you migrate WordPress without breaking plugins?",
                a: "Yes. We migrate files + database, update configs, verify URLs, and test key features. For complex setups we use staging first.",
              },
              {
                q: "Do you handle Cloudflare and CDN setup?",
                a: "Yes. We can set up Cloudflare, caching rules, image optimization, and basic security settings.",
              },
              {
                q: "Can you migrate email too?",
                a: "We can coordinate DNS records so email stays working. If you need mailbox migration, we can support based on provider.",
              },
              {
                q: "Do you provide ongoing maintenance?",
                a: "Yes. We can monitor uptime, handle updates, and improve performance over time.",
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
          <h2 className="text-4xl md:text-5xl font-bold">Need a safe migration or better hosting?</h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Tell us your current platform and where you want to move. We’ll plan a clean migration with backups, testing, and a smooth cutover.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Book Free Migration Call <ArrowRight className="h-5 w-5" />
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
