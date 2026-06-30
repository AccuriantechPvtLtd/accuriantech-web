import { motion, useReducedMotion } from "framer-motion";
import {
  Cloud,
  Box,
  GitMerge,
  Building2,
  BarChart3,
  BrainCircuit,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const logo = "/logo.png";

interface Platform {
  name: string;
  src: string;
  /** Per-logo size hint when default cap clips an unusually wide/tall SVG. */
  imgStyle?: React.CSSProperties;
}

interface CardData {
  number: number;
  title: string;
  icon: LucideIcon;
  platforms: Platform[];
  /** Grid coords in 3×3 (hub sits in row 2, col 2). */
  rowStart: 1 | 2 | 3;
  colStart: 1 | 2 | 3;
  /** Position % for SVG connection paths. */
  cx: number;
  cy: number;
  delay: number;
}

const CARDS: CardData[] = [
  {
    number: 1,
    title: "Cloud",
    icon: Cloud,
    platforms: [
      { name: "AWS", src: "/Aws.svg" },
      { name: "Azure", src: "/Microsoft_Azure.svg" },
      { name: "Google Cloud", src: "/Google_Cloud_logo.svg" },
    ],
    rowStart: 1,
    colStart: 1,
    cx: 18,
    cy: 18,
    delay: 0,
  },
  {
    number: 2,
    title: "Containers & Orchestration",
    icon: Box,
    platforms: [
      { name: "Docker", src: "/Docker_Logo.svg" },
      { name: "Kubernetes", src: "/Kubernetes.svg" },
    ],
    rowStart: 1,
    colStart: 3,
    cx: 82,
    cy: 18,
    delay: 0.4,
  },
  {
    number: 3,
    title: "CI/CD & Engineering",
    icon: GitMerge,
    platforms: [
      { name: "GitHub", src: "/github.svg" },
      { name: "Java", src: "/java.svg" },
      { name: "Node.js", src: "/Node.js_logo.svg" },
      { name: "Python", src: "/Python-logo-notext.svg" },
    ],
    rowStart: 2,
    colStart: 3,
    cx: 82,
    cy: 50,
    delay: 0.8,
  },
  {
    number: 4,
    title: "Enterprise Platforms",
    icon: Building2,
    platforms: [
      { name: "Salesforce", src: "/salesforce-2.svg", imgStyle: { width: 26 } },
      { name: "ServiceNow", src: "/servicenow.png", imgStyle: { width: 26 } },
      { name: "SAP", src: "/sap-3.svg" },
    ],
    rowStart: 3,
    colStart: 3,
    cx: 82,
    cy: 82,
    delay: 1.2,
  },
  {
    number: 5,
    title: "Analytics & Data",
    icon: BarChart3,
    platforms: [
      { name: "Power BI", src: "/Power-BI.svg" },
      { name: "Microsoft Fabric", src: "/microsoft_fabric.svg" },
    ],
    rowStart: 3,
    colStart: 1,
    cx: 18,
    cy: 82,
    delay: 0.6,
  },
  {
    number: 6,
    title: "AI & Intelligence",
    icon: BrainCircuit,
    platforms: [
      { name: "OpenAI", src: "/openai.svg" },
      { name: "Gemini", src: "/Google_Gemini_logo.svg" },
      { name: "Claude", src: "/Claude_AI_logo.svg" },
    ],
    rowStart: 2,
    colStart: 1,
    cx: 18,
    cy: 50,
    delay: 0.2,
  },
];

const HUB = { x: 50, y: 50 };

/** Connection line endpoints — clipped to card edge and hub edge. */
const lineEndpoints = (cx: number, cy: number) => {
  const dx = HUB.x - cx;
  const dy = HUB.y - cy;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  // Card-side starts ~13% from card center (just outside its edge in the diagram)
  // Hub-side ends ~14% from center (just outside the inner ring)
  return {
    x1: cx + 13 * ux,
    y1: cy + 13 * uy,
    x2: HUB.x - 14 * ux,
    y2: HUB.y - 14 * uy,
  };
};

/* ── Single card ── */
const TechCard = ({ card }: { card: CardData }) => {
  const reduce = useReducedMotion();
  const Icon = card.icon;

  return (
    <div
      style={{ gridRow: card.rowStart, gridColumn: card.colStart }}
      className="relative self-center justify-self-center w-full max-w-[230px]"
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -4, 0] }}
        transition={
          reduce
            ? undefined
            : {
                duration: 5 + (card.number % 3) * 0.6,
                delay: card.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="relative"
      >
        {/* Floating icon badge above card */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-border shadow-[0_8px_18px_-8px_hsl(220_70%_35%_/_0.45)]">
            <Icon size={20} className="text-accent" strokeWidth={1.85} />
          </div>
        </div>

        {/* Card body */}
        <div className="rounded-2xl border border-border bg-white px-4 pt-8 pb-4 shadow-[0_10px_28px_-18px_hsl(220_70%_35%_/_0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_42px_-18px_hsl(218_79%_46%_/_0.45)]">
          <h3 className="text-[13px] font-heading font-bold text-foreground mb-3 leading-tight">
            <span className="text-accent">{card.number}.</span> {card.title}
          </h3>
          <ul className="space-y-1.5">
            {card.platforms.map((p) => (
              <li key={p.name} className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center">
                  <img
                    src={p.src}
                    alt={`${p.name} logo`}
                    className="object-contain"
                    style={p.imgStyle ?? { maxHeight: 22, maxWidth: 24 }}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="text-[12px] font-medium text-foreground/85">{p.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

/* ── Center hub: locked dead-center via CSS Grid `place-self: center` ── */
const Hub = () => {
  const reduce = useReducedMotion();
  return (
    <div
      style={{ gridRow: 2, gridColumn: 2, placeSelf: "center" }}
      className="relative"
    >
      {/* Outer rotating dotted ring */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-accent/35"
        style={{ width: 240, height: 240, marginLeft: -120, marginTop: -120 }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* small connector dots around the outer ring */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <span
            key={deg}
            className="absolute top-1/2 left-1/2 h-1.5 w-1.5 rounded-full bg-accent/55"
            style={{
              transform: `rotate(${deg}deg) translateY(-120px) translateX(-3px)`,
            }}
          />
        ))}
      </motion.div>

      {/* Inner solid ring (counter-rotating very slowly so it feels alive) */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 rounded-full border border-accent/30"
        style={{ width: 200, height: 200, marginLeft: -100, marginTop: -100 }}
        animate={reduce ? undefined : { rotate: -360 }}
        transition={reduce ? undefined : { duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Pulse rings */}
      {!reduce && (
        <>
          <motion.span
            aria-hidden
            className="absolute left-1/2 top-1/2 rounded-full border border-accent/30"
            style={{ width: 168, height: 168, marginLeft: -84, marginTop: -84 }}
            animate={{ scale: [1, 1.32], opacity: [0.55, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            aria-hidden
            className="absolute left-1/2 top-1/2 rounded-full border border-accent/30"
            style={{ width: 168, height: 168, marginLeft: -84, marginTop: -84 }}
            animate={{ scale: [1, 1.32], opacity: [0.55, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut", delay: 1.8 }}
          />
        </>
      )}

      {/* Hub circle (gentle float) */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -3, 0] }}
        transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[168px] h-[168px] rounded-full bg-white flex flex-col items-center justify-center"
        style={{
          border: "1px solid hsl(218 79% 46% / 0.18)",
          boxShadow:
            "0 0 0 10px hsl(218 79% 46% / 0.05), 0 0 60px hsl(218 79% 46% / 0.18), 0 24px 60px -22px hsl(218 79% 46% / 0.55)",
        }}
      >
        <img src={logo} alt="Accuriantech" className="w-[60px] h-[60px] object-contain" width={60} height={60} />
        <span className="mt-1.5 text-[12px] font-heading font-bold tracking-tight text-foreground">
          Accuriantech
        </span>
      </motion.div>
    </div>
  );
};

const TechnologyEcosystem = () => {
  const reduce = useReducedMotion();

  return (
    <section
      className="section-spacing bg-white relative overflow-hidden"
      aria-labelledby="tech-ecosystem-heading"
    >
      {/* Subtle enterprise background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(218 79% 46% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(218 79% 46% / 0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 65% 50%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 65% 50%, black, transparent 80%)",
          }}
        />
        <div
          className="absolute top-1/2 right-[6%] -translate-y-1/2 h-[34rem] w-[34rem] rounded-full blur-[100px]"
          style={{ background: "hsl(215 85% 55% / 0.08)" }}
        />
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[38fr_62fr] gap-10 lg:gap-12 items-center">
          {/* ─── LEFT: copy ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Technology Ecosystem
            </span>
            <h2
              id="tech-ecosystem-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 leading-[1.05]"
            >
              Technology
              <br />
              Ecosystem
            </h2>
            <div className="h-[3px] w-12 bg-accent rounded-full mb-6" aria-hidden />
            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              A modern, cloud-native ecosystem built on best-in-class technologies to deliver scalable, secure, and high-performance solutions.
            </p>
          </motion.div>

          {/* ─── RIGHT: ecosystem visualization ─── */}
          <div className="relative w-full max-w-[680px] mx-auto">
            {/* Desktop architecture diagram */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-[7/6]">
                {/* SVG connection layer */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  {CARDS.map((card, i) => {
                    const { x1, y1, x2, y2 } = lineEndpoints(card.cx, card.cy);
                    return (
                      <g key={card.number}>
                        <line
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="hsl(218 79% 46%)"
                          strokeWidth="0.22"
                          strokeDasharray="0.8 0.6"
                          opacity="0.5"
                        />
                        {/* node dot at card-side */}
                        <circle cx={x1} cy={y1} r="0.55" fill="hsl(218 79% 46%)" opacity="0.75" />
                        {/* hollow node dot at hub-side */}
                        <circle
                          cx={x2}
                          cy={y2}
                          r="0.7"
                          fill="white"
                          stroke="hsl(218 79% 46%)"
                          strokeWidth="0.22"
                        />
                        {/* flowing particle from card → hub */}
                        {!reduce && (
                          <circle r="0.55" fill="hsl(211 100% 58%)">
                            <animate
                              attributeName="cx"
                              values={`${x1};${x2}`}
                              dur={`${2.8 + (i % 3) * 0.5}s`}
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="cy"
                              values={`${y1};${y2}`}
                              dur={`${2.8 + (i % 3) * 0.5}s`}
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0;1;1;0"
                              dur={`${2.8 + (i % 3) * 0.5}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* 3×3 grid: cards in 6 corners + sides, hub in center cell */}
                <div className="relative grid grid-cols-3 grid-rows-3 gap-x-6 gap-y-12 h-full z-[1]">
                  {CARDS.map((c) => (
                    <TechCard key={c.number} card={c} />
                  ))}
                  <Hub />
                </div>
              </div>
            </div>

            {/* Mobile / tablet — hub on top, cards stacked below */}
            <div className="lg:hidden">
              <div className="flex justify-center mb-10">
                <motion.div
                  animate={reduce ? undefined : { y: [0, -3, 0] }}
                  transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 rounded-full bg-white flex flex-col items-center justify-center"
                  style={{
                    border: "1px solid hsl(218 79% 46% / 0.18)",
                    boxShadow:
                      "0 0 0 10px hsl(218 79% 46% / 0.05), 0 22px 54px -20px hsl(218 79% 46% / 0.55)",
                  }}
                >
                  <img src={logo} alt="Accuriantech" className="w-12 h-12 object-contain" width={48} height={48} />
                  <span className="mt-1 text-[11px] font-heading font-bold text-foreground">Accuriantech</span>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-4">
                {CARDS.map((c) => (
                  <div key={c.number} className="relative pt-5">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-border shadow-[0_8px_18px_-8px_hsl(220_70%_35%_/_0.4)]">
                        <c.icon size={20} className="text-accent" strokeWidth={1.85} />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border bg-white px-4 pt-8 pb-4">
                      <h3 className="text-[13px] font-heading font-bold text-foreground mb-3 leading-tight">
                        <span className="text-accent">{c.number}.</span> {c.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {c.platforms.map((p) => (
                          <li key={p.name} className="flex items-center gap-2.5">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center">
                              <img
                                src={p.src}
                                alt={`${p.name} logo`}
                                className="object-contain"
                                style={p.imgStyle ?? { maxHeight: 22, maxWidth: 24 }}
                                loading="lazy"
                                decoding="async"
                              />
                            </span>
                            <span className="text-[12px] font-medium text-foreground/85">{p.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Trust strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="mt-10 md:mt-12 max-w-3xl mx-auto"
        >
          <div className="flex items-start sm:items-center gap-3 rounded-xl border border-border bg-[hsl(220_30%_98%)] px-5 py-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/15 text-accent">
              <ShieldCheck size={18} strokeWidth={2} />
            </span>
            <p className="text-sm text-foreground/85 leading-snug">
              Our technology ecosystem enables{" "}
              <span className="text-accent font-semibold">speed</span>,{" "}
              <span className="text-accent font-semibold">reliability</span>, and{" "}
              <span className="text-accent font-semibold">scale</span> across the entire software delivery lifecycle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyEcosystem;
