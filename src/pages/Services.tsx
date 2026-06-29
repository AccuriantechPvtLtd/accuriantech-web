import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import {
  Settings, BarChart3, Cloud, Monitor, Shield, Server, Database, ArrowRight,
  Layers, Cpu, LineChart, Headphones, Building2, GraduationCap, Landmark,
  Heart, Factory, Zap, Search, PenTool, Rocket, CheckCircle2, LifeBuoy,
  Brain, Code2, Workflow,
} from "lucide-react";
import PageBackdrop from "@/components/PageBackdrop";

/* ─── Solution Pillars ─── */
const pillars = [
  {
    id: "ai-software",
    icon: Brain,
    title: "AI & Software Engineering",
    tagline: "Build intelligent products and custom software around real business outcomes.",
    color: "215 85% 52%",
    capabilities: [
      { icon: Brain, title: "AI Solutions", desc: "Generative AI, RAG assistants, predictive models, and intelligent automation.", link: "/services/ai-solutions" },
      { icon: Code2, title: "Software Development", desc: "Custom web apps, APIs, integrations, and application modernization.", link: "/services/software-development" },
      { icon: Workflow, title: "Process Automation", desc: "AI-assisted, low-code workflow automation across your stack." },
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Infrastructure",
    tagline: "Architect, migrate, and operate secure cloud environments at scale.",
    color: "218 79% 46%",
    capabilities: [
      { icon: Cloud, title: "Azure & AWS", desc: "Multi-region architecture, 24/7 monitoring, FinOps cost optimization.", link: "/services/cloud" },
      { icon: Shield, title: "Network & Security", desc: "Firewall, VPN, EDR endpoint protection, and threat detection.", link: "/services/network-security" },
      { icon: Database, title: "SAP Security", desc: "Access control, GRC compliance, identity management & BTP/Cloud.", link: "/services/sap" },
    ],
  },
  {
    id: "data",
    icon: LineChart,
    title: "Data & Business Intelligence",
    tagline: "Turn raw data into executive insights and competitive advantage.",
    color: "205 90% 48%",
    capabilities: [
      { icon: BarChart3, title: "Power BI & Analytics", desc: "Dashboards, DAX modeling, enterprise BI architecture.", link: "/services/powerbi" },
      { icon: Layers, title: "Data Strategy", desc: "Data warehousing, ETL pipelines, and governance frameworks." },
      { icon: LineChart, title: "Advanced Analytics", desc: "Predictive models, KPI scorecards, and real-time reporting." },
    ],
  },
  {
    id: "workplace",
    icon: Settings,
    title: "Modern Workplace",
    tagline: "Automate workflows, unify CRM, and accelerate digital transformation.",
    color: "250 65% 55%",
    capabilities: [
      { icon: Settings, title: "Salesforce Development", desc: "Agentforce AI, Commerce Cloud, multi-cloud CRM solutions.", link: "/services/salesforce" },
      { icon: Server, title: "ServiceNow", desc: "ITSM, workflow automation, custom apps & API integration.", link: "/services/servicenow" },
      { icon: Zap, title: "Digital Transformation", desc: "RPA, low-code integrations, and digital workflow orchestration." },
    ],
  },
  {
    id: "managed",
    icon: Headphones,
    title: "Managed IT Support",
    tagline: "SLA-backed infrastructure management so your teams focus on growth.",
    color: "160 60% 40%",
    capabilities: [
      { icon: Monitor, title: "Infrastructure Support", desc: "Hyper-V, Active Directory, patch management & DR.", link: "/services/managed-it" },
      { icon: Cpu, title: "Endpoint Management", desc: "Device provisioning, MDM, remote monitoring via NinjaOne." },
      { icon: LifeBuoy, title: "Helpdesk & Training", desc: "Tiered L1/L2/L3 support, onboarding, and IT training programs." },
    ],
  },
];

/* ─── Industries ─── */
const industries = [
  { icon: Landmark, name: "Government", link: "/industries/government" },
  { icon: Heart, name: "Healthcare", link: "/industries/healthcare" },
  { icon: Building2, name: "Finance", link: "/industries/finance" },
  { icon: GraduationCap, name: "Education", link: "/industries/education" },
  { icon: Factory, name: "Enterprise", link: "/industries/enterprise" },
  { icon: Cpu, name: "Technology", link: "/industries/technology" },
];

/* ─── Delivery Process ─── */
const deliverySteps = [
  { icon: Search, label: "Discovery", desc: "Assess current state, define goals & success metrics." },
  { icon: PenTool, label: "Architecture", desc: "Design solution blueprints aligned to your stack." },
  { icon: Rocket, label: "Implementation", desc: "Agile delivery with milestone-based sprints." },
  { icon: CheckCircle2, label: "Optimization", desc: "Performance tuning, cost reduction & hardening." },
  { icon: LifeBuoy, label: "Support", desc: "SLA-backed managed services & continuous improvement." },
];

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        <SEOHead
          title="Services – Accuriantech Enterprise IT Solutions"
          description="Explore Accuriantech's enterprise IT solution pillars: Cloud & Infrastructure, Data & BI, Modern Workplace, and Managed IT Support."
          canonical="https://accuriantech.com/services"
          keywords="Accuriantech services, Salesforce development, Power BI consulting, cloud support, managed IT, ServiceNow, SAP security, network security"
        />
        <PageBackdrop variant="contrast" />
        <Navbar />

        {/* ═══ Hero ═══ */}
        <section className="relative overflow-hidden pt-28 pb-24">
          <img src="/services-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F172A]/50" />
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }} />
          <div className="container mx-auto px-4 md:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="text-left max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 mb-8 text-accent text-sm font-semibold tracking-wide">
                Enterprise IT Solutions
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                Solution Pillars for
                <br />
                <span className="bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital Transformation
                </span>
              </h1>
              <p className="text-primary-foreground/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                Four integrated practice areas delivering end-to-end technology consulting for global enterprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ Solution Pillars ═══ */}
        {pillars.map((pillar, pi) => (
          <section
            key={pillar.id}
            className={`section-padding relative ${pi % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
          >
            <div className="container mx-auto">
              {/* Pillar Header */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0}
                variants={fadeUp}
                className="flex items-start gap-5 mb-12"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `hsl(${pillar.color} / 0.12)` }}
                >
                  <pillar.icon size={28} style={{ color: `hsl(${pillar.color})` }} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                    {pillar.title}
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-xl">{pillar.tagline}</p>
                </div>
              </motion.div>

              {/* Capability Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillar.capabilities.map((cap, ci) => {
                  const inner = (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      custom={ci + 1}
                      variants={fadeUp}
                      className={`h-full rounded-2xl border border-border/60 bg-card p-7 transition-all duration-400 hover:shadow-[0_16px_48px_-12px_hsl(220_70%_35%_/_0.15)] hover:-translate-y-1 hover:border-accent/25 ${cap.link ? "group cursor-pointer" : ""}`}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: `hsl(${pillar.color} / 0.1)` }}
                      >
                        <cap.icon size={22} style={{ color: `hsl(${pillar.color})` }} />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {cap.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {cap.desc}
                      </p>
                      {cap.link && (
                        <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                          Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      )}
                    </motion.div>
                  );

                  return cap.link ? (
                    <Link key={cap.title} to={cap.link} className="block h-full">
                      {inner}
                    </Link>
                  ) : (
                    <div key={cap.title} className="h-full">{inner}</div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* ═══ Industries Served ═══ */}
        <section className="section-padding bg-background relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="container mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={0} variants={fadeUp}
              className="text-center mb-14"
            >
              <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">Industries</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Tailored technology solutions across regulated and high-growth sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
              {industries.map((ind, i) => (
                <motion.div key={ind.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                  <Link to={ind.link} className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 bg-card hover:border-accent/30 hover:shadow-[0_8px_30px_-10px_hsl(218_79%_46%_/_0.15)] transition-all duration-400">
                    <div className="w-12 h-12 rounded-xl bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                      <ind.icon size={24} className="text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{ind.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Delivery Process ═══ */}
        <section className="section-padding bg-muted/30 relative">
          <div className="container mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={0} variants={fadeUp}
              className="text-center mb-14"
            >
              <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">How We Deliver</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Delivery Process</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                A proven 5-step methodology that ensures predictable outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {deliverySteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  custom={i} variants={fadeUp}
                  className="relative text-center p-6 rounded-2xl border border-border/50 bg-card"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 mt-2">
                    <step.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{step.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
              style={{ background: "var(--gradient-hero)" }}
            >
              <motion.div
                className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-[100px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cyan-500/8 blur-[80px]"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                  Talk to an IT Solutions Architect
                </h2>
                <p className="text-primary-foreground/50 max-w-lg mx-auto mb-8 text-lg">
                  Get a tailored roadmap for your enterprise — no obligation, just expert guidance.
                </p>
                <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2 text-base group">
                  Schedule a Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
