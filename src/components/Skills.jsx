import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiOpenai, SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql, SiWireshark, SiBurpsuite } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'React', icon: <FaReact size={40} /> },
        { name: 'Node.js', icon: <FaNodeJs size={40} /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} /> },
        { name: 'PHP', icon: <SiPhp size={40} /> },
        { name: 'Python', icon: <FaPython size={40} /> },
        { name: 'MongoDB', icon: <SiMongodb size={40} /> },
        { name: 'SQL', icon: <SiMysql size={40} /> },
        { name: 'HTML5', icon: <SiHtml5 size={40} /> },
        { name: 'CSS3', icon: <SiCss3 size={40} /> },
        { name: 'OpenAI', icon: <SiOpenai size={40} /> },
        { name: 'Burp Suite', icon: <SiBurpsuite size={40} /> },
        { name: 'Wireshark', icon: <SiWireshark size={40} /> },
        { name: 'Nmap / NetSec', icon: <FaNetworkWired size={40} /> },
        { name: 'Git', icon: <FaGitAlt size={40} /> }
    ];

    return (
        <section id="skills" style={{ padding: '8rem 0', background: 'var(--bg-color)' }}>
            <div className="container">
                <h2 className="section-title">
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginRight: '10px' }}>03.</span>
                    Tech Stack
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '3rem', marginTop: '4rem', textAlign: 'center' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, color: 'var(--accent-primary)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer'
                            }}
                        >
                            {skill.icon}
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
