import React from 'react';
import { motion } from 'framer-motion';
import { use3DTilt } from '../hooks/use3DTilt';
import ScrollReveal from './animations/ScrollReveal';

const ExperienceCard = ({ duration, role, company, location, image, logo }) => {
  const { ref, style, onMouseMove, onMouseLeave } = use3DTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <div 
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className="w-full glass-pane-darker p-6 md:p-8 rounded-2xl relative group hover:border-white/20 transition-colors overflow-hidden mb-8 flex flex-col md:flex-row gap-6 items-start md:items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl z-20 pointer-events-none" />
      
      {/* Animated Background Image */}
      {image && (
        <div className="absolute inset-0 z-0 bg-black overflow-hidden rounded-[inherit]">
           <div 
             className="absolute -inset-8 bg-cover bg-center animate-bg-pan opacity-40 transition-opacity duration-500 group-hover:opacity-60"
             style={{ backgroundImage: `url(${image})` }}
           />
           {/* Uniform dark overlay to reduce image glare */}
           <div className="absolute inset-0 bg-[#080808]/70 rounded-[inherit]" />
        </div>
      )}
      
      {/* Icon / Company Logo or Initial */}
      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${logo ? 'bg-white border-transparent' : 'bg-black/50 border-white/10 group-hover:border-neon-cyan/50'} border flex items-center justify-center shrink-0 relative overflow-hidden transition-colors duration-300 shadow-lg`}>
         {!logo && <div className="absolute inset-0 bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />}
         {logo ? (
           <img src={logo} alt={`${company} logo`} className="w-[85%] h-[85%] object-contain relative z-10" />
         ) : (
           <span className="text-3xl font-black text-white relative z-10">{company.charAt(0)}</span>
         )}
      </div>

      <div className="flex-grow z-20">
        <h3 className="text-2xl font-bold text-white mb-1 text-shadow-ultra">{role}</h3>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-300">
          <span className="font-semibold text-neon-cyan tracking-wide">{company}</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-600" />
          <span className="text-sm font-medium">{location}</span>
        </div>
      </div>

      <div className="shrink-0 z-20 text-left md:text-right mt-4 md:mt-0 w-full md:w-auto">
        <span className="inline-block w-full md:w-auto text-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-neon-pink shadow-[0_0_15px_rgba(255,0,127,0.15)] backdrop-blur-md">
          {duration}
        </span>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      duration: 'June 26, 2026 - July 26, 2026',
      role: 'Web Development Internship',
      company: 'Cerso',
      location: 'Remote (Work-from-home)',
      image: '/assets/experience/cerso_bg.png',
      logo: '/assets/experience/cerso_logo.png'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">Experience</h2>
        
        <div className="relative">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2} direction="up" distance={50} animation="fade">
              <ExperienceCard {...exp} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
