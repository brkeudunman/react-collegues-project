import React from 'react'

function Card(props) {
  return (
    <div>
        <img class="bg-white rounded-lg border-not-metal shadow-md "src={props.img} alt="" />
    </div>
  )
}

export default Card