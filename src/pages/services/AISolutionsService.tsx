import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Brain, Bot, LineChart, MessageSquare, ShieldCheck, Search, PenTool, Rocket, TestTube, TrendingUp } from "lucide-react";

const data: ServicePageData = {
  title: "AI Solutions",
  shortName: "AI Solutions",
  slug: "ai-solutions",
  tagline: "Applied AI, Automation & Intelligent Decisioning",
  canonicalPath: "/services/ai-solutions",
  seoKeywords: "AI solutions, enterprise AI consulting, generative AI, RAG chatbots, machine learning services, AI automation, predictive analytics",
  description: "Practical, production-ready AI that delivers measurable results — from generative AI assistants and RAG knowledge systems to predictive models and intelligent process automation. We help teams adopt AI safely, with clear ROI and governance.",
  color: "215 80% 50%",
  heroImage: "/services/ai-solutions.png",
  sections: [
    {
      icon: Brain,
      heading: "Generative AI & LLM Solutions",
      description: "Deploy large language models on your own data with the guardrails enterprises require.",
      items: [
        "Retrieval-Augmented Generation (RAG) over internal knowledge",
        "Private LLM deployments on Azure OpenAI, AWS Bedrock, or open models",
        "Domain-tuned assistants for support, sales, and operations",
        "Prompt governance, evaluation, and hallucination controls",
        "Cost and token optimization for sustainable scale",
      ],
    },
    {
      icon: Bot,
      heading: "Intelligent Process Automation",
      description: "Combine AI with automation to remove manual, repetitive work across the business.",
      items: [
        "Document understanding for invoices, contracts, and forms",
        "AI-assisted workflows in Salesforce, ServiceNow, and Power Platform",
        "Email, ticket, and request triage with smart routing",
        "Human-in-the-loop approval for high-stakes decisions",
        "Measurable reduction in cycle time and manual effort",
      ],
    },
    {
      icon: LineChart,
      heading: "Predictive Analytics & ML",
      description: "Turn historical data into forward-looking decisions with tailored machine-learning models.",
      items: [
        "Demand forecasting, churn, and propensity modeling",
        "Anomaly detection for fraud, risk, and operations",
        "Recommendation and personalization engines",
        "Model deployment with monitoring and drift detection",
        "Integration with Power BI for decision-ready insights",
      ],
    },
    {
      icon: MessageSquare,
      heading: "Conversational AI & Agents",
      description: "Always-on assistants that qualify leads, resolve issues, and support your teams.",
      items: [
        "Customer-facing chatbots for 24/7 support and lead capture",
        "Internal copilots for HR, IT, and knowledge retrieval",
        "Agentforce and Copilot Studio implementations",
        "Voice and multilingual conversational experiences",
        "Seamless handoff to human agents with full context",
      ],
    },
    {
      icon: ShieldCheck,
      heading: "AI Strategy & Governance",
      description: "Adopt AI responsibly with a roadmap, guardrails, and clear measures of success.",
      items: [
        "AI readiness assessment and high-ROI use-case mapping",
        "Data privacy, security, and responsible-AI guardrails",
        "Proof-of-value pilots before full-scale rollout",
        "Team enablement, training, and change management",
        "KPIs and dashboards to track AI impact over time",
      ],
    },
  ],
  whyChoose: [
    "Outcome-first approach — we start with the business case, not the hype",
    "Production-grade delivery, not throwaway demos or experiments",
    "Deep integration with Salesforce, Power BI, ServiceNow, and cloud",
    "Responsible-AI guardrails for privacy, security, and compliance",
    "Proof-of-value pilots that de-risk investment before scaling",
    "Clear KPIs so you can measure AI ROI from day one",
  ],
  problems: [
    "AI pilots that never make it to production or show real ROI",
    "Manual, repetitive work consuming skilled team capacity",
    "Knowledge trapped in documents and tools no one can search",
    "Inconsistent decisions due to lack of predictive insight",
    "Concerns about data privacy, security, and AI governance",
    "Uncertainty about where AI will actually move the needle",
  ],
  useCases: [
    "Support teams deflecting routine tickets with RAG-powered assistants.",
    "Finance teams forecasting demand and cash flow with predictive models.",
    "Sales teams qualifying leads automatically with AI chat and scoring.",
    "Operations teams automating document processing and data entry.",
    "Enterprises building internal copilots over policies and knowledge bases.",
    "Leadership teams tracking AI impact through Power BI dashboards.",
  ],
  faqs: [
    {
      question: "Do we need a large data science team to adopt AI?",
      answer:
        "No. We deliver end-to-end — from use-case selection to deployment and monitoring — and enable your team along the way. Many clients start with a single high-ROI use case and scale from there.",
    },
    {
      question: "How do you keep our data private with generative AI?",
      answer:
        "We deploy models within your cloud tenant (Azure OpenAI, AWS Bedrock, or private open models), keep data inside your boundary, and apply access controls, logging, and responsible-AI guardrails. Your data is never used to train third-party models.",
    },
    {
      question: "What's a realistic first AI project?",
      answer:
        "Usually a proof-of-value pilot in 4–8 weeks — such as a RAG assistant over your documentation, document automation, or a churn/forecasting model — with clear success metrics before any full rollout.",
    },
    {
      question: "Can AI integrate with our existing systems?",
      answer:
        "Yes. We integrate with Salesforce, ServiceNow, Power Platform, and custom apps via APIs and events, so AI works inside the tools your team already uses rather than as a separate silo.",
    },
    {
      question: "How do you measure AI ROI?",
      answer:
        "We define KPIs up front — deflection rate, cycle-time reduction, forecast accuracy, hours saved — and report against them, typically surfaced in a Power BI dashboard so impact stays visible.",
    },
    {
      question: "Is generative AI safe for customer-facing use?",
      answer:
        "With the right guardrails, yes. We add grounding (RAG), evaluation, content filters, and human-in-the-loop where needed to control accuracy and tone before anything goes live to customers.",
    },
  ],
  deliveryTitle: "AI Delivery Process",
  deliverySubtitle: "From ideation to production-ready AI systems with measurable business impact.",
  deliverySteps: [
    { icon: Search, title: "Use Case Discovery", desc: "Identify high-impact AI opportunities aligned to business goals." },
    { icon: PenTool, title: "Data & Model Design", desc: "Prepare data pipelines and select the right AI/ML architecture." },
    { icon: Rocket, title: "Prototype & Train", desc: "Build working prototypes with iterative model training and tuning." },
    { icon: TestTube, title: "Validate & Evaluate", desc: "Rigorous testing for accuracy, bias, latency, and edge cases." },
    { icon: TrendingUp, title: "Deploy & Monitor", desc: "Production deployment with continuous monitoring and retraining." },
  ],
};

const AISolutionsService = () => <ServicePageLayout data={data} />;
export default AISolutionsService;
