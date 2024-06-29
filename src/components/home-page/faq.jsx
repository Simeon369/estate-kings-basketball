import React from 'react'
import data from './data/faq-data'
import plus from '../../assets/images/icon-plus.svg'
import minus from '../../assets/images/icon-minus.svg'
import ball from '../../assets/images/favicon.png'


function faq() {

    const [faqState, setFaqState] = React.useState({
      faq1: false,
      faq2: false,
      faq3: false,
      faq4: false,
    })

    const toggleFaq = (faq) => {
      setFaqState((prevState) => ({
        ...prevState,
        [faq]: !prevState[faq],
      }));
    }
    
  return (
    
     <div className='bg-Basketball py-20 flex flex-col items-center gap-10'>
        <h1 className='text-center text-white  text-4xl md:2xl font-bold'>We are here to answer all your Questions.</h1>
        <div className=' bg-white rounded-2xl flex flex-col p-5 pb-0 w-[470px] md:w-[80%]'>
        <div className='flex items-center px-2'>
          <img src={ball} alt="" className='w-10'/>
          <h1 className='ml-4 text-3xl font-bold'>FAQs</h1>
        </div>
        <div className='py-3'>
          {data.map(faq=>(
            <>
              <div className=' flex flex-col p-2 border-b-2 border-gray-100 hover:text-slate-500 cursor-pointer last:border-0' key={faq.index} onClick={()=> toggleFaq(faq.index)}>
                <div className='flex justify-between items-center'>
                  <h3 className='md:text-sm'>{faq.question}</h3>
                <img src={faqState[faq.index] ? minus: plus} alt="" className='w-6 ' />
                </div>
                
                {
                  faqState[faq.index] &&
                  <div className=' text-black py-2 md:text-sm'>
                    {faq.answer}
                  </div>
                }
              </div>
                
            </>
          ))}
        </div>
      </div>
     </div>

      
    
    
  )
}

export default faq