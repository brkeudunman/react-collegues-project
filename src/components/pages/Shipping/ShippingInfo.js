import { Form, Input, Select } from 'antd'
import React from 'react'

function ShippingInfo() {
  return (
    <div className='lg:w-3/5'>
        <Form.Item className='lg:w-1/3'  label="Name">
            <Input></Input>
        </Form.Item>
        <Form.Item required className='lg:w-1/2'  label="Payment Method">
            <Select>
                <Select.Option value="Cash">Cash</Select.Option>
                <Select.Option value="Online Payment">Online Payment</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item  label="Adress">
            <Input ></Input>
        </Form.Item>
    </div>
)
}

export default ShippingInfo