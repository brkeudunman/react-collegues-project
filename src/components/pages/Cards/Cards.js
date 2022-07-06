import React from 'react'
import Card from './Card'
import aimg from '../../../imgs/1.png'
import bimg from '../../../imgs/2.png'
import cimg from '../../../imgs/3.png'
import dimg from '../../../imgs/4.png'
import eimg from '../../../imgs/5.png'
import fimg from '../../../imgs/6.png'



function Cards() {
  return (
    <div className='pb-5 w-full'>
      <h1 className='md:text-4xl text-2xl font-bold text-gray-700 md:my-8 my-4 md:ml-12 md:text-start text-center'>Colleges & Programs </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-4 md:mx-12 mx-6 flex-1 '>
        <Card img={aimg}/>
        <Card img={bimg}/>
        <Card img={cimg} />
  
        <Card img={dimg}/>
        <Card img={eimg}/>
        <Card img={fimg} />

    
      </div>
      
    </div>
  )
}

export default Cards