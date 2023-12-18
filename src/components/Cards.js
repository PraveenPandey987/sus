import { ScaleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Cards = (props) => {
  return (
    <>
    <div style={{
       width: '400px',
       height: '600px',
       color: '#333333',
       backgroundColor: '#fff8ed',
       padding: '10px',
       fontFamily: 'Montserrat',
       fontSize: '1px',
     
    }} class="max-w-sm rounded overflow-hidden shadow-lg">
<img style={{
    borderRadius: '10px',
    height: '25rem',
    width: '20rem',
    margin: 'auto',
    transition: 'transform 0.3s ease-in-out', // Adding transition for smooth effect
    animation: 'moveToLeft 5s linear infinite',
    animationDelay: '1000ms',
}}
class="w-full" src={props.src}/>
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">{props.head}</div>
  <p class="text-gray-700 text-base">
   {props.text}
  </p>
</div>
</div></>
  )
}

export default Cards
