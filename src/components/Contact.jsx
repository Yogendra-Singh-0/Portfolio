import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { use3DTilt } from '../hooks/use3DTilt';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';

const Contact = () => {
  const { ref, style, onMouseMove, onMouseLeave } = use3DTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <section id="contact" className="py-24 relative perspective-1000 min-h-[60vh] flex items-center">
      <ScrollReveal className="max-w-7xl mx-auto px-6 w-full" direction="up" distance={80} animation="3d-pop">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">Get In Touch</h2>
        
        <div 
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={style}
          className="glass-pane-darker p-10 md:p-16 rounded-3xl preserve-3d flex flex-col items-center text-center group transition-colors hover:border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl z-0 pointer-events-none" />
          
          <div style={{ transform: 'translateZ(30px)' }} className="flex flex-col items-center relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Let's connect!</h3>
            <p className="text-gray-400 max-w-md mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full justify-center items-center mb-12">
              <motion.a whileTap={{ scale: 0.9 }} href="mailto:yogendra.singh.10609@gmail.com" className="flex flex-col items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group/mail">
                <div className="w-16 h-16 rounded-full glass-pane flex items-center justify-center text-neon-cyan group-hover/mail:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <Mail size={24} />
                </div>
                <span className="font-medium">yogendra.singh.10609@gmail.com</span>
              </motion.a>
            </div>

            <div className="flex gap-6 pt-8 border-t border-white/10 w-full justify-center">
              <motion.a whileTap={{ scale: 0.85 }} href="https://www.linkedin.com/in/yogendra-singh-a55602358/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-pane flex items-center justify-center text-white hover:text-neon-cyan hover:scale-110 transition-all">
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a whileTap={{ scale: 0.85 }} href="https://github.com/Yogendra-Singh-0" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-pane flex items-center justify-center text-white hover:text-neon-pink hover:scale-110 transition-all">
                <FaGithub size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;