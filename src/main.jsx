import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './nav'
import Home from './home'
import Footer from './footer'
import Gallery from './gallery'
import './index.css'
import './nav.css'
import './home.css'
import './gallery.css'
import './footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <div className="cont">
    <Home />
    <Gallery />
    <Footer />
    </div>
  </React.StrictMode>,
)
