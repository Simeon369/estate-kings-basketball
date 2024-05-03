import React from "react";
import logo from "./assets/images/kings-logo.png";

export default function Home(){
    return(
        <div className="home" id="home">
            <div>
                <div className="hero">
                    <h1>AMONGST MEN, WE ARE <p>KINGS</p>
                    <img src={logo} alt="" className="logo" />
                    </h1>
                </div>

                <a href=""><h3>EXPLORE OUR KINGDOM</h3></a>
            </div>
            
        </div>
    )
   
    
}