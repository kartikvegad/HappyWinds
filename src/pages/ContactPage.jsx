import React, { useEffect } from 'react';
import Contact from '../components/forms/Contact';

const ContactPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '120px' }}> {/* Add padding for the fixed navbar */}
            <Contact />
        </div>
    );
};

export default ContactPage;
