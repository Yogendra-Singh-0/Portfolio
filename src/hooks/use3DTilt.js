import { useRef, useState, useCallback, useMemo } from 'react';

export const use3DTilt = ({ maxTilt = 15, scale = 1.05, glare = false } = {}) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to element center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize values between -1 and 1
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;
    
    // Calculate tilt
    setTilt({
      x: yPct * -maxTilt,
      y: xPct * maxTilt,
    });
    
    // Calculate glare position
    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 1,
      });
    }
  }, [maxTilt, glare]);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    if (glare) {
      setGlarePos(prev => ({ ...prev, opacity: 0 }));
    }
  }, [glare]);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const style = useMemo(() => ({
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? scale : 1}, ${isHovered ? scale : 1}, ${isHovered ? scale : 1})`,
    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
    willChange: 'transform',
    transformStyle: 'preserve-3d',
  }), [tilt.x, tilt.y, isHovered, scale]);

  const glareStyle = useMemo(() => ({
    background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
    opacity: glarePos.opacity,
    transition: isHovered ? 'opacity 0.2s ease-out' : 'opacity 0.5s ease-out',
  }), [glarePos.x, glarePos.y, glarePos.opacity, isHovered]);

  return {
    ref,
    style,
    onMouseMove,
    onMouseLeave,
    onMouseEnter,
    glareStyle,
  };
};