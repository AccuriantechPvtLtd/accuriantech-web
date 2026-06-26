import { motion } from "framer-motion";
import "./TechMarquee.css";

const row1 = [
  { name: "OpenAI", src: "/openai.svg" },
  { name: "Gemini", src: "/Google_Gemini_logo.svg" },
  { name: "Claude", src: "/Claude_AI_logo.svg" },
  { name: "AWS", src: "/Aws.svg" },
  { name: "Azure", src: "/Microsoft_Azure.svg" },
  { name: "Google Cloud", src: "/Google_Cloud_logo.svg" },
  { name: "Salesforce", src: "/salesforce-2.svg" },
];

const row2 = [
  { name: "ServiceNow", src: "/servicenow.png" },
  { name: "SAP", src: "/sap-3.svg" },
  { name: "Power BI", src: "/Power-BI.svg" },
  { name: "Microsoft Fabric", src: "/microsoft_fabric.svg" },
  { name: "Docker", src: "/Docker_Logo.svg" },
  { name: "Kubernetes", src: "/Kubernetes.svg" },
  { name: "GitHub", src: "/github.svg" },
];

const TrustedTechnologyPartners = () => {
  return (
    <section className="py-10 relative overflow-hidden" aria-labelledby="tech-ribbon-heading">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-8 text-center mb-7 relative"
      >
        <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.24em] block mb-1.5">
          Technology Ecosystem
        </span>
        <h2 id="tech-ribbon-heading" className="text-[24px] md:text-[32px] lg:text-[38px] font-heading font-bold text-[#0F172A] mb-1.5">
          Technologies Powering Enterprise Transformation
        </h2>
        <p className="text-[#64748B] text-[12px] max-w-[500px] mx-auto">
          Building modern solutions across AI, Cloud, Enterprise Platforms, Analytics, Security, and Software Engineering.
        </p>
      </motion.div>

      {/* Ribbon Wall */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 bg-gradient-to-r from-[hsl(220,36%,98%)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 bg-gradient-to-l from-[hsl(215,50%,96%)] to-transparent pointer-events-none" />

        {/* Row 1 → LTR */}
        <div className="ribbon ribbon--ltr mb-2.5">
          <div className="ribbon__track">
            {[...row1, ...row1, ...row1].map((item, i) => (
              <Badge key={`r1-${i}`} name={item.name} src={item.src} />
            ))}
          </div>
        </div>

        {/* Row 2 → RTL */}
        <div className="ribbon ribbon--rtl">
          <div className="ribbon__track">
            {[...row2, ...row2, ...row2].map((item, i) => (
              <Badge key={`r2-${i}`} name={item.name} src={item.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function Badge({ name, src }: { name: string; src: string }) {
  return (
    <div className="ribbon__badge">
      <img src={src} alt={name} className="ribbon__badge-logo" loading="lazy" />
      <span className="ribbon__badge-name">{name}</span>
    </div>
  );
}

export default TrustedTechnologyPartners;
