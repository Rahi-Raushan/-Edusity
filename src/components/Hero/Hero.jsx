import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world.</h1>
        <p>Our cutting-edge curriculum and experienced teachers help students achieve their full potential, while our personalized learning approach ensures that each student receives the support they need to succeed.</p>
        <button className='btn'>Explore more<img src={dark_arrow} alt='arrow'/></button>
      </div>
    </div>
  )
}

export default Hero
