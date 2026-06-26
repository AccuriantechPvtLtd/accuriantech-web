import { motion } from "framer-motion";
import { Rocket, Users, UserPlus, Settings } from "lucide-react";

/* ═══════════════════════════════════════════════════
   ENGAGEMENT MODELS — Compact single-row design
   ═══════════════════════════════════════════════════ */

const engagementModels = [
  {
    icon: Rocket,
    title: "Project Delivery",
    description: "End-to-end ownership with defined scope, timelines, and measurable outcomes.",
    bestFor: ["Digital Transformation", "Cloud Migration", "Enterprise Apps"],
    accent: "#2563EB",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "An extension of your engineering org — developers, architects, QA, and DevOps.",
    bestFor: ["Product Engineering", "Agile Teams", "Long-term Development"],
    accent: "#7C3AED",
  },
  {
    icon: UserPlus,
    title: "Staff Augmentation",
    description: "Skilled professionals who integrate seamlessly into your existing teams.",
    bestFor: ["Resource Scaling", "Specialized Skills", "Critical Projects"],
    accent: "#0891B2",
  },
  {
    icon: Settings,
    title: "Managed Services",
    description: "Continuous monitoring, maintenance, optimization, and support.",
    bestFor: ["Cloud Operations", "Infrastructure", "Ongoing Support"],
    accent: "#059669",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-2">
            Engagement Models
          </span>
          <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] mb-2 leading-tight">
            Choose the Right Model for Your Business
          </h2>
          <p className="text-[12px] md:text-[13px] text-[#64748B] max-w-[500px] mx-auto leading-relaxed">
            Flexible engagement options aligned to your goals, complexity, and growth strategy.
          </p>
        </motion.div>

        {/* 4-column compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {engagementModels.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-xl border border-[#E8ECF0] bg-white p-5 hover:border-transparent hover:shadow-[0_6px_24px_-8px_rgba(37,99,235,0.12)] transition-all duration-300"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: model.accent }}
                />

                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300"
                  style={{ background: `${model.accent}0D`, border: `1px solid ${model.accent}1A` }}
                >
                  <Icon size={16} style={{ color: model.accent }} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[13px] font-heading font-bold text-[#0F172A] mb-1.5 leading-tight">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-[#64748B] leading-relaxed mb-3">
                  {model.description}
                </p>

                {/* Best For */}
                <div className="flex flex-wrap gap-1">
                  {model.bestFor.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#F1F5F9] text-[9px] font-medium text-[#64748B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
