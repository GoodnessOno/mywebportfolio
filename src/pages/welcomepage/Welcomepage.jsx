import React from 'react'
import './welcomepage.css'
import img from '../../assets/aigenerated image.png'
import logo from '../../assets/GOODNESS ONONOGBU LOGO.png'
import { Link } from 'react-router-dom'

const Welcomepage = () => {
  return (
    <div className='welcomepage'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='welcomepage-content'>
        <div className='welcomepage-greeting'>
        <h1>Hi, My name is Goodness.</h1>
        <p><b><i>Ethical Hacker | Securing Autonomous & IoT Systems in the Aviation & Maritime Sectors</i></b></p>
        <br />
        <p>Welcome to my portfolio! <i>I'm an Ethical Hacker</i> with an interest in creating and securing sustainable autonomous and IoT solutions in the Aviation and Maritime industry through Artificial Intelligence. 
        Here, you'll find examples of my work showcasing world standard techniques and processes in securing network, hardware and software applications as well as company infrastructures. 
        <br />
        <br />
        Click on the <b>GET STARTED BUTTON</b> below to get a glimpse of how I secure smart and non-smart infrastructures</p>
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
