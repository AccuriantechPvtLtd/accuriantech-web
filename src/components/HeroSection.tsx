import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Globe2, BrainCircuit, ShieldCheck, Handshake } from "lucide-react";
import { useEffect, useState } from "react";
import VantaGlobe from "./VantaGlobe";

const HeroSection = () => {
  const typeText = "Reliable. Scalable. Accurate.";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let idx = 0;
    let deleting = false;
    let timeoutId: number;

    const tick = () => {
      if (!deleting) {
        idx += 1;
        setTyped(typeText.slice(0, idx));
        if (idx === typeText.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, 1100);
          return;
        }
        timeoutId = window.setTimeout(tick, 70);
      } else {
        idx -= 1;
        setTyped(typeText.slice(0, idx));
        if (idx === 0) {
          deleting = false;
          timeoutId = window.setTimeout(tick, 350);
          return;
        }
        timeoutId = window.setTimeout(tick, 40);
      }
    };

    timeoutId = window.setTimeout(tick, 150);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const trustItems = [
    { icon: Globe2, label: "Global Delivery" },
    { icon: BrainCircuit, label: "AI-Driven Innovation" },
    { icon: ShieldCheck, label: "Enterprise-Grade Solutions" },
    { icon: Handshake, label: "Long-Term Technology Partner" },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220 36% 98%), hsl(212 60% 93%))" }}>
      <VantaGlobe />
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden>
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "linear-gradient(hsl(218 79% 46% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(218 79% 46% / 0.1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          className="absolute -top-16 right-[8%] h-72 w-72 rounded-full blur-3xl"
          style={{ background: "hsl(211 100% 58% / 0.18)" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-6 md:pb-8 relative z-10">
        <div className="max-w-3xl">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-accent"
            >
              <Sparkles size={14} />
              Enterprise Technology Partner
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Empowering Growth Through{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                AI &amp; Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-3 text-xl md:text-2xl font-heading font-semibold text-foreground min-h-[2.1rem] md:min-h-[2.5rem]"
              aria-live="polite"
            >
              {typed}
              <span className="ml-0.5 inline-block w-[1px] h-6 md:h-7 bg-accent align-middle animate-pulse" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              From intelligent AI solutions and custom software development to cloud transformation and managed IT services, we deliver technology that drives real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/80 px-7 py-3 text-sm font-semibold text-foreground hover:border-accent/45 hover:text-accent transition-colors"
              >
                Explore Solutions
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="mt-3 text-xs text-muted-foreground"
            >
              30-min discovery call · No obligation · Reply within 24 hrs.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              aria-label="Why teams choose Accuriantech"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex h-full flex-col items-center justify-start gap-3 rounded-xl border border-border bg-white/85 px-4 py-5 text-center shadow-[0_12px_24px_-18px_hsl(220_70%_35%_/_0.35)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-foreground leading-snug">{label}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
