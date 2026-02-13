import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '0.8rem 2rem' : '1.2rem 2rem',
          background: scrolled ? 'rgba(8, 9, 10, 0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.5px',
              color: 'var(--text-primary)',
              textDecoration: 'none'
            }}
          >
            <img src="/logo-v2.svg" alt="PP" style={{ height: '32px', width: 'auto' }} />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '100px',
              padding: '0.3rem',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: activeSection === link.href.slice(1) ? '#fff' : 'var(--text-secondary)',
                    background: activeSection === link.href.slice(1) ? 'rgba(124, 92, 252, 0.2)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== link.href.slice(1)) {
                      e.target.style.color = '#fff';
                      e.target.style.background = 'rgba(255,255,255,0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== link.href.slice(1)) {
                      e.target.style.color = 'var(--text-secondary)';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.08)', margin: '0 0.75rem' }} />

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a href="https://github.com/Patel-Prerak" target="_blank" rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(124, 92, 252, 0.15)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(124, 92, 252, 0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/prerak-patel-60a908219/" target="_blank" rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#fff',
              cursor: 'pointer',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(8, 9, 10, 0.98)',
              backdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: activeSection === link.href.slice(1) ? 'var(--accent-1)' : 'var(--text-primary)',
                  textDecoration: 'none'
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
            >
              <a href="https://github.com/Patel-Prerak" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/prerak-patel-60a908219/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><FaLinkedin size={24} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
