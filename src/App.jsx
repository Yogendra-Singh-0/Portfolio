import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import GradualBlur from 'gradualblur';
import Ferrofluid from './components/animations/Ferrofluid';
import './index.css';

const Separator = () => (
  <div className="w-full flex flex-col items-center justify-center opacity-60">
    <div className="w-px h-24 bg-gradient-to-b from-transparent to-gray-600"></div>
    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
    <div className="w-px h-24 bg-gradient-to-b from-gray-600 to-transparent"></div>
  </div>
);

function App() {
  const [isFooterHovered, setIsFooterHovered] = React.useState(false);

  // Smooth scroll behavior for internal links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#080808] text-gray-200 min-h-screen selection:bg-neon-cyan selection:text-black">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Ferrofluid
          colors={["#00f0ff", "#111111", "#ff007f"]}
          speed={0.2}
          scale={1.2}
          turbulence={0.7}
          fluidity={0.2}
          rimWidth={0.2}
          sharpness={1.5}
          shimmer={0.8}
          glow={1.5}
          flowDirection="down"
          opacity={0.25}
          mouseInteraction
          mouseStrength={0.8}
          mouseRadius={0.35}
        />
      </div>
      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Hero />

        <Separator />

        <About />

        <Separator />

        <Experience />

        <Separator />

        <Skills />

        <Separator />

        <Projects />

        <Separator />

        <Education />

        <Separator />

        <Contact />
      </main>

      {/* Footer */}
      <footer 
        className="py-8 text-center text-gray-500 text-sm border-t border-white/5 relative z-10 bg-black/50 pb-20 group transition-all duration-500"
        onMouseEnter={() => setIsFooterHovered(true)}
        onMouseLeave={() => setIsFooterHovered(false)}
      >
        <p className="transition-colors duration-300 group-hover:text-gray-300">© {new Date().getFullYear()} Yogendra Singh. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:text-gray-400">Designed & Built with React and Tailwind CSS</p>
      </footer>

      {/* Global Bottom Blur */}
      <div className={`fixed bottom-0 left-0 w-full z-40 pointer-events-none transition-opacity duration-700 ${isFooterHovered ? 'opacity-0' : 'opacity-100'}`}>
        <GradualBlur
          target="parent"
          position="bottom"
          height="8rem"
          strength={3}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </div>
    </div>
  );
}

export default App;
