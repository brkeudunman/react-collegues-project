import { Alert, Avatar, Badge, Button, Col, Dropdown, Menu, Row, Space } from 'antd'
import React, { createContext, useState } from 'react'
import logo from '../imgs/logo_submit.png'
import { DingtalkSquareFilled, DownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';

function Header() {

  const [notCounter, setNotCounter] = useState(5)
  const [hiddenAlert,setHiddenAlert]= useState("none")
  
  const ico1= (<i className="md:text-xl text-gray-700 fa-solid fa-circle-question"></i>)
  const ico2 = (<i className='md:text-xl  text-gray-700 fa-solid fa-bell'> </i>)


  const alert = (<Alert
                  description="All notifications are checked"
                  type="info"
                  style={{display:hiddenAlert,height:"52px"}}
                  showIcon
                  closable
                  banner
                   />)

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Button size='small'  type='text' href='#'>Profile</Button>
          ),
        },
        {
          key: '2',
          label: (
           
            <Button size='small' type='text' href='#'>Settings</Button>
            
          ),
          
          
        },
      
        {
          key: '3',
          label: (
            <Button size='small' danger type='text' href='#'>Exit</Button>
          ),
        },
      ]}
    />
);




  const decrease = ()=>{
    let newCount = notCounter - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setNotCounter(newCount);
    if(newCount===0){
      setHiddenAlert("flex")
    }
    
  }

  return (
    <span>  
    <Row  wrap={false} justify='space-between' className=' bg-white border-solid border-b-2  md:py-4 py-2 border-metal'>
    <Col  >
      <img
        alt='logo png'
        src={logo}
        className="sm:w-auto mt-1 w-12 md:mr-0 md:ml-8 ml-2"
      />
     </Col>
    
    <Col className='mr-8 md:mr-12' >
    
      <Row wrap={false} className='flex items-center' >
        <Col >
        <Button size='large' icon={ico1} type='text' shape='circle' block="true">
        </Button>
        </Col>
        <Col className='mb-2' >
          <Button  shape='circle' type='text' onClick={decrease}>
        
            <Badge count={notCounter} size="small" >
              <Avatar icon={ico2} style={{backgroundColor:"white"}} />
            </Badge>
        
          </Button>
        </Col>  
    
        <Col  offset={2} >
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Button style={{fontWeight:"800px",backgroundColor:"#F1F2F5",borderRadius:"8px",display:"flex",alignItems:"center",padding:"21px 14px 21px 14px"}} type='text'  icon={(  <UserOutlined style={{fontSize:"16px",marginBottom:"3px"}}/>)}> A. Ozdemirden </Button>
                </Space>
              </a>
            </Dropdown>
        </Col>
      </Row>
      
    </Col>
    
    </Row>
    
    {alert}
    </span>
    
    
  )
}

export default Header