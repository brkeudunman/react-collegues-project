import React,{useState} from 'react'
import Chart from './Chart'

function Charts({articlesData}) {
  

  const [articles, setArticles] = useState(
    {
      labels: articlesData.map((data)=>data.year),
      datasets: [{
        label:"Articles Written",
        data: articlesData.map((data)=>data.count),
      }]
    }
  )

  return (
    <div>
      <Chart/>
      <Chart/>
      <Chart/>
    </div>
  )
}

export default Charts