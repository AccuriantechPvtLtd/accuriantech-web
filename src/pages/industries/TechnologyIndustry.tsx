import ServicePageLayout, { ServicePageData } from "@/components/ServicePageLayout";
import { Code2, Cloud, Shield, Cpu, BarChart3, Rocket } from "lucide-react";

const data: ServicePageData = {
  title: "Technology Industry Solutions",
  tagline: "Accelerating Innovation for Tech Companies",
  description: "We empower technology companies to scale faster, optimize cloud infrastructure, and build secure, high-performance platforms that drive competitive advantage.",
  color: "218 79% 46%",
  heroImage: "/industries/technology.png",
  canonicalPath: "/industries/technology",
  seoKeywords: "IT solutions for tech companies, cloud infrastructure, DevOps consulting, technology consulting services",
  hideDeliveryProcess: true,
  businessOutcomes: {
    title: "Business Outcomes We Enable",
    subtitle: "Measurable impact for technology companies through scalable infrastructure and engineering.",
    outcomes: [
      { metric: "10x", label: "Deployment Speed", description: "Faster release cycles through CI/CD automation and DevOps." },
      { metric: "99.99%", label: "Platform Uptime", description: "High-availability architecture for SaaS and product platforms." },
      { metric: "50%", label: "Infra Cost Savings", description: "Optimized cloud spend through FinOps and right-sizing." },
      { metric: "3x", label: "Engineering Output", description: "Increased velocity with dedicated teams and staff augmentation." },
      { metric: "Zero", label: "Security Incidents", description: "Proactive security with DevSecOps and continuous monitoring." },
      { metric: "Auto", label: "Scaling", description: "Infrastructure that scales automatically with demand peaks." },
    ],
  },
  sections: [
    {
      icon: Cloud,
      heading: "Cloud-Native Architecture",
      description: "Build resilient, scalable infrastructure on Azure and AWS tailored for SaaS and platform companies.",
      items: [
        "Multi-cloud strategy and migration planning",
        "Kubernetes orchestration and container management",
        "Auto-scaling infrastructure for variable workloads",
        "Cost optimization and FinOps implementation",
        "CI/CD pipeline design and automation",
        "Disaster recovery and high availability setups",
      ],
    },
    {
      icon: Shield,
      heading: "Security & Compliance",
      description: "Protect your IP, customer data, and meet compliance requirements across global markets.",
      items: [
        "SOC 2 and ISO 27001 readiness assessments",
        "Penetration testing and vulnerability management",
        "Zero-trust network architecture implementation",
        "Data encryption and key management strategies",
        "Security incident response planning",
        "GDPR and CCPA compliance frameworks",
      ],
    },
    {
      icon: Cpu,
      heading: "AI & Automation",
      description: "Leverage AI-driven automation to accelerate product development and streamline operations.",
      items: [
        "Intelligent process automation for dev workflows",
        "AI-powered monitoring and anomaly detection",
        "Machine learning model deployment pipelines",
        "Automated testing and quality assurance",
      ],
    },
    {
      icon: BarChart3,
      heading: "Data Analytics & BI",
      description: "Turn your product data into actionable insights that drive better decisions.",
      items: [
        "Real-time analytics dashboards with Power BI",
        "Product usage analytics and user behavior tracking",
        "Data warehouse design and ETL pipelines",
        "Predictive analytics for churn and growth",
      ],
    },
    {
      icon: Code2,
      heading: "Salesforce & CRM Integration",
      description: "Streamline your sales and customer success workflows with custom Salesforce solutions.",
      items: [
        "Custom Salesforce development for SaaS billing",
        "CRM integration with product platforms",
        "Automated lead scoring and pipeline management",
        "Customer 360 views across all touchpoints",
      ],
    },
    {
      icon: Rocket,
      heading: "Managed IT & Support",
      description: "Focus on building your product while we manage your IT infrastructure.",
      items: [
        "24/7 infrastructure monitoring and support",
        "Helpdesk and IT service management with ServiceNow",
        "Endpoint management and device security",
        "Network performance optimization",
      ],
    },
  ],
  whyChoose: [
    "Deep expertise in cloud-native technologies and modern architectures",
    "Proven track record with SaaS, PaaS, and platform companies globally",
    "Security-first approach aligned with enterprise compliance standards",
    "Scalable engagement models â€” from startup to enterprise scale",
    "End-to-end support from strategy to implementation and managed services",
    "Dedicated teams with deep domain expertise in tech industry challenges",
  ],
};

const TechnologyIndustry = () => <ServicePageLayout data={data} />;
export default TechnologyIndustry;

