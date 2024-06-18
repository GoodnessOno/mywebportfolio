import React from 'react'
import './aboutme.css'
import { Navbar, Header, Footer, Aiproject, Sustainabilityproject, Technologyproject, Contactform } from '../../components'
import myimg from '../../assets/TMF PERSONAL POTRAIT.jpg'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

const Aboutme = () => {
  return (
    <div className='aboutme'>
      <Navbar />
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='aboutme-container'>
      <div className='aboutme-item'>
      <h1>About Me</h1>
      <p className='aboutme-item'>
      Welcome to my world of innovation, impact, and interdisciplinary expertise! 
      I am Goodness Ononogbu, a passionate software developer with a current focus on front-end development, an advocate for sustainability, and a dedicated supporter of the United Nations Sustainable Development Goals (SDGs). 
      With a unique blend of technical prowess and legal insight, I am committed to driving positive change through technology. 
      My journey has led me to develop pioneering solutions like GoalsAlly and an AI-powered UX improvement tool, all while leveraging my legal background to navigate the complexities of tech development and sustainability. 
      Join me as I strive to blend technology, purpose, and legal acumen, driving positive change one project at a time.
      <br />
      In addition to my technical and sustainability-focused endeavors, I hold a law degree that enriches my approach to technology and innovation. 
      My legal education has equipped me with a deep understanding of regulatory landscapes, intellectual property rights, and ethical considerations. 
      This unique combination of skills allows me to navigate the intricate legal challenges that arise in tech development, ensuring that my projects are not only cutting-edge but also legally sound and ethically responsible.
      </p>
      </div>
      <div className='aboutme-item'>
        <img src={myimg} alt="Goodness Ononogbu" />
      </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Technologyproject />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Sustainabilityproject />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Aiproject />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='aboutme-work'>
        <h4>
          I am open to software development, artificial intelligence and un sdg projects.
          Kindly reach out if you are interested in working with me on any project of these sorts or colloborating with me on any of my projects
        </h4>
        <ul className='social-links'>
          <li>
            <a href="mailto:ononogbugoodness@gmail.com" target='_blank' rel='noopener noreferrer'><BiLogoGmail />EMAIL</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/goodness-ononogbu-aicmc/" target='_blank' rel='noopener noreferrer'><IoLogoLinkedin />LINKEDIN</a>
          </li>
          <li>
            <a href="https://github.com/GoodnessOno" target='_blank' rel='noopener noreferrer'><IoLogoGithub />GITHUB</a>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <Contactform />
      <Footer />
    </div>
  )
}

export default Aboutme
