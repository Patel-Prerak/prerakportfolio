import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const mouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDot) {
        cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.07;
      cursorY += (mouseY - cursorY) * 0.07;
      if (cursor) {
        cursor.style.transform = `translate(${cursorX - 22}px, ${cursorY - 22}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', mouseMove);
    animate();

    // === SCROLL REVEAL OBSERVER ===
    // Observes any element with scroll-reveal, scroll-reveal-left, scroll-reveal-right, scroll-reveal-scale
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    // Observe all reveal elements
    const revealSelector = '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale';
    document.querySelectorAll(revealSelector).forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="App">
      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
      </div>

      {/* Noise texture overlay */}
      <div className="noise-overlay"></div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor-ring"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '44px', height: '44px', borderRadius: '50%',
          border: '1.5px solid rgba(0, 255, 157, 0.4)',
          pointerEvents: 'none', zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'width 0.4s, height 0.4s, border-color 0.4s',
          display: 'none'
        }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '8px', height: '8px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00ff9d, #00b8ff)',
          pointerEvents: 'none', zIndex: 9999,
          display: 'none',
          boxShadow: '0 0 10px rgba(0, 255, 157, 0.4)'
        }}
      />
      <style>{`
        @media (hover: hover) and (pointer: fine) and (min-width: 992px) {
          .custom-cursor-ring,
          .custom-cursor-dot {
            display: block !important;
          }
        }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
