import React from 'react';
import { use3DTilt } from '../hooks/use3DTilt';
import ScrollReveal from './animations/ScrollReveal';

const About = () => {
  const { ref, style, onMouseMove, onMouseLeave, glareStyle } = use3DTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <section id="about" className="py-24 relative flex items-center justify-center min-h-[80vh] perspective-1000">
      <ScrollReveal className="max-w-4xl w-full px-6 z-10" direction="up" distance={60} animation="3d-flip-x">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">About Me</h2>
        
        <div 
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={style}
          className="relative glass-pane-darker p-8 md:p-12 rounded-3xl overflow-hidden preserve-3d"
        >
          {/* Hi-Tech Animated Background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40 mix-blend-screen rounded-3xl">
            {/* Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] animate-grid-move"></div>
            
            {/* Moving Scanline */}
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan shadow-[0_0_15px_#00f0ff] animate-tech-scanline"></div>
            
            {/* Floating Tech Data Blocks */}
            <div className="absolute inset-0 flex justify-between px-12 opacity-30">
               <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-pulse delay-75"></div>
               <div className="w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse delay-300"></div>
               <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent animate-pulse delay-150"></div>
               <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Glare effect */}
          <div className="absolute inset-0 pointer-events-none z-10" style={glareStyle} />

          <div style={{ transform: 'translateZ(30px)' }}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I am a Dual Degree B.Tech + M.Tech (Information Technology) student at the Institute of Professional Studies, DAVV, Indore, expected to graduate in 2029. 
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I have a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. I am passionate about building responsive, user-friendly, and performant web applications using modern technologies like React and Tailwind CSS.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
