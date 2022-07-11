import React from 'react'
import 'antd/dist/antd.css';
import {Space} from'antd'

function fetchColumnSchema() {


    const columns = [

        {
            title:'Name',
            dataIndex:'name',
            key:'name'
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
            render: (_, record) => (
              <Space size="middle">
                <button className='text-gray-600'>Edit {record.name}</button>
                <button className='text-primary-400'>Delete</button>
              </Space>
            ),
          },
    ]


    return columns
}

export default fetchColumnSchema