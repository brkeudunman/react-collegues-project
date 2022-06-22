import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import articleService from '../services/articleService'
import Navbar from './main/Navbar'
import Cards from './main/Cards/Cards'
import Notifications from './main/Notifications/Notifications'
import Charts from './main/Charts/Charts'


function Main() {

  let serviceApi = new articleService();
  const [data, setData] = useState([])


  useEffect(() => {
    serviceApi.getAllData()?.then(
      element=>
        {const articles = element.data
         var arr = []
         articles.map((e)=>(
            arr.push(e)
         ))
        setData(arr)
        }
    )
  }, [])



  return (
      
        <div className='flex md:justify-start bg-bg-metal'>
          <Navbar/>   
          <Routes>    
            <Route  path='/' element={<Cards></Cards>}></Route>
            <Route path='notifications' element={<Notifications></Notifications>}></Route>
            <Route path='charts' element={<Charts articlesData={data} ></Charts>}></Route>         
          </Routes>
        </div>
  )
}

export default Main