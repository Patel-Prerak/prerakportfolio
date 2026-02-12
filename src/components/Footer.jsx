import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            padding: '3rem 0',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            position: 'relative'
        }}>
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
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        marginBottom: '0.3rem'
                    }}>
                        <span className="gradient-text">Prerak Patel</span>
                    </div>
                    <p style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                    }}>
                        Designed & Built with <FaHeart size={10} color="#ff6b9d" /> in 2026
                    </p>
                </div>

                {/* Center - back to top */}
                <div style={{ textAlign: 'center' }}>
                    <a
                        href="#home"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '100px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            color: 'var(--text-secondary)',
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(124,92,252,0.3)'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                    >
                        ↑ Back to top
                    </a>
                </div>

                {/* Right - Social */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href="https://github.com/Patel-Prerak" target="_blank" rel="noopener noreferrer"
                        style={{
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '10px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(124,92,252,0.15)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
                            borderRadius: '10px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.15)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <FaLinkedin size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
