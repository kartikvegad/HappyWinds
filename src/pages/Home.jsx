import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Process from '../components/sections/Process';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';
import Packages from '../components/sections/Packages';
import Testimonials from '../components/sections/Testimonials';
import FAQs from '../components/sections/FAQs';
import Resources from '../components/sections/Resources';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <Services />
            <Process />
            <Packages />
            <Testimonials />
            <FAQs />
            <Resources />
        </>
    );
};

export default Home;
