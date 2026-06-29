import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, Users, Globe, Shield, Zap, Heart, CheckCircle2, ArrowRight, Building2, Code2, Cloud, BrainCircuit } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBackdrop from "@/components/PageBackdrop";

const About = () => {
  return (
    <PageTransition>
    <div className="min-h-screen relative overflow-hidden">
      <SEOHead
        title="About Accuriantech – Enterprise Technology Consulting Partner"
        description="Accuriantech is an enterprise technology consulting firm specializing in AI, Cloud, Salesforce, ServiceNow, Data Analytics, and Managed IT. Serving businesses across India, US, and globally."
        canonical="https://accuriantech.com/about"
        keywords="about Accuriantech, IT consulting company, enterprise technology partner, AI consulting, cloud solutions, Salesforce partner"
      />
      <PageBackdrop />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <img src="/about-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0F172A]/55" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} aria-hidden />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-left max-w-3xl">
            <span className="text-[#60A5FA] text-[11px] font-semibold uppercase tracking-[0.2em]">About Accuriantech</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-3 mb-5 leading-tight">
              Reliable. Scalable. Accurate.
            </h1>
            <p className="text-white/70 max-w-xl text-[15px] md:text-lg leading-relaxed">
              Your technology partner for enterprise growth — helping organizations worldwide accelerate digital transformation through specialized expertise in AI, Cloud, Enterprise Platforms, and Modern Engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are — Quick Overview */}
      <section className="py-14 bg-white border-b border-[#E8ECF0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] mb-4 leading-tight">
                Technology Consulting Built<br className="hidden md:block" /> for Enterprise Scale
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#64748B] leading-relaxed mb-5">
                Accuriantech is an enterprise technology consulting firm built by experienced professionals who've delivered solutions across AI & Data, Cloud Infrastructure, Salesforce, ServiceNow, SAP (Security, BTP, Cloud, and all modules), Data Analytics, Custom Software Engineering, and Managed IT Services.
              </p>
              <p className="text-[14px] md:text-[15px] text-[#64748B] leading-relaxed mb-6">
                We bring enterprise-grade expertise with the agility of a focused team. Our flexible engagement models — project delivery, dedicated teams, staff augmentation, and managed services — are designed to match your business goals, timeline, and budget.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI & Data Solutions", "Cloud (AWS / Azure)", "Salesforce", "ServiceNow", "Power BI", "SAP (All Modules)", "Software Engineering", "Managed IT"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#F1F5F9] border border-[#E8ECF0] text-[11px] font-medium text-[#334155]">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 grid grid-cols-2 gap-3"
            >
              {[
                { number: "8+", label: "Technology Domains" },
                { number: "4", label: "Engagement Models" },
                { number: "Global", label: "Client Reach" },
                { number: "24/7", label: "Support Coverage" },
              ].map((stat, i) => (
                <div key={stat.label} className="rounded-xl border border-[#E8ECF0] bg-[#FAFBFC] p-5 text-center">
                  <span className="text-[24px] md:text-[28px] font-heading font-bold text-[#2563EB]">{stat.number}</span>
                  <p className="text-[11px] text-[#64748B] mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do — Practice Areas */}
      <section className="py-14 bg-[#FAFBFC]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-2">What We Do</span>
            <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] leading-tight">
              Four Pillars of Enterprise Technology
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: BrainCircuit, title: "AI & Data", desc: "Generative AI, ML pipelines, intelligent automation, and enterprise analytics.", color: "#7C3AED" },
              { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Azure, GCP — migration, infrastructure, containerization, and FinOps.", color: "#0891B2" },
              { icon: Building2, title: "Enterprise Platforms", desc: "Salesforce, ServiceNow, SAP (all modules including Security, BTP & Cloud), Power BI — implementation, integration, and support.", color: "#2563EB" },
              { icon: Code2, title: "Engineering & IT", desc: "Custom software, API development, microservices, managed IT, and cybersecurity.", color: "#059669" },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-[#E8ECF0] bg-white p-6 hover:shadow-[0_4px_20px_-8px_rgba(37,99,235,0.1)] hover:border-transparent transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${pillar.color}10`, border: `1px solid ${pillar.color}20` }}>
                  <pillar.icon size={18} style={{ color: pillar.color }} strokeWidth={1.8} />
                </div>
                <h3 className="text-[14px] font-heading font-bold text-[#0F172A] mb-2">{pillar.title}</h3>
                <p className="text-[11.5px] text-[#64748B] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[#E8ECF0] p-7 bg-[#FAFBFC]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4">
                <Target size={18} className="text-[#2563EB]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[16px] font-heading font-bold text-[#0F172A] mb-2">Our Mission</h3>
              <p className="text-[13px] text-[#64748B] leading-relaxed">
                To deliver accurate, scalable, and secure technology solutions that help enterprises modernize, innovate, and grow — with predictable outcomes and transparent partnerships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-xl border border-[#E8ECF0] p-7 bg-[#FAFBFC]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center mb-4">
                <Eye size={18} className="text-[#7C3AED]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[16px] font-heading font-bold text-[#0F172A] mb-2">Our Vision</h3>
              <p className="text-[13px] text-[#64748B] leading-relaxed">
                To become the most trusted enterprise technology consulting partner — known for deep expertise, reliable execution, and a commitment to long-term client success across global markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-[#FAFBFC]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-2">Why Accuriantech</span>
            <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] leading-tight">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Rocket, title: "Deep Specialization", desc: "Focused expertise across AI, Cloud, CRM, ITSM, ERP, Analytics, and IT Infrastructure — not a generalist shop." },
              { icon: Users, title: "Flexible Engagement", desc: "Project delivery, dedicated teams, staff augmentation, or managed services — you choose the model that fits." },
              { icon: Shield, title: "Enterprise Standards", desc: "Security-first architecture, SLA-backed delivery, structured documentation, and governance at every step." },
              { icon: Globe, title: "Global Delivery", desc: "India-based engineering serving clients worldwide. Full timezone coverage across all regions." },
              { icon: Zap, title: "Fast Execution", desc: "Agile methodology, rapid onboarding, same-day screenings for urgent roles, and quick time-to-value." },
              { icon: Heart, title: "Long-term Partnership", desc: "We don't disappear after go-live. Continuous support, optimization, and strategic advisory for the long haul." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-[#E8ECF0] bg-white p-6"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2563EB]/8 border border-[#2563EB]/15 flex items-center justify-center mb-3">
                  <item.icon size={16} className="text-[#2563EB]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[13px] font-heading font-bold text-[#0F172A] mb-1.5">{item.title}</h3>
                <p className="text-[11.5px] text-[#64748B] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-2">Our Process</span>
            <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] leading-tight">
              How We Deliver Results
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understand your business goals, current stack, and challenges." },
              { step: "02", title: "Architecture", desc: "Design the right solution with technology selection and roadmap." },
              { step: "03", title: "Delivery", desc: "Agile execution with regular demos, feedback loops, and transparency." },
              { step: "04", title: "Support", desc: "Post-launch monitoring, optimization, and continuous improvement." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-[32px] font-heading font-bold text-[#2563EB]/15 block mb-2">{item.step}</span>
                <h3 className="text-[14px] font-heading font-bold text-[#0F172A] mb-1.5">{item.title}</h3>
                <p className="text-[11.5px] text-[#64748B] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#0F172A]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-[24px] md:text-[32px] font-heading font-bold text-white mb-3 leading-tight">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-[13px] text-white/60 mb-6 leading-relaxed">
              Book a free 30-minute consultation. We'll discuss your goals and outline the lowest-risk path forward — no slides, no obligation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition-colors"
            >
              Schedule a Discovery Call
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default About;
