import React from 'react'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const list = () => {
  const [playerList, setPlayerList] = useState([])

  useEffect(()=>{
    const getPlayers = async() =>{
      try{
        const response = await axios.get(
          "https://estate-kings-basketball-backend.onrender.com/api/players?populate=*"
        ) 
        const data = response.data.data.map((item)=>({
           potraitUrl : `https://estate-kings-basketball-backend.onrender.com${item.potrait.url}`,
           surname : item.surname,
           firstname : item.firstname,
           position : item.position,
           height : item.height,
           weight : item.weight,
           wingspan : item.wingspan,
           age: item.age,
           category: item.category
        }))
        console.log(data);
        
        setPlayerList(data)
      }catch (error) {
        console.error(error);
      }
    }
    getPlayers()
  }, [])
  
  return (
    <div className='bg-white py-12 grid  grid-cols-5 md:grid-cols-1 gap-10 px-10 '>
        {playerList.map((item, index)=>(
            <Link to={'/player-info'} state={item} key={index} className='hover:scale-105 transition-all'>
                <img src={item.potraitUrl} alt="" className='w-[100%] rounded-t-3xl'/>
                <div className='flex justify-between px-5 py-3 font-semibold bg-Basketball text-white rounded-b-3xl'>
                    <h1>{item.surname + ' ' + item.firstname.slice(0,1)+ '.'}</h1>
                    <h2>{item.position.short}</h2>
                </div>
            </Link>
        ))}

      
    </div>
  )
}

export default list
