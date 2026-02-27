import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

    const highlights = [
        {
            icon: <FaBriefcase size={24} />,
            title: 'Co-Founder & CMO',
            subtitle: 'DeployX',
            color: '#7c5cfc',
            desc: 'Driving technical innovation and marketing strategy at a growing tech startup.',
            emoji: '🚀'
        },
        {
            icon: <FaGraduationCap size={24} />,
            title: 'M.Tech AI & DS',
            subtitle: 'NFSU (MHA)',
            color: '#00d4ff',
            desc: 'Cyber Security specialization at National Forensic Sciences University.',
            emoji: '🎓'
        },
        {
            icon: <FaCode size={24} />,
            title: 'Full Stack',
            subtitle: 'Developer',
            color: '#ff6b9d',
            desc: 'MERN, TypeScript, Python — building scalable solutions end to end.',
            emoji: '💻'
        },
        {
            icon: <FaShieldAlt size={24} />,
            title: 'Network Security',
            subtitle: 'Specialist',
            color: '#ffd166',
            desc: 'Penetration testing, cryptography, and digital forensics expert.',
            emoji: '🔐'
        }
    ];

    // Terminal typing effect
    const [termLines, setTermLines] = useState([]);
    const terminalCommands = [
        { type: 'input', text: '$ whoami' },
        { type: 'output', text: 'Prerak Patel — Full Stack Developer & Security Specialist' },
        { type: 'input', text: '$ cat role.json' },
        { type: 'output', text: '{ "title": "Co-Founder & CMO", "company": "DeployX" }' },
        { type: 'input', text: '$ cat skills.json' },
        { type: 'output', text: '["MERN", "TypeScript", "Python", "Cyber Security"]' },
        { type: 'input', text: '$ ./scan --target portfolio' },
        { type: 'output', text: '[✓] Full Stack Development... secured' },
        { type: 'output', text: '[✓] Cyber Security... armed' },
        { type: 'output', text: '[✓] Ready to deploy.' }
    ];

    useEffect(() => {
        if (!isInView) return;
        let idx = 0;
        const interval = setInterval(() => {
            if (idx < terminalCommands.length) {
                setTermLines(prev => [...prev, terminalCommands[idx]]);
                idx++;
            } else {
                clearInterval(interval);
            }
        }, 500);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section id="about" ref={ref} style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative gradient orbs */}
            <div style={{
                position: 'absolute',
                top: '5%',
                right: '-250px',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-200px',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(124, 92, 252, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <div className="section-label">About</div>
                    <h2 className="section-heading">
                        A bit about <span className="gradient-text">myself</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '620px',
                        fontSize: '1.05rem',
                        lineHeight: 1.8
                    }}>
                        I operate at the intersection of cybersecurity and full-stack engineering, building secure & scalable systems that power modern businesses.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
                    {/* Left: Highlight Cards with animated borders */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="highlight-grid">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                style={{
                                    position: 'relative',
                                    borderRadius: 'var(--radius-lg)',
                                    cursor: 'default'
                                }}
                            >
                                <div
                                    className="glass-card"
                                    style={{
                                        padding: '1.5rem',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Top accent line */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: `linear-gradient(90deg, ${item.color}, transparent)`,
                                        opacity: 0.7
                                    }} />

                                    {/* Corner glow */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-30px',
                                        right: '-30px',
                                        width: '100px',
                                        height: '100px',
                                        background: `radial-gradient(circle, ${item.color}18, transparent)`,
                                        borderRadius: '50%',
                                        pointerEvents: 'none'
                                    }} />

                                    {/* Icon */}
                                    <div style={{
                                        width: '46px',
                                        height: '46px',
                                        borderRadius: '14px',
                                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
                                        border: `1px solid ${item.color}25`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: item.color,
                                        marginBottom: '1rem',
                                        fontSize: '1.2rem',
                                        position: 'relative'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        marginBottom: '0.2rem'
                                    }}>{item.title}</h4>
                                    <div style={{
                                        fontSize: '0.78rem',
                                        color: item.color,
                                        fontFamily: 'var(--font-mono)',
                                        marginBottom: '0.8rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem'
                                    }}>
                                        {item.subtitle}
                                    </div>
                                    <p style={{
                                        fontSize: '0.83rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6
                                    }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Enhanced Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        style={{ position: 'relative' }}
                    >
                        <motion.div style={{ y }}>
                            {/* Terminal glow behind */}
                            <div style={{
                                position: 'absolute',
                                inset: '-20px',
                                background: 'radial-gradient(ellipse at center, rgba(124, 92, 252, 0.08), transparent 70%)',
                                pointerEvents: 'none',
                                zIndex: -1
                            }} />

                            <div className="glass-card" style={{ overflow: 'hidden' }}>
                                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                                    {/* Window Chrome - Enhanced */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '14px 18px',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                                    }}>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <div style={{
                                                width: '12px', height: '12px', borderRadius: '50%',
                                                background: '#ff5f57',
                                                boxShadow: '0 0 6px rgba(255, 95, 87, 0.4)'
                                            }} />
                                            <div style={{
                                                width: '12px', height: '12px', borderRadius: '50%',
                                                background: '#febc2e',
                                                boxShadow: '0 0 6px rgba(254, 188, 46, 0.4)'
                                            }} />
                                            <div style={{
                                                width: '12px', height: '12px', borderRadius: '50%',
                                                background: '#28c840',
                                                boxShadow: '0 0 6px rgba(40, 200, 64, 0.4)'
                                            }} />
                                        </div>
                                        <div style={{
                                            flex: 1,
                                            textAlign: 'center',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.72rem',
                                            color: 'var(--text-muted)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.4rem'
                                        }}>
                                            <span style={{ color: 'var(--accent-1)', opacity: 0.6 }}>⌘</span>
                                            prerak@nfsu ~ /portfolio
                                        </div>
                                    </div>

                                    {/* Terminal Body - Enhanced with syntax colors */}
                                    <div style={{
                                        padding: '1.5rem',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.82rem',
                                        lineHeight: 2,
                                        minHeight: '340px',
                                        background: 'linear-gradient(180deg, rgba(6,7,10, 0.6), rgba(6,7,10, 0.8))'
                                    }}>
                                        {termLines.map((line, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                {line.type === 'input' ? (
                                                    <div style={{ color: 'var(--text-secondary)' }}>
                                                        <span style={{ color: '#4ade80' }}>❯</span>{' '}
                                                        <span style={{ color: 'var(--accent-2)' }}>{line.text.replace('$ ', '').split(' ')[0]}</span>{' '}
                                                        <span style={{ color: 'var(--text-muted)' }}>{line.text.replace('$ ', '').split(' ').slice(1).join(' ')}</span>
                                                    </div>
                                                ) : (
                                                    <div style={{
                                                        color: line.text.startsWith('[✓]') ? '#4ade80'
                                                            : line.text.startsWith('{') ? 'var(--accent-4)'
                                                                : 'var(--text-primary)',
                                                        paddingLeft: '1.2rem',
                                                        opacity: line.text.startsWith('[✓]') ? 1 : 0.85
                                                    }}>
                                                        {line.text.startsWith('[✓]') && (
                                                            <span style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.4)' }}>{line.text}</span>
                                                        )}
                                                        {!line.text.startsWith('[✓]') && line.text}
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginTop: '0.5rem'
                                        }}>
                                            <span style={{ color: '#4ade80' }}>❯</span>
                                            <div style={{
                                                width: '8px',
                                                height: '18px',
                                                background: 'var(--accent-1)',
                                                boxShadow: '0 0 8px rgba(124, 92, 252, 0.5)',
                                                animation: 'blink-caret 0.75s step-end infinite',
                                                borderRadius: '1px'
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @keyframes blink-caret {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                }
                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 480px) {
                    .highlight-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
