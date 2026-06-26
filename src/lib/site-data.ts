/**
 * Shared site metadata used by the homepage, footer, related services,
 * and service-page cross-linking blocks.
 *
 * Keeping a single source of truth prevents copy drift between
 * Navbar / Footer / ServicesGrid / ServicePageLayout.
 */
import {
  Settings,
  BarChart3,
  Cloud,
  Monitor,
  Shield,
  Server,
  Database,
  Brain,
  Code2,
  Building2,
  Landmark,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export interface ServiceMeta {
  slug: string;
  title: string;
  short: string;
  /** Outcome-led one-liner used on cards. ≤ 16 words. */
  outcome: string;
  path: string;
  icon: LucideIcon;
}

export interface IndustryMeta {
  slug: string;
  name: string;
  path: string;
  icon: LucideIcon;
}

export const SERVICES: ServiceMeta[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "AI Solutions",
    outcome: "Put AI to work — automate decisions, surface insights, and cut manual effort.",
    path: "/services/ai-solutions",
    icon: Brain,
  },
  {
    slug: "software-development",
    title: "Software Development",
    short: "Software Dev",
    outcome: "Custom software and integrations built to fit how your business actually runs.",
    path: "/services/software-development",
    icon: Code2,
  },
  {
    slug: "salesforce",
    title: "Salesforce Development",
    short: "Salesforce",
    outcome: "Build CRM, Commerce, and AI agents that scale across teams and regions.",
    path: "/services/salesforce",
    icon: Settings,
  },
  {
    slug: "powerbi",
    title: "Power BI & Analytics",
    short: "Power BI",
    outcome: "Turn scattered data into executive dashboards that drive faster decisions.",
    path: "/services/powerbi",
    icon: BarChart3,
  },
  {
    slug: "cloud",
    title: "Cloud Solutions (Azure/AWS)",
    short: "Cloud",
    outcome: "Architect, migrate, and run secure cloud environments with predictable cost.",
    path: "/services/cloud",
    icon: Cloud,
  },
  {
    slug: "managed-it",
    title: "Managed IT Services",
    short: "Managed IT",
    outcome: "SLA-backed infrastructure operations so your team focuses on growth.",
    path: "/services/managed-it",
    icon: Monitor,
  },
  {
    slug: "network-security",
    title: "Network & Security",
    short: "Security",
    outcome: "Continuous protection across endpoints, networks, and access perimeters.",
    path: "/services/network-security",
    icon: Shield,
  },
  {
    slug: "servicenow",
    title: "ServiceNow Development",
    short: "ServiceNow",
    outcome: "Automate ITSM, HRSD, and custom workflows on a single platform.",
    path: "/services/servicenow",
    icon: Server,
  },
  {
    slug: "sap",
    title: "SAP Security & SAP BTP/Cloud",
    short: "SAP",
    outcome: "Lock down SAP access, GRC, and BTP environments with audit-ready controls.",
    path: "/services/sap",
    icon: Database,
  },
];

export const INDUSTRIES: IndustryMeta[] = [
  { slug: "technology", name: "Technology", path: "/industries/technology", icon: Building2 },
  { slug: "finance", name: "Finance", path: "/industries/finance", icon: Landmark },
  { slug: "healthcare", name: "Healthcare", path: "/industries/healthcare", icon: HeartPulse },
  { slug: "education", name: "Education", path: "/industries/education", icon: GraduationCap },
  { slug: "enterprise", name: "Enterprise", path: "/industries/enterprise", icon: Briefcase },
  { slug: "government", name: "Government", path: "/industries/government", icon: Globe2 },
];

/**
 * Curated cross-links between services. Each service surfaces three
 * complementary services in its "Pairs Well With" block, driving crawl
 * depth and on-site dwell.
 */
export const RELATED_SERVICES: Record<string, string[]> = {
  "ai-solutions": ["software-development", "powerbi", "salesforce"],
  "software-development": ["ai-solutions", "cloud", "salesforce"],
  salesforce: ["powerbi", "ai-solutions", "servicenow"],
  powerbi: ["ai-solutions", "salesforce", "cloud"],
  cloud: ["managed-it", "network-security", "software-development"],
  "managed-it": ["cloud", "network-security", "servicenow"],
  "network-security": ["managed-it", "cloud", "sap"],
  servicenow: ["managed-it", "salesforce", "software-development"],
  sap: ["network-security", "cloud", "powerbi"],
};

export const SERVICE_BY_SLUG: Record<string, ServiceMeta> = SERVICES.reduce(
  (acc, s) => ({ ...acc, [s.slug]: s }),
  {} as Record<string, ServiceMeta>,
);

/** Default industries surfaced on every service page. */
export const SERVICE_INDUSTRY_LINKS: IndustryMeta[] = INDUSTRIES;
