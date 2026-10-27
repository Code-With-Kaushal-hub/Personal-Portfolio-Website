import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import EducationAndCertifications from './components/EducationAndCertifications';
import DeveloperConsole from './components/DeveloperConsole';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Dynamic Cyber Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />

      {/* Interactive Particle Constellation */}
      <InteractiveBackground />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 space-y-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <EducationAndCertifications />
          <DeveloperConsole />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
