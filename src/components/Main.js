import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Cards from './pages/Cards/Cards'
import Notifications from './pages/Notifications/Notifications'
import Charts from './pages/Charts/Charts'
import fetchArticlesData from '../services/fetchArticlesData';
import { useQuery } from 'react-query';
import Contact from './pages/Contact/Contact'


function Main() {

  const {data,status} = useQuery('articlesData',fetchArticlesData)

  if(status==="loading"){
    return <div> Loading ...</div>
  }

  else if(status ==="error"){
    return <div>Error...</div>
  }
  return (
   
    <div className='flex justify-center w-full h-full'>
      <Routes>    
        <Route  path='/' element={<Cards></Cards>}></Route>
        <Route path='notifications' element={<Notifications></Notifications>}></Route>
        <Route path='charts' element={<Charts articlesData={data}></Charts>}></Route>       
        <Route path='contact' element={<Contact></Contact>}></Route>  
      </Routes>
    </div>
       
        
  )
}

export default Main