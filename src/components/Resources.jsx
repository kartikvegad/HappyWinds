import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

const Resources = () => {
    return (
        <section id="education" className="section" style={{ background: 'transparent', paddingTop: '4rem', paddingBottom: '4rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        padding: '3rem 4rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '3rem',
                        flexWrap: 'wrap'
                    }}
                >
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Free Logo Design Guide</h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                            Learn the essentials of effective branding. Download our comprehensive guide to understand what makes a logo truly work for your business.
                        </p>
                    </div>
                    <div>
                        <a href="#" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', whiteSpace: 'nowrap' }}>
                            <ArrowDownCircle size={20} />
                            Download Guide
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resources;
