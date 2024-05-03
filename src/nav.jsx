import React from "react"
import logo from "./assets/images/kings-logo.png" 
import menu from "./assets/images/menu-outline.svg"

export default function Nav() {
    return(
        <nav>

        <a href=""><img src={logo} alt="" className="logo" /></a>
        <a href=""><img src={menu} alt=""  className="logo" id="menu"/></a>
        
        </nav>
    )
}