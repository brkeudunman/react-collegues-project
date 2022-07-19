import React,{useState} from 'react'
import './index.css'

import { Button, Calendar, Checkbox, DatePicker, Form, message, Steps } from 'antd';
import Terms from './Terms';
import ShippingInfo from './ShippingInfo';
import moment from 'moment'

const { Step } = Steps;

function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
}

function Shipping() {

    const [terms, setTerms] = useState(false)
    const [calendar,setCalendar] = useState("")
    const [value, setValue] = useState(moment().endOf('day'));
    const [selectedValue, setSelectedValue] = useState(moment(''));

    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };

    const onPanelChange = (newValue) => {
        setValue(newValue);
    };
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const checkTime = function () {
        if(calendar==="" && selectedValue?.format('YYYY-MM-DD')!=='Invalid date'){
            message.success('Shipping will arrive at ' + selectedValue?.format('YYYY-MM-DD'))
        }
        else if (calendar!==''){
            message.success('Shipping will arrive at ' + calendar)
        }
        else{
            message.warn("Invalid Date")
        }
    }



    
    const steps = [
        {
        title: 'Terms',
        content:(<span>
                    <Terms/>
                    <Checkbox checked={terms} onChange={()=>{setTerms(!terms)}}>Understand the terms</Checkbox>
                    
                </span>)

        },
        {
        title: 'Info',

        content: <ShippingInfo/>,
        },
        {
        title: 'Date',
        content: (
            <div className='w-full'>
                <span className='mr-2'>Please enter a shipping date :</span>
                <span className='md:hidden'>
                    <DatePicker className='w-full' disabledDate={disabledDate} onChange={(value)=>(
                        setCalendar(value.calendar())
                    )} >
                    </DatePicker>
                </span>
                <span className='hidden md:block'>
                    <Calendar value={value} onSelect={onSelect}  disabledDate={disabledDate} onPanelChange={onPanelChange} />
                </span>
                
            </div>
            ),
        },
    ];

   
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