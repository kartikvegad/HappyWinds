import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        const checkTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            setTheme(currentTheme);
        };

        checkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    checkTheme();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    return (
        <footer style={{
            padding: '5rem 0 2rem',
            background: '#052627',
            color: 'white',
            borderTop: '4px solid var(--color-primary)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand Section */}
                    <div style={{ maxWidth: '400px' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img
                                src="/logo.svg"
                                alt="Happy Winds"
                                style={{
                                    height: '60px',
                                    width: 'auto',
                                    filter: 'brightness(0) invert(1)',
                                    transition: 'filter 0.3s ease'
                                }}
                            />
                        </div>
                        <p style={{ color: 'inherit', opacity: 0.9, lineHeight: 1.7, fontSize: '1rem' }}>
                            Drafting the best logo is not just a project for us, but an opportunity to add tremendous value to your brand.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'inherit', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['About', 'Process', 'Portfolio', 'Packages', 'Education', 'Reviews'].map(item => (
                                <HashLink
                                    key={item}
                                    smooth
                                    to={`/#${item.toLowerCase()}`}
                                    style={{ opacity: 0.85, transition: 'opacity 0.2s', color: 'inherit', textDecoration: 'none' }}
                                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                                    onMouseLeave={(e) => e.target.style.opacity = '0.85'}
                                >
                                    {item}
                                </HashLink>
                            ))}
                        </div>
                    </div>

                    {/* Important Info */}
                    <div>
                        <h4 style={{ color: 'inherit', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Important</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', opacity: 1 }}>
                            <p style={{ color: 'inherit' }}>
                                <strong style={{ opacity: 1, color: 'inherit' }}>Design Charges:</strong><br />
                                80% advance payment required to start. Remaining 20% due upon completion.
                            </p>
                            <p style={{ color: 'inherit' }}>
                                <strong style={{ opacity: 1, color: 'inherit' }}>Source Files:</strong><br />
                                Copyright source files (AI, CDR) released after full payment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Terms & Copyright */}
                <div style={{
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.6, color: 'inherit' }}>
                        <strong style={{ opacity: 1, color: 'inherit' }}>Terms & Conditions:</strong><br />
                        Copyright is retained by Happywinds Logo until all costs are settled. Unchosen designs remain property of Happywinds.
                        Payments outstanding for 30 days incur interest. All charges exclusive of GST (18%).
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        fontSize: '0.85rem',
                        opacity: 1
                    }}>
                        <div>&copy; {currentYear} Happywinds. All rights reserved.</div>
                        <a href="https://dot-site.vercel.app" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>Designed by DOT.</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
