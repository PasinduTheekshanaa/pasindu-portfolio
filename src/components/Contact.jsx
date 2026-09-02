import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showReferences, setShowReferences] = useState(false);

  const contactEmail = 'pasindutheekshana21@gmail.com';
  const contactPhone = '0740245749';
  const linkedinUrl = 'https://www.linkedin.com/in/pasindu-theekshana-herath-b74a22273';
  const githubUrl = 'https://github.com/PasinduTheekshanaa';

  const references = [
    {
      name: 'Mr. Jayalath Dissanayake',
      role: 'Teacher / Academic Mentor',
      mobile: '0767799927',
    },
    {
      name: 'Mr. Chaminda Kithsiri',
      role: 'Teacher / Academic Mentor',
      mobile: '0713972344',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/60">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-cyan/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-violet/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Build <span className="text-gradient-cyan-violet">Something Amazing</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl">
            Interested in hiring an IT intern, discussing a project proposal, or collaborating on software/AI development?
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-2">Pasindu Theekshana</h3>
              <p className="text-xs text-brand-cyan font-mono mb-6">
                B.Sc. IT Undergraduate • Rajarata University of Sri Lanka
              </p>

              {/* Email Item */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between mb-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-brand-cyan/10 text-brand-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Email Address</span>
                    <span className="text-xs font-semibold text-white truncate block">{contactEmail}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-dark-800 border border-white/10 text-gray-300 hover:text-white hover:border-brand-cyan/40 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-brand-violet/10 text-brand-violet shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Phone Number</span>
                    <span className="text-xs font-semibold text-white truncate block">{contactPhone}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-dark-800 border border-white/10 text-gray-300 hover:text-white hover:border-brand-cyan/40 transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 hover:bg-white/10 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">LinkedIn</span>
                    <span className="text-[10px] text-gray-400 font-mono">Connect</span>
                  </div>
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 hover:bg-white/10 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">GitHub</span>
                    <span className="text-[10px] text-gray-400 font-mono">Projects</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400 font-mono">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Location: Monaragala, Bibile, Sri Lanka</span>
              </div>

            </div>

            {/* Optional References Toggle */}
            <div className="glass-card rounded-2xl border border-white/10 p-5">
              <button
                onClick={() => setShowReferences(!showReferences)}
                className="w-full flex items-center justify-between text-xs font-bold text-white font-mono hover:text-brand-cyan transition-colors"
              >
                <span className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-brand-cyan" />
                  <span>Academic & Professional References</span>
                </span>
                {showReferences ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showReferences && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-3 animate-fadeIn">
                  {references.map((ref, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <p className="font-bold text-white">{ref.name}</p>
                      <p className="text-[11px] text-gray-400 font-medium">{ref.role}</p>
                      <p className="text-[11px] font-mono text-brand-cyan mt-1">Mob: {ref.mobile}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/30 text-center flex flex-col items-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-brand-emerald/20 text-brand-emerald flex items-center justify-center mb-3">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Received!</h4>
                  <p className="text-xs text-gray-300 mt-1 max-w-sm">
                    Thank you for reaching out, Pasindu will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Name <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors text-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Email <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors text-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Message <span className="text-brand-cyan">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Discuss project ideas, software internship opportunities, or general inquiries..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet text-dark-900 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-cyan/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
