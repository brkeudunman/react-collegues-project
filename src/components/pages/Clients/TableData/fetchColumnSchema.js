import React from 'react'
import 'antd/dist/antd.css';
import {Space} from'antd'
import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons';

function fetchColumnSchema() {


    const columns = [

        {
            title:'Name',
            dataIndex:'name',
            key:'name',
            
        },
        {
            title:'References',
            dataIndex:'references',
            key:'references',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.references - b.references,
           
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
              <Space size="middle">
                <button className='text-gray-600'><div className='flex items-center'><span className='md:inline hidden mr-2' >Edit</span> <EditOutlined /></div> </button>
                <button className='text-primary-400'><div className='flex items-center'><span className='lg:inline hidden mr-2' >Delete</span> <CloseCircleOutlined /></div></button>
              </Space>
            ),
          },
    ]


    return columns
}

export default fetchColumnSchema