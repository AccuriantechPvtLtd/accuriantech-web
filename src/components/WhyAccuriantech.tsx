import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Users, Globe2, Target, Cloud, Sparkles, BarChart3, Shield, Settings, Server, ArrowRight, TrendingUp, DollarSign, Expand, Zap } from "lucide-react";

/* ═══════════════════════════════════════════════════
   WHY ACCURIANTECH — Framework Hub
   
   Central circle (Accuriantech logo/brand) with four
   pillar cards positioned around it (top-left, top-right,
   bottom-left, bottom-right). Connection lines from
   center to each pillar. Bottom CTA banner.
   ═══════════════════════════════════════════════════ */

const pillars = [
  {
    number: "1",
    title: "Technology Expertise",
    description: "Deep capabilities across leading platforms and modern technologies.",
    icon: Cpu,
    iconColor: "#2563EB",
    iconBg: "#EFF6FF",
    capabilities: [
      { icon: Settings, label: "Salesforce" },
      { icon: Cloud, label: "Cloud (AWS, Azure)" },
      { icon: Sparkles, label: "AI & Automation" },
      { icon: BarChart3, label: "Power BI" },
      { icon: Server, label: "ServiceNow" },
      { icon: Shield, label: "SAP Security" },
    ],
    cta: { label: "Explore Capabilities", link: "/services" },
    position: "top-left",
  },
  {
    number: "2",
    title: "Flexible Delivery",
    description: "Engagement models tailored to your business goals and priorities.",
    icon: Users,
    iconColor: "#059669",
    iconBg: "#ECFDF5",
    capabilities: [
      { icon: Users, label: "Consulting" },
      { icon: Zap, label: "Project Delivery" },
      { icon: Shield, label: "Managed Services" },
      { icon: Target, label: "Dedicated Teams" },
    ],
    cta: { label: "Explore Engagement Models", link: "/services" },
    position: "top-right",
  },
  {
    number: "3",
    title: "Global Execution",
    description: "Enterprise-grade delivery powered by governance, security and scale.",
    icon: Globe2,
    iconColor: "#0891B2",
    iconBg: "#ECFEFF",
    capabilities: [
      { icon: Shield, label: "Enterprise Governance" },
      { icon: Target, label: "SLA Management" },
      { icon: Globe2, label: "Security & Compliance" },
      { icon: Expand, label: "Scalable Delivery" },
    ],
    cta: { label: "Explore Our Approach", link: "/about" },
    position: "bottom-left",
  },
  {
    number: "4",
    title: "Predictable Outcomes",
    description: "We focus on outcomes that drive real business impact and growth.",
    icon: Target,
    iconColor: "#7C3AED",
    iconBg: "#F5F3FF",
    capabilities: [
      { icon: Zap, label: "Faster Delivery" },
      { icon: DollarSign, label: "Cost Optimization" },
      { icon: TrendingUp, label: "Scalability" },
      { icon: Sparkles, label: "Business Efficiency" },
    ],
    cta: { label: "Explore Impact", link: "/about" },
    position: "bottom-right",
  },
];

