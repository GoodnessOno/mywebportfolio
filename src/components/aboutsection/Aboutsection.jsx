import React from 'react'
import './aboutsection.css'
import myimg from '../../assets/TMF PERSONAL POTRAIT.jpg'
import { Link } from 'react-router-dom'
import { BsEmojiSunglassesFill } from "react-icons/bs";


const Aboutsection = () => {
  return (
    <div className='aboutsection'>
      <pre className='aboutsection-code'><b>Hello World!</b> <b><i>Unit Online and Operational speaking!</i></b> 
          <br />
          Welcome to my website!!!<BsEmojiSunglassesFill /> Your mission, should you choose to accept it, is to explore! 
          <br />
          Initiate exploration in the "ABOUT ME SECTION" by clicking the shimmering green portal below.
          <br />
          Unlock a treasure trove of knowledge in the "BLOG SECTION" by clicking the golden key icon below. May your discoveries be fruitful!
          <br />
          <br />
          <b><i>Your journey through <b>MY PORTFOLIO</b> awaits.</i></b>
        </pre>
      <div className='aboutsection-img'>
        <img src={myimg} alt="myimg" />
      </div>
      <div className='aboutsection-content'>
        <p>
         
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
