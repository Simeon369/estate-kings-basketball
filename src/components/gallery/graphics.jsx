import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Graphics = () => {
  
  const [categorizedImages, setCategorizedImages] = useState({
    ratio45: [],
    ratio32: [],
  });

  useEffect(() =>{
    
        const fetchGallery = async () =>{
            try{
                const response = await axios.get(
                    "https://strapi-ddjt.onrender.com/api/galleries?populate=*"
                )
                
                
                const data = response.data.data.map((item) => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    imageUrl: item.image.url,
                }));

                const ratio45 = []
                const ratio32 = []

                for (const path in data) {
                  
                  const img = new Image();
                  img.src = `https://estate-kings-basketball-backend.onrender.com${data[path].imageUrl}`;
            
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
                
                
                
                
            }catch (error) {
                console.error("Error fetching gallery data:", error);
                
            }
        }

        fetchGallery()
        
        
    }, [])
     

    
    
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

export default Graphics
