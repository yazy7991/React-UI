import React from 'react'

const TestimonialContent = ({user,company,text,image}) => {
  return (
    <div className='bg-neutral-900 w-[300px] m-2 p-6'>
        <p className='mb-6 text-neutral-500'>{text}</p>
        <div className='flex items-center gap-4'>
            <div className='w-10'>
                <img className='rounded-full' src={image}/>
            </div>
            <div className='text-neutral-700'>
                <h2 className='text-xl text-neutral-500'>{user}</h2>
                <p>{company}</p>
            </div>
        </div>
      
    </div>
  )
}

export default TestimonialContent
