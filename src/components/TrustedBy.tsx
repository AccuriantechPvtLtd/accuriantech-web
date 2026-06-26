  import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Landmark,
  HeartPulse,
  GraduationCap,
  Globe2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

/* ═══════════════════════════════════════════════════
   INDUSTRIES WE TRANSFORM
   
   Left: vertical tab list of industries
   Right: expanded content showing focus area,
   challenges, solutions, outcomes + tech logos
   ═══════════════════════════════════════════════════ */

interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  path: string;
  icon: LucideIcon;
  challenges: string[];
  solutions: string[];
  outcomes: { value: string; label: string }[];
}

const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Patient-centric. Data-driven. Future-ready.",
    description: "We empower healthcare organizations to deliver better care, streamline operations, and drive innovation with secure, scalable digital solutions.",
    path: "/industries/healthcare",
    icon: HeartPulse,
    challenges: ["Rising operational costs", "Data silos and interoperability", "Regulatory compliance", "Patient experience and access"],
    solutions: ["Workflow automation", "Advanced analytics & insights", "Connected patient experiences", "Cloud modernization", "Secure data & compliance"],
    outcomes: [{ value: "45%", label: "Improvement in operational efficiency" }, { value: "99.9%", label: "Data security & compliance assurance" }, { value: "30%", label: "Better patient engagement" }],
  },
  {
    id: "finance",
    name: "Finance",
    tagline: "Secure. Compliant. Intelligence-led.",
    description: "Helping financial institutions modernize legacy systems, ensure compliance, and leverage data for competitive advantage.",
    path: "/industries/finance",
    icon: Landmark,
    challenges: ["Legacy system dependency", "Compliance complexity", "Fraud and security threats", "Customer experience gaps"],
    solutions: ["Platform modernization", "Real-time analytics", "Security & compliance automation", "Customer 360° engagement"],
    outcomes: [{ value: "60%", label: "Faster compliance reporting" }, { value: "99.9%", label: "System uptime achieved" }, { value: "3x", label: "Faster product launches" }],
  },
  {
    id: "education",
    name: "Education",
    tagline: "Empowering learning. Enhancing outcomes.",
    description: "Transforming educational institutions with modern platforms, data-driven insights, and scalable digital infrastructure.",
    path: "/industries/education",
    icon: GraduationCap,
    challenges: ["Outdated learning systems", "Data fragmentation", "Scalability challenges", "Student engagement gaps"],
    solutions: ["Learning platform modernization", "Unified data analytics", "Cloud-based infrastructure", "AI-powered personalization"],
    outcomes: [{ value: "40%", label: "Improved student engagement" }, { value: "50%", label: "Reduction in admin overhead" }, { value: "2x", label: "Faster system deployments" }],
  },
  {
    id: "government",
    name: "Government",
    tagline: "Digital public services. Stronger communities.",
    description: "Delivering secure, scalable, and citizen-centric digital solutions for public sector modernization.",
    path: "/industries/government",
    icon: Globe2,
    challenges: ["Legacy infrastructure", "Citizen access barriers", "Security requirements", "Budget constraints"],
    solutions: ["Secure cloud migration", "Citizen portal development", "Compliance automation", "Cost-optimized operations"],
    outcomes: [{ value: "100%", label: "Compliance adherence" }, { value: "35%", label: "Cost reduction achieved" }, { value: "24/7", label: "Service availability" }],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Modern platforms. Operational excellence.",
    description: "End-to-end enterprise transformation through cloud migration, platform integration, and operational modernization.",
    path: "/industries/enterprise",
    icon: Briefcase,
    challenges: ["System fragmentation", "Scaling difficulties", "Operational inefficiency", "Integration complexity"],
    solutions: ["Enterprise platform unification", "Cloud-native architecture", "Workflow automation", "Data-driven operations"],
    outcomes: [{ value: "40%", label: "Faster time-to-market" }, { value: "60%", label: "Cost optimization" }, { value: "3x", label: "Team scalability" }],
  },
  {
    id: "technology",
    name: "Technology",
    tagline: "Innovate. Scale. Stay ahead.",
    description: "Helping technology companies scale faster with cloud-native development, AI integration, and modern engineering practices.",
    path: "/industries/technology",
    icon: Building2,
    challenges: ["Rapid scaling demands", "Technical debt", "Talent shortages", "Time-to-market pressure"],
    solutions: ["Cloud-native development", "AI & ML integration", "DevOps acceleration", "Dedicated engineering teams"],
    outcomes: [{ value: "2x", label: "Delivery velocity" }, { value: "50%", label: "Reduction in technical debt" }, { value: "99.9%", label: "Platform reliability" }],
  },
];

