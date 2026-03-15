import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import Resources from '../components/Resources';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Process />
            <Portfolio />
            <Packages />
            <Testimonials />
            <FAQs />
            <Resources />
        </>
    );
};

export default Home;
