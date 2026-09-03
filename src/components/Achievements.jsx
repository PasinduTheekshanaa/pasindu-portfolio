import React from 'react';
import { Trophy, Award, Code2, Users, Star, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const achievementsList = [
    {
      title: '15+ Professional Certifications',
      description: 'Successfully completed 15+ professional certifications spanning web development, Python, Agile methodologies, ERP systems, and cloud foundations.',
      icon: <Award className="w-6 h-6 text-brand-cyan" />,
      tag: 'Continuous Learning',
    },
    {
      title: 'Multi-Domain University Projects',
      description: 'Designed and developed 8 comprehensive projects across AI, computer vision, web engineering, mobile development (Flutter/Android), and enterprise networking.',
      icon: <Code2 className="w-6 h-6 text-brand-violet" />,
      tag: 'Practical Engineering',
    },
    {
      title: 'Technical Workshops & Hackathons',
      description: 'Actively participated in university coding hackathons, technical workshops, and computing department seminars at Rajarata University of Sri Lanka.',
      icon: <Trophy className="w-6 h-6 text-brand-emerald" />,
      tag: 'Team & Competitions',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient-cyan-violet">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full mt-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsList.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-cyan/10 rounded-full blur-2xl group-hover:bg-brand-cyan/20 transition-all" />

              <div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit mb-5">
                  {item.icon}
                </div>

                <span className="text-[10px] font-mono uppercase text-brand-cyan tracking-wider font-semibold">
                  {item.tag}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mt-1 mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-brand-emerald font-mono">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Accomplished
                </span>
                <span className="text-gray-500">0{idx + 1}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
