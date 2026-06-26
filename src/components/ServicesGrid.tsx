import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Code2, Settings, Server, Database, BarChart3, Cloud, Shield, Monitor, ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════════
   SERVICES — Modern Bento Grid
   Clean, minimal, spacious. Inspired by Linear/Vercel.
   Asymmetric cells, soft borders, generous whitespace.
   ═══════════════════════════════════════════════════ */

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  link: string;
  logos?: { name: string; src: string }[];
}

const services: { featured: Service[]; platforms: Service[]; infra: Service[] } = {
  featured: [
    {
      icon: Brain,
      title: "AI & Data Solutions",
      desc: "Generative AI, copilots, intelligent automation, and enterprise analytics that drive real business outcomes.",
      link: "/services/ai-solutions",
      logos: [
        { name: "OpenAI", src: "/openai.svg" },
        { name: "Gemini", src: "/Google_Gemini_logo.svg" },
        { name: "Claude", src: "/Claude_AI_logo.svg" },
      ],
    },
    {
      icon: Code2,
      title: "Software Engineering",
      desc: "Cloud-native applications, API integrations, microservices, and CI/CD pipelines using modern frameworks.",
      link: "/services/software-development",
      logos: [
        { name: "Java", src: "/java.svg" },
        { name: "Node.js", src: "/Node.js_logo.svg" },
        { name: "Python", src: "/Python-logo-notext.svg" },
      ],
    },
  ],
  platforms: [
    {
      icon: Settings,
      title: "Salesforce",
      desc: "CRM implementation, customization, and AI-powered automation.",
      link: "/services/salesforce",
      logos: [{ name: "Salesforce", src: "/salesforce-2.svg" }],
    },
    {
      icon: Server,
      title: "ServiceNow",
      desc: "ITSM, workflow automation, and enterprise service management.",
      link: "/services/servicenow",
      logos: [{ name: "ServiceNow", src: "/servicenow.png" }],
    },
    {
      icon: Database,
      title: "SAP Security",
      desc: "GRC, access controls, BTP, and audit-ready governance.",
      link: "/services/sap",
      logos: [{ name: "SAP", src: "/sap-3.svg" }],
    },
    {
      icon: BarChart3,
      title: "Power BI",
      desc: "Executive dashboards and real-time business intelligence.",
      link: "/services/powerbi",
      logos: [{ name: "Power BI", src: "/Power-BI.svg" }],
    },
  ],
  infra: [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      desc: "Azure & AWS migration, modernization, and cost optimization.",
      link: "/services/cloud",
      logos: [
        { name: "AWS", src: "/Aws.svg" },
        { name: "Azure", src: "/Microsoft_Azure.svg" },
        { name: "GCP", src: "/Google_Cloud_logo.svg" },
      ],
    },
    {
      icon: Shield,
      title: "Network Security",
      desc: "Zero-trust architecture, threat detection, and compliance.",
      link: "/services/network-security",
    },
    {
      icon: Monitor,
      title: "Managed IT",
      desc: "24/7 SLA-backed operations and infrastructure monitoring.",
      link: "/services/managed-it",
    },
  ],
};

function BentoCard({ service, size = "md", delay = 0 }: { service: Service; size?: "lg" | "md" | "sm"; delay?: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={service.link}
        className="group h-full flex flex-col rounded-2xl border border-[#E8ECF0] bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/20 hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.08)]"
      >
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-[#F4F6F8] border border-[#E8ECF0] flex items-center justify-center text-[#2563EB] mb-4 group-hover:bg-[#EEF4FF] group-hover:border-[#2563EB]/15 transition-colors">
          <Icon size={20} strokeWidth={1.6} />
        </div>

        {/* Title */}
        <h3 className={`font-heading font-bold text-[#0F172A] mb-1.5 leading-tight group-hover:text-[#2563EB] transition-colors ${size === "lg" ? "text-[17px]" : size === "md" ? "text-[15px]" : "text-[14px]"}`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className={`text-[#64748B] leading-relaxed mb-auto ${size === "lg" ? "text-[13px]" : "text-[12px]"}`}>
          {service.desc}
        </p>

        {/* Logos */}
        {service.logos && service.logos.length > 0 && (
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#F1F5F9]">
            {service.logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className={`object-contain opacity-60 group-hover:opacity-100 transition-opacity ${logo.src.includes("servicenow") ? "w-20 h-6" : logo.src.includes("sap") || logo.src.includes("salesforce") || logo.src.includes("Power-BI") ? "w-12 h-6" : "w-6 h-6"}`}
                loading="lazy"
              />
            ))}
          </div>
        )}

        {/* Arrow */}
        <div className="flex items-center gap-1.5 mt-4 text-[12px] font-semibold text-[#94A3B8] group-hover:text-[#2563EB] transition-colors">
          Learn more
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}

const ServicesGrid = () => {
  return (
    <section className="py-10" id="services">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-2">
            What We Do
          </span>
          <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] mb-3 leading-tight">
            Technology Solutions That Drive Results
          </h2>
          <p className="text-[13px] md:text-[14px] text-[#64748B] max-w-[480px] mx-auto leading-relaxed">
            Transforming business challenges into growth through AI, cloud, enterprise platforms, and modern engineering.
          </p>
        </motion.div>

        {/* ─── Bento Grid ─── */}
        <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
          {/* Row 1: Two large featured cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {services.featured.map((s, i) => (
              <BentoCard key={s.title} service={s} size="lg" delay={i * 0.08} />
            ))}
          </div>

          {/* Row 2: Four platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {services.platforms.map((s, i) => (
              <BentoCard key={s.title} service={s} size="md" delay={0.15 + i * 0.06} />
            ))}
          </div>

          {/* Row 3: Three infra cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {services.infra.map((s, i) => (
              <BentoCard key={s.title} service={s} size="sm" delay={0.3 + i * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
