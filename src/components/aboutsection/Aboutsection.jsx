import React from 'react'
import './aboutsection.css'
import myimg from '../../assets/TMF PERSONAL POTRAIT.jpg'
import { Link } from 'react-router-dom'

const Aboutsection = () => {
  return (
    <div className='aboutsection'>
      <div className='aboutsection-img'>
        <img src={myimg} alt="myimg" />
      </div>
      <div className='aboutsection-content'>
        <h1>GOODNESS ONONOGBU</h1>
        <p>
          Hello World! // add code design
          <br />
          <br />
          Frontend developer, building my skills to become a full stack software developer.
          <br />
          <br />
        </p>
        <div className='aboutsection-button'>
          <Link to="/aboutme">
            <button>ABOUT ME</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Aboutsection
