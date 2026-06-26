import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Shield, Lock, Cpu, AlertTriangle, KeyRound } from "lucide-react";

const data: ServicePageData = {
  title: "SAP Security & SAP BTP/Cloud",
  shortName: "SAP",
  slug: "sap",
  tagline: "Enterprise SAP Security, Access Control & Compliance",
  canonicalPath: "/services/sap",
  seoKeywords: "SAP security services, SAP GRC consulting, SAP access control, SAP BTP security, SAP compliance services, SAP identity management",
  description: "Comprehensive SAP security services ensuring robust security posture, access governance, and regulatory compliance for your enterprise SAP landscape.",
  color: "205 100% 40%",
  heroImage: "/services/sap.png",
  sections: [
    {
      icon: Shield,
      heading: "SAP Security & Access Control",
      description: "Robust SAP security covering user management, role design, and authorization governance.",
      items: [
        "Role design with PFCG single, composite, and derived",
        "User administration and SSO with Azure AD and LDAP",
        "Segregation of Duties analysis using SAP GRC",
        "Security audit log and critical authorization reviews",
        "Fiori and S/4HANA role-based access configuration",
      ],
    },
    {
      icon: Lock,
      heading: "Compliance & Governance",
      description: "Regulatory compliance services to meet SOX, GDPR, and industry-specific audit requirements.",
      items: [
        "SOX readiness with access reviews and audit trails",
        "GDPR data masking, anonymization, and consent management",
        "Automated compliance reporting and audit dashboards",
        "SAP GRC Process Control and Risk Management setup",
        "Periodic access certification campaigns",
      ],
    },
    {
      icon: AlertTriangle,
      heading: "Threat Detection & Monitoring",
      description: "Proactive monitoring and threat detection across your SAP landscape in real time.",
      items: [
        "SAP Enterprise Threat Detection (ETD) integration",
        "Continuous vulnerability scanning and patching",
        "Incident response planning and breach remediation",
        "Custom dashboards for executive security visibility",
        "KPI tracking for critical security events",
      ],
    },
    {
      icon: KeyRound,
      heading: "Identity & Privileged Access Management",
      description: "End-to-end identity lifecycle and privileged access controls to secure your SAP environment.",
      items: [
        "SAP IdM for automated provisioning and de-provisioning",
        "Privileged access with session recording workflows",
        "MFA for SAP GUI, Fiori, and web-based access",
        "Emergency access (firefighter) management",
        "Periodic user access reviews and recertification",
      ],
    },
    {
      icon: Cpu,
      heading: "SAP Cloud Security",
      description: "Security governance for SAP workloads on Azure, AWS, and SAP BTP environments.",
      items: [
        "Architecture design for SAP on Azure and AWS",
        "Network segmentation, encryption, and key management",
        "SAP BTP role collections and trust management",
        "CASB integration for SAP cloud applications",
        "Compliance with SOC 2 and ISO 27001 standards",
      ],
    },
  ],
  whyChoose: [
    "SAP Certified Security consultants with deep GRC expertise",
    "Experience across S/4HANA, ECC, BW, and SAP Cloud solutions",
    "SLA-backed support with 30-minute critical response",
    "Proven SOX, GDPR, and industry compliance expertise",
    "End-to-end SAP security lifecycle — assess, design, implement, monitor",
    "Global delivery model supporting India, US, and international clients",
  ],
  problems: [
    "Excessive access privileges and segregation of duties violations",
    "Audit findings and compliance gaps in SAP authorization management",
    "No real-time monitoring of critical SAP security events",
    "Complex SAP landscapes with inconsistent security configurations",
    "Lack of automated user provisioning and de-provisioning processes",
    "Cloud migration security risks for SAP workloads on Azure or AWS",
  ],
  useCases: [
    "Manufacturing companies achieving SOX compliance with SAP GRC Access Control.",
    "Enterprises implementing Single Sign-On and MFA for SAP Fiori and S/4HANA.",
    "Global organizations managing emergency access with firefighter ID monitoring.",
    "Finance firms conducting periodic user access reviews and recertification campaigns.",
    "Companies migrating SAP workloads to Azure with secure architecture design.",
    "Healthcare organizations implementing GDPR data protection in SAP systems.",
  ],
  faqs: [
    {
      question: "Do you support both SAP ECC and S/4HANA security models?",
      answer:
        "Yes. We design role hierarchies for ECC (PFCG single, composite, derived) and S/4HANA, including Fiori catalog and group design and the access transformations that come with greenfield or brownfield S/4 conversions.",
    },
    {
      question: "Can you help us close audit findings on SoD?",
      answer:
        "Yes. We perform SoD analysis using SAP GRC Access Control, document mitigating controls for unavoidable conflicts, and rebuild role concepts where needed to bring the environment into a clean state.",
    },
    {
      question: "Do you handle SAP on Azure or AWS migrations?",
      answer:
        "Yes — including landing zone design, network and identity integration, encryption, key management, and post-migration security hardening aligned to SOC 2 / ISO 27001.",
    },
    {
      question: "What about SAP BTP security?",
      answer:
        "We design role collections, configure trust with Azure AD or Okta, set up secure destination services, and implement boundary controls between BTP services and back-end SAP systems.",
    },
    {
      question: "Do you offer ongoing managed SAP security?",
      answer:
        "Yes — monthly retainers covering user access reviews, role maintenance, emergency access (firefighter) governance, security patching, and audit support.",
    },
    {
      question: "How fast is your response on critical SAP security incidents?",
      answer:
        "30 minutes on critical, 2 hours on high. We maintain a documented incident playbook tailored to SAP — including communication, containment, and rollback steps.",
    },
  ],
};

const SAPService = () => <ServicePageLayout data={data} />;
export default SAPService;