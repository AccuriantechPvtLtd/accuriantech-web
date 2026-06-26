import { useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, X, CheckCircle2, Upload } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { fetchActiveJobs, submitApplication, type Job } from "@/lib/jobs-api";
import SubmissionOverlay from "@/components/SubmissionOverlay";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeJobs, setActiveJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActiveJobs().then((jobs) => {
      setActiveJobs(jobs);
      setLoading(false);
    });
  }, []);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowForm(true);
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    setSubmitting(true);

    // Convert file to base64
    let resumeData = "";
    let resumeName = "";
    let resumeMime = "";
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput?.files?.[0]) {
      const file = fileInput.files[0];
      resumeName = file.name;
      resumeMime = file.type;
      resumeData = await fileToBase64(file);
    }

    await submitApplication({
      jobId: selectedJob?.id || "",
      jobTitle: selectedJob?.title || "",
      name: formData.get("name") as string || "",
      email: formData.get("email") as string || "",
      phone: formData.get("phone") as string || "",
      location: formData.get("location") as string || "",
      experience: formData.get("experience") as string || "",
      linkedin: formData.get("linkedin") as string || "",
      message: formData.get("message") as string || "",
      resumeData,
      resumeName,
      resumeMime,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data:...;base64, prefix
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedJob(null);
    setSubmitted(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <SEOHead
          title="Careers at Accuriantech – Join Our Technology Team"
          description="Explore career opportunities at Accuriantech. Join our growing team of cloud engineers, AI developers, Salesforce consultants, and technology professionals."
          canonical="https://accuriantech.com/careers"
          keywords="Accuriantech careers, IT jobs, DevOps engineer jobs, Python developer, cloud engineer jobs, Salesforce developer"
        />
        <Navbar />

        {/* Hero */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          {/* Background image */}
          <img src="/careers-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />
          <div className="container mx-auto px-4 md:px-8 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="text-[#93C5FD] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-3">
                Careers at Accuriantech
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight max-w-2xl">
                Build the Future of Enterprise Technology
              </h1>
              <p className="text-white/70 text-[15px] md:text-base max-w-xl leading-relaxed mb-6">
                Join a team delivering cloud, AI, data, and enterprise transformation solutions for modern businesses.
              </p>
              <a href="#positions" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#2563EB] text-[13px] font-semibold hover:bg-white/90 transition-colors">
                View Open Positions <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Real Projects", desc: "Work on live enterprise projects across Salesforce, Cloud, AI, and IT from day one." },
                { title: "Growth & Learning", desc: "Mentorship, certifications, and hands-on experience with modern technologies." },
                { title: "Flexible Work", desc: "Remote-first culture with hybrid options. Work from anywhere with a great team." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-[#E8ECF0] bg-white p-6 text-center"
                >
                  <h3 className="text-[15px] font-heading font-bold text-[#0F172A] mb-1.5">{item.title}</h3>
                  <p className="text-[12px] text-[#64748B] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-10 scroll-mt-20">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-[#2563EB] text-[10px] font-semibold uppercase tracking-[0.22em] block mb-2">
                Open Positions
              </span>
              <h2 className="text-[22px] md:text-[28px] font-heading font-bold text-[#0F172A]">
                Current Openings
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {activeJobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-[#E8ECF0] bg-white p-5 md:p-6 hover:border-[#2563EB]/20 hover:shadow-[0_4px_16px_-6px_rgba(37,99,235,0.08)] transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-[15px] font-heading font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-[11px] text-[#64748B]">
                        <span className="flex items-center gap-1"><Briefcase size={11} />{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={11} />{job.type}</span>
                        <span className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[#334155] font-medium">{job.experience}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                        className="px-4 py-2 rounded-lg border border-[#E8ECF0] text-[12px] font-semibold text-[#334155] hover:border-[#2563EB]/30 hover:text-[#2563EB] transition-colors"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => handleApply(job)}
                        className="px-4 py-2 rounded-lg bg-[#2563EB] text-white text-[12px] font-semibold hover:bg-[#1D4ED8] transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {selectedJob?.id === job.id && !showForm && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-4 border-t border-[#E8ECF0] space-y-4">
                          <p className="text-[13px] text-[#64748B] leading-relaxed">{job.description}</p>

                          <div>
                            <h4 className="text-[12px] font-bold text-[#0F172A] uppercase tracking-wider mb-2">Responsibilities</h4>
                            <ul className="space-y-1.5">
                              {job.responsibilities.map((r) => (
                                <li key={r} className="text-[12px] text-[#64748B] flex items-start gap-2">
                                  <span className="w-1 h-1 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-[12px] font-bold text-[#0F172A] uppercase tracking-wider mb-2">Requirements</h4>
                            <ul className="space-y-1.5">
                              {job.requirements.map((r) => (
                                <li key={r} className="text-[12px] text-[#64748B] flex items-start gap-2">
                                  <CheckCircle2 size={11} className="text-[#2563EB] mt-0.5 shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {job.benefits.length > 0 && (
                            <div>
                              <h4 className="text-[12px] font-bold text-[#0F172A] uppercase tracking-wider mb-2">Benefits</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.benefits.map((b) => (
                                  <span key={b} className="px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[11px] font-medium text-[#334155]">{b}</span>
                                ))}
                              </div>
                            </div>
                          )}

                          <button
                            onClick={() => handleApply(job)}
                            className="mt-2 px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition-colors inline-flex items-center gap-2"
                          >
                            Apply for this Position <ArrowRight size={13} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Modal */}
        <AnimatePresence>
          {showForm && selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/50 backdrop-blur-sm"
              onClick={handleClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_-12px_rgba(0,0,0,0.2)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8ECF0]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2563EB] font-semibold block">Apply for</span>
                    <h3 className="text-[16px] font-heading font-bold text-[#0F172A]">{selectedJob.title}</h3>
                  </div>
                  <button onClick={handleClose} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#F1F5F9] transition-colors">
                    <X size={16} className="text-[#64748B]" />
                  </button>
                </div>

                {/* Form or Success */}
                <div className="p-6 relative">
                  <SubmissionOverlay visible={submitting} message="Submitting your application..." />
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">Full Name *</label>
                          <input required type="text" name="name" className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8ECF0] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">Email *</label>
                          <input required type="email" name="email" className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8ECF0] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors" placeholder="john@example.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">Phone</label>
                          <input type="tel" name="phone" className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8ECF0] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors" placeholder="+91 9876543210" />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">Location</label>
                          <input type="text" name="location" className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8ECF0] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors" placeholder="City, Country" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">Experience *</label>
                        <select required name="experience" className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8ECF0] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors bg-white">
                          <option value="">Select experience level</option>
                          <option value="0-1">0-1 years (Fresher/Intern)</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5+">5+ years</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">LinkedIn Profile</label>
                        <input type="url" name="linkedin" className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8ECF0] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors" placeholder="https://linkedin.com/in/yourprofile" />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">Resume *</label>
                        <label className="border-2 border-dashed border-[#E8ECF0] rounded-lg p-4 text-center hover:border-[#2563EB]/30 transition-colors cursor-pointer block">
                          <Upload size={20} className="mx-auto text-[#94A3B8] mb-1.5" />
                          <p className="text-[11px] text-[#64748B]" id="resume-label">Click to upload PDF or DOCX</p>
                          <p className="text-[10px] text-[#94A3B8]">Max 5MB — saved securely to our drive</p>
                          <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            required
                            onChange={(e) => {
                              const label = document.getElementById("resume-label");
                              if (label && e.target.files?.[0]) {
                                label.textContent = "✓ " + e.target.files[0].name;
                                label.className = "text-[11px] text-[#10B981] font-semibold";
                              }
                            }}
                          />
                        </label>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">Message (Optional)</label>
                        <textarea rows={3} name="message" className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8ECF0] text-[13px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-colors resize-none" placeholder="Tell us why you're interested in this role..." />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition-colors"
                      >
                        Submit Application
                      </button>
                    </form>
                  ) : (
                    /* Success State */
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-8"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={28} className="text-[#10B981]" />
                      </div>
                      <h3 className="text-[18px] font-heading font-bold text-[#0F172A] mb-2">
                        Application Submitted Successfully
                      </h3>
                      <p className="text-[13px] text-[#64748B] leading-relaxed max-w-sm mx-auto mb-6">
                        Thank you for your interest in Accuriantech. Our team will review your profile and contact you if your experience aligns with our current opportunities.
                      </p>
                      <button
                        onClick={handleClose}
                        className="px-5 py-2.5 rounded-lg border border-[#E8ECF0] text-[13px] font-semibold text-[#334155] hover:border-[#2563EB]/30 hover:text-[#2563EB] transition-colors"
                      >
                        Explore Other Opportunities
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Careers;
