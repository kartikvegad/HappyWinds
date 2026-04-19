import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import InteractiveParticles from './components/ui/InteractiveParticles';

import WhatsAppButton from './components/layout/WhatsAppButton';
import BackToTop from './components/layout/BackToTop';

import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="app">

        <WhatsAppButton />
        <BackToTop />

        <InteractiveParticles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
