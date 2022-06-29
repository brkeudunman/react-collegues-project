import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Cards from './pages/Cards/Cards'
import Notifications from './pages/Notifications/Notifications'
import Charts from './pages/Charts/Charts'
import fetchArticlesData from '../services/fetchArticlesData';
import { useQuery } from 'react-query';
import Contact from './pages/Contact/Contact'
import fetchReferenceData from '../services/fetchReferenceData'


function Main() {

  const {data:articlesData,isLoading:isArticlesLoading,error:articlesError} = useQuery('articlesData',fetchArticlesData)
  const {data:referencesData,isLoading:isReferencesLoading,error:referenceError} = useQuery('referencesData',fetchReferenceData)


  if(isArticlesLoading || isReferencesLoading ){
    return <div> Loading ...</div>
  }

  else if(articlesError || referenceError){
    return <div>Error...</div>
  }
  return (
   
    <div className='flex justify-center w-full h-full'>
      <Routes>    
        <Route  path='/' element={<Cards></Cards>}></Route>
        <Route path='notifications' element={<Notifications></Notifications>}></Route>
        <Route path='charts' element={<Charts articlesData={articlesData} referencesData={referencesData}></Charts>}></Route>       
        <Route path='contact' element={<Contact></Contact>}></Route>  
      </Routes>
    </div>
       
        
  )
}

export default Main