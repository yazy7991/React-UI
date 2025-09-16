import React from 'react';
import {testimonials} from '../src/constants/index.jsx';
import TestimonialContent from './TestimonialContent.jsx';

const Testimonial = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl 
        text-center tracking-wide mb-20'>What People are saying</h1>

        <div className='flex flex-wrap justify-center items-baseline'>
            {
                testimonials.map((item,index)=>(
                    <TestimonialContent key={index} 
                    user={item.user}
                    image={item.image}
                    company={item.company}
                    text={item.text}
                    />
                ))
            }
        
        </div>
      
    </div>
  )
}

export default Testimonial
