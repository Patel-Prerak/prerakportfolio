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

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const highlights = [
        {
            icon: <FaBriefcase size={22} />,
            title: 'Co-Founder & CMO',
            subtitle: 'DeployX',
            color: '#7c5cfc',
            desc: 'Driving technical innovation and marketing strategy at a growing tech startup.'
        },
        {
            icon: <FaGraduationCap size={22} />,
            title: 'M.Tech AI & DS',
            subtitle: 'NFSU (MHA)',
            color: '#00d4ff',
            desc: 'Cyber Security specialization at National Forensic Sciences University.'
        },
        {
            icon: <FaCode size={22} />,
            title: 'Full Stack',
            subtitle: 'Developer',
            color: '#ff6b9d',
            desc: 'MERN, TypeScript, Python — building scalable solutions end to end.'
        },
        {
            icon: <FaShieldAlt size={22} />,
            title: 'Network Security',
            subtitle: 'Specialist',
            color: '#ffd166',
            desc: 'Penetration testing, cryptography, and digital forensics expert.'
        }
    ];

    // Terminal typing effect
    const [termLines, setTermLines] = useState([]);
    const terminalCommands = [
        { type: 'input', text: '$ whoami' },
        { type: 'output', text: 'Prerak Patel' },
        { type: 'input', text: '$ cat role.json' },
        { type: 'output', text: '{ "title": "Co-Founder & CMO", "company": "DeployX" }' },
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
        }, 400);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section id="about" ref={ref} style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative side gradient */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-200px',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <div className="section-label">About</div>
                    <h2 className="section-heading">
                        A bit about <span className="gradient-text">myself</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.05rem' }}>
                        I operate at the intersection of cybersecurity and full-stack engineering, building secure & scalable systems that power modern businesses.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
                    {/* Left: Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="highlight-grid">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                className="glass-card"
                                style={{
                                    padding: '1.5rem',
                                    cursor: 'default',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                {/* Accent corner glow */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    width: '80px',
                                    height: '80px',
                                    background: `radial-gradient(circle, ${item.color}20, transparent)`,
                                    borderRadius: '50%'
                                }} />

                                <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '12px',
                                    background: `${item.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: item.color,
                                    marginBottom: '1rem'
                                }}>
                                    {item.icon}
                                </div>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.15rem' }}>{item.title}</h4>
                                <div style={{ fontSize: '0.8rem', color: item.color, fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>{item.subtitle}</div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{ position: 'relative' }}
                    >
                        <motion.div style={{ y }} className="glass-card" >
                            <div style={{
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden'
                            }}>
                                {/* Window Chrome */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '14px 18px',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                                }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                                    </div>
                                    <div style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.75rem',
                                        color: 'var(--text-muted)'
                                    }}>
                                        prerak@nfsu ~ /portfolio
                                    </div>
                                </div>

                                {/* Terminal Body */}
                                <div style={{
                                    padding: '1.5rem',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.8,
                                    minHeight: '320px',
                                    background: 'rgba(8,9,10, 0.5)'
                                }}>
                                    {termLines.map((line, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {line.type === 'input' ? (
                                                <div style={{ color: 'var(--text-secondary)' }}>
                                                    <span style={{ color: 'var(--accent-2)' }}>❯</span> {line.text.replace('$ ', '')}
                                                </div>
                                            ) : (
                                                <div style={{
                                                    color: line.text.startsWith('[✓]') ? '#4ade80' : 'var(--text-primary)',
                                                    paddingLeft: '1rem'
                                                }}>
                                                    {line.text}
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
                                        <span style={{ color: 'var(--accent-2)' }}>❯</span>
                                        <div style={{
                                            width: '8px',
                                            height: '18px',
                                            background: 'var(--accent-1)',
                                            animation: 'blink-caret 0.75s step-end infinite'
                                        }} />
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
