import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Shield, Lock, Cpu, Database, Code2, Users, Search, PenTool, Rocket, TestTube, TrendingUp } from "lucide-react";

const data: ServicePageData = {
  title: "SAP Solutions",
  shortName: "SAP",
  slug: "sap",
  tagline: "End-to-End SAP Consulting, Implementation & Support",
  canonicalPath: "/services/sap",
  seoKeywords: "SAP consulting services, SAP ABAP development, SAP FICO, SAP MM, SAP HRMS, SAP security, SAP BTP, SAP S/4HANA, SAP implementation, SAP support",
  description: "Comprehensive SAP services covering all modules — ABAP, FICO, MM, SD, HRMS, Security, BTP, Cloud, Basis, and S/4HANA — from implementation to ongoing support.",
  color: "205 100% 40%",
  heroImage: "/services/sap.png",
  sections: [
    {
      icon: Code2,
      heading: "SAP ABAP Development",
      description: "Custom ABAP development, enhancements, and integrations to extend your SAP landscape.",
      items: [
        "Custom reports, ALV, and Smart Forms development",
        "BAPIs, BAdIs, User Exits, and enhancement implementations",
        "RFC/IDoc interfaces and third-party integrations",
        "SAP Fiori and UI5 application development",
        "Performance tuning and code optimization",
      ],
    },
    {
      icon: Database,
      heading: "SAP Functional Modules (FICO, MM, SD, HRMS)",
      description: "Implementation, configuration, and support for all core SAP functional modules.",
      items: [
        "SAP FICO — General Ledger, AP/AR, Asset Accounting, Cost Center, Profit Center, and Financial Reporting",
        "SAP MM — Procurement, Inventory Management, MRP, Vendor Management, and Warehouse",
        "SAP SD — Sales Order, Pricing, Billing, Shipping, and Revenue Recognition",
        "SAP HRMS/HCM — Personnel Administration, Payroll, Time Management, and Talent Management",
        "SAP PP — Production Planning, BOM, Routing, and Shop Floor Control",
      ],
    },
    {
      icon: Shield,
      heading: "SAP Security & GRC",
      description: "Enterprise SAP security with role design, access governance, and regulatory compliance.",
      items: [
        "Role design with PFCG — single, composite, and derived roles",
        "Segregation of Duties (SoD) analysis using SAP GRC",
        "User administration, SSO, and MFA integration",
        "SOX, GDPR, and audit compliance readiness",
        "Emergency access (firefighter) management and periodic reviews",
      ],
    },
    {
      icon: Cpu,
      heading: "SAP BTP & Cloud",
      description: "SAP Business Technology Platform, S/4HANA Cloud, and hybrid deployment services.",
      items: [
        "SAP BTP application development and extensions",
        "S/4HANA Cloud and on-premise migration",
        "Integration Suite — CPI/API Management for third-party connectivity",
        "SAP Analytics Cloud (SAC) dashboards and planning",
        "Hybrid landscape architecture and trust management",
      ],
    },
    {
      icon: Lock,
      heading: "SAP Basis & Administration",
      description: "System administration, performance monitoring, and infrastructure management for SAP.",
      items: [
        "SAP Basis administration — system installations, upgrades, and patching",
        "Transport management and landscape configuration",
        "Performance monitoring and tuning (ST05, SE30, STAD)",
        "Database administration (HANA, Oracle, SQL Server)",
        "Disaster recovery planning and high availability setup",
      ],
    },
    {
      icon: Users,
      heading: "SAP Support & Managed Services",
      description: "Ongoing support, maintenance, and optimization for your entire SAP environment.",
      items: [
        "L1/L2/L3 application support for all SAP modules",
        "Monthly health checks and proactive issue resolution",
        "Patch management and security updates",
        "User training and knowledge transfer",
        "SLA-backed support with defined response times",
      ],
    },
  ],
  whyChoose: [
    "Full-stack SAP expertise — ABAP, Functional, Security, Basis, BTP, and Cloud",
    "Certified SAP consultants across all major modules",
    "Experience with both ECC and S/4HANA environments",
    "Flexible engagement models — project, dedicated team, or managed services",
    "Global delivery supporting clients across all timezones",
    "End-to-end SAP lifecycle — assess, design, implement, support, optimize",
  ],
  problems: [
    "Legacy SAP systems needing modernization to S/4HANA",
    "Complex custom ABAP code that needs refactoring or optimization",
    "Audit findings on access control and SoD violations",
    "Lack of in-house SAP expertise across multiple modules",
    "Integration challenges between SAP and third-party systems",
    "High cost of SAP operations without clear ROI visibility",
  ],
  useCases: [
    "Manufacturing companies implementing SAP MM and PP for end-to-end supply chain visibility.",
    "Finance teams deploying SAP FICO with automated reporting and intercompany accounting.",
    "HR departments transforming employee lifecycle with SAP HRMS and SuccessFactors integration.",
    "Enterprises migrating from ECC to S/4HANA with custom code remediation and role redesign.",
    "Global organizations extending SAP with BTP applications and Integration Suite connectivity.",
    "Companies achieving SOX compliance through GRC Access Control and periodic access reviews.",
  ],
  faqs: [
    {
      question: "Which SAP modules do you cover?",
      answer:
        "We cover all major SAP modules including ABAP, FICO, MM, SD, PP, HRMS/HCM, Security & GRC, Basis, BTP, S/4HANA, and SAP Analytics Cloud. Our team handles both functional and technical consulting.",
    },
    {
      question: "Do you support both SAP ECC and S/4HANA?",
      answer:
        "Yes. We work with both ECC and S/4HANA environments, including greenfield and brownfield migrations, custom code adaptation, and Fiori UX implementation.",
    },
    {
      question: "Can you help with SAP to S/4HANA migration?",
      answer:
        "Yes — including assessment, custom code remediation, data migration, role redesign, testing, and go-live support. We handle both technical and change management aspects.",
    },
    {
      question: "Do you provide ongoing SAP support?",
      answer:
        "Yes. We offer managed SAP services with L1/L2/L3 support, monthly health checks, security patching, user access reviews, and continuous optimization — all SLA-backed.",
    },
    {
      question: "How do you handle SAP integrations?",
      answer:
        "We use SAP CPI (Integration Suite), RFC/IDoc, BAPIs, and REST/OData APIs to integrate SAP with Salesforce, ServiceNow, Power BI, cloud platforms, and custom applications.",
    },
    {
      question: "What's your engagement model for SAP projects?",
      answer:
        "We offer project-based delivery, dedicated SAP teams, staff augmentation (individual consultants), and managed services. The model depends on your scope, timeline, and budget.",
    },
  ],
  deliveryTitle: "SAP Delivery Process",
  deliverySubtitle: "End-to-end SAP implementation from blueprinting to go-live and beyond.",
  deliverySteps: [
    { icon: Search, title: "Blueprint & Scoping", desc: "Understand business processes, gaps, and SAP fit." },
    { icon: PenTool, title: "Configuration & Design", desc: "Configure modules, design custom ABAP, and integrations." },
    { icon: Rocket, title: "Build & Unit Test", desc: "Develop, configure, and unit test all workstreams." },
    { icon: TestTube, title: "Integration & UAT", desc: "End-to-end integration testing and user acceptance." },
    { icon: TrendingUp, title: "Go-Live & Support", desc: "Cutover, hypercare, and ongoing managed support." },
  ],
};

const SAPService = () => <ServicePageLayout data={data} />;
export default SAPService;
