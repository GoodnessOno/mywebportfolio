import React from 'react'
import './welcomepage.css'
import img from '../../assets/aigenerated image.png'
import logo from '../../assets/GOODNESS ONONOGBU LOGO.png'
import { Link } from 'react-router-dom'

const Welcomepage = () => {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='welcomepage-content'>
        <div className='welcomepage-greeting'>
        <h1>Hi, My name is Goodness.</h1>
        <p>I transform designs into <b>SEEMLESS EXPERIENCES</b></p>
        <br />
        <p>Welcome to my portfolio! <i>I'm a front-end developer</i> with an interest in integrating AI into digital experiences. 
        Here, you'll find examples of my work showcasing intuitive user interfaces and artificial intelligence. 
        <br />
        <br />
        Click on the <b>GET STARTED BUTTON BELOW </b> to experience how design and technology intersect to create seamless online interactions.</p>
        <br />
        <div className='welcomepage-button'>
          <Link to="/homepage">
          <button className='rotate-scale-up scale-up-center'>GET STARTED</button>
          </Link>
        </div>
        </div>
      <div className='welcomepage-image'>
        <img src={img} alt="img" />
      </div>
      </div>
    </div>
  )
}

export default Welcomepage