const WhyAccuriantech = () => {
  return (
    <section className="py-10 relative overflow-hidden" aria-labelledby="why-heading" id="why-us">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-3">
            Why Accuriantech
          </span>
          <h2 id="why-heading" className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] leading-tight mb-2">
            Technology Expertise. Flexible Delivery.
            <br className="hidden md:block" />
            <span className="text-[#2563EB]">Predictable Outcomes.</span>
          </h2>
          <p className="text-[13px] md:text-[14px] text-[#64748B] max-w-[540px] mx-auto leading-relaxed mt-3">
            Our proven framework combines deep technology expertise, flexible engagement models, and global delivery excellence to drive measurable business outcomes.
          </p>
        </motion.div>

        {/* ═══ Framework Layout ═══ */}
        <div className="max-w-6xl mx-auto relative">
          
          {/* SVG Connection Lines (Desktop only) */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-[5]"
            viewBox="0 0 1000 600"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            {/* Top-left card to center */}
            <path d="M 320 150 C 380 150, 420 200, 460 260" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="320" cy="150" r="5" fill="#2563EB" opacity="0.7" />
            <circle cx="460" cy="260" r="5" fill="#2563EB" opacity="0.7" />
            {/* Top-right card to center */}
            <path d="M 680 150 C 620 150, 580 200, 540 260" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="680" cy="150" r="5" fill="#059669" opacity="0.7" />
            <circle cx="540" cy="260" r="5" fill="#059669" opacity="0.7" />
            {/* Bottom-left card to center */}
            <path d="M 320 450 C 380 450, 420 400, 460 340" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="320" cy="450" r="5" fill="#0891B2" opacity="0.7" />
            <circle cx="460" cy="340" r="5" fill="#0891B2" opacity="0.7" />
            {/* Bottom-right card to center */}
            <path d="M 680 450 C 620 450, 580 400, 540 340" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="680" cy="450" r="5" fill="#7C3AED" opacity="0.7" />
            <circle cx="540" cy="340" r="5" fill="#7C3AED" opacity="0.7" />
          </svg>

          {/* Desktop: 2-column grid with center hub */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-x-[240px] lg:gap-y-6 relative">
            
            {/* Center Hub — positioned in the middle on desktop */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)" }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Outer dashed ring */}
                <motion.div
                  className="w-[200px] h-[200px] rounded-full border-2 border-dashed border-[#2563EB]/20 flex items-center justify-center"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Inner solid ring */}
                  <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#1E40AF] flex flex-col items-center justify-center shadow-[0_0_40px_8px_rgba(30,64,175,0.25),0_12px_40px_-8px_rgba(30,64,175,0.4)]">
                    <img src="/logo.png" alt="Accuriantech" className="w-12 h-12 object-contain mb-2 brightness-0 invert" />
                    <span className="text-white text-[11px] font-heading font-bold tracking-wide">ACCURIANTECH</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile center hub */}
            <div className="flex lg:hidden justify-center mb-4 md:col-span-2">
              <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#1E40AF] flex flex-col items-center justify-center shadow-[0_0_30px_6px_rgba(30,64,175,0.2),0_8px_30px_-6px_rgba(30,64,175,0.35)]">
                <img src="/logo.png" alt="Accuriantech" className="w-9 h-9 object-contain mb-1 brightness-0 invert" />
                <span className="text-white text-[10px] font-heading font-bold tracking-wide">ACCURIANTECH</span>
              </div>
            </div>

            {/* Pillar Cards */}
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-[#E8ECF0] bg-white p-6 hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] hover:border-[#2563EB]/15 transition-all duration-300"
                >
                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: pillar.iconBg }}
                    >
                      <Icon size={20} style={{ color: pillar.iconColor }} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-heading font-bold text-[#0F172A] leading-tight">
                        {pillar.number}. {pillar.title}
                      </h3>
                      <p className="text-[11.5px] text-[#64748B] mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Capability items */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mt-4 mb-4">
                    {pillar.capabilities.map((cap) => {
                      const CapIcon = cap.icon;
                      return (
                        <div key={cap.label} className="flex items-center gap-2">
                          <CapIcon size={13} className="text-[#94A3B8] shrink-0" strokeWidth={1.8} />
                          <span className="text-[11.5px] font-medium text-[#334155]">{cap.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA link */}
                  <Link
                    to={pillar.cta.link}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold transition-colors"
                    style={{ color: pillar.iconColor }}
                  >
                    {pillar.cta.label}
                    <ArrowRight size={12} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] px-6 md:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                <TrendingUp size={20} className="text-[#2563EB]" strokeWidth={1.8} />
              </div>
              <div>
                <span className="text-[14px] font-heading font-bold text-[#0F172A] block">
                  One Partner. End-to-End Transformation.
                </span>
                <span className="text-[12px] text-[#64748B]">
                  From strategy to execution and beyond, we stay with you at every step of your transformation journey.
                </span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-[12px] font-semibold hover:bg-[#1D4ED8] transition-colors shadow-[0_4px_12px_-2px_rgba(37,99,235,0.3)] shrink-0"
            >
              Let's Transform Together
              <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAccuriantech;
