import React,{useState} from 'react'
import BarChart from './BarChart'
import Chart from 'chart.js/auto';

function Charts({articlesData}) {
  

  const [articles, setArticles] = useState(
    {
      labels: articlesData.map((data)=>data?.year),
      datasets: [{
        label:"Articles Written",
        data: articlesData.map((data)=>data.count),
      }]
    }
  )

  return (
    <div className='grid grid-cols-1 flex-auto lg:p-16 px-2'>
      <BarChart articleData={articles} />
      <BarChart articleData={articles} />
      <BarChart articleData={articles} />
    </div>
  )
}

export default Charts