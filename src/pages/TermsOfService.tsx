import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";
import SEOHead from "@/components/SEOHead";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEOHead
        title="Terms of Service – Accuriantech"
        description="Review Accuriantech's terms of service governing the use of our enterprise IT consulting website and services."
        canonical="https://accuriantech.com/terms-of-service"
      />
      <PageBackdrop variant="soft" />
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: February 16, 2026</p>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/90">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Accuriantech's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Accuriantech provides enterprise technology consulting and implementation services including, but not limited to, Salesforce development, Power BI consulting, cloud support, managed IT services, ServiceNow development, network security, and SAP BASIS & security solutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">3. Use of Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use our website only for lawful purposes and in a manner that does not infringe on the rights of others. You may not use our website to transmit harmful, offensive, or unlawful content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of Accuriantech and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Accuriantech shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">6. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">7. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding these Terms, contact us at{" "}
              <a href="mailto:info@accuriantech.com" className="text-accent hover:underline">info@accuriantech.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
