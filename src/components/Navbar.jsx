import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showCvToast, setShowCvToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCvToast = () => {
    setShowCvToast(true);
    setTimeout(() => setShowCvToast(false), 4000);
  };

  return (
    <>
      {/* Top Reading Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-dark-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3.5 shadow-lg shadow-black/40' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1">
                Pasindu<span className="text-brand-cyan">.Theekshana</span>
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider">B.SC. IT UNDERGRADUATE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-800/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 text-brand-cyan border border-brand-cyan/30 shadow-sm font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Download CV CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Pasindu_Theekshana_CV.pdf"
              download="Pasindu_Theekshana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCvToast}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet text-dark-900 font-bold text-xs flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="/Pasindu_Theekshana_CV.pdf"
              download="Pasindu_Theekshana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCvToast}
              className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-800 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden pt-20 bg-dark-900/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-mono text-gray-400 mb-2 px-3 tracking-widest uppercase">Navigation</p>
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 text-brand-cyan border border-brand-cyan/30 font-semibold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-brand-cyan" />}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="/Pasindu_Theekshana_CV.pdf"
              download="Pasindu_Theekshana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setMobileMenuOpen(false);
                handleCvToast();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-cyan/20"
            >
              <Download className="w-4 h-4" />
              Download Pasindu's CV
            </a>
            <p className="text-center text-xs text-gray-400 font-mono">B.Sc. IT Undergraduate • Rajarata University</p>
          </div>
        </div>
      )}

      {/* Download CV Notification Toast */}
      {showCvToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm glass-card p-4 rounded-2xl border-brand-cyan/40 shadow-2xl flex items-start gap-3 animate-bounce-short">
          <div className="p-2 rounded-xl bg-brand-cyan/20 text-brand-cyan">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Downloading CV</h4>
            <p className="text-xs text-gray-300 mt-0.5">
              Pasindu_Theekshana_CV.pdf is downloading.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
