import React from 'react'
import NavbarButton from './NavbarButton'


function Navbar() {
 
  var jsonArr = [{to:"/",text:"Home"},{to:"/notifications",text:"Notifications"},{to:"/charts",text:"Charts"}]
  var icoArr = [(<i class="ml-2 sm:text-lg fa-solid fa-house"></i>),(<i class="ml-2 text-lg fa-solid fa-book"></i>),(<i class="ml-2 text-lg fa-solid fa-chart-bar"></i>)]
 

  return (
    <div className='bg-white flex flex-col md:w-auto'>
      {
        jsonArr.map((element,index)=>{
          return (<NavbarButton elementTo={element.to} elementText={element.text} icoSelected={icoArr[index]}/>)
        })
      }
     
    </div>
  )
}

export default Navbar