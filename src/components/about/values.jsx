import React from 'react'
import { FaSpaceShuttle, FaEye, FaBasketballBall } from "react-icons/fa";
import { mission, vision, discoverUs } from './constants';

const values = () => {
  return (
    <div className='bg-white py-14 flex flex-col items-center'>
        <div className='values'>
            <h1><FaSpaceShuttle className=' -rotate-45 ' /> Mission</h1>
            <p>{mission}</p>
        </div>
        <div className='values'>
            <h1><FaEye /> Vision</h1>
            <p>{vision}</p>
        </div>
        <div className='values'>
          <h1><FaBasketballBall /> Discover Us</h1>
          <p>{discoverUs}</p>
        </div>
      
    </div>
  )
}

export default values
