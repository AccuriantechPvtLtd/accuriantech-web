import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Clock, ShieldCheck, CheckCircle2, AlertCircle, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRef, useState, useCallback } from "react";
import SEOHead from "@/components/SEOHead";
import PageBackdrop from "@/components/PageBackdrop";
import SubmissionOverlay from "@/components/SubmissionOverlay";

const CONTACT_FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL || "";

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Honeypot — real users won't fill this; bots typically will.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const lastSubmitRef = useRef<number>(0);

  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Full Name is required";
    if (!email.trim()) {
      newErrors.email = "Work Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, email, message]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setService("");
    setTimeline("");
    setMessage("");
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Bot rejection — silently succeed without hitting the backend.
    if (honeypotRef.current && honeypotRef.current.value.trim() !== "") {
      setStatus("success");
      return;
    }

    // Prevent duplicate rapid submissions (3 second cooldown)
    const now = Date.now();
    if (now - lastSubmitRef.current < 3000) return;

    if (!validateForm()) return;

    lastSubmitRef.current = now;
    setStatus("loading");

    try {
      // Google Apps Script requires text/plain to avoid CORS preflight
      const response = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          phone: phone.trim(),
          solution: service,
          timeline: timeline,
          message: message.trim(),
        }),
      });

      // Google Apps Script redirects (302) on success; fetch follows it automatically
      let result: { success?: boolean } = {};
      try {
        result = await response.json();
      } catch {
        // If we can't parse JSON but got a response, treat as success
        // (Google Apps Script sometimes returns opaque redirects)
        if (response.ok || response.type === "opaque" || response.redirected) {
          result = { success: true };
        }
      }

      if (result.success) {
        resetForm();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <PageTransition>
    <div className="min-h-screen relative overflow-hidden">
      <SEOHead
        title="Contact Accuriantech – Book a Free 30-min Consultation"
        description="Talk to Accuriantech about Salesforce, Power BI, Cloud, ServiceNow, SAP Security, and Managed IT. India + US delivery. We respond within 24 business hours."
        canonical="https://accuriantech.com/contact"
        keywords="contact Accuriantech, IT consulting contact, Salesforce consulting contact, enterprise IT support"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Accuriantech",
          "url": "https://accuriantech.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Accuriantech",
            "url": "https://accuriantech.com",
            "logo": "https://accuriantech.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Indore",
              "addressCountry": "IN",
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "info@accuriantech.com",
                "availableLanguage": ["en"],
                "areaServed": ["IN", "US", "Worldwide"],
              },
            ],
          },
        }}
      />
      <PageBackdrop />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-cyan blur-[120px]" />
          <div className="absolute bottom-0 right-[8%] w-80 h-80 rounded-full bg-blue-400/30 blur-[110px]" />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(204 95% 56% / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(204 95% 56% / 0.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-cyan text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mt-3 mb-4">
              Book a Free 30-min Consultation
            </h1>
            <p className="text-primary-foreground/60 max-w-2xl text-lg">
              Tell us where you are today. We'll outline the lowest-risk path to your goals — no slides, no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Let's Talk</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need Salesforce development, cloud migration, Power BI dashboards, or managed IT support — our team is ready to help.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center" aria-hidden>
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:info@accuriantech.com" className="text-foreground font-medium hover:text-accent transition-colors">
                      info@accuriantech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center" aria-hidden>
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <span className="text-foreground font-medium">Indore, India · serving global clients</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center" aria-hidden>
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response time</p>
                    <span className="text-foreground font-medium">Within 24 business hours</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-card p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-accent shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">NDA-ready engagements</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Your data stays private. We never share inquiries with third parties and we'll sign your NDA before discovery if needed.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass-card p-8 md:p-10 relative"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">Send Us an Inquiry</h3>
              <p className="text-sm text-muted-foreground mb-6">
                We respond within 24 business hours. Your data is never shared.
              </p>
              <SubmissionOverlay visible={status === "loading"} message="Submitting your enquiry..." />
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot — hidden from real users, picked up by bots */}
                <div aria-hidden className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    ref={honeypotRef}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((prev) => ({ ...prev, name: "" })); }}
                      placeholder="Full Name"
                      required
                      maxLength={100}
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      className={errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((prev) => ({ ...prev, email: "" })); }}
                      placeholder="you@company.com"
                      required
                      maxLength={255}
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      className={errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company name"
                      maxLength={150}
                      autoComplete="organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-muted-foreground font-normal">(Optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 (000) 000-0000"
                      maxLength={20}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="service">Solution of Interest</Label>
                    <Select name="service" value={service} onValueChange={setService}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a solution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                        <SelectItem value="software-development">Software Development</SelectItem>
                        <SelectItem value="salesforce">Salesforce Development</SelectItem>
                        <SelectItem value="powerbi">Power BI & Analytics</SelectItem>
                        <SelectItem value="cloud">Cloud Solutions (Azure/AWS)</SelectItem>
                        <SelectItem value="managed-it">Managed IT Services</SelectItem>
                        <SelectItem value="servicenow">ServiceNow Development</SelectItem>
                        <SelectItem value="network-security">Network & Security</SelectItem>
                        <SelectItem value="sap">SAP Security & SAP BTP/Cloud</SelectItem>
                        <SelectItem value="other">Other / Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Estimated Timeline</Label>
                    <Select name="timeline" value={timeline} onValueChange={setTimeline}>
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="When do you want to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="1-3-months">1–3 months</SelectItem>
                        <SelectItem value="3-6-months">3–6 months</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors((prev) => ({ ...prev, message: "" })); }}
                    placeholder="Briefly describe your project, current stack, or the outcome you're targeting…"
                    rows={5}
                    required
                    maxLength={1500}
                    aria-invalid={!!errors.message}
                    className={errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send My Inquiry
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-accent">
                    Privacy Policy
                  </a>
                  . We respond within 1 business day.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success / Error Modal */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm"
            onClick={() => setStatus("idle")}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white rounded-xl w-full max-w-md p-8 shadow-xl text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setStatus("idle")}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#F1F5F9] transition-colors"
                aria-label="Close"
              >
                <X size={16} className="text-[#64748B]" />
              </button>

              {status === "success" ? (
                <>
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2">Thank You!</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Your enquiry has been submitted successfully.<br />
                    Our team will review your request and contact you within one business day.
                  </p>
                  <Button onClick={() => setStatus("idle")} className="w-full">
                    Close
                  </Button>
                </>
              ) : (
                <>
                  <div className="w-14 h-14 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mx-auto mb-5">
                    <AlertCircle size={28} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2">Something went wrong</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    We couldn't submit your enquiry.<br />
                    Please try again in a few moments.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStatus("idle")} className="flex-1">
                      Close
                    </Button>
                    <Button onClick={() => { setStatus("idle"); }} className="flex-1">
                      Try Again
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Contact;
