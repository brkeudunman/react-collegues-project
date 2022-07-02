import React,{useState} from 'react'
import BarChart from './BarChart'
import Chart from 'chart.js/auto';
import PieChart from './PieChart';

function Charts({articlesData,referencesData,journalsData}) {


  const colors=["#343a40","#6f42c1","#e83e8c","#fd7e14","#ffc107"]

  const articles =
    {
      labels: articlesData.map((data)=>data?.year),
      datasets: [{
        label:"Articles Written",
        data: articlesData.map((data)=>data.count),
        backgroundColor:"#343a40"
      }]
    }
    
    const references =  
      {
        labels:referencesData.map((data)=>data?.name),
        datasets:[
          {
            label:"ref",
            data:referencesData.map(data=>data?.count),
            backgroundColor:colors.map(color=>color)
          }
        ]
      }
    const journals = {
      labels:journalsData.map((data)=>data?.name),
      datasets:[
        {
          label:"journals",
          data:journalsData.map(data=>data?.count),
          backgroundColor:colors.map(color=>color)
        }
      ]
    }

  return (
    <span className='w-full'>
      <h1 className='md:text-4xl text-2xl font-bold text-gray-700 md:mt-8 mt-4 md:ml-2 lg:ml-16 md:text-start text-center'>Charts</h1>
      <div className='grid grid-cols-1 gap-5 lg:px-12 px-3 py-4 flex-1 lg:grid-cols-2 '>
        <BarChart data={articles} header={<h2 className='self-center mb-2'>Articles:</h2>}/>
        <PieChart data={references} header={<h2>References:</h2>} />
        <PieChart data={journals} header={<h2>Journals:</h2>} />
      </div>
    </span>
   
  )
}

export default Charts