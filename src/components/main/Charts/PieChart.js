import React from 'react'
import {Pie} from 'react-chartjs-2'

function PieChart({data,header}) {
  return (
    
    <div className='flex flex-col items-center flex-1 bg-white rounded-lg border-not-metal p-4 shadow-md mt-4'>
        {header}
        <Pie data={data} />
    </div>
  )
}

export default PieChart