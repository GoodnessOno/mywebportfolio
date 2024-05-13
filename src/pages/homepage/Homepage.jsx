import React from 'react'
import './homepage.css'
import { Header, Navbar, Contactsection, Aboutsection, Skills, Projectsshowcase, Resume, Footer } from '../../components'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutsection />
      <Skills />
      <Resume />
      <Projectsshowcase />
      <Contactsection />
      <Footer />
      do some animations to make homepage interactive. MAKE IT INTERACTIVE. Arrows to go back to the top, brief interlude of animations.
    </div>
  )
}

export default Homepage
