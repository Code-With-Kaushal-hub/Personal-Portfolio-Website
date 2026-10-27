import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TerminalSquare 
} from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>04 // Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work experience &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              engineering milestones.
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A chronological timeline of production responsibilities, team leadership, and high-impact distributed systems delivered.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experience.map((item, index) => (
            <div key={item.company + item.period} className="relative group">
              
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.6)] group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold font-mono text-slate-300">
                      {item.company}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
