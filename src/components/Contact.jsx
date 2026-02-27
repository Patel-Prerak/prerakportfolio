import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactLinks = [
        {
            icon: <FaEnvelope size={24} />,
            label: 'Email',
            value: 'patelprerak435@gmail.com',
            href: 'mailto:patelprerak435@gmail.com',
            color: '#7c5cfc',
            hoverBg: 'rgba(124, 92, 252, 0.08)'
        },
        {
            icon: <FaGithub size={24} />,
            label: 'GitHub',
            value: 'Patel-Prerak',
            href: 'https://github.com/Patel-Prerak',
            color: '#00d4ff',
            hoverBg: 'rgba(0, 212, 255, 0.08)'
        },
        {
            icon: <FaLinkedin size={24} />,
            label: 'LinkedIn',
            value: 'Prerak Patel',
            href: 'https://www.linkedin.com/in/prerak-patel-60a908219/',
            color: '#ff6b9d',
            hoverBg: 'rgba(255, 107, 157, 0.08)'
        }
    ];

    return (
        <section id="contact" ref={ref} style={{
            padding: '8rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Multiple decorative gradient orbs */}
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(124, 92, 252, 0.06) 0%, transparent 60%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '-100px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-100px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(255, 107, 157, 0.04) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.7 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                        fontWeight: 900,
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}
                >
                    Let's build something{' '}
                    <span className="gradient-text" style={{ position: 'relative' }}>
                        amazing
                        <motion.span
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '100%' } : {}}
                            transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                position: 'absolute',
                                bottom: '2px',
                                left: 0,
                                height: '3px',
                                background: 'linear-gradient(90deg, var(--accent-3), var(--accent-1))',
                                borderRadius: '3px',
                                filter: 'blur(1px)',
                                opacity: 0.5
                            }}
                        />
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        marginBottom: '3rem',
                        lineHeight: 1.8,
                        maxWidth: '550px',
                        margin: '0 auto 3.5rem'
                    }}
                >
                    I'm always open to new opportunities, collaborations, and interesting conversations. Whether you have a question or just want to connect — don't hesitate!
                </motion.p>

                {/* Contact Cards - Enhanced */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '3.5rem'
                }}>
                    {contactLinks.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target={item.label !== 'Email' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                            whileHover={{ y: -8, boxShadow: `0 20px 50px ${item.color}15` }}
                            className="glass-card"
                            style={{
                                padding: '2rem 1.5rem',
                                textDecoration: 'none',
                                textAlign: 'center',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.85rem',
                                overflow: 'hidden',
                                position: 'relative'
                            }}
                        >
                            {/* Top accent line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '2px',
                                background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                                opacity: 0.6
                            }} />

                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '18px',
                                    background: `linear-gradient(135deg, ${item.color}18, ${item.color}08)`,
                                    border: `1px solid ${item.color}20`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: item.color,
                                    position: 'relative'
                                }}
                            >
                                {/* Icon glow */}
                                <div style={{
                                    position: 'absolute',
                                    inset: '-5px',
                                    background: `radial-gradient(circle, ${item.color}15, transparent)`,
                                    borderRadius: 'inherit',
                                    filter: 'blur(6px)',
                                    pointerEvents: 'none'
                                }} />
                                <span style={{ position: 'relative', zIndex: 1 }}>{item.icon}</span>
                            </motion.div>
                            <div style={{
                                fontSize: '0.75rem',
                                color: 'var(--text-muted)',
                                fontFamily: 'var(--font-mono)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: 600
                            }}>
                                {item.label}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-primary)',
                                fontWeight: 500
                            }}>
                                {item.value}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Big CTA - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    style={{ position: 'relative', display: 'inline-block' }}
                >
                    {/* CTA Button glow */}
                    <div style={{
                        position: 'absolute',
                        inset: '-10px',
                        background: 'linear-gradient(135deg, rgba(124,92,252,0.15), rgba(0,212,255,0.1), rgba(255,107,157,0.15))',
                        filter: 'blur(25px)',
                        borderRadius: '40px',
                        pointerEvents: 'none',
                        opacity: 0.6
                    }} />
                    <a href="mailto:patelprerak435@gmail.com" className="btn-primary" style={{
                        fontSize: '1.08rem',
                        padding: '1.1rem 2.8rem',
                        position: 'relative'
                    }}>
                        <FaPaperPlane size={15} /> Say Hello <FaArrowRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
