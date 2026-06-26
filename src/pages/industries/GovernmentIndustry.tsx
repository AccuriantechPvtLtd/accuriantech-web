import ServicePageLayout, { ServicePageData } from "@/components/ServicePageLayout";
import { Globe2, Shield, Cloud, BarChart3, Users, Lock } from "lucide-react";

const data: ServicePageData = {
  title: "Government & Public Sector Solutions",
  tagline: "Modernizing Public Services with Secure IT",
  description: "We help government agencies and public sector organizations deliver better citizen services, modernize legacy infrastructure, and maintain the highest standards of security and compliance.",
  color: "200 60% 35%",
  heroImage: "/industries/government.png",
  canonicalPath: "/industries/government",
  seoKeywords: "government IT solutions, public sector technology, FedRAMP compliance, citizen services modernization",
  sections: [
    {
      icon: Shield,
      heading: "Security & Compliance Frameworks",
      description: "Meet stringent government security requirements with proven compliance solutions.",
      items: [
        "FedRAMP and FISMA compliance readiness",
        "NIST Cybersecurity Framework implementation",
        "CJIS security policy compliance for law enforcement",
        "Classified and unclassified network security",
        "Continuous monitoring and authorization (ConMon)",
        "Supply chain risk management (SCRM) programs",
      ],
    },
    {
      icon: Cloud,
      heading: "Government Cloud (GovCloud)",
      description: "Deploy secure, compliant cloud infrastructure built for public sector needs.",
      items: [
        "Azure Government and AWS GovCloud deployments",
        "Legacy system migration with zero downtime",
        "Sovereign cloud strategies for data residency",
        "Multi-agency shared services platforms",
        "Cloud-based disaster recovery for critical systems",
        "Cost-effective cloud optimization for public budgets",
      ],
    },
    {
      icon: Users,
      heading: "Citizen Experience & Digital Services",
      description: "Deliver modern, accessible digital services that put citizens first.",
      items: [
        "Citizen portal development and modernization",
        "Salesforce Government Cloud CRM implementation",
        "Case management and workflow automation",
        "Accessibility compliance (Section 508 / WCAG)",
      ],
    },
    {
      icon: BarChart3,
      heading: "Data Analytics & Transparency",
      description: "Enable data-driven governance and public accountability through analytics.",
      items: [
        "Open data platforms and public dashboards",
        "Performance management and KPI tracking",
        "Grant management analytics and reporting",
        "Predictive analytics for resource allocation",
      ],
    },
    {
      icon: Lock,
      heading: "Identity & Access Management",
      description: "Secure government systems with robust identity governance.",
      items: [
        "PIV/CAC-based authentication systems",
        "Zero-trust architecture for government networks",
        "Privileged access management (PAM) implementation",
        "Single sign-on across inter-agency systems",
      ],
    },
    {
      icon: Globe2,
      heading: "Managed IT for Government",
      description: "Reliable, mission-critical IT operations with government-grade SLAs.",
      items: [
        "24/7 network and infrastructure monitoring",
        "ServiceNow ITSM for government IT operations",
        "Endpoint management and mobile device security",
        "Help desk services with tiered support models",
      ],
    },
  ],
  whyChoose: [
    "Proven experience with federal, state, and local government agencies",
    "Deep understanding of FedRAMP, FISMA, NIST, and CJIS requirements",
    "Cleared personnel available for sensitive government projects",
    "Agile delivery tailored to government procurement cycles",
    "Strong partnerships with Azure Government and AWS GovCloud",
    "Commitment to transparency, accountability, and public value",
  ],
};

const GovernmentIndustry = () => <ServicePageLayout data={data} />;
export default GovernmentIndustry;

