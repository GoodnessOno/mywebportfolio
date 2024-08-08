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
          Unlock a treasure trove of knowledge in the "BLOG SECTION" by clicking on any of the 'CONTINUE READING' links below in the latest blog section. May your discoveries be fruitful!
          <br />
          <br />
          <b><i>Your journey through <b>MY PORTFOLIO</b> awaits.</i></b>
        </pre>
      <div className='aboutsection-img'>
        <img src={myimg} alt="myimg" />
      </div>
      <div className='aboutsection-content'>
        <p>
          <strong>Welcome to My Portfolio</strong>
          <br />
          <br />
          Thank you for visiting! I am Goodness, a growth havker and front-end developer with a keen interest and skills in artificial intelligence. 
          Within these digital walls, you'll discover a showcase of my expertise in crafting visually stunning and seamlessly functional web experiences and growth strategies.
          With a meticulous eye for detail and a passion for innovation, I specialize in translating concepts into captivating interfaces that leave a lasting impression. 
          My journey in growth hacking and front-end development is complemented by a deep fascination with the potential of AI, driving me to explore new realms of possibility in the digital and startup landscape.
          By combining cutting-edge technology with elegant design principles, I strive to elevate companies and user experiences to new heights. Each project represents a unique opportunity to push boundaries, solve complex challenges, and exceed expectations.
          Curious to learn more about the mind behind the code? Click the <strong>"About Me"</strong> button below to delve into my professional background, skill set, and the values that drive my work. Let's connect and explore how we can collaborate to bring your vision to life.
          <br />
          <br />
        </p>
        <div className='aboutsection-button scale-up-center'>
          <Link to="/aboutme">
            <button>CLICK HERE TO KNOW MORE ABOUT ME</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Aboutsection
