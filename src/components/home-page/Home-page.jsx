import React from 'react'
import Hero from './hero'
import About from './about'
import Services from './services'
import CTA from './CTA'
import Testimonials from './testimonial'
import Footer from '../footer'

function homePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default homePage
