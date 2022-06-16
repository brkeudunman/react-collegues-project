import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-white'>
      <Link to="/" className='flex items-center text-gray-500 hover:text-white hover:bg-primary-500 active:bg-primary-500 rounded py-1.5 ml-2 mt-3 mx-2    lg:pr-52 md:pr-40 sm:pr-16 pr-4'><i class="ml-2 text-lg fa-solid fa-house"></i><p className='ml-2 mr-10'>Home</p></Link>
      <Link to="/notifications" className='flex items-center text-gray-500 hover:text-white hover:bg-primary-500 active:bg-primary-500 rounded py-1.5 ml-2 mt-3 mx-2 lg:pr-52 md:pr-40 sm:pr-16 pr-4'><i class="ml-2 text-lg fa-solid fa-file-invoice"></i><p className='ml-2'>Notifications</p></Link>
    </div>
  )
}

export default Navbar