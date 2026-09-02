import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      
      {/* Glow Ambient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Pasindu<span className="text-brand-cyan">.Theekshana</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Third-Year Information Technology Undergraduate at Rajarata University of Sri Lanka. 
              Software Developer, AI Enthusiast, and Web Engineering Specialist.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex items-center justify-center flex-wrap gap-4 text-xs font-medium text-gray-400">
            <a href="#home" className="hover:text-brand-cyan transition-colors">Home</a>
            <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-cyan transition-colors">Skills</a>
            <a href="#education" className="hover:text-brand-cyan transition-colors">Education</a>
            <a href="#projects" className="hover:text-brand-cyan transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-brand-cyan transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-brand-cyan transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href="https://github.com/PasinduTheekshanaa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-brand-cyan/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/pasindu-theekshana-herath-b74a22273"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-brand-cyan/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:pasindutheekshana21@gmail.com"
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-brand-cyan/40 transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <p className="font-mono flex items-center gap-1">
            <span>Designed & Developed by</span>
            <strong className="text-white font-semibold">Pasindu Theekshana</strong>
          </p>

          <p className="text-gray-400 text-[11px] font-mono">
            © {new Date().getFullYear()} All rights reserved • Rajarata University of Sri Lanka
          </p>
        </div>

      </div>

      {/* Floating Back-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-violet text-dark-900 font-bold shadow-lg shadow-brand-cyan/30 hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Back to Top"
          title="Scroll Back to Top"
        >
          <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

    </footer>
  );
}
