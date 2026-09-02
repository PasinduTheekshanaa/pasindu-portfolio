import React from 'react';
import { User, GraduationCap, CheckCircle, Sparkles, FolderGit2, Award, Cpu, MapPin, Building, BookOpen } from 'lucide-react';

export default function About() {
  const stats = [
    {
      value: '03+',
      label: 'Years Learning Journey',
      icon: <GraduationCap className="w-6 h-6 text-brand-cyan" />,
      color: 'from-brand-cyan/20 to-brand-cyan/5',
      borderColor: 'border-brand-cyan/30',
    },
    {
      value: '06+',
      label: 'University Projects',
      icon: <FolderGit2 className="w-6 h-6 text-brand-violet" />,
      color: 'from-brand-violet/20 to-brand-violet/5',
      borderColor: 'border-brand-violet/30',
    },
    {
      value: '15+',
      label: 'Certifications',
      icon: <Award className="w-6 h-6 text-brand-emerald" />,
      color: 'from-brand-emerald/20 to-brand-emerald/5',
      borderColor: 'border-brand-emerald/30',
    },
    {
      value: '10+',
      label: 'Technologies',
      icon: <Cpu className="w-6 h-6 text-teal-400" />,
      color: 'from-teal-500/20 to-teal-500/5',
      borderColor: 'border-teal-500/30',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900/60">
      
      {/* Glow Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-violet/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>PERSONAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan-violet">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full mt-3" />
        </div>

        <div className="space-y-8">
          
          {/* Main Bio Card */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl group-hover:bg-brand-cyan/20 transition-all duration-500 pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-brand-cyan/30 text-brand-cyan">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Who I Am</h3>
                <p className="text-xs text-brand-cyan font-mono">B.Sc. Information Technology • Rajarata University of Sri Lanka</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              I am a motivated third-year Information Technology undergraduate at Rajarata University of Sri Lanka 
              with a strong interest in software development, web development, artificial intelligence, and UI/UX design. 
              I am passionate about learning new technologies, solving real-world problems, and working collaboratively in team environments. 
              I am eager to apply my technical skills, gain industry experience, and contribute to innovative IT solutions.
            </p>

            {/* Information Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-gray-300">
                <Building className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="truncate">Rajarata University</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-gray-300">
                <BookOpen className="w-4 h-4 text-brand-violet shrink-0" />
                <span className="truncate">Faculty of Applied Sciences</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-emerald shrink-0" />
                <span className="truncate">Monaragala, Bibile</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="truncate">Open for Internships</span>
              </div>
            </div>

          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl text-center border ${item.borderColor} glass-card-hover flex flex-col items-center justify-center relative overflow-hidden group`}
              >
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <span className="text-3xl font-extrabold text-white font-mono tracking-tight">{item.value}</span>
                <span className="text-xs text-gray-400 font-medium mt-1">{item.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
