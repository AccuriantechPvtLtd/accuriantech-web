import ServicePageLayout, { ServicePageData } from "@/components/ServicePageLayout";
import { Landmark, Shield, BarChart3, Cloud, Lock, FileCheck } from "lucide-react";

const data: ServicePageData = {
  title: "Finance Industry Solutions",
  tagline: "Secure, Compliant & Intelligent Financial IT",
  description: "We help financial institutions modernize operations, strengthen security, and leverage data analytics to deliver superior client experiences while maintaining regulatory compliance.",
  color: "250 50% 45%",
  heroImage: "/industries/finance.png",
  canonicalPath: "/industries/finance",
  seoKeywords: "finance IT solutions, banking technology, financial compliance, fintech consulting",
  hideDeliveryProcess: true,
  businessOutcomes: {
    title: "Business Outcomes We Enable",
    subtitle: "Measurable impact for financial institutions through technology transformation.",
    outcomes: [
      { metric: "99.9%", label: "System Uptime", description: "Mission-critical platform availability for trading and banking operations." },
      { metric: "60%", label: "Faster Compliance", description: "Reduction in manual compliance effort through automation and GRC tools." },
      { metric: "45%", label: "Cost Reduction", description: "Lower operational costs through cloud migration and process automation." },
      { metric: "3x", label: "Faster Reporting", description: "Accelerated financial reporting with real-time dashboards and analytics." },
      { metric: "100%", label: "Audit Readiness", description: "Always audit-ready with automated trails and regulatory documentation." },
      { metric: "24/7", label: "Threat Monitoring", description: "Continuous security monitoring protecting sensitive financial data." },
    ],
  },
  sections: [
    {
      icon: Shield,
      heading: "Regulatory Compliance & Risk Management",
      description: "Stay ahead of evolving regulations with automated compliance frameworks.",
      items: [
        "SOX, PCI-DSS, and Basel III compliance automation",
        "Anti-money laundering (AML) monitoring systems",
        "KYC process digitization and automation",
        "Risk assessment dashboards and real-time alerts",
        "Audit trail management and reporting",
        "Regulatory change management workflows",
      ],
    },
    {
      icon: Lock,
      heading: "Cybersecurity & Data Protection",
      description: "Protect sensitive financial data with enterprise-grade security solutions.",
      items: [
        "Advanced threat detection and response (EDR/XDR)",
        "Fraud detection using AI and machine learning",
        "Secure transaction processing infrastructure",
        "Identity and access management (IAM)",
        "Data loss prevention and encryption strategies",
        "Security operations center (SOC) setup and management",
      ],
    },
    {
      icon: BarChart3,
      heading: "Business Intelligence & Analytics",
      description: "Transform financial data into strategic insights for better decision-making.",
      items: [
        "Real-time financial reporting dashboards",
        "Portfolio performance analytics",
        "Customer segmentation and lifetime value analysis",
        "Predictive models for credit scoring and risk",
      ],
    },
    {
      icon: Cloud,
      heading: "Cloud Modernization",
      description: "Migrate legacy systems to secure, scalable cloud infrastructure.",
      items: [
        "Hybrid cloud strategies for banking workloads",
        "Core banking system modernization",
        "API-first architecture for open banking",
        "Disaster recovery and business continuity planning",
      ],
    },
    {
      icon: Landmark,
      heading: "Salesforce Financial Services Cloud",
      description: "Deliver personalized client experiences with tailored CRM solutions.",
      items: [
        "Wealth management and advisor productivity tools",
        "Client onboarding automation",
        "360-degree client view across all accounts",
        "Automated compliance workflows within CRM",
      ],
    },
    {
      icon: FileCheck,
      heading: "SAP & ERP Solutions",
      description: "Optimize financial operations with secure, integrated enterprise systems.",
      items: [
        "SAP S/4HANA migration for finance modules",
        "SAP GRC implementation for access controls",
        "Financial close automation and reconciliation",
        "Treasury management and cash flow optimization",
      ],
    },
  ],
  whyChoose: [
    "Deep understanding of financial regulations across global markets",
    "Proven security frameworks protecting billions in transactions",
    "Experience with top banks, insurance firms, and fintech startups",
    "Compliance-first approach embedded in every solution",
    "24/7 managed services with SLA-backed response times",
    "Certified professionals across Salesforce, SAP, Azure, and AWS",
  ],
};

const FinanceIndustry = () => <ServicePageLayout data={data} />;
export default FinanceIndustry;

