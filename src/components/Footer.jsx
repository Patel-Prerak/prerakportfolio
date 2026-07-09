import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            padding: '3rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated gradient top border */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.4), rgba(0, 184, 255, 0.3), rgba(168, 85, 247, 0.4), transparent)',
            }} />

            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem'
            }}>
                {/* Left - Brand */}
                <div>
                    <div style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        marginBottom: '0.4rem'
                    }}>
                        <span className="gradient-text">Prerak Patel</span>
                    </div>
                    <p style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                    }}>
                        Designed & Built with{' '}
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ display: 'inline-flex' }}
                        >
                            <FaHeart size={10} color="#ff3e3e" />
                        </motion.span>
                        {' '}in 2026
                    </p>
                </div>

                {/* Center - back to top */}
                <div style={{ textAlign: 'center' }}>
                    <motion.a
                        href="#home"
                        whileHover={{ y: -4, boxShadow: '0 8px 25px rgba(0, 255, 157, 0.2)' }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.6rem 1.4rem',
                            borderRadius: '100px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            color: 'var(--text-secondary)',
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono)',
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(0,255,157,0.3)';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.background = 'rgba(0,255,157,0.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                        }}
                    >
                        <FaArrowUp size={12} /> Back to top
                    </motion.a>
                </div>

                {/* Right - Social */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {[
                        { icon: <FaGithub size={16} />, href: 'https://github.com/Patel-Prerak', color: '#00ff9d' },
                        { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/prerak-patel-60a908219/', color: '#00b8ff' }
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.1 }}
                            style={{
                                width: '38px',
                                height: '38px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                color: 'var(--text-secondary)',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = `${social.color}18`;
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.borderColor = `${social.color}35`;
                                e.currentTarget.style.boxShadow = `0 8px 25px ${social.color}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
