import React,{useState} from 'react'
import NavbarButton from './NavbarButton'


function Navbar() {
 
  var jsonArr = [{to:"/",text:"Home"},{to:"/notifications",text:"Notifications"}]

  const [selectedIndex, setselectedIndex] = useState(0)

  return (
    <div className='bg-white md:mr-0 sm:mr-20 mr-0'>
      {
        jsonArr.map((element,index)=>{
          return (<NavbarButton onClickFunction={setselectedIndex(index)} elementTo={element.to} elementText={element.text} isSelected={selectedIndex}/>)
        })
      }
      
    </div>
  )
}

export default Navbar