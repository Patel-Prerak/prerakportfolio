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

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const reversed = [...sections].reverse();
      for (const sec of reversed) {
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: '1.2rem',
          left: '50%',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          padding: '0.35rem',
          background: 'rgba(10, 11, 18, 0.65)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderRadius: '100px',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)'
            : '0 4px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.03)',
          transition: 'box-shadow 0.4s ease'
        }}
        className="desktop-nav-bar"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            style={{
              padding: '0.5rem 1.1rem',
              borderRadius: '100px',
              fontSize: '0.82rem',
              fontWeight: 500,
              color: activeSection === link.href.slice(1) ? '#fff' : 'var(--text-secondary)',
              background: activeSection === link.href.slice(1) ? 'rgba(124, 92, 252, 0.2)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              letterSpacing: '0.2px'
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

        {/* Divider */}
        <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.08)', margin: '0 0.25rem', flexShrink: 0 }} />

        {/* Social icons */}
        <a href="https://github.com/Patel-Prerak" target="_blank" rel="noopener noreferrer"
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            color: 'var(--text-secondary)',
            transition: 'all 0.3s ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(124, 92, 252, 0.15)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
        >
          <FaGithub size={15} />
        </a>
        <a href="https://www.linkedin.com/in/prerak-patel-60a908219/" target="_blank" rel="noopener noreferrer"
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            color: 'var(--text-secondary)',
            transition: 'all 0.3s ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
        >
          <FaLinkedin size={15} />
        </a>
      </motion.nav>

      {/* Mobile Toggle — positioned separately */}
      <button
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          position: 'fixed',
          top: '1.2rem',
          right: '1.2rem',
          zIndex: 1001,
          background: 'rgba(10, 11, 18, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#fff',
          cursor: 'pointer',
          width: '44px',
          height: '44px',
          borderRadius: '14px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
      </button>

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
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setTimeout(() => {
                    const target = document.getElementById(link.href.slice(1));
                    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 300);
                }}
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
          .desktop-nav-bar { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
