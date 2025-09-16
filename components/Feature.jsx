import React from 'react'
import FeatureContent from './FeatureContent'
import {features} from '../src/constants/index'

const Feature = () => {
  return (
    <div className='flex flex-col items-center mt-6'>
        <p className='bg-gradient-to-r from-green-500 
        to-green-800 text-transparent bg-clip-text mb-10'>FEATURE</p>
        <h2 className='text-4xl sm:text-6xl lg:text-7xl mb-10'>Easily build {" "} 
            <span className='bg-gradient-to-r from-green-500 
        to-green-800 text-transparent bg-clip-text'>your code</span>
        </h2>
        <div className='flex flex-wrap mt-10 lg:mt-20'>
            {
                features.map((feature,index)=>
                (
                    <FeatureContent key={index} icon={feature.icon} text={feature.text} desc={feature.description} />

                ))
            }

        </div>
      
    </div>
  )
}

export default Feature
