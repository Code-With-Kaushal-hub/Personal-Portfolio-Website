import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  TerminalSquare, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Code2, 
  Trophy, 
  Cpu, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function About() {
  const { personal, aboutHighlights, socials } = portfolioData;

  const iconMap = {
    0: <Trophy className="w-6 h-6 text-amber-400" />,
    1: <Code2 className="w-6 h-6 text-cyan-400" />,
    2: <Cpu className="w-6 h-6 text-purple-400" />,
    3: <Sparkles className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>01 // Career Objective & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Building responsive web apps backed by{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              strong algorithmic foundations.
            </span>
          </h2>
        </div>

        {/* Bio Spotlight with Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Avatar Photo Card */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-4 rounded-3xl border border-cyan-500/30 shadow-2xl relative group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <span>{personal.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-emerald-400 font-medium">B.Tech 2023-27</span>
                </div>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Maharana Pratap Engg. College</span>
                <span className="text-cyan-400 font-bold">CGPA: 8.11</span>
              </div>
            </div>
          </div>

          {/* Career Objective & Academic Highlights */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-cyan-500/20 text-slate-300 text-base sm:text-lg leading-relaxed relative">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <TerminalSquare className="w-4 h-4" />
                <span>Resume Career Objective</span>
              </div>
              <p className="italic text-slate-200">
                "{personal.careerObjective}"
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Degree & CGPA</div>
                <div className="text-sm font-bold text-white">B.Tech CSE (8.11)</div>
                <div className="text-xs text-cyan-400">80.8% Percentage</div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Competitive Rating</div>
                <div className="text-sm font-bold text-amber-400">LeetCode 1700+</div>
                <div className="text-xs text-slate-400">400+ Problems Solved</div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Contact</div>
                <a href="tel:+918810750577" className="text-sm font-bold text-slate-200 hover:text-emerald-400 transition-colors block">
                  +91-8810750577
                </a>
                <div className="text-xs text-slate-400 truncate">{personal.email}</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutHighlights.map((item, index) => (
            <div
              key={item.title}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                  {iconMap[index]}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
