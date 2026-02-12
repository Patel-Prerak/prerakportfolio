import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const [displayText, setDisplayText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'Full Stack Developer',
        'Cybersecurity Specialist',
        'Co-Founder at DeployX',
        'M.Tech @ NFSU'
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

    const particlesOptions = {
        background: { opacity: 0 },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                resize: true,
            },
            modes: {
                grab: { distance: 140, links: { opacity: 0.3 } },
            },
        },
        particles: {
            color: { value: ["#7c5cfc", "#00d4ff", "#ff6b9d"] },
            links: {
                color: "#7c5cfc",
                distance: 150,
                enable: true,
                opacity: 0.06,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
            },
            number: { density: { enable: true, area: 1200 }, value: 40 },
            opacity: { value: { min: 0.1, max: 0.4 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
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

            {/* Grid pattern overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(124, 92, 252, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(124, 92, 252, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                zIndex: 0,
                maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
            }} />

            {/* Radial glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(124, 92, 252, 0.08) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <motion.div
                className="container"
                style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px', width: '100%' }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Status Badge */}
                <motion.div
                    variants={itemVariants}
                    style={{ marginBottom: '2rem' }}
                >
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '100px',
                        background: 'rgba(124, 92, 252, 0.1)',
                        border: '1px solid rgba(124, 92, 252, 0.2)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: 'var(--accent-1)',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#4ade80',
                            boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)',
                            animation: 'pulse-dot 2s ease-in-out infinite'
                        }} />
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        marginBottom: '1rem',
                        letterSpacing: '-3px'
                    }}
                >
                    Hi, I'm{' '}
                    <span className="gradient-text">Prerak</span>
                    <br />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.6em', fontWeight: 600, letterSpacing: '-1px' }}>
                        I build things for the web & secure them.
                    </span>
                </motion.h1>

                {/* Typing animation */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        fontSize: '1.3rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        minHeight: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
                    <span style={{ color: 'var(--accent-2)' }}>{displayText}</span>
                    <span style={{
                        width: '2px',
                        height: '1.4em',
                        background: 'var(--accent-2)',
                        animation: 'blink-caret 0.75s step-end infinite'
                    }} />
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

                {/* Stats Row */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        marginTop: '4rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {[
                        { value: '6+', label: 'Projects' },
                        { value: '2+', label: 'Years Exp.' },
                        { value: 'NFSU', label: 'M.Tech' },
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: 1
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                fontFamily: 'var(--font-mono)',
                                marginTop: '0.3rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaChevronDown size={14} color="var(--text-muted)" />
                </motion.div>
            </motion.div>

            <style>{`
                @keyframes blink-caret {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.3); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
