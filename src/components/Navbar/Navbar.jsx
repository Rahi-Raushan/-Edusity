import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 400 ? setSticky(true) : setSticky(false)
    })
  })

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
      <img src={logo} alt="Logo" className="logo" />
       <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>About</Link></li>
        <li><Link to='program' smooth={true} offset={-290} duration={500} onClick={toggleMenu}>Program</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-310} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link  to='campus' smooth={true} offset={-470} duration={500} onClick={toggleMenu}>Campus</Link></li>
        <li><button className="btn"><Link to='contact' smooth={true} offset={-250} duration={500} onClick={toggleMenu}>Contact Us</Link></button></li>
        </ul>
        <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
