import React from 'react'
import {Pie} from 'react-chartjs-2'

function PieChart({data,header}) {
  return (
    
    <div className='flex flex-col items-center  w-4/5 mb-8 mx-auto  bg-white rounded-lg border-not-metal py-2 lg:px-24 lg:py-8 shadow-md mt-4'>
        {header}
        <Pie  data={data} />
    </div>
  )
}

export default PieChart