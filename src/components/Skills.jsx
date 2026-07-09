import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaNetworkWired, FaDocker, FaAws } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiOpenai, SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql, SiWireshark, SiBurpsuite, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillCategories = [
        {
            title: 'Frontend',
            color: '#00b8ff',
            emoji: '🎨',
            skills: [
                { name: 'React', icon: <FaReact size={28} /> },
                { name: 'TypeScript', icon: <SiTypescript size={28} /> },
                { name: 'JavaScript', icon: <SiJavascript size={28} /> },
                { name: 'Next.js', icon: <SiNextdotjs size={28} /> },
                { name: 'HTML5', icon: <SiHtml5 size={28} /> },
                { name: 'CSS3', icon: <SiCss3 size={28} /> },
            ]
        },
        {
            title: 'Backend',
            color: '#00ff9d',
            emoji: '⚙️',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs size={28} /> },
                { name: 'Python', icon: <FaPython size={28} /> },
                { name: 'PHP', icon: <SiPhp size={28} /> },
                { name: 'MongoDB', icon: <SiMongodb size={28} /> },
                { name: 'SQL', icon: <SiMysql size={28} /> },
                { name: 'OpenAI', icon: <SiOpenai size={28} /> },
            ]
        },
        {
            title: 'Security',
            color: '#ff3e3e',
            emoji: '🛡️',
            skills: [
                { name: 'Burp Suite', icon: <SiBurpsuite size={28} /> },
                { name: 'Wireshark', icon: <SiWireshark size={28} /> },
                { name: 'Nmap', icon: <FaNetworkWired size={28} /> },
                { name: 'Git', icon: <FaGitAlt size={28} /> },
            ]
        }
    ];

    const allSkills = skillCategories.flatMap(cat => cat.skills.map(s => ({ ...s, color: cat.color })));
    const marqueeSkills = [...allSkills, ...allSkills];

    return (
        <section id="skills" ref={ref} style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background orbs */}
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '-250px',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 255, 157, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-200px',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 184, 255, 0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <div className="section-label">Skills</div>
                    <h2 className="section-heading">
                        My <span className="gradient-text">tech stack</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Technologies and tools I use to bring ideas to life and keep them secure.
                    </p>
                </motion.div>

                {/* Skill Category Cards - Enhanced */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '4rem'
                }}>
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + catIdx * 0.15, duration: 0.6 }}
                            className="glass-card"
                            style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
                        >
                            {/* Gradient accent bar */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, ${cat.color}, ${cat.color}40, transparent)`,
                            }} />

                            {/* Background glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                background: `radial-gradient(circle, ${cat.color}10, transparent)`,
                                pointerEvents: 'none'
                            }} />

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1.75rem'
                            }}>
                                <span style={{ fontSize: '1.3rem' }}>{cat.emoji}</span>
                                <h3 style={{
                                    fontSize: '0.85rem',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 600,
                                    color: cat.color,
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase'
                                }}>
                                    {cat.title}
                                </h3>
                                <div style={{
                                    flex: 1,
                                    height: '1px',
                                    background: `linear-gradient(90deg, ${cat.color}30, transparent)`
                                }} />
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '0.75rem'
                            }}>
                                {cat.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skillIdx}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -5,
                                        }}
                                        onHoverStart={() => setHoveredSkill(`${catIdx}-${skillIdx}`)}
                                        onHoverEnd={() => setHoveredSkill(null)}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: hoveredSkill === `${catIdx}-${skillIdx}` ? cat.color : 'var(--text-secondary)',
                                            cursor: 'default',
                                            padding: '0.85rem 0.25rem',
                                            borderRadius: '14px',
                                            background: hoveredSkill === `${catIdx}-${skillIdx}` ? `${cat.color}0D` : 'transparent',
                                            border: hoveredSkill === `${catIdx}-${skillIdx}` ? `1px solid ${cat.color}20` : '1px solid transparent',
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                            position: 'relative'
                                        }}
                                    >
                                        {/* Icon glow */}
                                        {hoveredSkill === `${catIdx}-${skillIdx}` && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '40px',
                                                height: '40px',
                                                background: `radial-gradient(circle, ${cat.color}30, transparent)`,
                                                pointerEvents: 'none',
                                                filter: 'blur(8px)'
                                            }} />
                                        )}
                                        <div style={{ position: 'relative', zIndex: 1 }}>{skill.icon}</div>
                                        <span style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.68rem',
                                            textAlign: 'center',
                                            fontWeight: hoveredSkill === `${catIdx}-${skillIdx}` ? 600 : 400
                                        }}>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Infinite Scrolling Marquee - Enhanced */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        padding: '1.5rem 0',
                        maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
                        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)'
                    }}
                >
                    <div className="marquee-track">
                        {marqueeSkills.map((skill, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    padding: '0.65rem 1.5rem',
                                    marginRight: '0.8rem',
                                    background: 'rgba(255,255,255,0.025)',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    color: skill.color,
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    fontSize: '0.82rem',
                                    fontFamily: 'var(--font-mono)',
                                    transition: 'all 0.3s',
                                    cursor: 'default'
                                }}
                            >
                                {skill.icon}
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
