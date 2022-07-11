import React from 'react'
import { Spin, Table } from 'antd';
import 'antd/dist/antd.css';
import fetchColumnSchema from './TableData/fetchColumnSchema';
import fetchClientsData from './TableData/fetchClientsData';
import { useQuery } from 'react-query';
import fetchReferenceData from '../../../services/fetchReferenceData';

function Clients() {
  const {data:referencesData,isLoading:isReferencesLoading,error:referenceError} = useQuery('referencesData',fetchReferenceData)

  var columnstData = fetchColumnSchema()
  var dataSource = fetchClientsData(referencesData)



  if(isReferencesLoading){
  
    <Spin/>
  }

  return (
    <div className='flex  flex-col flex-1 w-full' >
      
      <Table className='lg:w-full ' size='small' rowSelection={{type: "checkbox"}}  columns={columnstData} dataSource={dataSource} />
      <Spin/>
    </div>
    
  )
}

export default Clients