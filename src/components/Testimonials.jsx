import React, { useRef } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';

const testimonials = [
    { text: "My journey with Happywinds Logo started 9 years back. They have designed extraordinary logos for my 3 companies. The best part is that they put their HEART in the work.", author: "Dr. Hiren Patel", role: "O3 Physio, Ahmedabad", image: "/reviews/o3.png" },
    { text: "We have worked with Happywinds Logo for several years and we find their creativity and attention to details are superior to any other designers we have worked with.", author: "Viral Patel", role: "Dinner Bell, Australia", image: "/reviews/dinnerbell.png" },
    { text: "Happywinds Logo has a keen eye for color, type and composition and takes a thoughtful approach for designing a logo. I was always impressed by their team.", author: "Nirav Shah", role: "Evaluation Expertz, Ahmedabad", image: "/reviews/evaluation.png" },
    { text: "I would like to say a big thank you to Happywinds Logo. It took multiple revisions to get what I wanted. Happywinds Logo did this without any complaint.", author: "Niren Shah", role: "Navkar Builders, Ahmedabad", image: "/reviews/navkar builders.png" },
    { text: "Very refreshing creativity! We used Happywinds Logo to design our new corporate identity, stationery and leaflet guide. Outstanding detail.", author: "Vinod Chatwani", role: "Nirja Gruh Udhyog, Ahmedabad", image: "/reviews/nirja.png" },
    { text: "The team at Happy Winds is exceptional. They didn't just design a logo; they built a brand identity that reflects our values perfectly.", author: "Arun Kodi", role: "Bluepanda Digital Solutions Pvt. Ltd., Coimbatore", image: "/reviews/BluePanda.png" },
    { text: "Fast, professional, and incredibly creative. I've recommended Happy Winds to all my business associates.", author: "Alok Agrawal", role: "Caremate Pharma Pvt. Ltd., Lucknow", image: "/reviews/caremate.png" },
    { text: "Their process is so smooth. They took the time to understand our vision and delivered something far beyond our expectations.", author: "Chiranjit Burha", role: "Chroma Biotech LLP, Dibrugarh", image: "/reviews/chroma.png" },
    { text: "The quality of work is top-notch. Every detail was meticulously crafted. Truly a premium agency experience.", author: "Siddharth Shah", role: "Foodelicious, Surat", image: "/reviews/food.png" },
    { text: "Happy Winds helped us transform our local business into a brand that stands out nationally. Forever grateful!", author: "Dinesh Rao", role: "Home in the City, Mumbai", image: "/reviews/home.png" },
    { text: "Excellent communication and brilliant design work. They are my go-to for anything branding related.", author: "Harmeet Singh", role: "Rich Mmoo, Bangalore", image: "/reviews/mmoo.png" },
    { text: "I was skeptical about finding a good designer online, but Happy Winds exceeded every expectation. 5 stars!", author: "Nikunj Bavaliya", role: "Shreya Wallets, Bhavnagar", image: "/reviews/shreya.png" },
    { text: "They have a unique ability to capture a brand's essence in a simple yet powerful mark. Fantastic work.", author: "Shanjeev Balajothi", role: "Ayari Venture Pvt. Ltd., Tiruppur", image: "/reviews/siddhi.png" },
    { text: "Professionalism at its best. The Final designs were delivered on time and were perfect on the first go.", author: "Mohd. Hussain", role: "Valenchi, Zambia", image: "/reviews/valenchi.png" }
];

const Testimonials = () => {
    const [width, setWidth] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const containerRef = useRef();
    const carouselRef = useRef();
    const controls = useAnimation();
    const x = useMotionValue(0);

    // Double for ring effect
    const loopedReviews = [...testimonials, ...testimonials];

    React.useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth;
            setWidth(scrollWidth / 2);
        }
    }, [testimonials]);

    const startAutoMove = async () => {
        await controls.start({
            x: -width,
            transition: {
                duration: 40,
                ease: "linear",
                repeat: Infinity
            }
        });
    };

    React.useEffect(() => {
        if (!isPaused && width > 0) {
            startAutoMove();
        } else {
            controls.stop();
        }
    }, [isPaused, width]);

    return (
        <section id="reviews" className="section" style={{ background: 'transparent', overflow: 'hidden' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    Client Words
                </motion.h2>
            </div>

            <div
                className="carousel-container"
                ref={carouselRef}
                style={{ overflow: 'hidden', cursor: 'grab' }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    ref={containerRef}
                    drag="x"
                    dragElastic={0.1}
                    style={{ display: 'flex', gap: '1.5rem', width: 'max-content', paddingLeft: '2rem', x }}
                    animate={controls}
                    dragConstraints={{ left: -width, right: 0 }}
                    onDragStart={() => setIsPaused(true)}
                    onDragEnd={() => setIsPaused(false)}
                    whileTap={{ cursor: "grabbing" }}
                    onUpdate={(latest) => {
                        if (latest.x <= -width) {
                            x.set(0);
                        } else if (latest.x > 0) {
                            x.set(-width);
                        }
                    }}
                >
                    {loopedReviews.map((t, index) => (
                        <motion.div
                            key={index}
                            className="card-interactive testimonial-card"
                            style={{
                                minWidth: '320px',
                                maxWidth: '320px',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'var(--color-bg-card)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-border)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'var(--color-bg-secondary)',
                                    border: '1px solid var(--color-border)',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={t.image}
                                        alt={t.author}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.style.background = 'var(--color-bg-secondary)';
                                            e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--color-text-secondary);font-size:1.2rem;font-weight:600">${t.author[0]}</div>`;
                                        }}
                                    />
                                </div>
                            </div>
                            <p style={{
                                fontSize: '0.95rem',
                                marginBottom: '1.5rem',
                                fontStyle: 'italic',
                                flex: 1,
                                lineHeight: 1.6,
                                color: 'inherit',
                                transition: 'color 0.3s ease'
                            }}>"{t.text}"</p>
                            <div>
                                <p style={{
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    color: 'inherit',
                                    transition: 'color 0.3s ease'
                                }}>{t.author}</p>
                                <p style={{
                                    fontSize: '0.85rem',
                                    opacity: 0.6,
                                    color: 'inherit',
                                    transition: 'color 0.3s ease'
                                }}>{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
