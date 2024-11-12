import React from 'react'

const map = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center py-10 bg-white'>

        <h1 className='uppercase text-Basketball text-4xl font-bold text-center'>Where are we located at?</h1>
        
        <div className='border-2 border-black'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.296410644375!2d3.2689782999999983!3d6.6100438000000095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91516e54e993%3A0x44c1c342778e08ea!2sGOA%20Abesan!5e0!3m2!1sen!2sng!4v1731442546579!5m2!1sen!2sng" className='w-[80vw] md:w-[90vw] h-[600px] md:h-[400px] '  style={{border:0, }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default map