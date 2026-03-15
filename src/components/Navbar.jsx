import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const { scrollY } = useScroll();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [activeSection, setActiveSection] = useState('');

    const menuItems = [
        { name: 'About', id: 'about' },
        { name: 'Expertise', id: 'services' },
        { name: 'Process', id: 'process' },
        { name: 'Portfolio', id: 'portfolio' },
        { name: 'Packages', id: 'packages' },
        { name: 'Reviews', id: 'reviews' },
        { name: 'FAQs', id: 'faq' }
    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        if (location.pathname !== '/') return;

        let observer;

        const setupObserver = () => {
            const observerOptions = {
                root: null,
                rootMargin: '-30% 0px -30% 0px',
                threshold: 0
            };

            const observerCallback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            };

            observer = new IntersectionObserver(observerCallback, observerOptions);

            menuItems.forEach(item => {
                const element = document.getElementById(item.id);
                if (element) observer.observe(element);
            });

            if (window.scrollY < 100) {
                setActiveSection('about');
            }
        };

        const timer = setTimeout(setupObserver, 150);

        return () => {
            clearTimeout(timer);
            if (observer) observer.disconnect();
        };
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
        }
    }, [location.pathname]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <motion.nav
                style={{
                    position: 'fixed',
                    top: isScrolled ? '1rem' : '0',
                    left: '0',
                    right: '0',
                    maxWidth: isScrolled ? '1000px' : '100%',
                    width: isScrolled ? 'calc(100% - 2rem)' : '100%',
                    margin: '0 auto',
                    padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
                    zIndex: 100,
                    background: isScrolled ? 'color-mix(in srgb, var(--color-bg-primary) 50%, transparent)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(16px)' : 'none',
                    WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
                    border: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
                    borderRadius: isScrolled ? '100px' : '0px',
                    boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <HashLink to="/#" style={{ display: 'flex', alignItems: 'center', zIndex: 102 }}>
                        <img
                            src="/logo.svg"
                            alt="Happy Winds"
                            style={{
                                height: '52px',
                                width: 'auto',
                                filter: theme === 'dark' ? 'invert(1)' : 'none',
                                transition: 'filter 0.3s ease, height 0.3s ease'
                            }}
                        />
                    </HashLink>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{ gap: '2rem', alignItems: 'center' }}>
                        {menuItems.map((item) => (
                            <HashLink
                                key={item.id}
                                smooth
                                to={`/#${item.id}`}
                                style={{
                                    fontWeight: 500,
                                    fontSize: '0.9rem',
                                    color: activeSection === item.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                    position: 'relative',
                                    transition: 'color 0.3s ease',
                                    padding: '0.5rem 0'
                                }}
                            >
                                {item.name}
                                {location.pathname === '/' && activeSection === item.id && (
                                    <motion.div
                                        layoutId="navUnderline"
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: 'var(--color-text-primary)',
                                            borderRadius: '2px'
                                        }}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </HashLink>
                        ))}

                        {/* Theme Switcher */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                            <button
                                onClick={toggleTheme}
                                style={{
                                    width: '44px',
                                    height: '24px',
                                    background: 'var(--color-text-primary)',
                                    borderRadius: '100px',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '3px',
                                    cursor: 'pointer',
                                    border: 'none',
                                    outline: 'none'
                                }}
                            >
                                <motion.div
                                    style={{
                                        width: '18px',
                                        height: '18px',
                                        background: 'var(--color-bg-primary)',
                                        borderRadius: '50%',
                                    }}
                                    animate={{ x: theme === 'dark' ? 20 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </button>

                            <HashLink to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                                Start Now
                            </HashLink>
                        </div>
                    </div>

                    {/* Mobile Toggle Group */}
                    <div className="mobile-toggle-group" style={{ alignItems: 'center', gap: '1.25rem' }}>
                        <button
                            onClick={toggleTheme}
                            style={{
                                width: '44px',
                                height: '24px',
                                background: 'var(--color-text-primary)',
                                borderRadius: '100px',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '3px',
                                border: 'none',
                                outline: 'none'
                            }}
                        >
                            <motion.div
                                style={{ width: '18px', height: '18px', background: 'var(--color-bg-primary)', borderRadius: '50%' }}
                                animate={{ x: theme === 'dark' ? 20 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{ color: 'var(--color-text-primary)', zIndex: 102 }}
                        >
                            <div style={{ width: 22, height: 1.5, background: 'currentColor', marginBottom: 5 }}></div>
                            <div style={{ width: 14, height: 1.5, background: 'currentColor', marginLeft: 'auto' }}></div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed', inset: 0,
                            background: 'var(--color-bg-primary)',
                            zIndex: 101, display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', gap: '2rem'
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                width: '44px',
                                height: '44px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid var(--color-border)',
                                borderRadius: '50%',
                                background: 'transparent',
                                color: 'var(--color-text-primary)',
                                fontSize: '1.25rem',
                                cursor: 'pointer',
                            }}
                        >
                            ✕
                        </button>

                        {menuItems.concat([{ name: 'Contact', id: 'contact' }]).map((item) => (
                            <HashLink
                                key={item.id}
                                smooth
                                to={item.id === 'contact' ? '/contact' : `/#${item.id}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 500,
                                    color: activeSection === item.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                    position: 'relative',
                                    padding: '0.25rem 0'
                                }}
                            >
                                {item.name}
                                {location.pathname === '/' && activeSection === item.id && (
                                    <motion.div
                                        layoutId="mobileNavUnderline"
                                        style={{
                                            position: 'absolute',
                                            bottom: -4,
                                            left: '10%',
                                            right: '10%',
                                            height: '2px',
                                            background: 'var(--color-text-primary)',
                                            borderRadius: '2px'
                                        }}
                                    />
                                )}
                            </HashLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
