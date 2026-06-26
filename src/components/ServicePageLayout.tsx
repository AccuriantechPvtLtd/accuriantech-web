import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Lightbulb,
  Search,
  PenTool,
  Rocket,
  TestTube,
  TrendingUp,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead, { type BreadcrumbItem } from "@/components/SEOHead";
import PageBackdrop from "@/components/PageBackdrop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SERVICES,
  SERVICE_BY_SLUG,
  RELATED_SERVICES,
  INDUSTRIES,
} from "@/lib/site-data";

export interface ServiceSection {
  icon: LucideIcon;
  heading: string;
  description: string;
  items: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  title: string;
  /** Short label used for cross-linking ("Salesforce", "Power BI", …). */
  shortName?: string;
  tagline: string;
  description: string;
  color: string;
  heroImage?: string;
  canonicalPath?: string;
  seoKeywords?: string;
  /** Optional slug used to derive related services. Falls back to canonicalPath. */
  slug?: string;
  sections: ServiceSection[];
  whyChoose: string[];
  problems?: string[];
  useCases?: string[];
  faqs?: ServiceFAQ[];
}

interface Props {
  data: ServicePageData;
}

const deliverySteps = [
  { icon: Search, title: "Discovery & Assessment", desc: "Understand your current state, goals, and requirements." },
  { icon: PenTool, title: "Solution Architecture", desc: "Design a tailored solution aligned to your objectives." },
  { icon: Rocket, title: "Implementation", desc: "Build and deploy with agile sprints and quality gates." },
  { icon: TestTube, title: "Testing & Deployment", desc: "Rigorous validation before go-live with rollback plans." },
  { icon: TrendingUp, title: "Ongoing Optimization", desc: "Continuous improvement, monitoring, and support." },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

const SITE_URL = "https://accuriantech.com";

const deriveSlug = (data: ServicePageData): string | null => {
  if (data.slug) return data.slug;
  if (!data.canonicalPath) return null;
  const m = data.canonicalPath.match(/^\/services\/([^/]+)\/?$/);
  return m ? m[1] : null;
};

const isIndustryPath = (path?: string): boolean =>
  !!path && /^\/industries\//.test(path);

const ServicePageLayout = ({ data }: Props) => {
  const slug = deriveSlug(data);
  const industry = isIndustryPath(data.canonicalPath);
  const shortName = data.shortName || (slug && SERVICE_BY_SLUG[slug]?.short) || data.title;

  const related = slug && RELATED_SERVICES[slug]
    ? RELATED_SERVICES[slug]
        .map((rs) => SERVICE_BY_SLUG[rs])
        .filter(Boolean)
    : [];

  const breadcrumbs: BreadcrumbItem[] = industry
    ? [
        { name: "Home", path: "/" },
        { name: "Industries", path: "/" },
        { name: data.title, path: data.canonicalPath || "/" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: data.title, path: data.canonicalPath || `/services/${slug ?? ""}` },
      ];

  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.description,
    serviceType: data.title,
    provider: {
      "@type": "Organization",
      name: "Accuriantech",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressCountry: "IN",
      },
    },
    areaServed: ["India", "United States", "Worldwide"],
  };

  const faqJsonLd = data.faqs && data.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-x-hidden">
        <SEOHead
          title={`${data.title} – Accuriantech`}
          description={data.description}
          canonical={data.canonicalPath ? `${SITE_URL}${data.canonicalPath}` : undefined}
          keywords={data.seoKeywords || `Accuriantech ${data.title}, ${data.tagline}, enterprise IT solutions`}
          jsonLd={baseJsonLd}
          jsonLdExtra={faqJsonLd ? [faqJsonLd] : undefined}
          breadcrumbs={breadcrumbs}
        />
        <PageBackdrop variant="soft" />
        <Navbar />

        {/* ─── Hero ─── */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          {data.heroImage ? (
            <>
              <div className="absolute inset-0">
                <img
                  src={data.heroImage}
                  alt={`${data.title} solutions by Accuriantech`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-[#0F172A]/50" />
            </>
          ) : (
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          )}
          <div
            className="absolute inset-0 opacity-[0.03]"
            aria-hidden
            style={{
              backgroundImage: `linear-gradient(hsl(${data.color}) 1px, transparent 1px), linear-gradient(90deg, hsl(${data.color}) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto px-4 md:px-8 relative">
            {/* Breadcrumb trail (visible) */}
            <nav aria-label="Breadcrumb" className="text-xs md:text-sm text-primary-foreground/60 mb-6">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
                </li>
                <li aria-hidden>/</li>
                {industry ? (
                  <li className="text-primary-foreground/80">Industries</li>
                ) : (
                  <li>
                    <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
                  </li>
                )}
                <li aria-hidden>/</li>
                <li className="text-primary-foreground/90 font-medium">{shortName}</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">{data.tagline}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mt-3 mb-5">
                {data.title}
              </h1>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">{data.description}</p>
              <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2 text-sm font-semibold">
                {industry
                  ? `Talk to a ${shortName} Solutions Architect`
                  : `Talk to a ${shortName} Expert`}{" "}
                <ArrowRight size={16} />
              </Link>
              <p className="mt-4 text-xs text-primary-foreground/50">
                30-min discovery call · No obligation · Reply within 24 hrs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── Key Business Benefits ─── */}
        <section id="benefits" className="section-padding bg-background scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Key Benefits</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Why leading enterprises choose Accuriantech for {data.title.toLowerCase()}.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {data.whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3 p-5 rounded-xl border border-border/60 bg-card hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: `hsl(${data.color})` }} />
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Capabilities Grid ─── */}
        <section id="capabilities" className="section-padding relative scroll-mt-24" style={{ backgroundColor: `hsl(${data.color} / 0.03)` }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Capabilities</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Comprehensive service capabilities tailored for enterprise environments.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.sections.map((section, i) => (
                <motion.div
                  key={section.heading}
                  {...fadeUp}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-border/60 bg-card p-7 hover:shadow-lg hover:border-border transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `hsl(${data.color} / 0.1)` }}
                  >
                    <section.icon size={24} style={{ color: `hsl(${data.color})` }} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2 leading-snug">{section.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{section.description}</p>
                  <ul className="space-y-2.5">
                    {section.items.slice(0, 5).map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[13px] text-foreground/80 leading-relaxed">
                        <CheckCircle2 size={13} className="shrink-0 mt-[3px]" style={{ color: `hsl(${data.color})` }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Mid-page Inline CTA ─── */}
        <section className="bg-background pt-2 pb-2">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-gradient-to-r from-white to-[hsl(220_30%_97%)] px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="max-w-2xl">
                <p className="font-heading font-semibold text-foreground text-base md:text-lg leading-snug">
                  {industry
                    ? `Mapping technology priorities for ${shortName.toLowerCase()}?`
                    : `Stuck on ${shortName.toLowerCase()} planning?`}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Book a 30-min consult — we'll outline the lowest-risk path for your team.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shrink-0"
              >
                Book a Consult <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── Problems We Solve ─── */}
        {data.problems && data.problems.length > 0 && (
          <section id="problems" className="section-padding bg-background scroll-mt-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Problems We Solve</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  Common challenges our clients face before partnering with us.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {data.problems.map((problem, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 p-5 rounded-xl border border-border/60 bg-card"
                  >
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-destructive/70" />
                    <span className="text-sm text-foreground leading-relaxed">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Use Cases ─── */}
        {data.useCases && data.useCases.length > 0 && (
          <section id="use-cases" className="section-padding relative scroll-mt-24" style={{ backgroundColor: `hsl(${data.color} / 0.03)` }}>
            <div className="container mx-auto px-4 md:px-8">
              <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Use Cases</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  Real-world scenarios where our services deliver measurable impact.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {data.useCases.map((uc, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3 p-5 rounded-xl border border-border/60 bg-card"
                  >
                    <Lightbulb size={18} className="shrink-0 mt-0.5" style={{ color: `hsl(${data.color})` }} />
                    <span className="text-sm text-foreground leading-relaxed">{uc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Industries Served / Recommended Services (chips) ─── */}
        <section
          id={industry ? "recommended-services" : "industries"}
          className="py-14 md:py-16 bg-background border-y border-border/60 scroll-mt-24"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {industry
                  ? `Recommended services for ${shortName}`
                  : `${shortName} for every industry`}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm md:text-base">
                {industry
                  ? `Practice areas commonly engaged by ${data.title.toLowerCase()} teams.`
                  : `We deliver ${data.title.toLowerCase()} across regulated and high-growth sectors.`}
              </p>
            </motion.div>
            <ul
              className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto"
              aria-label={industry ? "Recommended services" : "Industries served"}
            >
              {industry
                ? SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={s.path}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all"
                      >
                        <s.icon size={14} className="text-accent" />
                        {s.short}
                      </Link>
                    </li>
                  ))
                : INDUSTRIES.map((ind) => (
                    <li key={ind.slug}>
                      <Link
                        to={ind.path}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all"
                      >
                        <ind.icon size={14} className="text-accent" />
                        {ind.name}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>
        </section>

        {/* ─── Delivery Process ─── */}
        <section id="process" className="section-padding bg-background scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Delivery Process</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                A proven methodology from discovery to continuous optimization.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {deliverySteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-center relative"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `hsl(${data.color} / 0.1)` }}
                  >
                    <step.icon size={24} style={{ color: `hsl(${data.color})` }} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </span>
                  <h3 className="text-sm font-heading font-bold text-foreground mt-1 mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  {i < deliverySteps.length - 1 && (
                    <ArrowRight size={16} className="hidden lg:block absolute top-7 -right-3 text-muted-foreground/40" aria-hidden />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Related Services ─── */}
        {related.length > 0 && (
          <section id="related" className="section-padding bg-[hsl(220_30%_97%)] scroll-mt-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-10">
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
                  Pairs Well With
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Services teams often combine with {shortName}
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {related.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    {...fadeUp}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      to={s.path}
                      className="block h-full rounded-2xl border border-border/60 bg-card p-6 hover:border-accent/35 hover:shadow-[0_16px_40px_-22px_hsl(220_70%_35%_/_0.25)] hover:-translate-y-1 transition-all group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-4">
                        <s.icon size={20} className="text-accent" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {s.outcome}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                        Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── FAQs ─── */}
        {data.faqs && data.faqs.length > 0 && (
          <section id="faq" className="section-padding bg-background scroll-mt-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-10">
                <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                  <HelpCircle size={14} />
                  FAQs
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {shortName} questions, answered
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  The questions teams ask most often before engaging us.
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-card px-2 md:px-6">
                <Accordion type="single" collapsible className="w-full">
                  {data.faqs.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                      <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base font-semibold">
                        {f.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* ─── Final CTA ─── */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden p-12 md:p-16 text-center relative"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div className="absolute inset-0 opacity-15" aria-hidden>
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px]"
                  style={{ backgroundColor: `hsl(${data.color})` }}
                />
              </div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                  Ready to transform your business?
                </h2>
                <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
                  Let's discuss how our {data.title.toLowerCase()} expertise can accelerate your goals.
                </p>
                <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2 font-semibold">
                  Talk to an IT Solutions Architect <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicePageLayout;

/** Re-export for service pages that import from here. */
export type { LucideIcon };
