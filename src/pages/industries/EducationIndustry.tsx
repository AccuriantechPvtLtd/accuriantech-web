import ServicePageLayout, { ServicePageData } from "@/components/ServicePageLayout";
import { GraduationCap, Cloud, Shield, BarChart3, Users, Monitor } from "lucide-react";

const data: ServicePageData = {
  title: "Education Industry Solutions",
  tagline: "Empowering Learning Through Smart Technology",
  description: "We help educational institutions modernize their IT infrastructure, enhance digital learning experiences, and manage student data securely to support academic excellence.",
  color: "35 85% 50%",
  heroImage: "/industries/education.png",
  canonicalPath: "/industries/education",
  seoKeywords: "education IT solutions, edtech consulting, LMS integration, student data management",
  sections: [
    {
      icon: Cloud,
      heading: "Cloud Campus Infrastructure",
      description: "Build scalable, reliable cloud environments that power modern learning.",
      items: [
        "Campus-wide cloud migration and optimization",
        "LMS hosting and performance tuning",
        "Virtual classroom infrastructure setup",
        "Student information system (SIS) cloud deployment",
        "Scalable exam and assessment platforms",
        "Content delivery networks for course materials",
      ],
    },
    {
      icon: Shield,
      heading: "Data Privacy & FERPA Compliance",
      description: "Protect student records and comply with education data regulations.",
      items: [
        "FERPA compliance assessments and remediation",
        "Student data encryption and access controls",
        "Secure research data management",
        "Privacy-by-design frameworks for edtech apps",
        "Third-party vendor security assessments",
        "Incident response planning for data breaches",
      ],
    },
    {
      icon: BarChart3,
      heading: "Academic Analytics & Insights",
      description: "Turn institutional data into actionable insights for student success.",
      items: [
        "Student performance tracking dashboards",
        "Enrollment trend analysis and forecasting",
        "Research grant management and reporting",
        "Faculty productivity and workload analytics",
      ],
    },
    {
      icon: Users,
      heading: "Student Engagement & CRM",
      description: "Improve recruitment, retention, and alumni relations with smart CRM.",
      items: [
        "Salesforce Education Cloud implementation",
        "Admission and enrollment workflow automation",
        "Student success and advising platform integration",
        "Alumni engagement and fundraising CRM",
      ],
    },
    {
      icon: Monitor,
      heading: "Managed IT & Campus Support",
      description: "Keep campus technology running smoothly with proactive IT management.",
      items: [
        "24/7 helpdesk and technical support for staff and students",
        "Device management across campus networks",
        "Network infrastructure monitoring and optimization",
        "ServiceNow ITSM for university IT operations",
      ],
    },
    {
      icon: GraduationCap,
      heading: "Digital Learning Transformation",
      description: "Accelerate the adoption of digital learning tools and platforms.",
      items: [
        "LMS integration and customization (Canvas, Moodle, Blackboard)",
        "Hybrid learning environment design",
        "AI-powered personalized learning recommendations",
        "Accessibility compliance for digital content",
      ],
    },
  ],
  whyChoose: [
    "Extensive experience with K-12, higher education, and edtech organizations",
    "FERPA and data privacy expertise embedded in every solution",
    "Proven track record in LMS integration and digital campus buildout",
    "Scalable solutions from single institutions to statewide deployments",
    "Dedicated support teams familiar with academic IT challenges",
    "Cost-effective engagement models for education budgets",
  ],
};

const EducationIndustry = () => <ServicePageLayout data={data} />;
export default EducationIndustry;

