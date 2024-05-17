import React from 'react'
import './blogheader.css'
import blogimg from '../../assets/blog header image.png'

const Blogheader = () => {
  return (
    <div className='blogheader'>
      <img src={blogimg} alt="blogimg" />
    </div>
  )
}

export default Blogheader
