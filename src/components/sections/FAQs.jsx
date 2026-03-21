import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Why these PRICES? Isn’t this EXPENSIVE?',
        answer: 'Happywinds Logo started to help users that didn\'t have a great budget. If you think that our prices are expensive, please check our Creativity which is absolutely in line with our prices. Logo design cost is a one-time investment which directly impacts your profits. A good branding can upscale the image of your brand. We believe our prices vs. value of delivery is reasonable.'
    },
    {
        question: 'Which PACKAGE will be best for me?',
        answer: 'Number of Unique Logo Concepts, Revisions and Stationary are the main differences. Silver Package is mostly preferred by Proprietorship & Partnership firms. Gold is the most popular package (Start Up Pvt. Ltd and LLPs), covering everything in Platinum with slightly less quantity. Established Corporates prefer Platinum.'
    },
    {
        question: 'What if we do not like given UNIQUE OPTIONS?',
        answer: 'Happywinds Logo has been in this field for a decade. Very rarely has a customer not chosen from the given concepts. We can give additional concepts by upgrading the package. If you wish to drop the project and do not use presented options, billing will be 50% discounted.'
    },
    {
        question: 'What are the REVISIONS?',
        answer: 'REVISIONS are changes required by customers related to the delivered logos such as: add or remove details, make color variations, fix text, etc. REVISIONS aren\'t different design concepts of the same logo.'
    },
    {
        question: 'I have MY OWN LOGO IDEA. Can you develop it?',
        answer: 'Sure, you can draw your own idea on paper, click it and send us. We will redesign it on a vector platform and add it as one of the options along with our Ideas. Let’s compete – You choose the best you find.'
    },
    {
        question: 'Is your work UNIQUE? What if we don’t get TM?',
        answer: 'Your logo will be specifically designed from scratch. All intellectual property rights are assigned to you. In future, if you face any difficulties in TM due to resemblance, we are committed to Completely Redesign your Logo Free of Cost or Money Back, whichever is preferable.'
    },
    {
        question: 'Where is your OFFICE LOCATED? How can we MEET?',
        answer: 'We are based at Ahmedabad, Gujarat, catering to domestic and international customers. We find one-line messages on Whatsapp or a Mail/Call sufficient. Meetings often do not yield ROTI (Return on Time Invested). If necessary, we meet on Webex or Whatsapp Video Call.'
    },
    {
        question: 'How will you COMMUNICATE and send FINAL FILES?',
        answer: 'Currently, Whatsapp is the best platform to send Logo Options to show. We shall send you final High resolution files on e-mail. We assure total ease of communication and stage-wise updates.'
    }
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="section" style={{ background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Common Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{ background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', fontWeight: '500', fontSize: '1.1rem' }}
                            >
                                {faq.question}
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
