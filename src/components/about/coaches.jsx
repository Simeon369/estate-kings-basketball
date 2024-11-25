import React from 'react'
import { coachesData } from './constants'
import { FaLinkedin, FaInstagram } from "react-icons/fa";



const coaches = () => {
  return (
    <div className='bg-Basketball py-14 flex flex-col items-center'>
        <div className='text-center w-[75%]'>
            <h1 className='uppercase text-white font-bold text-4xl mb-2'>Meet The Organizers</h1>
            <p className=''>The Estate Kings Basketball Academy is led by a passionate
               team of experienced basketball professionals and community
               leaders dedicated to empowering the next generation of athletes.
            </p>

        </div>
        
            {coachesData.map((item, index)=>(
                <div className='flex md:flex-col md:items-center gap-5 md:gap-0 rounded-xl md:w-[90%] bg-white my-10 p-4 '>
                  <div className='p-5 '>
                    <div className='md:flex flex-col items-center gap-3'>
                      <img src={item.image} className='w-[250px] rounded-full' alt="" />
                      <div className='hidden md:block text-center'>
                        <h1 className='text-4xl font-bold'>{item.name}</h1>
                        <p className='mr-3'>{item.title}</p>
                        <div className='flex justify-center text-3xl gap-3 mt-3'>
                          <a className='text-3xl text-Basketball  hover:text-blue-600' href={item.linkedin}><FaLinkedin /></a>
                          <a className='text-3xl text-Basketball  hover:text-blue-600' href={item.instagram}><FaInstagram /></a>
                        </div>
                        
                      </div>
                      
                    </div>

                    <div className='text-sm md:hidden mt-5'>
                      <h1 className='font-semibold text-2xl'>Contact</h1>
                      <p><span className='font-semibold'>Email: </span>{item.email}</p>
                      <p><span className='font-semibold'>Phone: </span>{item.phone}</p>
                    </div>
                    

                  </div>

                  <div className='pt-0 py-5 flex items-center'>
                    <div className='space-y-2 md:flex flex-col items-center'>


                        <h1 className='text-4xl font-bold md:hidden'>{item.name}</h1>

                        <div className='flex items-center text-2xl font-semibold md:hidden'>
                          <p className='mr-3'>{item.title}</p>
                          <a href={item.linkedin} className='text-3xl mr-2 text-Basketball hover:text-blue-600 '><FaLinkedin /></a>
                          <a href={item.instagram} className='text-3xl text-Basketball  hover:text-blue-600'><FaInstagram /></a>
                        </div>


                        <div className='w-[600px] md:w-[75%] text-neutral-500 md:text-center'>
                          {item.about}
                        </div>


                        <div className='text-sm md:flex hidden flex-col items-center mt-5'>
                          <h1 className='font-semibold text-2xl'>Contact</h1>
                          <p><span className='font-semibold'>Email: </span>{item.email}</p>
                          <p><span className='font-semibold'>Phone: </span>{item.phone}</p>
                        </div>
                    </div>

                    

                    
                    

                  </div>
                </div>
            ))}
        
      
    </div>
  )
}

export default coaches
