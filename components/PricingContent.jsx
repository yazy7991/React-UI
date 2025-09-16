import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const PricingContent = ({title,price,features}) => {
    
  return (
    <div className='border border-neutral-700 rounded-md p-6'>
        <div className='text-xl tracking-wide mb-4'>{title}
            {(title === 'Pro')?<span
            className='text-sm bg-gradient-to-r from-orange-500 
        to-orange-800 text-transparent bg-clip-text '> (Most Popular)</span>:<span></span>}</div>
        <div className='text-4xl mb-4'>
            {price}
            <span className='text-sm text-neutral-400'>{" "}/Month</span>
        </div>
        <div className='mb-10'>
            {features.map((feature,index)=>(
                <div className='flex mb-4 gap-2 text-neutral-400 text-sm' key={index}>
                    <CheckCircle2 />
                    <p>{feature}</p>

                </div> 

            ))}
        </div>
        <div className='mb-4 w-full border border-orange-400 rounded-md p-2 text-center cursor-pointer hover:bg-orange-500 transition duration-200'>
            <a href='#' className=' text-white text-lg' >Subscribe</a>
        </div>
      
    </div>
  )
}

export default PricingContent
