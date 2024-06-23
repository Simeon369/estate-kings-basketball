import React from 'react'
import Header from '../header'
import logo from '../../assets/images/kings-logo.png'


function hero() {
  return (
    <div className='hero w-full h-screen bg-cover bg-center flex justify-center items-center'>
      <Header />
      <div className='flex flex-col items-center mt-24'>
        <h1 className='text-white sm:text-5xl text-8xl  text-center font-extrabold Shadow px-10 '>AMONGST MEN!! <br /> WE ARE <span className='text-Basketball'>KINGS</span></h1>
        <img src={logo} alt="" className='w-24 md:w-16'/>
        <button className=' mt-5 p-3 px-5 rounded-3xl text-white hover:text-black font-bold bg-Basketball hover:bg-white border-2 border-black transition'>Join the Kingdom</button>
      </div>
    </div>
  )
}

export default hero
