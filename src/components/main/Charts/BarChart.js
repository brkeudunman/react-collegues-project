import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarChart({articleData}) {
  return (
    <div className='bg-white rounded-lg border-not-metal p-4 shadow-md mt-4'>
        <Bar data={articleData} />
    </div>
  )
}

export default BarChart