"use client";

import Link from "next/link";
import ParticlesBg from "@/components/ParticlesBg";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Bot,
  Cpu,
  Workflow,
  Webhook,
  Database,
  Cloud,
  ShieldCheck,
  Lock,
  Gauge,
  Search,
  Wrench,
  Zap,
  Boxes,
  Mail,
  MessageSquare,
  FileText,
  BarChart3,
  LineChart,
  Settings2,
  GitBranch,
  Layers,
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
export default function AiAutomationPage() {
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
                AI & Automation • Agents • Workflows • Integrations
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02]">
                Automate work.{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed7922] to-[#ffb36b]">
                  Reduce costs
                </span>
                . Move faster.
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-400 leading-relaxed">
                We build AI-powered workflows and automations that save time and improve consistency—support bots,
                lead routing, content pipelines, reporting, internal tools, and custom integrations. From simple
                Zapier-style flows to advanced AI agents connected to your data.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold shadow-[0_0_40px_rgba(237,121,34,0.45)] hover:opacity-90 transition"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book Free Automation Call
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                >
                  Explore Solutions <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                {["Faster operations", "Fewer manual errors", "Better customer response", "Clear dashboards"].map((t) => (
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
                    <h3 className="mt-1 text-xl font-semibold">AI + automation systems</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    Secure + Scalable
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "AI Assistants", icon: <Bot className="h-4 w-4" /> },
                    { label: "Workflow Automations", icon: <Workflow className="h-4 w-4" /> },
                    { label: "Integrations", icon: <Webhook className="h-4 w-4" /> },
                    { label: "Data Pipelines", icon: <Database className="h-4 w-4" /> },
                    { label: "Security", icon: <ShieldCheck className="h-4 w-4" /> },
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
                    { k: "ROI", v: "High" },
                    { k: "Setup", v: "Fast" },
                    { k: "Scale", v: "Ready" },
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
            <p className="text-sm text-gray-400">Tools we automate & integrate (based on your stack)</p>
            <p className="mt-2 text-xs text-gray-500">Replace with your favorites if needed.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full md:w-auto">
            {["Zapier", "Make", "HubSpot", "Slack", "Gmail", "Sheets"].map((t) => (
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

      {/* ================= SOLUTIONS ================= */}
      <AnimatedSection id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div className="sticky top-24 self-start">
            <SectionTitle
              eyebrow="SOLUTIONS"
              title="Automation that matches real business workflows"
              desc="We don’t automate random tasks. We automate the workflows that create measurable output: leads, sales, support speed, reporting, and operations."
            />

            <div className="mt-10 space-y-3">
              <Bullet>Lead capture → qualification → CRM routing → follow-ups</Bullet>
              <Bullet>Customer support AI: FAQs, ticket triage, response drafting</Bullet>
              <Bullet>Reporting automation: dashboards, weekly summaries, KPIs</Bullet>
              <Bullet>Ops workflows: approvals, document generation, alerts</Bullet>
              <Bullet>Content pipelines: briefs → drafts → review → publish</Bullet>
              <Bullet>Internal assistants: search company docs, answer questions</Bullet>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Lead Automation", "Support AI", "CRM Workflows", "Dashboards", "Document AI", "Integrations", "Agents"].map(
                (x) => (
                  <Pill key={x}>{x}</Pill>
                )
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "AI Assistants & Chatbots",
                text: "Website or internal assistants trained on your FAQs, docs, and workflows.",
                icon: <Bot className="h-5 w-5" />,
              },
              {
                title: "Workflow Automation",
                text: "Automate repetitive tasks across apps—triggers, actions, approvals, alerts.",
                icon: <Workflow className="h-5 w-5" />,
              },
              {
                title: "Data Pipelines",
                text: "Sync data between tools, clean it, and store it in a reliable database.",
                icon: <Database className="h-5 w-5" />,
              },
              {
                title: "Custom Integrations",
                text: "When off-the-shelf tools aren’t enough, we build custom automation logic.",
                icon: <Wrench className="h-5 w-5" />,
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

      {/* ================= TECH + TOOLS ================= */}
      <AnimatedSection id="stack" className="bg-[#0b0b0b] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="TECH & TOOLS"
            title="Stacks we use: no-code, low-code, and custom"
            desc="We pick the simplest solution that works. If Zapier/Make works, we use it. If you need custom control, we build it."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <AnimatedItem>
              <StackBlock
                icon={<Zap className="h-5 w-5" />}
                title="No-Code / Low-Code Automation"
                subtitle="Fast automations across popular tools."
                items={[
                  "Zapier",
                  "Make (Integromat)",
                  "n8n",
                  "Airtable Automations",
                  "Google Apps Script (light)",
                  "Webhooks",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Cpu className="h-5 w-5" />}
                title="Custom Automation (Code)"
                subtitle="For advanced logic, reliability, and scale."
                items={[
                  "Node.js",
                  "Python",
                  "Serverless functions",
                  "Queue workers",
                  "Cron jobs",
                  "Webhook verification",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Database className="h-5 w-5" />}
                title="Data & Storage"
                subtitle="Reliable data models and syncing."
                items={[
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Redis",
                  "Google Sheets (simple ops)",
                  "Airtable (ops)",
                ]}
              />
            </AnimatedItem>

            <AnimatedItem>
              <StackBlock
                icon={<Cloud className="h-5 w-5" />}
                title="Cloud & Deployment"
                subtitle="Secure hosting and monitoring."
                items={[
                  "AWS",
                  "Vercel",
                  "DigitalOcean",
                  "Docker",
                  "CI/CD (GitHub Actions)",
                  "Logs + monitoring",
                ]}
              />
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
                  AI & Automation Services: Workflows, Integrations, Agents, and Business Process Automation
                </h2>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  AI and automation help businesses reduce manual work, improve consistency, and move faster. Automation can
                  connect the tools you already use—CRMs, email, spreadsheets, chat, support, and analytics—so tasks happen
                  automatically. AI takes automation a step further by handling language-based work like summarizing messages,
                  drafting replies, extracting data from documents, answering questions from internal knowledge bases, and generating
                  reports. We build practical AI and automation systems that improve output and make operations easier.
                </p>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Business automation (no-code and custom)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Business automation moves repetitive tasks into workflows: lead routing, notifications, approvals, reporting,
                    and data syncing. For many teams, no-code tools like Zapier or Make are enough. For more control, we build custom
                    automations with code, queues, and secure webhooks. The goal is always the same: reduce time spent on repetitive work
                    and improve reliability.
                  </p>

                  <h3 className="text-2xl font-semibold">AI assistants and chatbots</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI assistants can support customer service and internal operations. For customer-facing use, an AI chatbot can answer FAQs,
                    route leads, and draft responses for the team. For internal use, assistants can help search company documents, summarize meetings,
                    create reports, and guide staff through workflows. We implement assistants with guardrails so outputs remain accurate and useful.
                  </p>

                  <h3 className="text-2xl font-semibold">Lead automation and CRM workflows</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Many businesses lose leads due to slow follow-ups. We automate lead capture, qualification, routing, reminders, and follow-up sequences
                    so your team responds quickly. We also track sources using UTMs and dashboards, improving marketing ROI and sales conversion rates.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Reporting and dashboards</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Automated reporting saves hours every month. We connect analytics, sales, ads, and operations data to generate weekly or monthly summaries,
                    dashboards, and alerts. This helps leadership make faster decisions based on consistent metrics and avoids manual spreadsheet work.
                  </p>

                  <h3 className="text-2xl font-semibold">Integrations and data pipelines</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Integrations connect tools that don’t naturally talk to each other. We build integrations using APIs and webhooks, and we validate data to avoid
                    broken workflows. For reliability, we can add queues, retries, monitoring, and error notifications—so automations stay stable at scale.
                  </p>

                  <h3 className="text-2xl font-semibold">Security and compliance</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Automation often touches sensitive data. We implement secure auth, least-privilege access, secret management, audit logs (where needed), and
                    safe data handling patterns. We also recommend guardrails for AI outputs to reduce hallucinations and prevent unsafe actions.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-semibold">AI & Automation FAQs</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Can you automate my existing tools (CRM, email, sheets)?",
                      a: "Yes. We integrate the tools you already use and build workflows for lead routing, reporting, follow-ups, and operations.",
                    },
                    {
                      q: "Do we need a custom backend?",
                      a: "Not always. Many workflows can be built with Zapier/Make/n8n. If you need complex logic, reliability, or scale, we build custom automation services.",
                    },
                    {
                      q: "Can you build an AI chatbot for my website?",
                      a: "Yes. We can build customer-facing chatbots and internal assistants trained on your FAQs, docs, and knowledge base—with guardrails.",
                    },
                    {
                      q: "How do you ensure automations don’t break?",
                      a: "We add monitoring, retries, logging, and error alerts. For critical workflows, we recommend queues and versioning for stability.",
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
                    Book Free Automation Call <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href="#stack"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
                  >
                    Review Tools <ArrowRight className="h-5 w-5" />
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
            title="AI & automation packages"
            desc="Replace pricing placeholders with your real tiers. We scope by workflows, integrations, and complexity."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Automation Starter",
                // price: "From $___",
                desc: "Quick wins for lead routing, notifications, and simple workflows.",
                items: ["1–3 workflows", "Tool integrations", "Testing + handoff", "Basic monitoring"],
                featured: false,
              },
              {
                name: "AI Assistant",
                // price: "From $___",
                desc: "Customer or internal AI assistant connected to your knowledge base.",
                items: ["FAQ/docs setup", "Guardrails", "Integrations", "Reporting + improvements"],
                featured: true,
              },
              {
                name: "Custom Automation System",
                // price: "From $___",
                desc: "Advanced workflows with custom logic, databases, queues, and monitoring.",
                items: ["Custom backend", "Reliability + retries", "Security setup", "Deploy + CI/CD"],
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
                    <p className="mt-2 text-xs text-gray-500">*Pricing depends on workflows & integrations</p>

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
          <SectionTitle center eyebrow="FAQ" title="Common questions" desc="Clear answers—fast." />

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Can you automate WhatsApp, email, and CRM together?",
                a: "Yes—depending on the tools you use. We can connect lead capture to notifications, CRM entries, and follow-ups with tracking.",
              },
              {
                q: "Will AI outputs be accurate?",
                a: "We add guardrails, retrieval from your docs/FAQs, and testing. AI still needs supervision for high-stakes cases, but it can save significant time.",
              },
              {
                q: "Do you build with Zapier or custom code?",
                a: "Both. We start with the simplest reliable solution. For complex systems, we build custom services with monitoring and retries.",
              },
              {
                q: "Do you provide maintenance?",
                a: "Yes. We can monitor automations, update integrations, improve prompts, and expand workflows over time.",
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to automate your operations?</h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Tell us your workflow and tools. We’ll map the automation, recommend the stack, and build a reliable system that saves time every week.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-black font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: ORANGE }}
            >
              Book Free Automation Call <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white/15 hover:bg-white/10 transition"
            >
              Explore Solutions <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
