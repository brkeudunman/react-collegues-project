import React from 'react'

function Card(props) {
  return (
    <div className=''>
        <img class="bg-white rounded-lg border-not-metal shadow-md mt-3 md:mt-0 mx-auto" src={props.img} alt="" />
    </div>
  )
}

export default Card