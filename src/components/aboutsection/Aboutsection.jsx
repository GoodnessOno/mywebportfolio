import React from 'react'
import './aboutsection.css'
import myimg from '../../assets/TMF PERSONAL POTRAIT.jpg'
import { Link } from 'react-router-dom'



const Aboutsection = () => {
  return (
    <div className='aboutsection'>
      <div className='aboutsection-code'>
        <p><i><b>Cybersecurity Specialist specializing in Ethical Hacking, and Securing Autonomous & IoT Systems in the Aviation and Maritime Sectors</b></i></p>
      </div>
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
