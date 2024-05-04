import React from "react";
import data from "./data";

function Box(props){
    return(
        <div className="pic"><img src={props.image} alt="" /></div>
    )
}

export default function Gallery(){
    
    const pic = data.map(picture => {
        return(
            <Box {...picture}/>
        )
    
    })
    return(
        <div className="gallery">
            <h1>Gallery</h1>
            <marquee>

                <div className="photos">
                    {pic}  
                </div>
                
            </marquee>
            
        </div>
    )
}