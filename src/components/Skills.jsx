import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaNetworkWired, FaDocker, FaAws } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiOpenai, SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql, SiWireshark, SiBurpsuite, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: 'Frontend',
            color: '#7c5cfc',
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
            color: '#00d4ff',
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
            color: '#ff6b9d',
            skills: [
                { name: 'Burp Suite', icon: <SiBurpsuite size={28} /> },
                { name: 'Wireshark', icon: <SiWireshark size={28} /> },
                { name: 'Nmap', icon: <FaNetworkWired size={28} /> },
                { name: 'Git', icon: <FaGitAlt size={28} /> },
            ]
        }
    ];

    // Create the infinite marquee skills
    const allSkills = skillCategories.flatMap(cat => cat.skills.map(s => ({ ...s, color: cat.color })));
    const marqueeSkills = [...allSkills, ...allSkills]; // duplicate for seamless loop

    return (
        <section id="skills" ref={ref} style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background deco */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '-200px',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(124, 92, 252, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                transform: 'translateY(-50%)'
            }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <div className="section-label">Skills</div>
                    <h2 className="section-heading">
                        My <span className="gradient-text">tech stack</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', fontSize: '1.05rem' }}>
                        Technologies and tools I use to bring ideas to life and keep them secure.
                    </p>
                </motion.div>

                {/* Skill Category Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + catIdx * 0.15, duration: 0.5 }}
                            className="glass-card"
                            style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
                        >
                            {/* Accent bar */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, ${cat.color}, transparent)`
                            }} />

                            <h3 style={{
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 600,
                                color: cat.color,
                                marginBottom: '1.5rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}>
                                {cat.title}
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {cat.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skillIdx}
                                        whileHover={{ scale: 1.1, color: cat.color }}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--text-secondary)',
                                            cursor: 'default',
                                            padding: '0.75rem 0.25rem',
                                            borderRadius: '12px',
                                            transition: 'background 0.3s'
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = `${cat.color}10`; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                                    >
                                        {skill.icon}
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textAlign: 'center' }}>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Infinite Scrolling Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        padding: '1.5rem 0',
                        maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'
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
                                    padding: '0.6rem 1.5rem',
                                    marginRight: '1rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    color: skill.color,
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    fontSize: '0.85rem',
                                    fontFamily: 'var(--font-mono)'
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
