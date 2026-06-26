import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Globe, Shield, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBackdrop from "@/components/PageBackdrop";

const values = [
  { icon: Target, title: "Accuracy", description: "We deliver precise, reliable solutions that meet the exact needs of every client." },
  { icon: Zap, title: "Innovation", description: "Continuously adopting cutting-edge technologies to keep our clients ahead." },
  { icon: Shield, title: "Reliability", description: "SLA-backed delivery with enterprise-grade processes and security-first thinking." },
  { icon: Users, title: "Partnership", description: "We act as your long-term technology partner, not just a vendor." },
  { icon: Globe, title: "Global Reach", description: "Supporting businesses in India, the United States, and across the globe." },
  { icon: Heart, title: "Client Focus", description: "Every solution is tailored to your specific business goals and challenges." },
];

const About = () => {
  return (
    <PageTransition>
    <div className="min-h-screen relative overflow-hidden">
      <SEOHead
        title="About Accuriantech – Our Mission, Values & Global Reach"
        description="Learn about Accuriantech's mission to deliver reliable, scalable, and accurate enterprise technology solutions across India, US, and worldwide."
        canonical="https://accuriantech.com/about"
        keywords="about Accuriantech, IT consulting company, enterprise technology partner, IT solutions India USA"
      />
      <PageBackdrop />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background image */}
        <img src="/about-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0F172A]/50" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-left">
            <span className="text-white text-sm font-semibold uppercase tracking-widest">Who We Are</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mt-3 mb-4">
              About Accuriantech
            </h1>
            <p className="text-primary-foreground/60 max-w-2xl text-lg">
              We are a technology consulting firm delivering reliable, scalable, and accurate solutions across Salesforce, Cloud, BI, ServiceNow, and Managed IT — empowering businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand explainer for entity clarity */}
      <section className="py-12 bg-background border-b border-border/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">What is Accuriantech?</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Accuriantech is an enterprise technology consulting company focused on Salesforce, Cloud, Power BI, ServiceNow, SAP security, and Managed IT services. We help organizations modernize operations with reliable delivery, measurable outcomes, and long-term support.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Building the Future, One Solution at a Time
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Accuriantech was founded with a clear mission: to provide businesses with technology solutions that are not just functional, but transformative. With over 14 projects delivered across multiple domains, we've established ourselves as a trusted partner for organizations seeking enterprise-grade technology consulting.
                </p>
                <p>
                  Our team of certified professionals spans Salesforce, Microsoft Azure, AWS, Power BI, ServiceNow, and IT infrastructure — enabling us to deliver end-to-end solutions that address real business challenges.
                </p>
                <p>
                  From startups in India to enterprises in the United States and beyond, we bring the same commitment to quality, security, and scalability to every engagement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 text-center">
                <div className="stat-number text-4xl">14+</div>
                <p className="text-muted-foreground text-sm mt-1">Projects</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="stat-number text-4xl">6+</div>
                <p className="text-muted-foreground text-sm mt-1">Service Domains</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="stat-number text-4xl">3</div>
                <p className="text-muted-foreground text-sm mt-1">Global Regions</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="stat-number text-4xl">99%</div>
                <p className="text-muted-foreground text-sm mt-1">Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Target size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with reliable, scalable, and accurate technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted technology consulting partner for businesses worldwide, known for delivering solutions that combine enterprise-grade quality with the agility of a focused, expert team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default About;
