import React from 'react'
import goa from '../../assets/images/goa-logo.png'
import milo from '../../assets/images/milo-logo.png'
import pocari from '../../assets/images/popari sweat.png'

function sponsors() {
  return (
    <div className='bg-white p-5 py-10 flex justify-center sm:justify-between items-center gap-10 sm:gap-0'>
      <img src={pocari} alt="" className='w-40 md:w-20 opacity-50'/>
      <img src={goa} alt="" className='w-40 md:w-20 rounded-full opacity-50'/>
      <img src={milo} alt="" className='w-40 md:w-20 opacity-50'/>
    </div>
  )
}

export default sponsors
