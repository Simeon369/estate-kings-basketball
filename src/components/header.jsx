import React from 'react'
import logo from '../assets/images/kings-logo.png'
import { navItems } from './home-page/constants'
import { Link } from 'react-router-dom'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useContext } from 'react'
import { MyContext } from '../app';



function header() {
    const {menu, setMenu} = useContext(MyContext)
    console.log(menu);
    
    

    const toggleMenu = () =>{
        setMenu(prev => !prev)
    }
  return (
    <div className='flex w-full text-white justify-between px-7 md:px-4 py-3 items-center absolute top-0 '>
      <img src={logo} alt="" className='w-20 md:w-16' />
      <div className='flex gap-10 md:hidden items-center'>
      {navItems.map((item, index) =>(
            <Link to={item.path} className='nav-item' key={index}>
              {item.title}
            </Link>
          ))}
      </div>

      <button className='button md:hidden'>
        Contact Us
      </button>

      <IoMdMenu className='text-5xl hover:text-Basketball md:block hidden' onClick={toggleMenu} />
        
      
      {menu && <div className='h-screen w-[100%] bg-white bg-opacity-99 absolute top-0 right-0 flex flex-col items-center'>
        <div className='w-full flex justify-end p-3 px-4'>
        <IoMdClose className='text-5xl text-black' onClick={toggleMenu}/>
        </div>

        <div className='text-black text-center flex flex-col gap-5'>
          {navItems.map((item, index) =>(
            <Link to={item.path} key={index} onClick={toggleMenu}>{item.title}</Link>
          ))}
        
        
      </div>

      <button className='button mt-5'>
        Contact Us
      </button>
      </div> }
    </div>
  )
}

export default header
