import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SERVICES, INDUSTRIES } from "@/lib/site-data";
const logo = "/logo.png";

const COMPANY_LINKS = [
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
  { label: "Why Accuriantech?", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const SOLUTIONS = [
  { label: "Salesforce", path: "/services/salesforce" },
  { label: "ServiceNow", path: "/services/servicenow" },
  { label: "SAP", path: "/services/sap" },
  { label: "Power BI", path: "/services/powerbi" },
  { label: "Cloud", path: "/services/cloud" },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      aria-labelledby="site-footer-heading"
    >
      <h2 id="site-footer-heading" className="sr-only">
        Accuriantech site footer
      </h2>

      {/* ─── TOP BAND: Logo + description + social ─── */}
      <div className="bg-[#0f1b2d] text-white">
        <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src={logo}
              alt="Accuriantech logo"
              className="w-12 h-12 object-contain"
              width={48}
              height={48}
            />
            <span className="font-heading font-bold text-2xl tracking-tight">
              Accuriantech
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mb-8">
            At Accuriantech, we help organizations accelerate business outcomes and deliver superior
            customer experiences at scale using CRM, ERP, and AI solutions for various industries.
            At our core, we pledge to deliver value, reliability, and cutting-edge solutions to
            complex business challenges.
          </p>

          {/* Social icons inside a pill/capsule with glare line */}
          <div className="relative inline-flex items-center gap-4 px-6 py-3 rounded-full border border-[hsl(218,79%,46%)/0.5] bg-white/5">

            <a
              href="https://www.linkedin.com/company/accuriantech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border-2 border-[hsl(218,79%,46%)] flex items-center justify-center text-[hsl(218,79%,46%)] hover:bg-[hsl(218,79%,46%)] hover:text-white transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/accuriantech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-11 h-11 rounded-full border-2 border-[hsl(218,79%,46%)] flex items-center justify-center text-[hsl(218,79%,46%)] hover:bg-[hsl(218,79%,46%)] hover:text-white transition-all duration-200"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://facebook.com/accuriantech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full border-2 border-[hsl(218,79%,46%)] flex items-center justify-center text-[hsl(218,79%,46%)] hover:bg-[hsl(218,79%,46%)] hover:text-white transition-all duration-200"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com/accuriantech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border-2 border-[hsl(218,79%,46%)] flex items-center justify-center text-[hsl(218,79%,46%)] hover:bg-[hsl(218,79%,46%)] hover:text-white transition-all duration-200"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ─── MIDDLE BAND: Multi-column links ─── */}
      <div className="bg-[#0a1628] text-white">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* IT Services */}
            <nav aria-label="IT Services">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-5">
                IT Services
              </h3>
              <ul className="space-y-3 text-sm">
                {SERVICES.map((s) => (
                  <li key={s.path}>
                    <Link
                      to={s.path}
                      className="text-gray-400 hover:text-[hsl(218,79%,60%)] transition-colors duration-200"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Solutions */}
            <nav aria-label="Solutions">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-5">
                Solutions
              </h3>
              <ul className="space-y-3 text-sm">
                {SOLUTIONS.map((s) => (
                  <li key={s.path}>
                    <Link
                      to={s.path}
                      className="text-gray-400 hover:text-[hsl(218,79%,60%)] transition-colors duration-200"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Industries */}
            <nav aria-label="Industries">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-5">
                Industries
              </h3>
              <ul className="space-y-3 text-sm">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.path}>
                    <Link
                      to={ind.path}
                      className="text-gray-400 hover:text-[hsl(218,79%,60%)] transition-colors duration-200"
                    >
                      {ind.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-5">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                {COMPANY_LINKS.map((s) => (
                  <li key={s.label}>
                    <Link
                      to={s.path}
                      className="text-gray-400 hover:text-[hsl(218,79%,60%)] transition-colors duration-200"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-5">
                Contact
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-gray-400">
                  <Mail size={15} className="mt-0.5 text-[hsl(218,79%,56%)] shrink-0" />
                  <a
                    href="mailto:info@accuriantech.com"
                    className="hover:text-[hsl(218,79%,60%)] transition-colors break-all"
                  >
                    info@accuriantech.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <MapPin size={15} className="mt-0.5 text-[hsl(218,79%,56%)] shrink-0" />
                  <span>Indore, India</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <Phone size={15} className="mt-0.5 text-[hsl(218,79%,56%)] shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="hover:text-[hsl(218,79%,60%)] transition-colors"
                  >
                    Call Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM BAR: Copyright + policy links ─── */}
      <div className="bg-[#060e1a] text-gray-400">
        <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>
            All rights reserved &copy; {new Date().getFullYear()} Accuriantech.com
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/terms-of-service" className="hover:text-[hsl(218,79%,60%)] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/privacy-policy" className="hover:text-[hsl(218,79%,60%)] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/privacy-policy" className="hover:text-[hsl(218,79%,60%)] transition-colors">
              Cookies Policy
            </Link>
            <span className="text-gray-600">|</span>
            <span>Powered By Accuriantech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
