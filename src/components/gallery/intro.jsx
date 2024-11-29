import React from 'react'
import { aboutGallery } from './constants'

const intro = () => {
  return (
    <div className='bg-Basketball py-14 flex justify-center items-center'>

        <div className='w-[75%] text-center text-white'>
            <h1 className='text-4xl font-bold mb-3'>About Our Gallery</h1>

            <p className=''>
                {aboutGallery}
            </p>
        </div>
        
      
    </div>
  )
}

export default intro
