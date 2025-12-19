import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" ref={ref} style={{ padding: '8rem 0', background: 'var(--bg-color)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', verticalAlign: 'middle', marginRight: '10px' }}>01.</span>
                    About Me
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem', alignItems: 'start' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Security by Mindset, Developer by Trade.</strong>
                        </p>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            I operate at the intersection of <span style={{ color: 'var(--accent-primary)' }}>Advanced Cybersecurity</span> and <span style={{ color: 'var(--accent-primary)' }}>Full Stack Engineering</span>. As the <span style={{ color: '#fff' }}>Co-Founder & CMO at DeployX</span>, I architect secure, scalable systems that power modern businesses.
                        </p>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            My academic roots are deep in defense. I am currently pursuing an <span style={{ color: 'var(--accent-primary)' }}>M.Tech in AI & DS (Cyber Security)</span> at the prestigious <span style={{ color: '#fff' }}>National Forensic Sciences University</span> (Ministry of Home Affairs), following my <span style={{ color: '#fff' }}>B.Tech (2025)</span> from Parul University.
                        </p>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            Whether it's penetration testing with <span style={{ color: 'var(--accent-primary)' }}>Burp Suite</span> or building AI models in <span style={{ color: 'var(--accent-primary)' }}>Python</span>, I enjoy solving complex problems with clean, efficient code.
                        </p>

                        <div style={{ marginTop: '2rem' }}>
                            <p style={{ fontFamily: 'var(--font-mono)', marginBottom: '1rem', color: '#fff' }}>Technical Arsenal:</p>
                            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>// DEVELOPMENT</span>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {['MERN Stack', 'PHP & SQL', 'HTML5 / CSS3', 'TypeScript', 'Python (AI)'].map(tech => (
                                            <li key={tech} style={{ position: 'relative', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span> {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>// SECURITY</span>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {['Burp Suite', 'Wireshark', 'Nmap', 'Cryptography', 'Digital Forensics'].map(tech => (
                                            <li key={tech} style={{ position: 'relative', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span> {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        {/* Abstract Tech Visual */}
                        <div style={{
                            width: '100%',
                            maxWidth: '380px',
                            minHeight: '350px',
                            position: 'relative',
                            border: '1px solid var(--accent-primary)',
                            borderRadius: '8px',
                            background: '#0a0a0a',
                            boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 15px',
                                borderBottom: '1px solid var(--border-color)',
                                background: 'rgba(0, 255, 65, 0.05)'
                            }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', marginRight: '8px' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', marginRight: '8px' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                                <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>user@NFSU:~</div>
                            </div>

                            <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                <p><span style={{ color: 'var(--accent-primary)' }}>$</span> whoami</p>
                                <p style={{ color: '#fff', marginBottom: '1rem' }}>Prerak Patel</p>

                                <p><span style={{ color: 'var(--accent-primary)' }}>$</span> cat current_role.json</p>
                                <p style={{ color: '#e6c07b' }}>&#123;</p>
                                <p>&nbsp;&nbsp;<span style={{ color: '#98c379' }}>"title"</span>: <span style={{ color: '#61afef' }}>"Co-Founder & CMO"</span>,</p>
                                <p>&nbsp;&nbsp;<span style={{ color: '#98c379' }}>"company"</span>: <span style={{ color: '#61afef' }}>"DeployX"</span>,</p>
                                <p>&nbsp;&nbsp;<span style={{ color: '#98c379' }}>"education"</span>: <span style={{ color: '#61afef' }}>"M.Tech @ NFSU"</span>,</p>
                                <p>&nbsp;&nbsp;<span style={{ color: '#98c379' }}>"focus"</span>: [<span style={{ color: '#61afef' }}>"CyberSec"</span>, <span style={{ color: '#61afef' }}>"AI"</span>]</p>
                                <p style={{ color: '#e6c07b' }}>&#125;</p>

                                <p style={{ marginTop: '1rem' }}><span style={{ color: 'var(--accent-primary)' }}>$</span> ./run_security_audit.sh</p>
                                <p style={{ color: 'var(--accent-primary)' }}>[+] Initializing Nmap...</p>
                                <p style={{ color: 'var(--accent-primary)' }}>[+] Analyizing Traffic (Wireshark)...</p>
                                <p style={{ color: 'var(--accent-primary)' }}>[+] Vulnerability Scan Complete.</p>
                                <div style={{ marginTop: '5px', width: '10px', height: '18px', background: 'var(--accent-primary)', animation: 'blink 1s infinite' }}></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
      `}</style>
        </section>
    );
};

export default About;
