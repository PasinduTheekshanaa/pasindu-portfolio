import React, { useState, useEffect } from 'react';
import { ExternalLink, FolderGit2, X, Eye, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const projectData = [
  {
    id: 1,
    title: 'Intelligent Traffic Sign Recognition System',
    category: 'AI & Computer Vision',
    description: 'A CNN-based traffic sign recognition system trained on the German Traffic Sign Recognition Benchmark (GTSRB) dataset for autonomous driving assistance.',
    longDescription: 'Developed as part of the Introduction to Intelligent Systems course, this deep learning pipeline performs image preprocessing, normalization, and data augmentation to accurately classify traffic signs in real-time. Evaluated model accuracy across 43 traffic sign classes in a 5-member team.',
    image: '/assets/projects/traffic_sign.png',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib'],
    highlights: [
      'CNN architecture trained on GTSRB benchmark dataset',
      'Data augmentation & noise normalization preprocessing',
      'Real-time image classification inference pipeline',
      'Collaborative 5-member team development lifecycle'
    ],
    github: 'https://github.com/PasinduTheekshanaa',
    demo: 'https://github.com/PasinduTheekshanaa',
  },
  {
    id: 2,
    title: 'Enterprise Network Design & Security',
    category: 'Networking & Security',
    description: 'Design and implementation of a scalable enterprise network architecture using Cisco Packet Tracer with VLAN segmentation and security ACLs.',
    longDescription: 'Configured VLANs, DHCP pools, inter-VLAN routing, firewall rules, and Access Control Lists (ACLs) to enforce network segmentation and organizational resource security. Enhanced network availability through redundant ISP connections.',
    image: '/assets/projects/enterprise_network.png',
    technologies: ['Cisco Packet Tracer', 'VLANs', 'DHCP', 'ACLs', 'Routing Protocols'],
    highlights: [
      'Configured multi-VLAN segmentation & inter-VLAN routing',
      'Implemented strict firewall Access Control Lists (ACLs)',
      'Automated DHCP address assignment pools',
      'Designed ISP link redundancy for mission-critical uptime'
    ],
    github: 'https://github.com/PasinduTheekshanaa',
    demo: 'https://github.com/PasinduTheekshanaa',
  },
  {
    id: 3,
    title: 'Emergency Contact Helper (Android App)',
    category: 'Mobile App',
    description: 'An Android application providing quick access to emergency services, contacts, SOS triggers, and location broadcasting.',
    longDescription: 'Features user authentication, profile management, local database storage using SQLite, and instant SOS alert dispatching. Designed following Google Material Design guidelines with optimized RecyclerViews.',
    image: '/assets/projects/visual_aid.png',
    technologies: ['Java', 'Android Studio', 'SQLite', 'RecyclerView', 'Git & GitHub'],
    highlights: [
      'Instant one-tap SOS emergency trigger dispatch',
      'Local SQLite relational database for offline contact access',
      'Material Design UI with custom RecyclerView adapters',
      'User authentication & emergency profile management'
    ],
    github: 'https://github.com/PasinduTheekshanaa',
    demo: 'https://github.com/PasinduTheekshanaa',
  },
  {
    id: 4,
    title: 'Melodynes – Audio Player Mobile Application',
    category: 'Mobile App',
    description: 'A cross-platform audio player application built with Flutter offering seamless music playback and custom playlist management.',
    longDescription: 'Melodynes is a mobile media application providing audio playback controls, customized playlists, background audio services, and a sleek modern dark UI created with custom Flutter widgets.',
    image: '/assets/projects/collaborative_learning.png',
    technologies: ['Flutter', 'Dart', 'UI/UX Design', 'Mobile Dev'],
    highlights: [
      'Cross-platform Flutter build for Android & iOS',
      'Interactive playlist creation & audio stream handling',
      'Modern dark aesthetic with smooth animation transitions',
      'Custom Flutter audio state management'
    ],
    github: 'https://github.com/PasinduTheekshanaa',
    demo: 'https://github.com/PasinduTheekshanaa',
  },
  {
    id: 5,
    title: 'Collaborative Learning Management System (LMS)',
    category: 'Web App',
    description: 'A web-based platform supporting collaborative learning, course portal access, and interaction between students and lecturers.',
    longDescription: 'Developed as a university team project, this LMS platform features intuitive student and lecturer dashboards, course materials distribution, and project submission tracking using Tailwind CSS.',
    image: '/assets/projects/financial_ai.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Git & GitHub'],
    highlights: [
      'Role-based dashboards for students and academic staff',
      'Responsive dark interface built with Tailwind CSS',
      'Integrated course materials & assignment portal',
      'Version controlled team development on GitHub'
    ],
    github: 'https://github.com/PasinduTheekshanaa',
    demo: 'https://github.com/PasinduTheekshanaa',
  },
  {
    id: 6,
    title: 'AI-Based Skin Disease Detection System',
    category: 'AI & Computer Vision',
    description: 'An AI-powered image classification system for skin disease detection using deep learning and image processing.',
    longDescription: 'Applies deep learning CNN models to perform dermatological lesion classification. Incorporates dataset augmentation, contrast normalization, and computer vision feature extraction for medical decision support.',
    image: '/assets/projects/tinea_detection.png',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    highlights: [
      'Deep learning image classification pipeline',
      'OpenCV image normalization & lesion contouring',
      'Dataset preprocessing & augmentation techniques',
      'Model precision & sensitivity evaluation'
    ],
    github: 'https://github.com/PasinduTheekshanaa',
    demo: 'https://github.com/PasinduTheekshanaa',
  },
  {
    id: 7,
    title: 'Plant Growth Monitoring System',
    category: 'Computer Vision',
    description: 'An automated computer vision image-processing solution to monitor plant growth rates in controlled environments.',
    longDescription: 'Utilizes computer vision techniques for automated leaf color segmentation, height measurement, and canopy area estimation to analyze plant health trends automatically.',
    image: '/assets/projects/visual_aid.png',
    technologies: ['Python', 'OpenCV', 'Image Processing', 'NumPy'],
    highlights: [
      'Automated canopy area & height measurement',
      'OpenCV color segmentation & mask filtering',
      'Time-series growth trajectory analytics',
      'Non-invasive agricultural computer vision solution'
    ],
    github: 'https://github.com/PasinduTheekshanaa',
    demo: 'https://github.com/PasinduTheekshanaa',
  },
];

