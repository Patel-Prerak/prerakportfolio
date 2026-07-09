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
            color: '#00b8ff',
            desc: 'Driving technical innovation and scaling secure infrastructure.',
            emoji: '🚀'
        },
        {
            icon: <FaGraduationCap size={24} />,
            title: 'M.Tech AI & DS',
            subtitle: 'NFSU',
            color: '#a855f7',
            desc: 'Specializing in Cyber Security at National Forensic Sciences University.',
            emoji: '🎓'
        },
        {
            icon: <FaCode size={24} />,
            title: 'Full Stack',
            subtitle: 'Engineer',
            color: '#00ff9d',
            desc: 'MERN, TypeScript, Python — building robust solutions end to end.',
            emoji: '💻'
        },
        {
            icon: <FaShieldAlt size={24} />,
            title: 'Cyber Security',
            subtitle: 'Specialist',
            color: '#ff3e3e',
            desc: 'Penetration testing, threat analysis, and digital forensics.',
            emoji: '🔐'
        }
    ];

    // Terminal typing effect
    const [termLines, setTermLines] = useState([]);
    const terminalCommands = [
        { type: 'input', text: 'root@prerak:~# whoami' },
        { type: 'output', text: 'Prerak Patel — Full Stack Engineer & Cyber Security Specialist' },
        { type: 'input', text: 'root@prerak:~# cat config.json' },
        { type: 'output', text: '{ "title": "Co-Founder", "company": "DeployX", "status": "ACTIVE" }' },
        { type: 'input', text: 'root@prerak:~# nmap -sV portfolio_target' },
        { type: 'output', text: 'Starting Nmap ( https://nmap.org )' },
        { type: 'output', text: '[✓] Port 80/tcp  open  http    MERN Stack' },
        { type: 'output', text: '[✓] Port 443/tcp open  https   TypeScript & Python' },
        { type: 'input', text: 'root@prerak:~# ./deploy --secure' },
        { type: 'output', text: '[✓] Security protocols... armed.' },
        { type: 'output', text: '[✓] System ready.' }
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
                background: 'radial-gradient(circle, rgba(0, 255, 157, 0.04) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-200px',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 184, 255, 0.04) 0%, transparent 70%)',
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
                                background: 'radial-gradient(ellipse at center, rgba(0, 255, 157, 0.08), transparent 70%)',
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
                                            <span style={{ color: 'var(--accent-3)' }}>⚡</span>
                                            root@prerak:~
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
                                                        <span style={{ color: 'var(--accent-1)' }}>root@prerak:~#</span>{' '}
                                                        <span style={{ color: 'var(--accent-2)' }}>{line.text.replace('root@prerak:~# ', '').split(' ')[0]}</span>{' '}
                                                        <span style={{ color: 'var(--text-muted)' }}>{line.text.replace('root@prerak:~# ', '').split(' ').slice(1).join(' ')}</span>
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
                                                            <span style={{ textShadow: '0 0 10px rgba(0, 255, 157, 0.4)', color: 'var(--accent-1)' }}>{line.text}</span>
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
                                            <span style={{ color: 'var(--accent-1)' }}>root@prerak:~#</span>
                                            <div style={{
                                                width: '8px',
                                                height: '18px',
                                                background: 'var(--accent-1)',
                                                boxShadow: '0 0 8px rgba(0, 255, 157, 0.5)',
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
