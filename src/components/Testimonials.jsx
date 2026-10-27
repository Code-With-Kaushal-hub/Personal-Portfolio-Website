import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Quote, Star, TerminalSquare } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>06 // Endorsements & Peer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What engineering leaders{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              say about working with me.
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Direct feedback from product leads, architects, and engineering directors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 relative group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    {item.role} • {item.company}
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
