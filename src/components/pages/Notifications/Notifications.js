import { Card } from 'antd'
import React, { useState } from 'react'

function Notifications() {
  const [hover, setHover] = useState([false,false,false]);
  const [display,setDisplay]= useState(true);

  const header = (<h1 className='font-semibold text-sm mb-4'>Notification Header</h1>)


  const cardStyle = ({hover},i,display)=>(
    {
      backgroundColor: hover[i] ? "#FFFFFF":"#EDF2F7",
      border: "1px solid #EDF2F7",
      borderRadius:"8px",
      boxShadow:"0px 4px 4px rgba(188, 192, 196, 0.05)",
      paddingLeft:"28px",
      display: display ? "inline":"none"
    }
  )


  return (
    <div className='text-gray-700 pb-4'>
      <h1 className='md:text-4xl text-2xl font-bold text-gray-700 md:mt-8 mt-4 md:ml-12 md:text-start text-center mb-8'>Notifications </h1>
      <div className='flex md:ml-12 ml-3   mt-4 mx-auto mr-3 ' >
      <Card 
          bordered={true} 
          style={cardStyle({hover},0,{display})}
          hoverable
          onPointerOver={()=> setHover([true,false,false])}
          onPointerOut={() => setHover(false,false,false)}>
      <div>
      {header}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim</p>
        
      </div>
      </Card>
    
    </div>
      
      <div className='flex md:ml-12 ml-3   mt-4 mx-auto mr-3 ' >
      <Card 
        bordered={true} 
        style={cardStyle({hover},1,{display})}
        onPointerOver={()=> setHover([false,true,false])}
        onPointerOut={() => setHover([false,false,false])} 
        onClick={()=>(setDisplay(false))}>
        <div>
        {header}
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.</p>
          <p>Card content</p>
        </div>
      </Card>
    
    </div>
      <div className='flex md:ml-12 ml-3 mt-4 mx-auto mr-3 ' >
        <Card 
          bordered={true} 
          style={cardStyle({hover},2,{display})}
          onPointerOver={()=> setHover([false,false,true])}
          onPointerOut={() => setHover(false,false,false)}>

          <div>
            {header}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.</p>
            <p>Card content</p>
          </div>
        </Card>
      
      </div>

     
    
    </div>
  )
}

export default Notifications