import React,{useState} from 'react'
import NavbarButton from './NavbarButton'


function Navbar() {
 
  var jsonArr = [{to:"/",text:"Home"},{to:"/notifications",text:"Notifications"}]

  const [selectedIndex, setselectedIndex] = useState(0)

  return (
    <div className='bg-white md:mr-0 sm:mr-20 mr-0'>
      {
        jsonArr.map((element)=>{
          return (<NavbarButton elementTo={element.to} elementText={element.text} selectedIndex={selectedIndex}/>)
        })
      }
     
    </div>
  )
}

export default Navbar