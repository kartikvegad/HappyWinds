import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Send, HelpCircle, Check } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Include empty placeholders for the server-side to avoid issues
            const payload = {
                ...formState,
                website: 'N/A',
                projectBrief: 'N/A',
                services: [],
                startDate: 'Flexible',
                deadline: 'N/A',
                budget: 'N/A',
                selectedPackage: 'N/A',
                source: 'Other'
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you! Your details have been received and the Team will contact you soon.' });
                setFormState({ name: '', email: '', phone: '' });
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send details. Please check your connection or contact us directly at hihappywinds@gmail.com' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section" style={{ background: 'transparent', paddingTop: '2rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ marginBottom: '1rem' }}>Get in Touch</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Ready to elevate your brand? Drop your details below and we'll reach out to discuss your vision.
                    </p>
                </motion.div>

                {status.type === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            textAlign: 'center',
                            padding: '4rem 2rem',
                            background: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem'
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'rgba(16, 185, 129, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#10B981',
                            marginBottom: '1rem'
                        }}>
                            <Check size={40} />
                        </div>
                        <h3 style={{ fontSize: '2rem' }}>Details Received</h3>
                        <p style={{ maxWidth: '500px', margin: '0 auto' }}>{status.message}</p>
                        <button
                            onClick={() => setStatus({ type: '', message: '' })}
                            className="btn btn-primary"
                            style={{ marginTop: '1rem' }}
                        >
                            Send Another Inquiry
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="form-section shadow-sm"
                        >
                            <h3 className="form-group-title"><User size={20} /> Contact Information</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                <div>
                                    <label className="input-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="e.g. John Doe"
                                        value={formState.name}
                                        onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="input-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="custom-input"
                                        placeholder="e.g. john@example.com"
                                        value={formState.email}
                                        onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="input-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="custom-input"
                                        placeholder="e.g. +91 96648 29116"
                                        value={formState.phone}
                                        onChange={e => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                                        required
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <AnimatePresence>
                            {status.type === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    style={{
                                        padding: '1.25rem',
                                        borderRadius: 'var(--radius-md)',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        color: '#EF4444',
                                        fontSize: '0.95rem',
                                        textAlign: 'center',
                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                                        <HelpCircle size={20} />
                                        {status.message}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            style={{
                                width: '100%',
                                height: '64px',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'auto',
                                marginTop: '1rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {isSubmitting ? (
                                <>Sending Details...</>
                            ) : (
                                <>
                                    Send Details <Send size={20} />
                                </>
                            )}
                        </motion.button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
