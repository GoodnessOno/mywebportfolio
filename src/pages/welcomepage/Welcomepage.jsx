import React from 'react'
import './welcomepage.css'
import img from '../../assets/aigenerated image.png'
import logo from '../../assets/GOODNESS ONONOGBU LOGO.png'

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
        <p>Welcome to my portfolio! <i>I'm a front-end developer</i> with an interest in integrating AI into digital experiences. 
        Here, you'll find examples of my work showcasing intuitive user interfaces and artificial intelligence. 
        <br />
        <br />
        Click on the <b>GET STARTED BUTTON BELOW </b> to experience how design and technology intersect to create seamless online interactions.</p>
        <div className='welcomepage-button'>
          <button>GET STARTED</button>
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