const categories = ['All', 'AI & Computer Vision', 'Web App', 'Mobile App', 'Networking & Security'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Open modal and push history state for browser back button support
  const handleOpenProject = (project) => {
    setSelectedProject(project);
    window.history.pushState({ projectModalOpen: true, projectId: project.id }, '', `#project-${project.id}`);
  };

  // Close modal and restore history state cleanly
  const handleCloseProject = () => {
    if (selectedProject) {
      setSelectedProject(null);
      if (window.location.hash.startsWith('#project-')) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search + '#projects');
      }
    }
  };

  // Listen for browser back button (popstate event)
  useEffect(() => {
    const handlePopState = (e) => {
      if (selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedProject]);

  // Escape key listener for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        handleCloseProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects = activeFilter === 'All'
    ? projectData
    : projectData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            University <span className="text-gradient-cyan-violet">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl">
            Key software, AI, mobile, web, and networking projects developed during my Information Technology degree.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 shadow-md shadow-brand-cyan/20 scale-105 font-bold'
                  : 'glass-card text-gray-300 hover:text-white hover:border-brand-cyan/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-white/10 overflow-hidden glass-card-hover flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-dark-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-dark-900/80 backdrop-blur-md text-brand-cyan border border-brand-cyan/30">
                    {project.category}
                  </span>

                  <button
                    onClick={() => handleOpenProject(project)}
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-brand-cyan text-dark-900 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-[11px] shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-brand-cyan/10 text-brand-cyan">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-white/5">
                <button
                  onClick={() => handleOpenProject(project)}
                  className="text-xs font-semibold text-brand-cyan hover:text-white flex items-center gap-1 group/btn"
                >
                  <span>Project Overview</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/10"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Dialog Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 p-3 sm:p-6 bg-dark-900/90 backdrop-blur-xl flex items-center justify-center animate-fadeIn overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseProject();
          }}
        >
          <div className="glass-card max-w-2xl w-full rounded-3xl border border-brand-cyan/30 p-5 sm:p-7 relative max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            
            {/* Top Modal Navigation Bar */}
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 sticky top-0 bg-dark-900/80 backdrop-blur-md z-10 -mx-1 px-1">
              
              {/* Back to Projects Button */}
              <button
                onClick={handleCloseProject}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/40 text-xs font-semibold text-gray-200 hover:text-brand-cyan transition-all duration-200 shadow-sm active:scale-95 min-h-[40px]"
                aria-label="Back to Projects"
              >
                <ArrowLeft className="w-4 h-4 text-brand-cyan" />
                <span>Back to Projects</span>
              </button>

              {/* X Close Button */}
              <button
                onClick={handleCloseProject}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close Project Detail"
                title="Close Overview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Hero Image */}
            <div className="h-52 sm:h-60 rounded-2xl overflow-hidden mb-5 bg-dark-800 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-bold bg-dark-900/80 text-brand-cyan border border-brand-cyan/40 backdrop-blur-md">
                {selectedProject.category}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">{selectedProject.title}</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2.5">Key Accomplishments</h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-brand-violet uppercase tracking-wider mb-2.5">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Navigation & GitHub Link */}
            <div className="flex items-center justify-between gap-3 pt-5 border-t border-white/10 mt-auto">
              <button
                onClick={handleCloseProject}
                className="px-4 py-2.5 rounded-xl glass-card border border-white/15 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Projects</span>
              </button>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 font-bold text-xs flex items-center gap-2 shadow-lg shadow-brand-cyan/20 hover:scale-105 transition-transform"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Code on GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
