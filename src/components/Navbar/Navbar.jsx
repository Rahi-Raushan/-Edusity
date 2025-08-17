import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 800 ? setSticky(true) : setSticky(false)
    })
  })

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
      <img src={logo} alt="Logo" className="logo" />
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Program</li>
        <li>Testimonials</li>
        <li>Campus</li>
        <li><button className="btn">Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
