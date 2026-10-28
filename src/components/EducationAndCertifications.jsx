import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TerminalSquare, 
  ExternalLink,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function EducationAndCertifications() {
  const { education, certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'education', 'certifications'

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <TerminalSquare className="w-3.5 h-3.5" />
              <span>05 // Academic Foundations & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Education & verified{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                certifications.
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              Academic pedigree in Computer Science and Engineering accompanied by accredited, verifiable certifications from premier IITs and industry platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeTab === 'both' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Credentials
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeTab === 'education' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeTab === 'certifications' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Certifications ({certifications.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          {(activeTab === 'both' || activeTab === 'education') && (
            <div className={`${activeTab === 'education' ? 'lg:col-span-12' : 'lg:col-span-6'} space-y-6`}>
              <div className="flex items-center gap-2 pb-2 text-white font-bold text-xl border-b border-slate-800">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Formal Education</span>
              </div>

              <div className="space-y-6">
                {education.map((item) => (
                  <div
                    key={item.institution + item.degree}
                    className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 space-y-4 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                            {item.badge}
                          </span>
                          <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {item.location}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.institution}
                        </h4>
                        <div className="text-sm font-semibold text-slate-300">
                          {item.degree}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 self-start sm:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Score Callout */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Academic Standing:</span>
                      <span className="text-cyan-300 font-bold">{item.score}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 pt-1">
                      {item.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Column */}
          {(activeTab === 'both' || activeTab === 'certifications') && (
            <div className={`${activeTab === 'certifications' ? 'lg:col-span-12' : 'lg:col-span-6'} space-y-6`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2 text-white font-bold text-xl">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Accredited Certifications</span>
                </div>
                <span className="text-xs font-mono text-slate-500">Click to verify credential</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title + cert.issuer}
                    className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-purple-500/50 transition-all duration-300 space-y-3 group hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-300">
                            {cert.type}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                          {cert.title}
                        </h4>
                        <div className="text-xs font-mono text-cyan-400">
                          {cert.issuer}
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-slate-400 px-2 py-1 rounded bg-slate-900 border border-slate-800 flex-shrink-0">
                        {cert.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Prominent Verification Link */}
                    {cert.link && (
                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Official Accredited Credential</span>
                        </span>

                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 hover:bg-cyan-900/60 hover:text-white transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-cyan-400" />
                          <span>View Certificate</span>
                          <ExternalLink className="w-3 h-3 text-cyan-400" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
