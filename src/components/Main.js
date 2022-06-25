import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './main/Navbar'
import Cards from './main/Cards/Cards'
import Notifications from './main/Notifications/Notifications'
import Charts from './main/Charts/Charts'
import dataService from '../services/dataService'


function Main() {

  let serviceApi = new dataService();
  const [articleData, setArticleData] = useState([])
  const [refData,setRefData] = useState(serviceApi.getReferenceData)
  const [journalData,setJournalData] = useState(serviceApi.getJournalData)

  useEffect(() => {
    serviceApi.getArticleData()?.then(
      element=>
        {const articles = element.data
         var arr = []
         articles.map((e)=>(
            arr.push(e)
         ))
        setArticleData(arr)
        }
    )
  }, [])

  return (
      
        <div className='flex md:justify-start bg-bg-metal h-full'>
          <Navbar/>
          <div className='flex justify-center w-full h-full'>
            <Routes>    
              <Route  path='/' element={<Cards></Cards>}></Route>
              <Route path='notifications' element={<Notifications></Notifications>}></Route>
              <Route path='charts' element={<Charts articlesData={articleData} refData={refData} jourData={journalData}></Charts>}></Route>         
            </Routes>
          </div>
         
        </div>
  )
}

export default Main