const techLogosByIndustry: Record<string, { name: string; src: string }[]> = {
  healthcare: [
    { name: "Salesforce", src: "/salesforce-2.svg" },
    { name: "Azure", src: "/Microsoft_Azure.svg" },
    { name: "Power BI", src: "/Power-BI.svg" },
    { name: "ServiceNow", src: "/servicenow.png" },
  ],
  finance: [
    { name: "SAP", src: "/sap-3.svg" },
    { name: "Azure", src: "/Microsoft_Azure.svg" },
    { name: "Power BI", src: "/Power-BI.svg" },
    { name: "Salesforce", src: "/salesforce-2.svg" },
  ],
  education: [
    { name: "Google Cloud", src: "/Google_Cloud_logo.svg" },
    { name: "Azure", src: "/Microsoft_Azure.svg" },
    { name: "Salesforce", src: "/salesforce-2.svg" },
    { name: "Power BI", src: "/Power-BI.svg" },
  ],
  government: [
    { name: "AWS", src: "/Aws.svg" },
    { name: "Azure", src: "/Microsoft_Azure.svg" },
    { name: "SAP", src: "/sap-3.svg" },
    { name: "ServiceNow", src: "/servicenow.png" },
  ],
  enterprise: [
    { name: "Salesforce", src: "/salesforce-2.svg" },
    { name: "AWS", src: "/Aws.svg" },
    { name: "Azure", src: "/Microsoft_Azure.svg" },
    { name: "ServiceNow", src: "/servicenow.png" },
    { name: "SAP", src: "/sap-3.svg" },
  ],
  technology: [
    { name: "AWS", src: "/Aws.svg" },
    { name: "Google Cloud", src: "/Google_Cloud_logo.svg" },
    { name: "Docker", src: "/Docker_Logo.svg" },
    { name: "Kubernetes", src: "/Kubernetes.svg" },
    { name: "Python", src: "/Python-logo-notext.svg" },
  ],
};

