import React from 'react'
import Hero from './hero'
import Upcoming from './upcoming'
import Latest from './latest'

const news = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Upcoming />
    </div>
  )
}

export default news
