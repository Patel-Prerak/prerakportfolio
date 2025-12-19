import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}
                >
                    04. What's Next?
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}
                >
                    I'm currently looking for new opportunities in Web Development and AI. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a href="mailto:patelprerak435@gmail.com" className="btn" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
