import React from 'react'
import './header.css'
import headervideo from '../../assets/WEB VIDEO.mp4'

const Header = () => {
  return (
    <div className='header'>
        <video 
        src={headervideo} 
        type="video/mp4"
        autoPlay
        loop
        muted
        ></video>
    </div>
  )
}

export default Header;
