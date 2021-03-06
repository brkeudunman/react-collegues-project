import React from 'react'
import logo from '../imgs/logo_submit.png'


function Header() {
  return (
    <div className='flex justify-between items-center bg-white border-solid border-b-2  md:py-4 py-2 border-metal'>

       <img
        alt='logo png'
        src={logo}
        className="md:ml-20 sm:ml-10 sm:w-auto w-12 mr-4 md:mr-0 ml-4"
       />
      
       <div className='flex items-center text-gray-700 font-bold md:text-base mr-6'  >
          <button class="fa-solid fa-circle-question md:text-xl mr-7">
          </button>

          <button class="fa-solid fa-bell md:text-xl mr-7" >
          </button>

          <button className='flex items-center md:mr-12 bg-metal px-3 rounded-lg '>
            <i class="fa-solid fa-user md:text-xl mr-3"></i>
            <p className='md:my-3 my-2 md:text-base text-sm '>A. Ozdemirden</p>
          </button>
       </div>

    </div>
  )
}

export default Header