import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' bg-blue-800 py-3'>
        <div className=' container mx-auto flex justify-between'>
          <span className=' text-3xl text-white font-bold tracking-tight'>
            <Link to='/'>Booking.com</Link>
          </span>
          <span className=' flex bg-white space-x-2'>
           <Link to='/signin' className=' flex item-center pt-1 text-blue-600 px-3 font-bold hover:bg-gray-200'>sign In</Link>
          </span>
        </div>
    </div>
  )
}

export default Header