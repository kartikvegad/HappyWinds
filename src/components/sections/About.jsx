import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const CountUp = ({ to, duration = 2 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, {
                duration: duration,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [inView, to, duration]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
    { number: 2000, label: 'Brands Built', suffix: '+' },
    { number: 10, label: 'Years Crafting', suffix: '+' },
    { number: 50, label: 'Industries Served', suffix: '+' },
];

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }}>
            <div className="container">

                {/* Main layout: big statement left, detail right */}
                <div className="about-grid">

                    {/* Left: Large headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-balance" style={{
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
                            lineHeight: 1.8,
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
                    style={{ marginTop: '4rem' }}
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
                                <CountUp to={stat.number} />{stat.suffix}
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
