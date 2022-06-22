import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Navbar from './main/Navbar'
import Cards from './main/Cards/Cards'
import Notifications from './main/Notifications/Notifications'
import Charts from './main/Charts/Charts'


function Main() {


  return (
      
        <div className='flex md:justify-start bg-bg-metal'>
          <Navbar/>   
          <Routes>    
            <Route  path='/' element={<Cards></Cards>}></Route>
            <Route path='notifications' element={<Notifications></Notifications>}></Route>
            <Route path='charts' element={<Charts></Charts>}></Route>         
          </Routes>
        </div>
  )
}

export default Main