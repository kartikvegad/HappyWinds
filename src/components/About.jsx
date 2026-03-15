import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { number: '200+', label: 'Brands Built' },
    { number: '10+', label: 'Years Crafting' },
    { number: '30+', label: 'Industries Served' },
];

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'transparent', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container">

                {/* Main layout: big statement left, detail right */}
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start', marginBottom: '4rem' }}>

                    {/* Left: Large headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                            fontWeight: 600,
                            lineHeight: 1.1,
                            letterSpacing: '-0.04em',
                            margin: 0,
                        }}>
                            We don't just{' '}
                            <span style={{
                                fontWeight: 400,
                                color: 'var(--color-text-secondary)',
                            }}>
                                design logos
                            </span>
                            .{' '}
                            <br />
                            We engineer{' '}
                            <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>
                                lasting identities.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Right: Description + quote */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        style={{ paddingTop: '0.5rem' }}
                    >
                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: 1.8,
                            color: 'var(--color-text-secondary)',
                            marginBottom: '2.5rem',
                        }}>
                            Happy Winds is a design-first studio built on the belief that a great logo is never just art — it's strategy made visible. We combine deep brand thinking with obsessive craft to create identities that stand out, scale up, and stand the test of time.
                        </p>

                        <blockquote style={{
                            borderLeft: '2px solid var(--color-text-primary)',
                            paddingLeft: '1.5rem',
                            margin: 0,
                        }}>
                            <p style={{
                                fontSize: '1rem',
                                fontStyle: 'italic',
                                fontWeight: 400,
                                color: 'var(--color-text-primary)',
                                lineHeight: 1.7,
                                margin: 0,
                            }}>
                                "We are not individual names or photos. We are <strong>Team-HW</strong> — united by a relentless pursuit of design excellence."
                            </p>
                        </blockquote>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    className="about-stats"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1px',
                        background: 'var(--color-border)',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        border: '1px solid var(--color-border)',
                    }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i + 0.3 }}
                            style={{
                                background: 'var(--color-bg-card)',
                                padding: '1.75rem 2rem',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 800,
                                letterSpacing: '-0.03em',
                                lineHeight: 1,
                                marginBottom: '0.5rem',
                                color: 'var(--color-text-primary)',
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                color: 'var(--color-text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
