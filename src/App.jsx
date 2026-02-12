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
      cursorX += (mouseX - cursorX) * 0.08;
      cursorY += (mouseY - cursorY) * 0.08;
      if (cursor) {
        cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', mouseMove);
    animate();

    // Scroll-triggered reveal animations
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      observer.disconnect();
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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1.5px solid rgba(124, 92, 252, 0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'width 0.3s, height 0.3s',
          display: 'none'
        }}
      />
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'none'
        }}
      />
      <style>{`
        @media (hover: hover) and (pointer: fine) and (min-width: 992px) {
          .App .cursor,
          .App > div[style*="width: 40px"],
          .App > div[style*="width: 8px"] {
            display: block !important;
          }
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

      {/* Global reveal styles */}
      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }
        .reveal-delay-6 { transition-delay: 0.6s; }
      `}</style>
    </div>
  );
}

export default App;
