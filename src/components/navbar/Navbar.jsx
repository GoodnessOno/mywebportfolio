import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/GOODNESS ONONOGBU LOGO.png'

const Menu = () => (
    // eslint-disable-next-line react/jsx-key
    (
      <>
        <p><a href="/">Welcomepage</a></p>
        <p><a href="/homepage">Homepage</a></p>
        <p><a href="/aboutme">About-me</a></p>
        <p><a href="/projects">Projects</a></p>
        <p><a href="/blog">Blog</a></p>
        <p><a href="/contactme">Contact-me</a></p>
      </>
    )
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                        <div className="navbar-menu-container-links">
                            <Menu />
                        </div>
                )}
            </div> 
    </div>
  )
}

export default Navbar
