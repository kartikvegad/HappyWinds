import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const projects = [
    { title: "Tasty Wave", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-01.png" },
    { title: "Bartan Bazar", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-02.png" },
    { title: "Dream Heritage Holidays", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-03.png" },
    { title: "Caremate Pharmaceuticals", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-04.png" },
    { title: "Footmark", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-05.png" },
    { title: "O3 Physio Clinic", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-06.png" },
    { title: "Kumar Cards", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-08.png" },
    { title: "Bared Monkey Laser Spa", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-09.png" },
    { title: "Namkeenmart", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-10.png" },
    { title: "Catch Aloha Foundation", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-12.png" },
    { title: "Alpha Shooters", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-13.png" },
    { title: "Audiobreeze", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-14.png" },
    { title: "ChatBots & Learning Labs", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-16.png" },
    { title: "DigitalBlock Securities", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-17.png" },
    { title: "B2 Motorsports", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-18.png" },
    { title: "Olive & Blonde", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-19.png" },
    { title: "Sweets By The Pound L.L.C", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-20.png" },
    { title: "Trueblox", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-22.png" },
    { title: "Atlantic Ocean Marine & Shipping Services", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-24.png" },
    { title: "VW Podcast", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-25.png" },
    { title: "Black Diamond Development", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-26.png" },
    { title: "Course Bridge", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-27.png" },
    { title: "Danger Soup", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-28.png" },
    { title: "Fly Tools", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-29.png" },
    { title: "KidRags.com", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-30.png" },
    { title: "Koma", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-31.png" },
    { title: "Lubna Foods Ltd.", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-33.png" },
    { title: "Authentic Nature", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-34.png" },
    { title: "Pacote.co", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-35.png" },
    { title: "QuickByte", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-36.png" },
    { title: "Home in the City", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-39.png" },
    { title: "Killoff", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-40.png" },
    { title: "Bluepanda Digital Solution Pvt. Ltd.", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-45.png" },
    { title: "Siddhi Builders and Developers Pvt. Ltd.", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-46.png" },
    { title: "Siddhi Solar", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-47.png" },
    { title: "Sumukha Dairy Farm", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-48.png" },
    { title: "Foodelicious", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-50.png" },
    { title: "Chroma Biotech", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-51.png" },
    { title: "curioUS:mIND", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-52.png" },
    { title: "Medielect", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-53.png" },
    { title: "Rich Mmoo", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-54.png" },
    { title: "ChaiBot", image: "/portfolio/lOGOS PNG/2021 PNG LOGO PROFILE-55.png" },
    { title: "BTW Financial Services & IMF Pvt. Ltd.", image: "/portfolio/lOGOS PNG/BTW_BTW final logo.jpg" },
    { title: "Svasthya ", image: "/portfolio/lOGOS PNG/Bhumi.Svasthyaall_Main Logo top icon.png" },
    { title: "Bright Force Technologies", image: "/portfolio/lOGOS PNG/Bright Force Logo_main logo.png" },
    { title: "Centinel", image: "/portfolio/lOGOS PNG/CONTE-03.png" },
    { title: "Concerto Sound & Stands", image: "/portfolio/lOGOS PNG/Concerto Final PNG.png" },
    { title: "Echelon Property Management", image: "/portfolio/lOGOS PNG/EchelonPropertyManagement3-01.png" },
    { title: "Encore Realty", image: "/portfolio/lOGOS PNG/Encore Dark Steel for light BG Optional Logo. PNG-01-01.png" },
    { title: "Nirja Gruh Udhyog", image: "/portfolio/lOGOS PNG/Final Logo Nirja Gruh Udhyog-03.png" },
    { title: "Munchify", image: "/portfolio/lOGOS PNG/Final Manchify logo files_logo with red color.png" },
    { title: "High Ninez Insurance Brokers Pvt.Ltd.", image: "/portfolio/lOGOS PNG/High 9nz final file-08.png" },
    { title: "Laundry Spark", image: "/portfolio/lOGOS PNG/LAUNDRY.ALLMOST FINAL.ANIL-05.png" },
    { title: "Philomex", image: "/portfolio/lOGOS PNG/Pholomex Branding TM-04.png" },
    { title: "Ramdev Jewllwers", image: "/portfolio/lOGOS PNG/RAMDEV j-14.png" },
    { title: "Sheshu's Food Delight", image: "/portfolio/lOGOS PNG/SHESHU-02.png" },
    { title: "TaiyouSom Metachem", image: "/portfolio/lOGOS PNG/TAIYOU-03.png" },
    { title: "KEPL Healthcare", image: "/portfolio/lOGOS PNG/all visiting card copy-14.png" },
    { title: "Amantra Investment Pvt. Ltd.", image: "/portfolio/lOGOS PNG/amantra-02.png" },
    { title: "Atulya Remedies Pvt. Ltd.", image: "/portfolio/lOGOS PNG/atulya logo final file_Atulaya blue logo.png" },
    { title: "Conch Shell Real Estate Pvt. Ltd.", image: "/portfolio/lOGOS PNG/conch-04.png" },
    { title: "Dinner Bell Indian Cuisine", image: "/portfolio/lOGOS PNG/dinner bell-01.png" },
    { title: "Evaluation Expertz", image: "/portfolio/lOGOS PNG/evaluation.png" },
    { title: "Mahameru Estate", image: "/portfolio/lOGOS PNG/fianal file mahameru_main logo.png" },
    { title: "Interior Circle", image: "/portfolio/lOGOS PNG/final files interial circle-02.png" },
    { title: "Walso", image: "/portfolio/lOGOS PNG/final files of walso-04.png" },
    { title: "Shree Damodar Auto Body Builders Pvt. Ltd.", image: "/portfolio/lOGOS PNG/final files_main logo.png" },
    { title: "Aadhyatmik Darpan", image: "/portfolio/lOGOS PNG/final-01.png" },
    { title: "Flytools", image: "/portfolio/lOGOS PNG/flytools-03.png" },
    { title: "Forrise", image: "/portfolio/lOGOS PNG/forrice final files_yellow logo.png" },
    { title: "Keychip Solutions", image: "/portfolio/lOGOS PNG/keychip final file_gradint color.png" },
    { title: "Kristech Visions", image: "/portfolio/lOGOS PNG/kristech Visions-01.png" },
    { title: "Lavo", image: "/portfolio/lOGOS PNG/lavo final file_visiting card back rajmohan.png" },
    { title: "Max TechWorks", image: "/portfolio/lOGOS PNG/maxtech final file-04.png" },
    { title: "Medicas Manus", image: "/portfolio/lOGOS PNG/medicas Menus_medicas manus final logo.png" },
    { title: "Mind O", image: "/portfolio/lOGOS PNG/mind o_logo with sky color.jpg" },
    { title: "Nihoma Boats", image: "/portfolio/lOGOS PNG/nihoma final file-01.png" },
    { title: "OrgOrbit", image: "/portfolio/lOGOS PNG/orbit-06.png" },
    { title: "Prasatti Global Solutions", image: "/portfolio/lOGOS PNG/prasatti logo_maiin logo.png" },
    { title: "Rostrum Mike & Stands", image: "/portfolio/lOGOS PNG/rostrum-01.png" },
    { title: "Story House", image: "/portfolio/lOGOS PNG/story.png" },
    { title: "Unike", image: "/portfolio/lOGOS PNG/unike-03-02.png" },
    { title: "Vilambo", image: "/portfolio/lOGOS PNG/vilambo logo-02.png" },
    { title: "J & J Ventures", image: "/portfolio/lOGOS PNG/visiting card copy11 copy_main logo.png" },
    { title: "Vito Hospitality", image: "/portfolio/lOGOS PNG/visiting card-05.png" },
    { title: "Yana Foundation", image: "/portfolio/lOGOS PNG/yana(logo,LH,VC)_yana visiting card front copy.png" },
    { title: "Zero Zahar", image: "/portfolio/lOGOS PNG/zerozaher-01.png" }
];

const PortfolioLogo = ({ proj }) => (
    <div
        className="portfolio-square-item card-interactive"
        style={{
            flex: '0 0 240px',
            width: '240px',
            aspectRatio: '1/1',
            background: 'var(--color-bg-card)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            position: 'relative',
        }}
    >
        <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '0.75rem',
            height: 'calc(100% - 24px)',
            background: 'white',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.02)'
        }}>
            <img
                src={proj.image}
                alt={proj.title}
                className="portfolio-img"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none'
                }}
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span style="font-size: 0.9rem; font-weight: 500; text-align: center;">${proj.title}</span>`;
                }}
            />
        </div>

        {/* Placeholder title section */}
        <div style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            textAlign: 'center',
        }}>
            {proj.title}
        </div>
    </div>
);

const MarqueeRow = ({ items, direction = 'left' }) => {
    const rowRef = useRef();
    const [setWidth, setSetWidth] = useState(0);
    const x = useMotionValue(0);
    const controls = useAnimation();

    // Loop items to create a seamless infinite scroll effect
    const loopedItems = [...items, ...items];

    useEffect(() => {
        if (rowRef.current) {
            // Half the total width because we have 2 copies of the items array
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
                    // Calculate next position
                    if (direction === 'left') {
                        currentPos -= logoFullWidth;
                    } else {
                        currentPos += logoFullWidth;
                    }

                    await controls.start({
                        x: currentPos,
                        transition: {
                            duration: 1.2, // Slower sliding animation
                            ease: [0.16, 1, 0.3, 1]
                        }
                    });

                    // Loop reset
                    if (direction === 'left' && currentPos <= -setWidth) {
                        currentPos = 0;
                        x.set(0);
                    } else if (direction === 'right' && currentPos >= 0) {
                        currentPos = -setWidth;
                        x.set(-setWidth);
                    }

                    // Slower pause between shifts (3 seconds instead of 1.2s)
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
            };

            startSteppedAnimation();
        }
    }, [setWidth, direction, items.length]);

    return (
        <div style={{ overflow: 'hidden', padding: '1rem 0' }}>
            <motion.div
                ref={rowRef}
                style={{
                    display: 'flex',
                    gap: '1.25rem',
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
    // 93 logos evenly split into 3 rows (31 elements per row)
    const row1 = projects.slice(0, 31);
    const row2 = projects.slice(31, 62);
    const row3 = projects.slice(62, 93);

    return (
        <section id="portfolio" className="section" style={{ background: 'transparent', overflow: 'hidden', padding: '10rem 0' }}>
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

            <div className="portfolio-rows" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <MarqueeRow items={row1} direction="left" />
                <MarqueeRow items={row2} direction="right" />
                <MarqueeRow items={row3} direction="left" />
            </div>

            <style>
                {`
                    .portfolio-img {
                        transition: filter 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        filter: grayscale(100%);
                        transform: scale(1.1);
                    }
                    .portfolio-square-item:hover .portfolio-img {
                        filter: grayscale(0%);
                        transform: scale(1.15);
                    }
                    @media (max-width: 1024px) {
                        .portfolio-square-item {
                            flex: 0 0 180px !important;
                            width: 180px !important;
                            padding: 1rem !important;
                        }
                    }
                    @media (max-width: 640px) {
                        .portfolio-square-item {
                            flex: 0 0 130px !important;
                            width: 130px !important;
                            padding: 0.75rem !important;
                        }
                        .portfolio-square-item div:first-child {
                            margin-bottom: 0.5rem !important;
                        }
                        .portfolio-square-item > div:last-child {
                            font-size: 0.75rem !important;
                        }
                `}
            </style>
        </section>
    );
};

export default Portfolio;
