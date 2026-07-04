import React, { useState } from 'react';
import { use3DTilt } from '../hooks/use3DTilt';
import TargetCursor from './animations/TargetCursor';
import ScrollReveal from './animations/ScrollReveal';
import { motion } from 'framer-motion';

const SkillCard = ({ name, category, image }) => {
  const { ref, style, onMouseMove, onMouseLeave, glareStyle } = use3DTilt({ maxTilt: 20, scale: 1.1, glare: true });

  return (
    <motion.div whileTap={{ scale: 0.9 }} className="h-full">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={style}
        className="cursor-target relative glass-pane p-6 rounded-2xl flex flex-col items-center justify-center gap-3 overflow-hidden border-t border-l border-white/20 hover:border-neon-cyan/50 transition-colors h-full"
      >
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay z-10" style={glareStyle} />
        
        {/* Animated Image Background */}
        <div 
          className="absolute -inset-8 z-0 bg-cover bg-center animate-bg-pan opacity-80" 
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.3)_100%)]" />

        <span className="text-xs text-neon-cyan font-bold uppercase tracking-wider relative z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-1">{category}</span>
        <h3 className="text-xl font-bold text-white relative z-20 drop-shadow-[0_4px_8px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(20px)' }}>{name}</h3>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    { name: 'C / C++', category: 'Languages', image: '/assets/skills/cpp.png' },
    { name: 'Python', category: 'Languages', image: '/assets/skills/python.png' },
    { name: 'JavaScript', category: 'Languages', image: '/assets/skills/js.png' },
    { name: 'HTML & CSS', category: 'Languages', image: '/assets/skills/html_css.png' },
    { name: 'React.js', category: 'Frameworks', image: '/assets/skills/react.png' },
    { name: 'Tailwind CSS', category: 'Frameworks', image: '/assets/skills/tailwind.png' },
    { name: 'MongoDB', category: 'Databases', image: '/assets/skills/mongodb.png' },
    { name: 'MySQL', category: 'Databases', image: '/assets/skills/mysql.png' },
    { name: 'Oracle', category: 'Databases', image: '/assets/skills/oracle.png' },
    { name: 'Data Structures', category: 'Core', image: '/assets/skills/ds.png' },
    { name: 'Algorithms', category: 'Core', image: '/assets/skills/algo.png' },
    { name: 'OOP', category: 'Core', image: '/assets/skills/oop.png' },
  ];

  return (
    <section 
      id="skills" 
      className="py-24 relative perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <TargetCursor 
          targetSelector=".cursor-target"
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
          cursorColor="#00f0ff"
          cursorColorOnTarget="#ff007f"
        />
      )}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">Technical Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05} direction="up" distance={50} animation="3d-pop" className="h-full">
              <SkillCard name={skill.name} category={skill.category} image={skill.image} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;