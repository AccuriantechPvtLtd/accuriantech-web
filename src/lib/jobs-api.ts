/**
 * Jobs API Service — connects to Google Sheets via Apps Script Web App
 * 
 * Replace APPS_SCRIPT_URL with your deployed Google Apps Script URL.
 */

const APPS_SCRIPT_URL = import.meta.env.VITE_JOBS_API_URL || "";

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
  createdAt?: string;
}

export interface Application {
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  linkedin: string;
  message: string;
  resumeData: string;
  resumeName: string;
  resumeMime: string;
}

// ═══ GET requests ═══

export async function fetchActiveJobs(): Promise<Job[]> {
  if (!APPS_SCRIPT_URL) return getFallbackJobs();
  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?action=getActive`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error("Failed to fetch jobs:", e);
    return getFallbackJobs();
  }
}

export async function fetchAllJobs(): Promise<Job[]> {
  if (!APPS_SCRIPT_URL) return getFallbackJobs();
  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?action=getAll`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error("Failed to fetch jobs:", e);
    return getFallbackJobs();
  }
}

// ═══ POST requests (Admin) ═══

export async function createJob(job: Partial<Job>): Promise<{ success: boolean; id?: string }> {
  if (!APPS_SCRIPT_URL) return { success: false };
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ action: "create", job }),
  });
  return res.json();
}

export async function updateJob(id: string, updates: Partial<Job>): Promise<{ success: boolean }> {
  if (!APPS_SCRIPT_URL) return { success: false };
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ action: "update", id, job: updates }),
  });
  return res.json();
}

export async function deleteJobApi(id: string): Promise<{ success: boolean }> {
  if (!APPS_SCRIPT_URL) return { success: false };
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ action: "delete", id }),
  });
  return res.json();
}

export async function toggleJobApi(id: string): Promise<{ success: boolean; isActive?: boolean }> {
  if (!APPS_SCRIPT_URL) return { success: false };
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ action: "toggle", id }),
  });
  return res.json();
}

export async function submitApplication(application: Application): Promise<{ success: boolean }> {
  if (!APPS_SCRIPT_URL) return { success: true }; // Fake success when no API
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ action: "apply", application }),
  });
  return res.json();
}

// ═══ Fallback data (when API URL not configured) ═══

function getFallbackJobs(): Job[] {
  return [
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Remote / Hybrid",
      type: "Full-Time",
      experience: "3-5 years",
      description: "Design, implement, and maintain CI/CD pipelines, cloud infrastructure, and automation systems for enterprise clients.",
      responsibilities: ["Design and maintain CI/CD pipelines", "Manage cloud infrastructure on AWS and Azure", "Implement container orchestration with Docker and Kubernetes", "Monitor system health and optimize performance"],
      requirements: ["3+ years of DevOps/SRE experience", "Strong knowledge of AWS or Azure", "Experience with Docker and Kubernetes", "Proficiency in Python, Bash, or PowerShell"],
      preferred: ["AWS/Azure certifications", "Experience with monitoring tools"],
      benefits: ["Competitive salary", "Remote-first culture", "Learning budget", "Flexible hours"],
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
      responsibilities: ["Develop Python-based backend services and APIs", "Build data pipelines and ETL processes", "Implement AI/ML models", "Write clean, testable code"],
      requirements: ["2+ years of Python development", "Experience with FastAPI or Django", "Knowledge of SQL and NoSQL databases", "REST API design"],
      preferred: ["Experience with AI/ML libraries", "Cloud deployment experience"],
      benefits: ["Competitive salary", "Remote-first culture", "Learning budget", "AI project exposure"],
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
      responsibilities: ["Design and execute test plans", "Build automated test suites", "Perform regression and performance testing", "Report and track bugs"],
      requirements: ["2+ years of QA experience", "Test automation frameworks (Selenium, Playwright)", "API testing tools", "CI/CD understanding"],
      preferred: ["Performance testing experience", "ISTQB certification"],
      benefits: ["Competitive salary", "Remote-first", "Learning budget", "Career growth path"],
      isActive: true,
    },
    {
      id: "salesforce-developer",
      title: "Salesforce Developer",
      department: "Salesforce Practice",
      location: "Remote / Hybrid",
      type: "Full-Time",
      experience: "3-5 years",
      description: "Build and customize Salesforce solutions for enterprise clients.",
      responsibilities: ["Develop Apex classes and LWC", "Implement Salesforce integrations", "Configure Sales/Service Cloud", "Conduct code reviews"],
      requirements: ["3+ years Salesforce development", "Strong Apex and LWC knowledge", "Platform Developer I certification"],
      preferred: ["Platform Developer II certification", "OmniStudio experience"],
      benefits: ["Competitive salary", "Remote-first", "Certification sponsorship", "Enterprise projects"],
      isActive: true,
    },
    {
      id: "power-bi-intern",
      title: "Power BI Intern",
      department: "Analytics & BI",
      location: "Remote",
      type: "Internship",
      experience: "0-1 year",
      description: "Assist in designing dashboards and building interactive reports for client projects.",
      responsibilities: ["Build Power BI dashboards", "Learn data modeling with DAX", "Support senior analysts"],
      requirements: ["Degree in CS or Data Science", "Basic SQL knowledge", "Familiarity with Power BI"],
      preferred: ["PL-300 certification", "Python for data analysis"],
      benefits: ["Stipend", "Remote work", "Mentorship", "Full-time potential"],
      isActive: true,
    },
    {
      id: "cloud-engineer-intern",
      title: "Cloud Engineer Intern",
      department: "Cloud Services",
      location: "Remote",
      type: "Internship",
      experience: "0-1 year",
      description: "Assist with Azure and AWS cloud operations and infrastructure setup.",
      responsibilities: ["Assist with cloud provisioning", "Learn monitoring and alerting", "Support migration projects"],
      requirements: ["Degree in CS or IT", "Basic cloud concepts", "Linux command line"],
      preferred: ["AWS/Azure fundamentals cert", "Any programming language"],
      benefits: ["Stipend", "Remote work", "Hands-on experience", "Full-time potential"],
      isActive: true,
    },
  ];
}
