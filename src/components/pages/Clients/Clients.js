import React from 'react'
import { Spin, Table } from 'antd';

import fetchColumnSchema from './TableData/fetchColumnSchema';
import fetchClientsData from './TableData/fetchClientsData';
import { useQuery } from 'react-query';
import fetchReferenceData from '../../../services/fetchReferenceData';

function Clients() {
  const {data:referencesData,isLoading:isReferencesLoading,error:referenceError} = useQuery('referencesData',fetchReferenceData)

  var columnstData = fetchColumnSchema()
  var dataSource = fetchClientsData(referencesData)

  if(isReferencesLoading){
    <div className='flex gap-5'><p>Loading... </p><Spin/></div>
  }

  return (
    <div className='flex flex-col md:w-3/4  flex-wrap' >
      
      <Table size='small' rowSelection={{type: "checkbox"}}  columns={columnstData} dataSource={dataSource} />
      
    </div>
    
  )
}

export default Clients