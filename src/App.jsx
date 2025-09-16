import React from 'react';
import Workflow from '../components/Workflow';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero />
        <Feature />
        <Workflow />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>
      
    </>
  )
}

export default App
