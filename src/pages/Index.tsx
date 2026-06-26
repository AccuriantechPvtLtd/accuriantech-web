import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustedTechnologyPartners from "@/components/TrustedTechnologyPartners";
import TrustedBy from "@/components/TrustedBy";
import ServicesGrid from "@/components/ServicesGrid";
import ClientSuccessStories from "@/components/ClientSuccessStories";
import WhyAccuriantech from "@/components/WhyAccuriantech";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import SEOHead from "@/components/SEOHead";
import PageTransition from "@/components/PageTransition";


const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <SEOHead
          title="Accuriantech | Enterprise Salesforce, Cloud, Power BI & Managed IT"
          description="Accuriantech delivers enterprise Salesforce, Cloud, Power BI, ServiceNow, SAP Security, and Managed IT services for global teams. Book a free 30-min consultation."
          canonical="https://accuriantech.com/"
          keywords="Accuriantech, Salesforce development, Power BI consulting, Azure AWS cloud, managed IT services, ServiceNow, SAP security, enterprise IT solutions"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Accuriantech – Enterprise Salesforce, Cloud, Power BI & Managed IT",
            "description": "Accuriantech delivers enterprise Salesforce, Cloud, Power BI, ServiceNow, SAP Security, and Managed IT services for global teams.",
            "url": "https://accuriantech.com/",
            "publisher": {
              "@type": "Organization",
              "name": "Accuriantech",
              "url": "https://accuriantech.com"
            }
          }}
        />
        <Navbar />
        <HeroSection />
        <TrustedTechnologyPartners />
        <ServicesGrid />
        <ClientSuccessStories />
        <WhyAccuriantech />
        <TrustedBy />
        <StatsSection />
        <BlogSection />
        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
