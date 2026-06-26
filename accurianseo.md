# ACCURIANTECH WEBSITE MASTER AUDIT DOCUMENT

---

## 1. PROJECT OVERVIEW

| Field | Details |
|-------|---------|
| **Website URL** | https://accuriantech.com |
| **Company Name** | Accuriantech |
| **Primary Business** | Enterprise Technology Consulting – Salesforce, Cloud, Power BI, ServiceNow, SAP Security, Network Security & Managed IT Services |
| **Target Audience** | ☑ SMB ☑ Mid-Market ☑ Enterprise ☑ Government ☐ Startups |
| **Primary Goal Of Website** | ☑ Lead Generation ☑ Brand Building ☑ Service Showcase ☑ Recruitment ☑ Thought Leadership |
| **Main Competitors** | Infosys, Wipro Digital, Deloitte Digital, Cognizant, TCS (enterprise tier); Cyient, Mphasis, Persistent Systems (mid-market tier) |

---

## 2. TECHNOLOGY STACK

| Component | Details |
|-----------|---------|
| **Frontend Framework** | ☑ React (Vite + TypeScript + SWC) |
| **UI Library** | Radix UI + shadcn/ui + Tailwind CSS |
| **Animation** | Framer Motion, Vanta.js, Three.js |
| **Backend** | Static SPA (no dedicated backend) |
| **Hosting Platform** | Self-hosted / VPS (Nginx) |
| **CDN** | Not explicitly configured (recommend adding) |
| **Database** | None (static content) |
| **CMS Used** | None (content hardcoded in components) |
| **Build Tool** | Vite 5.x |
| **Analytics Tools** | ☐ Google Analytics ☐ Search Console ☐ Hotjar ☐ Clarity ☐ Other — **None detected** |

---

## 3. WEBSITE STRUCTURE (SITEMAP)

```
Home (/)
About (/about)
Services (/services)
├── AI Solutions (/services/ai-solutions)
├── Software Development (/services/software-development)
├── Salesforce (/services/salesforce)
├── Power BI (/services/powerbi)
├── Cloud (/services/cloud)
├── Managed IT (/services/managed-it)
├── Network Security (/services/network-security)
├── ServiceNow (/services/servicenow)
└── SAP (/services/sap)
Industries
├── Technology (/industries/technology)
├── Finance (/industries/finance)
├── Healthcare (/industries/healthcare)
├── Education (/industries/education)
├── Enterprise (/industries/enterprise)
└── Government (/industries/government)
Blog (/blog)
├── Blog Post (/blog/:slug)
Careers (/careers)
Contact (/contact)
Privacy Policy (/privacy-policy)
Terms of Service (/terms-of-service)
```

---

## 4. CURRENT HOMEPAGE STRUCTURE

Sections in order:

1. Navbar
2. Hero Section
3. Trusted Technology Partners (logos strip)
4. Services Grid
5. Client Success Stories
6. Why Accuriantech
7. Trusted By (client logos)
8. Stats Section
9. Blog Section
10. CTA Section
11. Footer

---

## 5. HERO SECTION

| Field | Details |
|-------|---------|
| **Current Headline** | (To be confirmed from HeroSection component) |
| **Current Subheadline** | (To be confirmed) |
| **Current CTA** | Book a Call / Learn More |
| **Secondary CTA** | Explore Services |
| **Hero Image Type** | ☑ Animation (Vanta.js / Three.js background) |
| **Hero Strategy** | Animated 3D background with enterprise positioning headline, dual CTAs |

---

## 6. SERVICES SECTION

| # | Service Name | Dedicated Page | URL |
|---|-------------|----------------|-----|
| 1 | AI Solutions | ☑ Yes | /services/ai-solutions |
| 2 | Software Development | ☑ Yes | /services/software-development |
| 3 | Salesforce Consulting | ☑ Yes | /services/salesforce |
| 4 | Power BI Consulting | ☑ Yes | /services/powerbi |
| 5 | Cloud Services (Azure/AWS) | ☑ Yes | /services/cloud |
| 6 | Managed IT Services | ☑ Yes | /services/managed-it |
| 7 | Network Security | ☑ Yes | /services/network-security |
| 8 | ServiceNow | ☑ Yes | /services/servicenow |
| 9 | SAP Security | ☑ Yes | /services/sap |

---

## 7. INDUSTRY PAGES

| Industry | URL | Status |
|----------|-----|--------|
| Technology | /industries/technology | ☑ Complete |
| Finance | /industries/finance | ☑ Complete |
| Healthcare | /industries/healthcare | ☑ Complete |
| Education | /industries/education | ☑ Complete |
| Enterprise | /industries/enterprise | ☑ Complete |
| Government | /industries/government | ☑ Complete |

---

## 8. CASE STUDIES / SUCCESS STORIES

| Field | Details |
|-------|---------|
| **Number of Case Studies** | 3 (embedded in Client Success Stories section, not standalone pages) |
| **Available Metrics** | 40% faster delivery, 3x team scalability, 99.9% uptime SLA, 60% cost optimization |
| **Examples** | Accelerating Product Delivery, Cloud Modernization & Optimization, Data & Analytics Transformation |
| **Current Layout** | Timeline/journey visualization with icons, connecting line, and milestone cards |
| **Dedicated Case Study Pages** | ☐ None |

