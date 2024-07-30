import React from 'react'
import './growthhacking.css'
import { Navbar, Footer, Growthstrategies } from '../../components'
import headerimage from '../../assets/growth header video.mp4'

const Growthhacking = () => {
  return (
    <div className='growthhacking'>
      <Navbar />
      <video className='growthhacking-video' autoPlay muted loop>
        <source src={headerimage} type="video/mp4" />
      </video>
      <h1>Growth Hacking</h1>
      <Growthstrategies />
      <Footer />
    </div>
  )
}

export default Growthhacking
