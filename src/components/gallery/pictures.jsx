import React from 'react'
import { images } from './constants';
import { useState, useEffect } from 'react';

const pictures = () => {
    const [categorizedImages, setCategorizedImages] = useState({
        ratio45: [],
        ratio32: [],
      });

      
    
      useEffect(() => {
        
        
        const categorizeImages = async () => {
          const ratio45 = []
          const ratio32 = []

          
          // Iterate over imported images
          for (const path in images) {
            const img = new Image();
            img.src = images[path].default;
            
            await new Promise((resolve) => {
              img.onload = () => {
                const { width, height } = img;
                
                
                if (width / height == 1.5) {
                  ratio32.push(img.src);
                }else {
                  ratio45.push(img.src);
                }
                resolve();
              };
            });
          }
          
          setCategorizedImages({ ratio45, ratio32 });
        };
        ;
        
        categorizeImages();
      }, []);
      
  return (
    <div className='bg-white py-3 space-y-3'>

        <div className='grid grid-cols-3 md:grid-cols-1 gap-2'>
            {categorizedImages.ratio45.map((item, index)=>(
                <img src={item} alt="" className='w-full' key={index}/>
            ))}
        </div>
        <div className='grid grid-cols-3 md:grid-cols-1 gap-2'>
            {categorizedImages.ratio32.map((item, index)=>(
                <img src={item} alt="" className='w-full' key={index}/>
            ))}
        </div>
      
    </div>
  )
}

export default pictures
