import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Trophy, 
  Award, 
  Code2, 
  CheckCircle2, 
  TerminalSquare, 
  ExternalLink,
  Flame,
  Zap,
  Target
} from 'lucide-react';

export default function Achievements() {
  const { achievements, socials, personal } = portfolioData;

  const platforms = [
    {
      name: 'LeetCode',
      stat: '400+ Solved • 1700+ Rating',
      badge: 'Contest Competitor',
      url: socials.leetcode,
      color: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
    },
    {
      name: 'NPTEL Java (IIT Kharagpur)',
      stat: '88% Score (Elite)',
      badge: 'OOP Mastery',
      url: '#education',
      color: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
    },
    {
      name: 'NPTEL Python (IIT Madras)',
      stat: '82% Score (Silver Badge)',
      badge: 'Silver Medalist',
      url: '#education',
      color: 'from-purple-500/20 to-pink-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
    },
    {
      name: 'HackerRank & GUVI',
      stat: 'Verified Skills',
      badge: 'Python & SQL Certified',
      url: socials.hackerrank,
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>04 // Competitive Programming & Accolades</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Algorithmic milestones &{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-400 bg-clip-text text-transparent">
              competitive ratings.
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Passionate problem solver dedicated to continuous coding practice, data structure mastery, and rigorous algorithmic optimization.
          </p>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`glass-panel p-5 rounded-2xl border ${p.border} bg-gradient-to-br ${p.color} space-y-3 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{p.badge}</span>
                <Trophy className={`w-4 h-4 ${p.text}`} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{p.name}</h4>
                <p className={`text-sm font-mono font-semibold ${p.text} mt-0.5`}>{p.stat}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/40 transition-colors">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-slate-400">
                    Platform: <span className="text-slate-200">{item.platform}</span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Profiles Quick Bar */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Active Competitive Profiles</div>
              <div className="text-xs font-mono text-slate-400">View live stats and solutions across platforms</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-amber-400 hover:border-amber-500/40 transition-colors"
            >
              <span>LeetCode</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={socials.codechef}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <span>CodeChef</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={socials.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <span>HackerRank</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={socials.geeksforgeeks}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
            >
              <span>GeeksForGeeks</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
