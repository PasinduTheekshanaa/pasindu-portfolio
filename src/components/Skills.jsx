import React, { useState } from 'react';
import { Cpu, Briefcase, Layout, Terminal, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

const technicalSkills = [
  { name: 'Web Development', level: 'Advanced', icon: '🌐', category: 'Frontend & Architecture' },
  { name: 'HTML5', level: 'Advanced', icon: '📄', category: 'Markup' },
  { name: 'CSS3', level: 'Advanced', icon: '🎨', category: 'Styling & Animations' },
  { name: 'JavaScript (ES6+)', level: 'Advanced', icon: '⚡', category: 'Core Logic' },
  { name: 'Responsive Web Design', level: 'Advanced', icon: '📱', category: 'UI Layouts' },
  { name: 'Tailwind CSS', level: 'Advanced', icon: '🌊', category: 'Utility Framework' },
  { name: 'Bootstrap', level: 'Intermediate', icon: '🅰️', category: 'UI Framework' },
  { name: 'React.js (Basic)', level: 'Intermediate', icon: '⚛️', category: 'Frontend Library' },
  { name: 'Node.js (Basic)', level: 'Intermediate', icon: '🟩', category: 'Backend Runtime' },
  { name: 'Express.js (Basic)', level: 'Intermediate', icon: '🚀', category: 'Web Framework' },
  { name: 'REST API Integration', level: 'Advanced', icon: '🔄', category: 'Web Services' },
  { name: 'Git & GitHub', level: 'Advanced', icon: '🐙', category: 'Version Control' },
  { name: 'Visual Studio Code', level: 'Advanced', icon: '💻', category: 'Development IDE' },
  { name: 'Figma (UI/UX Design)', level: 'Intermediate', icon: '📐', category: 'Prototyping & Wireframing' },
];

const businessSkills = [
  { name: 'Entrepreneurship', level: 'Proficient', icon: '💡', category: 'Business Strategy' },
  { name: 'Business Development', level: 'Proficient', icon: '📈', category: 'Strategic Growth' },
  { name: 'Sales & Marketing', level: 'Proficient', icon: '🎯', category: 'Client Acquisition' },
  { name: 'Customer Relationship Mgmt', level: 'Proficient', icon: '🤝', category: 'CRM & Retention' },
  { name: 'Negotiation Skills', level: 'Proficient', icon: '⚖️', category: 'Commercial Agreements' },
  { name: 'Business Communication', level: 'Advanced', icon: '🗣️', category: 'Corporate Messaging' },
  { name: 'Market Research', level: 'Proficient', icon: '🔍', category: 'Industry Intelligence' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Glow Ambient Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-violet/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-cyan/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical & <span className="text-gradient-cyan-violet">Business Skills</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl">
            A balanced skill set combining software engineering expertise with strategic business intelligence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 shadow-md scale-105 font-bold'
                : 'glass-card text-gray-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>All Competencies</span>
          </button>

          <button
            onClick={() => setActiveTab('technical')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'technical'
                ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 shadow-md scale-105 font-bold'
                : 'glass-card text-gray-300 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Technical Skills ({technicalSkills.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('business')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'business'
                ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 shadow-md scale-105 font-bold'
                : 'glass-card text-gray-300 hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Business Skills ({businessSkills.length})</span>
          </button>
        </div>

        {/* Skills Grids */}
        <div className="space-y-12">
          
          {/* Technical Skills Section */}
          {(activeTab === 'all' || activeTab === 'technical') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="p-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Technical Skills</h3>
                <span className="text-xs font-mono text-gray-400">({technicalSkills.length} skills)</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {technicalSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-2xl border border-white/10 glass-card-hover flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">{skill.category}</p>
                    </div>

                    <div className="w-full bg-dark-800 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full"
                        style={{ width: skill.level === 'Advanced' ? '90%' : '75%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Business Skills Section */}
          {(activeTab === 'all' || activeTab === 'business') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="p-2 rounded-xl bg-brand-violet/10 border border-brand-violet/30 text-brand-violet">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Business & Management Skills</h3>
                <span className="text-xs font-mono text-gray-400">({businessSkills.length} skills)</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {businessSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-2xl border border-white/10 glass-card-hover flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-violet/10 text-brand-violet border border-brand-violet/20">
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-brand-violet transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">{skill.category}</p>
                    </div>

                    <div className="w-full bg-dark-800 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-violet to-purple-400 rounded-full"
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
