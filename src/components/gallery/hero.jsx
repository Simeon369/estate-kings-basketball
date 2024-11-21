import React from 'react'

const hero = () => {
  return (
    <div>
        <div className='w-full mt-10 h-[100vh] flex justify-center items-center'>
            <div className={` gallery-hero fixed w-full h-screen bg-cover bg-top top-0 left-0 -z-20`}></div>
            <div className='flex flex-col items-center'>
              <h1 className='text-white uppercase  font-bold text-7xl md:text-5xl Shadow -mt-20'>Gallery</h1>
            </div>
      </div>
      
    </div>
  )
}

export default hero
