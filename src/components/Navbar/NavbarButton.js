import React from 'react'
import { NavLink} from 'react-router-dom'


function NavbarButton({elementTo,elementText,icoSelected}) {

  var activeClassName = 'flex items-center text-white hover:text-white bg-primary-500 active:bg-primary-500 rounded py-1.5 ml-2 mt-3 mx-2 lg:pr-52 md:pr-40 sm:pr-16 pr-2'
  var passiveClassName = 'flex items-center text-gray-500 hover:text-white hover:bg-primary-500 active:bg-primary-500 rounded py-1.5 ml-2 mt-3 mx-2 lg:pr-52 md:pr-40 sm:pr-16 '
  


  return (
    <NavLink 
      to={elementTo} 
      className={({ isActive }) =>
                isActive ? activeClassName : passiveClassName}>
      {icoSelected}
      <p className='ml-2 mr-10 my-0 hidden sm:block'>{elementText}</p>
    </NavLink>
  )
}

export default NavbarButton