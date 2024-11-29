import React from 'react'
import image from '../../../public/jrue holiday.jpg'
import { useLocation } from 'react-router-dom'

const playerInfo = () => {
  const location = useLocation()
  const playerData = location.state || {}
  console.log(location);
  
  
  return (
    <div className='w-full  h-[100vh] flex flex-col justify-end'>
      <div style={{backgroundImage: `url(${image})`}} className='fixed w-full h-screen bg-cover bg-top top-0 left-0 -z-20'></div>
      <p className='text-white pb-5 text-7xl Shadow font-bold'>{playerData.surname} <br /> {playerData.firstname}</p>
      <div className='w-full grid grid-cols-4 gap-10 md:gap-4 md:grid-cols-2 bg-white p-10'>
        <div className='player-info'>
          <h2>Height</h2>
          <h1>{playerData.height}cm</h1>
        </div>
        <div className='player-info'>
          <h2>Weight</h2>
          <h1>{playerData.weight}kg</h1>
        </div>
        <div className='player-info'>
          <h2>Category</h2>
          <h1>Academy</h1>
        </div>
        <div className='player-info'>
          <h2>Position</h2>
          <h1>{playerData.position.long}</h1>
        </div>
        <div className='player-info col-start-2 md:col-start-1'>
          <h2>Age</h2>
          <h1>{playerData.age}</h1>
        </div>
        <div className='player-info'>
          <h2>Wing Span</h2>
          <h1>{playerData.wingspan}cm</h1>
        </div>

      </div>
    </div>
  )
}

export default playerInfo
