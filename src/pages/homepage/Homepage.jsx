import React from 'react'
import './homepage.css'
//import { Canvas } from "@react-three/fiber"
import { Header, Navbar, Aboutsection, Skills, Projectsshowcase, Resume, Footer, Scrolltotopbutton, Scrolltobottombutton, /*Lineanimation*/ } from '../../components'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <div className='homepage-header'>
      <Header />
      </div>
      <div className='homepage-about'>
      <Aboutsection />
      </div>
      { /* <>
        <section>
          <Canvas>
            <pointLight position={[10, 10, 10]} />
            <ambientLight />
            <Lineanimation position={[-1.2, 0, 0]} />
            <Lineanimation position={[-1.2, 0, 0]} />
          </Canvas>
        </section>
      </> */}
      <div className='homepage-side'>
        <div className='homepage-side-skills'>
        <Skills />
        </div>
        <div className='homepage-side-projects'>
        <Projectsshowcase />
        </div>
      </div>
      <div className='homepage-resume'>
        <Resume />
      </div>
      <Scrolltotopbutton />
      <Scrolltobottombutton />
      <div className='homepage-footer'>
      <Footer />
      </div>
    </div>
  )
}

export default Homepage
