import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Brain, ShoppingCart, Users, Workflow, Globe, Search, PenTool, Rocket, TestTube, TrendingUp } from "lucide-react";

const data: ServicePageData = {
  title: "Salesforce Development",
  shortName: "Salesforce",
  slug: "salesforce",
  tagline: "AI, CRM & Digital Transformation",
  canonicalPath: "/services/salesforce",
  seoKeywords: "Salesforce development company, Salesforce consulting, Agentforce AI, CRM solutions, Salesforce Commerce Cloud, Salesforce integration services",
  description: "From autonomous AI agents to multi-cloud CRM and headless e-commerce, we deliver end-to-end Salesforce solutions that drive digital transformation at enterprise scale.",
  color: "215 80% 50%",
  heroImage: "/services/salesforce.png",
  sections: [
    {
      icon: Brain,
      heading: "AI & Advanced Data Consulting",
      description: "Harness Salesforce AI and Data Cloud to automate workflows and deliver intelligent customer experiences.",
      items: [
        "Agentforce autonomous AI agents for sales and service",
        "Data Cloud + RAG with Azure, AWS, and Google Cloud",
        "Einstein lead scoring and next-best-action insights",
        "AI chatbots for 24/7 support and lead qualification",
        "Predictive analytics with Calculated Insights",
      ],
    },
    {
      icon: ShoppingCart,
      heading: "E-Commerce & Digital Transformation",
      description: "Build high-performance commerce experiences with Salesforce Commerce Cloud and headless architecture.",
      items: [
        "B2C Commerce Cloud with PWA Kit headless storefronts",
        "Payments via Mastercard, PayPal, Apple Pay, Cybersource",
        "Loyalty, subscription, and personalized checkout flows",
        "Omnichannel commerce across web, mobile, and in-store",
        "Multi-currency and multi-language global storefronts",
      ],
    },
    {
      icon: Users,
      heading: "CRM & Multi-Cloud Solutions",
      description: "Strategic implementation across Sales, Service, Experience, and industry-specific Salesforce clouds.",
      items: [
        "Sales, Service, Experience, and Marketing Cloud setup",
        "Health, Financial Services, and Manufacturing Cloud",
        "Automation with Flow, OmniStudio, and custom LWC",
        "Migration from Dynamics, SAP, and HubSpot CRMs",
        "Custom dashboards for executive and ops visibility",
      ],
    },
    {
      icon: Workflow,
      heading: "Integration & Automation",
      description: "Connect Salesforce to your full tech stack via APIs, events, and intelligent process automation.",
      items: [
        "MuleSoft and Salesforce Connect integrations",
        "REST and SOAP APIs for ERP, billing, and legacy apps",
        "Salesforce Flow for approvals and scheduled processes",
        "Platform Events and Change Data Capture in real time",
        "Slack, Teams, SAP, and Oracle enterprise integrations",
      ],
    },
    {
      icon: Globe,
      heading: "Managed Services & Support",
      description: "Ongoing administration, optimization, and advisory to maximize your Salesforce platform ROI.",
      items: [
        "Dedicated Salesforce admins and developers on demand",
        "Quarterly health checks and release readiness reviews",
        "User training, adoption analytics, and change support",
        "SLA-backed support with 4hr, 2hr, and 30min tiers",
        "DevOps with CI/CD, sandbox, and governance frameworks",
      ],
    },
  ],
  whyChoose: [
    "Certified Salesforce architects and developers with 50+ certifications",
    "Multi-cloud expertise across Sales, Service, Commerce, and Data Cloud",
    "Proven delivery across India, US, and global markets",
    "AI-first approach with Agentforce and Einstein integration",
    "End-to-end implementation from strategy to managed services",
    "Deep domain expertise in manufacturing, retail, hospitality, and healthcare",
  ],
  problems: [
    "Disconnected CRM systems creating data silos across departments",
    "Manual sales and service workflows slowing team productivity",
    "Poor customer visibility and inability to track engagement",
    "Legacy CRM platforms that don't scale with business growth",
    "Lack of AI-driven insights for forecasting and decision-making",
    "Complex multi-cloud environments without unified governance",
  ],
  useCases: [
    "Retail companies improving customer insights and loyalty with Salesforce Commerce Cloud.",
    "Manufacturing firms automating order management with Agentforce AI agents.",
    "Healthcare organizations streamlining patient engagement with Health Cloud.",
    "Financial services firms achieving regulatory compliance with automated workflows.",
    "Hospitality brands delivering personalized guest experiences across channels.",
    "Enterprise companies migrating from legacy CRM to Salesforce with zero downtime.",
  ],
  faqs: [
    {
      question: "How long does a typical Salesforce implementation take?",
      answer:
        "Most implementations run between 6 and 16 weeks depending on scope. We start with a 1–2 week discovery, then break delivery into 2-week sprints with weekly demos so you see progress continuously, not just at the end.",
    },
    {
      question: "Do you support Agentforce, Einstein, and Data Cloud rollouts?",
      answer:
        "Yes. We design and deploy Agentforce autonomous agents, configure Einstein scoring and next-best-action, and stand up Data Cloud with RAG patterns connected to Azure, AWS, or Google Cloud.",
    },
    {
      question: "Can you migrate us from HubSpot, Dynamics, or Zoho?",
      answer:
        "We've executed migrations from all three. We map data and processes, run a sandbox cutover, validate with key users, then perform a tightly-controlled production switch with zero downtime where feasible.",
    },
    {
      question: "Do you offer post-launch managed services?",
      answer:
        "Yes — dedicated admins and developers on monthly retainers, with SLA tiers from 4-hour to 30-minute response. Quarterly health checks and release readiness reviews are included.",
    },
    {
      question: "What pricing models do you offer?",
      answer:
        "Fixed-fee for well-scoped projects, time-and-materials for evolving roadmaps, and monthly retainers for managed services. We default to fixed-fee where requirements are stable to keep your budget predictable.",
    },
    {
      question: "Are your developers Salesforce-certified?",
      answer:
        "Every consultant on a Salesforce engagement holds at least one Salesforce certification, with senior architects holding 5+. Certifications cover Admin, Platform Developer I/II, App Builder, and the relevant cloud (Sales, Service, Commerce, Health).",
    },
  ],
  deliveryTitle: "Salesforce Delivery Process",
  deliverySubtitle: "From requirements to a fully configured, adopted Salesforce environment.",
  deliverySteps: [
    { icon: Search, title: "Requirements & Org Audit", desc: "Analyze current setup, business processes, and pain points." },
    { icon: PenTool, title: "Solution Design", desc: "Map requirements to Salesforce features, integrations, and architecture." },
    { icon: Rocket, title: "Configure & Develop", desc: "Build with declarative tools and custom Apex/LWC where needed." },
    { icon: TestTube, title: "UAT & Data Migration", desc: "User acceptance testing and safe data migration." },
    { icon: TrendingUp, title: "Go-Live & Adoption", desc: "Launch with training, hypercare, and change management." },
  ],
};

const SalesforceService = () => <ServicePageLayout data={data} />;
export default SalesforceService;
