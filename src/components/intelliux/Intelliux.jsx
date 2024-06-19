import React from 'react'
import './intelliux.css'
import logo from '../../assets/IntelliUX LOGO.png'
import { IoLogoGithub } from "react-icons/io";

const Intelliux = () => {
  return (
    <div className='intelliux-container'>
      <div className='intelliux-item'>
        <strong><h1>IntelliUX</h1></strong>
      </div>
      <div className='intelliux-item'>
        <img src={logo} alt="intelliux" />
      </div>
      <div className='intelliux-item'>
        <b><i>
        <h2>IntelliUX</h2>
        <h3>Transforming Digital Journeys</h3>
        </i></b>
        
        <p>
            IntelliUX is a cutting-edge solution designed to transform the way users interact with your website.
            <br />
            It leverages advanced artificial intelligence and machine learning algorithms to meticulously track user activities on your website. 
            By analyzing user behavior in real-time, the tool provides actionable feedback and personalized improvement suggestions tailored to enhance the overall user experience.
            <br />
            <br />
            <b>Key Features - </b>
            <li> 1. Real-Time Activity Tracking</li>
           <li> 2. Intelligent Feedback</li>
            <li> 3. Personalized Improvement Suggestions</li>
            <li> 4. Continuous Learning</li>
            <br />
            <br />
            The idea behind IntelliUX is born out of the need to aid developers put software users first, though still in its development stage, you can click on the link below to view the github repository.
            Or, if you desire to know more about this software, kindly click on this link to view our live google slides.
            <br />
            <br />
            <li><a href="https://tinyurl.com/IntelliUX" target="_blank" rel="noopener noreferrer">IntelliUX Software</a></li>
            <li><a href="https://github.com/GoodnessOno/ux-improvement-tool" target="_blank" rel="noopener noreferrer"><IoLogoGithub />IntelliUX Github Repositiry</a></li>
        </p>
        <h3>Technologies used - Javascript, ReactJS, Python, HTML, CSS, ExpressJS</h3>
      </div>
    </div>
  )
}

export default Intelliux
