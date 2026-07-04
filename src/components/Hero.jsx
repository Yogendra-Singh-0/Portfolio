import React from 'react';
import Shuffle from './animations/Shuffle';
import { use3DTilt } from '../hooks/use3DTilt';
import { motion } from 'framer-motion';
import pfp from '../assets/pfp.jpeg';

const Hero = () => {
  const { ref, style, onMouseMove, onMouseLeave, glareStyle } = use3DTilt({ maxTilt: 10, scale: 1.05, glare: true });

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative perspective-1000 overflow-hidden pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-neon-cyan/20 rounded-full blur-[120px] -z-10" />



      <div 
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={style}
        className="relative z-10 glass-pane p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] w-11/12 max-w-5xl mx-auto overflow-hidden preserve-3d text-center"
      >
        {/* Glare layer */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay z-10" style={glareStyle} />

        {/* Technical Grid Background */}
        <div className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff30_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff30_1px,transparent_1px)] bg-[size:3rem_3rem] animate-grid-move"></div>
        </div>

        <div style={{ transform: 'translateZ(50px)' }} className="z-20 relative flex flex-col items-center">
          
          {/* Profile Picture */}
          <div className="relative mb-8 group" style={{ transform: 'translateZ(70px)' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow" />
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-br from-neon-cyan via-white/50 to-neon-pink relative z-10 shadow-2xl">
              <img src={pfp} alt="Yogendra Singh" className="w-full h-full object-cover rounded-full border-[3px] border-[#080808]" />
            </div>
          </div>

          <Shuffle
            text="HELLO! I AM"
            tag="p"
            className="text-neon-cyan font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
            shuffleDirection="up"
            animationMode="random"
            
            maxDelay={0.4}
            shuffleTimes={3}
          />
          
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-black mb-6 tracking-tight text-white drop-shadow-2xl text-center">
            <Shuffle text="Yogendra" tag="span" className="mr-4 md:mr-6 inline-block" shuffleDirection="down" animationMode="evenodd" stagger={0.04} />
            <br className="md:hidden" />
            <span className="text-gradient-primary relative z-10 inline-block">
              <Shuffle text="Singh" tag="span" shuffleDirection="down" animationMode="evenodd" stagger={0.04} />
            </span>
          </h1>
          
          <Shuffle
            text="Integrated M.Tech (IT) Student at IIPS-DAVV. Web Developer & Tech Enthusiast."
            tag="p"
            className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
            shuffleDirection="left"
            animationMode="random"
            maxDelay={0.8}
            shuffleTimes={1}
          />
          
          <div className="flex flex-col sm:flex-row items-center gap-6" style={{ transform: 'translateZ(30px)' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 text-white font-bold rounded-full border border-white/20"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;