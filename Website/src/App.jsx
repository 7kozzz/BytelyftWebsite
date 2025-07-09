import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import BlindTrustGame from './sections/BlindTrustGame'
import Careers from './sections/Careers'
import ContactUs from './sections/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import ScrollToTop from './components/ScrollToTop'
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';



// Create a HomePage component that contains all your main sections
const HomePage = () => {
  return (
    <>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Hero/>
        <BlindTrustGame/>
        <section className='min-h-[35vh]'></section>
        <About/>
        <section className='min-h-[30vh]'></section>
        <Careers/>
        <section className='min-h-[15vh]'></section>
        <ContactUs/>
        <section className='min-h-[15vh]'></section>
      </div>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <div className='min-h-screen overflow-x-hidden'>
        <ScrollToTop />
        <Navbar/>
        
        <Routes>
          {/* Main homepage route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Privacy Policy route */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />



          {/* You can add more routes later */}
          <Route path="/terms-of-service" element={<div className="p-8 text-center text-white">Terms of Service - Coming Soon</div>} />
          <Route path="/cookie-policy" element={<div className="p-8 text-center text-white">Cookie Policy - Coming Soon</div>} />
          
        </Routes>
        
        {/* Footer outside main container for full width */}
        <Footer/>
      </div>
    </Router>
  )
}

export default App