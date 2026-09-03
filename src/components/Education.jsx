import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      degree: 'Bachelor of Science (B.Sc.) in Information Technology',
      institution: 'Rajarata University of Sri Lanka',
      faculty: 'Faculty of Applied Sciences • Department of Information Technology',
      status: 'Undergraduate (Year 3) - In Progress',
      period: '2024 – Present',
      location: 'Mihintale, Sri Lanka',
      description: 'Undergraduate studies focusing on software engineering, web application development, machine learning algorithms, database management, and computer networks.',
      highlights: [
        'Third-Year Undergraduate Student',
        'Specializing in Software Development & Artificial Intelligence',
        'Hands-on university team projects & lab practicals'
      ]
    },
    {
      degree: 'G.C.E. Advanced Level (A/L) – Commerce Stream',
      institution: 'Mo/Mahamathya Science College, Bibile',
      faculty: 'Secondary Education',
      status: 'Completed (2021)',
      period: '2019 – 2021',
      location: 'Bibile, Sri Lanka',
      results: [
        { subject: 'Accounting', grade: 'A' },
        { subject: 'Business Studies', grade: 'B' },
        { subject: 'Information & Communication Technology', grade: 'B' },
      ],
      learningAreas: [
        'Financial Accounting',
        'Business Management',
        'Entrepreneurship',
        'Information & Communication Technology'
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-900/60">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-cyan/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educational <span className="text-gradient-cyan-violet">Background</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-brand-cyan/30 space-y-12 ml-2 sm:ml-6">
          
          {educationItems.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-10 h-10 rounded-full bg-dark-900 border-2 border-brand-cyan flex items-center justify-center text-brand-cyan shadow-lg shadow-brand-cyan/20 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Card Box */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover relative">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-brand-cyan font-mono mt-0.5">
                      {item.institution}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      {item.faculty}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {item.description && (
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                {/* Results Chips if applicable */}
                {item.results && (
                  <div className="mb-4 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-mono text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5" />
                      <span>Exam Results</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.results.map((res, rIdx) => (
                        <div
                          key={rIdx}
                          className="px-3 py-1.5 rounded-xl glass-card border border-white/10 flex items-center gap-2 text-xs"
                        >
                          <span className="text-gray-300">{res.subject}:</span>
                          <span className="font-bold font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-md border border-brand-cyan/30">
                            {res.grade}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Learning Areas */}
                {item.learningAreas && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-mono text-brand-violet uppercase tracking-wider mb-2 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Key Learning Areas</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.learningAreas.map((area, aIdx) => (
                        <span key={aIdx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
