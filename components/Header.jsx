import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-20 bg-gray-600 px-2 py-4 h-[90vh]'>
        <div className='bg-amber-800 w-[20%], h-[10%]'>
            <p>logo</p>
        </div>
        <ul className='flex justify-end space-x-2 w-[80%] h-[10%] bg-amber-200'>
            <li>Home </li>
            <li>About Us</li>
            <li>Testimonial</li>
            <li>Services</li>
            <li>Listing</li>
        </ul>
    </div>
  )
}

export default Header
