import React from 'react'

const FooterCard = ({title,items}) => {
  return (
    <div className='p-4'>
        <p className='mb-4'>{title}</p>
    
            <ul>
                {
                    items.map((item,index)=>(
                        <li className='text-neutral-400' key={index}><a href={item.href}>{item.text}</a></li>
    
                    ))
                }
            </ul>
    </div>
  )
}

export default FooterCard
