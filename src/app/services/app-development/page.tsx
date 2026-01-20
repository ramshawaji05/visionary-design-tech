"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Smartphone,
  TabletSmartphone,
  LayoutGrid,
  Code2,
  Layers,
  ShieldCheck,
  Lock,
  Gauge,
  Cloud,
  Database,
  Server,
  BellRing,
  MapPin,
  CreditCard,
  Webhook,
  Wrench,
  GitBranch,
  Workflow,
  Bug,
  TestTube2,
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
export default function MobileAppDevelopmentPage() {
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
                Mobile App Development • iOS • Android • Cross-Platform
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Mobile apps built for{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  speed
                </span>
                ,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  stability
                </span>{" "}
                & growth.
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We build modern mobile apps for startups and businesses—cross-platform (React Native/Expo),
                native-like UX, secure authentication, scalable backend integrations, and clean release workflows.
                From MVP to production apps with analytics, push notifications, and subscriptions.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book Free App Consult
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="#stack"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                >
                  Explore Mobile Stack <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                {[
                  "App Store / Play Store ready",
                  "Auth + roles + secure APIs",
                  "Push notifications + analytics",
                  "MVP → scale roadmap",
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
                    <p className="text-sm text-gray-400">What we ship</p>
                    <h3 className="mt-1 text-xl font-semibold">Production-ready mobile apps</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    RN • Expo • APIs
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "iOS + Android", icon: <Smartphone className="h-4 w-4" /> },
                    { label: "Tablet layouts", icon: <TabletSmartphone className="h-4 w-4" /> },
                    { label: "Auth & Security", icon: <Lock className="h-4 w-4" /> },
                    { label: "Backend Integrations", icon: <Server className="h-4 w-4" /> },
                    { label: "Push Notifications", icon: <BellRing className="h-4 w-4" /> },
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
                    { k: "Build", v: "2–10 weeks" },
                    { k: "Releases", v: "CI/CD" },
                    { k: "Tracking", v: "Analytics" },
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
            <p className="text-sm text-gray-400">
              Cross-platform builds that feel native—fast UI, clean architecture, and reliable releases.
            </p>
            <p className="mt-2 text-xs text-gray-500">Replace placeholders with your real stack/tools if needed.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
            {["React Native", "Expo", "TypeScript", "Firebase", "Stripe", "App Store"].map((t) => (
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

      {/* ================= WHAT WE BUILD ================= */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div className="sticky top-24 self-start">
            <SectionTitle
              eyebrow="WHAT WE BUILD"
              title="MVPs, production apps, and custom mobile experiences"
              desc="We build mobile apps end-to-end: UI, app logic, backend integrations, auth, data, notifications, and store releases—so your app is stable and ready to scale."
            />
            <div className="mt-10 space-y-3">
              <Bullet>Cross-platform apps (iOS + Android) with native-like UX</Bullet>
              <Bullet>Authentication, roles, permissions, and secure storage</Bullet>
              <Bullet>APIs + databases + real-time updates</Bullet>
              <Bullet>Push notifications, deep links, and analytics</Bullet>
              <Bullet>Subscriptions, in-app purchases, and payments (when needed)</Bullet>
              <Bullet>App Store & Google Play release workflow + updates</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["MVP Apps", "On-demand Apps", "Dashboards", "Marketplaces", "Booking Apps", "Delivery Apps", "Fintech Apps", "Social Apps"].map(
                (x) => (
                  <Pill key={x}>{x}</Pill>
                )
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Cross-Platform Apps",
                text: "One codebase for iOS and Android with smooth navigation and responsive layouts.",
                icon: <Smartphone className="h-5 w-5" />,
              },
              {
                title: "UI Components & Design System",
                text: "Reusable screens, states, and components for consistent UI across the product.",
                icon: <Layers className="h-5 w-5" />,
              },
              {
                title: "Backend Integration",
                text: "Secure API connections, database syncing, and workflows that scale.",
                icon: <Server className="h-5 w-5" />,
              },
              {
                title: "Store Release & Maintenance",
                text: "Build, test, release, monitor, and iterate with clean deployment pipelines.",
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

      {/* ================= MOBILE TECH STACK ================= */}
      <AnimatedSection id="stack" className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="MOBILE TECH STACK"
            title="Every tool & technology we use—explained"
            desc="We can build on your current stack or recommend the best setup based on features, budget, and timeline."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <StackBlock
                icon={<Code2 className="h-5 w-5" />}
                title="Core Mobile Stack"
                subtitle="Cross-platform apps that feel native."
                items={["React Native", "Expo", "TypeScript", "React Navigation", "Native Modules (when needed)"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<LayoutGrid className="h-5 w-5" />}
                title="UI & Styling"
                subtitle="Clean UI systems and consistent components."
                items={["NativeWind / Tailwind RN", "Styled Components", "Custom UI Kit", "Dark mode", "Accessibility patterns"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Database className="h-5 w-5" />}
                title="Data & State"
                subtitle="Reliable data flows and offline-first options."
                items={["TanStack Query", "Redux / Zustand", "AsyncStorage", "SQLite", "Realm (when needed)"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Server className="h-5 w-5" />}
                title="Backend & APIs"
                subtitle="Connect to your backend or build one with us."
                items={["REST APIs", "GraphQL (optional)", "Node.js", "Next.js APIs", "Webhooks"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Auth & Security"
                subtitle="Login, roles, permissions, and protection."
                items={["JWT", "OAuth", "Secure storage", "RBAC", "Input validation", "OWASP-aware patterns"]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Cloud className="h-5 w-5" />}
                title="Cloud Services"
                subtitle="Realtime features, storage, and scale."
                items={["Firebase (Auth/DB/Push)", "AWS (S3, Cognito)", "Supabase", "Cloud Functions", "CDN assets"]}
              />
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* ================= FEATURES MODULES ================= */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="FEATURE MODULES"
            title="Common app features we implement"
            desc="Pick what you need. We build feature modules cleanly so they’re easy to expand later."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Push Notifications", d: "Campaigns, reminders, transactional alerts, topic targeting.", i: <BellRing className="h-5 w-5" /> },
              { t: "Payments & Subscriptions", d: "Stripe, subscriptions, purchases, invoices, receipts.", i: <CreditCard className="h-5 w-5" /> },
              { t: "Maps & Location", d: "Maps, geolocation, delivery tracking, nearby search.", i: <MapPin className="h-5 w-5" /> },
              { t: "Authentication", d: "Email/social login, OTP, roles, secure sessions.", i: <Lock className="h-5 w-5" /> },
              { t: "Admin Dashboards", d: "Moderation, analytics, user control, content management.", i: <LayoutGrid className="h-5 w-5" /> },
              { t: "Integrations", d: "CRMs, support, email, analytics, webhooks, automations.", i: <Webhook className="h-5 w-5" /> },
            ].map((x) => (
              <AnimatedItem key={x.t}>
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
                      {x.i}
                    </span>
                    <h3 className="text-lg font-semibold">{x.t}</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">{x.d}</p>
                </GlassCard>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ================= QA / TEST / RELEASE ================= */}
      <AnimatedSection className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="QUALITY & RELEASE"
            title="Testing, performance, and app store delivery"
            desc="Mobile success depends on stability. We ship with a clean QA pipeline and release-ready builds."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              { t: "Testing", i: <TestTube2 className="h-5 w-5" />, points: ["Smoke tests", "Critical user flows", "Device QA (iOS/Android)"] },
              { t: "Debugging & Monitoring", i: <Bug className="h-5 w-5" />, points: ["Crash reports", "Logs + analytics", "Release health checks"] },
              { t: "CI/CD Releases", i: <GitBranch className="h-5 w-5" />, points: ["Build pipelines", "Staged releases", "Versioning + rollbacks"] },
            ].map((b) => (
              <AnimatedItem key={b.t}>
                <GlassCard className="p-8">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                      style={{
                        backgroundColor: "rgba(237,121,34,0.10)",
                        borderColor: "rgba(237,121,34,0.25)",
                        color: ORANGE,
                      }}
                    >
                      {b.i}
                    </span>
                    <h3 className="text-lg font-semibold">{b.t}</h3>
                  </div>

                  <div className="mt-5 space-y-3">
                    {b.points.map((p) => (
                      <Bullet key={p}>{p}</Bullet>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedItem>
            ))}
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
                  Mobile App Development: iOS & Android Apps, Cross-Platform Builds, and Custom Features
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Mobile app development involves more than building screens. A production mobile app needs smooth UI,
                  secure authentication, a scalable backend, performance optimization, analytics, testing, and a clean
                  release workflow for the App Store and Google Play. We build mobile apps for businesses that need
                  reliable systems—whether it’s an MVP, a customer app, an internal tool, or a marketplace platform.
                </p>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Cross-platform vs native apps</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Cross-platform development (React Native/Expo) lets you build one codebase for iOS and Android—often
                    faster and more cost-effective for MVPs and growing products. Native development can be useful for
                    highly specialized apps with deep device integrations. We typically recommend cross-platform for most
                    business apps unless native requirements demand otherwise.
                  </p>

                  <h3 className="text-2xl font-semibold">Backend & APIs for mobile apps</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Many apps require a backend: user accounts, data storage, syncing, admin control, payments, and notifications.
                    We integrate your app with secure APIs and databases, build role-based access, and implement clean data models
                    so the app remains stable as features grow.
                  </p>

                  <h3 className="text-2xl font-semibold">Performance and UX</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Mobile users expect speed. We optimize navigation, rendering, image loading, and data fetching to keep the UI smooth.
                    We also implement best-practice patterns for onboarding, forms, and user flows to reduce drop-offs and improve retention.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Push notifications & engagement</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Push notifications are powerful when used correctly—reminders, transactional updates, alerts, and campaign messaging.
                    We implement push with targeting, deep links, and analytics so you can measure engagement and iterate responsibly.
                  </p>

                  <h3 className="text-2xl font-semibold">Payments, subscriptions, and monetization</h3>
                  <p className="text-gray-400 leading-relaxed">
                    If your product needs monetization, we can implement subscriptions and payments depending on your model.
                    This can include Stripe, subscription logic, receipts, and account management flows.
                  </p>

                  <h3 className="text-2xl font-semibold">App store release & ongoing updates</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Shipping is only the start. We handle builds, versioning, store listings, release notes, staged rollouts,
                    and post-launch updates. We can also set up monitoring so crashes and errors are detected early.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">Mobile App Development FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "How long does it take to build a mobile app?",
                      a: "Most MVPs take 4–10 weeks depending on screens, features, and backend needs. Simple apps can be faster; complex platforms take longer.",
                    },
                    {
                      q: "Do you build both iOS and Android?",
                      a: "Yes. We build cross-platform apps (React Native/Expo) that run on both iOS and Android from a single codebase.",
                    },
                    {
                      q: "Can you integrate my existing backend?",
                      a: "Yes. We can integrate your app with existing APIs, databases, authentication, and third-party services.",
                    },
                    {
                      q: "Do you publish the app to stores?",
                      a: "Yes. We can guide or handle the release workflow, builds, store assets, and versioning depending on your setup.",
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
                    Book Free App Consultation <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href="#stack"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
                  >
                    Review Mobile Stack <ArrowRight className="h-5 w-5" />
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
            title="Mobile app packages"
            desc="Replace pricing placeholders with your real tiers. We scope by screens, features, and integrations."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "MVP App",
                // price: "From $___",
                desc: "Ideal for launching fast with a validated feature set.",
                items: ["Core screens", "Auth + basic backend", "Analytics", "Store-ready build"],
                featured: false,
              },
              {
                name: "Production App",
                // price: "From $___",
                desc: "Full production app with advanced features and scalability.",
                items: ["Advanced flows", "Backend integrations", "Push + deep links", "Release pipeline"],
                featured: true,
              },
              {
                name: "App + Admin Dashboard",
                // price: "From $___",
                desc: "Mobile app plus admin panel for operations and content control.",
                items: ["Dashboard + roles", "Data management", "Moderation tools", "Reporting"],
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

      {/* ================= FAQ ================= */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            center
            eyebrow="FAQ"
            title="Common questions"
            desc="Clear answers—happy to tailor to your idea and stack."
          />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Do you build native iOS/Android apps?",
                a: "We primarily build cross-platform apps (React Native/Expo). For native-only requirements, we can discuss options based on features and device needs.",
              },
              {
                q: "Can you build the backend too?",
                a: "Yes. We can build the backend/APIs, database, admin panel, and integrations end-to-end or integrate into your existing backend.",
              },
              {
                q: "Will the app support tablets?",
                a: "Yes. We can implement tablet-responsive layouts and adaptive UI depending on your target devices.",
              },
              {
                q: "Do you offer maintenance after launch?",
                a: "Yes. We can provide ongoing updates, performance tuning, feature additions, and store release support.",
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to launch your mobile app?</h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Tell us what you’re building. We’ll recommend the right stack, features, and release plan—and help you ship
            a stable iOS + Android app.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Book Free App Consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#stack"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
            >
              Explore Mobile Stack <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
