import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Brain, Code2, Settings, BarChart3, Cloud, Monitor, Shield, Server, Database, Building2, Landmark, HeartPulse, GraduationCap, Briefcase, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const logo = "/logo.png";

const services = [
  { label: "AI Solutions", path: "/services/ai-solutions", icon: Brain },
  { label: "Software Development", path: "/services/software-development", icon: Code2 },
  { label: "Salesforce Development", path: "/services/salesforce", icon: Settings },
  { label: "Power BI & Analytics", path: "/services/powerbi", icon: BarChart3 },
  { label: "Cloud Solutions (Azure/AWS)", path: "/services/cloud", icon: Cloud },
  { label: "Managed IT Services", path: "/services/managed-it", icon: Monitor },
  { label: "Network & Security", path: "/services/network-security", icon: Shield },
  { label: "ServiceNow Development", path: "/services/servicenow", icon: Server },
  { label: "SAP Security & SAP BTP/Cloud", path: "/services/sap", icon: Database },
];

const industries = [
  { label: "Technology", path: "/industries/technology", icon: Building2 },
  { label: "Finance", path: "/industries/finance", icon: Landmark },
  { label: "Healthcare", path: "/industries/healthcare", icon: HeartPulse },
  { label: "Education", path: "/industries/education", icon: GraduationCap },
  { label: "Enterprise", path: "/industries/enterprise", icon: Briefcase },
  { label: "Government", path: "/industries/government", icon: Globe2 },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services", type: "dropdown" as const },
  { label: "Industries", path: "/industries", type: "dropdown" as const },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServiceActive = location.pathname.startsWith("/services");
  const isIndustryActive = location.pathname.startsWith("/industries");

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ─── Floating dark navbar ─── */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <nav
          className={`relative flex items-center justify-between h-14 md:h-16 px-4 md:px-6 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40"
              : "bg-white/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-white/30"
          }`}
          style={{
            WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(150%)",
            backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(150%)",
          }}
        >
          {/* Left — Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="Accuriantech"
              className="w-9 h-9 md:w-10 md:h-10 object-contain"
            />
            <span className="font-['Montserrat'] font-semibold tracking-tight text-foreground text-lg md:text-xl">
              Accuriantech
            </span>
          </Link>

          {/* Center — Nav links with sliding pill */}
          <div
            ref={navContainerRef}
            className="hidden md:flex items-center gap-0.5 relative bg-gray-900/[0.05] rounded-xl px-1.5 py-1"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const isItemActive = isActive(item.path);
              const isHovered = hoveredItem === item.label;

              if (item.type === "dropdown" && item.label === "Services") {
                return (
                  <div key={item.label} ref={dropdownRef} className="relative">
                    <button
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="relative z-10 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 text-foreground/70 hover:text-foreground"
                    >
                      {(isHovered || isItemActive) && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-accent/10 rounded-lg"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">Services</span>
                      <ChevronDown size={13} className={`relative z-10 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl border border-border/50 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-50 overflow-hidden"
                        >
                          <div className="p-2">
                            {services.map((s) => (
                              <Link
                                key={s.path}
                                to={s.path}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                                  location.pathname === s.path
                                    ? "bg-accent/10 text-accent"
                                    : "text-foreground hover:bg-accent/5 hover:text-accent"
                                }`}
                              >
                                <s.icon size={16} className="text-accent shrink-0" />
                                <span className="font-medium">{s.label}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.type === "dropdown" && item.label === "Industries") {
                return (
                  <div key={item.label} ref={industriesDropdownRef} className="relative">
                    <button
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onClick={() => setIndustriesOpen(!industriesOpen)}
                      className="relative z-10 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 text-foreground/70 hover:text-foreground"
                    >
                      {(isHovered || isItemActive) && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-accent/10 rounded-lg"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">Industries</span>
                      <ChevronDown size={13} className={`relative z-10 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {industriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-xl border border-border/50 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-50 overflow-hidden"
                        >
                          <div className="p-2">
                            {industries.map((ind) => (
                              <Link
                                key={ind.path}
                                to={ind.path}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                                  location.pathname === ind.path
                                    ? "bg-accent/10 text-accent"
                                    : "text-foreground hover:bg-accent/5 hover:text-accent"
                                }`}
                              >
                                <ind.icon size={16} className="text-accent shrink-0" />
                                <span className="font-medium">{ind.label}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  className="relative z-10 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors text-foreground/70 hover:text-foreground"
                >
                  {(isHovered || isItemActive) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent/10 rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right — CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_hsl(218_79%_46%_/_0.3)]"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground ml-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navItems.filter(i => !i.type).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-accent bg-accent/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between w-full ${
                    isServiceActive ? "text-accent bg-accent/10" : "text-foreground/70 hover:text-foreground hover:bg-accent/5"
                  }`}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 flex flex-col gap-0.5">
                        {services.map((s) => (
                          <Link
                            key={s.path}
                            to={s.path}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                              location.pathname === s.path
                                ? "text-accent bg-accent/10"
                                : "text-foreground/60 hover:text-accent hover:bg-accent/5"
                            }`}
                          >
                            <s.icon size={14} className="text-accent" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between w-full ${
                    isIndustryActive ? "text-accent bg-accent/10" : "text-foreground/70 hover:text-foreground hover:bg-accent/5"
                  }`}
                >
                  Industries
                  <ChevronDown size={14} className={`transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 flex flex-col gap-0.5">
                        {industries.map((ind) => (
                          <Link
                            key={ind.path}
                            to={ind.path}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                              location.pathname === ind.path
                                ? "text-accent bg-accent/10"
                                : "text-foreground/60 hover:text-accent hover:bg-accent/5"
                            }`}
                          >
                            <ind.icon size={14} className="text-accent" />
                            {ind.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to="/contact" className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold">
                  Book a Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer to offset fixed navbar */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default Navbar;
