import React from 'react'
import logo from '../imgs/logo_submit.png'


function Header() {
  return (
    <div className='flex justify-between items-center bg-white border-solid border-b-2  py-4 border-metal'>

       <img
        alt='logo png'
        src={logo}
        className="md:ml-20 ml-10"
       />
      
       <div className='flex items-center text-gray-700 font-bold md:text-base'  >
          <button class="fa-solid fa-circle-question md:text-xl mr-7">
          </button>

          <button class="fa-solid fa-bell md:text-xl mr-7" >
          </button>

          <button className='flex items-center mr-12 bg-metal px-3 rounded-lg '>
            <i class="fa-solid fa-user md:text-xl mr-3"></i>
            <p className='my-3 '>A. Ozdemirden</p>
          </button>
       </div>

    </div>
  )
}

export default Header