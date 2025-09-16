import React from 'react'
import {pricingOptions} from '../src/constants/index.jsx'
import PricingContent from './PricingContent.jsx'

const Pricing = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl tracking-wide mb-12'>Pricing</h1>
        <div className='flex flex-col lg:flex-row gap-6'>
            {
                pricingOptions.map((item,index)=>(
                    <PricingContent key={index}
                    title={item.title}
                    price={item.price}
                    features={item.features}  
                    
                    />
                ))
            }

        </div>
      
    </div>
  )
}

export default Pricing
