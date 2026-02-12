import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactLinks = [
        {
            icon: <FaEnvelope size={22} />,
            label: 'Email',
            value: 'patelprerak435@gmail.com',
            href: 'mailto:patelprerak435@gmail.com',
            color: '#7c5cfc'
        },
        {
            icon: <FaGithub size={22} />,
            label: 'GitHub',
            value: 'Patel-Prerak',
            href: 'https://github.com/Patel-Prerak',
            color: '#00d4ff'
        },
        {
            icon: <FaLinkedin size={22} />,
            label: 'LinkedIn',
            value: 'Prerak Patel',
            href: 'https://www.linkedin.com/in/prerak-patel-60a908219/',
            color: '#ff6b9d'
        }
    ];

    return (
        <section id="contact" ref={ref} style={{
            padding: '8rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative gradient orbs */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(124, 92, 252, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}
                >
                    Let's build something{' '}
                    <span className="gradient-text">amazing</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        marginBottom: '3rem',
                        lineHeight: 1.7,
                        maxWidth: '550px',
                        margin: '0 auto 3rem'
                    }}
                >
                    I'm always open to new opportunities, collaborations, and interesting conversations. Whether you have a question or just want to connect — don't hesitate!
                </motion.p>

                {/* Contact Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '3rem'
                }}>
                    {contactLinks.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target={item.label !== 'Email' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="glass-card"
                            style={{
                                padding: '1.5rem',
                                textDecoration: 'none',
                                textAlign: 'center',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '14px',
                                background: `${item.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: item.color
                            }}>
                                {item.icon}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {item.label}
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                {item.value}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Big CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a href="mailto:patelprerak435@gmail.com" className="btn-primary" style={{
                        fontSize: '1.05rem',
                        padding: '1rem 2.5rem'
                    }}>
                        Say Hello <FaArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
