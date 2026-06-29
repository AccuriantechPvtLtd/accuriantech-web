import ServicePageLayout, { ServicePageData } from "@/components/ServicePageLayout";
import { HeartPulse, Shield, Cloud, BarChart3, Users, FileCheck } from "lucide-react";

const data: ServicePageData = {
  title: "Healthcare Industry Solutions",
  tagline: "Transforming Patient Care Through Technology",
  description: "We help healthcare organizations improve patient outcomes, streamline operations, and maintain HIPAA compliance with secure, scalable IT solutions tailored to the healthcare ecosystem.",
  color: "160 60% 38%",
  heroImage: "/industries/healthcare.png",
  canonicalPath: "/industries/healthcare",
  seoKeywords: "healthcare IT solutions, HIPAA compliance, health tech consulting, medical data analytics",
  hideDeliveryProcess: true,
  businessOutcomes: {
    title: "Business Outcomes We Enable",
    subtitle: "Measurable impact for healthcare organizations through secure technology solutions.",
    outcomes: [
      { metric: "99.9%", label: "Data Compliance", description: "HIPAA-compliant systems ensuring patient data privacy and security." },
      { metric: "40%", label: "Operational Efficiency", description: "Reduction in administrative workload through workflow automation." },
      { metric: "50%", label: "Faster Patient Access", description: "Improved patient portal performance and digital care delivery." },
      { metric: "30%", label: "Cost Savings", description: "Lower IT overhead through cloud-native healthcare infrastructure." },
      { metric: "Real-time", label: "Clinical Analytics", description: "Instant visibility into patient outcomes and operational KPIs." },
      { metric: "Zero", label: "Data Breaches", description: "Enterprise-grade security preventing unauthorized access to PHI." },
    ],
  },
  sections: [
    {
      icon: Shield,
      heading: "HIPAA Compliance & Data Security",
      description: "Protect patient data with robust security frameworks designed for healthcare.",
      items: [
        "HIPAA compliance assessments and gap analysis",
        "PHI encryption and secure data storage",
        "Access control and role-based permissions",
        "Security awareness training for healthcare staff",
        "Breach detection and incident response planning",
        "Business associate agreement (BAA) management",
      ],
    },
    {
      icon: Cloud,
      heading: "Cloud Infrastructure for Healthcare",
      description: "Build HIPAA-compliant cloud environments that scale with your organization.",
      items: [
        "HIPAA-compliant Azure and AWS deployments",
        "EHR/EMR system cloud migration",
        "Telehealth platform infrastructure",
        "Secure medical imaging storage and retrieval",
        "Hybrid cloud for on-premise and cloud workloads",
        "Disaster recovery for critical health systems",
      ],
    },
    {
      icon: BarChart3,
      heading: "Health Analytics & Reporting",
      description: "Leverage data to improve clinical outcomes and operational efficiency.",
      items: [
        "Population health management dashboards",
        "Clinical outcome tracking and benchmarking",
        "Revenue cycle analytics and optimization",
        "Predictive analytics for patient readmission risk",
      ],
    },
    {
      icon: Users,
      heading: "Patient Engagement & CRM",
      description: "Enhance patient experience with personalized communication and care coordination.",
      items: [
        "Salesforce Health Cloud implementation",
        "Patient portal development and integration",
        "Automated appointment scheduling and reminders",
        "Care coordination workflows across providers",
      ],
    },
    {
      icon: HeartPulse,
      heading: "Managed IT for Healthcare",
      description: "Reliable IT operations so your team can focus on patient care.",
      items: [
        "24/7 monitoring of critical healthcare systems",
        "Medical device network management",
        "ServiceNow ITSM for healthcare workflows",
        "Endpoint security for clinical workstations",
      ],
    },
    {
      icon: FileCheck,
      heading: "Interoperability & Integration",
      description: "Connect disparate healthcare systems for seamless data exchange.",
      items: [
        "HL7 FHIR integration and API development",
        "EHR integration with third-party applications",
        "Lab system and pharmacy interface development",
        "Claims processing automation and EDI management",
      ],
    },
  ],
  whyChoose: [
    "HIPAA-certified consultants with deep healthcare domain expertise",
    "Proven deployments across hospitals, clinics, and health networks",
    "Security-first approach protecting sensitive patient information",
    "Experience with major EHR platforms and health data standards",
    "Scalable solutions from single-practice to enterprise health systems",
    "Compliance-driven methodologies embedded in every engagement",
  ],
};

const HealthcareIndustry = () => <ServicePageLayout data={data} />;
export default HealthcareIndustry;

