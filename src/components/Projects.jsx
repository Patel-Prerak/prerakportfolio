import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Projects = () => {
    const ref = useRef(null);
    const scrollRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "AI Resume Builder",
            description: "An AI-powered application leveraging OpenAI GPT-4 to create ATS-optimized resumes tailored to specific job descriptions. Features real-time generation and customization.",
            tech: ["TypeScript", "OpenAI API", "React"],
            github: "https://github.com/Patel-Prerak/RESUME-BUILDER",
            link: null,
            accent: '#7c5cfc',
            number: '01'
        },
        {
            title: "Sahayak",
            description: "A comprehensive service-on-demand web application connecting users with local service providers. Features user authentication, booking management, and real-time updates.",
            tech: ["MERN Stack", "Redux", "JWT"],
            github: "https://github.com/Patel-Prerak/Sahayak",
            link: null,
            accent: '#00d4ff',
            number: '02'
        },
        {
            title: "E-Commerce & Fitness App",
            description: "A dual-domain platform featuring a robust e-commerce marketplace and a personalized fitness tracking mobile application, developed under DeployX.",
            tech: ["React Native", "Node.js", "Express"],
            github: null,
            link: "https://deployx.in/projects",
            accent: '#ff6b9d',
            number: '03'
        },
        {
            title: "Blood Bank Platform",
            description: "A digital platform to streamline blood donation processes, inventory management, and donor connection for a leading blood bank.",
            tech: ["Web Dev", "Database Mgmt"],
            github: null,
            link: "https://deployx.in/projects",
            accent: '#ffd166',
            number: '04'
        },
        {
            title: "Email Security Analyzer",
            description: "Full-stack application that analyzes email headers to reveal travel paths and service providers, enhancing email security visibility.",
            tech: ["TypeScript", "Node.js", "Security"],
            github: "https://github.com/Patel-Prerak/Email-Service-Provider",
            link: null,
            accent: '#4ade80',
            number: '05'
        },
        {
            title: "Network Security Lab",
            description: "A collection of python implementations for various cryptography algorithms including classical ciphers, hashing, and key exchange protocols.",
            tech: ["Python", "Cryptography", "Security"],
            github: "https://github.com/Patel-Prerak/network_security_lab",
            link: null,
            accent: '#f472b6',
            number: '06'
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const amount = 420;
            scrollRef.current.scrollBy({
                left: direction === 'right' ? amount : -amount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="projects" ref={ref} style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background deco */}
            <div style={{
                position: 'absolute',
                bottom: '-200px',
                right: '-200px',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255, 107, 157, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}
                >
                    <div>
                        <div className="section-label">Portfolio</div>
                        <h2 className="section-heading">
                            Featured <span className="gradient-text">projects</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', fontSize: '1.05rem' }}>
                            A selection of projects that showcase my skills in development and security.
                        </p>
                    </div>

                    {/* Scroll Arrows */}
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button
                            onClick={() => scroll('left')}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(124,92,252,0.15)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(124,92,252,0.3)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                        >
                            <FaArrowLeft size={16} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(124,92,252,0.15)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(124,92,252,0.3)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                        >
                            <FaArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Horizontal Scrolling Project Cards */}
            <div
                ref={scrollRef}
                style={{
                    display: 'flex',
                    gap: '1.5rem',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2 + 2rem))',
                    paddingRight: '2rem',
                    paddingBottom: '1rem',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
                className="projects-scroll"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        style={{
                            minWidth: '380px',
                            maxWidth: '400px',
                            scrollSnapAlign: 'start',
                            flexShrink: 0
                        }}
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
                                cursor: 'default'
                            }}
                        >
                            {/* Project number background */}
                            <div style={{
                                position: 'absolute',
                                top: '-15px',
                                right: '15px',
                                fontSize: '6rem',
                                fontWeight: 900,
                                color: `${project.accent}08`,
                                fontFamily: 'var(--font-sans)',
                                lineHeight: 1,
                                pointerEvents: 'none'
                            }}>
                                {project.number}
                            </div>

                            {/* Top bar with accent */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '14px',
                                    background: `linear-gradient(135deg, ${project.accent}20, ${project.accent}05)`,
                                    border: `1px solid ${project.accent}30`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-mono)',
                                    color: project.accent
                                }}>
                                    {project.number}
                                </div>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '10px',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.06)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--text-secondary)',
                                                transition: 'all 0.3s'
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
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '10px',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.06)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--text-secondary)',
                                                transition: 'all 0.3s'
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
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                                color: 'var(--text-primary)',
                                transition: 'color 0.3s'
                            }}>
                                {project.title}
                            </h3>

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                marginBottom: '1.5rem',
                                flexGrow: 1
                            }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '100px',
                                        background: `${project.accent}10`,
                                        border: `1px solid ${project.accent}20`,
                                        fontSize: '0.75rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: project.accent,
                                        fontWeight: 500
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .projects-scroll::-webkit-scrollbar {
                    display: none;
                }
                .project-card-item:hover h3 {
                    color: var(--accent-1) !important;
                }
                @media (max-width: 480px) {
                    .projects-scroll > div {
                        min-width: 320px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
