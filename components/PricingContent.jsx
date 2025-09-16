import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const PricingContent = ({title,price,features}) => {
    
  return (
    <div className='border rounded-md p-6'>
        <div className='text-xl tracking-wide mb-4'>{title}
            {(title === 'Pro')?<span
            className='text-sm bg-gradient-to-r from-orange-500 
        to-orange-800 text-transparent bg-clip-text '> (Most popular)</span>:<span></span>}</div>
        <div className='text-4xl mb-4'>
            {price}
            <span className='text-sm text-neutral-500'>{" "}/Month</span>
        </div>
        <div className='mb-10'>
            {features.map((feature,index)=>(
                <div className='flex mb-4 gap-2 text-neutral-400 text-sm' key={index}>
                    <CheckCircle2 />
                    <p>{feature}</p>

                </div> 

            ))}
        </div>
        <div className='mb-4 w-full border rounded-md p-2 text-center cursor-pointer'>
            <a href='#' className='border-neutral-400 text-neutral-400 text-lg' >Subscribe</a>
        </div>
      
    </div>
  )
}

export default PricingContent
