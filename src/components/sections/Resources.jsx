import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Resources = () => {
    return (
        <section id="education" className="section" style={{ background: 'transparent', paddingTop: '4rem', paddingBottom: '4rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="resources-card"
                    style={{
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
                    <div className="resources-content" style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Free Logo Design Guide</h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                            Learn the essentials of effective branding. Download our comprehensive guide to understand what makes a logo truly work for your business.
                        </p>
                    </div>
                    <div>
                        <a href="/Logo Guide by HW eBOOK.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', whiteSpace: 'nowrap' }}>
                            Guide
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
            <style>
                {`
                    .resources-card {
                        padding: 3rem 4rem;
                    }
                    .resources-content {
                        min-width: 300px;
                    }
                    @media (max-width: 768px) {
                        .resources-card {
                            padding: 2rem 1.5rem;
                            gap: 1.5rem !important;
                        }
                    }
                    @media (max-width: 480px) {
                        .resources-card {
                            padding: 1.5rem 1rem;
                        }
                        .resources-content {
                            min-width: 100%;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default Resources;
