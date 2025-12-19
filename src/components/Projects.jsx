import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "AI Resume Builder",
            description: "An AI-powered application leveraging OpenAI GPT-4 to create ATS-optimized resumes tailored to specific job descriptions. Features real-time generation and customization.",
            tech: ["TypeScript", "OpenAI API", "React"],
            github: "https://github.com/Patel-Prerak/RESUME-BUILDER",
            link: null
        },
        {
            title: "Sahayak - Service on Demand",
            description: "A comprehensive service-on-demand web application connecting users with local service providers. Features user authentication, booking management, and real-time updates.",
            tech: ["MERN Stack", "Redux", "JWT"],
            github: "https://github.com/Patel-Prerak/Sahayak",
            link: null
        },
        {
            title: "E-Commerce & Fitness App",
            description: "A dual-domain platform featuring a robust e-commerce marketplace and a personalized fitness tracking mobile application, developed under DeployX.",
            tech: ["React Native", "Node.js", "Express"],
            github: null,
            link: "https://deployx.in/projects"
        },
        {
            title: "Shree Voluntary Blood Bank",
            description: "A digital platform to streamline blood donation processes, inventory management, and donor connection for a leading blood bank.",
            tech: ["Web Development", "Database Management"],
            github: null,
            link: "https://deployx.in/projects"
        },
        {
            title: "Email Security Analyzer",
            description: "Full-stack application that analyzes email headers to reveal travel paths and service providers, enhancing email security visibility.",
            tech: ["TypeScript", "Node.js", "Security"],
            github: "https://github.com/Patel-Prerak/Email-Service-Provider",
            link: null
        },
        {
            title: "Network Security Lab",
            description: "A collection of python implementations for various cryptography algorithms including classical ciphers, hashing, and key exchange protocols.",
            tech: ["Python", "Cryptography", "Security"],
            github: "https://github.com/Patel-Prerak/network_security_lab",
            link: null
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" ref={ref} style={{ padding: '8rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', verticalAlign: 'middle', marginRight: '10px' }}>02.</span>
                    Featured Projects
                </motion.h2>

                <motion.div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                position: 'relative',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            className="project-card"
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <FaFolder size={40} color="var(--accent-primary)" />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', flexGrow: 1 }}>
                                {project.description}
                            </p>

                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0, fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                                {project.tech.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>

                            <style>{`
                    .project-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
                    }
                    .project-card:hover h3 {
                        color: var(--accent-primary);
                    }
                    .project-card a:hover {
                        color: var(--accent-primary) !important;
                    }
                `}</style>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
