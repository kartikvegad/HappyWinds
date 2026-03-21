import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const words = ["Silence", "Clarity", "Impact", "Future"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section" id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 style={{ maxWidth: '1000px', marginBottom: '2.5rem', lineHeight: 1.1, letterSpacing: '-0.04em' }}>
                        We Craft Identities that <br />
                        <span style={{ display: 'inline-flex', flexDirection: 'column', height: '1.1em', overflow: 'hidden', verticalAlign: 'bottom', color: 'var(--color-text-secondary)' }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[index]}
                                    initial={{ y: 50, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -50, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ display: 'block', transformOrigin: 'top center' }}
                                >
                                    Speak {words[index]}.
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        borderLeft: '2px solid var(--color-text-primary)',
                        paddingLeft: 'clamp(1rem, 5vw, 2rem)',
                        maxWidth: '800px',
                        marginBottom: '2rem',
                    }}
                >
                    <ul style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        fontWeight: 300,
                        color: 'var(--color-text-secondary)',
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 1rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                    }}>
                        <li>✦ Custom logo identities crafted by a design focused studio.</li>
                        <li>✦ Fast turnaround with a clear and structured process.</li>
                        <li>✦ Thoughtful concepts backed by real brand thinking.</li>
                        <li>✦ Designed for clarity, recognition and long term use.</li>
                        <li>✦ Trusted by brands that value craft and consistency.</li>
                    </ul>

                    <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--color-text-muted)', margin: 0 }}>
                        <strong style={{ color: 'var(--color-text-primary)' }}>Note:</strong> 80% project payment is required to begin. The remaining 20% is paid after final delivery.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-buttons"
                    style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                >
                    <a href="#packages" className="btn btn-primary">
                        View Packages
                    </a>
                    <a href="#contact" className="btn btn-link" style={{ display: 'flex', alignItems: 'center', fontWeight: 500 }}>
                        Get in Touch
                        <div
                            style={{ width: 6, height: 6, background: 'var(--color-text-primary)', borderRadius: '50%', marginLeft: '0.75rem' }}
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
