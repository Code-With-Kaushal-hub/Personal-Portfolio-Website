import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-sm">
              KM
            </div>
            <div>
              <div className="font-bold text-white tracking-tight text-sm">
                {portfolioData.personal.name}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                B.Tech CSE • Maharana Pratap Engineering College • LeetCode 1700+
              </div>
            </div>
          </div>

          {/* Local Time Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>IST (UTC+5:30):</span>
            <span className="text-cyan-300 font-semibold">{time || '10:45:00 AM'}</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 hover:border-amber-500/40 transition-colors"
              title="LeetCode (1700+)"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="Phone Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Kaushal Maurya. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
