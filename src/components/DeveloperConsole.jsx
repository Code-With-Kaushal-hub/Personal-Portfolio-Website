import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  CornerDownLeft, 
  Trash2, 
  TerminalSquare 
} from 'lucide-react';

export default function DeveloperConsole() {
  const { personal, skillCategories, projects, education, certifications, achievements, socials } = portfolioData;

  const initialHistory = [
    {
      type: 'system',
      text: '⚡ Kaushal Maurya Interactive Shell [v2.4.0-prod]\nType "help" to see available commands or click quick action chips below.'
    }
  ];

  const [history, setHistory] = useState(initialHistory);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryPointer(-1);

    const userEntry = { type: 'user', text: `$ ${rawCmd}` };

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    let responseText = '';

    switch (cmd) {
      case 'help':
        responseText = `Available Commands:
  • about           - Career objective, background & education summary
  • education       - College (B.Tech CSE, CGPA 8.11) & school academic records
  • skills          - C++, Java, Python, ReactJS, NodeJS, MySQL, etc.
  • projects        - Expense Tracker, Food Recipe Finder, & Portfolio (with live URLs)
  • certifications  - Verified NPTEL IIT Madras, IIT Kharagpur, GUVI cert links
  • achievements    - LeetCode 400+ solved, 1700+ rating, Silver Badge
  • contact         - Phone (+91-8810750577), email, and social profiles
  • sudo hire kaushal - Execute priority internship/role protocol
  • clear           - Clear console history
  • date            - Print current system timestamp`;
        break;

      case 'about':
        responseText = `[KAUSHAL MAURYA - PROFILE]
Name:             ${personal.name}
Role:             ${personal.title}
Education:        ${personal.degree}
Institution:      ${personal.college}
Academic Score:   ${personal.cgpa}
Objective:
"${personal.careerObjective}"`;
        break;

      case 'education':
        responseText = education
          .map((e) => `[${e.institution.toUpperCase()}] (${e.period})\n  Degree: ${e.degree}\n  Score:  ${e.score}\n  City:   ${e.location}`)
          .join('\n\n');
        break;

      case 'skills':
        responseText = skillCategories
          .map((cat) => `[${cat.name.toUpperCase()}]\n  ${cat.skills.map((s) => `${s.name} (${s.tag})`).join(', ')}`)
          .join('\n\n');
        break;

      case 'projects':
        responseText = projects
          .map((p, idx) => `${idx + 1}. ${p.title} (${p.category}) [${p.duration}]\n   ${p.description}\n   Tech: ${p.tags.join(', ')}\n   Demo: ${p.demo}\n   Code: ${p.github}`)
          .join('\n\n');
        break;

      case 'certifications':
        responseText = certifications
          .map((c, idx) => `${idx + 1}. ${c.title}\n   Issuer: ${c.issuer} (${c.period})\n   Verify: ${c.link}`)
          .join('\n\n');
        break;

      case 'achievements':
        responseText = achievements
          .map((a, idx) => `• ${a.title} (${a.platform})\n  ${a.description}\n  Verify: ${a.verifyLink || 'N/A'}`)
          .join('\n\n');
        break;

      case 'contact':
        responseText = `[DIRECT CONTACT DETAILS]
Phone:        ${personal.phone}
Email:        ${personal.email}
LeetCode:     ${socials.leetcode}
GitHub:       ${socials.github}
LinkedIn:     ${socials.linkedin}
CodeChef:     ${socials.codechef}
HackerRank:   ${socials.hackerrank}
GeeksForGeeks: ${socials.geeksforgeeks}
Location:     ${personal.location}`;
        break;

      case 'sudo hire kaushal':
        responseText = `🚀 [ACCESS GRANTED: HIRING PROTOCOL ACTIVATED]
------------------------------------------------------
Candidate: ${personal.name}
Role Fit: Software Engineer Intern / Full-Stack Developer
LeetCode: 400+ Solved (1700+ Contest Rating)
Academics: B.Tech CSE (8.11 CGPA, 80.8%)
NPTEL Java: 88% Elite (IIT Kharagpur)
NPTEL Python: 82% Silver Badge (IIT Madras)

STATUS: READY FOR INTERVIEWS & INTERNSHIPS!
Direct Line: ${personal.phone} | ${personal.email}`;
        break;

      case 'date':
        responseText = new Date().toUTCString();
        break;

      default:
        responseText = `Command not recognized: "${rawCmd}". Type "help" to view valid commands.`;
        break;
    }

    setHistory((prev) => [...prev, userEntry, { type: 'response', text: responseText }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(commandHistory[nextPointer]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    }
  };

  const quickCommands = ['help', 'about', 'education', 'skills', 'projects', 'certifications', 'achievements', 'contact', 'sudo hire kaushal', 'clear'];

  return (
    <section id="console" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="space-y-3 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>06 // Interactive Developer Shell</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Developer shell &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CLI playground.
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Inspect academic credentials, competitive programming records, or trigger internship protocols in real-time.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-2">Quick Commands:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Console Window */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="glass-panel rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/40 cursor-text"
        >
          
          {/* Title Bar */}
          <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">kaushal@terminal-v2: ~</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              className="text-slate-500 hover:text-slate-300 text-xs font-mono flex items-center gap-1 transition-colors"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-3 min-h-[320px] max-h-[460px] overflow-y-auto">
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                {entry.type === 'user' && (
                  <div className="text-cyan-400 font-semibold flex items-center gap-2">
                    <span className="text-slate-500">guest@portfolio:~$</span>
                    <span>{entry.text.replace('$ ', '')}</span>
                  </div>
                )}
                {entry.type === 'response' && (
                  <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-4 border-l-2 border-cyan-500/30 bg-cyan-950/10 py-1 rounded-r">
                    {entry.text}
                  </pre>
                )}
                {entry.type === 'system' && (
                  <pre className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                    {entry.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Live Input Prompt */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-slate-500 select-none">guest@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command here (e.g. certifications, projects, education)..."
                className="flex-1 bg-transparent border-none outline-none text-cyan-300 font-mono text-xs sm:text-sm placeholder-slate-600 focus:ring-0"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className="p-1 rounded bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors"
                aria-label="Send command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
}
