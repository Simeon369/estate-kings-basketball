import React from 'react'
import Header from '../header'
import logo from '../../assets/images/kings-logo.png'


function hero() {
  return (
    <div className='w-full mt-10 h-[100vh] flex justify-center items-center'>
      <div className='hero fixed w-full h-screen bg-cover bg-center top-0 left-0 -z-20'></div>
      <Header />
      <div className='flex flex-col items-center'>
        <h1 className='text-white sm:text-5xl text-8xl  text-center font-extrabold Shadow px-10 '>AMONGST MEN!! <br /> WE ARE <span className='text-Basketball'>KINGS</span></h1>
        <img src={logo} alt="" className='w-24 md:w-16'/>
        <button className=' mt-5 button'>Join the Kingdom</button>
      </div>
    </div>
  )
}

export default hero
