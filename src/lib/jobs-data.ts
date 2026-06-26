export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Internship" | "Contract";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  benefits: string[];
  isActive: boolean;
}

export const JOBS: Job[] = [
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "3-5 years",
    description: "Design, implement, and maintain CI/CD pipelines, cloud infrastructure, and automation systems for enterprise clients.",
    responsibilities: [
      "Design and maintain CI/CD pipelines using GitHub Actions, Azure DevOps, or Jenkins",
      "Manage cloud infrastructure on AWS and Azure using Terraform/Pulumi",
      "Implement container orchestration with Docker and Kubernetes",
      "Monitor system health and optimize performance",
      "Collaborate with development teams on deployment strategies",
    ],
    requirements: [
      "3+ years of DevOps/SRE experience",
      "Strong knowledge of AWS or Azure cloud services",
      "Experience with Docker, Kubernetes, and container orchestration",
      "Proficiency in at least one scripting language (Python, Bash, PowerShell)",
      "Experience with Infrastructure as Code (Terraform preferred)",
    ],
    preferred: [
      "AWS/Azure certifications",
      "Experience with monitoring tools (Datadog, Prometheus, Grafana)",
      "Knowledge of security best practices and compliance frameworks",
    ],
    benefits: [
      "Competitive salary",
      "Remote-first culture",
      "Learning & certification budget",
      "Flexible working hours",
      "Work on enterprise-scale projects",
    ],
    isActive: true,
  },
  {
    id: "python-developer",
    title: "Python Developer",
    department: "AI & Engineering",
    location: "Remote",
    type: "Full-Time",
    experience: "2-4 years",
    description: "Build AI-powered solutions, data pipelines, and backend services using Python for enterprise clients.",
    responsibilities: [
      "Develop and maintain Python-based backend services and APIs",
      "Build data pipelines and ETL processes",
      "Implement AI/ML models and integrate them into production systems",
      "Write clean, testable, and well-documented code",
      "Participate in code reviews and technical design discussions",
    ],
    requirements: [
      "2+ years of professional Python development",
      "Experience with FastAPI, Django, or Flask",
      "Knowledge of SQL and NoSQL databases",
      "Understanding of REST API design principles",
      "Familiarity with Git and agile development workflows",
    ],
    preferred: [
      "Experience with AI/ML libraries (PyTorch, scikit-learn, LangChain)",
      "Cloud deployment experience (AWS Lambda, Azure Functions)",
      "Knowledge of data engineering tools (Airflow, dbt)",
    ],
    benefits: [
      "Competitive salary",
      "Remote-first culture",
      "Learning & certification budget",
      "Flexible working hours",
      "Exposure to AI and enterprise projects",
    ],
    isActive: true,
  },
  {
    id: "qa-engineer",
    title: "QA Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2-3 years",
    description: "Ensure quality across enterprise applications through manual and automated testing strategies.",
    responsibilities: [
      "Design and execute test plans for web and API applications",
      "Build and maintain automated test suites",
      "Perform regression, integration, and performance testing",
      "Report and track bugs with clear reproduction steps",
      "Collaborate with developers to improve code quality",
    ],
    requirements: [
      "2+ years of QA/testing experience",
      "Experience with test automation frameworks (Selenium, Playwright, Cypress)",
      "Knowledge of API testing tools (Postman, REST Assured)",
      "Understanding of CI/CD and how testing fits in the pipeline",
      "Strong attention to detail and analytical thinking",
    ],
    preferred: [
      "Experience with performance testing (JMeter, k6)",
      "ISTQB certification",
      "Experience testing Salesforce or ServiceNow applications",
    ],
    benefits: [
      "Competitive salary",
      "Remote-first culture",
      "Learning & certification budget",
      "Flexible working hours",
      "Career growth path to Senior QA / QA Lead",
    ],
    isActive: true,
  },
  {
    id: "salesforce-developer",
    title: "Salesforce Developer",
    department: "Salesforce Practice",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "3-5 years",
    description: "Build and customize Salesforce solutions including Sales Cloud, Service Cloud, and custom applications for enterprise clients.",
    responsibilities: [
      "Develop custom Apex classes, triggers, and Lightning Web Components",
      "Implement Salesforce integrations using REST/SOAP APIs",
      "Configure and customize Sales Cloud, Service Cloud, and Experience Cloud",
      "Participate in solution design and architecture discussions",
      "Mentor junior developers and conduct code reviews",
    ],
    requirements: [
      "3+ years of Salesforce development experience",
      "Strong knowledge of Apex, LWC, and SOQL",
      "Experience with Salesforce integrations and data migration",
      "Salesforce Platform Developer I certification (minimum)",
      "Understanding of Salesforce best practices and governor limits",
    ],
    preferred: [
      "Platform Developer II or Architect certifications",
      "Experience with OmniStudio and Vlocity",
      "Knowledge of Salesforce DevOps (CI/CD for Salesforce)",
    ],
    benefits: [
      "Competitive salary",
      "Remote-first culture",
      "Certification sponsorship",
      "Flexible working hours",
      "Work with enterprise Salesforce implementations",
    ],
    isActive: true,
  },
  {
    id: "power-bi-intern",
    title: "Power BI Intern",
    department: "Analytics & BI",
    location: "Remote",
    type: "Internship",
    experience: "0-1 year",
    description: "Assist in designing dashboards, data modeling, and building interactive reports for real client projects.",
    responsibilities: [
      "Assist in building Power BI dashboards and reports",
      "Learn data modeling with Power Query and DAX",
      "Help with data cleaning and transformation tasks",
      "Support senior analysts in client deliverables",
      "Document data sources and report specifications",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in CS, Data Science, or related field",
      "Basic understanding of SQL and databases",
      "Familiarity with Power BI or similar BI tools",
      "Strong analytical and problem-solving skills",
      "Excellent communication skills",
    ],
    preferred: [
      "Power BI certification (PL-300)",
      "Experience with Python or R for data analysis",
      "Knowledge of data warehousing concepts",
    ],
    benefits: [
      "Stipend provided",
      "Remote work",
      "Mentorship from senior analysts",
      "Real client project experience",
      "Certificate of completion",
      "Potential full-time conversion",
    ],
    isActive: true,
  },
  {
    id: "cloud-engineer-intern",
    title: "Cloud Engineer Intern",
    department: "Cloud Services",
    location: "Remote",
    type: "Internship",
    experience: "0-1 year",
    description: "Assist with Azure and AWS cloud operations, monitoring, and infrastructure setup.",
    responsibilities: [
      "Assist with cloud resource provisioning and management",
      "Learn infrastructure monitoring and alerting",
      "Help with documentation of cloud architecture",
      "Support senior engineers in migration projects",
      "Participate in daily standups and agile ceremonies",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in CS or IT",
      "Basic understanding of cloud computing concepts",
      "Familiarity with Linux command line",
      "Eagerness to learn and grow",
      "Good communication skills",
    ],
    preferred: [
      "AWS Cloud Practitioner or Azure Fundamentals certification",
      "Experience with any programming language",
      "Familiarity with networking concepts",
    ],
    benefits: [
      "Stipend provided",
      "Remote work",
      "Hands-on cloud experience",
      "Mentorship program",
      "Certificate of completion",
      "Potential full-time conversion",
    ],
    isActive: true,
  },
];
