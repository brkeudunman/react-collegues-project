import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarChart({data,header}) {
  return (
    <div className='flex flex-col justify-center w-4/5 h-full mx-auto bg-white rounded-lg border-not-metal px-2 shadow-md mt-4'>
        {header}
        <Bar  data={data} />
    </div>
  )
}

export default BarChart