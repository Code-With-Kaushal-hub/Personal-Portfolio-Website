import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Code2, 
  Award, 
  GraduationCap, 
  Trophy,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Hero() {
  const { personal, socials } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeHeroTab, setActiveHeroTab] = useState('photo'); // 'photo' or 'code'

  useEffect(() => {
    const fullRole = personal.roles[roleIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullRole.substring(0, currentText.length - 1)
            : fullRole.substring(0, currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, personal.roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide uppercase">
                Maharana Pratap Engineering College • CGPA 8.11
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>

              {/* Animated Typing Role */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl font-mono text-slate-300 font-medium">
                  &gt; {currentText}
                  <span className="inline-block w-2.5 h-5 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personal.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 transform active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#education"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-300 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
              >
                <Award className="w-4 h-4 text-purple-400" />
                <span>Certifications</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-400 bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:text-slate-200 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Competitive Coding & Social Profiles Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-4 text-slate-400">
              <span className="text-xs font-mono text-slate-500">Links:</span>
              
              <a
                href={socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-amber-950/30 border border-amber-600/30 text-amber-400 hover:bg-amber-900/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                title="LeetCode (400+ Solved, 1700+ Rating)"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>LeetCode</span>
              </a>

              <a
                href={socials.codechef}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                title="CodeChef Profile"
              >
                <span>CodeChef</span>
              </a>

              <a
                href={socials.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-600/30 text-emerald-400 hover:bg-emerald-900/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                title="HackerRank Certified"
              >
                <span>HackerRank</span>
              </a>

              <a
                href={socials.geeksforgeeks}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                title="GeeksForGeeks"
              >
                <span>GFG</span>
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: High-Quality Profile Photo & Cyber Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Outer Glow Frame */}
              <div className="relative rounded-3xl glass-panel p-3 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 group">
                
                {/* Photo Presentation */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80">
                  <img
                    src={personal.portrait}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient & Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>B.Tech CSE • MPEC</span>
                    </div>
                  </div>

                  {/* Top Right Live Dot */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active</span>
                  </div>

                  {/* Bottom Overlay Info Card */}
                  <div className="absolute bottom-3 inset-x-3 p-4 rounded-xl glass-panel border border-cyan-500/30 backdrop-blur-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                          <span>{personal.name}</span>
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 inline" />
                        </h3>
                        <p className="text-xs font-mono text-cyan-300">
                          CGPA: 8.11 (80.8%) • Kanpur
                        </p>
                      </div>

                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                        <Trophy className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Quick Stats Pill Row */}
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80 text-[11px] font-mono">
                      <div className="flex items-center gap-1 text-slate-300">
                        <span className="text-amber-400 font-bold">1700+</span>
                        <span className="text-slate-400 text-[10px]">LeetCode Rating</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-300 justify-end">
                        <span className="text-purple-400 font-bold">7+</span>
                        <span className="text-slate-400 text-[10px]">Certifications</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Sub-bar below photo */}
                <div className="pt-3 px-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    MERN & C++ DSA
                  </span>
                  <a
                    href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Highlight Statistics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="text-center sm:text-left space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight flex items-center justify-center sm:justify-start gap-1">
              <span className="text-amber-400">{personal.leetcodeSolved}</span>
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">LeetCode Problems Solved</div>
          </div>

          <div className="text-center sm:text-left space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight flex items-center justify-center sm:justify-start gap-1">
              <span className="text-cyan-400">{personal.leetcodeRating}</span>
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">LeetCode Contest Rating</div>
          </div>

          <div className="text-center sm:text-left space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight flex items-center justify-center sm:justify-start gap-1">
              <span className="text-purple-400">{personal.academicCgpa}</span>
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">B.Tech CSE CGPA (80.8%)</div>
          </div>

          <div className="text-center sm:text-left space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight flex items-center justify-center sm:justify-start gap-1">
              <span className="text-emerald-400">{personal.certificationsCount}</span>
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Accredited Certifications</div>
          </div>
        </div>

      </div>
    </section>
  );
}
