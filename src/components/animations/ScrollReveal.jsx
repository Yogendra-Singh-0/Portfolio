import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', 
  distance = 50, 
  duration = 0.8,
  animation = 'slide' // 'slide', 'scale', '3d-flip-x', '3d-flip-y', '3d-pop'
}) => {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  };

  const getInitial = () => {
    switch (animation) {
      case 'scale':
        return { opacity: 0, scale: 0.7, ...directions[direction] };
      case '3d-flip-x':
        return { opacity: 0, rotateX: 60, y: distance, z: -200 };
      case '3d-flip-y':
        return { opacity: 0, rotateY: direction === 'left' ? -60 : 60, x: directions[direction].x, z: -200 };
      case '3d-pop':
        return { opacity: 0, scale: 0.5, rotateX: 30, rotateY: direction === 'left' ? -30 : 30, z: -300 };
      case 'slide':
      default:
        return { opacity: 0, ...directions[direction] };
    }
  };

  const getWhileInView = () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
    };
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getWhileInView()}
      viewport={{ once: true, margin: "-10%" }}
      style={{ perspective: '1200px' }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        // Use a springy bounce effect for 3D animations
        ease: animation.includes('3d') ? [0.175, 0.885, 0.32, 1.15] : [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
