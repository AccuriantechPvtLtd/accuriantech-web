import { useState, useEffect } from "react";
import { fetchAllJobs, createJob, deleteJobApi, toggleJobApi, type Job } from "@/lib/jobs-api";
import { Plus, Trash2, X, Check, RefreshCw, Lock } from "lucide-react";
import SubmissionOverlay from "@/components/SubmissionOverlay";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

const AdminJobs = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addingJob, setAddingJob] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "", department: "", location: "Remote", type: "Full-Time" as Job["type"], experience: "", description: "",
  });

  // Check if already logged in (session)
  useEffect(() => {
    const session = sessionStorage.getItem("admin_auth");
    if (session === "true") setAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const loadJobs = async () => {
    setLoading(true);
    const data = await fetchAllJobs();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => { loadJobs(); }, []);

  const handleToggle = async (id: string) => {
    const result = await toggleJobApi(id);
    if (result.success) {
      setJobs((prev) => prev.map((j) => j.id === id ? { ...j, isActive: !j.isActive } : j));
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    const result = await deleteJobApi(id);
    if (result.success) {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    }
  };

  const handleAdd = async () => {
    if (!newJob.title || !newJob.department) return;
    setAddingJob(true);
    const result = await createJob({
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      type: newJob.type,
      experience: newJob.experience,
      description: newJob.description,
      responsibilities: [],
      requirements: [],
      preferred: [],
      benefits: [],
      isActive: true,
    });
    setAddingJob(false);
    if (result.success) {
      setShowAddForm(false);
      setNewJob({ title: "", department: "", location: "Remote", type: "Full-Time", experience: "", description: "" });
      loadJobs();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Login Gate */}
      {!authenticated ? (
        <div className="min-h-screen flex items-center justify-center px-4">
          <form onSubmit={handleLogin} className="w-full max-w-sm">
            <div className="bg-white rounded-2xl border border-[#E8ECF0] p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-3">
                  <Lock size={20} className="text-[#2563EB]" />
                </div>
                <h1 className="text-[18px] font-heading font-bold text-[#0F172A]">Admin Access</h1>
                <p className="text-[12px] text-[#64748B] mt-1">Enter password to manage jobs</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-semibold text-[#334155] uppercase tracking-wider block mb-1.5">Password</label>
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => { setPasswordInput(e.target.value); setLoginError(false); }}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-[13px] focus:outline-none focus:ring-1 transition-colors ${loginError ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-[#E8ECF0] focus:border-[#2563EB] focus:ring-[#2563EB]/20"}`}
                    placeholder="Enter admin password"
                    autoFocus
                  />
                  {loginError && <p className="text-[11px] text-red-500 mt-1.5">Incorrect password</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition-colors"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
      <>
      {/* Header */}
      <div className="bg-white border-b border-[#E8ECF0] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-[18px] font-heading font-bold text-[#0F172A]">Job Manager</h1>
            <p className="text-[12px] text-[#64748B]">Manage open positions at Accuriantech</p>
          </div>
          <div className="flex gap-2">
            <button onClick={loadJobs} className="p-2 rounded-lg border border-[#E8ECF0] hover:bg-[#F1F5F9] transition-colors" title="Refresh">
              <RefreshCw size={14} className={`text-[#64748B] ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] text-white text-[12px] font-semibold hover:bg-[#1D4ED8] transition-colors"
            >
              <Plus size={14} /> Add Job
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-[#E8ECF0] px-4 py-3">
            <span className="text-[20px] font-heading font-bold text-[#0F172A]">{jobs.length}</span>
            <span className="text-[11px] text-[#64748B] block">Total Jobs</span>
          </div>
          <div className="bg-white rounded-lg border border-[#E8ECF0] px-4 py-3">
            <span className="text-[20px] font-heading font-bold text-[#10B981]">{jobs.filter(j => j.isActive).length}</span>
            <span className="text-[11px] text-[#64748B] block">Active</span>
          </div>
          <div className="bg-white rounded-lg border border-[#E8ECF0] px-4 py-3">
            <span className="text-[20px] font-heading font-bold text-[#94A3B8]">{jobs.filter(j => !j.isActive).length}</span>
            <span className="text-[11px] text-[#64748B] block">Closed</span>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12 text-[13px] text-[#64748B]">Loading jobs...</div>
        )}

        {/* Job list */}
        {!loading && (
          <div className="space-y-2">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-lg border border-[#E8ECF0] px-5 py-4 flex items-center justify-between gap-4 ${!job.isActive ? "opacity-60" : ""}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[14px] font-semibold text-[#0F172A] truncate">{job.title}</h3>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${job.isActive ? "bg-[#ECFDF5] text-[#059669]" : "bg-[#F1F5F9] text-[#94A3B8]"}`}>
                      {job.isActive ? "Active" : "Closed"}
                    </span>
                  </div>
                  <div className="flex gap-3 text-[11px] text-[#64748B] mt-1">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleToggle(job.id)}
                    className={`p-2 rounded-lg border transition-colors ${job.isActive ? "border-[#E8ECF0] hover:border-amber-300 hover:bg-amber-50" : "border-[#E8ECF0] hover:border-green-300 hover:bg-green-50"}`}
                    title={job.isActive ? "Close position" : "Reopen position"}
                  >
                    {job.isActive ? <X size={14} className="text-[#94A3B8]" /> : <Check size={14} className="text-[#94A3B8]" />}
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="p-2 rounded-lg border border-[#E8ECF0] hover:border-red-300 hover:bg-red-50 transition-colors"
                    title="Delete job"
                  >
                    <Trash2 size={14} className="text-[#94A3B8]" />
                  </button>
                </div>
              </div>
            ))}

            {jobs.length === 0 && (
              <div className="text-center py-12 text-[13px] text-[#94A3B8]">No jobs yet. Click "Add Job" to create one.</div>
            )}
          </div>
        )}

        {/* Add Job Modal */}
        {showAddForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm" onClick={() => setShowAddForm(false)}>
            <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl relative" onClick={(e) => e.stopPropagation()}>
              <SubmissionOverlay visible={addingJob} message="Adding job..." />
              <h2 className="text-[16px] font-heading font-bold text-[#0F172A] mb-4">Add New Job</h2>
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-semibold text-[#334155] uppercase tracking-wider block mb-1">Job Title *</label>
                  <input type="text" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#E8ECF0] text-[13px] focus:outline-none focus:border-[#2563EB]" placeholder="e.g. Senior React Developer" />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-[#334155] uppercase tracking-wider block mb-1">Department *</label>
                  <input type="text" value={newJob.department} onChange={(e) => setNewJob({ ...newJob, department: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#E8ECF0] text-[13px] focus:outline-none focus:border-[#2563EB]" placeholder="e.g. Engineering" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-semibold text-[#334155] uppercase tracking-wider block mb-1">Location</label>
                    <input type="text" value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#E8ECF0] text-[13px] focus:outline-none focus:border-[#2563EB]" />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#334155] uppercase tracking-wider block mb-1">Type</label>
                    <select value={newJob.type} onChange={(e) => setNewJob({ ...newJob, type: e.target.value as Job["type"] })} className="w-full px-3 py-2 rounded-lg border border-[#E8ECF0] text-[13px] focus:outline-none focus:border-[#2563EB] bg-white">
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Internship</option>
                      <option>Contract</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-[#334155] uppercase tracking-wider block mb-1">Experience</label>
                  <input type="text" value={newJob.experience} onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#E8ECF0] text-[13px] focus:outline-none focus:border-[#2563EB]" placeholder="e.g. 3-5 years" />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-[#334155] uppercase tracking-wider block mb-1">Description</label>
                  <textarea rows={3} value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-[#E8ECF0] text-[13px] focus:outline-none focus:border-[#2563EB] resize-none" placeholder="Brief role description..." />
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <button onClick={() => setShowAddForm(false)} className="flex-1 py-2.5 rounded-lg border border-[#E8ECF0] text-[12px] font-semibold text-[#64748B] hover:bg-[#F8FAFC]">Cancel</button>
                <button onClick={handleAdd} className="flex-1 py-2.5 rounded-lg bg-[#2563EB] text-white text-[12px] font-semibold hover:bg-[#1D4ED8]">Add Job</button>
              </div>
            </div>
          </div>
        )}
      </div>
      </>
      )}
    </div>
  );
};

export default AdminJobs;
