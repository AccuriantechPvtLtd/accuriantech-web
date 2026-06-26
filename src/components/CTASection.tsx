import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const CTASection = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <AnimatedBackground variant="subtle" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-border bg-white/90 px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 text-center"
        >
          {/* Inner animated bg */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <motion.div
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(217 92% 55% / 0.15), transparent 70%)", filter: "blur(80px)" }}
              animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(210 85% 62% / 0.1), transparent 70%)", filter: "blur(60px)" }}
              animate={{ scale: [1.1, 1, 1.1], y: [0, -15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(200 80% 55% / 0.08), transparent 70%)", filter: "blur(40px)" }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(hsl(217 92% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 92% 55%) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }} />

            {/* Rotating ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
              style={{ border: "1px solid hsl(217 92% 55% / 0.06)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4"
              aria-hidden
            >
              <Sparkles size={24} className="text-accent" />
            </motion.div>

            <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-foreground mb-5 leading-tight">
              Let's Map Your Next 12 Months
              <br />
              of Modernization
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-7 text-base md:text-lg leading-relaxed">
              In a 30-minute call, we'll outline the lowest-risk path to your goals — no slides, no obligation.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2.5 text-base group">
                Schedule a Discovery Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:info@accuriantech.com"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/70 hover:border-accent/50 transition-all duration-300"
              >
                <Mail size={16} />
                Email info@accuriantech.com
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-transparent text-muted-foreground font-medium hover:text-accent transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              30-min call · No obligation · We respond within 1 business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
