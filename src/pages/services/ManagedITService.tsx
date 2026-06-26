import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Cpu, Shield, Workflow, Server, Monitor } from "lucide-react";

const data: ServicePageData = {
  title: "Managed IT Services",
  shortName: "Managed IT",
  slug: "managed-it",
  tagline: "Infrastructure, Support & Business Continuity",
  canonicalPath: "/services/managed-it",
  seoKeywords: "managed IT services, IT support company, infrastructure management, IT helpdesk, disaster recovery services, endpoint security",
  description: "Reliable, secure, and scalable Managed IT Support designed to keep your infrastructure, networks, and applications running smoothly — so your teams can focus on growth, not downtime.",
  color: "215 70% 45%",
  heroImage: "/services/managed-it.png",
  sections: [
    {
      icon: Cpu,
      heading: "Hybrid Infrastructure Support",
      description: "Comprehensive management of virtualized and on-premise infrastructure with proactive maintenance.",
      items: [
        "Hyper-V virtualization and capacity planning",
        "Windows Server administration and hardening",
        "Active Directory, Group Policy, DNS, and DHCP",
        "Patch management and vulnerability remediation",
        "Hardware lifecycle and vendor coordination",
      ],
    },
    {
      icon: Shield,
      heading: "Network & Security Management",
      description: "Proactive security monitoring, network management, and endpoint protection 24/7.",
      items: [
        "Firewall configuration and next-gen deployment",
        "Secure VPN and Zero Trust Network Access setup",
        "Endpoint protection with SentinelOne EDR",
        "Remote monitoring and support via NinjaOne",
        "Network segmentation and Wi-Fi security",
      ],
    },
    {
      icon: Workflow,
      heading: "Application & Production Support",
      description: "High-availability monitoring and rapid issue resolution with SLA-backed response.",
      items: [
        "SLA-backed troubleshooting with clear escalation",
        "High-availability monitoring for critical systems",
        "Vendor coordination for multi-party resolution",
        "Root cause analysis and preventive action plans",
        "Change management with CAB reviews and rollback",
      ],
    },
    {
      icon: Server,
      heading: "Backup & Disaster Recovery",
      description: "Comprehensive backup and DR strategies that ensure business continuity and data protection.",
      items: [
        "Automated backups with cloud and on-prem storage",
        "DR planning aligned to RTO and RPO targets",
        "Regular backup testing and recovery validation",
        "Immutable backups for ransomware protection",
        "Cross-site replication and geo-redundant storage",
      ],
    },
    {
      icon: Monitor,
      heading: "User Support & Training",
      description: "Helpdesk support, onboarding, and training that maximize productivity and adoption.",
      items: [
        "Tiered L1, L2, and L3 helpdesk with SLA tracking",
        "User onboarding and role-based provisioning",
        "Security awareness and phishing prevention training",
        "Self-service knowledge base and IT portal",
        "Device provisioning, MDM, and BYOD policies",
      ],
    },
  ],
  whyChoose: [
    "Enterprise-grade IT processes and tooling",
    "Clear SLA-backed delivery models with rapid response",
    "Proven expertise across infrastructure, security, and applications",
    "Scalable support aligned with your business growth",
    "Single partner for IT, Cloud, Security, and Operations",
    "24/7 monitoring options for mission-critical environments",
  ],
  problems: [
    "Frequent downtime disrupting business operations and productivity",
    "Reactive IT support with no proactive monitoring or alerting",
    "Outdated infrastructure that's difficult and costly to maintain",
    "No disaster recovery plan leaving data at risk",
    "Overwhelmed internal IT teams unable to keep up with demands",
    "Security vulnerabilities from unpatched systems and endpoints",
  ],
  useCases: [
    "Mid-size companies outsourcing IT support to reduce overhead and improve SLAs.",
    "Organizations implementing 24/7 monitoring for mission-critical applications.",
    "Enterprises modernizing Active Directory and identity management infrastructure.",
    "Companies deploying endpoint protection across remote and hybrid workforces.",
    "Businesses establishing disaster recovery plans with automated backup testing.",
    "Growing firms scaling IT infrastructure without adding internal headcount.",
  ],
  faqs: [
    {
      question: "What's included in your managed IT services?",
      answer:
        "Helpdesk (L1–L3), endpoint management, patch and vulnerability management, Active Directory administration, backup and DR, monitoring, and vendor coordination. All wrapped in a clear SLA with weekly reporting.",
    },
    {
      question: "How fast do you respond to issues?",
      answer:
        "Standard response is 30 minutes for critical incidents and 2 hours for high-priority. Tiered SLAs of 8x5, 12x5, or 24x7 are available depending on the criticality of your environment.",
    },
    {
      question: "Can you support fully remote or hybrid teams?",
      answer:
        "Yes — that's the majority of what we do. We deploy NinjaOne for remote support, SentinelOne for endpoint protection, and MDM tooling so distributed teams get the same SLA as on-prem users.",
    },
    {
      question: "Do you replace or supplement our internal IT team?",
      answer:
        "Either model works. We can run IT end-to-end for small/mid-size teams, or supplement an internal lead with after-hours, weekend, or specialized skills (security, cloud, identity) on demand.",
    },
    {
      question: "How do you handle backup and disaster recovery?",
      answer:
        "We implement automated, encrypted, immutable backups (cloud + on-prem), align RTO/RPO to business requirements, and test recovery quarterly so you're never surprised by a real incident.",
    },
    {
      question: "What does pricing look like?",
      answer:
        "Most clients run on a fixed monthly retainer based on user count and service tier. We give you a transparent quote up-front — no per-ticket surprises and no per-incident hourly creep.",
    },
  ],
};

const ManagedITService = () => <ServicePageLayout data={data} />;
export default ManagedITService;
