import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'

import Navbar from './main/Navbar'
import Cards from './main/Cards/Cards'
import Notifications from './main/Notifications/Notifications'


function Main() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
      
        <div className='flex md:justify-start bg-bg-metal'>
          <Navbar selectedIndex={selectedIndex}/>   
          <Routes>    
            <Route  path='/' element={<Cards></Cards>}></Route>
            <Route path='notifications' element={<Notifications></Notifications>}></Route>           
          </Routes>
        </div>
  )
}

export default Main