---

## 9. TECHNOLOGY PLATFORMS SECTION

**Platforms Included:**
☑ Salesforce ☑ AWS ☑ Azure ☑ Google Cloud ☑ Power BI ☑ Docker ☑ Kubernetes ☑ Python ☑ Node.js ☑ Java ☑ OpenAI ☑ Claude AI ☑ Google Gemini ☑ ServiceNow ☑ SAP ☑ Microsoft Fabric

**Current Design:** Logo carousel/grid strip showing technology partner logos

---

## 10. ABOUT US SECTION

| Field | Details |
|-------|---------|
| **Current Messaging** | Enterprise technology consulting partner |
| **Leadership Profiles** | ☐ Not confirmed |
| **Years of Experience** | Not explicitly stated on site |
| **Team Size** | Not explicitly stated |
| **Certifications** | Not explicitly listed |
| **Partners** | Salesforce, AWS, Azure, Google Cloud (inferred from logos) |
| **Awards** | Not listed |
| **Location** | Indore, Madhya Pradesh, India (from schema) |

---

## 11. TRUST BUILDING ELEMENTS

**Available:**
☑ Client Logos (TrustedBy section)
☑ Technology Partner Badges (TrustedTechnologyPartners)
☐ Testimonials — Not found
☐ Certifications — Not displayed
☐ Security Statements
☐ Compliance Information
☐ Awards
☑ Case Studies (embedded, not standalone)

**Implementation:** Logo strips on homepage; no dedicated testimonials, certifications, or compliance sections visible.

---

## 12. SEO IMPLEMENTATION

| Element | Status | Details |
|---------|--------|---------|
| **Meta Title** | ☑ Yes | "Accuriantech \| Enterprise Salesforce, Cloud, Power BI & Managed IT" |
| **Meta Description** | ☑ Yes | "Accuriantech delivers enterprise Salesforce, Cloud, Power BI, ServiceNow, SAP Security, and Managed IT services for global teams. Book a free 30-min consultation." |
| **Canonical Tags** | ☑ Yes | https://accuriantech.com/ |
| **Schema Markup** | ☑ Organization ☑ WebSite ☐ Service ☐ FAQ ☐ Breadcrumb |
| **XML Sitemap** | ☑ Yes | /sitemap.xml (23 URLs) |
| **Robots.txt** | ☑ Yes | Allow all, sitemap referenced |
| **Open Graph** | ☑ Yes | Full OG tags (title, description, image, type, url, site_name, locale) |
| **Twitter Cards** | ☑ Yes | summary_large_image |
| **Keywords Meta** | ☑ Yes | (Note: Google ignores this, but present) |
| **Hreflang** | ☐ No | Not implemented |
| **Structured Data for Services** | ☐ No | Missing Service schema for individual service pages |

---

## 13. BLOG / CONTENT STRATEGY

| Field | Details |
|-------|---------|
| **Blog Available** | ☑ Yes (/blog) |
| **Number of Blogs** | To be confirmed (at least 1 — enterprise-ai-security article found) |
| **Publishing Frequency** | Unknown / Irregular |
| **Main Categories** | AI, Security, Enterprise (inferred) |
| **Author Profiles** | ☐ Unknown |
| **Internal Linking Strategy** | Not evident |
| **CMS** | None — blog content likely hardcoded or markdown-based (BlogRenderer component) |

---

## 14. PERFORMANCE

| Metric | Score/Status |
|--------|-------------|
| **PageSpeed Mobile Score** | Not tested (recommend running) |
| **PageSpeed Desktop Score** | Not tested (recommend running) |
| **Largest Contentful Paint** | Unknown |
| **CLS** | Unknown |
| **INP** | Unknown |
| **Image Optimization** | Mixed — SVGs used for logos ☑, some PNGs/JPGs unoptimized, ☐ WebP not consistently used |
| **Lazy Loading** | ☐ Not explicitly configured |
| **Code Splitting** | Vite handles automatic chunk splitting |
| **Bundle Size Concerns** | Three.js + Vanta.js add significant weight for hero animation |

---

## 15. CONVERSION OPTIMIZATION

| Field | Details |
|-------|---------|
| **Primary CTA** | "Book a Call" |
| **Secondary CTA** | "Explore Services" / "Learn More" |
| **Contact Form** | Available on /contact |
| **Calendly Integration** | ☐ Not confirmed |
| **Lead Magnets** | ☐ None detected (no whitepapers, guides, checklists, assessments) |
| **Current Conversion Funnel** | Homepage → Service page → Contact page → Form submission |
| **Exit Intent Popups** | ☐ None |
| **Chatbot / Live Chat** | ☐ None |

---

## 16. DESIGN SYSTEM

