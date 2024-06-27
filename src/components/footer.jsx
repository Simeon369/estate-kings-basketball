import React from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';


function footer() {
  return (
    <div className='bg-Basketball py-5 flex flex-col items-center text-white'>
        <div className='flex py-3 gap-3'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-slate-300'>
                <FaFacebook size={30} />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className='hover:text-slate-300'>
                <FaWhatsapp size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-slate-300'>
                <FaInstagram size={30} />
            </a>
        </div>
      <p className='text-center'>&copy;2024 Estate Kings Basketball Academy. All rights reserved.</p>
    </div>
  )
}

export default footer
