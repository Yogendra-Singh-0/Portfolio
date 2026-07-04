import React from 'react';
import { use3DTilt } from '../hooks/use3DTilt';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';

const EducationCard = ({ year, degree, institution, location, score, alignRight, image }) => {
  const { ref, style, onMouseMove, onMouseLeave } = use3DTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <div className={`relative flex md:justify-center items-center md:items-start w-full mb-12`}>
      {/* Timeline Dot */}
      <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full shadow-[0_0_10px_currentColor] -translate-x-1/2 mt-1.5 md:mt-0 ${alignRight ? 'bg-neon-pink text-neon-pink' : 'bg-neon-cyan text-neon-cyan'}`} />
      
      {/* Desktop empty space left */}
      {alignRight && <div className="hidden md:block w-1/2 pr-12"></div>}
      
      {/* Content */}
      <div className={`w-full md:w-1/2 ml-8 md:ml-0 ${alignRight ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
        <motion.div 
          whileTap={{ scale: 0.98 }}
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={style}
          className={`glass-pane-darker p-8 rounded-2xl inline-block w-full relative group hover:border-white/20 transition-all overflow-hidden ${alignRight ? 'text-left' : 'text-left md:text-right'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl z-10 pointer-events-none" />
          
          {/* Animated Background Image */}
          <div className="absolute inset-0 z-0 bg-black overflow-hidden rounded-[inherit]">
             <div 
               className="absolute -inset-8 bg-cover bg-center animate-bg-pan opacity-50 transition-opacity duration-500 group-hover:opacity-70"
               style={{ backgroundImage: `url(${image})` }}
             />
             {/* Uniform dark overlay to reduce image glare */}
             <div className="absolute inset-0 bg-black/60 rounded-[inherit]" />
          </div>

          <div className="relative z-20">
            <span className={`${alignRight ? 'text-neon-pink' : 'text-neon-cyan'} text-sm font-bold tracking-wider mb-2 block text-shadow-strong`}>{year}</span>
            <h3 className="text-xl font-bold text-white mb-2 text-shadow-ultra">{degree}</h3>
            <p className="text-gray-100 font-medium text-shadow-strong">{institution}</p>
            {location && <p className="text-gray-300 text-sm mt-1 text-shadow-strong">{location}</p>}
            {score && <p className={`text-sm font-semibold mt-3 text-shadow-strong ${alignRight ? 'text-neon-pink' : 'text-neon-cyan'}`}>{score}</p>}
          </div>
        </motion.div>
      </div>

      {/* Desktop empty space right */}
      {!alignRight && <div className="hidden md:block w-1/2 pl-12"></div>}
    </div>
  );
};

const Education = () => {
  const educations = [
    {
      year: '2024 - 2029 (Expected)',
      degree: 'Dual Degree B.Tech + M.Tech (IT)',
      institution: 'Institute of Professional Studies, DAVV, Indore',
      alignRight: false,
      image: '/assets/education/edu_college.png'
    },
    {
      year: '2024',
      degree: 'Class 12th',
      institution: 'The Vedansh International School, CBSE',
      location: 'Indore, MP',
      score: 'Percentage: 87%',
      alignRight: true,
      image: '/assets/education/edu_school.png'
    }
  ];

  return (
    <section id="education" className="py-24 relative perspective-1000">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">Education</h2>
        
        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {educations.map((edu, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2} direction={edu.alignRight ? "left" : "right"} distance={100} animation="scale">
              <EducationCard {...edu} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;