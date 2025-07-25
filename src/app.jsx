import React from 'react'
import HomePage from './components/home-page/Home-page'
import AboutPage from './components/about/AboutPage'
import Gallery from './components/gallery/Gallery'
import Enroll from './components/enroll/enroll'
import Players from './components/players/Players'
import PlayerInfo from './components/players/player-info'
import Header from './components/header'
import Footer from './components/footer'
import News from './components/news/news'
import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from "react";

export const MyContext = createContext()



function app() {
  const [menu, setMenu] = useState(false)
  const [onScreenPage, setOnScreenPage] = useState({
    home: false,
    about: false,
    players: false,
    news: false,
    gallery: false,
    enroll: false
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
          <Route path='/news' element={<News />}/>
          <Route path='/player-info' element={<PlayerInfo />}/>
          <Route path='/enroll' element={<Enroll />}/>
        </Routes>
        
        <Footer />
     

      

    </MyContext.Provider>
    </div>
  )
}

export default app
