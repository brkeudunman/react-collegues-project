import React from 'react'
import 'antd/dist/antd.css';
import {Button,message, Space} from'antd'
import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons';

function fetchColumnSchema() {

    const contentEdit = (name) => {
      return name +' is edited';
    }
    const contentDelete = (name) => {
      return name +' is deleted';
    }
  
    const editContent = (name) => {
      message
      .loading('Action in progress..', 1.5)
      .then(() => message.success(contentEdit(name), 1))
    };

    const deleteContent = (name) => {
      message
      .loading('Action in progress..', 1.5)
      .then(() => message.success(contentDelete(name), 1))
    }

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
            render: (_,record) => (
              <Space size="middle">
                <Button onClick={()=>{editContent(record.name)}} type='dashed'><div className='flex items-center'><span className='md:inline hidden mr-2 text-gray-600' >Edit</span> <EditOutlined style={{color:"gray"}} /></div> </Button>
                <Button onClick={()=>{deleteContent(record.name)}} type='text'><div className='flex items-center'><span className='lg:inline hidden mr-2 text-primary-400' >Delete</span> <CloseCircleOutlined style={{color:"red"}}/></div></Button>
              </Space>
            ),
          },
    ]


    return columns
}

export default fetchColumnSchema