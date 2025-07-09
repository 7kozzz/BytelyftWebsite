import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import BlindTrustGame from './sections/BlindTrustGame'
import Careers from './sections/Careers'
import ContactUs from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      {/* Main content container */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Navbar/>
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
      {/* Footer outside main container for full width if needed */}
      <Footer/>
    </div>
  )
}

export default App