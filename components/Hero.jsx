import React from 'react';
import video1 from '../src/assets/video1.mp4';
import video2 from '../src/assets/video2.mp4';

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-8'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl 
        text-center tracking-wide'>GradifyR build tools 
        <span className='bg-gradient-to-r from-green-500 
        to-green-800 text-transparent bg-clip-text'> for developers</span></h1>
        <p className='mt-6 text-lg text-center text-neutral-500 max-w-4xl'>
          Empower your creativity and bring your VR app ideas to life with 
          our intuitive development tools. Get started today and turn your imagination 
          into immersive reality!
        </p>
        <div className='flex justify-center my-10'>
          <a href='#' className='bg-gradient-to-r 
          from-orange-500 to-orange-800 
          rounded-md p-2 mx-3 cursor-pointer'>Start for free</a>
          <a href='#' className='border
          rounded-md p-2 mx-3 cursor-pointer'>Documentation</a>
        </div>
        <div className='flex mt-6 justify-center'>
          <video autoPlay loop muted className='rounded-lg 
          w-1/2 border border-green-700 shadow-green-400 m-4'>
            <source src={video1} type='video/mp4'/>
            Your browser does not support video tags
          </video>
          <video autoPlay loop muted className='rounded-lg 
          w-1/2 border border-green-700 shadow-green-400 m-4'>
            <source src={video2} type='video/mp4'/>
            Your browser does not support video tags
          </video>
        </div>
      
    </div>
  )
}

export default Hero
