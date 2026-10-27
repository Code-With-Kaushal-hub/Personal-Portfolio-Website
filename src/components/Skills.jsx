import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code, 
  Layout, 
  Server, 
  Terminal, 
  Search, 
  TerminalSquare, 
  Cpu, 
  Sparkles,
  CheckCircle2 
} from 'lucide-react';

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    languages: <Code className="w-4 h-4" />,
    frontend: <Layout className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    tools: <Terminal className="w-4 h-4" />,
  };

  // Filter skills based on category and search query
  const filteredCategories = skillCategories
    .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <TerminalSquare className="w-3.5 h-3.5" />
              <span>02 // Technical Skills & Proficiencies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Programming languages, stacks &{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                developer tools.
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              From low-level data structures in C++ and Java OOP, to modern responsive web development with ReactJS and REST APIs.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search C++, React, SQL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500/60 focus:outline-none text-xs font-mono text-slate-200 placeholder-slate-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Competencies
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5 text-white font-bold text-lg">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    {categoryIcons[cat.id]}
                  </div>
                  <span>{cat.name}</span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {cat.skills.length} skills listed
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 group">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-200 font-semibold group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-slate-950 border border-slate-800 text-slate-400">
                          {skill.tag}
                        </span>
                      </div>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/60 p-[1px]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-purple-500 group-hover:brightness-125 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800">
            <Cpu className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 font-mono text-sm">No skills match your search query "{searchQuery}".</p>
          </div>
        )}

      </div>
    </section>
  );
}
