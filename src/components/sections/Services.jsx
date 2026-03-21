import React from 'react';
import { motion } from 'framer-motion';
import { Type, Box, Aperture, Feather, Layout, PlayCircle } from 'lucide-react';

const offers = [
    { title: 'Wordmark Logo', desc: 'Typographic logos that focus on the name of your business.', icon: <Type size={28} /> },
    { title: 'Negative Space', desc: 'Clever use of space to create hidden meanings and dual imagery.', icon: <Box size={28} /> },
    { title: 'Mascot & Emblem', desc: 'Character-based or traditional badge-style logos for strong identity.', icon: <Aperture size={28} /> },
    { title: 'Icon Mark', desc: 'Symbol-based logos that stand alone as a visual identifier.', icon: <Feather size={28} /> },
    { title: 'Branding Stationery', desc: 'Complete business card, letterhead, and envelope design systems.', icon: <Layout size={28} /> },
    { title: 'Logo Animation', desc: 'Bringing your logo to life with dynamic motion and transitions.', icon: <PlayCircle size={28} /> },
];

const Services = () => {
    return (
        <section id="services" className="section" style={{ background: 'transparent', position: 'relative' }}>


            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '5rem', textAlign: 'center' }}
                >
                    <h2 style={{ marginBottom: '1rem' }}>Our Expertise</h2>
                    <p>Specialized design disciplines.</p>
                </motion.div>

                <div className="grid grid-3">
                    {offers.map((offer, index) => (
                        <motion.div
                            key={index}
                            className="card-interactive"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'var(--color-bg-card)',
                            }}
                        >
                            {/* Animated Borders */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--color-bg-primary)', transformOrigin: 'left', zIndex: 10 }}
                            />
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: 'absolute', bottom: 0, right: 0, left: 0, height: '3px', background: 'var(--color-bg-primary)', transformOrigin: 'right', zIndex: 10 }}
                            />

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    {offer.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{offer.title}</h3>
                                <p style={{ fontSize: '1rem' }}>{offer.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
