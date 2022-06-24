import React,{useState} from 'react'
import BarChart from './BarChart'
import Chart from 'chart.js/auto';
import PieChart from './PieChart';

function Charts({articlesData,refData,jourData}) {
  

  const [articles, setArticles] = useState(
    {
      labels: articlesData.map((data)=>data?.year),
      datasets: [{
        label:"Articles Written",
        data: articlesData.map((data)=>data.count),
      }]
    }
  )

  const [references,setReferences] = useState (
    {
      labels:refData.map((data)=>data?.name),
      datasets:[
        {
          label:"ref",
          data:refData.map(data=>data?.count)
        }
      ]
    }
  )
  const [journals,setJournals] = useState (
    {
      labels:jourData.map((data)=>data?.name),
      datasets:[
        {
          label:"ref",
          data:jourData.map(data=>data?.count)
        }
      ]
    }
  )

  return (
    <div className='grid grid-cols-1 gap-5 lg:p-16 px-2 flex-1 lg:grid-cols-2'>
      <BarChart data={articles} header={<h2 className='self-center mb-4'>Articles:</h2>}/>
      <PieChart data={references} header={<h2>References:</h2>} />
      <PieChart data={journals} header={<h2>Journals:</h2>} />
    </div>
  )
}

export default Charts