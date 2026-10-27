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
  ExternalLink
} from 'lucide-react';

export default function Hero() {
  const { personal, socials } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

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
                href="#achievements"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-300 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>LeetCode (1700+)</span>
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 text-slate-400">
              <span className="text-xs font-mono text-slate-500">Profiles:</span>
              
              <a
                href={socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-amber-950/30 border border-amber-600/30 text-amber-400 hover:bg-amber-900/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                title="LeetCode Profile (400+ Solved, 1700+ Rating)"
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
                className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Resume Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Card */}
              <div className="relative rounded-2xl glass-panel p-5 border border-cyan-500/20 shadow-2xl shadow-cyan-950/40">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">kaushal@btech-cse:~</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    VERIFIED CANDIDATE
                  </div>
                </div>

                {/* Simulated Code Profile */}
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">kaushalMaurya</span> = &#123;
                  </div>
                  
                  <div className="pl-4 space-y-1.5 text-slate-300">
                    <div>
                      <span className="text-slate-400">education:</span>{' '}
                      <span className="text-emerald-300">"B.Tech CSE (2023-2027)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">college:</span>{' '}
                      <span className="text-emerald-300">"MPEC, Kanpur"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">cgpa:</span>{' '}
                      <span className="text-cyan-300">8.11</span>, <span className="text-slate-500">// 80.8%</span>
                    </div>
                    <div>
                      <span className="text-slate-400">leetcode:</span> &#123;{' '}
                      <span className="text-slate-400">solved:</span>{' '}
                      <span className="text-amber-400 font-bold">400+</span>,{' '}
                      <span className="text-slate-400">rating:</span>{' '}
                      <span className="text-amber-400 font-bold">1700+</span> &#125;,
                    </div>
                    <div>
                      <span className="text-slate-400">languages:</span> [
                      <span className="text-amber-300">"C++"</span>,{' '}
                      <span className="text-amber-300">"C"</span>,{' '}
                      <span className="text-amber-300">"Java"</span>,{' '}
                      <span className="text-amber-300">"Python"</span>],
                    </div>
                    <div>
                      <span className="text-slate-400">webStack:</span> [
                      <span className="text-cyan-300">"ReactJS"</span>,{' '}
                      <span className="text-cyan-300">"NodeJS"</span>,{' '}
                      <span className="text-cyan-300">"MySQL"</span>,{' '}
                      <span className="text-cyan-300">"MongoDB"</span>],
                    </div>
                    <div>
                      <span className="text-slate-400">certifications:</span>{' '}
                      <span className="text-purple-400">"7+ (NPTEL IIT Madras / KGP)"</span>
                    </div>
                  </div>

                  <div>&#125;;</div>

                  {/* Highlight Chips */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      <div>
                        <div className="text-slate-500 text-[10px]">Java NPTEL IIT KGP</div>
                        <div className="text-amber-300 font-bold">88% Elite Score</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-slate-500 text-[10px]">Python NPTEL IIT M</div>
                        <div className="text-cyan-300 font-bold">Silver Badge (82%)</div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom decorative bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Phone: +91-8810750577</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Ready for Internships
                  </span>
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
