import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.05 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const projects = [
        {
            title: "Crime Scene Object Detection",
            description: "An AI-powered system for identifying and detecting objects at crime scenes using computer vision and deep learning.",
            tech: ["Python", "AI/ML", "Computer Vision"],
            github: "https://github.com/Patel-Prerak/Crime-Scene-object-Identification-and-Detection",
            link: null,
            accent: '#ff6b9d',
            number: '01',
            emoji: '🔍'
        },
        {
            title: "AI + VR Crime Scene Platform",
            description: "Concept web showcasing how AI and VR could reconstruct crime scenes from photos, detect evidence, and present it in immersive 3D.",
            tech: ["React", "JavaScript", "3D/VR", "AI"],
            github: "https://github.com/Patel-Prerak/Concept-AI-VR-Based-Crime-Scene-Reconstruction-Platform",
            link: "https://vr-fawn-one.vercel.app",
            accent: '#7c5cfc',
            number: '02',
            emoji: '🥽'
        },
        {
            title: "Clinic InfoWeb",
            description: "A modern clinic information platform built with TypeScript, providing a clean UI for managing clinic details and patient-facing content.",
            tech: ["TypeScript", "React", "Vercel"],
            github: "https://github.com/Patel-Prerak/Clinic_infoweb",
            link: "https://clinic-info.vercel.app",
            accent: '#00d4ff',
            number: '03',
            emoji: '🏥'
        },
        {
            title: "Sahayak",
            description: "A comprehensive service-on-demand web app connecting users with local service providers. Features authentication, booking, and real-time updates.",
            tech: ["MERN Stack", "Redux", "JWT"],
            github: "https://github.com/Patel-Prerak/Sahayak",
            link: null,
            accent: '#ffd166',
            number: '04',
            emoji: '🤝'
        },
        {
            title: "E-Commerce & Fitness App",
            description: "A dual-domain platform featuring a robust e-commerce marketplace and a personalized fitness tracking mobile application.",
            tech: ["React Native", "Node.js", "Express"],
            github: null,
            link: "https://deployx.in/projects",
            accent: '#4ade80',
            number: '05',
            emoji: '🛒'
        },
        {
            title: "Email Security Analyzer",
            description: "Full-stack application that analyzes email headers to reveal travel paths and service providers, enhancing email security visibility.",
            tech: ["TypeScript", "Node.js", "Security"],
            github: "https://github.com/Patel-Prerak/Email-Service-Provider",
            link: "https://email-service-provider.vercel.app",
            accent: '#ff6b9d',
            number: '06',
            emoji: '🔒'
        },
        {
            title: "Blood Bank Platform",
            description: "A full-stack digital platform to streamline blood donation processes, donor management, inventory tracking, and distribution.",
            tech: ["PHP", "MySQL", "JavaScript"],
            github: "https://github.com/Patel-Prerak/blood-bank",
            link: null,
            accent: '#ef4444',
            number: '07',
            emoji: '🩸'
        },
        {
            title: "Network Security Lab",
            description: "Python implementations of cryptography algorithms including classical ciphers, modern encryption, hashing, and key exchange protocols.",
            tech: ["Python", "Cryptography", "Security"],
            github: "https://github.com/Patel-Prerak/network_security_lab",
            link: null,
            accent: '#a855f7',
            number: '08',
            emoji: '🔐'
        }
    ];

    const renderCard = (project, index, isClone = false) => (
        <div
            key={isClone ? `clone-${index}` : index}
            style={{
                minWidth: '380px',
                maxWidth: '380px',
                flexShrink: 0
            }}
            onMouseEnter={() => setHoveredProject(isClone ? `c${index}` : index)}
            onMouseLeave={() => setHoveredProject(null)}
        >
            <div
                className="glass-card project-card-item"
                style={{
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                {/* Animated top border */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: (hoveredProject === index || hoveredProject === `c${index}`) ? '3px' : '2px',
                    background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                    transition: 'all 0.4s',
                    opacity: (hoveredProject === index || hoveredProject === `c${index}`) ? 1 : 0.4
                }} />

                {/* Number watermark */}
                <div style={{
                    position: 'absolute',
                    top: '-20px', right: '10px',
                    fontSize: '7rem', fontWeight: 900,
                    color: `${project.accent}06`,
                    fontFamily: 'var(--font-sans)', lineHeight: 1,
                    pointerEvents: 'none'
                }}>
                    {project.number}
                </div>

                {/* Hover glow */}
                {(hoveredProject === index || hoveredProject === `c${index}`) && (
                    <div style={{
                        position: 'absolute',
                        bottom: '-60px', left: '50%',
                        transform: 'translateX(-50%)',
                        width: '200px', height: '120px',
                        background: `radial-gradient(ellipse, ${project.accent}15, transparent)`,
                        pointerEvents: 'none', filter: 'blur(20px)'
                    }} />
                )}

                {/* Top bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                        width: '52px', height: '52px', borderRadius: '16px',
                        background: `linear-gradient(135deg, ${project.accent}20, ${project.accent}08)`,
                        border: `1px solid ${project.accent}25`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.5rem'
                    }}>
                        {project.emoji}
                    </div>
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                style={{
                                    width: '38px', height: '38px', borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--text-secondary)', transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = project.accent; e.currentTarget.style.borderColor = `${project.accent}40`; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                            >
                                <FaGithub size={16} />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                style={{
                                    width: '38px', height: '38px', borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--text-secondary)', transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = project.accent; e.currentTarget.style.borderColor = `${project.accent}40`; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                            >
                                <FaExternalLinkAlt size={14} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 style={{
                    fontSize: '1.25rem', fontWeight: 700,
                    marginBottom: '0.85rem', color: 'var(--text-primary)',
                    transition: 'color 0.4s'
                }}>
                    {project.title}
                </h3>

                <p style={{
                    color: 'var(--text-secondary)', fontSize: '0.85rem',
                    lineHeight: 1.7, marginBottom: '1.75rem', flexGrow: 1
                }}>
                    {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tech.map((t, i) => (
                        <span key={i} style={{
                            padding: '0.35rem 0.9rem',
                            borderRadius: '100px',
                            background: `${project.accent}0D`,
                            border: `1px solid ${project.accent}20`,
                            fontSize: '0.73rem',
                            fontFamily: 'var(--font-mono)',
                            color: project.accent,
                            fontWeight: 500
                        }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section id="projects" ref={ref} style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background decorations */}
            <div style={{
                position: 'absolute',
                bottom: '-250px', right: '-250px',
                width: '700px', height: '700px',
                background: 'radial-gradient(circle, rgba(255, 107, 157, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <div className="section-label">Portfolio</div>
                    <h2 className="section-heading">
                        Featured <span className="gradient-text">projects</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        A selection of projects that showcase my skills in development and security.
                    </p>
                </motion.div>
            </div>

            {/* CSS-based infinite scroll — GPU accelerated, no jank */}
            <div
                className="projects-marquee-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                    overflow: 'hidden',
                    position: 'relative',
                    paddingBottom: '1rem'
                }}
            >
                {/* Fade edges */}
                <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
                    background: 'linear-gradient(90deg, var(--bg-primary), transparent)',
                    zIndex: 2, pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
                    background: 'linear-gradient(270deg, var(--bg-primary), transparent)',
                    zIndex: 2, pointerEvents: 'none'
                }} />

                <div
                    className={`projects-marquee-track ${isPaused ? 'paused' : ''}`}
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        width: 'max-content',
                        paddingLeft: '1.5rem'
                    }}
                >
                    {projects.map((p, i) => renderCard(p, i))}
                    {projects.map((p, i) => renderCard(p, i, true))}
                </div>
            </div>

            <style>{`
                .projects-marquee-track {
                    animation: projects-scroll 40s linear infinite;
                }
                .projects-marquee-track.paused {
                    animation-play-state: paused;
                }
                @keyframes projects-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .project-card-item:hover {
                    border-color: rgba(124,92,252,0.25) !important;
                    transform: translateY(-6px) !important;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,92,252,0.15) !important;
                }
                .project-card-item:hover h3 {
                    color: var(--accent-1) !important;
                }
                @media (max-width: 480px) {
                    .projects-marquee-track > div { min-width: 300px !important; }
                    .projects-marquee-track { animation-duration: 30s; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
