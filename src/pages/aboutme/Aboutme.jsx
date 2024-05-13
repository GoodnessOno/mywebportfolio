import React from 'react'
import './aboutme.css'
import myimg from '../../assets/TMF PERSONAL POTRAIT.jpg'
import { Navbar } from '../../components'

const Aboutme = () => {
  return (
    <div className='aboutme'>
      <Navbar />
      <div>
        <div className='aboutme-animation'>
        DO SOME ANIMATIONS THAT SHOWCASES ALL YOUR SKILLS AND SUMMARISES WHAT YOU'RE ABOUT
        </div>
        <div className='aboutme-img'>
        <img src={myimg} alt="myimg" />
        </div>
      </div>
      <div>
        <h1>SKILLS</h1>
        <p>For each skill, do a live showcase</p>
      </div>
    </div>
  )
}

export default Aboutme
