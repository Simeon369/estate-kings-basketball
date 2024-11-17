import React from 'react'
import image from '../../assets/images/goa-abesan2.jpg'

function contact() {

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData);
    }

  return (
    <div className='flex py-14 justify-center items-center px-5 bg-white' id='contact'>
        
        <img src={image} className='w-[400px] md:hidden rounded-tl-3xl rounded-bl-3xl' alt="" />
        
        <div className=' space-y-4 min-h-[600px] w-[400px] md:w-[90%] rounded-tr-3xl rounded-br-3xl md:rounded-3xl bg-Basketball p-8  text-white'>
          <h3 className='uppercase font-semibold text-subordinate text-sm'>contact us</h3>
          <h1 className='font-bold text-4xl'>Get In Touch</h1>
          <p className='text-sm w-[85%]'>We support businesses through periods of expansion, succession, and all other important transactions.</p>

          <form action="" method="post" onSubmit={handleSubmit} className='flex flex-col items-start gap-3'>
            <input type="text" className='contact-input' name='name' onChange={handleChange} value={formData.name}  required placeholder='Name'  />
            <input type="email" className='contact-input' name='email' value={formData.email} onChange={handleChange} required placeholder='Email' />
            <input type="tel" className='contact-input'  name='phone' value={formData.phone} onChange={handleChange} required placeholder='Phone'/>
            <textarea id="" rows={5} name='message' className=' w-full px-3 py-2 outline-none text-black'   value={formData.message} onChange={handleChange} required placeholder='Write your message'></textarea>
            <button type='submit' className='bg-white  px-7 py-3 font-semibold text-neutral-800 text-sm mt-5 rounded-lg'>Send a message</button>
          </form>
        </div>
    </div>
  )
}

export default contact