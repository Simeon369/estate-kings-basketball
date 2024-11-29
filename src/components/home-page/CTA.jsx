import React from 'react'
import image from '../../assets/images/cta_image.jpg'
import { Link } from 'react-router-dom'


function CTA() {
  return (
    <div className='cta px-5 w-full h-screen flex flex-col justify-center items-center relative'>
      
        <h1 className='font-bold text-white text-4xl text-center'>Enroll today and become the player you've always dreamed of!</h1>
        <Link to={'/enroll'} onClick={()=>{toggleOnScreenPage(Object.keys(onScreenPage)[index])}} className='button mt-5'>Enroll Now...</Link>
    </div>
  )
}

export default CTA
