import { motion, useReducedMotion } from "framer-motion";
import { Zap, Users, Shield, TrendingDown, Rocket, Cloud, BarChart3, CheckCircle2, Cpu, LineChart } from "lucide-react";

const metrics = [
  { icon: Zap, value: "40%", label: "Faster Delivery", color: "#2563EB" },
  { icon: Users, value: "3x", label: "Team Scalability", color: "#2563EB" },
  { icon: Shield, value: "99.9%", label: "Uptime SLA", color: "#2563EB" },
  { icon: TrendingDown, value: "60%", label: "Cost Optimization", color: "#EC4899" },
];

const milestones = [
  {
    number: "01",
    icon: Rocket,
    title: "Accelerating Product Delivery",
    desc: "Reduced time-to-market by 40% through specialized team deployment.",
    outcomes: ["Faster onboarding", "Reduced hiring complexity", "Improved delivery velocity", "Higher project profitability"],
    color: "#2563EB",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Cloud Modernization & Optimization",
    desc: "Achieved 99.9% uptime with 35% infrastructure cost reduction.",
    outcomes: ["Improved scalability", "Increased reliability", "Reduced operational overhead", "Enhanced performance"],
    color: "#7C3AED",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Data & Analytics Transformation",
    desc: "Delivered executive dashboards reducing reporting time by 80%.",
    outcomes: ["Faster reporting", "Better decision-making", "Executive visibility", "Data-driven operations"],
    color: "#EC4899",
  },
];

const outcomesWeEnable = [
  { icon: Zap, label: "Faster Delivery" },
  { icon: Cpu, label: "Operational Efficiency" },
  { icon: Cloud, label: "Cloud Modernization" },
  { icon: LineChart, label: "Better Decision-Making" },
  { icon: TrendingDown, label: "Scalable Growth" },
];

const ClientSuccessStories = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-10 relative overflow-hidden" aria-labelledby="impact-heading">
      <div className="container mx-auto px-4 md:px-8 relative">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[#2563EB] text-[11px] font-semibold uppercase tracking-[0.22em] block mb-4">
            Proven Delivery Outcomes
          </span>
          <h2 id="impact-heading" className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] mb-5 leading-tight">
            Technology Outcomes That Drive Business Growth
          </h2>
          <p className="text-[#64748B] text-[15px] md:text-base max-w-[600px] mx-auto leading-relaxed">
            Real-world examples of how Accuriantech helps organizations accelerate delivery, optimize operations, and achieve measurable business outcomes.
          </p>
        </motion.div>

        {/* ─── Impact Metrics ─── */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-20 mb-12">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${m.color}12` }}
                >
                  <Icon size={22} style={{ color: m.color }} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A]">{m.value}</div>
                  <div className="text-[12px] text-[#64748B] font-medium mt-0.5">{m.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Journey Timeline (Desktop) ─── */}
        <div className="hidden md:block max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-3 gap-10">
            {/* Row 1: Icons above the line */}
            {milestones.map((ms, i) => {
              const Icon = ms.icon;
              return (
                <motion.div
                  key={`icon-${ms.number}`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.25 }}
                  className="flex justify-center"
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -5, 0] }}
                    transition={reduce ? undefined : { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    className="relative w-[90px] h-[90px] flex items-center justify-center"
                  >
                    {/* Outer ring */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ background: `${ms.color}06`, border: `1.5px solid ${ms.color}18` }}
                    />
                    {/* Inner colored circle */}
                    <div
                      className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${ms.color}, ${ms.color}DD)`,
                        boxShadow: `0 8px 20px ${ms.color}28`,
                      }}
                    >
                      <Icon size={26} className="text-white" strokeWidth={1.8} />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Connecting line with dots below icons */}
          <div className="relative h-10 mx-auto mt-2">
            {/* The gradient line */}
            <div className="absolute top-1/2 left-[16.66%] right-[16.66%] -translate-y-1/2">
              <motion.div
                className="h-[3px] w-full rounded-full origin-left"
                style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED, #EC4899)" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            {/* Dots on the line — aligned to grid column centers */}
            <div className="absolute top-1/2 left-[16.66%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#2563EB] border-2 border-white shadow-sm z-[2]" />
            <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#7C3AED] border-2 border-white shadow-sm z-[2]" />
            <div className="absolute top-1/2 left-[83.33%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#EC4899] border-2 border-white shadow-sm z-[2]" />
            {/* Arrow at the end */}
            <div className="absolute top-1/2 right-[4%] -translate-y-1/2 z-[3]">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M12 1L18 7L12 13" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ─── Milestone Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {milestones.map((ms, i) => (
            <motion.div
              key={ms.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Mobile icon */}
              <div className="md:hidden mb-4 flex justify-center">
                <div
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${ms.color}, ${ms.color}DD)`,
                    boxShadow: `0 6px 20px ${ms.color}25`,
                  }}
                >
                  <ms.icon size={24} className="text-white" strokeWidth={1.8} />
                </div>
              </div>

              {/* Number + Title */}
              <div className="mb-2">
                <span className="text-[14px] font-bold" style={{ color: ms.color }}>{ms.number}</span>
                <h3 className="text-[16px] font-heading font-bold text-[#0F172A] leading-snug mt-0.5">{ms.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[13px] text-[#64748B] leading-relaxed mb-4">{ms.desc}</p>

              {/* Outcome bullets */}
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {ms.outcomes.map((o) => (
                  <span
                    key={o}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-medium"
                    style={{ color: ms.color }}
                  >
                    <CheckCircle2 size={10} strokeWidth={2.5} />
                    {o}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Bottom Outcomes Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-[#E2E8F0]"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.22em] font-semibold text-[#94A3B8] mb-6">
            Outcomes We Enable
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {outcomesWeEnable.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                    <Icon size={16} className="text-[#475569]" strokeWidth={2} />
                  </div>
                  <span className="text-[13px] text-[#1E293B] font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;
