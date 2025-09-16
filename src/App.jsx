import React from 'react';
import Workflow from '../components/Workflow';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero />
        <Feature />
        <Workflow />
        <Pricing />
      </div>
      
    </>
  )
}

export default App
