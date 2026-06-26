import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEOHead
        title="Privacy Policy – Accuriantech"
        description="Read Accuriantech's privacy policy. Learn how we collect, use, and protect your personal information when you use our enterprise IT consulting services."
        canonical="https://accuriantech.com/privacy-policy"
      />
      <PageBackdrop variant="soft" />
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: February 16, 2026</p>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/90">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Accuriantech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about our services, contact us, or otherwise interact with us. This includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1.5">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and job title</li>
              <li>Information submitted through inquiry forms</li>
              <li>Usage data and analytics (cookies, IP address, browser type)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1.5">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">4. Data Sharing & Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us at info@accuriantech.com.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-semibold text-foreground">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@accuriantech.com" className="text-accent hover:underline">info@accuriantech.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
