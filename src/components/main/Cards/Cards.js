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
    <div>
      <h1 className='md:text-4xl text-2xl font-bold text-gray-700 md:mt-8 mt-4 md:ml-12 ml-6'>Colleges & Programs</h1>
      <div className='flex md:ml-12 ml-6 gap-5  mt-4'>
        <Card img={aimg}/>
        <Card img={bimg}/>
        <Card img={cimg}/>
      </div>
      <div className='flex md:ml-12 ml-6 gap-5 mt-4'>
        <Card img={dimg}/>
        <Card img={eimg}/>
        <Card img={fimg}/>
      </div>
      
    </div>
  )
}

export default Cards