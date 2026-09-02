import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, Mail, Download, Sparkles, Terminal, ChevronDown, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const roles = [
  'B.Sc. IT Undergraduate',
  'Software Developer',
  'AI Enthusiast',
  'Web Developer',
];

export default function Hero() {
  const canvasRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2000;
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText !== currentRole) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText !== '') {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText === currentRole) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Canvas background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? 'rgba(6, 182, 212, ' : 'rgba(139, 92, 246, ',
        baseAlpha: Math.random() * 0.3 + 0.15,
      });
    }

    let mouse = { x: null, y: null, radius: 130 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color + p1.baseAlpha + ')';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - distance / 130) * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Ambient Neon Radial Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-cyan/15 via-brand-violet/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Bio & CTAs */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-cyan/40 text-brand-cyan text-xs font-mono tracking-wide mb-6 animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-ping" />
            <span>Available for Opportunities</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">Year 3 IT Undergrad</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            Hi, I'm <br className="hidden sm:inline" />
            <span className="text-gradient-cyan-violet">Pasindu Theekshana</span>
          </h1>

          {/* Animated Rotating Roles */}
          <div className="h-10 flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-bold text-gray-200 mb-6 font-mono">
            <Terminal className="w-6 h-6 text-brand-cyan shrink-0 hidden sm:block" />
            <span className="text-brand-cyan border-r-2 border-brand-cyan pr-1 animate-pulse">
              {displayedText}
            </span>
          </div>

          {/* Short Intro */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed mb-8 text-center lg:text-left">
            I build modern digital experiences and AI-powered solutions through software development, 
            machine learning, and problem-solving. Currently pursuing my B.Sc. in IT at Rajarata University of Sri Lanka.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet text-dark-900 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-105 transition-all duration-300"
            >
              <span>View My Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-card border border-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-white/10 hover:border-brand-cyan/40 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-brand-cyan" />
              <span>Contact Me</span>
            </a>

            <a
              href="/Pasindu_Theekshana_CV.pdf"
              download="Pasindu_Theekshana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-card border border-brand-violet/40 text-brand-violet font-semibold text-xs flex items-center justify-center gap-2 hover:bg-brand-violet/10 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full max-w-md justify-center lg:justify-start">
            <a
              href="https://github.com/PasinduTheekshanaa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-gray-300 hover:text-brand-cyan hover:border-brand-cyan/40 hover:scale-110 transition-all flex items-center gap-2 text-xs font-mono"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pasindu-theekshana-herath-b74a22273"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-gray-300 hover:text-brand-cyan hover:border-brand-cyan/40 hover:scale-110 transition-all flex items-center gap-2 text-xs font-mono"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Right Column: Creative Portrait Display Frame */}
        <div className="flex-1 flex items-center justify-center relative">
          
          {/* Layered Glow Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 via-brand-indigo/30 to-brand-violet/20 rounded-full blur-3xl scale-95 animate-pulse-glow" />

          {/* Frame Outer Ring */}
          <div className="relative p-3.5 rounded-3xl bg-gradient-to-b from-brand-cyan/40 via-brand-indigo/20 to-brand-violet/40 border border-white/20 shadow-2xl backdrop-blur-md max-w-sm sm:max-w-md w-full">
            
            {/* Inner Glass Frame with Portrait Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-dark-800 border border-white/10 group">
              <img
                src="/assets/profile.jpg"
                alt="Pasindu Theekshana Portrait"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />

              {/* Embedded Name Badge inside frame */}
              <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-xl border border-white/15 backdrop-blur-xl">
                <p className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Pasindu Theekshana</span>
                  <Sparkles className="w-4 h-4 text-brand-cyan" />
                </p>
                <p className="text-[11px] text-brand-cyan font-mono mt-0.5">
                  Rajarata University of Sri Lanka
                </p>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-4 -right-4 glass-card px-3.5 py-2 rounded-xl border border-brand-cyan/40 text-xs font-mono font-semibold text-white shadow-xl flex items-center gap-2 animate-float">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              <span>Full-Stack & AI</span>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card px-3.5 py-2 rounded-xl border border-brand-violet/40 text-xs font-mono font-semibold text-white shadow-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
              <span>15+ Certifications</span>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-gray-400">
        <ChevronDown className="w-4 h-4 animate-bounce text-brand-cyan" />
      </div>

    </section>
  );
}
