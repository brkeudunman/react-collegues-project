import React,{useState} from 'react'
import './index.css'

import { Button, Checkbox, DatePicker, Form, message, Steps } from 'antd';
import Terms from './Terms';
import ShippingInfo from './ShippingInfo';

const { Step } = Steps;



function Shipping() {

    const [terms, setTerms] = useState(false)
    const [calendar,setCalendar] = useState("")

    
    const steps = [
        {
        title: 'First',
        content:(<span>
                    <Terms/>
                    <Checkbox checked={terms} onChange={()=>{setTerms(!terms)}}>Understand the terms</Checkbox>
                </span>)

        },
        {
        title: 'Second',

        content: <ShippingInfo/>,
        },
        {
        title: 'Last',
        content: (
            <div className='w-full'>
                <span className='mr-2'>Please enter a shipping date :</span>
                <DatePicker disabledDate={(moment)=>(moment.endOf('day'))} onChange={(value)=>(
                    setCalendar(value.calendar())
                )}  className='w-full'>
                </DatePicker>
            </div>
            ),
        },
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const checkTime = function () {
        if(calendar===""){
            message.warn('Please enter a valid time')
        }
        else{
            message.success('Shipping will arrive at '+calendar)
        }
    }

    return (
        <div className='w-full px-12 my-12'>

        <Steps responsive current={current}>
            {steps.map((item) => (
            <Step key={item.title} title={item.title} />
            ))}
        </Steps>

        <Form>
            <div className="steps-content mt-8">
                {steps[current].content}
            </div>  
            <div className="steps-action flex  mt-8">
                {current < steps.length - 1 && (<Form.Item htmlType="submit"><Button disabled={(!terms)} type="primary" onClick={() => next()}> Next</Button></Form.Item> )}
                {current === steps.length - 1 && (<Form.Item><Button type="primary" onClick={() => (checkTime())}>Done</Button></Form.Item>)}
                {current > 0 && (<Form.Item> <Button style={{margin: '0 8px'}} onClick={() => prev()}> Previous </Button> </Form.Item>)} 
            </div>
        </Form>      
       
        </div>
    )
    }

export default Shipping