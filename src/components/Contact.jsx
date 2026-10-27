import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone,
  Send, 
  Copy, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  TerminalSquare, 
  Github, 
  Linkedin, 
  Code2,
  GraduationCap,
  Sparkles,
  ExternalLink 
} from 'lucide-react';

export default function Contact() {
  const { personal, socials } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'Internship Opportunity',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry - ${formState.inquiryType}] ${formState.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nInquiry Type: ${formState.inquiryType}\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>07 // Direct Transmission & Coordinates</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's connect &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              build together.
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Currently open to Software Engineering internships, developer roles, and technical collaborations. Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 shadow-xl shadow-cyan-950/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-500 uppercase">Direct Email</h4>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base sm:text-lg font-bold font-mono text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 shadow-xl shadow-emerald-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-500 uppercase">Mobile Contact</h4>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-base sm:text-lg font-bold font-mono text-white hover:text-emerald-300 transition-colors"
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            {/* Location & Academic Meta */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-slate-500 uppercase text-[10px]">Location</div>
                  <div className="font-semibold text-slate-200">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-purple-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-slate-500 uppercase text-[10px]">College & Degree</div>
                  <div className="font-semibold text-slate-200">{personal.college} (B.Tech CSE)</div>
                </div>
              </div>
            </div>

            {/* Coding & Social Handles */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-500 uppercase">Competitive & Social Profiles</div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:border-amber-500/40 transition-colors"
                >
                  <span>LeetCode (1700+)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={socials.codechef}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <span>CodeChef</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={socials.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:border-emerald-500/40 transition-colors"
                >
                  <span>HackerRank</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={socials.geeksforgeeks}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
                >
                  <span>GeeksForGeeks</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Prepared!</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Your email client has been opened with your inquiry. You can also reach Kaushal directly at{' '}
                    <span className="text-cyan-400 font-mono">{personal.email}</span> or{' '}
                    <span className="text-emerald-400 font-mono">{personal.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        subject: '',
                        inquiryType: 'Internship Opportunity',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase">Inquiry Category</label>
                      <select
                        value={formState.inquiryType}
                        onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200 transition-colors"
                      >
                        <option value="Internship Opportunity">Software Engineering Internship</option>
                        <option value="Full-Time SDE Role">Full-Time Software Engineer Role</option>
                        <option value="Project Collaboration">Web Project Collaboration</option>
                        <option value="Competitive Coding / Mentorship">Coding / Mentorship Discussion</option>
                        <option value="Other Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase">Subject</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Internship Role at Company"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase">Message Details</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share details regarding the role, requirements, or collaboration..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200 placeholder-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 transform active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Encrypting & Dispatching...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
