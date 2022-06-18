import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'

import Navbar from './main/Navbar'
import Cards from './main/Cards/Cards'
import Notifications from './main/Notifications/Notifications'


function Main() {
  const navbarMenu = [{to:"/",text:"Home"},{to:"/notifications",text:"Notifications"}];
  return (
      
        <div className='flex md:justify-start bg-bg-metal'>
          <Navbar data={navbarMenu}/>   
          <Routes>    
            <Route  path='/' element={<Cards></Cards>}></Route>
            <Route path='notifications' element={<Notifications></Notifications>}></Route>           
          </Routes>
        </div>
  )
}

export default Main