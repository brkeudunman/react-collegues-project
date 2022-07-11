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
    <Row  wrap={false} justify='space-between' className=' bg-white border-solid border-b-2  md:py-4 py-2 border-metal'>
      <Col  >
        <img
          alt='logo png'
          src={logo}
          className="sm:w-auto mt-1 w-12 md:mr-0 ml-8"
        />
       </Col>

      <Col className='mr-8 md:mr-12' >
        <Row wrap={false}  >
          <Col >
          <Button size='large' icon={ico1} type='text' shape='circle' block="true">
          </Button>
          </Col>
          <Col  >
            <Button  shape='circle' type='text' onClick={decrease}>
          
              <Badge count={notCounter} size="small" >
                <Avatar icon={ico2} style={{backgroundColor:"white"}} />
              </Badge>
          
            </Button>
          </Col>  
      
          <Col  offset={2} >
              <Button style={{fontWeight:"800px",backgroundColor:"#F1F2F5",borderRadius:"8px",display:"flex",alignItems:"center",padding:"21px 14px 21px 14px"}} type='text'  icon={(  <UserOutlined style={{fontSize:"16px",marginBottom:"3px"}}/>)}> A. Ozdemirden </Button>
          </Col>
        </Row>

      </Col>
       
       
     
    </Row>
  )
}

export default Header