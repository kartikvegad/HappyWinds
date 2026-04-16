import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Initiation', desc: 'Secure your spot with a 80% advance. We analyze your requirements and target audience.' },
    { num: '02', title: 'Ideation', desc: 'We start with rough drawings and develop unique concepts (5-20 options based on your package).' },
    { num: '03', title: 'Refinement', desc: 'We share options via WhatsApp/Email. You select a direction, and we refine it with your feedback.' },
    { num: '04', title: 'Delivery', desc: 'Once approved, we deliver all source files (AI, CDR, PDF, PNG) and stationery designs.' }
];

const Process = () => {
    return (
        <section id="process" className="section" style={{ background: 'transparent' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '5rem', textAlign: 'center' }}
                >
                    <h2 style={{ color: 'var(--color-text-primary)' }}>Our Process</h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>From rough sketches to scalable brands.</p>
                </motion.div>

                <div className="process-grid grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ position: 'relative', padding: '2rem 1rem' }}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem', lineHeight: 1 }}>
                                {step.num}
                            </div>
                            <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>

                            {index !== steps.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '30%',
                                    right: 0,
                                    width: '1px',
                                    height: '40%',
                                    background: 'var(--color-border)',
                                    display: 'none', // hidden on mobile, logical on desktop via css ideally
                                }} className="desktop-divider"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