const TrustedBy = () => {
  const [activeId, setActiveId] = useState("healthcare");
  const [userInteracted, setUserInteracted] = useState(false);
  const activeIndustry = industries.find((i) => i.id === activeId)!;

  // Auto-rotate every 4 seconds unless user has clicked a tab
  useEffect(() => {
    if (userInteracted) return;
    const interval = setInterval(() => {
      setActiveId((prev) => {
        const currentIndex = industries.findIndex((i) => i.id === prev);
        const nextIndex = (currentIndex + 1) % industries.length;
        return industries[nextIndex].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [userInteracted]);

  const handleTabClick = (id: string) => {
    setUserInteracted(true);
    setActiveId(id);
  };

  return (
    <section
      className="py-10 relative overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-3">
            Industries We Transform
          </span>
          <h2
            id="industries-heading"
            className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] leading-tight mb-3"
          >
            Technology Expertise Across<br className="hidden md:block" />
            Key Industries
          </h2>
          <p className="text-[13px] md:text-[14px] text-[#64748B] max-w-[540px] mx-auto leading-relaxed">
            From strategy to execution, we help organizations in highly regulated and dynamic industries modernize, innovate, and lead.
          </p>
        </motion.div>

        {/* ═══ Main Layout: Left Tabs + Right Content ═══ */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-8">
            
            {/* Left: Industry Tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {industries.map((ind) => {
                const Icon = ind.icon;
                const isActive = activeId === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleTabClick(ind.id)}
                    className={`
                      flex items-center gap-3 px-4 py-3.5 rounded-xl text-left shrink-0 transition-all duration-250 w-full
                      ${isActive
                        ? "bg-[#2563EB] shadow-[0_4px_16px_-4px_rgba(37,99,235,0.3)]"
                        : "bg-white border border-[#E8ECF0] hover:border-[#CBD5E1]"
                      }
                    `}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-white/15" : "bg-[#F4F6F8]"}`}>
                      <Icon size={16} className={isActive ? "text-white" : "text-[#2563EB]"} strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className={`text-[13px] font-heading font-bold block leading-tight ${isActive ? "text-white" : "text-[#334155]"}`}>
                        {ind.name}
                      </span>
                      {isActive && (
                        <span className="text-[10px] text-white/70 block mt-0.5">{ind.tagline}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Content */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="rounded-2xl border border-[#E8ECF0] bg-white overflow-hidden"
                >
                  {/* Top: Industry header with visual */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    {/* Full-width background image */}
                    <img
                      src={`/industries/${activeIndustry.id}.png`}
                      alt={activeIndustry.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-[#0F172A]/60 to-transparent" />
                    
                    {/* Content on top of image */}
                    <div className="relative p-6 md:p-8 min-h-[160px] flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#60A5FA] block mb-1">
                        Industry Focus
                      </span>
                      <h3 className="text-[22px] md:text-[26px] font-heading font-bold text-white mb-2">
                        {activeIndustry.name}
                      </h3>
                      <p className="text-[13px] md:text-[14px] text-white/80 leading-relaxed max-w-[420px]">
                        {activeIndustry.description}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Three columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E8ECF0]">
                    {/* Challenges */}
                    <div className="p-5 md:p-6">
                      <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-[#94A3B8] block mb-3">
                        Industry Challenges
                      </span>
                      <ul className="space-y-2.5">
                        {activeIndustry.challenges.map((ch) => (
                          <li key={ch} className="text-[12px] text-[#334155] flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#94A3B8] mt-1.5 shrink-0" />
                            {ch}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="p-5 md:p-6">
                      <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-[#94A3B8] block mb-3">
                        Our Solutions
                      </span>
                      <ul className="space-y-2.5">
                        {activeIndustry.solutions.map((sol) => (
                          <li key={sol} className="text-[12px] text-[#334155] flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-[#2563EB] mt-0.5 shrink-0" strokeWidth={2} />
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="p-5 md:p-6">
                      <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-[#94A3B8] block mb-3">
                        Business Outcomes
                      </span>
                      <div className="space-y-4">
                        {activeIndustry.outcomes.map((out) => (
                          <div key={out.label} className="flex items-center gap-3">
                            <span className="text-[20px] font-heading font-bold text-[#2563EB]">{out.value}</span>
                            <span className="text-[11px] text-[#64748B] leading-tight">{out.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Tech logos + CTA */}
                  <div className="px-6 md:px-8 py-4 border-t border-[#E8ECF0] bg-[#FAFBFC] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#94A3B8] block mb-2">
                        Technologies We Leverage
                      </span>
                      <div className="flex items-center gap-4">
                        {(techLogosByIndustry[activeIndustry.id] || []).map((logo) => (
                          <img key={logo.name} src={logo.src} alt={logo.name} className="h-5 object-contain opacity-50" loading="lazy" />
                        ))}
                      </div>
                    </div>
                    <Link
                      to={activeIndustry.path}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-[12px] font-semibold hover:bg-[#1D4ED8] transition-colors shadow-[0_4px_12px_-2px_rgba(37,99,235,0.3)] shrink-0"
                    >
                      Explore {activeIndustry.name} Solutions
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-[13px] text-[#64748B]">
            <span>Deep domain expertise. Proven frameworks. Measurable impact.</span>
            <Link to="/contact" className="text-[#2563EB] font-semibold hover:underline inline-flex items-center gap-1">
              Talk to Our Experts <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
