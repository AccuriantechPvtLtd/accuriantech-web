import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import { Shield, Monitor, Lock, Wifi, AlertTriangle } from "lucide-react";

const data: ServicePageData = {
  title: "Network & Security",
  shortName: "Security",
  slug: "network-security",
  tagline: "Firewall, Endpoint Protection & Incident Response",
  canonicalPath: "/services/network-security",
  seoKeywords: "network security services, firewall management, endpoint detection response, cybersecurity consulting, VPN setup, security monitoring",
  description: "Comprehensive network security and endpoint protection services to safeguard your enterprise and hybrid environments with continuous monitoring and rapid incident response.",
  color: "220 75% 50%",
  heroImage: "/services/network-security.png",
  sections: [
    {
      icon: Shield,
      heading: "Firewall & Network Security",
      description: "Configuration and management of firewalls and secure network access for hybrid environments.",
      items: [
        "Enterprise firewall configuration and optimization",
        "Next-gen firewalls with application-layer filtering",
        "Network segmentation to contain lateral movement",
        "Network Access Control with automated quarantine",
        "DDoS protection with traffic analysis and response",
      ],
    },
    {
      icon: Wifi,
      heading: "VPN & Secure Remote Access",
      description: "Secure connectivity for remote and hybrid workforces with Zero Trust and MFA.",
      items: [
        "Site-to-site and client VPN setup and tuning",
        "Zero Trust Network Access replacing legacy VPNs",
        "Conditional access with device compliance checks",
        "Multi-factor authentication for all entry points",
        "SD-WAN for optimized branch-office connectivity",
      ],
    },
    {
      icon: Monitor,
      heading: "Endpoint Detection & Response",
      description: "Advanced endpoint protection with industry-leading EDR and automated threat response.",
      items: [
        "SentinelOne EDR with AI-powered prevention",
        "NinjaOne for remote support and patch automation",
        "Automated isolation of compromised endpoints",
        "Endpoint compliance and vulnerability scanning",
        "Mobile Device Management and BYOD policies",
      ],
    },
    {
      icon: AlertTriangle,
      heading: "Security Monitoring & Incident Response",
      description: "Continuous monitoring, structured incident response, and forensic analysis on demand.",
      items: [
        "24/7 SOC monitoring and proactive threat detection",
        "Incident response playbooks and rapid escalation",
        "Post-incident forensic analysis and remediation",
        "Penetration testing with certified ethical hackers",
        "SIEM deployment with log correlation and hunting",
      ],
    },
    {
      icon: Lock,
      heading: "Compliance & Risk Management",
      description: "Security frameworks, audit prep, risk assessment, and employee training programs.",
      items: [
        "Alignment with ISO 27001, SOC 2, NIST, and PCI DSS",
        "Audit preparation and compliance documentation",
        "Risk register management with prioritized remediation",
        "Phishing simulations and security awareness training",
        "Data classification and DLP policy enforcement",
      ],
    },
  ],
  whyChoose: [
    "Multi-layered security approach with defense-in-depth strategy",
    "Industry-leading EDR and monitoring tools (SentinelOne, NinjaOne)",
    "Rapid incident response with SLA-backed resolution times",
    "Compliance expertise across ISO, SOC 2, NIST, and PCI DSS frameworks",
    "Continuous monitoring with proactive threat hunting",
    "Integrated security across IT, Cloud, and Network domains",
  ],
  problems: [
    "Increasing cyber threats targeting enterprise and hybrid environments",
    "Lack of real-time visibility into network traffic and vulnerabilities",
    "Compliance gaps exposing organizations to regulatory penalties",
    "Unsecured remote access for distributed and hybrid workforces",
    "No incident response plan or trained team for security breaches",
    "Unmanaged endpoints creating entry points for attackers",
  ],
  useCases: [
    "Enterprises deploying Zero Trust architecture for remote workforce security.",
    "Financial institutions achieving SOC 2 and PCI DSS compliance.",
    "Healthcare organizations securing patient data with endpoint detection and response.",
    "Government agencies implementing network segmentation and micro-segmentation.",
    "Retail companies protecting customer payment data with next-gen firewalls.",
    "Manufacturing firms establishing 24/7 security monitoring and incident response.",
  ],
  faqs: [
    {
      question: "Do you replace existing security tools or work with what we have?",
      answer:
        "We work with your stack first. If gaps exist, we'll recommend additions (typically EDR, MFA, or SIEM) with clear ROI. We don't push tools — we make the existing ones perform.",
    },
    {
      question: "Can you help us achieve SOC 2 or ISO 27001?",
      answer:
        "Yes — including gap analysis, control implementation, evidence collection, policy authoring, and audit support. Most clients achieve readiness in 4–6 months from a baseline state.",
    },
    {
      question: "How do you handle a real-time security incident?",
      answer:
        "Our incident response process is documented and tested: triage in under 30 minutes, containment, evidence preservation, eradication, recovery, and a post-incident report with corrective actions. Customers get hands-on coordination, not just tickets.",
    },
    {
      question: "Do you offer 24/7 monitoring?",
      answer:
        "Yes — managed SOC monitoring with SIEM correlation, threat hunting, and automated alerting. Available as a tiered service so you only pay for the coverage you actually need.",
    },
    {
      question: "What's Zero Trust and do we need it?",
      answer:
        "Zero Trust treats every access request as untrusted by default. If you have a hybrid or remote workforce, third-party access, or sensitive data, it's a meaningful upgrade over legacy VPN. We'll assess fit honestly.",
    },
    {
      question: "Do you train our staff on phishing and security awareness?",
      answer:
        "Yes. We run quarterly phishing simulations, role-based training modules, and provide reporting that highlights at-risk groups so you can target follow-up coaching effectively.",
    },
  ],
};

const NetworkSecurityService = () => <ServicePageLayout data={data} />;
export default NetworkSecurityService;
