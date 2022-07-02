import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Cards from './pages/Cards/Cards'
import Notifications from './pages/Notifications/Notifications'
import Charts from './pages/Charts/Charts'
import Contact from './pages/Contact/Contact'

import { useQuery } from 'react-query';
import fetchArticlesData from '../services/fetchArticlesData';
import fetchReferenceData from '../services/fetchReferenceData'
import fetchJournalsData from '../services/fetchJournalsData'


function Main() {

  const {data:articlesData,isLoading:isArticlesLoading,error:articlesError} = useQuery('articlesData',fetchArticlesData)
  const {data:referencesData,isLoading:isReferencesLoading,error:referenceError} = useQuery('referencesData',fetchReferenceData)
  const {data:journalsData,isLoading:isJournalsLoading,error:journalsError} = useQuery('journalsData',fetchJournalsData)

  if(isArticlesLoading || isReferencesLoading || isJournalsLoading ){
    return <div> Loading ...</div>
  }

  else if(articlesError || referenceError || journalsError){
    return <div>Error...</div>
  }
  return (
   
    <div className='flex justify-center w-full h-full'>
      <Routes>    
        <Route  path='/' element={<Cards></Cards>}></Route>
        <Route path='notifications' element={<Notifications></Notifications>}></Route>
        <Route path='charts' element={<Charts articlesData={articlesData} referencesData={referencesData} journalsData={journalsData}></Charts>}></Route>       
        <Route path='contact' element={<Contact></Contact>}></Route>  
      </Routes>
    </div>
       
        
  )
}

export default Main