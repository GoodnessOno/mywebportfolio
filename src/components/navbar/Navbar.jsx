//import React, { useState } from 'react'
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
//import logo from '../../assets/GOODNESS ONONOGBU LOGO.png'

const Menu = () => {
  <>
    <p><a href="/">Welcomepage</a></p>
    <p><a href="/homepage">Homepage</a></p>
    <p><a href="/aboutme">About-me</a></p>
    <p><a href="/projects">Projects</a></p>
    <p><a href="/blog">Blog</a></p>
    <p><a href="#contactme">Contact-me</a></p>
  </>
}
const Navbar = () => {
  //const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
      <Menu />
      </div>
    </div>
  )
}

export default Navbar
