import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <div className='resume'>
      <div className='resume-header'>
      <h1>
        LINK TO MY RESUME
      </h1>
      </div>
      <div className='resume-link'>
        <button className='scale-up-center'>
        <a href="https://tinyurl.com/goodnessononogbu-frontend" target='_blank' rel='noopener noreferrer'>CLICK HERE TO VIEW AND DOWNLOAD MY RESUME</a>
        </button>
      </div>
    </div>
  )
}

export default Resume
