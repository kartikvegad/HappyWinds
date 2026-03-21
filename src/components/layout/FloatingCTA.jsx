import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingCTA = () => {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/contact') return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="cta-floating-btn"
            style={{
                zIndex: 1000,
                pointerEvents: 'auto'
            }}
        >
            <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ 
                    background: 'var(--color-bg-primary)', 
                    color: 'var(--color-text-primary)' ,
                    border: '2px solid var(--color-text-primary)'
                }}
                whileTap={{ scale: 0.95 }}
                className="btn"
                style={{
                    height: '56px',
                    padding: '0 2rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                    background: 'var(--color-text-primary)',
                    color: 'var(--color-bg-primary)',
                    border: '2px solid var(--color-bg-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap'
                }}
            >
                Let's start now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </motion.button>
        </motion.div>
    );
};

export default FloatingCTA;
