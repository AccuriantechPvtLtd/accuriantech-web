import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import AISolutionsService from "./pages/services/AISolutionsService";
import SoftwareDevelopmentService from "./pages/services/SoftwareDevelopmentService";
import SalesforceService from "./pages/services/SalesforceService";
import PowerBIService from "./pages/services/PowerBIService";
import CloudService from "./pages/services/CloudService";
import ManagedITService from "./pages/services/ManagedITService";
import NetworkSecurityService from "./pages/services/NetworkSecurityService";
import ServiceNowService from "./pages/services/ServiceNowService";
import SAPService from "./pages/services/SAPService";
import TechnologyIndustry from "./pages/industries/TechnologyIndustry";
import FinanceIndustry from "./pages/industries/FinanceIndustry";
import HealthcareIndustry from "./pages/industries/HealthcareIndustry";
import EducationIndustry from "./pages/industries/EducationIndustry";
import EnterpriseIndustry from "./pages/industries/EnterpriseIndustry";
import GovernmentIndustry from "./pages/industries/GovernmentIndustry";
import ScrollToTop from "./components/ScrollToTop";
import FloatingScrollTop from "./components/FloatingScrollTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminJobs from "./pages/AdminJobs";
import RouteBackground from "./components/RouteBackground";
import CursorBackground from "./components/CursorBackground";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-solutions" element={<AISolutionsService />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentService />} />
        <Route path="/services/salesforce" element={<SalesforceService />} />
        <Route path="/services/powerbi" element={<PowerBIService />} />
        <Route path="/services/cloud" element={<CloudService />} />
        <Route path="/services/managed-it" element={<ManagedITService />} />
        <Route path="/services/network-security" element={<NetworkSecurityService />} />
        <Route path="/services/servicenow" element={<ServiceNowService />} />
        <Route path="/services/sap" element={<SAPService />} />
        <Route path="/industries/technology" element={<TechnologyIndustry />} />
        <Route path="/industries/finance" element={<FinanceIndustry />} />
        <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
        <Route path="/industries/education" element={<EducationIndustry />} />
        <Route path="/industries/enterprise" element={<EnterpriseIndustry />} />
        <Route path="/industries/government" element={<GovernmentIndustry />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CursorBackground />
          <RouteBackground />
          <ScrollToTop />
          <FloatingScrollTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
