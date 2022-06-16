import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './main/Navbar'
import Cards from './main/Cards/Cards'
import Notifications from './main/Notifications/Notifications'

function Main() {
  return (
      <BrowserRouter>
        <div className='flex bg-bg-metal'>
          <Navbar/>   
          <Routes>
            <Route path='/' element={<Cards></Cards>}></Route>
            <Route path='notifications' element={<Notifications></Notifications>}></Route>
          </Routes>
        </div>
       
      </BrowserRouter>
        
      
  )
}

export default Main