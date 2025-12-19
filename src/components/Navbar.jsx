import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.5rem 2rem',
        background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
           initial="hidden"
           animate="visible"
           variants={variants}
           transition={{ duration: 0.5 }}
        >
          <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-mono)', letterSpacing: '-1px' }}>
            &lt;Prerak /&gt;
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}
              className="nav-link"
            >
              <span style={{ color: 'var(--accent-primary)' }}>#</span>{link.name}
            </a>
          ))}
          <div style={{ width: '1px', height: '20px', background: 'var(--border-color)', margin: '0 1rem' }}></div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Patel-Prerak" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/prerak-patel-60a908219/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
            <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu (Simple implementation for now) */}
      {isOpen && (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--bg-color)', borderBottom: '1px solid var(--accent-primary)', padding: '1rem' }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                         <span style={{ color: 'var(--accent-primary)' }}>#</span>{link.name}
                    </a>
                ))}
            </div>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
