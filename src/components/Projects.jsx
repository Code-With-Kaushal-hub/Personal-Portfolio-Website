import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  ExternalLink, 
  Github, 
  TerminalSquare, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend & React', 'Frontend & Web Design'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <TerminalSquare className="w-3.5 h-3.5" />
              <span>03 // Academic & Personal Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured web applications &{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                software builds.
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              Practical full-stack and frontend systems built with clean REST APIs, relational MySQL storage, and reactive React components.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-950/30"
            >
              {/* Image Preview with hover overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Floating category badge & duration */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-900/90 border border-slate-700/80 text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.duration && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-950/90 border border-slate-800 text-slate-400 backdrop-blur-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {project.duration}
                    </span>
                  )}
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-black bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 shadow-lg"
                >
                  <span>Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/80">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Highlight */}
                {project.metrics && (
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">{project.metrics[0].label}:</span>
                    <span className="text-emerald-400 font-bold">{project.metrics[0].value}</span>
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                  >
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                      aria-label="GitHub Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
