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
  Layers, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function About() {
  const { personal, aboutHighlights } = portfolioData;

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
          
          {/* Resume Career Objective Quote */}
          <div className="p-5 rounded-2xl glass-panel border border-cyan-500/20 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl italic">
            "{personal.careerObjective}"
          </div>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          
          <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase">Education</div>
              <div className="text-xs font-bold text-white">B.Tech CSE (2023-2027)</div>
              <div className="text-[11px] font-mono text-cyan-400">CGPA: 8.11 (80.8%)</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase">Institution</div>
              <div className="text-xs font-bold text-white">MPEC, Kanpur</div>
              <div className="text-[11px] font-mono text-slate-400">Kanpur, UP, India</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase">LeetCode Rating</div>
              <div className="text-xs font-bold text-amber-400">1700+ Rating</div>
              <div className="text-[11px] font-mono text-slate-400">400+ Problems Solved</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase">Direct Contact</div>
              <a href="tel:+918810750577" className="text-xs font-bold text-slate-200 hover:text-emerald-400 transition-colors">
                +91-8810750577
              </a>
              <div className="text-[11px] font-mono text-slate-400 truncate max-w-[150px]">
                {personal.email}
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
