import React from 'react';
import { User, GraduationCap, Code, Brain, Layout, CheckCircle, Sparkles, FolderGit2, Award, Cpu } from 'lucide-react';

export default function About() {
  const stats = [
    {
      value: '03+',
      label: 'Years Learning Journey',
      icon: <GraduationCap className="w-5 h-5 text-brand-cyan" />,
    },
    {
      value: '06+',
      label: 'University Projects',
      icon: <FolderGit2 className="w-5 h-5 text-brand-violet" />,
    },
    {
      value: '15+',
      label: 'Certifications',
      icon: <Award className="w-5 h-5 text-brand-emerald" />,
    },
    {
      value: '10+',
      label: 'Technologies',
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900/60">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-violet/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>PERSONAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan-violet">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="glass-card p-4 rounded-3xl border border-white/10 relative overflow-hidden group max-w-sm w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-dark-800 border border-white/10">
                <img
                  src="/assets/profile.jpg"
                  alt="Pasindu Theekshana"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-xl border border-white/15 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">Pasindu Theekshana</p>
                  <p className="text-[11px] text-brand-cyan font-mono">B.Sc. IT Undergraduate • RUSL</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bio Text & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Who I Am</span>
                <Sparkles className="w-5 h-5 text-brand-cyan" />
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                I am a motivated third-year Information Technology undergraduate at Rajarata University of Sri Lanka 
                with a strong interest in software development, web development, artificial intelligence, and UI/UX design. 
                I am passionate about learning new technologies, solving real-world problems, and working collaboratively in team environments. 
                I am eager to apply my technical skills, gain industry experience, and contribute to innovative IT solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-gray-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>University: Rajarata University of SL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Faculty: Applied Sciences</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Location: Bibile, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Status: Available for Internships</span>
                </div>
              </div>

            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl text-center border border-white/10 glass-card-hover flex flex-col items-center justify-center"
                >
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 mb-2">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-extrabold text-white font-mono">{item.value}</span>
                  <span className="text-[11px] text-gray-400 font-medium mt-0.5">{item.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
