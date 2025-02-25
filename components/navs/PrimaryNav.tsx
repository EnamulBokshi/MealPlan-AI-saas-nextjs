import React from 'react'

function PrimaryNav() {
  return (
    <nav className='flex justify-between items-center py-4 px-5 bg-white shadow-md'>
        <div className=''>
            <a href='#' className='text-2xl font-bold text-gray-800'>MyLogo</a>
        </div>
        <div className='flex gap-3'>
            <a href='#' className='text-gray-600 hover:text-gray-800'>Home</a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>About</a>
            <a href='#' className='text-gray-600 hover:text-gray-800'>Contact</a>
        </div>
    </nav>
  )
}

export default PrimaryNav