| Element | Details |
|---------|---------|
| **Primary Color** | #1f5fcc (Blue) / #2563EB |
| **Secondary Color** | #7C3AED (Purple) / #EC4899 (Pink) |
| **Background** | #F8FAFC (light gray-blue) |
| **Dark Text** | #0F172A / #1E293B |
| **Muted Text** | #64748B / #94A3B8 |
| **Font Family** | System font stack (font-heading custom) |
| **Animation Library** | Framer Motion |
| **3D/Background** | Three.js + Vanta.js |
| **Spacing System** | Tailwind CSS default (4px base) |
| **Component Library** | shadcn/ui (Radix primitives) |
| **Icon Library** | Lucide React |

---

## 17. CURRENT PROBLEMS

### Critical Issues
1. **No Analytics** — No Google Analytics, Search Console, or any tracking detected. Zero data on visitors, conversions, or behavior.
2. **No Testimonials** — Zero social proof from actual clients. Missing quotes, video testimonials, or client success stories with names.
3. **No Dedicated Case Study Pages** — Success stories are only a homepage section, not full detailed case studies with before/after metrics.
4. **Blog Content Sparse** — Very few articles, no publishing cadence, no content calendar evident.

### SEO Issues
5. **Missing Service Schema** — Individual service pages lack structured data (Service, FAQ schemas).
6. **No Breadcrumb Schema** — Navigation structure not communicated to search engines.
7. **No FAQ Schema** — Missing rich snippet opportunities.
8. **No hreflang** — Serving US and India but no language/region tags.
9. **Keywords meta tag** — Present but irrelevant (Google ignores it since 2009).

### Performance Issues
10. **Heavy 3D Libraries** — Three.js + Vanta.js loaded on every page for hero animation; significant bundle weight.
11. **No CDN** — Static assets served directly without edge caching.
12. **Image Optimization** — Mix of PNG/JPG without consistent WebP conversion or lazy loading.
13. **Large Binary Files in Public** — .exe and .msi files (Antigravity IDE, Mattermost) served from public folder.

### Conversion Issues
14. **No Lead Magnets** — No downloadable resources to capture emails.
15. **No Chat/Bot** — No immediate engagement option for visitors.
16. **No Exit Intent** — Visitors leave without any retention mechanism.
17. **Weak CTA Strategy** — Generic "Book a Call" without urgency, specificity, or value proposition.

### Content Issues
18. **No Client Logos with Permission** — TrustedBy section exists but unclear if logos are authorized.
19. **No Team/Leadership Page** — No faces, bios, or credentials visible. Reduces trust.
20. **No Certifications Displayed** — Partner badges/certifications not showcased.
21. **No Video Content** — No explainer videos, demos, or client testimonials.

### Design Issues
22. **Client Success Stories Timeline** — Layout issues with icon positioning and line alignment on different screen sizes.
23. **No Dark Mode** — next-themes installed but not implemented consistently.

---

## 18. FUTURE VISION

**What should visitors think within 10 seconds?**

> "This is a serious enterprise technology partner that delivers measurable outcomes — they understand Salesforce, Cloud, Power BI, and managed services at scale, and they have the case studies and team to back it up."

---

## 19. ASSETS TO SHARE

| Asset | Status |
|-------|--------|
| Homepage Screenshot | ☐ To capture |
| Mobile Screenshot | ☐ To capture |
| Service Pages Screenshots | ☐ To capture |
| About Page Screenshot | ☐ To capture |
| Sitemap | ☑ Available (/sitemap.xml — 23 URLs) |
| Analytics Screenshot | ☐ N/A (no analytics installed) |
| Search Console Screenshot | ☐ N/A (not confirmed) |
| Lighthouse Report | ☐ To run |
| Figma Design | ☐ Not available |
| Source Code Structure | ☑ Available (React + Vite + TypeScript) |

---

## 20. FINAL REQUEST — RECOMMENDED AUDIT SCOPE

| Audit Type | Priority |
|------------|----------|
| ☑ UI/UX Audit | HIGH |
| ☑ Enterprise Positioning Audit | HIGH |
| ☑ SEO Audit | HIGH |
| ☑ Conversion Audit | HIGH |
| ☑ Content Audit | MEDIUM |
| ☑ Competitor Comparison | MEDIUM |
| ☑ Complete Improvement Roadmap | HIGH |
| ☐ Wireframes | As needed |
| ☑ Copy Rewrite | MEDIUM |
| ☑ Landing Page Strategy | MEDIUM |
| ☑ Thought Leadership Strategy | MEDIUM |

---

## IMMEDIATE ACTION ITEMS (TOP 5)

1. **Install Google Analytics 4 + Search Console** — You're flying blind without data.
2. **Add structured data** — Service schema on all 9 service pages, FAQ schema, Breadcrumb schema.
3. **Create 3-5 detailed case studies** — Standalone pages with client name (or anonymized), problem, solution, metrics, timeline.
4. **Optimize performance** — Lazy-load Three.js/Vanta, convert images to WebP, add CDN.
5. **Add lead magnets & testimonials** — Downloadable guides + real client quotes to build trust and capture leads.

---

*Document generated: June 13, 2026*
*Source: Codebase analysis of accuriantech-digital-hub repository*
