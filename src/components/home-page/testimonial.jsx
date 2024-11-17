import React from 'react'
import StarRating from './star-rating';
import { testimonials } from './constants';

function testimonial() {
  return (
    <div className='bg-white pt-14'>

    
      <div className='flex flex-col items-center rounded-t-[500px] md:pt-40  bg-Basketball py-20 '>
          <h1 className='text-white text-3xl text-center mb-10 font-bold px-10'>See what others say about Us</h1>
          <div className=' grid grid-cols-3 md:grid-cols-1 gap-5'>
              
                {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-white text-black w-[300px] md:w-[90vw] flex flex-col p-5 rounded-2xl justify-between">
                          <div className='pb-5 border-b-2'>
                              <StarRating rating={testimonial.rating} />
                              <p className='font-normal'>{testimonial.testimonial}</p>
                          </div>
                          
                          <div className='flex pt-5 gap-5'>
                              <img src={testimonial.image} alt="" className='w-14 rounded-full'/>
                              <div>
                                  <h3 className='font-semibold'>{testimonial.name}</h3>
                                  <p className='text-slate-600'>{testimonial.type}</p>
                              </div>
                              
                          </div>
                      
                      </div>
        ))} 
              
              
          </div>
        
      </div>

    </div>
  )
}

export default testimonial
