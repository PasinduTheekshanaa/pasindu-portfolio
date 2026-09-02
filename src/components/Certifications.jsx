import React from 'react';
import { Award, ShieldCheck, CheckCircle2, GraduationCap } from 'lucide-react';

const certifications = [
  {
    title: 'Professional Certificate in Web Development',
    institution: 'Informatics Institute of Technology (IIT) - PDU',
    duration: '4-Month Programme',
    status: 'Completed',
    category: 'Web Development',
  },
  {
    title: 'Diploma in Information Technology',
    institution: 'ESOFT Metro College, Monaragala',
    status: 'Completed',
    category: 'Information Technology',
  },
  {
    title: 'Diploma in English',
    institution: 'ESOFT Metro College, Monaragala',
    status: 'Completed',
    category: 'Language Proficiency',
  },
  {
    title: 'English Language Course (Primary & Intermediate)',
    institution: 'Wellassa Richway English College',
    status: 'Completed',
    category: 'Language Proficiency',
  },
  {
    title: 'Front-End Web Development',
    institution: 'University of Moratuwa (CODL)',
    status: 'Completed',
    category: 'Web Engineering',
  },
  {
    title: 'Python Programming',
    institution: 'University of Moratuwa (CODL)',
    status: 'Completed',
    category: 'Software Engineering',
  },
  {
    title: 'Python for Beginners',
    institution: 'University of Moratuwa (CODL)',
    status: 'Completed',
    category: 'Programming',
  },
  {
    title: 'Web Design for Beginners',
    institution: 'University of Moratuwa (CODL)',
    status: 'Completed',
    category: 'UI/UX & Web',
  },
  {
    title: 'Web Development with Freelancing',
    institution: 'IT Guru Global',
    status: 'Completed',
    category: 'Web & Freelancing',
  },
  {
    title: 'Git: Hands-on Learning Session',
    institution: 'Fidenz Academy',
    status: 'Completed',
    category: 'DevOps & Tools',
  },
  {
    title: 'Agile Mastery: Empowering Teams for Success',
    institution: 'Dept. of Computing, Rajarata University of Sri Lanka',
    status: 'Completed',
    category: 'Agile & Management',
  },
  {
    title: 'Certificate in ERP Basics with SAP',
    institution: 'University of Kelaniya & DP Education',
    status: 'Completed',
    category: 'ERP Systems',
  },
  {
    title: 'Fundamentals of 5G Technology',
    institution: 'eAcademy',
    status: 'Completed',
    category: 'Telecommunications',
  },
  {
    title: 'eCommerce Management',
    institution: 'eAcademy',
    status: 'Completed',
    category: 'Business & Tech',
  },
  {
    title: 'Computer Basics',
    institution: 'eAcademy',
    status: 'Completed',
    category: 'IT Foundations',
  },
  {
    title: 'Joomla for Beginners',
    institution: 'eAcademy',
    status: 'Completed',
    category: 'CMS Platforms',
  },
  {
    title: 'Free CSS Mastery',
    institution: 'eAcademy',
    status: 'Completed',
    category: 'Web Styling',
  },
  {
    title: 'Earn Money Online / Tech Skills',
    institution: 'eAcademy',
    status: 'Completed',
    category: 'Digital Skills',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-dark-900/60">
      
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-violet/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & DIPLOMAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Additional <span className="text-gradient-cyan-violet">Qualifications</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl">
            18+ professional development programs, university diplomas, and online technical certifications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-white/10 glass-card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 font-semibold">
                    {cert.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-emerald">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors mb-1.5 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-gray-300">
                  {cert.institution}
                </p>

                {cert.duration && (
                  <p className="text-[11px] font-mono text-brand-violet mt-1">
                    {cert.duration}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Credential 0{idx + 1}</span>
                <span className="text-gray-300">{cert.status}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
