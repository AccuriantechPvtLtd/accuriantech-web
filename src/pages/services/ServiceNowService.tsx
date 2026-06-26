import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Workflow, Layers, Link2, Settings, Globe } from "lucide-react";

const data: ServicePageData = {
  title: "ServiceNow Development",
  shortName: "ServiceNow",
  slug: "servicenow",
  tagline: "Digital Workflows, Custom Development & Enterprise Scale",
  canonicalPath: "/services/servicenow",
  seoKeywords: "ServiceNow development, ServiceNow consulting, ITSM implementation, workflow automation, ServiceNow integration services",
  description: "End-to-end ServiceNow consulting, development, and managed services to modernize IT operations, automate workflows, and build scalable enterprise applications.",
  color: "200 80% 48%",
  heroImage: "/services/servicenow.png",
  sections: [
    {
      icon: Settings,
      heading: "Development & Customization",
      description: "Scalable, secure ServiceNow solutions built with custom applications and platform best practices.",
      items: [
        "Custom apps via App Engine Studio and scoped apps",
        "Business Rules, Script Includes, and Client Scripts",
        "Service Portal widgets and Employee Center setup",
        "Custom Service Catalog items and request workflows",
        "Platform upgrades and release management",
      ],
    },
    {
      icon: Layers,
      heading: "ITSM & ITOM",
      description: "End-to-end IT Service and Operations Management for visibility and operational excellence.",
      items: [
        "Incident, problem, and change management with SLAs",
        "Service catalog design and self-service portal",
        "Discovery, service mapping, and event correlation",
        "CMDB management for hybrid infrastructure visibility",
        "IT Asset Management with license compliance tracking",
      ],
    },
    {
      icon: Workflow,
      heading: "Workflow Automation",
      description: "Intelligent workflow design that streamlines operations and eliminates manual processes.",
      items: [
        "Custom workflows with parallel approval processing",
        "HR onboarding, offboarding, and procurement flows",
        "Flow Designer actions for scheduled jobs and triggers",
        "Low-code workflow builders for citizen developers",
        "RPA integration for legacy system automation",
      ],
    },
    {
      icon: Link2,
      heading: "Integrations & Extensibility",
      description: "API-based integrations connecting ServiceNow to your full enterprise technology stack.",
      items: [
        "Integrations with Azure, AWS, Datadog, and Splunk",
        "Identity sync with Azure AD, Okta, and LDAP for SSO",
        "Webhooks and event-driven real-time data exchange",
        "Custom REST and SOAP APIs with secure authentication",
        "IntegrationHub Spokes and Mid Server configuration",
      ],
    },
    {
      icon: Globe,
      heading: "Managed Services & Support",
      description: "SLA-backed support, administration, and continuous improvement with dedicated teams.",
      items: [
        "Dedicated developers, admins, and architects",
        "Proactive monitoring and instance hygiene management",
        "Release management and upgrade testing cycles",
        "Tiered support: 8×5, 12×5, and 24×7 enterprise SLAs",
        "Quarterly business reviews and roadmap planning",
      ],
    },
  ],
  whyChoose: [
    "Certified ServiceNow developers and consultants",
    "Strong focus on custom development, not just configuration",
    "Proven delivery across India, US, and global markets",
    "SLA-backed managed services with dedicated teams",
    "Seamless integration with Cloud, IT, Security, and DevOps ecosystems",
    "End-to-end support from implementation to managed operations",
  ],
  problems: [
    "Inefficient ITSM processes with manual ticketing and slow resolution",
    "Siloed departments with no unified workflow automation platform",
    "Lack of visibility into IT assets, incidents, and service health",
    "Poor user experience on legacy ITSM tools hurting adoption",
    "No integration between ServiceNow and existing enterprise tools",
    "Difficulty scaling IT operations as the organization grows",
  ],
  useCases: [
    "Enterprises automating IT service management with ITSM and ITOM modules.",
    "HR departments streamlining onboarding and offboarding with digital workflows.",
    "Organizations integrating ServiceNow with Azure AD and Okta for identity management.",
    "Companies building custom applications on ServiceNow for facilities and procurement.",
    "IT teams implementing CMDB and service mapping for infrastructure visibility.",
    "Global firms deploying managed ServiceNow support with SLA-backed response times.",
  ],
  faqs: [
    {
      question: "Do you handle ITSM, ITOM, HRSD, and custom apps?",
      answer:
        "Yes — across all four. ITSM for service desk, ITOM for discovery and event management, HRSD for employee experience, plus custom scoped apps using App Engine Studio for procurement, facilities, and bespoke workflows.",
    },
    {
      question: "Can you migrate us from Jira Service Management or Cherwell?",
      answer:
        "Yes. We map ticket types, automation rules, and SLAs to ServiceNow equivalents, migrate historical data, and run dual-run validation before cutover so support continuity is never at risk.",
    },
    {
      question: "Do you support every release upgrade?",
      answer:
        "Yes. We follow a tested upgrade process: prep current instance, clone to test, perform upgrade, run regression scripts, validate with end users, then upgrade production with rollback ready.",
    },
    {
      question: "How do you integrate ServiceNow with our existing tools?",
      answer:
        "Through IntegrationHub Spokes, MID Servers, REST/SOAP APIs, and event-driven webhooks. Common integrations include Azure AD, Okta, Datadog, Splunk, Jira, Slack, and Microsoft Teams.",
    },
    {
      question: "Do you offer staff augmentation or full project delivery?",
      answer:
        "Both. Engage us for end-to-end implementation, or embed our certified developers and admins into your existing team on a monthly retainer.",
    },
    {
      question: "Are your developers ServiceNow-certified?",
      answer:
        "Yes — including CSA, CAD, CIS for ITSM/ITOM/HRSD, and Application Developer credentials. Our senior architects also hold the Certified Technical Architect track.",
    },
  ],
};

const ServiceNowService = () => <ServicePageLayout data={data} />;
export default ServiceNowService;
