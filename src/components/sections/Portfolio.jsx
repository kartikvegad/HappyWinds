import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = Array.from({ length: 38 }, (_, i) => ({
    title: `Project ${i + 1}`,
    image: `/portfolio/2025 For sample.2026/Slide${i + 1}.JPG`
}));

const PortfolioLogo = ({ proj }) => (
    <div
        className="portfolio-square-item"
        style={{
            flex: '0 0 380px',
            width: '380px',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.25rem',
            position: 'relative',
        }}
    >
        <div className="portfolio-inner-card" style={{
            width: '100%',
            height: '100%',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        }}>
            <img
                src={proj.image}
                alt={proj.title}
                className="portfolio-img"
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                }}
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span style="font-size: 0.9rem; font-weight: 500; text-align: center; color: var(--color-primary);">${proj.title}</span>`;
                }}
            />
        </div>
    </div>
);

const MarqueeRow = ({ items, direction = 'left' }) => {
    const rowRef = useRef();
    const [setWidth, setSetWidth] = useState(0);
    const x = useMotionValue(0);
    const controls = useAnimation();

    const loopedItems = [...items, ...items];

    useEffect(() => {
        if (rowRef.current) {
            const exactSetWidth = rowRef.current.scrollWidth / 2;
            setSetWidth(exactSetWidth);
        }
    }, [items]);

    useEffect(() => {
        if (setWidth > 0) {
            const logoFullWidth = setWidth / items.length;

            const startSteppedAnimation = async () => {
                let currentPos = direction === 'left' ? 0 : -setWidth;
                x.set(currentPos);

                while (true) {
                    if (direction === 'left') {
                        currentPos -= logoFullWidth;
                    } else {
                        currentPos += logoFullWidth;
                    }

                    await controls.start({
                        x: currentPos,
                        transition: {
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }
                    });

                    if (direction === 'left' && currentPos <= -setWidth) {
                        currentPos = 0;
                        x.set(0);
                    } else if (direction === 'right' && currentPos >= 0) {
                        currentPos = -setWidth;
                        x.set(-setWidth);
                    }

                    await new Promise(resolve => setTimeout(resolve, 1500));
                }
            };

            startSteppedAnimation();
        }
    }, [setWidth, direction, items.length]);

    return (
        <div style={{ overflow: 'hidden', padding: '0.25rem 0' }}>
            <motion.div
                ref={rowRef}
                style={{
                    display: 'flex',
                    gap: '0.25rem',
                    width: 'max-content',
                    x
                }}
                animate={controls}
            >
                {loopedItems.map((proj, index) => (
                    <PortfolioLogo key={index} proj={proj} />
                ))}
            </motion.div>
        </div>
    );
};

const Portfolio = () => {
    const row1 = projects.slice(0, 13);
    const row2 = projects.slice(13, 26);
    const row3 = projects.slice(26, 38);

    return (
        <section id="portfolio" className="section" style={{ background: 'transparent', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '6rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Our Legacy</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                        Over the years, we've had the privilege of shaping identities for visionaries across the globe.
                    </p>
                </motion.div>
            </div>

            <div className="portfolio-rows" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <MarqueeRow items={row1} direction="left" />
                <MarqueeRow items={row2} direction="right" />
                <MarqueeRow items={row3} direction="left" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}
            >
                <Link to="/contact" className="btn btn-primary" style={{
                    height: '56px',
                    padding: '0 2.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none'
                }}>
                    Let's start now
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </motion.div>

            <style>
                {`
                    .portfolio-img {
                        transition: none;
                    }
                    .portfolio-inner-card {
                        padding: 1.75rem;
                        border-radius: 40px;
                    }
                    @media (max-width: 1024px) {
                        .portfolio-square-item {
                            flex: 0 0 260px !important;
                            width: 260px !important;
                            padding: 0.5rem !important;
                        }
                        .portfolio-inner-card {
                            padding: 1.25rem !important;
                            border-radius: 30px !important;
                        }
                    }
                    @media (max-width: 640px) {
                        .portfolio-square-item {
                            flex: 0 0 240px !important;
                            width: 240px !important;
                            padding: 0.375rem !important;
                        }
                        .portfolio-inner-card {
                            padding: 0.75rem !important;
                            border-radius: 20px !important;
                        }
                        .portfolio-square-item div:first-child {
                            margin-bottom: 0.5rem !important;
                        }
                        .portfolio-square-item > div:last-child {
                            font-size: 0.75rem !important;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default Portfolio;
