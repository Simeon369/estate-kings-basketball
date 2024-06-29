import React from 'react'
import data from './data/services-data'

function services() {
  return (
    <div className='bg-Basketball flex flex-col py-20 px-5 justify-center items-center'>
        <h1 className='text-white font-bold text-4xl md:text-2xl text-center'>Why Estate Kings Basketball?</h1>
      <div className='grid grid-cols-3 md:grid-cols-1 mt-10 gap-3'>
        {data.map(card => (
            <div className='flex flex-col w-[300px] md:w-[90vw] md:items-center md:text-center bg-white rounded-2xl p-5 ' key={card.imgUrl}>
                <img src={card.imgUrl} alt="" className='w-16' />
                <h1 className='font-semibold text-lg'>{card.name}</h1>
                <p className='text-xs text-slate-700'>{card.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default services
