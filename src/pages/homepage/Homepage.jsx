import React from 'react'
import './homepage.css'
import { Header, Navbar, Contactsection, Aboutsection, Skills, Sidebar, Projectsshowcase, Resume, Footer, Scrolltotopbutton, Scrolltobottombutton } from '../../components'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <Header />
      <Aboutsection />
      <div className='homepage-side'>
        <div className='homepage-side-skills'>
        <Skills />
        </div>
        <div className='homepage-side-projects'>
        <Projectsshowcase />
        </div>
        <div className='homepage-side-sidebar'>
        <Sidebar />
        </div>
      </div>
      <Resume />
      <Contactsection />
      <Scrolltotopbutton />
      <Scrolltobottombutton />
      <Footer />
      do some animations to make homepage interactive. MAKE IT INTERACTIVE. Arrows to go back to the top, brief interlude of animations.
    </div>
  )
}

export default Homepage
