import React from 'react'
import FooterCard from './FooterCard'
import {resourcesLinks, platformLinks, communityLinks} from '../src/constants/index.jsx'

const Footer = () => {
  return (
    <div className='mt-10 gap-10 justify-center items-center border-t border-neutral-700 p-6 flex flex-wrap sm:flex-col lg:flex-row'>
        {
            <FooterCard title={"Resources"} items={resourcesLinks} />
        }

        {
            <FooterCard title={"Platform"} items={platformLinks} />
        }

        {
            <FooterCard title={"Community"} items={communityLinks} />
        }
        
        
      
    </div>
  )
}

export default Footer
