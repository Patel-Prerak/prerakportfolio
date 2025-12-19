import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Custom cursor logic if desired, or simple page structure
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <div className="App">
      {/* Custom Cursor (Optional premium touch) */}
      <div
        className="cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid var(--accent-primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
          transition: 'transform 0.1s ease-out',
          display: 'none' // Hidden on touch or by default unless media query enables it
        }}
      ></div>
      <style>{`
        @media (min-width: 992px) {
            .cursor { display: block !important; }
        }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
