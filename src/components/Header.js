import { Avatar, Badge, Button, Col, Row } from 'antd'
import React, { useState } from 'react'
import logo from '../imgs/logo_submit.png'
import { UserOutlined } from '@ant-design/icons';

function Header() {

  const [notCounter, setNotCounter] = useState(5)

  const decrease = ()=>{
    let newCount = notCounter - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setNotCounter(newCount);
  }

  const ico1= (<i className="md:text-xl text-gray-700 fa-solid fa-circle-question"></i>)
  const ico2 = (<i className='md:text-xl  text-gray-700 fa-solid fa-bell'> </i>)

  return (
    <Row className='flex justify-between items-center bg-white border-solid border-b-2  md:py-4 py-2 border-metal'>
      <Col>
        <img
          alt='logo png'
          src={logo}
          className="md:ml-20 sm:ml-10 sm:w-auto w-12 mr-4 md:mr-0 ml-4"
        />
       </Col>
       <div  className='flex items-center text-gray-700 font-bold md:text-base mr-6'  >
       <div className='md:mr-5'>
          <Button  ghost="true" type='text' shape='circle' block="true">
         
            {ico1}
          
          </Button>
          </div>
          <div className='md:mr-5'>
          <Button shape='circle' type='text' onClick={decrease}>
         
            <Badge count={notCounter} size="small" >
              <Avatar  style={{backgroundColor:"white"}} >
                <div>
                {ico2}
                </div>
                
              </Avatar>
            </Badge>
         
            </Button>
          </div>  
       
          <div className='flex  md:mr-12'>
            <Button style={{fontWeight:"800px",backgroundColor:"#F1F2F5",borderRadius:"8px",display:"flex",alignItems:"center",padding:"21px 14px 21px 14px"}} type='text'  icon={(  <UserOutlined style={{fontSize:"16px",marginBottom:"3px"}}/>)}> A. Ozdemirden </Button>
          </div>
       
      </div>
    </Row>
  )
}

export default Header