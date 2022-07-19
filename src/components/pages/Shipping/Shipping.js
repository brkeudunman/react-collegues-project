import React,{useState} from 'react'
import './index.css'

import { Button, Card, Checkbox, DatePicker, Form, Input, message, Select, Steps } from 'antd';

const { Step } = Steps;



function Shipping() {

    const [terms, setTerms] = useState(false)

    
    const steps = [
        {
        title: 'First',
        content: 
        (   <div >
                <Card >
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur facilisis dignissim.</p>
                    <p>Card content</p>
                </div>
                <Checkbox checked={terms} onChange={()=>{setTerms(!terms)}}>Understand the terms</Checkbox>
                </Card>
            </div>
          
        ),
        },
        {
        title: 'Second',

        content: (<div className='lg:w-3/5'>
                    <Form >
                        <Form.Item className='lg:w-1/3' required label="Name">
                            <Input></Input>
                        </Form.Item>
                        <Form.Item className='lg:w-1/2' required label="Payment Method">
                            <Select>
                                <Select.Option value="Cash">Cash</Select.Option>
                                <Select.Option value="Online Payment">Online Payment</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item  required label="Adress">
                            <Input></Input>
                        </Form.Item>
                    </Form>
                 </div>),
        },
        {
        title: 'Last',
        content: (
            <div className='w-full'>
                <span className='mr-2'>Please enter a shipping date :</span>
                <DatePicker></DatePicker>
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

    return (
        <div className='w-full px-12 my-12'>
        <Steps responsive current={current}>
            {steps.map((item) => (
            <Step key={item.title} title={item.title} />
            ))}
        </Steps>

        <div className="steps-content flex mt-8">{steps[current].content}</div>

        <div className="steps-action flex mt-8">
            {current < steps.length - 1 && (
            <Button disabled={(!terms)} type="primary" onClick={() => next()}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Shipping complete!')}>
                Done
            </Button>
            )}
            {current > 0 && (
            <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                Previous
            </Button>
            )}
        </div>
        </div>
    )
    }

export default Shipping