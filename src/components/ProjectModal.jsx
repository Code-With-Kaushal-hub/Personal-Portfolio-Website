import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Cpu 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 p-6 sm:p-8 space-y-6 z-10">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  Featured Architecture
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image */}
        <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        {/* Metrics Row */}
        {project.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3"
              >
                <TrendingUp className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-slate-500">{metric.label}</div>
                  <div className="text-sm font-bold font-mono text-white">{metric.value}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Description & Problem Solved */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Architecture & Engineering Deep Dive</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Technical Highlights */}
        {project.highlights && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Technical Milestones
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Technology Stack & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Inspect Source</span>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          >
            <span>Launch Live System</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
