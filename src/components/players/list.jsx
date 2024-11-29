import React from 'react'
import { players } from './constants'
import { Link } from 'react-router-dom'


const list = () => {
  
  return (
    <div className='bg-white py-12 grid  grid-cols-5 md:grid-cols-1 gap-10 px-10 '>
        {players.map((item, index)=>(
            <Link to={'/player-info'} state={item} key={index} className='hover:scale-105 transition-all'>
                <img src={item.image} alt="" className='w-[100%] rounded-t-3xl'/>
                <div className='flex justify-between px-5 py-3 font-semibold bg-Basketball text-white rounded-b-3xl'>
                    <h1>{item.surname + ' ' + item.firstname.slice(0,1)+ '.'}</h1>
                    <h2>{item.position.short.toUpperCase()}</h2>
                </div>
            </Link>
        ))}

      
    </div>
  )
}

export default list
