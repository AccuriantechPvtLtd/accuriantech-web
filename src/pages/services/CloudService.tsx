import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Globe, Shield, Server, BarChart3, Cpu, Search, PenTool, Rocket, TestTube, TrendingUp } from "lucide-react";

const data: ServicePageData = {
  title: "Cloud Support (Azure/AWS)",
  shortName: "Cloud",
  slug: "cloud",
  tagline: "Secure, Scalable & Cost-Optimized Cloud Operations",
  canonicalPath: "/services/cloud",
  seoKeywords: "Azure cloud support, AWS managed services, cloud migration, FinOps consulting, cloud cost optimization, cloud security services",
  description: "Secure, scalable, and cost-optimized cloud managed services across Microsoft Azure and Amazon Web Services. We support organizations in India, the United States, and globally with SLA-backed reliability.",
  color: "210 85% 50%",
  heroImage: "/services/cloud.png",
  sections: [
    {
      icon: Globe,
      heading: "Global Cloud Operations",
      description: "Multi-region architecture with 24/7 monitoring, high availability, and centralized governance.",
      items: [
        "Azure and AWS multi-region architecture design",
        "24/7 global monitoring with automated alerting",
        "DR strategies aligned to RPO and RTO targets",
        "Centralized identity with Azure AD, AWS IAM, and SSO",
        "Infrastructure as Code with Terraform and ARM templates",
      ],
    },
    {
      icon: Shield,
      heading: "Azure Cloud Services",
      description: "Full-spectrum Azure support from landing zones to security, monitoring, and continuous optimization.",
      items: [
        "Landing zone design with Well-Architected Framework",
        "VMs, App Services, AKS, Storage, and Networking setup",
        "Azure AD, RBAC, Conditional Access, and PIM controls",
        "Azure Monitor, Log Analytics, and App Insights setup",
        "Azure DevOps pipelines for CI/CD and IaC deployments",
      ],
    },
    {
      icon: Server,
      heading: "AWS Cloud Services",
      description: "Enterprise-ready AWS architectures with secure workload design and operational excellence.",
      items: [
        "EC2, VPC, S3, RDS, ECS, Lambda, and Load Balancers",
        "IAM, Organizations, and SCPs for governance at scale",
        "CloudWatch monitoring with EventBridge automation",
        "AWS Backup with cross-region disaster recovery",
        "GuardDuty and Security Hub for continuous compliance",
      ],
    },
    {
      icon: BarChart3,
      heading: "FinOps & Cost Optimization",
      description: "Proven FinOps practices that cut cloud spend by 20–40% while improving performance and reliability.",
      items: [
        "Resource right-sizing with automated recommendations",
        "Reserved Instances, Savings Plans, and spot strategies",
        "Budget alerts and elimination of orphaned resources",
        "Tagging strategy for granular cost allocation",
        "Monthly reviews with executive cost reporting",
      ],
    },
    {
      icon: Cpu,
      heading: "Cloud Migration & Modernization",
      description: "Seamless migration to cloud with minimal downtime and modern, hybrid-ready architectures.",
      items: [
        "Workload assessment with TCO analysis and roadmap",
        "Lift-and-shift, re-platform, and re-architect strategies",
        "Hybrid integration via Azure Arc and AWS Outposts",
        "Containers, serverless, and microservices modernization",
        "Zero-downtime database migration with Azure DMS or AWS DMS",
      ],
    },
  ],
  whyChoose: [
    "Azure & AWS certified professionals with 100+ certifications",
    "Geo-aligned cloud support for India, US, and global operations",
    "SLA-backed service delivery with 30-minute enterprise response",
    "Security-first and cost-optimized approach",
    "One partner for Cloud, IT, and Security",
    "Proven cost reduction of 20–40% through FinOps",
  ],
  problems: [
    "Uncontrolled cloud spending with no cost visibility or governance",
    "On-premise infrastructure that can't scale with business demands",
    "Security gaps in cloud environments exposing sensitive data",
    "Lack of disaster recovery planning for cloud workloads",
    "Complex multi-cloud management without unified tooling",
    "Slow deployments due to manual infrastructure provisioning",
  ],
  useCases: [
    "Enterprises migrating on-premise SAP workloads to Azure with zero downtime.",
    "Startups building scalable cloud-native applications on AWS with auto-scaling.",
    "Global companies achieving 30% cloud cost reduction through FinOps optimization.",
    "Healthcare organizations meeting HIPAA compliance on Azure cloud infrastructure.",
    "Finance firms implementing disaster recovery with cross-region replication.",
    "Manufacturing companies modernizing legacy apps with containerization on Kubernetes.",
  ],
  faqs: [
    {
      question: "Do you support both Azure and AWS, or just one?",
      answer:
        "Both — and Azure + AWS hybrid setups. Our team holds certifications across both clouds, so we can recommend, migrate, and operate workloads on whichever platform fits your roadmap, including multi-cloud topologies.",
    },
    {
      question: "How quickly can you take over an existing cloud environment?",
      answer:
        "Standard transition runs 1–2 weeks: discovery, access onboarding, runbook capture, monitoring takeover, and a parallel-support phase. Critical environments can be expedited with a fast-track plan.",
    },
    {
      question: "What kind of cost savings can we expect from FinOps?",
      answer:
        "Most clients see 20–40% reduction within the first quarter through right-sizing, Reserved Instances/Savings Plans, removing orphaned resources, and tagging-driven accountability. We report savings monthly with clear before/after data.",
    },
    {
      question: "Do you handle compliance frameworks like HIPAA, SOC 2, or PCI?",
      answer:
        "Yes. We design landing zones aligned to the relevant framework, implement guardrails via Azure Policy or AWS Config, set up logging and evidence collection, and support audits with documented controls.",
    },
    {
      question: "Can you migrate our on-premise workloads with zero downtime?",
      answer:
        "Most workloads can be migrated with near-zero downtime using strategies like database replication (Azure DMS / AWS DMS), blue-green deployments, and DNS cutovers. We design the cutover plan upfront so the business is never surprised.",
    },
    {
      question: "What does your SLA look like?",
      answer:
        "Standard managed cloud support is 24/7 with 30-minute response on critical incidents. Lower tiers (8x5, 12x5) are also available, with monthly reporting on incidents, MTTR, and trends.",
    },
  ],
  deliveryTitle: "Cloud Delivery Process",
  deliverySubtitle: "A structured approach to cloud migration, modernization, and optimization.",
  deliverySteps: [
    { icon: Search, title: "Assessment & Planning", desc: "Evaluate workloads, dependencies, and migration readiness." },
    { icon: PenTool, title: "Architecture Design", desc: "Design landing zones, networking, security, and governance." },
    { icon: Rocket, title: "Migration & Build", desc: "Execute migration with minimal downtime and zero data loss." },
    { icon: TestTube, title: "Validation & Security", desc: "Performance testing, security hardening, and compliance checks." },
    { icon: TrendingUp, title: "Optimize & Scale", desc: "Continuous FinOps optimization and auto-scaling." },
  ],
};

const CloudService = () => <ServicePageLayout data={data} />;
export default CloudService;
