import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
    {
        name: 'Foundation',
        price: '₹9,500',
        description: 'Designed for early stage brands building their first identity.',
        features: ['5 Unique Logos Options', '10 Logo Revisions', 'JPG & PDF Logo File', 'Transparent PNG & GIF', 'AI Editable Logo File', '15 Days Delivery Time']
    },
    {
        name: 'Identity',
        price: '₹14,500',
        description: 'A complete and professional logo solution with flexibility.',
        features: ['10 Unique Logos Options', '20 Logo Revisions', '5 Visiting Card Design', '5 LH & Envelop Design', '3 Social Media Icon', 'JPG & PDF Logo File', 'Transparent PNG & GIF', 'AI Editable Logo File', 'CDR Editable Logo File', '3D Mock Ups', '12 Days Delivery Time']
    },
    {
        name: 'Signature',
        price: '₹18,500',
        isPopular: true,
        description: 'Premium package with unlimited revisions and complete branding.',
        features: ['20 Unique Logos Options', 'Unlimited Logo Revisions', '10 Visiting Card Design', '10 LH & Envelop Design', '5 Social Media Icon', 'JPG & PDF Logo File', 'Transparent PNG & GIF', 'AI Editable Logo File', 'CDR Editable Logo File', '3D Mock Ups', '8 Days Delivery Time']
    },
    {
        name: 'Ultimate',
        price: '₹30,800',
        isUltimate: true,
        description: "Discover the ultimate solution for your branding needs. Perfect for revamps or new scratch developments.",
        features: [
            '20 Unique Logo Options',
            'Unlimited Logo Revisions',
            '10 Visiting Card Designs',
            '10 Letterhead & Envelope Designs',
            '5 Social Media Icons',
            '2 Logo Animations',
            'Brand Presentation (PPT)',
            'Employee ID Card Design',
            'Email Signature Design',
            'Brand Guidelines Book',
            '24 Festive Social Media Posts',
            '2 Custom Posts / Brochures',
            'JPG & PDF Logo Files',
            'Transparent PNG & GIF',
            'CDR Editable Logo File',
            '3D Mockups',
            '8 Days Delivery Time'
        ]
    }
];

const Packages = () => {
    return (
        <section id="packages" className="section" style={{ background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 style={{ marginBottom: '1rem' }}>Our Packages</h2>
                    <p>Transparent pricing for every stage of growth.</p>
                </motion.div>

                <div className="packages-grid">
                    {packages.map((pkg, index) => {
                        const isUltimate = pkg.isUltimate;
                        return (
                            <motion.div
                                key={index}
                                className="card-interactive"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '650px', // Shortened height
                                    position: 'relative',
                                    overflow: 'hidden',
                                    background: 'var(--color-bg-card)',
                                    color: 'inherit',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                {pkg.isPopular && (
                                    <div style={{
                                        position: 'absolute', top: '12px', right: '12px',
                                        background: 'var(--color-secondary)', color: 'white',
                                        padding: '4px 12px', fontSize: '0.7rem', borderRadius: '12px', fontWeight: 600,
                                        zIndex: 10
                                    }}>POPULAR</div>
                                )}

                                {isUltimate && (
                                    <div style={{
                                        position: 'absolute', top: '12px', right: '12px',
                                        background: 'var(--color-primary)', color: 'white',
                                        padding: '4px 12px', fontSize: '0.7rem', borderRadius: '12px', fontWeight: 600,
                                        display: 'flex', alignItems: 'center', gap: '0.25rem', width: 'max-content',
                                        zIndex: 10
                                    }}>
                                        <Star size={12} fill="currentColor" /> ULTIMATE
                                    </div>
                                )}

                                <div style={{ padding: '0 0 1rem 0' }}>
                                    <h3 style={{
                                        fontSize: '1.4rem',
                                        marginBottom: '0.5rem',
                                        color: 'inherit',
                                        letterSpacing: '-0.02em'
                                    }}>
                                        {pkg.name}
                                    </h3>

                                    <p style={{
                                        fontSize: '0.85rem',
                                        marginBottom: '1rem',
                                        opacity: 0.9,
                                        color: 'inherit',
                                        minHeight: '2.5rem',
                                        lineHeight: '1.4'
                                    }}>
                                        {pkg.description}
                                    </p>

                                    <div style={{
                                        fontSize: '2rem',
                                        fontWeight: 700,
                                        marginBottom: '1.5rem',
                                        color: 'inherit'
                                    }}>
                                        {pkg.price}
                                    </div>
                                </div>

                                <ul className="custom-scrollbar" style={{
                                    listStyle: 'none',
                                    marginBottom: '1.5rem',
                                    flex: 1,
                                    padding: '0 0.5rem 0 0',
                                    overflowY: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                }}>
                                    {pkg.features.map((feat, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            fontSize: '0.85rem',
                                            opacity: 1,
                                            color: 'inherit',
                                            lineHeight: 1.4
                                        }}>
                                            <Check
                                                size={14}
                                                style={{
                                                    marginRight: '0.6rem',
                                                    marginTop: '3px',
                                                    flexShrink: 0,
                                                    color: 'inherit'
                                                }}
                                            />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ marginTop: 'auto' }}>
                                    <Link
                                        to="/contact"
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '0.85rem', fontSize: '0.9rem', textAlign: 'center', display: 'block' }}
                                    >
                                        Book a Call
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Packages;
