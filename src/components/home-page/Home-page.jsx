import React from 'react'
import Hero from './hero'
import About from './about'
import Services from './services'
import CTA from './CTA'

function homePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <CTA />
    </div>
  )
}

export default homePage
