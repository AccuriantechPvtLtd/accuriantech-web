import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Code2, Layout, Smartphone, Plug, RefreshCw } from "lucide-react";

const data: ServicePageData = {
  title: "Software Development",
  shortName: "Software Dev",
  slug: "software-development",
  tagline: "Custom Software, Web Apps & System Integration",
  canonicalPath: "/services/software-development",
  seoKeywords: "custom software development, web application development, API integration, enterprise software, SaaS development, application modernization",
  description: "Custom software, web applications, and integrations engineered around how your business actually works. From greenfield products to modernizing legacy systems, we deliver maintainable, scalable code with predictable execution.",
  color: "210 85% 50%",
  heroImage: "/services/software-development.png",
  sections: [
    {
      icon: Layout,
      heading: "Web & Application Development",
      description: "Modern, responsive applications built on proven, maintainable technology stacks.",
      items: [
        "React, TypeScript, and Node.js single-page applications",
        "Secure customer portals and internal business tools",
        "Role-based access, audit trails, and admin consoles",
        "Performance-tuned, accessible, SEO-friendly front ends",
        "Cloud-native deployment on Azure and AWS",
      ],
    },
    {
      icon: Plug,
      heading: "API & System Integration",
      description: "Connect the tools your business depends on into one reliable, automated flow.",
      items: [
        "REST and GraphQL API design and development",
        "Integrations across Salesforce, SAP, ServiceNow, and ERPs",
        "Event-driven and webhook-based real-time data exchange",
        "Middleware, data sync, and legacy system bridges",
        "Secure authentication with OAuth and SSO",
      ],
    },
    {
      icon: Smartphone,
      heading: "Product & MVP Engineering",
      description: "Take ideas to market quickly with focused, scalable product builds.",
      items: [
        "MVP scoping and rapid, milestone-based delivery",
        "Multi-tenant SaaS architecture and billing integration",
        "Progressive Web Apps and cross-platform experiences",
        "Scalable data models built for growth from day one",
        "Analytics and feedback loops baked into the product",
      ],
    },
    {
      icon: RefreshCw,
      heading: "Application Modernization",
      description: "Replatform and refactor legacy applications without disrupting the business.",
      items: [
        "Legacy assessment and incremental modernization roadmap",
        "Monolith-to-microservices and serverless refactoring",
        "Database migration and performance optimization",
        "Containerization with Docker and Kubernetes",
        "Zero-downtime rollout with rollback safeguards",
      ],
    },
    {
      icon: Code2,
      heading: "Quality, DevOps & Support",
      description: "Ship reliably with automation, testing, and ongoing maintenance built in.",
      items: [
        "CI/CD pipelines for fast, repeatable releases",
        "Automated testing and code quality gates",
        "Monitoring, logging, and proactive alerting",
        "SLA-backed maintenance and enhancement retainers",
        "Documentation and knowledge transfer to your team",
      ],
    },
  ],
  whyChoose: [
    "Business-first engineering — we build for outcomes, not just specs",
    "Maintainable, well-documented code your team can own long term",
    "Predictable delivery with agile sprints and weekly demos",
    "Deep integration experience across enterprise platforms",
    "Security and scalability designed in from the start",
    "One partner across software, cloud, data, and AI",
  ],
  problems: [
    "Off-the-shelf tools that don't fit your actual processes",
    "Manual workarounds and spreadsheets filling software gaps",
    "Disconnected systems that don't share data reliably",
    "Legacy applications that are costly and risky to change",
    "Stalled projects from unclear scope or unreliable vendors",
    "Technical debt slowing down every new feature",
  ],
  useCases: [
    "Companies replacing manual spreadsheets with custom internal tools.",
    "Businesses integrating Salesforce, SAP, and finance systems end to end.",
    "Startups launching SaaS MVPs with scalable, multi-tenant architecture.",
    "Enterprises modernizing legacy apps to cloud-native architectures.",
    "Teams building customer portals with secure, role-based access.",
    "Organizations automating workflows through custom API integrations.",
  ],
  faqs: [
    {
      question: "What technologies do you build with?",
      answer:
        "Primarily React, TypeScript, and Node.js on the front and back end, with cloud-native deployment on Azure and AWS. We choose the stack based on your needs and long-term maintainability, not trends.",
    },
    {
      question: "Can you work alongside our existing development team?",
      answer:
        "Yes. We deliver full projects end-to-end or embed engineers into your team for staff augmentation, following your workflows, code standards, and review process.",
    },
    {
      question: "How do you keep projects on track and on budget?",
      answer:
        "Agile sprints with weekly demos, a clearly scoped backlog, and fixed-fee pricing where requirements are stable. You see working software continuously, so there are no end-of-project surprises.",
    },
    {
      question: "Do you modernize legacy applications or only build new ones?",
      answer:
        "Both. We assess legacy systems and define an incremental modernization roadmap — refactoring, replatforming, or rebuilding — with zero-downtime rollout and rollback safeguards.",
    },
    {
      question: "Will we own the source code and documentation?",
      answer:
        "Yes. You own all source code, infrastructure, and documentation. We prioritize clean, well-documented code and knowledge transfer so your team can maintain it confidently.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Yes — SLA-backed maintenance and enhancement retainers covering monitoring, bug fixes, security updates, and new feature development.",
    },
  ],
};

const SoftwareDevelopmentService = () => <ServicePageLayout data={data} />;
export default SoftwareDevelopmentService;
