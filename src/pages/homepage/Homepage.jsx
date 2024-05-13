import React from 'react'
import './homepage.css'
import { Header, Navbar, Contactsection, Aboutsection, Skills, Projectsshowcase, Resume, Footer, Scrolltotopbutton, Scrolltobottombutton } from '../../components'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <Header />
      <Aboutsection />
      <Skills />
      <Resume />
      <Projectsshowcase />
      <Contactsection />
      <Scrolltotopbutton />
      <Scrolltobottombutton />
      <Footer />
      do some animations to make homepage interactive. MAKE IT INTERACTIVE. Arrows to go back to the top, brief interlude of animations.
    </div>
  )
}

export default Homepage
