import React from 'react';
import { use3DTilt } from '../hooks/use3DTilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';

const ProjectCard = ({ title, description, tech, link, github, image }) => {
  const { ref, style, onMouseMove, onMouseLeave } = use3DTilt({ maxTilt: 10, scale: 1.05 });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className="glass-pane-darker rounded-3xl flex flex-col h-full relative group transition-colors hover:bg-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl z-10 pointer-events-none" />
      
      {/* Top Half: Unobscured Animated Image */}
      <div className="h-56 relative overflow-hidden shrink-0 border-b border-white/10">
        <div 
          className="absolute -inset-8 z-0 bg-cover bg-center animate-bg-pan" 
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      {/* Bottom Half: Solid Background for Perfect Text Legibility */}
      <div className="flex-1 flex flex-col p-8 bg-[#0a0a0a] z-20 relative">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <ul className="text-gray-300 mb-6 flex-1 space-y-2 text-sm font-medium">
          {description.map((desc, i) => (
            <li key={i} className="list-disc ml-4">{desc}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-white/5 rounded-full text-neon-cyan border border-white/10 shadow-sm">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {link && (
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-neon-cyan transition-colors">
              <ExternalLink size={16} /> Live Demo
            </motion.a>
          )}
          {github && (
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors">
              <FaGithub size={16} /> Source Code
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Cerso Landing Page',
      image: '/assets/projects/cerso.png',
      description: [
        'Modern, responsive landing page built with React and Tailwind CSS.',
        'Focuses on high performance, clean UI/UX, and engaging animations.',
      ],
      tech: ['React.js', 'Tailwind CSS', 'Vite', 'JavaScript'],
      link: 'https://cerso-landing-page-ten.vercel.app/',
      github: 'https://github.com/Yogendra-Singh-0/Cerso-Landing-Page',
    },
    {
      title: 'Weather App',
      image: '/assets/projects/weather.png',
      description: [
        'Responsive weather forecasting web app with interactive UI components.',
        'Integrates Weather API to fetch real-time atmospheric conditions.',
      ],
      tech: ['React.js', 'Tailwind CSS', 'Weather API', 'ReactBits'],
      link: 'https://yogendra-singh-0.github.io/Weather/#/',
      github: 'https://github.com/Yogendra-Singh-0/Weather',
    },
    {
      title: 'Wrist Aura',
      image: '/assets/projects/wrist.png',
      description: [
        'Interactive wristwatch-themed web application.',
        'Smooth frontend animations and dynamic UI interactions for high engagement.',
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://yogendra-singh-0.github.io/wrist-aura/',
      github: 'https://github.com/Yogendra-Singh-0/wrist-aura',
    },
  ];

  return (
    <section id="projects" className="py-24 relative perspective-1000">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} direction={idx % 2 === 0 ? "left" : "right"} distance={80} animation="3d-flip-y" className="h-full">
              <ProjectCard {...proj} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;