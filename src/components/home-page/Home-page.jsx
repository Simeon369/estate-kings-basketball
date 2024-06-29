import React from 'react'
import Hero from './hero'
import About from './about'
import Services from './services'
import CTA from './CTA'
import Testimonials from './testimonial'
import FAQ from './faq'
import Sponsors from './sponsors'
import Footer from '../footer'


function homePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <CTA />
      <Testimonials />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default homePage
