import ServicePageLayout, { ServicePageData } from "@/components/ServicePageLayout";
import { Briefcase, Cloud, Shield, BarChart3, Settings, Server } from "lucide-react";

const data: ServicePageData = {
  title: "Enterprise Solutions",
  tagline: "Scaling Operations for Large Organizations",
  description: "We partner with enterprise organizations to modernize legacy systems, streamline operations at scale, and build resilient IT ecosystems that drive growth and efficiency across departments.",
  color: "221 58% 31%",
  heroImage: "/industries/enterprise.png",
  canonicalPath: "/industries/enterprise",
  seoKeywords: "enterprise IT solutions, digital transformation, ERP consulting, enterprise cloud migration",
  hideDeliveryProcess: true,
  businessOutcomes: {
    title: "Business Outcomes We Enable",
    subtitle: "Measurable impact for enterprises through end-to-end digital transformation.",
    outcomes: [
      { metric: "40%", label: "Faster Delivery", description: "Reduced time-to-market through agile development and DevOps practices." },
      { metric: "60%", label: "Cost Optimization", description: "Lower infrastructure costs through cloud migration and FinOps." },
      { metric: "99.9%", label: "Uptime SLA", description: "Enterprise-grade availability for mission-critical business applications." },
      { metric: "3x", label: "Team Scalability", description: "Rapid team scaling through dedicated teams and staff augmentation." },
      { metric: "50%", label: "Process Automation", description: "Reduction in manual operations through intelligent workflow automation." },
      { metric: "360°", label: "Customer View", description: "Unified customer data across CRM, ERP, and analytics platforms." },
    ],
  },
  sections: [
    {
      icon: Cloud,
      heading: "Enterprise Cloud Transformation",
      description: "Modernize infrastructure to support global operations with agility and security.",
      items: [
        "Multi-cloud and hybrid cloud strategy development",
        "Legacy application re-platforming and modernization",
        "Enterprise-grade Azure and AWS architecture",
        "Global disaster recovery and business continuity",
        "FinOps and cloud cost governance at scale",
        "Landing zone setup and cloud foundation frameworks",
      ],
    },
    {
      icon: Settings,
      heading: "Salesforce at Enterprise Scale",
      description: "Unify sales, service, and operations with customized Salesforce ecosystems.",
      items: [
        "Multi-org Salesforce strategy and governance",
        "Enterprise integration with ERP and legacy systems",
        "Custom app development on Salesforce Platform",
        "AI-powered sales forecasting and pipeline management",
        "Change management and user adoption programs",
        "Salesforce Health Check and technical debt reduction",
      ],
    },
    {
      icon: Server,
      heading: "ServiceNow Enterprise Operations",
      description: "Streamline ITSM, HR, and operational workflows across the organization.",
      items: [
        "ServiceNow ITSM, ITOM, and ITBM implementation",
        "HR Service Delivery and employee experience portals",
        "Automated change and incident management",
        "CMDB design and configuration management",
      ],
    },
    {
      icon: Shield,
      heading: "Enterprise Security & SAP GRC",
      description: "Protect enterprise assets with comprehensive security and compliance programs.",
      items: [
        "SAP GRC access control and segregation of duties",
        "Enterprise identity governance and PAM",
        "Security operations center (SOC) design and staffing",
        "Compliance automation for SOX, GDPR, and HIPAA",
      ],
    },
    {
      icon: BarChart3,
      heading: "Enterprise BI & Data Strategy",
      description: "Build a data-driven culture with enterprise-wide analytics and reporting.",
      items: [
        "Enterprise Power BI deployment and governance",
        "Data lake and data warehouse architecture",
        "Executive dashboards and KPI frameworks",
        "Data quality management and master data governance",
      ],
    },
    {
      icon: Briefcase,
      heading: "Managed Services & Outsourcing",
      description: "Offload routine IT operations to focus on strategic business initiatives.",
      items: [
        "24/7 managed infrastructure and application support",
        "Dedicated offshore and nearshore teams",
        "SLA-driven service delivery with transparent reporting",
        "Continuous improvement and proactive optimization",
      ],
    },
  ],
  whyChoose: [
    "Experience managing IT estates for Fortune 500 and mid-market enterprises",
    "Certified teams across Salesforce, SAP, Azure, AWS, and ServiceNow",
    "Proven methodologies for large-scale digital transformation programs",
    "Global delivery model with offices in India, US, and worldwide presence",
    "Flexible engagement models â€” project-based, staff augmentation, or managed services",
    "Strong governance frameworks ensuring accountability and transparency",
  ],
};

const EnterpriseIndustry = () => <ServicePageLayout data={data} />;
export default EnterpriseIndustry;

