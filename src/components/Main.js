import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Cards from './pages/Cards/Cards'
import Notifications from './pages/Notifications/Notifications'
import Charts from './pages/Charts/Charts'
import Contact from './pages/Contact/Contact'
import Clients from './pages/Clients/Clients'
import Shipping from './pages/Shipping/Shipping'

function Main() {



  return (
   
    <div className='flex justify-center w-full'>
      <Routes>    
        <Route  path='/' element={<Cards></Cards>}></Route>
        <Route path='notifications' element={<Notifications></Notifications>}></Route>
        <Route path='charts' element={<Charts></Charts>}></Route>       
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='clients' element={<Clients></Clients>}></Route>
        <Route path='shipping' element={<Shipping></Shipping>}></Route>
      </Routes>
    </div>
       
        
  )
}

export default Main