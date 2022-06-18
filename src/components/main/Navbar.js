import React,{useEffect, useState} from 'react'
import NavbarButton from './NavbarButton'


function Navbar({data}) {
 
  var jsonArr = data
  const [selectedElementIndex, setSelectedElementIndex] = useState(0);

  function navbarButtonClickHandler(e) {
    setSelectedElementIndex(e);
    console.log("Selected indx", selectedElementIndex);
  }

  return (
    <div className='bg-white md:mr-0 sm:mr-20 mr-0'>
      {
        jsonArr.map((element,index)=>{
          return (<NavbarButton key={index} onClickHandler={navbarButtonClickHandler} index={index} elementTo={element.to} elementText={element.text} isSelected={selectedElementIndex == index}/>)
        })
      }
    </div>
  )
}

export default Navbar