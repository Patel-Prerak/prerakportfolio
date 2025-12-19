import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <a href="https://github.com/Patel-Prerak" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/prerak-patel-60a908219/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <FaLinkedin size={20} />
                    </a>
                </div>

                <p style={{ fontFamily: 'var(--font-mono)' }}>
                    Designed & Built by Prerak Patel
                </p>
            </div>
            <style>{`
        .social-icon:hover {
            color: var(--accent-primary) !important;
            transform: translateY(-3px);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
