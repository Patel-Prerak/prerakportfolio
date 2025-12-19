import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        background: { opacity: 0 },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: {
                push: { quantity: 1 },
                repulse: { distance: 100, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#00ff41" },
            links: {
                color: "#00ff41",
                distance: 150,
                enable: true,
                opacity: 0.15, // Reduced opacity
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.8, // Slightly slower
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
            },
            number: { density: { enable: true, area: 800 }, value: 30 }, // Reduced from 60 to 30
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } }, // Slightly smaller
        },
        detectRetina: true,
    };

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 2rem',
            position: 'relative',
            background: 'radial-gradient(circle at 50% 50%, #0d1b1e 0%, var(--bg-color) 70%)',
            overflow: 'hidden'
        }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'left', maxWidth: '1000px', width: '100%' }}>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontSize: '1.2rem', letterSpacing: '2px' }}
                >
                    HI, MY NAME IS
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '0.5rem', fontWeight: 800, letterSpacing: '-2px' }}
                >
                    Prerak Patel.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1, color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 700 }}
                >
                    Co-Founder & CMO at <span className="hover-underline-animation" style={{ color: '#fff' }}>DeployX</span>.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}
                >
                    I'm a <span style={{ color: 'var(--accent-primary)' }}>Full Stack Developer</span> and <span style={{ color: 'var(--accent-primary)' }}>Network Security Specialist</span> transforming complex challenges into elegant digital solutions. Driving technical innovation at <a href="https://deployx.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>DeployX</a>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                >
                    <a href="#projects" className="btn">
                        View Projects
                    </a>
                    <a href="https://deployx.in" target="_blank" rel="noopener noreferrer" className="btn" style={{ borderColor: '#fff', color: '#fff' }}>
                        Visit DeployX
                    </a>
                </motion.div>
            </div>

            <style>{`
            .hover-underline-animation {
              display: inline-block;
              position: relative;
              cursor: pointer;
            }
    
            .hover-underline-animation:after {
              content: '';
              position: absolute;
              width: 100%;
              transform: scaleX(0);
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: var(--accent-primary);
              transform-origin: bottom right;
              transition: transform 0.25s ease-out;
            }
    
            .hover-underline-animation:hover:after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          `}</style>
        </section>
    );
};

export default Hero;
