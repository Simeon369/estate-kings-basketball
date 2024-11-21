import React from 'react'
import HomePage from './components/home-page/Home-page'
import AboutPage from './components/about/AboutPage'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact-page/Contact'
import Players from './components/players/Players'
import Header from './components/header'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from "react";

export const MyContext = createContext()



function app() {
  const [menu, setMenu] = useState(false)
  const [onScreenPage, setOnScreenPage] = useState({
    home: true,
    about: false,
    players: false,
    gallery: false
  })
  
  return (
    <div className={`relative w-full h-screen ${menu ? 'overflow-hidden' : 'overflow-auto'}`}>
    <MyContext.Provider value={ {menu, setMenu, onScreenPage, setOnScreenPage} }>
      
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/players' element={<Players />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        
        <Footer />
     

      

    </MyContext.Provider>
    </div>
  )
}

export default app
