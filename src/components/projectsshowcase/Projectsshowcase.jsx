import React from 'react'
import './projectsshowcase.css'
import { Link } from 'react-router-dom'

const Projectsshowcase = () => {
  return (
    <div className='projectsshowcase'>
      <div className='projectsshowcase-content'>
        <h1>PROJECTS</h1>
      </div>
      <div className='projectsshowcase-button'>
      <Link to='/projects'>
        <button>VIEW MY PROJECTS</button>
      </Link>
      </div>
    </div>
  )
}

export default Projectsshowcase
