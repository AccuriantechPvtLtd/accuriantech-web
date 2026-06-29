import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Layers, Database, Lock, BarChart3, Settings, Search, PenTool, Rocket, TestTube, TrendingUp } from "lucide-react";

const data: ServicePageData = {
  title: "Power BI Consulting",
  shortName: "Power BI",
  slug: "powerbi",
  tagline: "Dashboards, Analytics & Business Intelligence",
  canonicalPath: "/services/powerbi",
  seoKeywords: "Power BI consulting, Power BI dashboard design, business intelligence services, data analytics consulting, DAX Power Query experts",
  description: "Turn raw data into clear, actionable insights with Microsoft Power BI. We design secure, scalable dashboards that empower leadership teams to track performance, predict outcomes, and make faster decisions.",
  color: "210 85% 50%",
  heroImage: "/services/powerbi.png",
  sections: [
    {
      icon: BarChart3,
      heading: "Dashboard Design & Visualization",
      description: "Executive, operational, and real-time dashboards with role-based views for every stakeholder.",
      items: [
        "Executive dashboards for sales, finance, HR, and ops",
        "Interactive KPI tracking and pipeline visualizations",
        "Embedded analytics with Power BI Embedded for apps",
        "Mobile-optimized dashboards for on-the-go decisions",
        "Drill-through reports for deep-dive metric analysis",
      ],
    },
    {
      icon: Database,
      heading: "Data Integration & Modeling",
      description: "Connect every data source into a single source of truth with optimized semantic models.",
      items: [
        "Connectors for Salesforce, Azure SQL, APIs, and Excel",
        "Power Query (M) and DAX for complex transformations",
        "Star-schema and composite semantic model design",
        "Incremental refresh for large enterprise datasets",
        "Real-time streaming dashboards via Azure Event Hubs",
      ],
    },
    {
      icon: Layers,
      heading: "Advanced Analytics & Reporting",
      description: "Go beyond reporting with predictive analytics, AI insights, and compliance-ready reports.",
      items: [
        "Revenue forecasting with what-if scenario modeling",
        "Customer segmentation, cohort, and churn analysis",
        "Compliance reporting for SOX, GDPR, and HIPAA",
        "AI insights with Smart Narratives and Key Influencers",
        "Predictive models with Azure ML and Python visuals",
      ],
    },
    {
      icon: Lock,
      heading: "Security & Governance",
      description: "Enterprise security with role-based access, row-level security, and compliance-ready setup.",
      items: [
        "Role-Based Access Control and Row-Level Security",
        "Workspace permissions and secure dataset sharing",
        "Sensitivity labels with Microsoft Information Protection",
        "Audit logging, usage analytics, and adoption metrics",
        "Premium capacity management and cost optimization",
      ],
    },
    {
      icon: Settings,
      heading: "Migration & Optimization",
      description: "Modernize your BI stack with migration from legacy tools and best-practice governance.",
      items: [
        "Migration from SSRS, Tableau, QlikView, and Crystal",
        "Performance tuning with aggregations and composites",
        "Deployment Pipelines for dev, test, and prod workflows",
        "Center of Excellence setup with training programs",
        "Capacity planning and license cost optimization",
      ],
    },
  ],
  whyChoose: [
    "Deep expertise in Microsoft Azure and analytics ecosystems",
    "Proven integration experience with Salesforce and cloud platforms",
    "Secure, scalable, and performance-optimized BI solutions",
    "Business-focused dashboards, not just visual reports",
    "From startup analytics to enterprise-grade reporting",
    "Ongoing support, training, and continuous improvement programs",
  ],
  problems: [
    "Slow, manual reporting processes delaying business decisions",
    "Data scattered across multiple systems with no single source of truth",
    "Lack of real-time visibility into KPIs and business performance",
    "Legacy BI tools that are expensive and hard to maintain",
    "Inconsistent metrics and definitions across departments",
    "No self-service analytics capabilities for business users",
  ],
  useCases: [
    "Finance teams building real-time dashboards for revenue tracking and forecasting.",
    "Retail chains monitoring store performance with automated daily reports.",
    "Healthcare organizations tracking patient outcomes and operational efficiency.",
    "Manufacturing companies optimizing supply chain with predictive analytics.",
    "Sales teams gaining pipeline visibility with embedded Salesforce-Power BI dashboards.",
    "Executives accessing mobile dashboards for on-the-go decision-making.",
  ],
  faqs: [
    {
      question: "Can you migrate dashboards from Tableau, QlikView, or SSRS?",
      answer:
        "Yes. We audit your existing reports, map metric definitions, rebuild semantic models in Power BI, and run side-by-side validation so business users sign off before retiring the legacy stack.",
    },
    {
      question: "How do you ensure dashboards stay fast as data grows?",
      answer:
        "Through star-schema modeling, aggregations, incremental refresh, composite models, and Premium capacity tuning. We also implement query reduction patterns and visual best practices that keep render times under 2 seconds.",
    },
    {
      question: "Do you handle row-level and object-level security?",
      answer:
        "Yes. We design RLS and OLS aligned to your Active Directory or Entra ID groups, plus apply Microsoft Information Protection sensitivity labels for data governance and audit traceability.",
    },
    {
      question: "Can Power BI connect to Salesforce, SAP, and our cloud warehouse?",
      answer:
        "Yes — we build connectors and incremental pipelines from Salesforce, SAP S/4HANA, Snowflake, Synapse, BigQuery, Azure SQL, and REST APIs. Real-time streams via Event Hubs are also supported.",
    },
    {
      question: "Do you offer managed Power BI services after go-live?",
      answer:
        "We offer monthly retainers covering capacity monitoring, model maintenance, new report development, user onboarding, and adoption analytics — with SLA-backed response times.",
    },
    {
      question: "What does a typical Power BI engagement cost?",
      answer:
        "Most projects range from a fixed-fee starter pack (3–5 dashboards, 4–6 weeks) to enterprise rollouts with COE setup and migration. We'll give you a transparent quote after a 30-min discovery call.",
    },
  ],
  deliveryTitle: "Analytics Delivery Process",
  deliverySubtitle: "From raw data to actionable insights with governed, scalable dashboards.",
  deliverySteps: [
    { icon: Search, title: "Data Discovery", desc: "Identify data sources, KPIs, and reporting requirements." },
    { icon: PenTool, title: "Data Modeling", desc: "Design star schemas, relationships, and DAX measures." },
    { icon: Rocket, title: "Dashboard Development", desc: "Build interactive reports with drill-throughs and RLS." },
    { icon: TestTube, title: "Review & Validate", desc: "Verify accuracy against source systems and business logic." },
    { icon: TrendingUp, title: "Publish & Govern", desc: "Deploy to Power BI Service with governance and refresh schedules." },
  ],
};

const PowerBIService = () => <ServicePageLayout data={data} />;
export default PowerBIService;
