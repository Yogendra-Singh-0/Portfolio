import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-300 ${isScrolled ? 'glass-pane rounded-full mx-4 md:mx-auto' : ''}`}>
        <div className="flex items-center justify-between h-12">
          
          <a href="#" className="text-xl md:text-2xl font-black text-white tracking-tighter">
            YS<span className="text-neon-cyan">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-shadow-neon transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden fixed inset-0 bg-[#080808]/95 backdrop-blur-xl z-40 transition-transform duration-300 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-gray-300 hover:text-white hover:text-shadow-neon transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
