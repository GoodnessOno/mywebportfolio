import React from 'react'
import './goalsally.css'
import logo from '../../assets/GOALS ALLY LOGO.png'
import { IoLogoGithub } from "react-icons/io";

const Goalsally = () => {
  return (
    <div className='goalsally-container'>
      <div className='goalsally-item'>
        <strong><h1>GoalsAlly</h1></strong>
      </div>
      <div className='goalsally-item'>
        <img src={logo} alt="goalsally" />
      </div>
      <div className='goalsally-item'>
        <h2>GoalsAlly</h2>
        <h3>Join Forces, Succeed</h3>
        <p>
            GoalsAlly is a software application designed to help organizations, countries and individuals make more contributions, gain more support and track their progress towards sustainability goals. 
            <br />
            It leverages advanced artificial intelligence and machine learning algorithms to track and provide reminders to the un sdgs. 
            <br />
            <br />
            <b>Key Features - </b>
            <li> 1. User verification/authentication</li>
            <li> 2. Goal tracker</li>
            <li> 3. Project Collaborations</li>
            <br />
            <br />
            The idea behind GoalsAlly is a social media application and virtual assistant all for the purpose of the achievement of united nations sustainability development goals.
            Or, if you desire to know more about this software, kindly click on this link to view our live google slides.
            <br />
            <br />
            <li><a href="https://tinyurl.com/goalsally-slides" target="_blank" rel="noopener noreferrer">GoalsAlly Software</a></li>
            <li><a href="https://github.com/GoodnessOno/goalsallysdgapp" target="_blank" rel="noopener noreferrer"><IoLogoGithub />GoalsAlly Github Repository</a></li>
        </p>
        <h3>Technologies used - Javascript, ReactJS, Python, HTML, CSS, ExpressJS</h3>
      </div>
    </div>
  )
}

export default Goalsally
