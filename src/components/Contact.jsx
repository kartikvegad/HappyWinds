import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Globe, FileText, CheckCircle2, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Send, HelpCircle, Briefcase, DollarSign, Target, Check } from 'lucide-react';

const CustomCalendar = ({ selectedDate, onSelect, onClose }) => {
    const [viewDate, setViewDate] = useState(selectedDate || new Date());
    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);

    const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
    const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

    const handleDateClick = (day) => {
        if (isPastDate(day)) return;
        const newDate = new Date(year, month, day);
        onSelect(newDate);
        onClose();
    };

    const isToday = (day) => {
        const today = new Date();
        return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    };

    const isSelected = (day) => {
        return selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
    };

    const isPastDate = (day) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const checkDate = new Date(year, month, day);
        return checkDate < today;
    };

    return (
        <div className="calendar-popover" onClick={(e) => e.stopPropagation()}>
            <div className="calendar-header">
                <button type="button" onClick={prevMonth} className="btn-icon"><ChevronLeft size={18} /></button>
                <div style={{ fontWeight: 600 }}>{monthNames[month]} {year}</div>
                <button type="button" onClick={nextMonth} className="btn-icon"><ChevronRight size={18} /></button>
            </div>
            <div className="calendar-grid">
                {weekDays.map(day => (
                    <div key={day} className="calendar-day-label">{day}</div>
                ))}
                {[...Array(startDay)].map((_, i) => (
                    <div key={`empty-${i}`} className="calendar-day empty" />
                ))}
                {[...Array(totalDays)].map((_, i) => {
                    const day = i + 1;
                    const past = isPastDate(day);
                    return (
                        <div
                            key={day}
                            onClick={() => handleDateClick(day)}
                            className={`calendar-day ${isToday(day) ? 'today' : ''} ${isSelected(day) ? 'selected' : ''} ${past ? 'past' : ''}`}
                            style={{
                                opacity: past ? 0.3 : 1,
                                cursor: past ? 'not-allowed' : 'pointer',
                                pointerEvents: past ? 'none' : 'auto'
                            }}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const CustomSelect = ({ options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="custom-select-container" ref={containerRef}>
            <div
                className={`custom-select-trigger ${value ? 'has-value' : ''} ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{value || placeholder}</span>
                <ChevronRight size={18} className={`chevron ${isOpen ? 'rotate' : ''}`} />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="custom-select-options shadow-lg"
                    >
                        {options.map(opt => (
                            <div
                                key={opt}
                                className={`custom-select-option ${value === opt ? 'active' : ''}`}
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                            >
                                {opt}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        projectBrief: '',
        services: [],
        startDate: null,
        deadline: '',
        budget: '',
        selectedPackage: '',
        source: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const calendarRef = useRef(null);

    const serviceOptions = [
        "Brand Strategy", "Brand Identity", "Design", "Product Design", "Copywriting", "Other"
    ];

    const budgetOptions = [
        "₹10,000 - ₹20,000", "₹20,000 - ₹35,000", "₹35,000 - ₹50,000", "₹50,000+"
    ];

    const packageOptions = [
        { name: "Foundation", price: "₹9,500" },
        { name: "Identity", price: "₹14,500" },
        { name: "Signature", price: "₹18,500" },
        { name: "Studio", price: "₹30,800" },
        { name: "Custom", price: "Quote" }
    ];

    const sourceOptions = [
        "Referral", "Instagram", "LinkedIn", "Google", "Other"
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleService = (service) => {
        setFormState(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const payload = {
                ...formState,
                startDate: formState.startDate ? formState.startDate.toLocaleDateString() : 'Flexible'
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you! Your project details have been received and the Team will contact you soon.' });
                setFormState({
                    name: '', email: '', phone: '', website: '',
                    projectBrief: '', services: [], startDate: null,
                    deadline: '', budget: '', selectedPackage: '', source: ''
                });
                // Optional: Scroll to top of form or status message
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
            <div className="container" style={{ maxWidth: '1000px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ marginBottom: '1rem' }}>Start Your Project</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Ready to elevate your brand? Fill out the form below and let's discuss how we can bring your vision to life.
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
                        <p style={{ maxWidth: '500px', margin: '0 auto' }}>
                            {status.message}
                        </p>
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

                        {/* Section 1: Basic Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="form-section shadow-sm"
                        >
                            <h3 className="form-group-title"><User size={20} /> Basic Details</h3>
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
                                <div>
                                    <label className="input-label">Current Website URL (optional)</label>
                                    <input
                                        type="text"
                                        className="custom-input"
                                        placeholder="https://yourwebsite.com"
                                        value={formState.website}
                                        onChange={e => setFormState(prev => ({ ...prev, website: e.target.value }))}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 2: Project Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="form-section shadow-sm"
                        >
                            <h3 className="form-group-title"><Briefcase size={20} /> Project Overview</h3>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <label className="input-label">Project Brief</label>
                                <textarea
                                    className="custom-input"
                                    rows="5"
                                    style={{ resize: 'vertical', minHeight: '120px' }}
                                    placeholder="Tell us about your brand, your goals, and what you hope to achieve with this project..."
                                    value={formState.projectBrief}
                                    onChange={e => setFormState(prev => ({ ...prev, projectBrief: e.target.value }))}
                                    required
                                ></textarea>
                                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--color-text-secondary)', opacity: 0.7 }}>
                                    Tip: The more detail you provide, the better we can understand your needs.
                                </p>
                            </div>
                            <div>
                                <label className="input-label" style={{ marginBottom: '1rem' }}>Services Required</label>
                                <div className="chips-container">
                                    {serviceOptions.map(service => (
                                        <div
                                            key={service}
                                            className={`chip ${formState.services.includes(service) ? 'active' : ''}`}
                                            onClick={() => toggleService(service)}
                                        >
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 3: Timeline & Budget */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="form-section shadow-sm"
                        >
                            <h3 className="form-group-title"><DollarSign size={20} /> Timeline & Budget</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div className="calendar-wrapper" ref={calendarRef}>
                                    <label className="input-label">Preferred Start Date</label>
                                    <div
                                        className="custom-input"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
                                        onClick={() => setShowCalendar(!showCalendar)}
                                    >
                                        <CalendarIcon size={18} style={{ opacity: 0.6 }} />
                                        <span>{formState.startDate ? formState.startDate.toDateString() : "Select a date"}</span>
                                    </div>
                                    <AnimatePresence>
                                        {showCalendar && (
                                            <CustomCalendar
                                                selectedDate={formState.startDate}
                                                onSelect={(date) => setFormState(prev => ({ ...prev, startDate: date }))}
                                                onClose={() => setShowCalendar(false)}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div>
                                    <label className="input-label">Do You Have a Deadline?</label>
                                    <div className="segmented-control" style={{ maxWidth: '350px' }}>
                                        {['Yes', 'No', 'Asap'].map(option => (
                                            <div
                                                key={option}
                                                className={`segment ${formState.deadline === option ? 'active' : ''}`}
                                                onClick={() => setFormState(prev => ({ ...prev, deadline: option }))}
                                            >
                                                {option === 'Asap' ? 'Asap' : option}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="input-label">Estimated Budget</label>
                                    <CustomSelect
                                        options={budgetOptions}
                                        value={formState.budget}
                                        onChange={val => setFormState(prev => ({ ...prev, budget: val }))}
                                        placeholder="Select range"
                                    />
                                    <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--color-text-secondary)', opacity: 0.8 }}>
                                        Transparent budgets help us recommend the right solution.
                                    </p>
                                </div>

                                <div style={{ minWidth: '100%' }}>
                                    <label className="input-label" style={{ marginBottom: '1rem' }}>Interested Package</label>
                                    <div className="chips-container">
                                        {packageOptions.map(pkg => (
                                            <div
                                                key={pkg.name}
                                                className={`chip ${formState.selectedPackage === pkg.name ? 'active' : ''}`}
                                                onClick={() => setFormState(prev => ({ ...prev, selectedPackage: pkg.name }))}
                                            >
                                                {pkg.name} ({pkg.price})
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 4: Discovery */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="form-section shadow-sm"
                        >
                            <h3 className="form-group-title"><Target size={20} /> Discovery</h3>
                            <div>
                                <label className="input-label">How Did You Hear About Us?</label>
                                <CustomSelect
                                    options={sourceOptions}
                                    value={formState.source}
                                    onChange={val => setFormState(prev => ({ ...prev, source: val }))}
                                    placeholder="Please select"
                                />
                            </div>
                        </motion.div>

                        {/* Error Message */}
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

                        {/* Submit Button */}
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
                                    Start My Project <Send size={20} />
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
