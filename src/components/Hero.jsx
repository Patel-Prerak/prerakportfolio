import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

const FloatingCodeSnippet = ({ code, style, delay = 0 }) => (
    <motion.div
        className="hero-code-snippet"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 + delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
            position: 'absolute',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'rgba(0, 255, 157, 0.35)',
            whiteSpace: 'pre',
            pointerEvents: 'none',
            userSelect: 'none',
            background: 'rgba(0, 255, 157, 0.02)',
            border: '1px solid rgba(0, 255, 157, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            backdropFilter: 'blur(4px)',
            ...style
        }}
    >
        {code}
    </motion.div>
);

const Hero = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const [displayText, setDisplayText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [count, setCount] = useState(0);

    const roles = [
        'Full Stack Engineer',
        'Cyber Security Specialist',
        'Co-Founder @ DeployX',
        'M.Tech AI & DS @ NFSU'
    ];

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2500);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    // Animated counter
    useEffect(() => {
        const target = 8;
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= target) { clearInterval(interval); return target; }
                return prev + 1;
            });
        }, 200);
        return () => clearInterval(interval);
    }, []);

    const particlesOptions = {
        background: { opacity: 0 },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                resize: true,
            },
            modes: {
                grab: { distance: 160, links: { opacity: 0.4 } },
            },
        },
        particles: {
            color: { value: ["#00ff9d", "#00b8ff", "#ff3e3e", "#a855f7"] },
            links: {
                color: "#00ff9d",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
            },
            number: { density: { enable: true, area: 1200 }, value: 70 },
            opacity: { value: { min: 0.2, max: 0.6 } },
            shape: { type: "square" },
            size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, filter: 'blur(12px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                style={{ position: 'absolute', inset: 0, zIndex: 0 }}
            />

            {/* Animated Grid Pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(0, 255, 157, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 157, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                zIndex: 0,
                maskImage: 'radial-gradient(ellipse 80% 60% at center, black 20%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at center, black 20%, transparent 70%)'
            }} />

            {/* Central Radial Glow - Bigger and more vibrant */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.08, 0.12, 0.08]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '1000px',
                    height: '1000px',
                    background: 'radial-gradient(circle, rgba(0, 255, 157, 0.08) 0%, rgba(0, 184, 255, 0.05) 30%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            {/* Floating code snippets - ambient decoration */}
            <FloatingCodeSnippet
                code={`import { Security } from '@core';\n\nconst firewall = new Security.WAF();\nfirewall.blockThreats({ level: 'HIGH' });\nconsole.log("System Secured.");`}
                style={{ top: '15%', left: '5%' }}
                delay={0}
            />
            <FloatingCodeSnippet
                code={`async function deployx_init() {\n  await infrastructure.scale();\n  return { status: 200, msg: "🚀" };\n}`}
                style={{ bottom: '15%', right: '5%' }}
                delay={0.3}
            />
            <FloatingCodeSnippet
                code={`// Penetration Testing Module\nconst target = "network_perimeter";\nif (vulnScan(target).found) {\n  patchVulnerabilities(target);\n}`}
                style={{ top: '22%', right: '8%' }}
                delay={0.6}
            />

            <motion.div
                className="container"
                style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '950px', width: '100%' }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >


                {/* Name with enhanced typography */}
                <motion.h1
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(3rem, 7.5vw, 6rem)',
                        fontWeight: 900,
                        lineHeight: 1.02,
                        marginBottom: '1.25rem',
                        letterSpacing: '-3px'
                    }}
                >
                    <span style={{ color: 'var(--text-primary)', position: 'relative' }}>
                        Hi, I'm{' '}
                    </span>
                    <span className="gradient-text" style={{ position: 'relative' }}>
                        Prerak
                        {/* Underline glow effect */}
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                position: 'absolute',
                                bottom: '2px',
                                left: 0,
                                height: '4px',
                                background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))',
                                borderRadius: '2px',
                                filter: 'blur(2px)',
                                opacity: 0.8
                            }}
                        />
                    </span>
                    <br />
                    <motion.span
                        variants={itemVariants}
                        style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.42em',
                            fontWeight: 500,
                            letterSpacing: '-0.5px',
                            lineHeight: 1.6,
                            display: 'block',
                            marginTop: '0.5rem'
                        }}
                    >
                        I build things for the web & secure them.
                    </motion.span>
                </motion.h1>

                {/* Typing animation with enhanced styling */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        fontSize: '1.2rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        minHeight: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span style={{
                        color: 'var(--accent-1)',
                        opacity: 0.6,
                        fontSize: '1rem'
                    }}>{'<'}</span>
                    <span style={{
                        color: 'var(--accent-2)',
                        textShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                    }}>{displayText}</span>
                    <span style={{
                        width: '8px',
                        height: '1.1em',
                        background: 'var(--accent-1)',
                        boxShadow: '0 0 10px rgba(0, 255, 157, 0.6)',
                        animation: 'blink-caret 0.75s step-end infinite'
                    }} />
                    <span style={{
                        color: 'var(--accent-1)',
                        opacity: 0.6,
                        fontSize: '1rem'
                    }}>{'/>'}</span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <a href="#projects" className="btn-primary">
                        Explore My Work <FaArrowRight size={14} />
                    </a>
                    <a href="https://deployx.in" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        Visit DeployX
                    </a>
                </motion.div>

                {/* Stats Row with glow cards */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginTop: '4.5rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {[
                        { value: `${count}+`, label: 'Projects', color: '#00ff9d' },
                        { value: '2+', label: 'Years Exp.', color: '#00b8ff' },
                        { value: 'NFSU', label: 'M.Tech', color: '#a855f7' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.08, y: -5 }}
                            style={{
                                textAlign: 'center',
                                padding: '1.25rem 2rem',
                                borderRadius: 'var(--radius-lg)',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden',
                                minWidth: '120px'
                            }}
                        >
                            {/* Subtle top glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '80px',
                                height: '60px',
                                background: `radial-gradient(ellipse, ${stat.color}20, transparent)`,
                                pointerEvents: 'none'
                            }} />
                            <div style={{
                                fontSize: '2.2rem',
                                fontWeight: 800,
                                background: `linear-gradient(135deg, ${stat.color}, ${stat.color}aa)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: 1
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.75rem',
                                color: 'var(--text-muted)',
                                fontFamily: 'var(--font-mono)',
                                marginTop: '0.4rem',
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase'
                            }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Enhanced scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.6rem'
                }}
            >
                <span style={{
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    letterSpacing: '3px',
                    textTransform: 'uppercase'
                }}>
                    Scroll
                </span>
                <motion.div
                    style={{
                        width: '20px',
                        height: '34px',
                        borderRadius: '12px',
                        border: '1.5px solid rgba(124, 92, 252, 0.3)',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '6px'
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '3px',
                            height: '8px',
                            borderRadius: '3px',
                            background: 'var(--accent-1)',
                            boxShadow: '0 0 8px rgba(0, 255, 157, 0.8)'
                        }}
                    />
                </motion.div>
            </motion.div>

            <style>{`
                @keyframes blink-caret {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.4); }
                }
                @media (max-width: 768px) {
                    .hero-code-snippet { display: none !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
